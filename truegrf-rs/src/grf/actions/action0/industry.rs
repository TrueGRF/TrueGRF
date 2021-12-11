use bitflags::bitflags;

use super::write as write_action0;
use super::super::{ActionTrait, Feature, Output, write_string};
use super::super::vec_list;

bitflags! {
    pub struct Flags : u32 {
        const ON_WATER = 0x04;
        const IN_LARGE_TOWN = 0x08;
        const IN_TOWN = 0x10;
        const NEAR_TOWN = 0x20;
    }
}

bitflags! {
    pub struct CallbackFlags : u16 {
        const CUSTOM_PLACEMENT = 0x08;
    }
}

pub enum Industry<'a> {
    Disable { id: u8 },                                                        // 08 (shared with Disable)
    Substitute { id: u8, substitute: u8 },                                     // 08 (shared with Substitute)
                                                                               // 09 (unused)
    Layout { id: u8, layouts: &'a Vec<Vec<u8>> },                              // 0a
    Type { id: u8, r#type: u8 },                                               // 0b
                                                                               // 0c, 0d, 0e (TODO)
                                                                               // 0f (TODO)
                                                                               // 10, 11, 12, 13 (deprecated by 25, 26, 27, 28)
                                                                               // 14 (TODO)
                                                                               // 15 (TODO)
                                                                               // 16 (TODO)
                                                                               // 17 (TODO)
                                                                               // 18 (TODO)
                                                                               // 19 (TODO)
    Flags { id: u8, flags: Flags },                                            // 1a
                                                                               // 1b (TODO)
                                                                               // 1c, 1d, 1e (deprecated by 28)
    Name { id: u8, name: &'a str },                                            // 1f
                                                                               // 20 (TODO)
    CallbackFlags { id: u8, flags: CallbackFlags },                            // 21, 22
                                                                               // 23 (TODO)
                                                                               // 24 (TODO)
    Production { id: u8, production: &'a Vec<u8>, multiplier: &'a Vec<u8> },   // 25, 27
    Acceptance { id: u8, acceptance: &'a Vec<u8>, multiplier: &'a Vec<u16> },  // 26, 28
}

impl<'a> ActionTrait for Industry<'a> {
    fn write(&self, output: &mut Output) {
        let (id, properties) = match self {
            Industry::Disable { id } => {
                (*id, vec![
                    vec_list!([0x08], [0xff]),
                ])
            }
            Industry::Substitute { id, substitute } => {
                (*id, vec![
                    vec_list!([0x08], [substitute]),
                ])
            }
            Industry::Layout { id, layouts } => {
                let mut layout_data = Vec::new();
                for layout in *layouts {
                    layout_data.extend(layout);
                }

                (*id, vec![
                    vec_list!([0x0a], [layouts.len() as u8], &(layout_data.len() as u32).to_le_bytes(), &layout_data),
                ])
            }
            Industry::Type { id, r#type } => {
                (*id, vec![
                    vec_list!([0x0b], [r#type]),
                ])
            }
            Industry::Flags { id, flags } => {
                (*id, vec![
                    vec_list!([0x1a], &flags.bits.to_le_bytes()),
                ])
            }
            Industry::Name { id, name } => {
                let string_id = write_string(output, Feature::Industries, name);

                (*id, vec![
                    vec_list!([0x1f], &string_id.to_le_bytes()),
                ])
            }
            Industry::CallbackFlags { id, flags } => {
                (*id, vec![
                    vec_list!([0x21], [(flags.bits & 0xff) as u8]),
                    vec_list!([0x22], [(flags.bits >> 8) as u8]),
                ])
            }
            Industry::Production { id, production, multiplier } => {
                (*id, vec![
                    vec_list!([0x25], [production.len() as u8], *production),
                    vec_list!([0x27], [multiplier.len() as u8], *multiplier),
                ])
            }
            Industry::Acceptance { id, acceptance, multiplier } => {
                let production_len = if !acceptance.is_empty() { multiplier.len() / acceptance.len() } else { 0 };
                let mut multiplier_u8 = Vec::new();
                for m in *multiplier {
                    multiplier_u8.extend(m.to_le_bytes());
                }

                (*id, vec![
                    vec_list!([0x26], [acceptance.len() as u8], *acceptance),
                    vec_list!([0x28], [acceptance.len() as u8, production_len as u8], &multiplier_u8),
                ])
            }
        };

        write_action0(output, Feature::Industries, id, &properties);
    }
}
