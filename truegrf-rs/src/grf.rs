use serde::{Serialize, Deserialize};
use std::collections::HashMap;

mod png;

#[derive(Serialize, Deserialize, Debug, Default)]
struct NewGRFGeneric {
    name: String,
    description: String,
}

#[derive(Serialize, Deserialize, Debug, Default)]
struct NewGRFNodeData {
    value: Option<String>,
}

#[allow(non_snake_case)]
#[derive(Serialize, Deserialize, Debug, Default)]
struct NewGRFNode {
    id: String,
    r#type: Option<String>,
    data: Option<NewGRFNodeData>,
    source: Option<String>,
    sourceHandle: Option<String>,
    target: Option<String>,
    targetHandle: Option<String>,
}

#[allow(non_snake_case)]
#[derive(Serialize, Deserialize, Debug, Default)]
struct NewGRFSprite {
    base64Data: String,
    width: u16,
    height: u16,
    top: i16,
    left: i16,
}

#[derive(Serialize, Deserialize, Debug, Default)]
struct NewGRFIndustryTile {
    sprite: NewGRFSprite,
}

#[allow(non_snake_case)]
#[derive(Serialize, Deserialize, Debug, Default)]
struct NewGRFIndustryPrimary {
    cargoLabel: String,
    multiplier: u8,
}

#[allow(non_snake_case)]
#[derive(Serialize, Deserialize, Debug, Default)]
struct NewGRFIndustrySecondaryAcceptance {
    cargoLabel: String,
}

#[allow(non_snake_case)]
#[derive(Serialize, Deserialize, Debug, Default)]
struct NewGRFIndustrySecondaryProduction {
    cargoLabel: String,
    multiplier: Vec<u16>,
}

#[allow(non_snake_case)]
#[derive(Serialize, Deserialize, Debug, Default)]
struct NewGRFIndustrySecondary {
    acceptance: Vec<NewGRFIndustrySecondaryAcceptance>,
    production: Vec<NewGRFIndustrySecondaryProduction>,
}

#[allow(non_snake_case)]
#[derive(Serialize, Deserialize, Debug, Default)]
struct NewGRFIndustryTertiary {
    cargoLabel: String,
}

#[allow(non_snake_case)]
#[derive(Serialize, Deserialize, Debug, Default)]
struct NewGRFIndustry {
    id: u8,
    available: bool,
    name: String,
    r#type: String,
    layout: Vec<Vec<Vec<u32>>>,
    primary: Option<Vec<NewGRFIndustryPrimary>>,
    secondary: Option<NewGRFIndustrySecondary>,
    tertiary: Option<Vec<NewGRFIndustryTertiary>>,
    placement: String,
    placementCustom: Vec<NewGRFNode>,
    tiles: Vec<NewGRFIndustryTile>,
}

#[derive(Serialize, Deserialize, Debug, Default)]
struct NewGRFCargo {
    id: u8,
    available: bool,
    name: String,
    unit: String,
    label: String,
}

#[derive(Serialize, Deserialize, Debug, Default)]
pub struct NewGRFOptions {
    generic: NewGRFGeneric,
    cargoes: Vec<NewGRFCargo>,
    industries: Vec<NewGRFIndustry>,
}


fn write_pseudo_sprite(output: &mut Vec<u8>, data: &[&[u8]]) {
    let mut len = 0;
    for d in data {
        len += (*d).len();
    }

    output.extend(len.to_le_bytes());
    output.extend(&[0xff]);
    for d in data {
        output.extend(*d);
    }
}

fn write_real_sprite(output: &mut Vec<u8>, sprites: &mut Vec<Vec<u8>>, sprite: &NewGRFSprite) {
    let sprite_num = sprites.len() as u32 + 1;

    /* Write a reference to the sprite segment. */
    output.extend(&(4 as u32).to_le_bytes());
    output.extend(&[0xfd]);
    output.extend(sprite_num.to_le_bytes());

    let data = &png::lz77_encode(&png::convert_png_to_palette(&sprite.base64Data));

    let len = data.len();
    let mut sprite_data = Vec::new();

    /* Header of the realsprite. */
    let header: &[&[u8]] = &[&sprite_num.to_le_bytes(), &(len as u32 + 10).to_le_bytes(), b"\x04\x00", &sprite.height.to_le_bytes(), &sprite.width.to_le_bytes(), &sprite.left.to_le_bytes(), &sprite.top.to_le_bytes()];
    for d in header {
        sprite_data.extend(*d);
    }

    sprite_data.extend(data);

    sprites.push(sprite_data);
}

