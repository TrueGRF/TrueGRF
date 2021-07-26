use wasm_bindgen::prelude::*;
use serde::{Serialize, Deserialize};


#[derive(Serialize, Deserialize, Debug, Default)]
struct NewGRFCompile {
    error: String,
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
pub fn compile() -> String {
    let result : NewGRFCompile = NewGRFCompile { error: "Unknown error".to_string(), ..Default::default() };
    return serde_json::to_string(&result).unwrap();
}

pub fn set_panic_hook() {
    #[cfg(feature = "console_error_panic_hook")]
    console_error_panic_hook::set_once();
}
