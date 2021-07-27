use wasm_bindgen::prelude::*;
use serde::{Serialize, Deserialize};

mod grf;

#[derive(Serialize, Deserialize, Debug, Default)]
struct NewGRFResult {
    error: String,
    output: Vec<u8>,
}

#[wasm_bindgen()]
extern "C" {
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}

#[wasm_bindgen]
pub fn compile(options_raw: &JsValue) -> Vec<u8> {
    let options: grf::NewGRFOptions = options_raw.into_serde().unwrap();

    return grf::write_grf(options).unwrap();
}

pub fn set_panic_hook() {
    #[cfg(feature = "console_error_panic_hook")]
    console_error_panic_hook::set_once();
}
