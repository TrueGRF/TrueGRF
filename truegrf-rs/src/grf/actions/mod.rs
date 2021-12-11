pub mod action0;

use super::Output;

macro_rules! vec_list {
    ( $( $x:expr ),* ) => {
        {
            let mut list = Vec::new();
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
}

#[allow(dead_code)]
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

pub fn write(output: &mut Output, action: Action, feature: Feature, data: &[u8]) {
    let len = 2 + data.len();

    output.buffer.extend(len.to_le_bytes());
    output.buffer.extend(&[0xff, action as u8, feature as u8]);
    output.buffer.extend(data);
}

pub fn write_string(output: &mut Output, feature: Feature, string: &str) -> u16 {
    let mut parsed_string = string.to_string();
    parsed_string = parsed_string.replace("{SIGNED_WORD}", "\x7c");

    write(output, Action::Action4, feature, &vec_list!([0xff, 0x01], &output.string_counter.to_le_bytes(), parsed_string.as_bytes(), [0x00]));

    output.string_counter += 1;
    output.string_counter - 1
}
