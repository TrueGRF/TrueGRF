use bitflags::bitflags;

use super::write as write_action0;
use super::super::{ActionTrait, Feature, Output };
use super::super::vec_list;

bitflags! {
    pub struct Flags : u8 {
        const CB26_RANDOM = 0x01;
        const INDUSTRY_ACCEPTANCE = 0x02;
    }
}

pub enum IndustryTiles {
    Substitute { id: u8, substitute: u8 },                                     // 08
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
            IndustryTiles::Substitute { id, substitute } => {
                (*id, vec![
                    vec_list!([0x08], [substitute]),
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
