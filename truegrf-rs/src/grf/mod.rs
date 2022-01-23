use serde::{Serialize, Deserialize};
use std::collections::HashMap;

mod actions;

use actions::{
    Action0,
    Action1,
    Action2,
    Action2IndustryIO,
    Action2Failed,
    Action2RPN,
    Action3,
    Action8,
    Action14,
    ActionTrait,
    Feature,
    VarAction2,
    VarAction2Operator,
    VarAction2Switch,
    Variable,
};

#[derive(Serialize, Deserialize, Debug, Default)]
struct NewGRFGeneral {
    grfid: String,
    name: String,
    description: String,
}

#[derive(Serialize, Deserialize, Debug, Default)]
struct NewGRFNodeData {
    value: Option<String>,
}

#[allow(non_snake_case)]
#[derive(Serialize, Deserialize, Debug, Default)]
struct NewGRFNode {
    id: String,
    r#type: Option<String>,
    data: Option<NewGRFNodeData>,
    source: Option<String>,
    sourceHandle: Option<String>,
    target: Option<String>,
    targetHandle: Option<String>,
}

#[allow(non_snake_case)]
#[derive(Serialize, Deserialize, Debug, Default)]
pub struct NewGRFSprite {
    base64Data: String,
    width: u16,
    height: u16,
    left: i16,
    top: i16,
}

#[allow(non_snake_case)]
#[derive(Serialize, Deserialize, Debug, Default)]
struct NewGRFDefaultSprite {
    id: u32,
}

#[allow(non_snake_case)]
#[derive(Serialize, Deserialize, Debug)]
#[serde(untagged)]
enum NewGRFSpriteContainer {
    Sprite(NewGRFSprite),
    DefaultSprite(NewGRFDefaultSprite),
}
impl Default for NewGRFSpriteContainer {
    fn default() -> Self { NewGRFSpriteContainer::DefaultSprite(NewGRFDefaultSprite { id: 0 } ) }
}

#[allow(non_snake_case)]
#[derive(Serialize, Deserialize, Debug, Default)]
struct NewGRFIndustryTileSprite {
    sprite: NewGRFSpriteContainer,
    drawType: String,
    alwaysDraw: bool,
}

#[allow(non_snake_case)]
#[derive(Serialize, Deserialize, Debug, Default)]
struct NewGRFIndustryTile {
    sprites: Vec<NewGRFIndustryTileSprite>,
}

#[allow(non_snake_case)]
#[derive(Serialize, Deserialize, Debug, Default)]
struct NewGRFIndustry {
    id: u8,
    available: bool,
    name: String,
    r#type: String,
    fundCostMultiplier: u8,
    probabilityMapGen: u8,
    probabilityInGame: u8,
    colour: u8,
    prospectChance: u8,  // Scale from 0 to 100
    layout: Vec<Vec<Vec<i32>>>,
    cargoAcceptance: Vec<String>,
    cargoProduction: Vec<String>,
    placement: String,
    placementCustom: Vec<NewGRFNode>,
    tiles: Vec<NewGRFIndustryTile>,
    callbacks: String,
}

#[allow(non_snake_case)]
#[derive(Serialize, Deserialize, Debug, Default)]
struct NewGRFCargo {
    id: u8,
    available: bool,
    name: String,
    longName: String,
    unitName: String,
    label: String,
    abbreviation: String,
    classes: u16,
    weight: u8,
    colour: u8,
    penaltyLowerBound: u8,
    penaltyLength: u8,
    price: u32,
    sprite: NewGRFSprite,
}

#[derive(Serialize, Deserialize, Debug, Default)]
pub struct NewGRFOptions {
    general: NewGRFGeneral,
    cargoes: Vec<NewGRFCargo>,
    industries: Vec<NewGRFIndustry>,
}

pub struct Output {
    buffer: Vec<u8>,
    string_counter: u16,
    sprites: Vec<Vec<u8>>,
}

