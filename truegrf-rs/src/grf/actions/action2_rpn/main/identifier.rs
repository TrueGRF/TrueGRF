use super::super::engine::Engine;
use super::super::stack::{
    Stack,
    StackVariable,
    Type,
};

pub fn handle_token(engine: &mut Engine, token: &str) -> Result<(), String> {
    if !engine.constants.contains_key(token) {
        return Err("Only constants are allowed outside a function".to_string());
    }

    if let Some(r#type) = engine.variable_is_list.get(token) {
        match r#type {
            Type::List | Type::Dict => engine.stack.push(Stack::Variable(StackVariable::List(token.to_string()))),
            Type::CargoDict => engine.stack.push(Stack::Variable(StackVariable::CargoDict(token.to_string()))),

            /* When a variable is in variable_is_list, it shouldn't be an integer. */
            Type::Integer => return Err("Unexpected keyword".to_string()),
            Type::Iterator => return Err("Unexpected keyword".to_string()),
        }
    } else {
        engine.stack.push(Stack::Identifier(token.to_string()));
    }

    Ok(())
}
