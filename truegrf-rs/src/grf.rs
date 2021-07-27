use serde::{Serialize, Deserialize};

#[derive(Serialize, Deserialize, Debug, Default)]
struct NewGRFGeneric {
    name: String,
    description: String,
}

#[derive(Serialize, Deserialize, Debug, Default)]
struct NewGRFIndustry {
    id: i32,
    available: bool,
}

#[derive(Serialize, Deserialize, Debug, Default)]
pub struct NewGRFOptions {
    generic: NewGRFGeneric,
    industries: Vec<NewGRFIndustry>,
}


fn write_pseudo_sprite(output: &mut Vec<u8>, data: &[u8]) -> std::io::Result<()> {
    let len = data.len();
    output.extend(&[
        ((len >>  0) & 0xff) as u8,
        ((len >>  8) & 0xff) as u8,
        ((len >> 16) & 0xff) as u8,
        ((len >> 24) & 0xff) as u8,
    ]);

    output.extend(&[0xff]);
    output.extend(data);

    Ok(())
}

pub fn write_grf(options: NewGRFOptions) -> std::io::Result<Vec<u8>> {
    let mut output = Vec::new();

    /* Write GRF container version 2 header. */
    output.extend(b"\x00\x00GRF\x82\r\n\x1a\n");
    /* TODO -- Sprite section offset. */
    output.extend(b"\x00\x00\x00\x00");
    /* Compression. OpenTTD currently only support no-compression (= 0). */
    output.extend(b"\x00");

    /* TODO -- Amount of sprites in the file; ignored by OpenTTD. */
    write_pseudo_sprite(&mut output, b"\x02\x00\x00\x00")?;

    /* Action8 - GRF metadata */
    let mut metadata = Vec::new();
    metadata.extend(b"\x08\x08TRU1");
    metadata.extend(options.generic.name.as_bytes());
    metadata.extend(b"\x00");
    metadata.extend(options.generic.description.as_bytes());
    metadata.extend(b"\x00");
    write_pseudo_sprite(&mut output, metadata.as_slice())?;

    if !options.industries[0].available {
        write_pseudo_sprite(&mut output, b"\x00\x0a\x01\x01\x00\x08\xff")?;
    }
    if !options.industries[1].available {
        write_pseudo_sprite(&mut output, b"\x00\x0a\x01\x01\x01\x08\xff")?;
    }

    /* Final sprite marker. */
    output.extend(b"\x00\x00\x00\x00");

    Ok(output)
}
