use super::super::engine::Engine;
use super::super::token::Compare;
use super::super::stack::Stack;

pub fn handle_token(engine: &mut Engine, token: &Compare) -> Result<(), String> {
    if engine.stack.len() < 4 {
        return Err(format!("Expected four parameters for {} operator, found {}", token, engine.stack.len()));
    }

    let rhs = engine.stack.pop().unwrap();
    let lhs = engine.stack.pop().unwrap();
    let if_body = engine.stack.pop().unwrap();
    let else_body = engine.stack.pop().unwrap();

    if let (Stack::Number(_), Stack::Number(_)) = (&if_body, &else_body) {
        let result = match (&lhs, &rhs) {
            (Stack::Number(lhs), Stack::Number(rhs)) => {
                /* Both sides are a constant, so calculate the result. */
                let result = match token {
                    Compare::Equal => lhs == rhs,
                    Compare::NotEqual => lhs != rhs,
                    Compare::Less => lhs < rhs,
                    Compare::LessEqual => lhs <= rhs,
                    Compare::Greater => lhs > rhs,
                    Compare::GreaterEqual => lhs >= rhs,
                };

                if result {
                    if_body
                } else {
                    else_body
                }
            },
            _ => return Err("Only constants are allowed outside a function".to_string()),
        };

        engine.stack.push(result);
    } else {
        return Err("Only constants are allowed outside a function".to_string());
    }

    Ok(())
}
