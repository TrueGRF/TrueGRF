use super::super::engine::Engine;
use super::super::stack::{
    Stack,
    StackVariable,
};

pub fn handle_token(engine: &mut Engine) -> Result<(), String> {
    if engine.stack.is_empty() {
        return Err(format!("Expected one parameter for call, found {}", engine.stack.len()));
    }

    let function = engine.stack.pop().unwrap();

    match function {
        Stack::Function(function_name) => {
            if let Some(function) = engine.functions.get(&function_name) {
                engine.stack.push(Stack::Variable(StackVariable::Chain(function.chain.clone())));

                /* Copy over the result from the function, if any is set. */
                engine.result.merge(&function.result);
            } else {
                return Err(format!("Function {} not found", function_name));
            }
        },
        _ => {
            return Err("Expected function for call".to_string());
        },
    }

    Ok(())
}
