use super::super::engine::Engine;
use super::super::stack::{
    Register,
    Stack,
    StackVariable,
    stack_to_lhs,
};
use super::super::super::{
    Variable,
    VarAction2Operator,
};

pub fn handle_token(engine: &mut Engine) -> Result<(), String> {
    if engine.stack.len() < 2 {
        return Err(format!("Expected two parameters for assignment, found {}", engine.stack.len()));
    }

    engine.reset_stack_register();

    let rhs = engine.stack.pop().unwrap();
    let lhs = engine.stack.pop().unwrap();

    let result = match (lhs, &rhs) {
        (Stack::Variable(StackVariable::Register(register)), _) => {
            let mut chain = stack_to_lhs(rhs)?;
            match register {
                Register::Temporary(register) => chain.push(VarAction2Operator::StoreTemporary(Variable::Global::Number(register as i32).into())),
                Register::Persistent(register) => chain.push(VarAction2Operator::StorePersistent(Variable::Global::Number(register as i32).into())),
            }

            Stack::Variable(StackVariable::Chain(chain))
        },
        (Stack::Variable(StackVariable::RegisterOffset(register, mut offset)), _) => {
            let stack_register = engine.stack_register;
            engine.stack_register -= 1;

            match register {
                Register::Temporary(register) => offset.push(VarAction2Operator::Add(Variable::Global::Number(register as i32).into())),
                Register::Persistent(register) => offset.push(VarAction2Operator::Add(Variable::Global::Number(register as i32).into())),
            }
            offset.push(VarAction2Operator::StoreTemporary(Variable::Global::Number(stack_register as i32).into()));

            let mut chain = stack_to_lhs(rhs)?;
            match register {
                Register::Temporary(_) => chain.push(VarAction2Operator::StoreTemporary(Variable::Register::Temporary(stack_register).into())),
                Register::Persistent(_) => chain.push(VarAction2Operator::StorePersistent(Variable::Register::Temporary(stack_register).into())),
            }

            offset.extend(chain);

            Stack::Variable(StackVariable::Chain(offset))
        },
        (Stack::Variable(StackVariable::ResultIndustry { inputs_outputs: _ }), _) => {
            return Err("Can't assign to result:inputs / result:outputs directly; lookup a cargo first.".to_string());
        },
        _ => {
            return Err("Left hand side of assignment must be a variable".to_string());
        },
    };

    engine.stack.push(result);

    Ok(())
}
