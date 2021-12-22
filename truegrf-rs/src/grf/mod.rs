use serde::{Serialize, Deserialize};
use core::panic;
use std::collections::HashMap;

mod actions;

use actions::{Action0, Action1, Action2, Action3, Action8, Action14, ActionTrait, Feature, VarAction2, VarAction2Switch, VarAction2Operator, VarAction2OperatorVariable, Variable};

#[derive(Serialize, Deserialize, Debug, Default)]
struct NewGRFGeneral {
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
pub struct NewGRFSprite {
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
    layout: Vec<Vec<Vec<i32>>>,
    primary: Option<Vec<NewGRFIndustryPrimary>>,
    secondary: Option<NewGRFIndustrySecondary>,
    tertiary: Option<Vec<NewGRFIndustryTertiary>>,
    placement: String,
    placementCustom: Vec<NewGRFNode>,
    tiles: Vec<NewGRFIndustryTile>,
}

#[allow(non_snake_case)]
#[derive(Serialize, Deserialize, Debug, Default)]
struct NewGRFCargo {
    id: u8,
    available: bool,
    name: String,
    longName: String,
    unitName: String,
    label: String,
    classes: u16,
}

#[derive(Serialize, Deserialize, Debug, Default)]
pub struct NewGRFOptions {
    general: NewGRFGeneral,
    cargoes: Vec<NewGRFCargo>,
    industries: Vec<NewGRFIndustry>,
}

pub struct Output {
    buffer: Vec<u8>,
    string_counter: u16,
    sprites: Vec<Vec<u8>>,
}

fn traverse_nodes<'a>(current_node: &NewGRFNode, nodes: &HashMap<String, &NewGRFNode>, reverse: &HashMap<(String, String), String>) -> Box<VarAction2OperatorVariable> {
    match current_node.r#type.clone().unwrap().as_str() {
        "output" => {
            let node = nodes[&reverse[&(current_node.id.clone(), "".to_string())]];
            traverse_nodes(node, nodes, reverse)
        }
        "compare" => {
            let left_node = nodes[&reverse[&(current_node.id.clone(), "a".to_string())]];
            let left = traverse_nodes(left_node, nodes, reverse);

            let right_node = nodes[&reverse[&(current_node.id.clone(), "b".to_string())]];
            let right = traverse_nodes( right_node, nodes, reverse);

            if let Some(d) = &current_node.data {
                if let Some(v) = &d.value {
                    match v.as_str() {
                        "gt" => {
                            Box::new(VarAction2OperatorVariable::Operator(VarAction2Operator::Subtract { left, right }))
                        },
                        "lt" => {
                            Box::new(VarAction2OperatorVariable::Operator(VarAction2Operator::Subtract { left: right, right: left }))
                        },
                        _ => {
                            panic!("Unknown compare operator: {}", v);
                        }
                    }
                } else {
                    panic!("No value for compare node");
                }
            } else {
                panic!("No value for compare node");
            }
        },
        "variable" => {
            if let Some(d) = &current_node.data {
                if let Some(v) = &d.value {
                    match v.as_str() {
                        "distance-to-town" => {
                            Box::new(VarAction2OperatorVariable::Variable(Variable::IndustryCb28::DistanceToTown.into()))
                        },
                        _ => {
                            panic!("Unknown variable: {}", v);
                        }
                    }
                } else {
                    panic!("No value for variable node");
                }
            } else {
                panic!("No value for variable node");
            }
        },
        "number" => {
            if let Some(d) = &current_node.data {
                if let Some(v) = &d.value {
                    Box::new(VarAction2OperatorVariable::Variable(Variable::Global::Number(v.parse::<u32>().unwrap()).into()))
                } else {
                    panic!("No value for number node");
                }
            } else {
                panic!("No value for number node");
            }
        },
        _ => {
            panic!("Unknown node type: {}", current_node.r#type.clone().unwrap());
        }
    }
}

