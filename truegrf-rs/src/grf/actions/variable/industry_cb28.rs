use super::Variable;

#[allow(dead_code)]
pub enum IndustryCb28 {
    RandomBits,                                                                // 5f
    Location,                                                                  // 80
    LayoutNum,                                                                 // 86
    GroundType,                                                                // 87
    TownZone,                                                                  // 88
    DistanceToTown,                                                            // 89
    CornerHeight,                                                              // 8a
    DistanceToBorder,                                                          // 8b
    EuclideanDistanceToTown,                                                   // 8d
    RandomBits2,                                                               // 8f
}

impl From<IndustryCb28> for Variable {
    fn from(variable: IndustryCb28) -> Self {
        match variable {
            IndustryCb28::RandomBits              => Self { variable: 0x5f, parameter: None, shift:  8, mask: 0x0000ffff },
            IndustryCb28::Location                => Self { variable: 0x80, parameter: None, shift:  0, mask: 0x0000ffff },
            IndustryCb28::LayoutNum               => Self { variable: 0x86, parameter: None, shift:  0, mask: 0x000000ff },
            IndustryCb28::GroundType              => Self { variable: 0x87, parameter: None, shift:  0, mask: 0x000000ff },
            IndustryCb28::TownZone                => Self { variable: 0x88, parameter: None, shift:  0, mask: 0x000000ff },
            IndustryCb28::DistanceToTown          => Self { variable: 0x89, parameter: None, shift:  0, mask: 0x000000ff },
            IndustryCb28::CornerHeight            => Self { variable: 0x8a, parameter: None, shift:  0, mask: 0x000000ff },
            IndustryCb28::DistanceToBorder        => Self { variable: 0x8b, parameter: None, shift:  0, mask: 0x0000ffff },
            IndustryCb28::EuclideanDistanceToTown => Self { variable: 0x8d, parameter: None, shift:  0, mask: 0x0000ffff },
            IndustryCb28::RandomBits2             => Self { variable: 0x8f, parameter: None, shift:  0, mask: 0xffffffff },
        }
    }
}
