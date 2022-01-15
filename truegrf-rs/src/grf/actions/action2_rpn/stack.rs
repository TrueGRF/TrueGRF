use super::super::{
    VarAction2Operator,
    VarAction2Switch,
    Variable,
};
use super::engine::Engine;
pub use super::token::{
    Scope,
    Type,
};

pub struct Chain {
    pub body: Vec<VarAction2Operator>,
    pub children: Vec<Chain>,
    pub switch: Vec<VarAction2Switch>,
}

#[derive(Clone, Copy)]
pub enum Register {
    Temporary(u8),
    Persistent(u8),
}

pub enum StackVariable {
    Register(Register),
    RegisterOffset(Register, Chain),
    ResultIndustry { inputs_outputs: bool },
    Chain(Chain),
    Procedure(Chain),
    Variable(Variable::Variable),
    VariableList(Variable::Variable),
    VariableCargoDict(Variable::Variable),
    FixedList(i32, i32),
    List(String),
    CargoDict(String),
}

pub enum Stack {
    Number(i32),
    Ctt(String),
    Iterator(String),
    Variable(StackVariable),

    /* Specific to def{ */
    Function(String),

    /* Specific to type{ */
    Scope(Scope),
    Identifier(String),
}

impl Chain {
    pub fn new() -> Self {
        Chain {
            body: Vec::new(),
            children: Vec::new(),
            switch: Vec::new(),
        }
    }

    pub fn push(&mut self, operator: VarAction2Operator) {
        self.body.push(operator);
    }

    pub fn extend(&mut self, chain: Chain) {
        let old_children_len = self.children.len();
        let old_switch_len = self.switch.len();

        self.children.extend(chain.children);

        for case in &chain.switch {
            self.switch.push(VarAction2Switch { result: case.result + old_switch_len as u16, left: case.left, right: case.right });
        }

        for operator in &chain.body {
            let result = match operator {
                VarAction2Operator::Head(Variable::Variable { variable: 0x7e, parameter, shift: _, mask: _ }) => {
                    /* Found a procedure in "chain"; ensure it points to the new index of the procedure. */
                    VarAction2Operator::Head(Variable::Global::Procedure(parameter.unwrap() + old_children_len as u8).into())
                },
                _ => operator.clone(),
            };
            self.body.push(result);
        }
    }
}

impl Clone for Chain {
    fn clone(&self) -> Self {
        Chain {
            body: self.body.clone(),
            children: self.children.clone(),
            switch: self.switch.clone(),
        }
    }
}

pub fn stack_to_lhs(stack: Stack) -> Result<Chain, String> {
    let mut chain = Chain::new();

    chain.body = match stack {
        Stack::Number(value) => vec![VarAction2Operator::Head(Variable::Global::Number(value).into())],
        Stack::Variable(StackVariable::Variable(variable)) => vec![VarAction2Operator::Head(variable)],
        Stack::Variable(StackVariable::Register(Register::Temporary(register))) => vec![VarAction2Operator::Head(Variable::Register::Temporary(register).into())],
        Stack::Variable(StackVariable::Register(Register::Persistent(register))) => vec![VarAction2Operator::Head(Variable::Register::Persistent(register).into())],

        Stack::Variable(StackVariable::RegisterOffset(register, mut offset)) => {
            match register {
                Register::Temporary(register) => {
                    offset.push(VarAction2Operator::Add(Variable::Global::Number(register as i32).into()));
                    offset.push(VarAction2Operator::Head(Variable::Global::DynamicParameter(Variable::Register::Temporary(0).into()).into()));
                },
                Register::Persistent(register) => {
                    offset.push(VarAction2Operator::Add(Variable::Global::Number(register as i32).into()));
                    offset.push(VarAction2Operator::Head(Variable::Global::DynamicParameter(Variable::Register::Persistent(0).into()).into()));
                },
            }

            return Ok(offset);
        },

        Stack::Variable(StackVariable::Procedure(procedure)) => {
            chain.children.push(procedure);

            vec![
                VarAction2Operator::Head(Variable::Global::Procedure(chain.children.len() as u8 - 1).into()),
                VarAction2Operator::Head(Variable::Global::LastComputedResult.into()),
            ]
        },

        Stack::Variable(StackVariable::Chain(var)) => return Ok(var),

        Stack::Variable(StackVariable::FixedList(_, _)) => return Err("Ranges can only be used just before loop{{".to_string()),
        Stack::Variable(StackVariable::VariableList(_)) => return Err("Expected variable, found list; lookup a key first".to_string()),
        Stack::Variable(StackVariable::VariableCargoDict(_)) => return Err("Expected variable, found cargodict; lookup a key first".to_string()),
        Stack::Variable(StackVariable::List(_)) => return Err("Expected variable, found list; lookup a key first".to_string()),
        Stack::Variable(StackVariable::CargoDict(_)) => return Err("Expected variable, found cargodict; lookup a key first".to_string()),
        Stack::Variable(StackVariable::ResultIndustry { inputs_outputs: _ }) => return Err("Expected variable, found result:inputs / result:outputs; lookup a cargo first".to_string()),
        Stack::Ctt(_) => return Err("Expected variable (you can only use ctt in lookups; not assign it to variables)".to_string()),
        Stack::Iterator(_) => return Err("Iterator can only be used inside loop{{".to_string()),
        Stack::Function(_) => return Err("Expected variable".to_string()),
        Stack::Scope(_) => return Err("Expected variable".to_string()),
        Stack::Identifier(_) => return Err("Expected variable".to_string()),
    };

    Ok(chain)
}

