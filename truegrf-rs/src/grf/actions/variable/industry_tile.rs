use super::Variable;

#[allow(dead_code)]
pub enum IndustryTile {
    ConstructionState,                                                         // 40
    TerrainType,                                                               // 41
    TownZone,                                                                  // 42
    RelativeX,                                                                 // 43 (together with RelativeY / RelativePos)
    RelativeY,                                                                 // 43 (together with RelativeX / RelativePos)
    RelativePos,                                                               // 43 (together with RelativeX / RelativeY)
    AnimationFrame,                                                            // 44
    RandomBits,                                                                // 5f
}

impl From<IndustryTile> for Variable {
    fn from(variable: IndustryTile) -> Self {
        match variable {
            IndustryTile::ConstructionState => Self { variable: 0x40, shift:  0, mask: 0x00000003 },
            IndustryTile::TerrainType       => Self { variable: 0x41, shift:  0, mask: 0x000000ff },
            IndustryTile::TownZone          => Self { variable: 0x42, shift:  0, mask: 0x00000007 },
            IndustryTile::RelativeX         => Self { variable: 0x43, shift:  0, mask: 0x000000ff },
            IndustryTile::RelativeY         => Self { variable: 0x43, shift:  8, mask: 0x000000ff },
            IndustryTile::RelativePos       => Self { variable: 0x43, shift:  0, mask: 0x0000ffff },
            IndustryTile::AnimationFrame    => Self { variable: 0x44, shift:  0, mask: 0x000000ff },
            IndustryTile::RandomBits        => Self { variable: 0x5f, shift:  8, mask: 0x000000ff },
        }
    }
}
