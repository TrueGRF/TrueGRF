use super::write as write_action0;
use super::super::{ActionTrait, Feature, Output, vec_list, write_string};
#[allow(clippy::enum_variant_names)]
pub enum Cargo<'a> {
    Disable { id: u8 },                                                        // 08 (shared with Enable)
    Enable { id: u8 },                                                         // 08 (shared with Disable)
    Name { id: u8, name: &'a str },                                            // 09, 0a
                                                                               // 0b (deprecated by 1b)
                                                                               // 0c (deprecated by 1c)
    Abbreviation { id: u8, abbreviation: &'a str},                             // 0d
    Sprite { id: u8 },                                                         // 0e
    Weight { id: u8, weight: u8 },                                             // 0f
    Price { id: u8, price: u32, penalty_lower_bound: u8, penalty_length: u8 }, // 10, 11, 12
    Colour { id: u8, colour: u8 },                                             // 13, 14
    Classes { id: u8, classes: u16 },                                          // 15, 16
    Label { id: u8, label: &'a str },                                          // 17
                                                                               // 18, 19 (TODO)
                                                                               // 1a (TODO)
    UnitName { id: u8, name: &'a str },                                        // 1b
    LongName { id: u8, unit: &'a str, name: &'a str },                         // 1c
                                                                               // 1d (TODO)
}

impl<'a> ActionTrait for Cargo<'a> {
    fn write(&self, output: &mut Output) {
        let (id, properties) = match self {
            Cargo::Disable { id } => {
                (*id, vec![
                    vec_list!([0x08], [0xff]),
                    vec_list!([0x17], [0x00, 0x00, 0x00, 0x00]),
                ])
            }
            Cargo::Enable { id } => {
                (*id, vec![
                    vec_list!([0x08], [*id]),
                ])
            }
            Cargo::Name { id, name} => {
                let string_id = write_string(output, Feature::Cargoes, name);

                (*id, vec![
                    vec_list!([0x09], &string_id.to_le_bytes()),
                    vec_list!([0x0a], &string_id.to_le_bytes()),
                ])
            }
            Cargo::Abbreviation { id, abbreviation } => {
                let string_id = write_string(output, Feature::Cargoes, abbreviation);

                (*id, vec![
                    vec_list!([0x0d], &string_id.to_le_bytes()),
                ])
            }
            Cargo::Sprite { id } => {
                (*id, vec![
                    vec_list!([0x0e], [0xff, 0xff]),
                ])
            }
            Cargo::Weight { id, weight } => {
                (*id, vec![
                    vec_list!([0x0f], [*weight]),
                ])
            }
            Cargo::Price { id, price, penalty_lower_bound, penalty_length } => {
                (*id, vec![
                    vec_list!([0x10], [*penalty_lower_bound]),
                    vec_list!([0x11], [*penalty_length]),
                    vec_list!([0x12], &price.to_le_bytes()),
                ])
            }
            Cargo::Colour { id, colour } => {
                (*id, vec![
                    vec_list!([0x13], [*colour]),
                    vec_list!([0x14], [*colour]),
                ])
            }
            Cargo::Classes { id, classes } => {
                /* If the class is passengers (0x1) or mail (0x2), it is not freight (0); otherwise, it is freight (1). */
                let is_freight = if classes & 0x0003 != 0 { 0 } else { 1 };

                (*id, vec![
                    vec_list!([0x15], [is_freight]),
                    vec_list!([0x16], &classes.to_le_bytes()),
                ])
            }
            Cargo::Label { id, label } => {
                (*id, vec![
                    vec_list!([0x17], label.as_bytes())
                ])
            }
            Cargo::UnitName { id, name} => {
                /* Check for magic strings that resolve to internal names. */
                let string_id = match *name {
                    "Passengers" => 0x004f,
                    "Tonnes" => 0x0050,
                    "Bags" => 0x0051,
                    "Litres" => 0x0052,
                    "Items" => 0x0053,
                    "Crates" => 0x0054,
                    _ => write_string(output, Feature::Cargoes, name),
                };

                (*id, vec![
                    vec_list!([0x1b], &string_id.to_le_bytes()),
                ])
            }
            Cargo::LongName { id, unit, name } => {
                let name_prefix = match *unit {
                    "Tonnes" => String::from("{WEIGHT} "),
                    "Litres" => String::from("{VOLUME} "),
                    "Passengers" => String::from("{SIGNED_WORD} "),
                    "Bags" => String::from("{SIGNED_WORD} bags "),
                    "Items" => String::from("{SIGNED_WORD} items "),
                    "Crates" => String::from("{SIGNED_WORD} crates "),
                    _ => String::from("{SIGNED_WORD} ") + &unit.to_lowercase() + " ",
                };

                let string_id = write_string(output, Feature::Cargoes, &(name_prefix + name));

                (*id, vec![
                    vec_list!([0x1c], &string_id.to_le_bytes()),
                ])
            }
        };

        write_action0(output, Feature::Cargoes, id, &properties);
    }
}
