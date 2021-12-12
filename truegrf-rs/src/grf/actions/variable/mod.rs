use super::vec_list;

mod global;
mod industry;
mod industry_cb28;
mod industry_tile;

pub use global::Global;
pub use industry::Industry;
pub use industry_cb28::IndustryCb28;
pub use industry_tile::IndustryTile;

pub struct Variable {
    pub variable: u8,
    pub shift: u8,
    pub mask: u32,
}

impl Variable {
    pub fn get_buffer(&self) -> Vec<u8> {
        vec_list!(
            [self.variable],
            [self.shift],
            self.mask.to_le_bytes()
        )
    }
}
