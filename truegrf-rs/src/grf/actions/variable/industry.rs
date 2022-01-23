use super::Variable;

#[allow(dead_code)]
pub enum Industry {
                                                                               // 40, 41, 42 (deprecated by IncomingCargoWaiting)
    WaterDistance,                                                             // 43
    LayoutNum,                                                                 // 44
    FounderType,                                                               // 45 (together with FounderColour1 / FounderColour2)
    FounderColour1,                                                            // 45 (together with FounderType / FounderColour2)
    FounderColour2,                                                            // 45 (together with FounderType / FounderColour1)
    BuildDate,                                                                 // 46
    RandomBits,                                                                // 5f
    TileId(u8),                                                                // 60
    TileRandom(u8),                                                            // 61
    TileSlope(u8),                                                             // 62
    TileIsWater(u8),                                                           // 62
    TileTerrainType(u8),                                                       // 62
    TileWaterClass(u8),                                                        // 62
    TileHeight(u8),                                                            // 62
    TileClass(u8),                                                             // 62
    TileAnimationFrame(u8),                                                    // 63
                                                                               // 64 (deprecated by IndustryManhattanDistance)
    TownManhattanDistance,                                                     // 65
    TownZone,                                                                  // 65
    TownEuclideanDistance,                                                     // 66
                                                                               // 67 (TODO -- Not implemented)
                                                                               // 68 (TODO -- Not implemented)
    CargoProducedWaiting(u8),                                                  // 69
    CargoProductionThisMonth(u8),                                              // 6a
    CargoTransportedThisMonth(u8),                                             // 6b
    CargoProductionLastMonth(u8),                                              // 6c
    CargoTransportedLastMonth(u8),                                             // 6d
    CargoLastAcceptedAt(u8),                                                   // 6e
    CargoIncomingWaiting(u8),                                                  // 6f
    ProductionRate(u8),                                                        // 70
                                                                               // 71 (can easily be calculated based on 6c / 6d)
                                                                               // 8a, 8c (deprecated by CargoProducedWaiting)
                                                                               // 8e, 8f (deprecated by ProductionRate)
    ProductionLevel,                                                           // 93
                                                                               // 94, 96 (deprecated by CargoProductionThisMonth)
                                                                               // 98, 9a (deprecated by CargoTransportedThisMonth)
                                                                               // 9c, 9d (deprecated by CargoLastMonthTransportedPercent)
                                                                               // 9e, a0 (deprecated by CargoProductionLastMonth)
                                                                               // a2, a4 (deprecated by CargoTransportedLastMonth)
    Founder,                                                                   // a7
    Colour,                                                                    // a8
    Counter,                                                                   // aa
    BuildType,                                                                 // b3
    LastAcceptDate,                                                            // b4 (TODO -- Missing constant correction)
}

impl From<Industry> for Variable {
    fn from(variable: Industry) -> Self {
        match variable {
            Industry::WaterDistance                    => Self { variable: 0x43, parameter: None, shift:  0, mask: 0xffffffff },
            Industry::LayoutNum                        => Self { variable: 0x44, parameter: None, shift:  0, mask: 0x000000ff },
            Industry::FounderType                      => Self { variable: 0x45, parameter: None, shift: 16, mask: 0x00000003 },
            Industry::FounderColour1                   => Self { variable: 0x45, parameter: None, shift: 24, mask: 0x0000000f },
            Industry::FounderColour2                   => Self { variable: 0x45, parameter: None, shift: 28, mask: 0x0000000f },
            Industry::BuildDate                        => Self { variable: 0x46, parameter: None, shift:  0, mask: 0xffffffff },
            Industry::RandomBits                       => Self { variable: 0x5f, parameter: None, shift:  8, mask: 0x0000ffff },
            Industry::TileId(offset)                   => Self { variable: 0x60, parameter: Some(offset), shift:  0, mask: 0x0000ffff },
            Industry::TileRandom(offset)               => Self { variable: 0x61, parameter: Some(offset), shift:  0, mask: 0x000000ff },
            Industry::TileSlope(offset)                => Self { variable: 0x62, parameter: Some(offset), shift:  0, mask: 0x0000001f },
            Industry::TileIsWater(offset)              => Self { variable: 0x62, parameter: Some(offset), shift:  9, mask: 0x00000001 },
            Industry::TileTerrainType(offset)          => Self { variable: 0x62, parameter: Some(offset), shift: 10, mask: 0x00000007 },
            Industry::TileWaterClass(offset)           => Self { variable: 0x62, parameter: Some(offset), shift: 13, mask: 0x00000003 },
            Industry::TileHeight(offset)               => Self { variable: 0x62, parameter: Some(offset), shift: 16, mask: 0x000000ff },
            Industry::TileClass(offset)                => Self { variable: 0x62, parameter: Some(offset), shift: 24, mask: 0x0000000f },
            Industry::TileAnimationFrame(offset)       => Self { variable: 0x63, parameter: Some(offset), shift:  0, mask: 0x000000ff },
            Industry::TownManhattanDistance            => Self { variable: 0x65, parameter: Some(0), shift:  0, mask: 0x0000ffff },
            Industry::TownZone                         => Self { variable: 0x65, parameter: Some(0), shift: 16, mask: 0x000000ff },
            Industry::TownEuclideanDistance            => Self { variable: 0x66, parameter: Some(0), shift:  0, mask: 0x0000ffff },
            Industry::CargoProducedWaiting(cargo)      => Self { variable: 0x69, parameter: Some(cargo), shift:  0, mask: 0xffffffff },
            Industry::CargoProductionThisMonth(cargo)  => Self { variable: 0x6a, parameter: Some(cargo), shift:  0, mask: 0xffffffff },
            Industry::CargoTransportedThisMonth(cargo) => Self { variable: 0x6b, parameter: Some(cargo), shift:  0, mask: 0xffffffff },
            Industry::CargoProductionLastMonth(cargo)  => Self { variable: 0x6c, parameter: Some(cargo), shift:  0, mask: 0xffffffff },
            Industry::CargoTransportedLastMonth(cargo) => Self { variable: 0x6d, parameter: Some(cargo), shift:  0, mask: 0xffffffff },
            Industry::CargoLastAcceptedAt(cargo)       => Self { variable: 0x6e, parameter: Some(cargo), shift:  0, mask: 0xffffffff },
            Industry::CargoIncomingWaiting(cargo)      => Self { variable: 0x6f, parameter: Some(cargo), shift:  0, mask: 0xffffffff },
            Industry::ProductionRate(cargo)            => Self { variable: 0x70, parameter: Some(cargo), shift:  0, mask: 0xffffffff },
            Industry::ProductionLevel                  => Self { variable: 0x93, parameter: None, shift:  0, mask: 0x000000ff },
            Industry::Founder                          => Self { variable: 0xa7, parameter: None, shift:  0, mask: 0x000000ff },
            Industry::Colour                           => Self { variable: 0xa8, parameter: None, shift:  0, mask: 0x000000ff },
            Industry::Counter                          => Self { variable: 0xaa, parameter: None, shift:  0, mask: 0x0000ffff },
            Industry::BuildType                        => Self { variable: 0xb3, parameter: None, shift:  0, mask: 0x00000003 },
            Industry::LastAcceptDate                   => Self { variable: 0xb4, parameter: None, shift:  0, mask: 0x0000ffff },
        }
    }
}
