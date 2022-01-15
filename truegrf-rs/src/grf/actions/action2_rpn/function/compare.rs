use super::super::engine::Engine;
use super::super::token::Compare;
use super::super::stack::{
    Stack,
    StackVariable,
    stack_to_lhs,
    stack_to_rhs,
};
use super::super::super::{
    VarAction2Operator,
    VarAction2Switch,
};

pub fn handle_token(engine: &mut Engine, token: &Compare) -> Result<(), String> {
    if engine.stack.len() < 4 {
        return Err(format!("Expected four parameters for {} operator, found {}", token, engine.stack.len()));
    }

    let rhs = engine.stack.pop().unwrap();
    let lhs = engine.stack.pop().unwrap();
    let else_body = engine.stack.pop().unwrap();
    let if_body = engine.stack.pop().unwrap();

    let else_body_chain = stack_to_lhs(else_body)?;
    let if_body_chain = stack_to_lhs(if_body)?;

    let result = match (&lhs, &rhs) {
        (Stack::Number(lhs), Stack::Number(rhs)) => {
            /* Both sides are a constant, so calculate the result. */
            let result = match token {
                Compare::Equal => lhs == rhs,
                Compare::NotEqual => lhs != rhs,
                Compare::Less => lhs < rhs,
                Compare::LessEqual => lhs <= rhs,
                Compare::Greater => lhs > rhs,
                Compare::GreaterEqual => lhs >= rhs,
            };

            if result {
                Stack::Variable(StackVariable::Chain(if_body_chain))
            } else {
                Stack::Variable(StackVariable::Chain(else_body_chain))
            }
        },
        _ => {
            /* Either side is not a constant, so deligate to NewGRF. */
            let chain = stack_to_lhs(lhs)?;

            let (variable, mut chain) = stack_to_rhs(engine, chain, rhs)?;

            let else_case = chain.children.len() as u16;
            chain.children.push(else_body_chain);
            let if_case = chain.children.len() as u16;
            chain.children.push(if_body_chain);

            // Compare() returns 0 for <, 1 for ==, 2 for >.
            match token {
                Compare::Equal => {
                    // 1 -> True, 0 / 2 -> False.
                    chain.switch.push(VarAction2Switch { result: else_case, left: 0, right: 0 });
                    chain.switch.push(VarAction2Switch { result: if_case, left: 1, right: 1 });
                    chain.switch.push(VarAction2Switch { result: else_case, left: 2, right: 2 });
                },
                Compare::NotEqual => {
                    // 0 / 2 -> True, 1 -> False.
                    chain.switch.push(VarAction2Switch { result: if_case, left: 0, right: 0 });
                    chain.switch.push(VarAction2Switch { result: else_case, left: 1, right: 1 });
                    chain.switch.push(VarAction2Switch { result: if_case, left: 2, right: 2 });
                },
                Compare::Less => {
                    // 0 -> True, 1 / 2 -> False.
                    chain.switch.push(VarAction2Switch { result: if_case, left: 0, right: 0 });
                    chain.switch.push(VarAction2Switch { result: else_case, left: 1, right: 1 });
                    chain.switch.push(VarAction2Switch { result: else_case, left: 2, right: 2 });
                },
                Compare::LessEqual => {
                    // 0 / 1 -> True, 2 -> False.
                    chain.switch.push(VarAction2Switch { result: if_case, left: 0, right: 0 });
                    chain.switch.push(VarAction2Switch { result: if_case, left: 1, right: 1 });
                    chain.switch.push(VarAction2Switch { result: else_case, left: 2, right: 2 });
                },
                Compare::Greater => {
                    // 2 -> True, 0 / 1 -> False.
                    chain.switch.push(VarAction2Switch { result: else_case, left: 0, right: 0 });
                    chain.switch.push(VarAction2Switch { result: else_case, left: 1, right: 1 });
                    chain.switch.push(VarAction2Switch { result: if_case, left: 2, right: 2 });
                },
                Compare::GreaterEqual => {
                    // 1 / 2 -> True, 0 -> False.
                    chain.switch.push(VarAction2Switch { result: else_case, left: 0, right: 0 });
                    chain.switch.push(VarAction2Switch { result: if_case, left: 1, right: 1 });
                    chain.switch.push(VarAction2Switch { result: if_case, left: 2, right: 2 });
                },
            };
            chain.push(VarAction2Operator::Compare(variable));

            Stack::Variable(StackVariable::Procedure(chain))
        },
    };

    engine.stack.push(result);

    Ok(())
}
