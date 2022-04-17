use wasm_bindgen::prelude::*;

mod grf;

#[wasm_bindgen]
pub struct NewGRFResult {
    error: String,
    output: Vec<u8>,
}

#[allow(non_snake_case)]
#[wasm_bindgen]
impl NewGRFResult {
    pub fn getOutput(&self) -> Vec<u8> {
        self.output.clone()
    }

    pub fn getError(&self) -> String {
        self.error.clone()
    }
}

#[wasm_bindgen()]
extern "C" {
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);

    #[wasm_bindgen(js_namespace = window)]
    fn load_sprite_bytes(filename: &str) -> JsValue;
}

#[macro_export]
macro_rules! console_log {
    // Note that this is using the `log` function imported above during
    // `bare_bones`
    ($($t:tt)*) => (crate::log(&format_args!($($t)*).to_string()))
}

fn load_sprite_bytes_wrapper(filename: &str) -> Vec<u8> {
    let base64_data = load_sprite_bytes(filename);
    let base64_data = base64_data.as_string().unwrap();

    base64::decode(&base64_data).unwrap()
}

#[wasm_bindgen]
pub fn compile(options_raw: &JsValue) -> NewGRFResult {
    let options: grf::NewGRFOptions = options_raw.into_serde().unwrap();

    match grf::write_grf(options, &load_sprite_bytes_wrapper) {
        Ok(output) => NewGRFResult {
            error: "".to_string(),
            output,
        },
        Err(error) => NewGRFResult {
            error,
            output: vec![],
        },
    }
}

pub fn set_panic_hook() {
    #[cfg(feature = "console_error_panic_hook")]
    console_error_panic_hook::set_once();
}
