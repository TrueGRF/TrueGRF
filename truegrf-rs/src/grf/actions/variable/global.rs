use super::Variable;

#[allow(dead_code)]
pub enum Global {
    CurrentMonth,                                                              // 02 (together with CurrentDayOfMonth / IsLeapYear / CurrentDayOfYear)
    CurrentDayOfMonth,                                                         // 02 (together with CurrentMonth / IsLeapYear / CurrentDayOfYear)
    IsLeapYear,                                                                // 02 (together with CurrentMonth / CurrentDayOfMonth / CurrentDayOfYear)
    CurrentDayOfYear,                                                          // 02 (together with CurrentMonth / CurrentDayOfMonth / IsLeapYear)
    TrafficSide,                                                               // 06
    AnimationCounter,                                                          // 0a
    CurrentCallback,                                                           // 0c
    ExtraCallbackInfo1,                                                        // 10
    GameMode,                                                                  // 12
    ExtraCallbackInfo2,                                                        // 18
    Number(i32),                                                               // 1a
    DisplayOptions,                                                            // 1b
    LastComputedResult,                                                        // 1c
    SnowlineHeight,                                                            // 20
    DifficultyLevel,                                                           // 22
    CurrentDate,                                                               // 23
    CurrentYear,                                                               // 24

    DynamicParameter(Variable),                                                // 7B
    Procedure(u8),                                                             // 7E
}

impl From<Global> for Variable {
    fn from(variable: Global) -> Self {
        match variable {
            Global::CurrentMonth         => Self { variable: 0x02, parameter: None, shift:  0, mask: 0x000000ff },
            Global::CurrentDayOfMonth    => Self { variable: 0x02, parameter: None, shift:  8, mask: 0x0000001f },
            Global::IsLeapYear           => Self { variable: 0x02, parameter: None, shift: 15, mask: 0x00000001 },
            Global::CurrentDayOfYear     => Self { variable: 0x02, parameter: None, shift: 16, mask: 0x000001ff },
            Global::TrafficSide          => Self { variable: 0x06, parameter: None, shift:  4, mask: 0x00000001 },
            Global::AnimationCounter     => Self { variable: 0x0a, parameter: None, shift:  0, mask: 0x0000ffff },
            Global::CurrentCallback      => Self { variable: 0x0c, parameter: None, shift:  0, mask: 0x0000ffff },
            Global::ExtraCallbackInfo1   => Self { variable: 0x10, parameter: None, shift:  0, mask: 0xffffffff },
            Global::GameMode             => Self { variable: 0x12, parameter: None, shift:  0, mask: 0x000000ff },
            Global::ExtraCallbackInfo2   => Self { variable: 0x18, parameter: None, shift:  0, mask: 0xffffffff },
            Global::Number(value)        => Self { variable: 0x1a, parameter: None, shift:  0, mask: value as u32 },
            Global::DisplayOptions       => Self { variable: 0x1b, parameter: None, shift:  0, mask: 0x0000003f },
            Global::LastComputedResult   => Self { variable: 0x1c, parameter: None, shift:  0, mask: 0xffffffff },
            Global::SnowlineHeight       => Self { variable: 0x20, parameter: None, shift:  0, mask: 0x000000ff },
            Global::DifficultyLevel      => Self { variable: 0x22, parameter: None, shift:  0, mask: 0x000000ff },
            Global::CurrentDate          => Self { variable: 0x23, parameter: None, shift:  0, mask: 0xffffffff },
            Global::CurrentYear          => Self { variable: 0x24, parameter: None, shift:  0, mask: 0xffffffff },
            Global::DynamicParameter(variable) => Self { variable: 0x7b, parameter: Some(variable.variable), shift: variable.shift, mask: variable.mask },
            Global::Procedure(setid)     => Self { variable: 0x7e, parameter: Some(setid), shift:  0, mask: 0xffffffff },
        }
    }
}
