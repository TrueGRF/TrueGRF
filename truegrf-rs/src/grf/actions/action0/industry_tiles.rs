use bitflags::bitflags;

use super::write as write_action0;
use super::super::{ActionTrait, Feature, vec_list, Output };

bitflags! {
    pub struct Flags : u8 {
        const CB26_RANDOM = 0x01;
        const INDUSTRY_ACCEPTANCE = 0x02;
    }
}

pub enum IndustryTiles {
    Enable { id: u8 },                                                         // 08
                                                                               // 09 (unused)
                                                                               // 0a, 0b, 0c (depracated by INDUSTRY_ACCEPTANCE)
                                                                               // 0d (TODO)
                                                                               // 0e (TODO)
                                                                               // 0f (TODO)
                                                                               // 10 (TODO)
                                                                               // 11 (TODO)
    Flags { id: u8, flags: Flags },                                            // 12
                                                                               // 13 (depracated by INDUSTRY_ACCEPTANCE)
}

impl ActionTrait for IndustryTiles {
    fn write(&self, output: &mut Output) {
        let (id, properties) = match self {
            IndustryTiles::Enable { id } => {
                /* 'Enable' creates a tile based n the built-in first Coal Mine tile. */
                (*id, vec![
                    vec_list!([0x08], [0x00]),
                ])
            }
            IndustryTiles::Flags { id, flags } => {
                (*id, vec![
                    vec_list!([0x12], [flags.bits]),
                ])
            }
        };

        write_action0(output, Feature::IndustryTiles, id, &properties);
    }
}
