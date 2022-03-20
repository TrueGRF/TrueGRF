use std::io::Cursor;
use image::io::Reader;
use image::Pixel;

const RGB_TO_PALETTE: [u32; 256] = [
    0x0000ff, 0x101010, 0x202020, 0x303030, 0x404040, 0x505050, 0x646464, 0x747474,
    0x848484, 0x949494, 0xa8a8a8, 0xb8b8b8, 0xc8c8c8, 0xd8d8d8, 0xe8e8e8, 0xfcfcfc,
    0x343c48, 0x444c5c, 0x586070, 0x6c7484, 0x848c98, 0x9ca0ac, 0xb0b8c4, 0xccd0dc,
    0x302c04, 0x403c0c, 0x504c14, 0x605c1c, 0x787840, 0x949464, 0xb0b084, 0xcccca8,
    0x482c04, 0x583c14, 0x68502c, 0x7c6848, 0x98845c, 0xb8a078, 0xd4bc94, 0xf4dcb0,
    0x400004, 0x580410, 0x701020, 0x882034, 0xa0384c, 0xbc546c, 0xcc687c, 0xdc8490,
    0xec9ca4, 0xfcbcc0, 0xfcd000, 0xfce83c, 0xfcfc80, 0x4c2800, 0x603c08, 0x74581c,
    0x887438, 0x9c8850, 0xb09c6c, 0xc4b488, 0x441800, 0x602c04, 0x804408, 0x9c6010,

    0xb87818, 0xd49c20, 0xe8b810, 0xfcd400, 0xfcf880, 0xfcfcc0, 0x200400, 0x401408,
    0x541c10, 0x6c2c1c, 0x803828, 0x944838, 0xa85c4c, 0xb86c58, 0xc4806c, 0xd49480,
    0x083400, 0x104000, 0x205004, 0x306004, 0x40700c, 0x548414, 0x68941c, 0x80a82c,
    0x1c3418, 0x2c4420, 0x3c5830, 0x50683c, 0x687c4c, 0x80945c, 0x98b06c, 0xb4cc7c,
    0x103418, 0x20482c, 0x386048, 0x4c7458, 0x60886c, 0x78a488, 0x98c0a8, 0xb8dcc8,
    0x201800, 0x381c00, 0x482804, 0x58340c, 0x684018, 0x7c542c, 0x8c6c40, 0xa08058,
    0x4c2810, 0x603418, 0x744428, 0x885438, 0xa46040, 0xb87050, 0xcc8060, 0xd49470,
    0xe0a880, 0xecbc94, 0x501c04, 0x642814, 0x783828, 0x8c4c40, 0xa06460, 0xb88888,

    0x242844, 0x303454, 0x404064, 0x505074, 0x646488, 0x8484a4, 0xacacc0, 0xd4d4e0,
    0x281470, 0x402c90, 0x5840ac, 0x684cc4, 0x7858e0, 0x8c68fc, 0xa088fc, 0xbca8fc,
    0x00186c, 0x002484, 0x0034a0, 0x0048b8, 0x0060d4, 0x1878dc, 0x3890e8, 0x58a8f0,
    0x80c4fc, 0xbce0fc, 0x104060, 0x18506c, 0x286078, 0x347084, 0x508ca0, 0x74acc0,
    0x9cccdc, 0xccf0fc, 0xac3434, 0xd43434, 0xfc3434, 0xfc6458, 0xfc907c, 0xfcb8a0,
    0xfcd8c8, 0xfcf4ec, 0x481470, 0x5c2c8c, 0x7044a8, 0x8c64c4, 0xa888e0, 0xc8b0f8,
    0xd0b8ff, 0xe8d0fc, 0x3c0000, 0x5c0000, 0x800000, 0xa00000, 0xc40000, 0xe00000,
    0xfc0000, 0xfc5000, 0xfc6c00, 0xfc8800, 0xfca400, 0xfcc000, 0xfcdc00, 0xfcfc00,

    0xcc8808, 0xe49004, 0xfc9c00, 0xfcb030, 0xfcc464, 0xfcd898, 0x081858, 0x0c2468,
    0x14347c, 0x1c448c, 0x285ca4, 0x3878bc, 0x4898d8, 0x64ace0, 0x5c9c34, 0x6cb040,
    0x7cc84c, 0x90e05c, 0xe0f4fc, 0xc8ecf8, 0xb4dcec, 0x84bcd8, 0x5898ac, 0xf400f4,
    0xf500f5, 0xf600f6, 0xf700f7, 0xf800f8, 0xf900f9, 0xfa00fa, 0xfb00fb, 0xfc00fc,
    0xfd00fd, 0xfe00fe, 0xff00ff, 0x4c1808, 0x6c2c18, 0x904834, 0xb06c54, 0xd2927e,
    0xfc3c00, 0xfc5400, 0xfc6800, 0xfc7c00, 0xfc9400, 0xfcac00, 0xfcc400, 0x400000,
    0xff0000, 0x303000, 0x404000, 0x505000, 0xffff00, 0x204470, 0x244874, 0x284c78,
    0x2c507c, 0x305480, 0x486490, 0x6484a8, 0xd8f4fc, 0x6080a4, 0x44608c, 0xffffff
];