fn write_rpn_chain(output: &mut Output, cb: u8, chain: &Action2RPN::Chain, has_callback: bool) {
    /* Some chains have a callback as return value (instead of a value). These
     * callbacks are already defined before we enter this function on "cb". As
     * such, we cannot use "cb" for other chains, as it will overwrite the
     * callback chain. This in fact is just a bit of lazy programming, as what
     * we should be doing is defining the callback chain just before we write
     * the last chain. But this is for now far easier to program. See for
     * example the Action2::Industry callback. */
    let cb_child = cb + if has_callback { 1 } else { 0 };

    for (i, child) in chain.children.iter().enumerate() {
        write_rpn_chain(output, cb_child + i as u8, child, false);
    }

    /* Rewrite the switch with the correct setids in the result entries. */
    let mut switch = Vec::new();
    for case in &chain.switch {
        /* Use "cb" instead of "cb_child", as switches already take care of correcting for the + 1 by the caller. */
        switch.push(VarAction2Switch { result: case.result + cb as u16, left: case.left, right: case.right });
    }

    /* Rewrite the body to point to correct setids. */
    let mut body = Vec::new();
    for operator in &chain.body {
        let result = match operator {
            VarAction2Operator::Head(Variable::Variable { variable: 0x7e, parameter, shift: _, mask: _ }) => {
                /* Procedure entries refer to local setids; fix them to use the correct setid. */
                VarAction2Operator::Head(Variable::Global::Procedure(parameter.unwrap() + cb_child).into())
            },
            _ => operator.clone(),
        };
        body.push(result);
    }

    VarAction2::Advanced {
        set_id: cb,
        feature: Feature::Industries,
        related_object: false,
        variable: &body,
        switch: &switch,
        default: cb as u16
    }.write(output);
}

fn industry_callback(output: &mut Output, cb: u8, rpn: &mut Action2RPN::Function, ctt: &HashMap<String, u8>) {
    let mut inputs = Vec::new();
    let mut outputs = Vec::new();
    for input in &rpn.result.industry_inputs {
        match input.1 {
            Action2RPN::Register::Temporary(register) => inputs.push(Action2IndustryIO { cargo: ctt[input.0], register: *register }),
            Action2RPN::Register::Persistent(_) => panic!("Persistent registers not supported"),
        }
    }
    for output in &rpn.result.industry_outputs {
        match output.1 {
            Action2RPN::Register::Temporary(register) => outputs.push(Action2IndustryIO { cargo: ctt[output.0], register: *register }),
            Action2RPN::Register::Persistent(_) => panic!("Persistent registers not supported"),
        }
    }

    Action2::Industry { set_id: cb, inputs: &inputs, outputs: &outputs }.write(output);

    /* Ensure our action2 callback is called when done with the callback. */
    rpn.chain.switch = vec![
        VarAction2Switch { result: 0, left: 0x0, right: 0xffffffff },
    ];

    write_rpn_chain(output, cb, &rpn.chain, true);
}

