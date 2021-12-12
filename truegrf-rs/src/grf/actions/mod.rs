pub mod action0;
mod action1;
mod action2;
mod action8;
mod action14;
mod varaction2;
pub mod variable;

pub use action0 as Action0;
pub use action1::Action1;
pub use action2::Action2;
pub use action8::Action8;
pub use action14::Action14;
pub use varaction2::{VarAction2, VarAction2Switch, VarAction2Operator, VarAction2OperatorVariable};
pub use variable as Variable;

use super::Output;

macro_rules! vec_list {
    ( $( $x:expr ),* ) => {
        {
            let mut list: Vec<u8> = Vec::new();
            $(
                list.extend($x);
            )*
            list
        }
    };
}
pub(crate) use vec_list;

#[allow(dead_code)]
pub enum Action {
    Action0 = 0,
    Action1,
    Action2,
    Action3,
    Action4,
    Action5,
    Action6,
    Action7,
    Action8,
    Action9,
    ActionA,
    ActionB,
    ActionC,
    ActionD,
    ActionE,
    ActionF,
    Action10,
    Action11,
    Action12,
    Action13,
    Action14,
}

#[allow(dead_code)]
#[derive(Clone, Copy)]
pub enum Feature {
    Trains = 0,
    RoadVehicles,
    Ships,
    Aircraft,
    Stations,
    Canals,
    Bridges,
    Houses,
    GlobalSettings,
    IndustryTiles,
    Industries,
    Cargoes,
    SoundEffects,
    Airports,
    Objects,
    Railtypes,
    AirportTiles,
    Roadtypes,
    Tramtypes,
}

pub trait ActionTrait {
    fn write(&self, output: &mut Output);
}

pub fn write_special(output: &mut Output, action: Action, data: &[u8]) {
    output.buffer.extend(vec_list!(
        (1 + data.len() as u32).to_le_bytes(),
        [0xff],
        &[action as u8],
        data
    ));
}

pub fn write(output: &mut Output, action: Action, feature: Feature, data: &[u8]) {
    output.buffer.extend(vec_list!(
        (2 + data.len() as u32).to_le_bytes(),
        [0xff],
        [action as u8, feature as u8],
        data
    ));
}

pub fn write_string(output: &mut Output, feature: Feature, string: &str) -> u16 {
    let mut parsed_string = string.to_string();
    parsed_string = parsed_string.replace("{SIGNED_WORD}", "\x7c");

    write(output, Action::Action4, feature, &vec_list!(
        [0xff, 0x01],
        &output.string_counter.to_le_bytes(),
        parsed_string.as_bytes(),
        [0x00]
    ));

    output.string_counter += 1;
    output.string_counter - 1
}
