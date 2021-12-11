use super::write_special as write_special_action0;
use super::super::{ActionTrait, Feature, Output, vec_list };

pub enum GlobalSettings<'a> {
                                                                               // 08 (unused)
    CargoTranslationTable { ctt: &'a Vec<&'a String> }                         // 09
                                                                               // 0a (unused)
                                                                               // 0b (unused)
                                                                               // 0c (unused)
                                                                               // 0d, 0e (unused)
                                                                               // 0f (unused)
                                                                               // 10 (unused)
                                                                               // 11 (unused)
                                                                               // 12 (unused)
                                                                               // 13, 14 (unused)
                                                                               // 15 (unused)
                                                                               // 16 (unused)
                                                                               // 17 (unused)
}

impl<'a> ActionTrait for GlobalSettings<'a> {
    fn write(&self, output: &mut Output) {
        let (id, numinfo, properties) = match self {
            GlobalSettings::CargoTranslationTable { ctt } => {
                let mut data = Vec::new();
                for cargo in *ctt {
                    data.extend(cargo.as_bytes());
                }

                (0, ctt.len() as u8, vec![
                    vec_list!([0x09], &data),
                ])
            }
        };

        write_special_action0(output, Feature::GlobalSettings, id, numinfo, &properties);
    }
}