fn write_segments(output: &mut Output, options: NewGRFOptions) {
    /* Initial sprite; should be 4 in length, ignored by OpenTTD. */
    output.buffer.extend([0x04, 0x00, 0x00, 0x00, 0xff, 0x02, 0x00, 0x00, 0x00]);

    Action14::Url { url: &"https://truebrain.github.io/TrueGRF/".to_string() }.write(output);
    Action14::Palette { palette: 'D' }.write(output);
    Action8::General { grfid: &"TRU1".to_string(), name: &options.general.name, description: &options.general.description }.write(output);

    /* Disable all default cargoes. */
    for cargo_id in 0..=11 {
        Action0::Cargo::Disable { id: cargo_id }.write(output);
    }

    /* Disable all default industries. */
    for industry_id in 0..=36 {
        Action0::Industry::Disable { id: industry_id }.write(output);
    }

    /* Create CTT, which is just an iteration of the cargoes. */
    let mut ctt_keys = Vec::new();
    let mut ctt = HashMap::new();
    for (cargo_id, cargo) in options.cargoes.iter().enumerate() {
        ctt_keys.push(&cargo.label);
        ctt.insert(cargo.label.clone(), cargo_id as u8);
    }
    Action0::GlobalSetting::CargoTranslationTable { ctt: &ctt_keys }.write(output);

    for cargo in &options.cargoes {
        if !cargo.available {
            continue;
        }

        Action0::Cargo::Enable { id: cargo.id }.write(output);
        Action0::Cargo::Classes { id: cargo.id, classes: cargo.classes }.write(output);
        Action0::Cargo::Label { id: cargo.id, label: &cargo.label }.write(output);
        Action0::Cargo::Name { id: cargo.id, name: &cargo.name }.write(output);
        Action0::Cargo::UnitName { id: cargo.id, name: &cargo.unitName }.write(output);
        Action0::Cargo::LongName { id: cargo.id, unit: &cargo.unitName, name: &cargo.longName }.write(output);
    }

    for industry in &options.industries {
        if !industry.available {
            continue;
        }

        Action0::Industry::Enable { id: industry.id }.write(output);
        Action0::Industry::Name { id: industry.id, name: &industry.name }.write(output);

        /* Set the industry type. */
        let industry_type: u8 = match industry.r#type.as_str() {
            "tertiary" => 0,
            "primary" => 2,
            "secondary" => 4,
            _ => 0,
        };
        Action0::Industry::Type { id: industry.id, r#type: industry_type }.write(output);

        if industry.primary.is_some() {
            let primary = industry.primary.as_ref().unwrap();

            let mut primary_production = Vec::new();
            let mut primary_multiplier = Vec::new();
            for primary_item in primary {
                primary_production.push(ctt[&primary_item.cargoLabel]);
                primary_multiplier.push(primary_item.multiplier);
            }

            Action0::Industry::Production { id: industry.id, production: &primary_production, multiplier: &primary_multiplier }.write(output);
            Action0::Industry::Acceptance { id: industry.id, acceptance: &vec![], multiplier: &vec![] }.write(output);
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
                secondary_production.push(ctt[&production.cargoLabel]);
                for multiplier in &production.multiplier {
                    secondary_multiplier.push(*multiplier);
                }
            }

            Action0::Industry::Production { id: industry.id, production: &secondary_production, multiplier: &vec![] }.write(output);
            Action0::Industry::Acceptance { id: industry.id, acceptance: &secondary_acceptance, multiplier: &secondary_multiplier }.write(output);
        }

        if industry.tertiary.is_some() {
            let tertiary = industry.tertiary.as_ref().unwrap();

            let mut tertiary_acceptance = Vec::new();
            for tertiary_item in tertiary {
                tertiary_acceptance.push(ctt[&tertiary_item.cargoLabel]);
            }

            Action0::Industry::Production { id: industry.id, production: &vec![], multiplier: &vec![] }.write(output);
            Action0::Industry::Acceptance { id: industry.id, acceptance: &tertiary_acceptance, multiplier: &vec![] }.write(output);
        };

        if !industry.layout.is_empty() {
            if !industry.tiles.is_empty() {
                let mut sprites = Vec::new();
                for tile in &industry.tiles {
                    sprites.push(&tile.sprite);
                }
                Action1::IndustryTile { sprites: &sprites }.write(output);

                Action0::IndustryTile::Enable { id: industry.id }.write(output);
                Action0::IndustryTile::Flags { id: industry.id, flags: Action0::IndustryTileFlags::INDUSTRY_ACCEPTANCE }.write(output);

                let cb_main: u16 = 0xfe;
                let failed_set: u16 = 0xfd;

                /* Create a random sprite as fallback sprite. */
                Action2::IndustryTile { set_id: failed_set as u8, ground_sprite: 0x07e6, building_sprite: 0x0, size_x: 16, size_y: 16, size_z: 32 }.write(output);

                for (id, _tile) in industry.tiles.iter().enumerate() {
                    Action2::IndustryTile { set_id: id as u8, ground_sprite: 0x07e6, building_sprite: 0x80000000 + id as u32, size_x: 16, size_y: 16, size_z: 32 }.write(output);
                }

                let mut layout_switch = Vec::new();

                for (layout_id, layout) in industry.layout.iter().enumerate() {
                    let mut switch = Vec::new();

                    for (y, row) in layout.iter().enumerate() {
                        for (x, tile_id) in row.iter().enumerate() {
                            if *tile_id < 0 {
                                continue;
                            }

                            let result = *tile_id;
                            let value = x as u32 | ((y as u32) << 8);
                            switch.push(VarAction2Switch { result: result as u16, left: value, right: value } );
                        }
                    }

                    VarAction2::IndustryTile { set_id: layout_id as u8 + 0xf0, variable: Variable::IndustryTile::RelativePos.into(), switch: &switch, default: failed_set }.write(output);
                    layout_switch.push(VarAction2Switch { result: layout_id as u16 + 0xf0, left: layout_id as u32 + 1, right: layout_id as u32 + 1 });
                }

                VarAction2::IndustryTile { set_id: 0xfe, variable: Variable::Industry::LayoutNum.into(), switch: &layout_switch, default: failed_set }.write(output);
                Action3::IndustryTile { id: industry.id, set_id: cb_main as u8 }.write(output);
            }

            let mut layouts = Vec::new();

            for layout in &industry.layout {
                let mut data_layout = Vec::new();

                for (y, row) in layout.iter().enumerate() {
                    for (x, tile_id) in row.iter().enumerate() {
                        if *tile_id < 0 {
                            continue;
                        }

                        data_layout.extend((x as u8).to_le_bytes());
                        data_layout.extend((y as u8).to_le_bytes());

                        /* Per industry there is an Action2 chain to look up the right SpriteID; use that for all tiles in an industry. */
                        data_layout.extend(b"\xfe");
                        data_layout.extend((industry.id as u16).to_le_bytes());
                    }
                }

                data_layout.extend(b"\x00\x80");
                layouts.push(data_layout);
            }

            Action0::Industry::Layout { id: industry.id, layouts: &layouts }.write(output);
        }

        let mut flags = Action0::IndustryFlags::empty();
        match industry.placement.as_str() {
            "on-water" => flags |= Action0::IndustryFlags::ON_WATER,
            "in-town" => flags |= Action0::IndustryFlags::IN_TOWN,
            "in-large-town" => flags |= Action0::IndustryFlags::IN_LARGE_TOWN,
            "near-town" => flags |= Action0::IndustryFlags::NEAR_TOWN,
            _ => {},
        };

        if !flags.is_empty() {
            Action0::Industry::Flags { id: industry.id, flags }.write(output);
        }

        let mut callback_flags = Action0::IndustryCallbackFlags::empty();

        if industry.placement.as_str() == "custom" {
            callback_flags |= Action0::IndustryCallbackFlags::CUSTOM_PLACEMENT;

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
            Action2::Industry { set_id: failed_set as u8, subtract: &[0, 0, 0], add: &[0, 0] }.write(output);
            VarAction2::Industry { set_id: failed_set as u8, variable: Variable::Global::CurrentCallback.into(), switch: &vec![
                VarAction2Switch { result: 0x8000, left: 0x00, right: 0x00 },
            ], default: failed_set }.write(output);

            let variable = traverse_nodes( output_node, &nodes, &reverse);
            VarAction2::Advanced { set_id: cb28 as u8, feature: Feature::Industries, related_object: false, variable, switch: &vec![
                VarAction2Switch { result: 0x8400, left: 0x0, right: 0x7fffffff },
            ], default: 0x8401 }.write(output);

            VarAction2::Industry { set_id: cb_main as u8, variable: Variable::Global::CurrentCallback.into(), switch: &vec![
                VarAction2Switch { result: cb28, left: 0x28, right: 0x28 },
            ], default: failed_set }.write(output);

            Action3::Industry { id: industry.id, set_id: cb_main as u8 }.write(output);
        }

        if !callback_flags.is_empty() {
            Action0::Industry::CallbackFlags { id: industry.id, flags: callback_flags }.write(output);
        }
    }

    /* End-of-data-section marker. */
    output.buffer.extend(b"\x00\x00\x00\x00");
}

pub fn write_grf(options: NewGRFOptions) -> Vec<u8> {
    let mut output = Output { buffer: Vec::new(), string_counter: 0xdc00, sprites: Vec::new() };

    write_segments(&mut output, options);

    let mut grf = Vec::new();
    /* Write GRF container version 2 header. */
    grf.extend(b"\x00\x00GRF\x82\r\n\x1a\n");
    /* Sprite section offset. */
    grf.extend((output.buffer.len() as u32 + 1).to_le_bytes());
    /* Compression. OpenTTD currently only support no-compression (= 0). */
    grf.extend(b"\x00");

    /* Add data-section (includes end-of-data-section marker). */
    grf.extend(output.buffer);

    /* Add all sprites to sprite-section. */
    for sprite in output.sprites {
        grf.extend(sprite);
    }
    /* End-of-sprite-section marker. */
    grf.extend(b"\x00\x00\x00\x00");

    grf
}
