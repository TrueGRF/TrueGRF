use serde::{Serialize, Deserialize};
use serde_json::Value;
use std::collections::HashMap;

#[derive(Serialize, Deserialize, Debug, Default)]
struct NewGRFGeneric {
    name: String,
    description: String,
}

#[derive(Serialize, Deserialize, Debug, Default)]
struct NewGRFNodeData {
    value: Option<String>,
}

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

#[derive(Serialize, Deserialize, Debug, Default)]
struct NewGRFIndustry {
    id: u8,
    available: bool,
    name: String,
    layout: Vec<Vec<Vec<u8>>>,
    placement: String,
    placementCustom: Vec<NewGRFNode>,
}

#[derive(Serialize, Deserialize, Debug, Default)]
pub struct NewGRFOptions {
    generic: NewGRFGeneric,
    industries: Vec<NewGRFIndustry>,
}


fn write_pseudo_sprite(output: &mut Vec<u8>, data: &[&[u8]]) {
    let mut len = 0;
    for d in data {
        len += (*d).len();
    }

    output.extend(&[
        ((len >>  0) & 0xff) as u8,
        ((len >>  8) & 0xff) as u8,
        ((len >> 16) & 0xff) as u8,
        ((len >> 24) & 0xff) as u8,
    ]);

    output.extend(&[0xff]);
    for d in data {
        output.extend(*d);
    }
}

fn write_store_string(output: &mut Vec<u8>, string_counter: &mut u16, feature: u8, string: &String) -> u16 {
    write_pseudo_sprite(output, &[b"\x04", &[feature], b"\xff\x01", &string_counter.to_le_bytes(), string.as_bytes(), b"\x00"]);
    *string_counter += 1;
    return *string_counter - 1;
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

pub fn write_grf(options: NewGRFOptions) -> Vec<u8> {
    let mut output = Vec::new();
    let mut string_counter: u16 = 0xdc00;

    /* Write GRF container version 2 header. */
    output.extend(b"\x00\x00GRF\x82\r\n\x1a\n");
    /* TODO -- Sprite section offset. */
    output.extend(b"\x00\x00\x00\x00");
    /* Compression. OpenTTD currently only support no-compression (= 0). */
    output.extend(b"\x00");

    /* TODO -- Amount of sprites in the file; ignored by OpenTTD. */
    write_pseudo_sprite(&mut output, &[b"\x02\x00\x00\x00"]);

    /* Action8 - GRF metadata */
    write_pseudo_sprite(&mut output, &[b"\x08\x08TRU1", options.generic.name.as_bytes(), b"\x00", options.generic.description.as_bytes(), b"\x00"]);

    for industry in options.industries {
        if !industry.available {
            write_pseudo_sprite(&mut output, &[b"\x00\x0a\x01\x01", &[industry.id], b"\x08\xff"]);
        } else {
            /* Overwrite existing industry. */
            write_pseudo_sprite(&mut output, &[b"\x00\x0a\x01\x01", &[industry.id], b"\x08", &[industry.id]]);
            write_pseudo_sprite(&mut output, &[b"\x00\x0a\x01\x01", &[industry.id], b"\x08\xff"]);

            /* Set the name of the industry. */
            let string_id = write_store_string(&mut output, &mut string_counter, 0x0a, &industry.name);
            write_pseudo_sprite(&mut output, &[b"\x00\x0a\x01\x01", &[industry.id], b"\x1f", &string_id.to_le_bytes()]);

            if industry.layout.len() > 0 {
                let mut data_layout = Vec::new();

                for layout in &industry.layout {
                    let mut x : u8 = 0;
                    let mut y : u8 = 0;

                    for row in layout {
                        for old_tile in row {
                            if *old_tile != 0xfd {
                                data_layout.extend(x.to_le_bytes());
                                data_layout.extend(y.to_le_bytes());
                                data_layout.extend(old_tile.to_le_bytes());
                            }

                            x += 1;
                        }

                        x = 0;
                        y += 1;
                    }

                    data_layout.extend(b"\x00\x80");
                }

                let size : u32 = data_layout.len() as u32 + 2;

                write_pseudo_sprite(&mut output, &[b"\x00\x0a\x01\x01", &[industry.id], b"\x0a", &(industry.layout.len() as u8).to_le_bytes(), &size.to_le_bytes(), &data_layout]);
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
                write_pseudo_sprite(&mut output, &[b"\x00\x0a\x01\x01", &[industry.id], b"\x1a", &flags.to_le_bytes()]);
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
                        reverse.insert((node.target.clone().unwrap(), node.targetHandle.clone().unwrap_or("".to_string())), node.source.clone().unwrap());
                    } else {
                        nodes.insert(node.id.clone(), node);
                    }
                    if node.r#type.is_some() && node.r#type.as_ref() == Some(&"output".to_string()) {
                        output_node = node;
                    }
                }

                /* Chain that either outputs a number if it was a graphics callback (which is an error) or a sprite when it is a non-graphics callback (which is also an error). */
                write_pseudo_sprite(&mut output, &[b"\x02\x0a\xfd\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00"]);
                write_pseudo_sprite(&mut output, &[b"\x02\x0a", &[failed_set as u8], b"\x89\x0c\x00\x00\x00\xff\xff\x01\x00\x80\x00\x00\x00\x00\x00\x00\x00\x00", &failed_set.to_le_bytes()]);

                traverse_nodes(cb28, &mut output, output_node, &nodes, &reverse);

                write_pseudo_sprite(&mut output, &[b"\x02\x0a", &[cb_main as u8], b"\x89\x0c\x00\xff\xff\x00\x00\x01", &cb28.to_le_bytes(), b"\x28\x00\x00\x00\x28\x00\x00\x00", &failed_set.to_le_bytes()]);

                /* Activate the chain. */
                write_pseudo_sprite(&mut output, &[b"\x03\x0a\x01", &[industry.id], b"\x00", &cb_main.to_le_bytes()]);
            }

            if callback_flags != 0x00 {
                write_pseudo_sprite(&mut output, &[b"\x00\x0a\x01\x01", &[industry.id], b"\x21", &[callback_flags]]);
            }
        }
    }

    /* Final sprite marker. */
    output.extend(b"\x00\x00\x00\x00");

    output
}
