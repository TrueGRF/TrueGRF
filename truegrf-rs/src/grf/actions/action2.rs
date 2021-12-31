use super::{ActionTrait, Action, Feature, Output, vec_list, write as write_action};

pub enum Action2<'a> {
    Industry { set_id: u8, subtract: &'a [u16; 3], add: &'a [u16; 2] },
    IndustryTile { set_id: u8, ground_sprite: u32, building_sprites: &'a [u32], size_x: u8, size_y: u8, size_z: u8 },
    Cargo { set_id: u8, sprite: u16 },
}

fn write(output: &mut Output, feature: Feature, set_id: u8, data: &[u8]) {
    write_action(output, Action::Action2, feature, &vec_list!(
        [set_id],
        data
    ));
}

impl<'a> ActionTrait for Action2<'a> {
    fn write(&self, output: &mut Output) {
        match self {
            Action2::Industry { set_id, subtract, add } => {
                write(output, Feature::Industries, *set_id, &vec_list!(
                    [0x00],
                    subtract.iter().map(|s| vec_list!(&s.to_le_bytes())).flatten(),
                    add.iter().map(|a| vec_list!(&a.to_le_bytes())).flatten(),
                    [0x00]
                ));
            },
            Action2::IndustryTile { set_id, ground_sprite, building_sprites, size_x, size_y, size_z } => {
                let mut data = Vec::new();
                for sprite in *building_sprites {
                    data.extend(&sprite.to_le_bytes());
                    data.extend([0x00, 0x00, 0x00, *size_x, *size_y, *size_z]);
                }

                write(output, Feature::IndustryTiles, *set_id, &vec_list!(
                    [building_sprites.len() as u8],
                    &ground_sprite.to_le_bytes(),
                    data
                ));
            }
            Action2::Cargo { set_id, sprite } => {
                write(output, Feature::Cargoes, *set_id, &vec_list!(
                    [0x01, 0x00],
                    &sprite.to_le_bytes()
                ));
            }
        }
    }
}
