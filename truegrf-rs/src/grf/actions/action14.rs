use super::{Action, ActionTrait, Output, vec_list, write_special};

pub enum Action14<'a> {
    Url { url: &'a String },
    Palette { palette: char },
}

impl<'a> ActionTrait for Action14<'a> {
    fn write(&self, output: &mut Output) {
        match self {
            Action14::Url { url } => {
                write_special(output, Action::Action14, &vec_list!(
                    b"C",
                    b"INFO",
                        b"T",
                        b"URL_",
                            [0x7f],
                            &*url.as_bytes(),
                            [0x00],
                        [0x00],
                    [0x00]
                ));
            }
            Action14::Palette { palette } => {
                write_special(output, Action::Action14, &vec_list!(
                    b"C",
                    b"INFO",
                        b"B",
                        b"PALS",
                            &(1_u16).to_le_bytes(),
                            [*palette as u8],
                        [0x00],
                    [0x00]
                ));
            }
        }
    }
}