fn write_segments(output: &mut Output, options: NewGRFOptions) -> Result<(), String> {
    /* Initial sprite; should be 4 in length, ignored by OpenTTD. */
    output.buffer.extend([0x04, 0x00, 0x00, 0x00, 0xff, 0x02, 0x00, 0x00, 0x00]);

    Action14::Url { url: &"https://truebrain.github.io/TrueGRF/".to_string() }.write(output);
    Action14::Palette { palette: 'D' }.write(output);
    Action8::General { grfid: &options.general.grfid.to_string(), name: &options.general.name, description: &options.general.description }.write(output);

    /* Disable all default cargoes. */
    for cargo_id in 0..=11 {
        Action0::Cargo::Disable { id: cargo_id }.write(output);
    }

    /* Disable all default industries. */
    for industry_id in 0..=36 {
        Action0::Industry::Disable { id: industry_id }.write(output);
    }

    /* Create CTT, which is just an iteration of the cargoes. */
    let mut ctt_keys = Vec::new();
    let mut ctt = HashMap::new();
    for (cargo_id, cargo) in options.cargoes.iter().enumerate() {
        ctt_keys.push(&cargo.label);
        ctt.insert(cargo.label.clone(), cargo_id as u8);
    }
    Action0::GlobalSetting::CargoTranslationTable { ctt: &ctt_keys }.write(output);

    for cargo in &options.cargoes {
        if !cargo.available {
            continue;
        }

        Action0::Cargo::Enable { id: cargo.id }.write(output);
        Action0::Cargo::Classes { id: cargo.id, classes: cargo.classes }.write(output);
        Action0::Cargo::Label { id: cargo.id, label: &cargo.label }.write(output);
        Action0::Cargo::Abbreviation { id: cargo.id, abbreviation: &cargo.abbreviation }.write(output);
        Action0::Cargo::Name { id: cargo.id, name: &cargo.name }.write(output);
        Action0::Cargo::UnitName { id: cargo.id, name: &cargo.unitName }.write(output);
        Action0::Cargo::LongName { id: cargo.id, unit: &cargo.unitName, name: &cargo.longName }.write(output);
        Action0::Cargo::Weight { id: cargo.id, weight: cargo.weight }.write(output);
        Action0::Cargo::Colour { id: cargo.id, colour: cargo.colour }.write(output);
        Action0::Cargo::Price { id: cargo.id, price: cargo.price, penalty_lower_bound: cargo.penaltyLowerBound, penalty_length: cargo.penaltyLength }.write(output);
        Action0::Cargo::Sprite { id: cargo.id }.write(output);

        /* Write the cargo sprite. */
        Action1::Cargo { sprite: &cargo.sprite }.write(output);
        Action2::Cargo { set_id: 0, sprite: 0 }.write(output);
        Action3::Cargo { id: cargo.id, set_id: 0 }.write(output);
    }

    for industry in &options.industries {
        if !industry.available {
            continue;
        }

        let mut flags = Action0::IndustryFlags::empty();
        let mut callback_flags = Action0::IndustryCallbackFlags::empty();

        Action0::Industry::Enable { id: industry.id }.write(output);
        Action0::Industry::Name { id: industry.id, name: &industry.name }.write(output);
        Action0::Industry::FundCostMultiplier { id: industry.id, multiplier: industry.fundCostMultiplier }.write(output);
        Action0::Industry::Probability { id: industry.id, map_gen: industry.probabilityMapGen, in_game: industry.probabilityInGame }.write(output);
        Action0::Industry::Colour { id: industry.id, colour: industry.colour }.write(output);

        /* Set the industry type. */
        let industry_type: u8 = match industry.r#type.as_str() {
            "tertiary" => 0,
            "primary" => 2,
            "secondary" => 4,
            _ => 0,
        };
        Action0::Industry::Type { id: industry.id, r#type: industry_type }.write(output);

        let mut cargo_production = Vec::new();
        let mut cargo_production_multiplier = Vec::new();
        for cargo in &industry.cargoProduction {
            cargo_production.push(ctt[cargo]);
            cargo_production_multiplier.push(0);
        }
        let mut cargo_acceptance = Vec::new();
        for cargo in &industry.cargoAcceptance {
            cargo_acceptance.push(ctt[cargo]);
        }

        Action0::Industry::Production { id: industry.id, production: &cargo_production, multiplier: &cargo_production_multiplier }.write(output);
        Action0::Industry::Acceptance { id: industry.id, acceptance: &cargo_acceptance, multiplier: &vec![] }.write(output);

        if industry.r#type == "primary" {
            Action0::Industry::ProspectChance { id: industry.id, chance: industry.prospectChance as u32 * 255 * 255 * 255 / 100 * 255 }.write(output);
        }

        if !industry.layout.is_empty() {
            if !industry.tiles.is_empty() {
                Action0::IndustryTile::Enable { id: industry.id }.write(output);
                Action0::IndustryTile::Flags { id: industry.id, flags: Action0::IndustryTileFlags::INDUSTRY_ACCEPTANCE }.write(output);

                let failed_set: u8 = 0xfd;
                Action2Failed::IndustryTile { set_id: failed_set }.write(output);

                let cb_main: u8 = 0xfe;

                for (id, tile) in industry.tiles.iter().enumerate() {
                    let mut sprites = Vec::new();

                    let mut ground_sprite = 0;
                    let mut building_sprites = Vec::new();
                    for sprite in &tile.sprites {
                        let mut id = match &sprite.sprite {
                            NewGRFSpriteContainer::DefaultSprite(sprite) => {
                                sprite.id
                            },
                            NewGRFSpriteContainer::Sprite(sprite) => {
                                sprites.push(sprite);
                                (1 << 31) | (sprites.len() as u32 - 1)
                            },
                        };

                        match sprite.drawType.as_str() {
                            "normal" => id |= 0 << 14,
                            "transparent" => id |= 1 << 14,
                            "recolour" => id |= 2 << 14,
                            _ => {},
                        }

                        if sprite.alwaysDraw {
                            id |= 1 << 30;
                        }

                        if ground_sprite == 0 {
                            ground_sprite = id;
                        } else {
                            building_sprites.push(id);
                        }
                    }

                    Action1::IndustryTile { sprites: &sprites }.write(output);
                    Action2::IndustryTile { set_id: id as u8, ground_sprite, building_sprites: &building_sprites, size_x: 16, size_y: 16, size_z: 32 }.write(output);
                }

                let mut layout_switch = Vec::new();

                for (layout_id, layout) in industry.layout.iter().enumerate() {
                    let mut switch = Vec::new();

                    for (y, row) in layout.iter().enumerate() {
                        for (x, tile_id) in row.iter().enumerate() {
                            if *tile_id < 0 {
                                continue;
                            }

                            let result = *tile_id;
                            let value = x as u32 | ((y as u32) << 8);
                            switch.push(VarAction2Switch { result: result as u16, left: value, right: value } );
                        }
                    }

                    VarAction2::IndustryTile { set_id: layout_id as u8 + 0xf0, variable: Variable::IndustryTile::RelativePos.into(), switch: &switch, default: failed_set as u16 }.write(output);
                    layout_switch.push(VarAction2Switch { result: layout_id as u16 + 0xf0, left: layout_id as u32 + 1, right: layout_id as u32 + 1 });
                }

                VarAction2::IndustryTile { set_id: cb_main, variable: Variable::Industry::LayoutNum.into(), switch: &layout_switch, default: failed_set as u16 }.write(output);
                Action3::IndustryTile { id: industry.id, set_id: cb_main }.write(output);
            }

            let mut layouts = Vec::new();

            for layout in &industry.layout {
                let mut data_layout = Vec::new();

                for (y, row) in layout.iter().enumerate() {
                    for (x, tile_id) in row.iter().enumerate() {
                        if *tile_id < 0 {
                            continue;
                        }

                        data_layout.extend((x as u8).to_le_bytes());
                        data_layout.extend((y as u8).to_le_bytes());

                        /* Per industry there is an Action2 chain to look up the right SpriteID; use that for all tiles in an industry. */
                        data_layout.extend(b"\xfe");
                        data_layout.extend((industry.id as u16).to_le_bytes());
                    }
                }

                data_layout.extend(b"\x00\x80");
                layouts.push(data_layout);
            }

            Action0::Industry::Layout { id: industry.id, layouts: &layouts }.write(output);
        }

        let failed_set = 0xfd;
        Action2Failed::Industry { set_id: 0xfd }.write(output);

        let mut callbacks = Vec::new();

        match Action2RPN::parse(&industry.callbacks, &ctt) {
            Ok(mut functions) => {
                let mut callbacks_info2 = Vec::new();

                static INDUSTRY_CALLBACKS_0: &[(&str, u32, Action0::IndustryCallbackFlags)] = &[
                    ("cb:production_cargo_arrival", 0, Action0::IndustryCallbackFlags::PRODUCTION_CARGO_ARRIVAL),
                    ("cb:production_every_256_ticks", 1, Action0::IndustryCallbackFlags::PRODUCTION_EVERY_256_TICKS),
                ];

                for (name, switch_value, flag) in INDUSTRY_CALLBACKS_0 {
                    if let Some(function) = functions.get_mut(&name.to_string()) {
                        callback_flags |= *flag;

                        let cb = (callbacks.len() + callbacks_info2.len()) as u8;
                        industry_callback(output, cb, function, &ctt);

                        /* ExtraCallbackInfo2 = 0 means the cargo arrival callback. */
                        callbacks_info2.push(VarAction2Switch { result: cb as u16, left: *switch_value, right: *switch_value });
                    }
                }

                if !callbacks_info2.is_empty() {
                    let cb = callbacks.len() as u8;
                    VarAction2::Industry { set_id: cb as u8, variable: Variable::Global::ExtraCallbackInfo2.into(), switch: &callbacks_info2, default: failed_set }.write(output);
                    callbacks.push(VarAction2Switch { result: cb as u16, left: 0x0, right: 0x0 });
                }

                static INDUSTRY_CALLBACKS: &[(&str, u32, Action0::IndustryCallbackFlags)] = &[
                    ("cb:placement", 0x28, Action0::IndustryCallbackFlags::PLACEMENT),
                    ("cb:production_change_monthly", 0x29, Action0::IndustryCallbackFlags::PRODUCTION_CHANGE_MONTHLY),
                    ("cb:production_change_random", 0x35, Action0::IndustryCallbackFlags::PRODUCTION_CHANGE_RANDOM),
                    ("cb:production_initial", 0x15f, Action0::IndustryCallbackFlags::PRODUCTION_INITIAL),
                ];

                for (name, switch_value, flag) in INDUSTRY_CALLBACKS {
                    if let Some(function) = functions.get_mut(&name.to_string()) {
                        callback_flags |= *flag;

                        if let Some(register) = &function.result.value {
                            function.chain.push(
                                match register {
                                    Action2RPN::Register::Temporary(register) => VarAction2Operator::Head(Variable::Register::Temporary(*register).into()),
                                    Action2RPN::Register::Persistent(register) => VarAction2Operator::Head(Variable::Register::Persistent(*register).into()),
                                }
                            );
                        } else {
                            return Err(format!("Parse error in industry '{}' callbacks: no return value for {}", industry.name, name));
                        }

                        let cb = callbacks.len() as u8;
                        write_rpn_chain(output, cb, &function.chain, false);

                        callbacks.push(VarAction2Switch { result: cb as u16, left: *switch_value, right: *switch_value });
                    }
                }
            },
            Err(e) => {
                return Err(format!("Parse error in industry '{}' callbacks: {}", industry.name, e));
            },
        }

        match industry.placement.as_str() {
            "on-water" => flags |= Action0::IndustryFlags::ON_WATER,
            "in-town" => flags |= Action0::IndustryFlags::IN_TOWN,
            "in-large-town" => flags |= Action0::IndustryFlags::IN_LARGE_TOWN,
            "near-town" => flags |= Action0::IndustryFlags::NEAR_TOWN,
            _ => {},
        };

        /* Switch to handle all callbacks. */
        let cb_main: u16 = 0xfe;
        VarAction2::Industry { set_id: cb_main as u8, variable: Variable::Global::CurrentCallback.into(), switch: &callbacks, default: failed_set }.write(output);
        Action3::Industry { id: industry.id, set_id: cb_main as u8 }.write(output);

        Action0::Industry::Flags { id: industry.id, flags }.write(output);
        Action0::Industry::CallbackFlags { id: industry.id, flags: callback_flags }.write(output);
    }

    /* End-of-data-section marker. */
    output.buffer.extend(b"\x00\x00\x00\x00");

    Ok(())
}

pub fn write_grf(options: NewGRFOptions) -> Result<Vec<u8>, String> {
    let mut output = Output { buffer: Vec::new(), string_counter: 0xdc00, sprites: Vec::new() };

    write_segments(&mut output, options)?;

    let mut grf = Vec::new();
    /* Write GRF container version 2 header. */
    grf.extend(b"\x00\x00GRF\x82\r\n\x1a\n");
    /* Sprite section offset. */
    grf.extend((output.buffer.len() as u32 + 1).to_le_bytes());
    /* Compression. OpenTTD currently only support no-compression (= 0). */
    grf.extend(b"\x00");

    /* Add data-section (includes end-of-data-section marker). */
    grf.extend(output.buffer);

    /* Add all sprites to sprite-section. */
    for sprite in output.sprites {
        grf.extend(sprite);
    }
    /* End-of-sprite-section marker. */
    grf.extend(b"\x00\x00\x00\x00");

    Ok(grf)
}
