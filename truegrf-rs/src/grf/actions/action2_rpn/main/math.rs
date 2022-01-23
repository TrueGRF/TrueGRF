use super::super::engine::Engine;
use super::super::token::Math;
use super::super::stack::Stack;

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
        _ => return Err("Only constants are allowed outside a function".to_string()),
    };

    engine.stack.push(result);

    Ok(())
}
