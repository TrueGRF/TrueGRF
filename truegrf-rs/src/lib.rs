use wasm_bindgen::prelude::*;
use serde::{Serialize, Deserialize};

mod grf;


#[derive(Serialize, Deserialize, Debug, Default)]
struct NewGRFCompile {
    error: String,
    output: Vec<u8>,
}

#[wasm_bindgen()]
extern "C" {
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}

macro_rules! console_log {
    ($($t:tt)*) => (log(&format_args!($($t)*).to_string()))
}

#[wasm_bindgen]
pub fn compile(coalmine: u8) -> String {
    let mut result : NewGRFCompile = NewGRFCompile { error: "Unknown error".to_string(), ..Default::default() };
    result.output = grf::write_grf(coalmine).unwrap();
    return serde_json::to_string(&result).unwrap();
}

pub fn set_panic_hook() {
    #[cfg(feature = "console_error_panic_hook")]
    console_error_panic_hook::set_once();
}
