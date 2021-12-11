use super::{Action, ActionTrait, Output, vec_list, write_special};

pub enum Action8<'a> {
    General { grfid: &'a String, name: &'a String, description: &'a String },
}

impl<'a> ActionTrait for Action8<'a> {
    fn write(&self, output: &mut Output) {
        match self {
            Action8::General { grfid, name, description } => {
                write_special(output, Action::Action8, &vec_list!(
                    [0x08],
                    &*grfid.as_bytes(),
                    &*name.as_bytes(),
                    [0x00],
                    &*description.as_bytes(),
                    [0x00]
                ));
            }
        }
    }
}
