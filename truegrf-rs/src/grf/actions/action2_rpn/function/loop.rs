use std::mem;

use super::{
    assign,
    call,
    compare,
    identifier,
    lookup,
    math,
};

use super::super::engine::Engine;
use super::super::token::{
    BodyType,
    LineTokenIterator,
    Operator,
    Token,
};
use super::super::stack::{
    Chain,
    Stack,
    StackVariable,
    stack_to_lhs,
};

pub fn handle_tokens(engine: &mut Engine, tokens: &mut LineTokenIterator) -> Result<(), String> {
    if engine.stack.len() < 2 {
        return Err(format!("Expected two parameters for loop{{, found {}", engine.stack.len()));
    }

    let list = engine.stack.pop().unwrap();
    let variable = engine.stack.pop().unwrap();

    let (keys, is_cargodict) = match list {
        Stack::Variable(StackVariable::CargoDict(list_name)) => {
            if let Some(list) = engine.constants.get(&list_name) {
                let mut keys = Vec::new();
                for key in list.keys() {
                    keys.push(*key);
                }
                (keys, true)
            } else {
                return Err("Can only loop over const list/dict/cargodict".to_string());
            }
        },
        Stack::Variable(StackVariable::List(list_name)) => {
            if let Some(list) = engine.constants.get(&list_name) {
                let mut keys = Vec::new();
                for key in list.keys() {
                    keys.push(*key);
                }
                (keys, false)
            } else {
                return Err("Can only loop over const list/dict/cargodict".to_string());
            }
        },
        Stack::Variable(StackVariable::FixedList(from, to)) => {
            ((from..to).collect::<Vec<i32>>(), false)
        },
        _ => return Err("Can only loop over const list/dict/cargodict".to_string()),
    };

    let iterator = if let Stack::Iterator(iterator) = variable {
        iterator
    } else {
        return Err("Variable for loops has to be of type 'iterator'".to_string());
    };

    /* Create a new stack for this function. */
    let func_stack = mem::take(&mut engine.stack);

    /* Look through all tokens till we find a CloseBody token. */
    let mut loop_tokens = Vec::new();
    while let Some(token) = tokens.next() {
        match &token {
            Token::BodyClose => break,
            _ => loop_tokens.push(token),
        }
    }

    for key in keys {
        for token in &loop_tokens {
            match token {
                Token::BodyClose => break,

                Token::Number(number) => engine.stack.push(Stack::Number(*number)),
                Token::Identifier(identifier) => {
                    if *identifier == iterator {
                        let key = if is_cargodict {
                            if let Some(ctt) = engine.ctt.iter().find(|(_, ctt)| **ctt as i32 == key) {
                                Stack::Ctt(ctt.0.to_string())
                            } else {
                                return Err("Cargo not found in CTT.".to_string());
                            }
                        } else {
                            Stack::Number(key)
                        };
                        engine.stack.push(key)
                    } else {
                        identifier::handle_token(engine, identifier)?
                    }
                },

                Token::Operator(Operator::Math(math)) => math::handle_token(engine, math)?,
                Token::Operator(Operator::Compare(compare)) => compare::handle_token(engine, compare)?,
                Token::Operator(Operator::Assign) => assign::handle_token(engine)?,
                Token::Operator(Operator::Lookup) => lookup::handle_token(engine)?,
                Token::Operator(Operator::Call) => call::handle_token(engine)?,

                Token::BodyOpen(BodyType::Loop) => return Err("Cannot define a loop inside a loop".to_string()),
                Token::BodyOpen(BodyType::Def) => return Err("Cannot define a function inside a loop".to_string()),
                Token::BodyOpen(BodyType::Type) => return Err("Cannot define a type inside a loop".to_string()),

                Token::Range(_) => return Err("Cannot define a range inside a loop".to_string()),

                Token::Type(_) => return Err("Unexpected keyword".to_string()),
                Token::Scope(_) => return Err("Unexpected keyword".to_string()),
                Token::Comment(_) => return Err("Unexpected keyword".to_string()),
            }
        }
    }
    engine.iterators.insert(iterator, None);

    /* Restore the original stack. */
    let loop_stack = mem::replace(&mut engine.stack, func_stack);

    // /* Convert everything on the stack to a single chain. */
    let mut chain = Chain::new();
    for stack in loop_stack {
        chain.extend(stack_to_lhs(stack)?);
    }
    if !chain.switch.is_empty() {
        return Err("Switch statements are not supported in functions".to_string());
    }

    engine.stack.push(Stack::Variable(StackVariable::Chain(chain)));

    Ok(())
}
