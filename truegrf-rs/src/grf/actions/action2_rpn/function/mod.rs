mod assign;
mod call;
mod compare;
mod identifier;
mod lookup;
mod range;
mod r#loop;
mod math;


use std::mem;

use super::engine::{
    Engine,
    Function,
    FunctionResult,
};
use super::token::{
    BodyType,
    LineTokenIterator,
    Operator,
    Token,
};
use super::stack::{
    Chain,
    Stack,
    stack_to_lhs,
};

pub fn handle_tokens(engine: &mut Engine, tokens: &mut LineTokenIterator) -> Result<(), String> {
    if engine.stack.is_empty() {
        return Err("Unexpected keyword before 'def{{'.".to_string());
    }
    let name = engine.stack.pop().unwrap();
    let name = if let Stack::Function(name) = name {
        if engine.functions.contains_key(&name) {
            return Err(format!("Function name '{}' already exists.", name));
        }
        Ok(name)
    } else {
        Err("Unexpected keyword before 'def{{'.".to_string())
    }?;

    /* Create a new stack/result for this function. */
    let main_stack = mem::take(&mut engine.stack);
    let main_result = mem::replace(&mut engine.result, FunctionResult::new());

    /* Look through all tokens till we find a CloseBody token. */
    while let Some(token) = tokens.next() {
        match &token {
            Token::BodyClose => break,

            Token::Number(number) => engine.stack.push(Stack::Number(*number)),
            Token::Identifier(identifier) => identifier::handle_token(engine, identifier)?,
            Token::Range(range) => range::handle_token(engine, range)?,

            Token::Operator(Operator::Math(math)) => math::handle_token(engine, math)?,
            Token::Operator(Operator::Compare(compare)) => compare::handle_token(engine, compare)?,
            Token::Operator(Operator::Assign) => assign::handle_token(engine)?,
            Token::Operator(Operator::Lookup) => lookup::handle_token(engine)?,
            Token::Operator(Operator::Call) => call::handle_token(engine)?,

            Token::BodyOpen(BodyType::Loop) => r#loop::handle_tokens(engine, tokens)?,

            Token::BodyOpen(BodyType::Def) => return Err("Cannot define a function inside a function".to_string()),
            Token::BodyOpen(BodyType::Type) => return Err("Cannot define a type inside a function".to_string()),

            Token::Type(_) => return Err("Unexpected keyword".to_string()),
            Token::Scope(_) => return Err("Unexpected keyword".to_string()),
            Token::Comment(_) => return Err("Unexpected keyword".to_string()),
        }
    }

    /* Restore the original stack and result. */
    let func_stack = mem::replace(&mut engine.stack, main_stack);
    let func_result = mem::replace(&mut engine.result, main_result);

    /* Convert everything on the stack to a single chain. */
    let mut chain = Chain::new();
    for stack in func_stack {
        chain.extend(stack_to_lhs(stack)?);
    }
    if !chain.switch.is_empty() {
        return Err("Switch statements are not supported in functions".to_string());
    }

    /* Create the function result. */
    let function = Function {
        result: func_result,
        chain,
    };
    engine.functions.insert(name, function);

    Ok(())
}