pub fn convert_png_to_palette(bytes: &[u8]) -> (Vec<u8>, u16, u16) {
    let image = Reader::new(Cursor::new(bytes)).with_guessed_format().unwrap().decode().unwrap();

    let mut palette_image = Vec::new();

    for pixel in image.to_rgba8().pixels() {
        let subpixel = pixel.channels();
        if subpixel.len() != 4 {
            panic!("Invalid pixel format");
        }
        let r = subpixel[0];
        let g = subpixel[1];
        let b = subpixel[2];
        let a = subpixel[3];

        if a == 0 {
            palette_image.push(0);
        } else {
            let index = RGB_TO_PALETTE.iter().position(|&rgb| rgb == (r as u32) << 16 | (g as u32) << 8 | (b as u32));
            match index {
                Some(index) => palette_image.push(index as u8),
                None => palette_image.push(215), // Pink, so people will notice
            }
        }
    }

    (palette_image, image.width() as u16, image.height() as u16)
}

fn find(sprite: &[u8], pat_data_pos: isize, data_pos: isize, pat_size: isize, data_size: isize) -> isize {
    for i in 0 ..= data_size - pat_size {
        let mut j = 0;
        while j < pat_size && sprite[(pat_data_pos + j) as usize] == sprite[(data_pos + i + j) as usize] {
            j += 1;
        }
        if j == pat_size {
            return i
        }
    }

    -1
}

pub fn lz77_encode(sprite: &[u8]) -> Vec<u8> {
    let input_size = sprite.len() as isize;

    let mut encoded = Vec::new();
    let mut literal = Vec::new();
    let mut position: isize = 0;

    while position < input_size {
        let mut start_pos = position - (1 << 11) + 1;
        if start_pos < 0 {
            start_pos = 0;
        }

        let mut max_look = input_size - position + 1;
        if max_look > 16 {
            max_look = 16;
        }

        let mut overlap_pos = 0;
        let mut overlap_len = 0;
        for i in 3..max_look {
            let result = find(sprite, position, start_pos,i, position - start_pos);
            if result < 0 {
                break;
            }

            overlap_pos = position - start_pos - result;
            overlap_len = i;
            start_pos += result;
        }

        if overlap_len > 0 {
            if !literal.is_empty() {
                encoded.push(literal.len() as u8);
                encoded.extend(literal.clone());
                literal.clear();
            }
            let val = 0x80 | ((16 - overlap_len) << 3) | (overlap_pos >> 8);
            encoded.push(val as u8);
            encoded.push(overlap_pos as u8);
            position += overlap_len;
        } else {
            literal.push(sprite[position as usize]);
            if literal.len() == 0x80 {
                encoded.push(0);
                encoded.extend(literal.clone());
                literal.clear();
            }
            position += 1;
        }
    }

    if !literal.is_empty() {
        encoded.push(literal.len() as u8);
        encoded.extend(literal.clone());
        literal.clear();
    }

    encoded
}

#[allow(dead_code)]
pub fn lz77_encode_fake(sprite: &[u8]) -> Vec<u8> {
    let input_size = sprite.len() as isize;

    let mut encoded = Vec::new();
    // let mut literal = Vec::new();
    let mut position: isize = 0;

    while position < input_size {
        let mut n = input_size - position;
        if n > 127 {
            n = 127;
        }

        encoded.push(n as u8);
        for i in 0 .. n {
            encoded.push(sprite[(position + i) as usize]);
        }

        position += n;
    }

    encoded
}