fn write_store_string(output: &mut Vec<u8>, string_counter: &mut u16, feature: u8, string: &str) -> u16 {
    let mut parsed_string = string.to_string();
    parsed_string = parsed_string.replace("{SIGNED_WORD}", "\x7c");

    write_pseudo_sprite(output, &[b"\x04", &[feature], b"\xff\x01", &string_counter.to_le_bytes(), parsed_string.as_bytes(), b"\x00"]);
    *string_counter += 1;
    *string_counter - 1
}

fn traverse_nodes(cb: u16, output: &mut Vec<u8>, current_node: &NewGRFNode, nodes: &HashMap<String, &NewGRFNode>, reverse: &HashMap<(String, String), String>) {
    match current_node.r#type.clone().unwrap().as_str() {
        "output" => {
            let mut body_output = Vec::new();
            let node = nodes[&reverse[&(current_node.id.clone(), "".to_string())]];
            traverse_nodes(cb, &mut body_output, node, nodes, reverse);

            write_pseudo_sprite(output, &[b"\x02\x0a", &[cb as u8], b"\x89", &body_output, b"\x01\x00\x84\x00\x00\x00\x00\xff\xff\xff\x7f\x02\x84"]);
        }
        "compare" => {
            let mut left_output = Vec::new();
            let left_node = nodes[&reverse[&(current_node.id.clone(), "a".to_string())]];
            traverse_nodes(cb, &mut left_output, left_node, nodes, reverse);

            let mut right_output = Vec::new();
            let right_node = nodes[&reverse[&(current_node.id.clone(), "b".to_string())]];
            traverse_nodes(cb, &mut right_output, right_node, nodes, reverse);

            if let Some(d) = &current_node.data {
                if let Some(v) = &d.value {
                    match v.as_str() {
                        "gt" => {
                            left_output[1] = 0x20;
                            output.extend(left_output);
                            output.extend(b"\x01"); // Subtract
                            output.extend(right_output);
                        },
                        "lt" => {
                            right_output[1] = 0x20;
                            output.extend(right_output);
                            output.extend(b"\x01"); // Subtract
                            output.extend(left_output);
                        },
                        _ => {}
                    }
                }
            }
        },
        "variable" => {
            if let Some(d) = &current_node.data {
                if let Some(v) = &d.value {
                    match v.as_str() {
                        "distance-to-town" => {
                            output.extend(b"\x89\x00\xff\x00\x00\x00");
                        },
                        _ => {}
                    }
                }
            }
        },
        "number" => {
            if let Some(d) = &current_node.data {
                if let Some(v) = &d.value {
                    output.extend(b"\x1a\x00");
                    output.extend(v.parse::<u32>().unwrap().to_le_bytes());
                }
            }
        },
        _ => {}
    }
}

