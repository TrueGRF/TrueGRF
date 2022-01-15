use super::super::engine::Engine;
use super::super::token::Math;
use super::super::stack::{
    Stack,
    StackVariable,
    stack_to_lhs,
    stack_to_rhs,
};
use super::super::super::{
    VarAction2Operator,
};

pub fn handle_token(engine: &mut Engine, token: &Math) -> Result<(), String> {
    if engine.stack.len() < 2 {
        return Err(format!("Expected two parameters for {} operator, found {}", token, engine.stack.len()));
    }

    let rhs = engine.stack.pop().unwrap();
    let lhs = engine.stack.pop().unwrap();

     let result = match (&lhs, &rhs) {
        (Stack::Number(lhs), Stack::Number(rhs)) => {
            /* Both sides are a constant, so calculate the result. */
            let result = match token {
                Math::Add => lhs + rhs,
                Math::Subtract => lhs - rhs,
                Math::Multiply => lhs * rhs,
                Math::Divide => lhs / rhs,
                Math::Modulo => lhs % rhs,
                Math::Min => *lhs.min(rhs),
                Math::Max => *lhs.max(rhs),
                Math::And => lhs & rhs,
                Math::Or => lhs | rhs,
                Math::Xor => lhs ^ rhs,
            };
            Stack::Number(result)
        },
        _ => {
            /* Either side is not a constant, so deligate to NewGRF. */
            let chain = stack_to_lhs(lhs)?;

            let (variable, mut chain) = stack_to_rhs(engine, chain, rhs)?;

            let operator = match token {
                Math::Add => VarAction2Operator::Add(variable),
                Math::Subtract => VarAction2Operator::Subtract(variable),
                Math::Multiply => VarAction2Operator::Multiply(variable),
                Math::Divide => VarAction2Operator::Divide(variable),
                Math::Modulo => VarAction2Operator::Modulo(variable),
                Math::Min => VarAction2Operator::Min(variable),
                Math::Max => VarAction2Operator::Max(variable),
                Math::And => VarAction2Operator::And(variable),
                Math::Or => VarAction2Operator::Or(variable),
                Math::Xor => VarAction2Operator::Xor(variable),
            };
            chain.push(operator);

            Stack::Variable(StackVariable::Chain(chain))
        },
    };

    engine.stack.push(result);

    Ok(())
}
