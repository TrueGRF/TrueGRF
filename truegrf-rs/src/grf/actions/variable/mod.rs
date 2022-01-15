use super::vec_list;

mod global;
mod industry;
mod industry_cb28;
mod industry_tile;
mod register;

pub use global::Global;
pub use industry::Industry;
pub use industry_cb28::IndustryCb28;
pub use industry_tile::IndustryTile;
pub use register::Register;

#[derive(Copy, Clone)]
pub struct Variable {
    pub variable: u8,
    pub parameter: Option<u8>,
    pub shift: u8,
    pub mask: u32,
}

impl Variable {
    pub fn get_buffer(&self, flags: u8) -> Vec<u8> {
        vec_list!(
            [self.variable],
            self.parameter.map(|x| vec![x]).unwrap_or_default(),
            [self.shift | flags],
            self.mask.to_le_bytes()
        )
    }
}
