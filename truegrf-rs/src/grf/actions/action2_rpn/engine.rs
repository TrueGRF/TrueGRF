use std::collections::{BTreeMap, HashMap};

use super::stack::{
    Chain,
    Register,
    Stack,
};
use super::token::Type;

const STACK_REGISTER_START: u8 = 0xff;

pub struct FunctionResult {
    pub industry_inputs: HashMap<String, Register>,
    pub industry_outputs: HashMap<String, Register>,
    pub value: Option<Register>,
}

pub struct Function {
    pub chain: Chain,
    pub result: FunctionResult,
}

pub struct Engine<'a> {
    pub functions: HashMap<String, Function>,

    pub stack: Vec<Stack>,
    pub result: FunctionResult,

    pub constants: HashMap<String, BTreeMap<i32, i32>>,
    pub iterators: HashMap<String, Option<Stack>>,
    pub variable_is_list: HashMap<String, Type>,
    register_assignment: HashMap<String, Register>,
    next_free_register: u8,
    pub stack_register: u8,

    pub ctt: &'a HashMap<String, u8>,
}

impl FunctionResult {
    pub fn new() -> Self {
        FunctionResult {
            industry_inputs: HashMap::new(),
            industry_outputs: HashMap::new(),
            value: None,
        }
    }

    pub fn merge(&mut self, other: &Self) {
        if other.value.is_some() {
            self.value = other.value
        }
        for input in &other.industry_inputs {
            self.industry_inputs.insert(input.0.to_string(), *input.1);
        }
        for output in &other.industry_outputs {
            self.industry_outputs.insert(output.0.to_string(), *output.1);
        }
    }
}

impl<'a> Engine<'a> {
    pub fn new(ctt: &'a HashMap<String, u8>) -> Self {
        Engine {
            functions: HashMap::new(),

            stack: Vec::new(),
            result: FunctionResult::new(),

            constants: HashMap::new(),
            iterators: HashMap::new(),
            variable_is_list: HashMap::new(),
            register_assignment: HashMap::new(),
            next_free_register: 0,
            stack_register: STACK_REGISTER_START,

            ctt,
        }
    }

    pub fn reset_stack_register(&mut self) {
        self.stack_register = STACK_REGISTER_START;
    }

    pub fn get_register(&mut self, name: &str, allow_reservation: bool) -> Result<Register, String> {
        if let Some(register) = self.register_assignment.get(name) {
            return Ok(*register);
        }

        if allow_reservation {
            return self.reserve_register(name, false);
        }

        Err(format!("Undefined variable '{}'.", name))
    }

    pub fn reserve_register(&mut self, name: &str, temporary_or_persistent: bool) -> Result<Register, String> {
        if self.register_assignment.contains_key(name) {
            return Err(format!("Variable '{}' is already defined.", name));
        }
        if self.constants.contains_key(name) {
            return Err(format!("Variable '{}' is already defined.", name));
        }
        if self.iterators.contains_key(name) {
            return Err(format!("Variable '{}' is already defined.", name));
        }

        let register = if temporary_or_persistent {
            Register::Persistent(self.next_free_register)
        } else {
            Register::Temporary(self.next_free_register)
        };

        self.next_free_register += 1;
        self.register_assignment.insert(name.to_string(), register);

        Ok(register)
    }

    pub fn initialize_iterator(&mut self, name: &str) -> Result<(), String> {
        if self.register_assignment.contains_key(name) {
            return Err(format!("Variable '{}' is already defined.", name));
        }
        if self.constants.contains_key(name) {
            return Err(format!("Variable '{}' is already defined.", name));
        }
        if self.iterators.contains_key(name) {
            return Err(format!("Variable '{}' is already defined.", name));
        }

        self.iterators.insert(name.to_string(), None);

        Ok(())
    }

    pub fn initialize_const(&mut self, name: &str) -> Result<(), String> {
        if self.register_assignment.contains_key(name) {
            return Err(format!("Variable '{}' is already defined.", name));
        }
        if self.constants.contains_key(name) {
            return Err(format!("Variable '{}' is already defined.", name));
        }
        if self.iterators.contains_key(name) {
            return Err(format!("Variable '{}' is already defined.", name));
        }

        self.constants.insert(name.to_string(), BTreeMap::new());

        Ok(())
    }

    pub fn mark_variable_as_list(&mut self, name: &str, r#type: Type) {
        self.variable_is_list.insert(name.to_string(), r#type);
    }
}
