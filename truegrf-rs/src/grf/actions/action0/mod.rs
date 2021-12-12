mod cargo;
mod global_settings;
mod industry;
mod industry_tile;

pub use cargo::Cargo;
pub use global_settings::GlobalSetting;
pub use industry::Industry;
pub use industry::Flags as IndustryFlags;
pub use industry::CallbackFlags as IndustryCallbackFlags;
pub use industry_tile::IndustryTile;
pub use industry_tile::Flags as IndustryTileFlags;

use super::{Action, Feature, Output, write as write_action};

fn write_special(output: &mut Output, feature: Feature, id: u8, numinfo: u8, properties: &[Vec<u8>]) {
    let mut buffer: Vec<u8> = vec![
        properties.len() as u8,
        numinfo,
        id,
    ];

    for property in properties {
        buffer.extend(property);
    }

    write_action(output, Action::Action0, feature, &buffer);
}

fn write(output: &mut Output, feature: Feature, id: u8, properties: &[Vec<u8>]) {
    write_special(output, feature, id, 1, properties);
}
