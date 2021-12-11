use super::write as write_action0;
use super::super::{ActionTrait, Feature, Output, write_string};
use super::super::vec_list;

#[allow(clippy::enum_variant_names)]
pub enum Cargo<'a> {
    Disable {id: u8 },                                                         // 08 (shared with Enable)
    Enable { id: u8 },                                                         // 08 (shared with Disable)
    Name { id: u8, name: &'a str },                                            // 09, 0a
                                                                               // 0b (deprecated by 1b)
                                                                               // 0c (deprecated by 1c)
                                                                               // 0d (TODO)
                                                                               // 0e (TODO)
                                                                               // 0f (TODO)
                                                                               // 10, 11, 12 (TODO)
                                                                               // 13, 14 (TODO)
    Classes { id: u8, classes: u16 },                                          // 15, 16
    Label { id: u8, label: &'a str },                                          // 17
                                                                               // 18, 19 (TODO)
                                                                               // 1a (TODO)
    UnitName { id: u8, name: &'a str },                                        // 1b
    LongName { id: u8, name: &'a str },                                        // 1c
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
                let string_id = write_string(output, Feature::Cargoes, name);

                (*id, vec![
                    vec_list!([0x1b], &string_id.to_le_bytes()),
                ])
            }
            Cargo::LongName { id, name } => {
                let string_id = write_string(output, Feature::Cargoes, name);

                (*id, vec![
                    vec_list!([0x1c], &string_id.to_le_bytes()),
                ])
            }
        };

        write_action0(output, Feature::Cargoes, id, &properties);
    }
}
