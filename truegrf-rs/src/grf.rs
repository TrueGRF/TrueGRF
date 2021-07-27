use serde::{Serialize, Deserialize};

#[derive(Serialize, Deserialize, Debug, Default)]
struct NewGRFGeneric {
    name: String,
    description: String,
}

#[derive(Serialize, Deserialize, Debug, Default)]
struct NewGRFIndustry {
    id: u8,
    available: bool,
    name: String,
    layout: Vec<Vec<Vec<u8>>>,
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
        }
    }

    /* Final sprite marker. */
    output.extend(b"\x00\x00\x00\x00");

    output
}
