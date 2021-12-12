use super::{ActionTrait, Action, Feature, Output, vec_list, write as write_action};

pub enum Action3 {
    Industry { id: u8, set_id: u8 },
    IndustryTile { id: u8, set_id: u8 },
}

fn write(output: &mut Output, feature: Feature, id: u8, set_id: u16) {
    write_action(output, Action::Action3, feature, &vec_list!(
        [0x01],
        [id],
        [0x00],
        set_id.to_le_bytes()
    ));
}

impl ActionTrait for Action3 {
    fn write(&self, output: &mut Output) {
        match self {
            Action3::Industry { id, set_id } => {
                write(output, Feature::Industries, *id, *set_id as u16);
            },
            Action3::IndustryTile { id, set_id } => {
                write(output, Feature::IndustryTiles, *id, *set_id as u16);
            }
        }
    }
}
