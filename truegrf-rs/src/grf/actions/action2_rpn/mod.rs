mod engine;
mod function;
mod main;
mod stack;
mod token;
mod r#type;

use std::collections::HashMap;

use token::{
    BodyType,
    LineTokenIterator,
    Token,
};
use engine::Engine;

pub use stack::{
    Chain,
    Register,
    Stack,
};
pub use engine::Function;

fn handle_tokens(tokens: &mut LineTokenIterator, ctt: &HashMap<String, u8>) -> Result<HashMap<String, Function>, String> {
    let mut engine = Engine::new(ctt);

    while let Some(token) = tokens.next() {
        /* NNNOpen token is a bit special, as the are prefixes, not postfixes. */
        match &token {
            Token::BodyOpen(BodyType::Type) => r#type::handle_tokens(&mut engine, tokens)?,
            Token::BodyOpen(BodyType::Def) => function::handle_tokens(&mut engine, tokens)?,
            Token::Scope(scope) => engine.stack.push(Stack::Scope(*scope)),
            Token::Identifier(identifier) => {
                if let Some(index) = identifier.find(':') {
                    let namespace = identifier[..index].to_string();
                    let identifier = identifier[index + 1..].to_string();

                    match namespace.as_str() {
                        "cb" => {
                            match identifier.as_str() {
                                "production_every_256_ticks" => {},
                                "production_cargo_arrival" => {},
                                "production_initial" => {},
                                "production_change_monthly" => {},
                                "production_change_random" => {},
                                _ => {
                                    return Err(format!("Unknown callback function {}", identifier));
                                }
                            };
                            engine.stack.push(Stack::Function(format!("cb:{}", identifier)));
                        },
                        "func" => {
                            engine.stack.push(Stack::Function(identifier));
                        },
                        "ctt" => {
                            engine.stack.push(Stack::Ctt(identifier));
                        },
                        _ => return Err("Unexpected keyword".to_string()),
                    }
                } else {
                    main::handle_token(&mut engine, &token)?;
                }
            },
            /* Anything else might be calculations for constants. */
            _ => main::handle_token(&mut engine, &token)?,
        }
    }

    Ok(engine.functions)
}

pub fn parse(input: &str, ctt: &HashMap<String, u8>) -> Result<HashMap<String, Function>, String> {
    let mut tokens = LineTokenIterator::new(input);

    /* Ensure that errors are prefixed with the location is happened in,
     * so users can understand where it went wrong. */
    match handle_tokens(&mut tokens, ctt) {
        Ok(result) => Ok(result),
        Err(err) => {
            Err(format!("[{}:{}, around '{}'] {}", tokens.line, tokens.position, tokens.current_token, err))
        }
    }
}
