use bitflags::bitflags;

use super::write as write_action0;
use super::super::{ActionTrait, Feature, Output, vec_list, write_string};

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
        const PRODUCTION_CARGO_ARRIVAL = 0x0002;
        const PRODUCTION_EVERY_256_TICKS = 0x0004;
        const PLACEMENT = 0x0008;
        const PRODUCTION_CHANGE_RANDOM = 0x0010;
        const PRODUCTION_CHANGE_MONTHLY = 0x0020;
        const PRODUCTION_INITIAL = 0x4000;
    }
}

pub enum Industry<'a> {
    Disable { id: u8 },                                                        // 08 (shared with Enable)
    Enable { id: u8 },                                                         // 08 (shared with Disable)
                                                                               // 09 (unused)
    Layout { id: u8, layouts: &'a Vec<Vec<u8>> },                              // 0a
    Type { id: u8, r#type: u8 },                                               // 0b
                                                                               // 0c, 0d, 0e (TODO)
    FundCostMultiplier { id: u8, multiplier: u8 },                             // 0f
                                                                               // 10, 11, 12, 13 (deprecated by 25, 26, 27, 28)
                                                                               // 14 (won't implement)
                                                                               // 15 (won't implement)
                                                                               // 16 (won't implement)
    Probability { id: u8, map_gen: u8, in_game: u8 },                          // 17, 18
    Colour { id: u8, colour: u8 },                                             // 19
    Flags { id: u8, flags: Flags },                                            // 1a
                                                                               // 1b (TODO)
                                                                               // 1c, 1d, 1e (deprecated by 28)
    Name { id: u8, name: &'a str },                                            // 1f
    ProspectChance { id: u8, chance: u32 },                                    // 20
    CallbackFlags { id: u8, flags: CallbackFlags },                            // 21, 22
                                                                               // 23 (won't implement)
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
            Industry::Enable { id } => {
                /* 'Enable' creates an industry based on the built-in Coal Mine. */
                (*id, vec![
                    vec_list!([0x08], [0x00]),
                    /* Minimal amount of cargo distributed is always 1. */
                    vec_list!([0x14], [0x01]),
                    /* We disable sound effects. */
                    vec_list!([0x15], [0x00]),
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
            Industry::FundCostMultiplier { id, multiplier } => {
                (*id, vec![
                    vec_list!([0x0f], [*multiplier]),
                ])
            }
            Industry::Probability { id, map_gen, in_game } => {
                (*id, vec![
                    vec_list!([0x17], [*map_gen]),
                    vec_list!([0x18], [*in_game]),
                ])
            }
            Industry::Colour { id, colour } => {
                (*id, vec![
                    vec_list!([0x19], [*colour]),
                ])
            }
            Industry::Flags { id, flags } => {
                let mut flags = flags.bits;

                flags |= 0x40000; // Always enable bit 18 (new format for callbacks).

                (*id, vec![
                    vec_list!([0x1a], &flags.to_le_bytes()),
                ])
            }
            Industry::Name { id, name } => {
                let string_id = write_string(output, Feature::Industries, name);

                (*id, vec![
                    vec_list!([0x1f], &string_id.to_le_bytes()),
                ])
            }
            Industry::ProspectChance { id, chance } => {
                (*id, vec![
                    vec_list!([0x20], &chance.to_le_bytes()),
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
