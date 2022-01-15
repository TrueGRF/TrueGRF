use super::{ActionTrait, Action, Feature, Output, Variable, vec_list, write as write_action};

pub struct VarAction2Switch {
    pub result: u16,
    pub left: u32,
    pub right: u32,
}

#[allow(non_camel_case_types)]
pub enum VarAction2Operator {
    Head(Variable::Variable),

    Add(Variable::Variable),
    Subtract(Variable::Variable),
    Multiply(Variable::Variable),
    Divide(Variable::Variable),
    Modulo(Variable::Variable),

    Min(Variable::Variable),
    Max(Variable::Variable),

    And(Variable::Variable),
    Or(Variable::Variable),
    Xor(Variable::Variable),

    Compare(Variable::Variable),

    StoreTemporary(Variable::Variable),
    StorePersistent(Variable::Variable),
}

pub type VarAction2Chain = Vec<VarAction2Operator>;

pub fn varaction2_common(operator: u8, variable: &Variable::Variable, flags: u8) -> Vec<u8> {
    let mut buffer = vec![operator];
    buffer.extend(variable.get_buffer(flags));
    buffer
}

impl Clone for VarAction2Switch {
    fn clone(&self) -> Self {
        Self {
            result: self.result,
            left: self.left,
            right: self.right,
        }
    }
}

impl Clone for VarAction2Operator {
    fn clone(&self) -> Self {
        match self {
            VarAction2Operator::Head(variable) => VarAction2Operator::Head(*variable),

            VarAction2Operator::Add(variable) => VarAction2Operator::Add(*variable),
            VarAction2Operator::Subtract(variable) => VarAction2Operator::Subtract(*variable),
            VarAction2Operator::Multiply(variable) => VarAction2Operator::Multiply(*variable),
            VarAction2Operator::Divide(variable) => VarAction2Operator::Divide(*variable),
            VarAction2Operator::Modulo(variable) => VarAction2Operator::Modulo(*variable),

            VarAction2Operator::Min(variable) => VarAction2Operator::Min(*variable),
            VarAction2Operator::Max(variable) => VarAction2Operator::Max(*variable),

            VarAction2Operator::And(variable) => VarAction2Operator::And(*variable),
            VarAction2Operator::Or(variable) => VarAction2Operator::Or(*variable),
            VarAction2Operator::Xor(variable) => VarAction2Operator::Xor(*variable),

            VarAction2Operator::Compare(variable) => VarAction2Operator::Compare(*variable),

            VarAction2Operator::StoreTemporary(variable) => VarAction2Operator::StoreTemporary(*variable),
            VarAction2Operator::StorePersistent(variable) => VarAction2Operator::StorePersistent(*variable),
        }
    }
}

impl VarAction2Operator {
    fn get_buffer(&self, first: bool, last: bool) -> Vec<u8> {
        let flags = if last { 0 } else { 0x20 };

        match self {
            VarAction2Operator::Add(variable) => {
                if first { panic!("Add operator can't be first in chain!"); }
                varaction2_common(0x00, variable, flags)
            },
            VarAction2Operator::Subtract(variable) => {
                if first { panic!("Subtract operator can't be first in chain!"); }
                varaction2_common(0x01, variable, flags)
            },
            VarAction2Operator::Min(variable) => {
                if first { panic!("Min operator can't be first in chain!"); }
                varaction2_common(0x02, variable, flags)
            },
            VarAction2Operator::Max(variable) => {
                if first { panic!("Max operator can't be first in chain!"); }
                varaction2_common(0x03, variable, flags)
            },
            // 04, unsigned min
            // 05, unsigned max
            VarAction2Operator::Divide(variable) => {
                if first { panic!("Divide operator can't be first in chain!"); }
                varaction2_common(0x06, variable, flags)
            },
            VarAction2Operator::Modulo(variable) => {
                if first { panic!("Modulo operator can't be first in chain!"); }
                varaction2_common(0x07, variable, flags)
            },
            // 08, unsigned divide
            // 09, unsigned modulo
            VarAction2Operator::Multiply(variable) => {
                if first { panic!("Multiply operator can't be first in chain!"); }
                varaction2_common(0x0a, variable, flags)
            },
            VarAction2Operator::And(variable) => {
                if first { panic!("And operator can't be first in chain!"); }
                varaction2_common(0x0b, variable, flags)
            },
            VarAction2Operator::Or(variable) => {
                if first { panic!("Or operator can't be first in chain!"); }
                varaction2_common(0x0c, variable, flags)
            },
            VarAction2Operator::Xor(variable) => {
                if first { panic!("Xor operator can't be first in chain!"); }
                varaction2_common(0x0d, variable, flags)
            },
            VarAction2Operator::StoreTemporary(variable) => {
                if first { panic!("StoreTemporary operator can't be first in chain!"); }
                varaction2_common(0x0e, variable, flags)
            },
            VarAction2Operator::Head(variable) => {
                /* This allows for two chains be stiched together by just putting one after the other. */
                if first {
                    variable.get_buffer(flags)
                } else {
                    varaction2_common(0x0f, variable, flags)
                }
            },
            VarAction2Operator::StorePersistent(variable) => {
                if first { panic!("StorePersistent operator can't be first in chain!"); }
                varaction2_common(0x10, variable, flags)
            },
            // TODO -- 11, ror / rot
            VarAction2Operator::Compare(variable) => {
                if first { panic!("Compare operator can't be first in chain!"); }
                varaction2_common(0x12, variable, flags)
            },
            // 13, unsigned compare
            // TODO -- 14, lshift
            // 15, unsigned rshift
            // TODO -- 16, rshift
        }
    }
}

