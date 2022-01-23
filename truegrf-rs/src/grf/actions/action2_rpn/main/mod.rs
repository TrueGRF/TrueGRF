mod assign;
mod compare;
mod identifier;
mod lookup;
mod math;


use super::engine::Engine;
use super::token::{
    Operator,
    Token,
};
use super::stack::Stack;

pub fn handle_token(engine: &mut Engine, token: &Token) -> Result<(), String> {
    match &token {
        Token::Number(number) => engine.stack.push(Stack::Number(*number)),
        Token::Identifier(identifier) => identifier::handle_token(engine, identifier)?,

        Token::Operator(Operator::Math(math)) => math::handle_token(engine, math)?,
        Token::Operator(Operator::Compare(compare)) => compare::handle_token(engine, compare)?,
        Token::Operator(Operator::Assign) => assign::handle_token(engine)?,
        Token::Operator(Operator::Lookup) => lookup::handle_token(engine)?,
        Token::Operator(Operator::Call) => return Err("Unexpected keyword".to_string()),

        Token::Range(_) => return Err("Unexpected keyword".to_string()),
        Token::BodyOpen(_) => return Err("Unexpected keyword".to_string()),
        Token::BodyClose => return Err("Unexpected keyword".to_string()),
        Token::Type(_) => return Err("Unexpected keyword".to_string()),
        Token::Scope(_) => return Err("Unexpected keyword".to_string()),
        Token::Comment(_) => return Err("Unexpected keyword".to_string()),
    }

    Ok(())
}
