use super::super::engine::Engine;
use super::super::stack::{
    Stack,
    StackVariable,
};

pub fn handle_token(engine: &mut Engine) -> Result<(), String> {
    if engine.stack.len() < 2 {
        return Err(format!("Expected two parameters for lookup, found {}", engine.stack.len()));
    }

    let rhs = engine.stack.pop().unwrap();
    let lhs = engine.stack.pop().unwrap();

    let result = match (&lhs, rhs) {
        (Stack::Variable(StackVariable::List(list_name)), Stack::Number(value)) => {
            let list = engine.constants.get_mut(list_name).unwrap();

            list.entry(value).or_insert(0);

            Stack::Identifier(format!("{}:{}", list_name, value))
        },
        (Stack::Variable(StackVariable::List(_)), _) => {
            return Err("Left hand side of lookup must be a number".to_string());
        },
        (Stack::Variable(StackVariable::CargoDict(dict_name)), Stack::Ctt(value)) => {
            let value = if let Some(value) = engine.ctt.get(&value) {
                value
            } else {
                return Err("Unknown cargo type".to_string());
            };

            if let Some(dict) = engine.constants.get_mut(dict_name) {
                dict.entry(*value as i32).or_insert(0);
            } else {
                return Err(format!("Unknown variable '{}'.", dict_name));
            }

            Stack::Identifier(format!("{}:{}", dict_name, value))
        },
        (Stack::Variable(StackVariable::CargoDict(_)), _) => {
            return Err("Right hand side of lookup must be a CTT".to_string());
        },
        _ => {
            return Err("Left hand side of lookup must be a list".to_string());
        },
    };

    engine.stack.push(result);

    Ok(())
}