pub trait VarAction2ChainAction {
    fn get_buffer(&self) -> Vec<u8>;
}

impl VarAction2ChainAction for VarAction2Chain {
    fn get_buffer(&self) -> Vec<u8> {
        let mut buffer = Vec::new();
        let last = self.len() - 1;
        for (i, operator) in self.iter().enumerate() {
            buffer.extend(operator.get_buffer(i == 0, i == last));
        }
        buffer
    }
}

pub trait VarAction2Variable {
    fn get_buffer() -> Vec<u8>;
}

pub enum IndustryTileVariable {
    Primary(Variable::Variable),
    Related(Variable::Variable),
}
impl From<Variable::Global> for IndustryTileVariable {
    fn from(variable: Variable::Global) -> Self {
        IndustryTileVariable::Primary(Variable::Variable::from(variable))
    }
}
impl From<Variable::IndustryTile> for IndustryTileVariable {
    fn from(variable: Variable::IndustryTile) -> Self {
        IndustryTileVariable::Primary(Variable::Variable::from(variable))
    }
}
impl From<Variable::Industry> for IndustryTileVariable {
    fn from(variable: Variable::Industry) -> Self {
        IndustryTileVariable::Related(Variable::Variable::from(variable))
    }
}

pub enum IndustryVariable {
    Primary(Variable::Variable),
    // Related(Variable::Variable),
}
impl From<Variable::Global> for IndustryVariable {
    fn from(variable: Variable::Global) -> Self {
        IndustryVariable::Primary(Variable::Variable::from(variable))
    }
}
impl From<Variable::Industry> for IndustryVariable {
    fn from(variable: Variable::Industry) -> Self {
        IndustryVariable::Primary(Variable::Variable::from(variable))
    }
}
// impl From<Variable::Industry> for IndustryVariable {
//     fn from(variable: Variable::Town) -> Self {
//         IndustryVariable::Related(Variable::Variable::from(variable))
//     }
// }

pub enum VarAction2<'a> {
    Advanced { set_id: u8, feature: Feature, related_object: bool, variable: &'a VarAction2Chain, switch: &'a Vec<VarAction2Switch>, default: u16 },
    Industry { set_id: u8, variable: IndustryVariable, switch: &'a Vec<VarAction2Switch>, default: u16 },
    IndustryTile { set_id: u8, variable: IndustryTileVariable, switch: &'a Vec<VarAction2Switch>, default: u16 },
}

fn write(output: &mut Output, feature: Feature, set_id: u8, related_object: bool, variable: &[u8], switch: &[VarAction2Switch], default: u16) {
    write_action(output, Action::Action2, feature, &vec_list!(
        [set_id],
        if related_object { [0x8a] } else { [0x89] },
        variable,
        [switch.len() as u8],
        switch.iter().map(|s| vec_list!(
            &s.result.to_le_bytes(),
            &s.left.to_le_bytes(),
            &s.right.to_le_bytes()
        )).flatten(),
        default.to_le_bytes()
    ));
}

impl<'a> ActionTrait for VarAction2<'a> {
    fn write(&self, output: &mut Output) {
        match self {
            VarAction2::Advanced { set_id, feature, related_object, variable, switch, default } => {
                write(output, *feature, *set_id, *related_object, &variable.get_buffer(), switch, *default);
            },
            VarAction2::Industry { set_id, variable, switch, default } => {
                match variable {
                    IndustryVariable::Primary(variable) => {
                        write(output, Feature::IndustryTiles, *set_id, false, &variable.get_buffer(0), switch, *default);
                    },
                    // IndustryVariable::Related(variable) => {
                    //     write(output, Feature::IndustryTiles, *set_id, true, &variable.get_buffer(), switch, *default);
                    // },
                }
            },
            VarAction2::IndustryTile { set_id, variable, switch, default } => {
                match variable {
                    IndustryTileVariable::Primary(variable) => {
                        write(output, Feature::IndustryTiles, *set_id, false, &variable.get_buffer(0), switch, *default);
                    },
                    IndustryTileVariable::Related(variable) => {
                        write(output, Feature::IndustryTiles, *set_id, true, &variable.get_buffer(0), switch, *default);
                    },
                }
            }
        }
    }
}
