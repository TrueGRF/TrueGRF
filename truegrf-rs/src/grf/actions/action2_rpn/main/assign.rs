use super::super::engine::Engine;
use super::super::stack::Stack;

pub fn handle_token(engine: &mut Engine) -> Result<(), String> {
    if engine.stack.len() < 2 {
        return Err(format!("Expected two parameters for assignment, found {}", engine.stack.len()));
    }

    let rhs = engine.stack.pop().unwrap();
    let lhs = engine.stack.pop().unwrap();

    match (&lhs, &rhs) {
        (Stack::Identifier(identifier), Stack::Number(value)) => {
            if let Some(index) = identifier.find(':') {
                let index_str = identifier[index + 1..].to_string();
                let identifier = identifier[..index].to_string();

                if let Some(variable) = engine.constants.get_mut(&identifier) {
                    variable.insert(index_str.parse::<i32>().unwrap(), *value);
                } else {
                    return Err(format!("Unknown variable '{}'.", identifier));
                }
            } else if let Some(variable) = engine.constants.get_mut(identifier) {
                variable.insert(0, *value);
            } else {
                return Err(format!("Undefined variable '{}'.", identifier));
            }
        }
        (Stack::Identifier(_), _) => return Err("Only constants are allowed outside a function".to_string()),
        _ => return Err("Left hand side of assignment must be a variable".to_string()),
    };

    Ok(())
}
