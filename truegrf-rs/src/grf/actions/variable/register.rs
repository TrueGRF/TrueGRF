use super::Variable;

#[allow(dead_code)]
pub enum Register {
    Temporary(u8),
    Persistent(u8),
}

impl From<Register> for Variable {
    fn from(variable: Register) -> Self {
        match variable {
            Register::Temporary(register) => Self { variable: 0x7D, parameter: Some(register), shift: 0, mask: 0xffffffff },
            Register::Persistent(register) => Self { variable: 0x7C, parameter: Some(register), shift: 0, mask: 0xffffffff },
        }
    }
}
