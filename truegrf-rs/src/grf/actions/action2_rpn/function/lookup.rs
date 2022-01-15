use super::super::engine::Engine;
use super::super::stack::{
    Stack,
    StackVariable,
    stack_to_lhs,
};
use super::super::super::Variable;

pub fn handle_token(engine: &mut Engine) -> Result<(), String> {
    if engine.stack.len() < 2 {
        return Err(format!("Expected two parameters for lookup, found {}", engine.stack.len()));
    }

    let rhs = engine.stack.pop().unwrap();
    let lhs = engine.stack.pop().unwrap();

    let result = match (&lhs, &rhs) {
        (Stack::Variable(StackVariable::VariableList(variable)), Stack::Number(value)) => {
            Stack::Variable(StackVariable::Variable(Variable::Variable { variable: variable.variable, parameter: Some(*value as u8), shift: variable.shift, mask: variable.mask }))
        },
        (Stack::Variable(StackVariable::VariableCargoDict(variable)), Stack::Ctt(value)) => {
            let value = if let Some(value) = engine.ctt.get(value) {
                value
            } else {
                return Err("Unknown cargo type".to_string());
            };

            Stack::Variable(StackVariable::Variable(Variable::Variable { variable: variable.variable, parameter: Some(*value), shift: variable.shift, mask: variable.mask }))
        },
        (Stack::Variable(StackVariable::ResultIndustry { inputs_outputs }), Stack::Ctt(value)) => {
            if !engine.ctt.contains_key(value) {
                return Err("Unknown cargo type".to_string());
            };

            let register = match inputs_outputs {
                false => engine.get_register(&format!("result:inputs:{}", value), true)?,
                true => engine.get_register(&format!("result:outputs:{}", value), true)?,
            };

            match inputs_outputs {
                false => engine.result.industry_inputs.entry(value.to_string()).or_insert(register),
                true => engine.result.industry_outputs.entry(value.to_string()).or_insert(register),
            };

            Stack::Variable(StackVariable::Register(register))
        },
        (Stack::Variable(StackVariable::ResultIndustry { inputs_outputs: _ }), _) => {
            return Err("Right hand side of lookup for result:inputs / result:outputs must be a cargo".to_string());
        },
        (Stack::Variable(StackVariable::List(list)), Stack::Number(value)) => {
            if let Some(list) = engine.constants.get(list) {
                let value = list.get(value).unwrap_or(&0);
                Stack::Number(*value)
            } else if engine.constants.contains_key(list) {
                return Err(format!("Key '{}' not found in list '{}'", value, list));
            } else {
                let register = engine.get_register(&format!("{}:{}", list, value), false);
                let register = match register {
                    Ok(register) => register,
                    Err(_) => return Err(format!("Key '{}' not found in list '{}'", value, list)),
                };
                Stack::Variable(StackVariable::Register(register))
            }
        },
        (Stack::Variable(StackVariable::List(list)), _) => {
            if engine.constants.contains_key(list) {
                return Err("Right hand side of lookup for list/dict must be a constant".to_string());
            } else {
                /* The index is relative to the first element. */
                let register = engine.get_register(&format!("{}:0", list), false)?;
                let chain = stack_to_lhs(rhs)?;

                Stack::Variable(StackVariable::RegisterOffset(register, chain))
            }
        },
        (Stack::Variable(StackVariable::CargoDict(dict)), Stack::Ctt(value)) => {
            let value = if let Some(value) = engine.ctt.get(value) {
                value
            } else {
                return Err("Unknown cargo type".to_string());
            };

            if let Some(dict) = engine.constants.get(dict) {
                let value = dict.get(&(*value as i32)).unwrap_or(&0);
                Stack::Number(*value)
            } else if engine.constants.contains_key(dict) {
                return Err(format!("Key '{}' not found in cargodict '{}'", value, dict));
            } else {
                let register = engine.get_register(&format!("{}:{}", dict, value), false);
                let register = match register {
                    Ok(register) => register,
                    Err(_) => return Err(format!("Key '{}' not found in cargodict '{}'", value, dict)),
                };
                Stack::Variable(StackVariable::Register(register))
            }
        },
        (Stack::Variable(StackVariable::CargoDict(_)), _) => {
            return Err("Right hand side of lookup for cargodist must be a cargo".to_string());
        },
        _ => {
            return Err("Left hand side of lookup must be a list".to_string());
        },
    };

    engine.stack.push(result);

    Ok(())
}
