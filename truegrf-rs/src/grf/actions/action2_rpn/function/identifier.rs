use super::super::engine::Engine;
use super::super::stack::{
    Stack,
    StackVariable,
    Type,
};
use super::super::super::Variable;

pub fn handle_token(engine: &mut Engine, token: &str) -> Result<(), String> {
    if let Some(index) = token.find(':') {
        let namespace = token[..index].to_string();
        let identifier = token[index + 1..].to_string();

        match namespace.as_str() {
            "func" => {
                engine.stack.push(Stack::Function(identifier));
            },
            "ctt" => {
                engine.stack.push(Stack::Ctt(identifier));
            },
            "result" => {
                match identifier.as_str() {
                    "inputs" => {
                        engine.stack.push(Stack::Variable(StackVariable::ResultIndustry { inputs_outputs: false }));
                    },
                    "outputs" => {
                        engine.stack.push(Stack::Variable(StackVariable::ResultIndustry { inputs_outputs: true }));
                    },
                    "value" => {
                        let register = engine.get_register(&"result:value".to_string(), true)?;

                        if engine.result.value.is_none() {
                            engine.result.value = Some(register)
                        }

                        engine.stack.push(Stack::Variable(StackVariable::Register(register)));
                    }
                    _ => {
                        return Err(format!("Unknown result identifier: {}", identifier));
                    },
                }
            },
            "industry" => {
                let result = match identifier.as_str() {
                    "build_date" => StackVariable::Variable(Variable::Industry::BuildDate.into()),
                    "build_type" => StackVariable::Variable(Variable::Industry::BuildType.into()),
                    "colour" => StackVariable::Variable(Variable::Industry::Colour.into()),
                    "founder_colour_1" => StackVariable::Variable(Variable::Industry::FounderColour1.into()),
                    "founder_colour_2" => StackVariable::Variable(Variable::Industry::FounderColour2.into()),
                    "founder_type" => StackVariable::Variable(Variable::Industry::FounderType.into()),
                    "founder" => StackVariable::Variable(Variable::Industry::Founder.into()),
                    "last_accept_date" => StackVariable::Variable(Variable::Industry::LastAcceptDate.into()),
                    "layout_num" => StackVariable::Variable(Variable::Industry::LayoutNum.into()),
                    "production_level" => StackVariable::Variable(Variable::Industry::ProductionLevel.into()),
                    "random_bits" => StackVariable::Variable(Variable::Industry::RandomBits.into()),
                    "water_distance" => StackVariable::Variable(Variable::Industry::WaterDistance.into()),

                    "tile_animation_frame" => StackVariable::VariableList(Variable::Industry::TileAnimationFrame(0).into()),
                    "tile_class" => StackVariable::VariableList(Variable::Industry::TileClass(0).into()),
                    "tile_height" => StackVariable::VariableList(Variable::Industry::TileHeight(0).into()),
                    "tile_id" => StackVariable::VariableList(Variable::Industry::TileId(0).into()),
                    "tile_is_water" => StackVariable::VariableList(Variable::Industry::TileIsWater(0).into()),
                    "tile_random" => StackVariable::VariableList(Variable::Industry::TileRandom(0).into()),
                    "tile_slope" => StackVariable::VariableList(Variable::Industry::TileSlope(0).into()),
                    "tile_terrain_type" => StackVariable::VariableList(Variable::Industry::TileTerrainType(0).into()),
                    "tile_water_class" => StackVariable::VariableList(Variable::Industry::TileWaterClass(0).into()),

                    "town_euclidean_distance" => StackVariable::Variable(Variable::Industry::TownEuclideanDistance.into()),
                    "town_manhattan_distance" => StackVariable::Variable(Variable::Industry::TownManhattanDistance.into()),
                    "town_zone" => StackVariable::Variable(Variable::Industry::TownZone.into()),

                    "cargo_incoming_waiting" => StackVariable::VariableCargoDict(Variable::Industry::CargoIncomingWaiting(0).into()),
                    "cargo_last_accepted_at" => StackVariable::VariableCargoDict(Variable::Industry::CargoLastAcceptedAt(0).into()),
                    "cargo_produced_waiting" => StackVariable::VariableCargoDict(Variable::Industry::CargoProducedWaiting(0).into()),
                    "cargo_production_last_month" => StackVariable::VariableCargoDict(Variable::Industry::CargoProductionLastMonth(0).into()),
                    "cargo_production_this_month" => StackVariable::VariableCargoDict(Variable::Industry::CargoProductionThisMonth(0).into()),
                    "cargo_transported_last_month" => StackVariable::VariableCargoDict(Variable::Industry::CargoTransportedLastMonth(0).into()),
                    "cargo_transported_this_month" => StackVariable::VariableCargoDict(Variable::Industry::CargoTransportedThisMonth(0).into()),
                    "production_rate" => StackVariable::VariableCargoDict(Variable::Industry::ProductionRate(0).into()),
                    _ => {
                        return Err(format!("Unknown industry identifier: {}", identifier));
                    },
                };
                engine.stack.push(Stack::Variable(result));
            },
            _ => {
                return Err(format!("Unknown namespace: {}", namespace));
            },
        }
    } else {
        /* Check if we know this identifier, either as list/dict, constant or variable. */
        if let Some(r#type) = engine.variable_is_list.get(token) {
            match r#type {
                Type::List | Type::Dict => engine.stack.push(Stack::Variable(StackVariable::List(token.to_string()))),
                Type::CargoDict => engine.stack.push(Stack::Variable(StackVariable::CargoDict(token.to_string()))),

                /* When a variable is in variable_is_list, it shouldn't be an integer. */
                Type::Integer => return Err("Unexpected keyword".to_string()),
                Type::Iterator => return Err("Unexpected keyword".to_string()),
            }

        } else if let Some(value) = engine.constants.get(token) {
            let value = value.get(&0).unwrap_or(&0);
            engine.stack.push(Stack::Number(*value));
        } else if engine.iterators.get(token).is_some() {
            engine.stack.push(Stack::Iterator(token.to_string()));
        } else {
            let register = engine.get_register(token, false)?;
            engine.stack.push(Stack::Variable(StackVariable::Register(register)));
        }
    }

    Ok(())
}
