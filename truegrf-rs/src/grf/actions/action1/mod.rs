use super::super::NewGRFSprite;
use super::{Action, ActionTrait, Feature, Output, vec_list, write as write_action};

mod png;

pub enum Action1<'a> {
    IndustryTile { sprites: &'a Vec<&'a NewGRFSprite> },
    Cargo { sprite: &'a NewGRFSprite },
}

fn write_sprite(output: &mut Output, sprite: &NewGRFSprite) {
    let sprite_num = output.sprites.len() as u32 + 1;

    /* Write a reference to the sprite segment. */
    output.buffer.extend(vec_list!(
        &4_u32.to_le_bytes(),
        [0xfd],
        sprite_num.to_le_bytes()
    ));

    let data = &png::lz77_encode(&png::convert_png_to_palette(&sprite.base64Data));

    let mut sprite_data = Vec::new();
    sprite_data.extend(vec_list!(
        &sprite_num.to_le_bytes(),
        &(data.len() as u32 + 10).to_le_bytes(),
        [0x04, 0x00],
        &sprite.height.to_le_bytes(),
        &sprite.width.to_le_bytes(),
        &sprite.left.to_le_bytes(),
        &sprite.top.to_le_bytes()
    ));
    sprite_data.extend(data);

    output.sprites.push(sprite_data);
}

fn write(output: &mut Output, feature: Feature, sprites: &[&NewGRFSprite]) {
    /* Write how many real sprites are following. */
    write_action(output, Action::Action1, feature, &[sprites.len() as u8, 0x01]);

    /* Write the real sprites. */
    for sprite in sprites {
        write_sprite(output, sprite);
    }
}

impl<'a> ActionTrait for Action1<'a> {
    fn write(&self, output: &mut Output) {
        match self {
            Action1::IndustryTile { sprites } => {
                write(output, Feature::IndustryTiles, sprites);
            }
            Action1::Cargo { sprite } => {
                write(output, Feature::Cargoes, &[sprite]);
            }
        }
    }
}
