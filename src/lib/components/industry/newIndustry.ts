export const newIndustry = {
    available: false,
    callbacks: "",
    cargoAcceptance: [],
    cargoProduction: [],
    colour: 1,
    fundCostMultiplier: 100,
    id: undefined, // Filled in after creation.
    layout: [[[0]]],
    name: "New industry",
    placement: "anywhere",
    probabilityInGame: 5,
    probabilityMapGen: 3,
    prospectChance: 75,
    tiles: [
        {
            sprites: [
                {
                    alwaysDraw: true,
                    drawType: "recolour",
                    sprite: {
                        id: 3924,
                    },
                },
                {
                    alwaysDraw: false,
                    drawType: "recolour",
                    sprite: {
                        id: 3924,
                        left: -31,
                        top: 0,
                    },
                },
            ],
        },
    ],
    type: "primary",
};