pub fn stack_to_rhs(engine: &mut Engine, mut chain_lhs: Chain, stack: Stack) -> Result<(Variable::Variable, Chain), String> {
    let result = match stack {
        Stack::Number(value) => (Variable::Global::Number(value).into(), chain_lhs),
        Stack::Variable(StackVariable::Variable(variable)) => (variable, chain_lhs),
        Stack::Variable(StackVariable::Register(Register::Temporary(register))) => (Variable::Register::Temporary(register).into(), chain_lhs),
        Stack::Variable(StackVariable::Register(Register::Persistent(register))) => (Variable::Register::Persistent(register).into(), chain_lhs),

        Stack::Variable(StackVariable::RegisterOffset(register, mut offset)) => {
            /* A complex offset. Generate the result of the register in a stack register. */
            let stack_register = engine.stack_register;
            engine.stack_register -= 1;

            match register {
                Register::Temporary(register) => {
                    offset.push(VarAction2Operator::Add(Variable::Global::Number(register as i32).into()));
                    offset.push(VarAction2Operator::Head(Variable::Global::DynamicParameter(Variable::Register::Temporary(0).into()).into()));
                },
                Register::Persistent(register) => {
                    offset.push(VarAction2Operator::Add(Variable::Global::Number(register as i32).into()));
                    offset.push(VarAction2Operator::Head(Variable::Global::DynamicParameter(Variable::Register::Persistent(0).into()).into()));
                },
            }
            offset.push(VarAction2Operator::StoreTemporary(Variable::Global::Number(stack_register as i32).into()));

            /* Add our chain before the current. */
            offset.extend(chain_lhs);

            (Variable::Register::Temporary(stack_register).into(), offset)
        }

        Stack::Variable(StackVariable::Procedure(procedure)) => {
            chain_lhs.children.push(procedure);

            let register = engine.stack_register;
            engine.stack_register -= 1;

            /* Store the current lhs, run the if-statement, and recover the lhs. */
            chain_lhs.push(VarAction2Operator::StoreTemporary(Variable::Global::Number(register as i32).into()));
            chain_lhs.push(VarAction2Operator::Head(Variable::Global::Procedure(chain_lhs.children.len() as u8 - 1).into()));
            chain_lhs.push(VarAction2Operator::Head(Variable::Register::Temporary(register).into()));

            /* The result of the procedure (the last computed result) is now the value for the rhs. */
            (Variable::Global::LastComputedResult.into(), chain_lhs)
        },

        Stack::Variable(StackVariable::Chain(mut chain_rhs)) => {
            /* A complex right-hand-side. Generate the result of the rhs in a stack register. */
            let stack_register = engine.stack_register;
            engine.stack_register -= 1;

            chain_rhs.push(VarAction2Operator::StoreTemporary(Variable::Global::Number(stack_register as i32).into()));

            /* Add our chain before the current. */
            chain_rhs.extend(chain_lhs);

            (Variable::Register::Temporary(stack_register).into(), chain_rhs)
        }

        Stack::Variable(StackVariable::FixedList(_, _)) => return Err("Ranges can only be used just before loop{{".to_string()),
        Stack::Variable(StackVariable::VariableList(_)) => return Err("Expected variable; lookup a key first".to_string()),
        Stack::Variable(StackVariable::VariableCargoDict(_)) => return Err("Expected variable; lookup a key first".to_string()),
        Stack::Variable(StackVariable::List(_)) => return Err("Expected variable; lookup a key first".to_string()),
        Stack::Variable(StackVariable::CargoDict(_)) => return Err("Expected variable; lookup a key first".to_string()),
        Stack::Variable(StackVariable::ResultIndustry { inputs_outputs: _ }) => return Err("Expected variable; lookup a cargo first".to_string()),
        Stack::Ctt(_) => return Err("Expected variable (you can only use ctt in lookups; not assign it to variables)".to_string()),
        Stack::Iterator(_) => return Err("Iterator can only be used inside loop{{".to_string()),
        Stack::Function(_) => return Err("Expected variable".to_string()),
        Stack::Scope(_) => return Err("Expected variable".to_string()),
        Stack::Identifier(_) => return Err("Expected variable".to_string()),
    };

    Ok(result)
}
