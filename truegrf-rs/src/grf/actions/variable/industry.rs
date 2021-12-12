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
                                                                               // 8a, 8c (deprecated by ProducedCargoWaiting)
                                                                               // 8e, 8f (deprecated by ProducitonRate)
    ProductionLevel,                                                           // 93
                                                                               // 94, 96 (deprecated by ThisMonthProduction)
                                                                               // 98, 9a (deprecated by ThisMonthTransported)
                                                                               // 9c, 9d (deprecated by TransportedLastMonthPct)
                                                                               // 9e, a0 (deprecated by LastMonthProduction)
                                                                               // a2, a4 (deprecated by LastMonthTransported)
    Founder,                                                                   // a7
    Colour,                                                                    // a8
    Counter,                                                                   // aa
    BuildType,                                                                 // b3
    LastAcceptDate,                                                            // b4 (TODO -- Missing constant correction)
}

impl From<Industry> for Variable {
    fn from(variable: Industry) -> Self {
        match variable {
            Industry::WaterDistance   => Self { variable: 0x43, shift:  0, mask: 0xffffffff },
            Industry::LayoutNum       => Self { variable: 0x44, shift:  0, mask: 0x000000ff },
            Industry::FounderType     => Self { variable: 0x45, shift: 16, mask: 0x00000003 },
            Industry::FounderColour1  => Self { variable: 0x45, shift: 24, mask: 0x0000000f },
            Industry::FounderColour2  => Self { variable: 0x45, shift: 28, mask: 0x0000000f },
            Industry::BuildDate       => Self { variable: 0x46, shift:  0, mask: 0xffffffff },
            Industry::RandomBits      => Self { variable: 0x5f, shift:  8, mask: 0x0000ffff },
            Industry::ProductionLevel => Self { variable: 0x93, shift:  0, mask: 0x000000ff },
            Industry::Founder         => Self { variable: 0xa7, shift:  0, mask: 0x000000ff },
            Industry::Colour          => Self { variable: 0xa8, shift:  0, mask: 0x000000ff },
            Industry::Counter         => Self { variable: 0xaa, shift:  0, mask: 0x0000ffff },
            Industry::BuildType       => Self { variable: 0xb3, shift:  0, mask: 0x00000003 },
            Industry::LastAcceptDate  => Self { variable: 0xb4, shift:  0, mask: 0x0000ffff },
        }
    }
}
