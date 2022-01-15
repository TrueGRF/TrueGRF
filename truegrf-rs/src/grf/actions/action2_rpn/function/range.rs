use super::super::engine::Engine;
use super::super::stack::{
    Stack,
    StackVariable,
};
use super::super::token::Range;

pub fn handle_token(engine: &mut Engine, range: &Range) -> Result<(), String> {
    if engine.stack.len() < 2 {
        return Err(format!("Expected two parameters for range, found {}", engine.stack.len()));
    }

    let to = engine.stack.pop().unwrap();
    let from = engine.stack.pop().unwrap();

    let result = match (from, to) {
        (Stack::Number(from), Stack::Number(to)) => {
            if from > to {
                return Err("'from' of a range has to be smaller than 'to'".to_string());
            }

            match range {
                Range::InclIncl => Stack::Variable(StackVariable::FixedList(from, to + 1)),
                Range::InclExcl => Stack::Variable(StackVariable::FixedList(from, to)),
                Range::ExclIncl => Stack::Variable(StackVariable::FixedList(from + 1, to + 1)),
                Range::ExclExcl => Stack::Variable(StackVariable::FixedList(from + 1, to)),
            }
        },
        _ => {
            return Err("From/to of a range has to be a constant".to_string());
        },
    };

    engine.stack.push(result);

    Ok(())
}
