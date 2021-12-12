use super::{ActionTrait, Action, Feature, Output, Variable, vec_list, write as write_action};

pub struct VarAction2Switch {
    pub result: u16,
    pub left: u32,
    pub right: u32,
}

pub enum VarAction2OperatorVariable {
    Variable(Variable::Variable),
    Operator(VarAction2Operator),
}

pub enum VarAction2Operator {
    Subtract { left: Box<VarAction2OperatorVariable>, right: Box<VarAction2OperatorVariable> },
}

impl VarAction2OperatorVariable {
    pub fn get_buffer(&self) -> Vec<u8> {
        match self {
            VarAction2OperatorVariable::Variable(var) => var.get_buffer(),
            VarAction2OperatorVariable::Operator(op) => {
                match op {
                    VarAction2Operator::Subtract { left, right } => {
                        let mut buffer = left.get_buffer();
                        buffer[1] |= 0x20; // Mark as advanced.
                        buffer.push(0x01); // Subtract.
                        buffer.extend(right.get_buffer());
                        buffer
                    }
                }
            }
        }
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
    Advanced { set_id: u8, feature: Feature, related_object: bool, variable: Box<VarAction2OperatorVariable>, switch: &'a Vec<VarAction2Switch>, default: u16 },
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
                        write(output, Feature::IndustryTiles, *set_id, false, &variable.get_buffer(), switch, *default);
                    },
                    // IndustryVariable::Related(variable) => {
                    //     write(output, Feature::IndustryTiles, *set_id, true, &variable.get_buffer(), switch, *default);
                    // },
                }
            },
            VarAction2::IndustryTile { set_id, variable, switch, default } => {
                match variable {
                    IndustryTileVariable::Primary(variable) => {
                        write(output, Feature::IndustryTiles, *set_id, false, &variable.get_buffer(), switch, *default);
                    },
                    IndustryTileVariable::Related(variable) => {
                        write(output, Feature::IndustryTiles, *set_id, true, &variable.get_buffer(), switch, *default);
                    },
                }
            }
        }
    }
}
