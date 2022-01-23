/*
 * Easy wrapper for failed chains, basically what you point to if you get in an unexpected situation.
 */

use super::{
    ActionTrait,
    Action2,
    Output,
    Variable,
    VarAction2,
    VarAction2Switch,
};

pub enum Action2Failed {
    Industry { set_id: u8 },
    IndustryTile { set_id: u8 },
}

impl<'a> ActionTrait for Action2Failed {
    fn write(&self, output: &mut Output) {
        match self {
            Action2Failed::Industry { set_id } => {
                Action2::Industry { set_id: *set_id, inputs: &[], outputs: &[] }.write(output);
                VarAction2::Industry { set_id: *set_id, variable: Variable::Global::CurrentCallback.into(), switch: &vec![
                    VarAction2Switch { result: 0x8000, left: 0x00, right: 0x00 },
                ], default: *set_id as u16 }.write(output);
            },
            Action2Failed::IndustryTile { set_id } => {
                Action2::IndustryTile { set_id: *set_id, ground_sprite: 0x07e6, building_sprites: &[0], size_x: 16, size_y: 16, size_z: 32 }.write(output);
            }
        }
    }
}
