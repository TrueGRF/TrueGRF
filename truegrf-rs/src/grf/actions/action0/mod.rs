mod cargo;
mod industry;
mod industry_tiles;

pub use cargo::Cargo;
pub use industry::Industry;
pub use industry::Flags as IndustryFlags;
pub use industry::CallbackFlags as IndustryCallbackFlags;
pub use industry_tiles::IndustryTiles;
pub use industry_tiles::Flags as IndustryTilesFlags;

use super::{Action, Feature, Output, write as write_action};

fn write(output: &mut Output, feature: Feature, id: u8, properties: &[Vec<u8>]) {
    let mut buffer: Vec<u8> = vec![
        properties.len() as u8,
        0x01, // Num-info
        id,
    ];

    for property in properties {
        buffer.extend(property);
    }

    write_action(output, Action::Action0, feature, &buffer);
}