fn write_segments(output: &mut Vec<u8>, sprites: &mut Vec<Vec<u8>>, options: NewGRFOptions) {
    let mut string_counter: u16 = 0xdc00;

    /* TODO -- Amount of sprites in the file; ignored by OpenTTD. */
    write_pseudo_sprite(output, &[b"\x02\x00\x00\x00"]);

    /* Action14 - Set palette to Default. */
    write_pseudo_sprite(output, &[b"\x14CINFOBPALS\x01\x00D\x00\x00"]);
    /* Action8 - GRF metadata */
    write_pseudo_sprite(output, &[b"\x08\x08TRU1", options.generic.name.as_bytes(), b"\x00", options.generic.description.as_bytes(), b"\x00"]);

    /* Disable all default cargoes. */
    for cargo_id in 0..=11 {
        write_pseudo_sprite(output, &[b"\x00\x0b\x01\x01", &[cargo_id], b"\x08\xff"]);
        write_pseudo_sprite(output, &[b"\x00\x0b\x01\x01", &[cargo_id], b"\x17\x00\x00\x00\x00"]);
    }

    /* Disable all default industries. */
    for industry_id in 0..36 {
        write_pseudo_sprite(output, &[b"\x00\x0a\x01\x01", &[industry_id], b"\x08\xff"]);
    }

    /* Create CTT, which is just an iteration of the cargoes. */
    let mut ctt_output = Vec::new();
    let mut ctt = HashMap::new();
    for (cargo_id, cargo) in options.cargoes.iter().enumerate() {
        ctt_output.extend(cargo.label.as_bytes());
        ctt.insert(cargo.label.clone(), cargo_id);
    }
    write_pseudo_sprite(output, &[b"\x00\x08\x01", &[options.cargoes.len() as u8], b"\x00\x09", &ctt_output]);

    for cargo in &options.cargoes {
        if !cargo.available {
            continue;
        }

        write_pseudo_sprite(output, &[b"\x00\x0b\x01\x01", &[cargo.id], b"\x08", &[cargo.id]]);
        write_pseudo_sprite(output, &[b"\x00\x0b\x01\x01", &[cargo.id], b"\x17", cargo.label.as_bytes()]);

        let name_string_id = write_store_string(output, &mut string_counter, 0x0b, &cargo.name);
        write_pseudo_sprite(output, &[b"\x00\x0b\x01\x01", &[cargo.id], b"\x09", &name_string_id.to_le_bytes()]);

        let unit_string_id = write_store_string(output, &mut string_counter, 0x0b, &cargo.unit);
        write_pseudo_sprite(output, &[b"\x00\x0b\x01\x01", &[cargo.id], b"\x0b", &unit_string_id.to_le_bytes()]);
        write_pseudo_sprite(output, &[b"\x00\x0b\x01\x01", &[cargo.id], b"\x0c", &unit_string_id.to_le_bytes()]);
    }

    for industry in &options.industries {
        if !industry.available {
            continue;
        }

        /* Base the industry on a coal mine. */
        write_pseudo_sprite(output, &[b"\x00\x0a\x01\x01", &[industry.id], b"\x08\x00"]);

        /* Set the name of the industry. */
        let string_id = write_store_string(output, &mut string_counter, 0x0a, &industry.name);
        write_pseudo_sprite(output, &[b"\x00\x0a\x01\x01", &[industry.id], b"\x1f", &string_id.to_le_bytes()]);

        /* Set the industry type. */
        let industry_type: u8 = match industry.r#type.as_str() {
            "tertiary" => 0,
            "primary" => 2,
            "secondary" => 3,
            _ => 0,
        };
        write_pseudo_sprite(output, &[b"\x00\x0a\x01\x01", &[industry.id], b"\x0b", &[industry_type]]);

        if industry.primary.is_some() {
            let primary = industry.primary.as_ref().unwrap();

            let mut primary_production = Vec::new();
            let mut primary_multiplier = Vec::new();
            for primary_item in primary {
                primary_production.extend(ctt[&primary_item.cargoLabel].to_le_bytes());
                primary_multiplier.extend(primary_item.multiplier.to_le_bytes());
            }
            write_pseudo_sprite(output, &[b"\x00\x0a\x01\x01", &[industry.id], b"\x25", &[primary.len() as u8], &primary_production]);
            write_pseudo_sprite(output, &[b"\x00\x0a\x01\x01", &[industry.id], b"\x26\x00"]);
            write_pseudo_sprite(output, &[b"\x00\x0a\x01\x01", &[industry.id], b"\x27", &[primary.len() as u8], &primary_multiplier]);
            write_pseudo_sprite(output, &[b"\x00\x0a\x01\x01", &[industry.id], b"\x28\x00\x00"]);
        }

        if industry.secondary.is_some() {
            let secondary = industry.secondary.as_ref().unwrap();

            let mut secondary_acceptance = Vec::new();
            for acceptance in &secondary.acceptance {
                secondary_acceptance.extend(ctt[&acceptance.cargoLabel].to_le_bytes());
            }

            let mut secondary_production = Vec::new();
            let mut secondary_multiplier = Vec::new();
            for production in &secondary.production {
                secondary_production.extend(ctt[&production.cargoLabel].to_le_bytes());
                for multiplier in &production.multiplier {
                    secondary_multiplier.extend(multiplier.to_le_bytes());
                }
            }

            write_pseudo_sprite(output, &[b"\x00\x0a\x01\x01", &[industry.id], b"\x25", &[secondary.production.len() as u8], &secondary_production]);
            write_pseudo_sprite(output, &[b"\x00\x0a\x01\x01", &[industry.id], b"\x26", &[secondary.acceptance.len() as u8], &secondary_acceptance]);
            write_pseudo_sprite(output, &[b"\x00\x0a\x01\x01", &[industry.id], b"\x27\x00"]);
            write_pseudo_sprite(output, &[b"\x00\x0a\x01\x01", &[industry.id], b"\x28", &[secondary.acceptance.len() as u8], &[secondary.production.len() as u8], &secondary_multiplier]);
        }

        if industry.tertiary.is_some() {
            let tertiary = industry.tertiary.as_ref().unwrap();

            let mut tertiary_acceptance = Vec::new();
            for tertiary_item in tertiary {
                tertiary_acceptance.extend(ctt[&tertiary_item.cargoLabel].to_le_bytes());
            }
            write_pseudo_sprite(output, &[b"\x00\x0a\x01\x01", &[industry.id], b"\x25\x00"]);
            write_pseudo_sprite(output, &[b"\x00\x0a\x01\x01", &[industry.id], b"\x26", &[tertiary.len() as u8], &tertiary_acceptance]);
            write_pseudo_sprite(output, &[b"\x00\x0a\x01\x01", &[industry.id], b"\x27\x00"]);
            write_pseudo_sprite(output, &[b"\x00\x0a\x01\x01", &[industry.id], b"\x28\x00\x00"]);
        };

        if !industry.layout.is_empty() {
            if !industry.tiles.is_empty() {
                write_pseudo_sprite(output, &[b"\x01\x09", &(industry.tiles.len() as u8).to_le_bytes(), b"\x01"]);
                for tile in &industry.tiles {
                    write_real_sprite(output, sprites, &tile.sprite);
                }

                write_pseudo_sprite(output, &[b"\x00\x09\x01\x01", &[industry.id as u8], b"\x08\x00"]);

                let cb_main: u16 = 0xfe;
                let failed_set: u16 = 0xfd;

                /* Number, as invalid return value at the end of the chain. */
                write_pseudo_sprite(output, &[b"\x02\x09", &[failed_set as u8], b"\x89\x0c\x00\x00\x00\xff\xff\x01\x00\x80\x00\x00\x00\x00\x00\x00\x00\x00", &failed_set.to_le_bytes()]);

                for (id, _tile) in industry.tiles.iter().enumerate() {
                    write_pseudo_sprite(output, &[b"\x02\x09", &[id as u8], b"\x00", b"\xe6\x07\x00\x00", &(id as u8).to_le_bytes(), b"\x00\x00\x80", b"\x00\x00\x10\x10\x20"]);
                }

                let mut industry_layout = Vec::new();
                let mut layouts: u8 = 0;

                for layout in &industry.layout {
                    let mut tile_layout = Vec::new();
                    let mut tiles: u8 = 0;

                    for (y, row) in layout.iter().enumerate() {
                        for (x, tile_id) in row.iter().enumerate() {
                            if *tile_id == 0xfd || *tile_id < 0xfe0000 {
                                continue;
                            }

                            tiles += 1;

                            let tile_id = *tile_id - 0xfe0000;
                            /* Jump to tile-id if matches. */
                            tile_layout.extend((tile_id as u16).to_le_bytes());
                            /* Match the exact x/y value. */
                            tile_layout.extend((x as u8).to_le_bytes());
                            tile_layout.extend((y as u8).to_le_bytes());
                            tile_layout.extend(b"\x00\x00");
                            tile_layout.extend((x as u8).to_le_bytes());
                            tile_layout.extend((y as u8).to_le_bytes());
                            tile_layout.extend(b"\x00\x00");
                        }
                    }

                    /* Create the action2 for the layout and generate the snippet for the main switch. */
                    write_pseudo_sprite(output, &[b"\x02\x09", &[layouts + 0xf0], b"\x89\x43\x00\xff\xff\x00\x00", &tiles.to_le_bytes(), &tile_layout, &failed_set.to_le_bytes()]);
                    industry_layout.extend(((layouts + 0xf0) as u16).to_le_bytes());
                    industry_layout.extend(((layouts + 1) as u32).to_le_bytes());
                    industry_layout.extend(((layouts + 1) as u32).to_le_bytes());
                    layouts += 1;
                }

                /* Based on layout, jump to the right action2 chain. */
                write_pseudo_sprite(output, &[b"\x02\x09", &[cb_main as u8], b"\x8A\x44\x00\xff\xff\x00\x00", &layouts.to_le_bytes(), &industry_layout, &failed_set.to_le_bytes()]);
                /* Activate the action2 chain. */
                write_pseudo_sprite(output, &[b"\x03\x09\x01", &[industry.id as u8], b"\x00", &cb_main.to_le_bytes()]);
            }

            let mut data_layout = Vec::new();

            for layout in &industry.layout {
                for (y, row) in layout.iter().enumerate() {
                    for (x, tile_id) in row.iter().enumerate() {
                        if *tile_id == 0xfd {
                            continue;
                        }

                        data_layout.extend((x as u8).to_le_bytes());
                        data_layout.extend((y as u8).to_le_bytes());

                        if *tile_id < 0xfe0000 {
                            /* Default tiles. */
                            data_layout.extend((*tile_id as u8).to_le_bytes());
                        } else {
                            /* If we use non-default tiles, we use a single tile-id (with the number of the industry) earlier.
                                * This tile-id is an action-chain that based on the location in the layout returns the right sprite. */
                            data_layout.extend(b"\xfe");
                            data_layout.extend((industry.id as u16).to_le_bytes());
                        }
                    }
                }

                data_layout.extend(b"\x00\x80");
            }

            let size : u32 = data_layout.len() as u32 + 2;

            write_pseudo_sprite(output, &[b"\x00\x0a\x01\x01", &[industry.id], b"\x0a", &(industry.layout.len() as u8).to_le_bytes(), &size.to_le_bytes(), &data_layout]);
        }

        let mut flags: u32 = 0x0;
        match industry.placement.as_str() {
            "on-water" => flags |= 0x04,
            "in-town" => flags |= 0x10,
            "in-large-town" => flags |= 0x08,
            "near-town" => flags |= 0x20,
            _ => {},
        };

        if flags != 0x00 {
            write_pseudo_sprite(output, &[b"\x00\x0a\x01\x01", &[industry.id], b"\x1a", &flags.to_le_bytes()]);
        }

        let mut callback_flags: u8 = 0x0;

        if industry.placement.as_str() == "custom" {
            callback_flags |= 0x08;

            let cb_main: u16 = 1;
            let failed_set: u16 = 2;
            let cb28: u16 = 3;

            let mut reverse: HashMap<(String, String), String> = HashMap::new();
            let mut nodes: HashMap<String, &NewGRFNode> = HashMap::new();

            let mut output_node = &NewGRFNode { ..Default::default() };
            for node in &industry.placementCustom {
                if node.source.is_some() && node.target.is_some() {
                    reverse.insert((node.target.clone().unwrap(), node.targetHandle.clone().unwrap_or_else(|| "".to_string())), node.source.clone().unwrap());
                } else {
                    nodes.insert(node.id.clone(), node);
                }
                if node.r#type.is_some() && node.r#type.as_ref() == Some(&"output".to_string()) {
                    output_node = node;
                }
            }

            /* Chain that either outputs a number if it was a graphics callback (which is an error) or a sprite when it is a non-graphics callback (which is also an error). */
            write_pseudo_sprite(output, &[b"\x02\x0a\xfd\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00"]);
            write_pseudo_sprite(output, &[b"\x02\x0a", &[failed_set as u8], b"\x89\x0c\x00\x00\x00\xff\xff\x01\x00\x80\x00\x00\x00\x00\x00\x00\x00\x00", &failed_set.to_le_bytes()]);

            traverse_nodes(cb28, output, output_node, &nodes, &reverse);

            write_pseudo_sprite(output, &[b"\x02\x0a", &[cb_main as u8], b"\x89\x0c\x00\xff\xff\x00\x00\x01", &cb28.to_le_bytes(), b"\x28\x00\x00\x00\x28\x00\x00\x00", &failed_set.to_le_bytes()]);

            /* Activate the chain. */
            write_pseudo_sprite(output, &[b"\x03\x0a\x01", &[industry.id], b"\x00", &cb_main.to_le_bytes()]);
        }

        if callback_flags != 0x00 {
            write_pseudo_sprite(output, &[b"\x00\x0a\x01\x01", &[industry.id], b"\x21", &[callback_flags]]);
        }
    }

    /* End-of-data-section marker. */
    output.extend(b"\x00\x00\x00\x00");
}

pub fn write_grf(options: NewGRFOptions) -> Vec<u8> {
    let mut output = Vec::new();
    let mut sprites = Vec::new();

    write_segments(&mut output, &mut sprites, options);

    let mut grf = Vec::new();
    /* Write GRF container version 2 header. */
    grf.extend(b"\x00\x00GRF\x82\r\n\x1a\n");
    /* Sprite section offset. */
    grf.extend((output.len() as u32 + 1).to_le_bytes());
    /* Compression. OpenTTD currently only support no-compression (= 0). */
    grf.extend(b"\x00");

    /* Add data-section (includes end-of-data-section marker). */
    grf.extend(output);

    /* Add all sprites to sprite-section. */
    for sprite in sprites {
        grf.extend(sprite);
    }
    /* End-of-sprite-section marker. */
    grf.extend(b"\x00\x00\x00\x00");

    grf
}
