use super::engine::Engine;
use super::token::{
    LineTokenIterator,
    Token,
};
use super::stack::{
    Scope,
    Stack,
    Type,
};

pub fn handle_tokens(engine: &mut Engine, tokens: &mut LineTokenIterator) -> Result<(), String> {
    if engine.stack.is_empty() {
        return Err("Unexpected keyword before 'type{{'.".to_string());
    }
    let scope = engine.stack.pop().unwrap();
    let scope = if let Stack::Scope(scope) = scope {
        Ok(scope)
    } else {
        Err("Unexpected keyword before 'type{{'.".to_string())
    }?;

    /* Look through all tokens till we find a CloseBody token. */
    while let Some(token) = tokens.next() {
        match token {
            Token::BodyClose => break,

            Token::Number(number) => engine.stack.push(Stack::Number(number)),
            Token::Identifier(identifier) => engine.stack.push(Stack::Identifier(identifier.to_string())),

            Token::Type(r#type) => {
                let (length, variable) = if let Type::List = r#type {
                    if engine.stack.len() != 2 {
                        return Err(format!("Expected two parameters for type, found {}", engine.stack.len()));
                    }

                    let length = engine.stack.pop().unwrap();
                    let variable = engine.stack.pop().unwrap();

                    let length = if let Stack::Number(value) = length {
                        value
                    } else {
                        return Err("Expected a number for the list length.".to_string());
                    };

                    (length, variable)
                } else {
                    if engine.stack.is_empty() {
                        return Err(format!("Expected one parameters for type, found {}", engine.stack.len()));
                    }

                    let variable = engine.stack.pop().unwrap();

                    if let Type::CargoDict = r#type {
                        (64, variable)
                    } else {
                        (0, variable)
                    }
                };

                if let Stack::Identifier(variable) = variable {
                    match r#type {
                        Type::CargoDict | Type::List => {
                            /* Reserve an item for each possible entry in the list. */
                            for i in 0..length {
                                let item_name = format!("{}:{}", variable, i);

                                match scope {
                                    /* Const dict/list are lazy, and entries are created on demand. */
                                    Scope::Const => {},

                                    Scope::Local => { engine.reserve_register(&item_name, false)?; },
                                    Scope::IndustryStorage => { engine.reserve_register(&item_name, true)?; },
                                }
                            }

                            if let Scope::Const = scope {
                                engine.initialize_const(&variable)?;
                            }
                            engine.mark_variable_as_list(&variable, r#type);
                        },
                        Type::Dict => {
                            match scope {
                                Scope::Const => engine.initialize_const(&variable)?,

                                Scope::Local => return Err("Dictionaries can only be declared as const.".to_string()),
                                Scope::IndustryStorage => return Err("Dictionaries can only be declared as const.".to_string()),
                            }
                            engine.mark_variable_as_list(&variable, r#type);
                        },
                        Type::Integer => {
                            match scope {
                                Scope::Const => { engine.initialize_const(&variable)?; },
                                Scope::Local => { engine.reserve_register(&variable, false)?; },
                                Scope::IndustryStorage => { engine.reserve_register(&variable, true)?; },
                            }
                        }
                        Type::Iterator => {
                            match scope {
                                Scope::Local => { engine.initialize_iterator(&variable)?; },

                                Scope::Const => return Err("Iterators can only be declared as local.".to_string()),
                                Scope::IndustryStorage => return Err("Iterators can only be declared as local.".to_string()),
                            }
                        }
                    }
                } else {
                    return Err("Expected identifier".to_string());
                }
            },
            _ => {
                return Err("Unexpected keyword".to_string());
            },
        }
    }

    Ok(())
}
