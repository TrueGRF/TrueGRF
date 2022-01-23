export const config = {
    version: 3,
    general: {
        grfid: "TRU1",
        name: "TrueGRF",
        description: "Your first NewGRF based on FIRS4 BasicArctic (some industries are missing!)",
    },
    industries: [
        {
            id: 0,
            available: true,
            name: "Chemical Plant",
            colour: 191,
            fundCostMultiplier: 170,
            probabilityMapGen: 5,
            probabilityInGame: 3,
            prospectChance: 0,
            layout: [
                [
                    [4, 3, 0, 1, 2],
                    [4, 3, 0, 1, 0],
                    [5, 7, 7, 6, 6],
                ],
                [
                    [-1, 0, 6],
                    [2, 1, 6],
                    [0, 0, 7],
                    [4, 3, 5],
                    [4, 3, 5],
                ],
                [
                    [4, 3, 5],
                    [4, 3, 7],
                    [0, 0, 7],
                    [1, 1, 6],
                    [0, 2, 6],
                ],
                [
                    [6, 1, 0, 4, 3, 2, 5],
                    [6, 1, 0, 4, 3, 7, 5],
                ],
                [
                    [0, 2, 0, 6],
                    [0, 1, 0, 6],
                    [4, 3, 7, 7],
                    [4, 3, 5, 5],
                ],
                [
                    [4, 3, 4, 3],
                    [1, 0, 0, 7],
                    [6, 2, 1, 5],
                    [6, 0, 0, 5],
                ],
            ],
            cargoAcceptance: ["SULP", "PHOS", "NH3_", "POTA"],
            cargoProduction: ["FERT", "BOOM"],
            placement: "anywhere",
            tiles: [
                {
                    sprites: [
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAADFUlEQVR4nM1ZzdWjMAyc7NsCfHAJFJISKMIlUEZKSBEp5CuBEjjQAXv4nshkkI1JgOxcEgy29S9ZvuBLaNt2ijFiGAbEGHG/3y/foOP0TVNKk/035vn/2YI4bbOU0jQMAwDANA8ATdOg7/vF+OPxOIW2wzdhxoFfhgGg73uwC9hvCOFFIEdbxGGLt207sXYVHvPAq1vw81GC2H1R83HWuqdZ1Tibv37Pc/Z2jd0Wa9t2Dm6mQWXCLCKndR2ztViYhr0E8fEils5YkwyP+KZp8PPzg6ZpFoyO4/gy7s0dxxHAr4Bvt9tHPLw9WTXuEZwThmqb36sFmEC8dRjvWsTfrRPMx0MIGMdx/jViQwjzf2WQYe9tvseUravvNEgCT4VsFcSf2g9TSlPXdXNKM9824mOMaJpmJo7TnQmFwYIyqCWFEF7msiUMw/BiUYbr9Tqxda5hVVqax0vQSF4yc33X9/3MoH6j35asRrFmEdmXlsdZwxroSpE6Z/45AXFlyMyVagleh93PQ04Qi8Gu6ybP93gDJtrbmAOX1gM8FmNcaJ6Z4jn2nrOAR5/95hSgBdX84BUw7McKZXxNA17gsnGPWYPFkFymKdFkPHABZjBBXJhxLVS8nKyEeAzkLIeJMuZ4Dd5PNe3FhBJdtQpZWIDBM10bX1u8Fl6AywVOLxYoHZ4CvP2AZ0xYxACL+hqMvIVybqD1AftkLlja9xwTPKGU6FmzCu9Qlc0CKaWJmfEOJsr4GmpSoiegXED0aAGWmQTYkAUUa65RY25KvK5Tml9zSCqV4mvH6OqykaurXG7WFFRTqOTMl9fzvi+ts+WQtPkAoRZhyPk2H2q0rDV/96L9FnjprRZvnwZzBROnUsNWhoBnMZVrlWmwfbdjtEs/AIBboeWan/ZOvwWeZ4JSbGF82irbrSOk7W6g7oywdrDxXOcTjSsO6Qlq2gSWGmbGta6wZ01nRzRHD+sKW0FV0y3inkEugxx1T3D4vQBfgQHlokn7fXuaeg6n3Qxpl0Y7x3sHt1qcfjfodZFrStaj8JUbWeD/uR3+BzEzUNtKZdtVAAAAAElFTkSuQmCC",
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 114,
                                left: -31,
                                top: -83,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAADFUlEQVR4nM1ZzdWjMAyc7NsCfHAJFJISKMIlUEZKSBEp5CuBEjjQAXv4nshkkI1JgOxcEgy29S9ZvuBLaNt2ijFiGAbEGHG/3y/foOP0TVNKk/035vn/2YI4bbOU0jQMAwDANA8ATdOg7/vF+OPxOIW2wzdhxoFfhgGg73uwC9hvCOFFIEdbxGGLt207sXYVHvPAq1vw81GC2H1R83HWuqdZ1Tibv37Pc/Z2jd0Wa9t2Dm6mQWXCLCKndR2ztViYhr0E8fEils5YkwyP+KZp8PPzg6ZpFoyO4/gy7s0dxxHAr4Bvt9tHPLw9WTXuEZwThmqb36sFmEC8dRjvWsTfrRPMx0MIGMdx/jViQwjzf2WQYe9tvseUravvNEgCT4VsFcSf2g9TSlPXdXNKM9824mOMaJpmJo7TnQmFwYIyqCWFEF7msiUMw/BiUYbr9Tqxda5hVVqax0vQSF4yc33X9/3MoH6j35asRrFmEdmXlsdZwxroSpE6Z/45AXFlyMyVagleh93PQ04Qi8Gu6ybP93gDJtrbmAOX1gM8FmNcaJ6Z4jn2nrOAR5/95hSgBdX84BUw7McKZXxNA17gsnGPWYPFkFymKdFkPHABZjBBXJhxLVS8nKyEeAzkLIeJMuZ4Dd5PNe3FhBJdtQpZWIDBM10bX1u8Fl6AywVOLxYoHZ4CvP2AZ0xYxACL+hqMvIVybqD1AftkLlja9xwTPKGU6FmzCu9Qlc0CKaWJmfEOJsr4GmpSoiegXED0aAGWmQTYkAUUa65RY25KvK5Tml9zSCqV4mvH6OqykaurXG7WFFRTqOTMl9fzvi+ts+WQtPkAoRZhyPk2H2q0rDV/96L9FnjprRZvnwZzBROnUsNWhoBnMZVrlWmwfbdjtEs/AIBboeWan/ZOvwWeZ4JSbGF82irbrSOk7W6g7oywdrDxXOcTjSsO6Qlq2gSWGmbGta6wZ01nRzRHD+sKW0FV0y3inkEugxx1T3D4vQBfgQHlokn7fXuaeg6n3Qxpl0Y7x3sHt1qcfjfodZFrStaj8JUbWeD/uR3+BzEzUNtKZdtVAAAAAElFTkSuQmCC",
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 114,
                                left: -31,
                                top: -83,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAADFUlEQVR4nM1ZzdWjMAyc7NsCfHAJFJISKMIlUEZKSBEp5CuBEjjQAXv4nshkkI1JgOxcEgy29S9ZvuBLaNt2ijFiGAbEGHG/3y/foOP0TVNKk/035vn/2YI4bbOU0jQMAwDANA8ATdOg7/vF+OPxOIW2wzdhxoFfhgGg73uwC9hvCOFFIEdbxGGLt207sXYVHvPAq1vw81GC2H1R83HWuqdZ1Tibv37Pc/Z2jd0Wa9t2Dm6mQWXCLCKndR2ztViYhr0E8fEils5YkwyP+KZp8PPzg6ZpFoyO4/gy7s0dxxHAr4Bvt9tHPLw9WTXuEZwThmqb36sFmEC8dRjvWsTfrRPMx0MIGMdx/jViQwjzf2WQYe9tvseUravvNEgCT4VsFcSf2g9TSlPXdXNKM9824mOMaJpmJo7TnQmFwYIyqCWFEF7msiUMw/BiUYbr9Tqxda5hVVqax0vQSF4yc33X9/3MoH6j35asRrFmEdmXlsdZwxroSpE6Z/45AXFlyMyVagleh93PQ04Qi8Gu6ybP93gDJtrbmAOX1gM8FmNcaJ6Z4jn2nrOAR5/95hSgBdX84BUw7McKZXxNA17gsnGPWYPFkFymKdFkPHABZjBBXJhxLVS8nKyEeAzkLIeJMuZ4Dd5PNe3FhBJdtQpZWIDBM10bX1u8Fl6AywVOLxYoHZ4CvP2AZ0xYxACL+hqMvIVybqD1AftkLlja9xwTPKGU6FmzCu9Qlc0CKaWJmfEOJsr4GmpSoiegXED0aAGWmQTYkAUUa65RY25KvK5Tml9zSCqV4mvH6OqykaurXG7WFFRTqOTMl9fzvi+ts+WQtPkAoRZhyPk2H2q0rDV/96L9FnjprRZvnwZzBROnUsNWhoBnMZVrlWmwfbdjtEs/AIBboeWan/ZOvwWeZ4JSbGF82irbrSOk7W6g7oywdrDxXOcTjSsO6Qlq2gSWGmbGta6wZ01nRzRHD+sKW0FV0y3inkEugxx1T3D4vQBfgQHlokn7fXuaeg6n3Qxpl0Y7x3sHt1qcfjfodZFrStaj8JUbWeD/uR3+BzEzUNtKZdtVAAAAAElFTkSuQmCC",
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 114,
                                left: -31,
                                top: -83,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAADFUlEQVR4nM1ZzdWjMAyc7NsCfHAJFJISKMIlUEZKSBEp5CuBEjjQAXv4nshkkI1JgOxcEgy29S9ZvuBLaNt2ijFiGAbEGHG/3y/foOP0TVNKk/035vn/2YI4bbOU0jQMAwDANA8ATdOg7/vF+OPxOIW2wzdhxoFfhgGg73uwC9hvCOFFIEdbxGGLt207sXYVHvPAq1vw81GC2H1R83HWuqdZ1Tibv37Pc/Z2jd0Wa9t2Dm6mQWXCLCKndR2ztViYhr0E8fEils5YkwyP+KZp8PPzg6ZpFoyO4/gy7s0dxxHAr4Bvt9tHPLw9WTXuEZwThmqb36sFmEC8dRjvWsTfrRPMx0MIGMdx/jViQwjzf2WQYe9tvseUravvNEgCT4VsFcSf2g9TSlPXdXNKM9824mOMaJpmJo7TnQmFwYIyqCWFEF7msiUMw/BiUYbr9Tqxda5hVVqax0vQSF4yc33X9/3MoH6j35asRrFmEdmXlsdZwxroSpE6Z/45AXFlyMyVagleh93PQ04Qi8Gu6ybP93gDJtrbmAOX1gM8FmNcaJ6Z4jn2nrOAR5/95hSgBdX84BUw7McKZXxNA17gsnGPWYPFkFymKdFkPHABZjBBXJhxLVS8nKyEeAzkLIeJMuZ4Dd5PNe3FhBJdtQpZWIDBM10bX1u8Fl6AywVOLxYoHZ4CvP2AZ0xYxACL+hqMvIVybqD1AftkLlja9xwTPKGU6FmzCu9Qlc0CKaWJmfEOJsr4GmpSoiegXED0aAGWmQTYkAUUa65RY25KvK5Tml9zSCqV4mvH6OqykaurXG7WFFRTqOTMl9fzvi+ts+WQtPkAoRZhyPk2H2q0rDV/96L9FnjprRZvnwZzBROnUsNWhoBnMZVrlWmwfbdjtEs/AIBboeWan/ZOvwWeZ4JSbGF82irbrSOk7W6g7oywdrDxXOcTjSsO6Qlq2gSWGmbGta6wZ01nRzRHD+sKW0FV0y3inkEugxx1T3D4vQBfgQHlokn7fXuaeg6n3Qxpl0Y7x3sHt1qcfjfodZFrStaj8JUbWeD/uR3+BzEzUNtKZdtVAAAAAElFTkSuQmCC",
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 114,
                                left: -31,
                                top: -83,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAADFUlEQVR4nM1ZzdWjMAyc7NsCfHAJFJISKMIlUEZKSBEp5CuBEjjQAXv4nshkkI1JgOxcEgy29S9ZvuBLaNt2ijFiGAbEGHG/3y/foOP0TVNKk/035vn/2YI4bbOU0jQMAwDANA8ATdOg7/vF+OPxOIW2wzdhxoFfhgGg73uwC9hvCOFFIEdbxGGLt207sXYVHvPAq1vw81GC2H1R83HWuqdZ1Tibv37Pc/Z2jd0Wa9t2Dm6mQWXCLCKndR2ztViYhr0E8fEils5YkwyP+KZp8PPzg6ZpFoyO4/gy7s0dxxHAr4Bvt9tHPLw9WTXuEZwThmqb36sFmEC8dRjvWsTfrRPMx0MIGMdx/jViQwjzf2WQYe9tvseUravvNEgCT4VsFcSf2g9TSlPXdXNKM9824mOMaJpmJo7TnQmFwYIyqCWFEF7msiUMw/BiUYbr9Tqxda5hVVqax0vQSF4yc33X9/3MoH6j35asRrFmEdmXlsdZwxroSpE6Z/45AXFlyMyVagleh93PQ04Qi8Gu6ybP93gDJtrbmAOX1gM8FmNcaJ6Z4jn2nrOAR5/95hSgBdX84BUw7McKZXxNA17gsnGPWYPFkFymKdFkPHABZjBBXJhxLVS8nKyEeAzkLIeJMuZ4Dd5PNe3FhBJdtQpZWIDBM10bX1u8Fl6AywVOLxYoHZ4CvP2AZ0xYxACL+hqMvIVybqD1AftkLlja9xwTPKGU6FmzCu9Qlc0CKaWJmfEOJsr4GmpSoiegXED0aAGWmQTYkAUUa65RY25KvK5Tml9zSCqV4mvH6OqykaurXG7WFFRTqOTMl9fzvi+ts+WQtPkAoRZhyPk2H2q0rDV/96L9FnjprRZvnwZzBROnUsNWhoBnMZVrlWmwfbdjtEs/AIBboeWan/ZOvwWeZ4JSbGF82irbrSOk7W6g7oywdrDxXOcTjSsO6Qlq2gSWGmbGta6wZ01nRzRHD+sKW0FV0y3inkEugxx1T3D4vQBfgQHlokn7fXuaeg6n3Qxpl0Y7x3sHt1qcfjfodZFrStaj8JUbWeD/uR3+BzEzUNtKZdtVAAAAAElFTkSuQmCC",
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 114,
                                left: -31,
                                top: -83,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAADFUlEQVR4nM1ZzdWjMAyc7NsCfHAJFJISKMIlUEZKSBEp5CuBEjjQAXv4nshkkI1JgOxcEgy29S9ZvuBLaNt2ijFiGAbEGHG/3y/foOP0TVNKk/035vn/2YI4bbOU0jQMAwDANA8ATdOg7/vF+OPxOIW2wzdhxoFfhgGg73uwC9hvCOFFIEdbxGGLt207sXYVHvPAq1vw81GC2H1R83HWuqdZ1Tibv37Pc/Z2jd0Wa9t2Dm6mQWXCLCKndR2ztViYhr0E8fEils5YkwyP+KZp8PPzg6ZpFoyO4/gy7s0dxxHAr4Bvt9tHPLw9WTXuEZwThmqb36sFmEC8dRjvWsTfrRPMx0MIGMdx/jViQwjzf2WQYe9tvseUravvNEgCT4VsFcSf2g9TSlPXdXNKM9824mOMaJpmJo7TnQmFwYIyqCWFEF7msiUMw/BiUYbr9Tqxda5hVVqax0vQSF4yc33X9/3MoH6j35asRrFmEdmXlsdZwxroSpE6Z/45AXFlyMyVagleh93PQ04Qi8Gu6ybP93gDJtrbmAOX1gM8FmNcaJ6Z4jn2nrOAR5/95hSgBdX84BUw7McKZXxNA17gsnGPWYPFkFymKdFkPHABZjBBXJhxLVS8nKyEeAzkLIeJMuZ4Dd5PNe3FhBJdtQpZWIDBM10bX1u8Fl6AywVOLxYoHZ4CvP2AZ0xYxACL+hqMvIVybqD1AftkLlja9xwTPKGU6FmzCu9Qlc0CKaWJmfEOJsr4GmpSoiegXED0aAGWmQTYkAUUa65RY25KvK5Tml9zSCqV4mvH6OqykaurXG7WFFRTqOTMl9fzvi+ts+WQtPkAoRZhyPk2H2q0rDV/96L9FnjprRZvnwZzBROnUsNWhoBnMZVrlWmwfbdjtEs/AIBboeWan/ZOvwWeZ4JSbGF82irbrSOk7W6g7oywdrDxXOcTjSsO6Qlq2gSWGmbGta6wZ01nRzRHD+sKW0FV0y3inkEugxx1T3D4vQBfgQHlokn7fXuaeg6n3Qxpl0Y7x3sHt1qcfjfodZFrStaj8JUbWeD/uR3+BzEzUNtKZdtVAAAAAElFTkSuQmCC",
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 66,
                                left: -31,
                                top: -35,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAADFUlEQVR4nM1ZzdWjMAyc7NsCfHAJFJISKMIlUEZKSBEp5CuBEjjQAXv4nshkkI1JgOxcEgy29S9ZvuBLaNt2ijFiGAbEGHG/3y/foOP0TVNKk/035vn/2YI4bbOU0jQMAwDANA8ATdOg7/vF+OPxOIW2wzdhxoFfhgGg73uwC9hvCOFFIEdbxGGLt207sXYVHvPAq1vw81GC2H1R83HWuqdZ1Tibv37Pc/Z2jd0Wa9t2Dm6mQWXCLCKndR2ztViYhr0E8fEils5YkwyP+KZp8PPzg6ZpFoyO4/gy7s0dxxHAr4Bvt9tHPLw9WTXuEZwThmqb36sFmEC8dRjvWsTfrRPMx0MIGMdx/jViQwjzf2WQYe9tvseUravvNEgCT4VsFcSf2g9TSlPXdXNKM9824mOMaJpmJo7TnQmFwYIyqCWFEF7msiUMw/BiUYbr9Tqxda5hVVqax0vQSF4yc33X9/3MoH6j35asRrFmEdmXlsdZwxroSpE6Z/45AXFlyMyVagleh93PQ04Qi8Gu6ybP93gDJtrbmAOX1gM8FmNcaJ6Z4jn2nrOAR5/95hSgBdX84BUw7McKZXxNA17gsnGPWYPFkFymKdFkPHABZjBBXJhxLVS8nKyEeAzkLIeJMuZ4Dd5PNe3FhBJdtQpZWIDBM10bX1u8Fl6AywVOLxYoHZ4CvP2AZ0xYxACL+hqMvIVybqD1AftkLlja9xwTPKGU6FmzCu9Qlc0CKaWJmfEOJsr4GmpSoiegXED0aAGWmQTYkAUUa65RY25KvK5Tml9zSCqV4mvH6OqykaurXG7WFFRTqOTMl9fzvi+ts+WQtPkAoRZhyPk2H2q0rDV/96L9FnjprRZvnwZzBROnUsNWhoBnMZVrlWmwfbdjtEs/AIBboeWan/ZOvwWeZ4JSbGF82irbrSOk7W6g7oywdrDxXOcTjSsO6Qlq2gSWGmbGta6wZ01nRzRHD+sKW0FV0y3inkEugxx1T3D4vQBfgQHlokn7fXuaeg6n3Qxpl0Y7x3sHt1qcfjfodZFrStaj8JUbWeD/uR3+BzEzUNtKZdtVAAAAAElFTkSuQmCC",
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 66,
                                left: -31,
                                top: -35,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAADFUlEQVR4nM1ZzdWjMAyc7NsCfHAJFJISKMIlUEZKSBEp5CuBEjjQAXv4nshkkI1JgOxcEgy29S9ZvuBLaNt2ijFiGAbEGHG/3y/foOP0TVNKk/035vn/2YI4bbOU0jQMAwDANA8ATdOg7/vF+OPxOIW2wzdhxoFfhgGg73uwC9hvCOFFIEdbxGGLt207sXYVHvPAq1vw81GC2H1R83HWuqdZ1Tibv37Pc/Z2jd0Wa9t2Dm6mQWXCLCKndR2ztViYhr0E8fEils5YkwyP+KZp8PPzg6ZpFoyO4/gy7s0dxxHAr4Bvt9tHPLw9WTXuEZwThmqb36sFmEC8dRjvWsTfrRPMx0MIGMdx/jViQwjzf2WQYe9tvseUravvNEgCT4VsFcSf2g9TSlPXdXNKM9824mOMaJpmJo7TnQmFwYIyqCWFEF7msiUMw/BiUYbr9Tqxda5hVVqax0vQSF4yc33X9/3MoH6j35asRrFmEdmXlsdZwxroSpE6Z/45AXFlyMyVagleh93PQ04Qi8Gu6ybP93gDJtrbmAOX1gM8FmNcaJ6Z4jn2nrOAR5/95hSgBdX84BUw7McKZXxNA17gsnGPWYPFkFymKdFkPHABZjBBXJhxLVS8nKyEeAzkLIeJMuZ4Dd5PNe3FhBJdtQpZWIDBM10bX1u8Fl6AywVOLxYoHZ4CvP2AZ0xYxACL+hqMvIVybqD1AftkLlja9xwTPKGU6FmzCu9Qlc0CKaWJmfEOJsr4GmpSoiegXED0aAGWmQTYkAUUa65RY25KvK5Tml9zSCqV4mvH6OqykaurXG7WFFRTqOTMl9fzvi+ts+WQtPkAoRZhyPk2H2q0rDV/96L9FnjprRZvnwZzBROnUsNWhoBnMZVrlWmwfbdjtEs/AIBboeWan/ZOvwWeZ4JSbGF82irbrSOk7W6g7oywdrDxXOcTjSsO6Qlq2gSWGmbGta6wZ01nRzRHD+sKW0FV0y3inkEugxx1T3D4vQBfgQHlokn7fXuaeg6n3Qxpl0Y7x3sHt1qcfjfodZFrStaj8JUbWeD/uR3+BzEzUNtKZdtVAAAAAElFTkSuQmCC",
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 66,
                                left: -31,
                                top: -35,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAABCCAYAAADnodDVAAABoklEQVR4nO3XoXOCYBgG8IfdgmGB8AUCwbBgMCwYDAsGgoGwYDQsLPAHGAyEBcPiooFAMCwQFhYMBILRYDAYDAQDgWAwrLHg4XEo05v3wd3u+SXkvYOX9+HzOwAiIiIiIiIiIiIiIiIiIiIiIinaQz/pjldJ1X3cVHHT9tBPtpsIS+8LVQ+htAFkE1/7AVRdQ7NnYhtujuplUsq4SZr4LorQ7JmYOxPUVBV3mgZV1wAA2frUapTSFyDxDTiXuN56QP2xhaJ6WaQM4NQa38wXCGdzAMC90UFaV+s68vUsx/USx/WkLQ0pAziX6KWJO66XRHGMKI4hawjSlkA20dFTeDj/2vB/rb80toeH/fA+oQkBTQhEcSylz1J2AcueKHZngXdjie7z29EfXFofGDXkE/eDGRbLlbTepAzgVOKWPVHShy+ql5F4nrTtZjzqJ3VdP5l4Ud0w+4kQAkIIaJqA+J4hWO9/m81d4bWuUdp+e4n8AOyBpZwb5LVuZVz0r3ptIFjvj1siBLBfGtV1VIHxqJ9M3WHlH0lERERERERERPRf/QAgrt5PFPQdDQAAAABJRU5ErkJggg==",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
            ],
            callbacks:
                "const type{\n    accept_cargo_types cargodict\n    prod_cargo_types cargodict\n}\n\nlocal type{\n    current_production_ratio integer\n    total_cargo_produced_this_cycle integer\n    total_cargo_to_distribute_this_cycle integer\n\n    cargo iterator\n}\n\nindustry:storage type{\n    supplied_cycles_remaining_cargo cargodict\n\n    total_produced_cargo_available integer\n}\n\naccept_cargo_types ctt:SULP [] 2 =\naccept_cargo_types ctt:PHOS [] 2 =\naccept_cargo_types ctt:NH3_ [] 2 =\naccept_cargo_types ctt:POTA [] 2 =\nprod_cargo_types ctt:FERT [] 4 =\nprod_cargo_types ctt:BOOM [] 4 =\n\n\n/*\n The following is a replication of what FIRS is doing for a secondary industry.\n See: https://github.com/andythenorth/firs/blob/4.4.0/src/templates/produce_secondary.pynml\n*/\n\ncb:production_cargo_arrival def{\n    cargo accept_cargo_types loop{\n        supplied_cycles_remaining_cargo cargo []\n            28\n            supplied_cycles_remaining_cargo cargo []\n        industry:cargo_incoming_waiting cargo [] 0 >\n        =\n\n        current_production_ratio\n            current_production_ratio\n                accept_cargo_types cargo []\n                0\n            supplied_cycles_remaining_cargo cargo [] 0 >\n            +\n        =\n\n        total_cargo_produced_this_cycle\n            total_cargo_produced_this_cycle\n            industry:cargo_incoming_waiting cargo [] current_production_ratio * 8 /\n            +\n        =\n    }\n\n    /*\n     When low cargo amounts are delivered, it's possible that final output\n     cargo amounts < 1, which means no cargo is distributed. Prevent that by\n     stockpiling produced cargo on each production cycle until there is enough\n     to distribute. The case is triggered by low amounts being moved to the\n     produce cycle as a vehicle gradually unloads, and was noticeable with\n     Road Hog trams.\n    */\n    total_produced_cargo_available total_produced_cargo_available total_cargo_produced_this_cycle + =\n\n    /*\n     Then check min. distributed by dividing over 8, to get the amount divided\n     by max possible output cargos. 8 is the pathological case, this could be\n     made more accurate by checking the lowest output ratio in current economy.\n     For accuracy, this could also store remainders using mod(8) or so, but eh, TMWFTLB?\n    */\n    total_cargo_to_distribute_this_cycle\n        total_produced_cargo_available\n        0\n        total_produced_cargo_available 8 >=\n    =\n    total_produced_cargo_available total_produced_cargo_available total_cargo_to_distribute_this_cycle - =\n\n    cargo accept_cargo_types loop{\n        result:inputs cargo [] industry:cargo_incoming_waiting cargo [] =\n    }\n    cargo prod_cargo_types loop{\n        result:outputs cargo [] total_cargo_to_distribute_this_cycle prod_cargo_types cargo [] * 8 / =\n    }\n}\n\ncb:production_every_256_ticks def{\n    cargo accept_cargo_types loop{\n        supplied_cycles_remaining_cargo cargo [] supplied_cycles_remaining_cargo cargo [] 1 - 0 max =\n    }\n}\n\ncb:production_change_monthly def{\n    result:value 0 =\n}\n\ncb:production_change_random def{\n    result:value 0 =\n}\n",
            type: "secondary",
        },
        {
            id: 1,
            available: true,
            name: "Fish Farm",
            colour: 160,
            fundCostMultiplier: 88,
            probabilityMapGen: 14,
            probabilityInGame: 14,
            prospectChance: 75,
            layout: [
                [
                    [6, -1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, 0, -1, -1, -1],
                    [-1, -1, -1, 3, 2, -1, -1],
                    [-1, -1, -1, 1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1, -1],
                ],
                [
                    [6, -1, -1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, 0, -1, -1, -1, -1],
                    [-1, -1, -1, 1, -1, -1, -1, -1],
                    [-1, -1, -1, 3, 2, 2, -1, -1],
                    [-1, -1, -1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1, -1, -1],
                ],
                [
                    [6, -1, -1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, 1, -1, -1],
                    [-1, -1, 2, -1, -1, 3, -1, -1],
                    [-1, -1, -1, -1, -1, 1, -1, -1],
                    [-1, -1, -1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1, -1, -1],
                ],
                [
                    [6, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, 1, -1, -1],
                    [-1, -1, -1, 3, -1, -1],
                    [-1, -1, -1, 2, -1, -1],
                    [-1, -1, 2, 0, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                ],
            ],
            cargoAcceptance: ["FMSP"],
            cargoProduction: ["FISH"],
            placement: "on-water",
            tiles: [
                {
                    sprites: [
                        {
                            sprite: {
                                id: 4061,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAAC0UlEQVR4nO1YK3DbQBB97hgYCBwQEBAQEBAoMBAwCAgwMAgIMDAQPFBYIBAgKChQUBAgKHDAIMAgwCDAoECgoEBAQEBAwOCAQEBnriA9V5Mmjb6uZ+KHPD7t3u7bvb3bBc4444z3jNExN3NdV8jfnHMAwH6/h2maAIAgCI5qDzAQAb7viyzLQAjBppi++p1VrhGXF1A07cU1VVUBAGEYDkZMb4ql0wCwe7wE8MdBiXzr/nM/1fbEhBAAgPlzg0KnAAAtD0EIgaqqvZPRWZl0XDoNAEnk9GakPg9ENUO0PIRpmr0R0VoJY0ykaYo4jpEoS5RF8WaEu0KSYZVrmKYJQgg8z+u0Zyth3/fFppyB50Wv0W4Cy4kE0TVcKd86kfChqcApOA88HTOeF9iUM/i+L96WeBm1HXBdVxBCkGXZoFW5KfR5IGxlB9u2kVkOwqXRyLbaGSCvs1NyHni6We7u7kYAsI8+D7vZ7GbbOtWGRlvbamdAl3N2DPC8AGNsGBtd1xWU0pMmAHiys/rcroNaGbAbL/BDXQ3HcA9gjIndeHHoMXqH5USCrrOTJYCuM2E50bD2zW624hRrAWNMLG6TYYvg7GYrtOQr4jg+qYLIGBOMMehxgDYkjOt++HHPsAeQKEsUpQZKqfifbwJZj758V8GVJfAIXKUh7hvqaexAtTu7mDzAMIzODUlTyEYsSozDf22f5a2E9HkgAEDRNFxMHo4y1ZFOy0HLbrwAz4vOXWhrQX0eiNW0QJqmSJTlIQLX19eiLzJkralmmOVEwirXsG0bUWJ0bsg6R6s6xZFHI4mcEaVUEEIQBMGo+jghhIBzDvJb5iV4njfyfV+YponVajWqXm9lUQB4e7pUF72ma5WM1bQA5/wwKXoeKdldPq8f0lkZ5duHyWFtiIHLYMWLUiruMws8S0EM86913Z4CAPL4+6s6Pl0+Hr3AnnHGGe8LvwDCm2Iv2oo7zwAAAABJRU5ErkJggg==",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 4061,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAADDElEQVR4nO2YIXTiQBCGP+4hKhArIiIQiIiIExURiIoKREVFBQKBqIg4eSKiAnEioiLixIkKxAnEioqKigpEBaICUXEiAhEREYGIiKjoe3uiXcpr6RVIwvHu+FVedmd35p/Z2Z2BHXbY4X9GZZObeZ6n9HeapgBMp1MsywIgCIKN6gMlEeD7voqiCCEE18n+u/Ps7JJxdkDNNBeOGYYBQL/fL42YwhbWRgOMHg6BFwM14qH3x/0Mp6f2hADAerwmqbsAmHEfIQSGYRRORu7FtOHaaIBw0C1MyXorUPMRYsZ9LMsqjIi1F5FSqslkwng8Jqy1yZLkQw/nhSbDzi6xLAshBL1eL9eeawn7vq+usyZpnBTq7VVgdwdK1E2Oa3e5SPi0qsA2GA9PxyyNE66zJr7vq48lFmNpAzzPU0IIoigqNSuvinorUE5thOM4RHaXfruxkm5LR4C+zrbJeHi6Wa6urioA08HXcjdrng3XDrWysa5uS0dAnnO2CaRxgpSyHB09z1Ou6241AfCk5/xzW+MnqAgW6r9UBIyqR/wyOuUxXACklGpUPZrVGBph9qgA4nfkliLg7rxVSeOEYbWZS8kyMaw+Xc2vk/R5IImevzUZa6N5NlTbmAuklOroIlyoV5g9qtZpoMLsUZ1+G7yZs/SV1jwbKjP8AYDjOLmfoEVBSqmklBiGQex43HyxV9KruuzEz1PJFAhrbZLMxHVd9TffBDoffb83SGtteIDjSZ+bFddZ2YD56uxg75ZGo7HxaNCF2CBszP6t+yxfS6jeChRAzTQ52LvdSFdHG60bLaPqEWmc5K5C1xastwLV2U+YTCaEtfbMAycnJ6ooMnTCnY8wuztQdnaJ4zgMwkbugiy3t+a7OPpohINuxXVdJYQgCILK/ONECEGapohnmUXo9XoV3/eVZVl0Op2K3X3J3lmSAB93l5ZFoeE6T0ZnPyFN01mn6LWndHX5On9oY7WXL273ZmNlNFxKS16u66qbyCaNJoiG9Wa87uwDEI/v313jy+HD1ly3O+yww7+J3/98eapJIK1cAAAAAElFTkSuQmCC",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 4061,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAAC0UlEQVR4nO1YK3DbQBB97hgYCBwQEBAQEBAoMBAwCAgwMAgIMDAQPFBYIBAgKChQUBAgKHDAIMAgwCDAoECgoEBAQEBAwOCAQEBnriA9V5Mmjb6uZ+KHPD7t3u7bvb3bBc4444z3jNExN3NdV8jfnHMAwH6/h2maAIAgCI5qDzAQAb7viyzLQAjBppi++p1VrhGXF1A07cU1VVUBAGEYDkZMb4ql0wCwe7wE8MdBiXzr/nM/1fbEhBAAgPlzg0KnAAAtD0EIgaqqvZPRWZl0XDoNAEnk9GakPg9ENUO0PIRpmr0R0VoJY0ykaYo4jpEoS5RF8WaEu0KSYZVrmKYJQgg8z+u0Zyth3/fFppyB50Wv0W4Cy4kE0TVcKd86kfChqcApOA88HTOeF9iUM/i+L96WeBm1HXBdVxBCkGXZoFW5KfR5IGxlB9u2kVkOwqXRyLbaGSCvs1NyHni6We7u7kYAsI8+D7vZ7GbbOtWGRlvbamdAl3N2DPC8AGNsGBtd1xWU0pMmAHiys/rcroNaGbAbL/BDXQ3HcA9gjIndeHHoMXqH5USCrrOTJYCuM2E50bD2zW624hRrAWNMLG6TYYvg7GYrtOQr4jg+qYLIGBOMMehxgDYkjOt++HHPsAeQKEsUpQZKqfifbwJZj758V8GVJfAIXKUh7hvqaexAtTu7mDzAMIzODUlTyEYsSozDf22f5a2E9HkgAEDRNFxMHo4y1ZFOy0HLbrwAz4vOXWhrQX0eiNW0QJqmSJTlIQLX19eiLzJkralmmOVEwirXsG0bUWJ0bsg6R6s6xZFHI4mcEaVUEEIQBMGo+jghhIBzDvJb5iV4njfyfV+YponVajWqXm9lUQB4e7pUF72ma5WM1bQA5/wwKXoeKdldPq8f0lkZ5duHyWFtiIHLYMWLUiruMws8S0EM86913Z4CAPL4+6s6Pl0+Hr3AnnHGGe8LvwDCm2Iv2oo7zwAAAABJRU5ErkJggg==",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 4061,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 63,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAA/CAYAAABQHc7KAAADKElEQVR4nO2YIXSjQBCG/9yLiECsQCAQEQhERQQioqIiIqKiIgIRcQJx8gQiIuIE4gTiREVFxAnEioiKiIqIiogTiIoTCAQCgYhAICr63p7okeO1TRMC5PLu5lN5YWd35t9h2FmAIIj/mdYxF7NtW+S/0zQFAKzXa2iaBgBwXfeo/gANCeA4joiiCIwxLJLe1nF6NoefnUNSlDefybIMAJjNZo0JU9vEedAAsHq8APAnwJx4ab+7nmxMRYcxAID2tECiWgAAJZ6BMQZZlmsXo/JkeeB50AAQeOPanFQHrihmiBLPoGlabUIcPAnnXIRhCN/3EUgjZEmyc4erkouhZ3NomgbGGKbTaaU1DzJ2HEcssj7SOKl1t8ugjz3BVAWX0o9KInwoa3AKwQPPr1kaJ1hkfTiOI3ZbvM3eAdi2LRhjiKKo0apcFnXgCkNawTAMRPoYs1G3lG97Z0D+OTul4IHnL8vt7W0LANbe52YX60+WB6da0xzq294ZUOU9OwZpnIBz3oyPtm0Ly7JOWgDg2c/icXsf9sqAVXuIn7LZnMI1wDkXq/Zw02PUjj72hDWPTlYAax4Jfew1619/shSnWAs452J4EzRbBPuTpVCCa/i+f1IFkXMuOOdQfReHiNDed+DZmmMNIJBGSDIFlmWJv3kmyOvRtwcZqTQCHoHLcIa7kvOUDqDYnZ137tHtdis3JGXJGzEv6G7+O/RYfpCROnAFAEiKgvPO/VFudfKg84uWVXuINE4qd6HvGiZ3TMi9M7SV1atx6sAVZi9BGIYIpNFmB66urkRdYuS1pphh+tgTejaHYRjwgm7lhmyr8eCjKzzTgaymaJ9tH1e8xclfjcAbtyzLEowxuK7bKh5OGGNI0xTst81bTKfTluM4QtM0mKbZKn7esiQBsPt2aV+2ThJkT+KJa9D7Eay5h+9fditdFMPsJUjTdHNT9HKn8u7yZf3Ig813+ea+s3nWxIXLuxlwff0ZX12OiW1Cl9qlFrcsS9xFOtIoBOtqr56rRg8AEPsPW+f4dPF49AJLEARBEARBEARBEARBEARBEARBEARBEARBEMS/xS+CMXwv7GSY0wAAAABJRU5ErkJggg==",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 47,
                                left: -31,
                                top: -16,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 48,
                                left: -31,
                                top: -16,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 48,
                                left: -31,
                                top: -16,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 48,
                                left: -31,
                                top: -16,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 48,
                                left: -31,
                                top: -16,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 48,
                                left: -31,
                                top: -16,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 48,
                                left: -31,
                                top: -16,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 48,
                                left: -31,
                                top: -16,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
            ],
            callbacks:
                "const type{\n    level_requirements dict\n    random_prod_factor dict\n    supply_requirement integer\n\n    accept_cargo_types cargodict\n    prod_cargo_types cargodict\n}\n\nlocal type{\n    total_delivered integer\n    current_production_level integer\n    random_range integer\n\n    i iterator\n    level iterator\n    cargo iterator\n}\n\nindustry:storage type{\n    supplied_cycles_remaining_cargo cargodict\n\n    base_prod_factor integer\n\n    num_supplies_delivered 27 list\n}\n\nlevel_requirements 0 [] 100 =\nlevel_requirements 16 [] 150 =\nlevel_requirements 16 5 * [] 300 =\n\nrandom_prod_factor 0 [] 8 =\nrandom_prod_factor 1 [] 12 =\nrandom_prod_factor 5 [] 16 =\nrandom_prod_factor 7 [] 20 =\nrandom_prod_factor 10 [] 24 =\nrandom_prod_factor 11 [] 28 =\nrandom_prod_factor 12 [] 32 =\nrandom_prod_factor 13 [] 36 =\n\nsupply_requirement 8 =\n\naccept_cargo_types ctt:FMSP [] 1 =\nprod_cargo_types ctt:FISH [] 8 =\n\n\n/*\n The following is a replication of what FIRS is doing for a primary industry.\n See: https://github.com/andythenorth/firs/blob/4.4.0/src/templates/produce_primary.pynml\n*/\n\n/* Get the total amount of supplies delivered in last 27 production cycles. */\nfunc:produce_total_supplies_delivered def{\n    i 0 26 [..] loop{\n        total_delivered total_delivered num_supplies_delivered i [] + =\n    }\n}\n\n/* Calculate current production level, based on delivered supplies. */\nfunc:produce_calculate_current_production_level def{\n    func:produce_total_supplies_delivered ()\n\n    level level_requirements loop{\n        current_production_level\n            level_requirements level []\n            current_production_level\n            total_delivered supply_requirement / level >=\n        =\n    }\n}\n\n/* Set the number of supplied cycles remaining per cargo - used to display 'supplied' (or not) in the industry window. */\nfunc:update_supplied_cycles_remaining_per_cargo def{\n    cargo accept_cargo_types loop{\n        supplied_cycles_remaining_cargo cargo [] supplied_cycles_remaining_cargo cargo [] 1 - 0 max =\n    }\n}\n\n/* Shift the array of supplies_delivered values one place to the left, and zero the last entry. */\nfunc:produce_256_ticks_shift_supplies_delivered def{\n    i 0 25 [..] loop{\n        num_supplies_delivered i [] num_supplies_delivered i 1 + [] =\n    }\n    num_supplies_delivered 26 [] 0 =\n}\n\n/* On arrival of supplies, push the amount to perm storage, then clear from stockpile. */\ncb:production_cargo_arrival def{\n    cargo accept_cargo_types loop{\n        num_supplies_delivered 26 [] num_supplies_delivered 26 [] industry:cargo_incoming_waiting cargo [] + =\n\n        supplied_cycles_remaining_cargo cargo []\n            28\n            supplied_cycles_remaining_cargo cargo []\n        industry:cargo_incoming_waiting cargo [] 0 >\n        =\n    }\n\n    /*\n     Update the production level immediately, so that production level text immediately updates in industry window.\n     Production won't actually increase until next 256 tick production cycle.\n    */\n    func:produce_calculate_current_production_level ()\n\n    cargo accept_cargo_types loop{\n        result:inputs cargo [] industry:cargo_incoming_waiting cargo [] =\n    }\n}\n\n/* On 256 ticks, if supplied, produce extra output cargo at appropriate multiplier. */\ncb:production_every_256_ticks def{\n    func:produce_calculate_current_production_level ()\n    func:update_supplied_cycles_remaining_per_cargo ()\n    func:produce_256_ticks_shift_supplies_delivered ()\n\n    cargo prod_cargo_types loop{\n        result:outputs cargo [] prod_cargo_types cargo [] industry:production_level base_prod_factor current_production_level * * * 16 16 100 * * / =\n    }\n}\n\ncb:production_initial def{\n    /* Highest value in random_prod_factor is 13. */\n    random_range industry:random_bits 14 % =\n\n    level random_prod_factor loop{\n        base_prod_factor\n            random_prod_factor level []\n            base_prod_factor\n            random_range level >=\n        =\n    }\n\n    /* Initial production level. Can be changed with cheats. */\n    result:value 16 =\n}\n\ncb:production_change_monthly def{\n    result:value 0 =\n}\n\ncb:production_change_random def{\n    result:value 0 =\n}\n",
            type: "primary",
        },
        {
            id: 2,
            available: true,
            name: "Fishing Grounds",
            colour: 160,
            fundCostMultiplier: 88,
            probabilityMapGen: 14,
            probabilityInGame: 14,
            prospectChance: 75,
            layout: [
                [
                    [-1, -1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, 0, -1, -1, -1],
                    [-1, -1, -1, 3, 2, -1, -1],
                    [-1, -1, -1, 1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1, -1],
                ],
                [
                    [-1, -1, -1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, 0, -1, -1, -1, -1],
                    [-1, -1, -1, 1, -1, -1, -1, -1],
                    [-1, -1, -1, 3, 2, 2, -1, -1],
                    [-1, -1, -1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1, -1, -1],
                ],
                [
                    [-1, -1, -1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, 1, -1, -1],
                    [-1, -1, 2, -1, -1, 3, -1, -1],
                    [-1, -1, -1, -1, -1, 1, -1, -1],
                    [-1, -1, -1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1, -1, -1],
                ],
                [
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, 1, -1, -1],
                    [-1, -1, -1, 3, -1, -1],
                    [-1, -1, -1, 2, -1, -1],
                    [-1, -1, 2, 0, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                ],
            ],
            cargoAcceptance: [],
            cargoProduction: ["FISH"],
            placement: "on-water",
            tiles: [
                {
                    sprites: [
                        {
                            sprite: {
                                id: 4061,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAAA3klEQVR4nO3YIQ7CMBQG4BeyA3AEjsABkDtIjzI5UcEBEBUTk0gOsAMgJionJiqQFYiXPAQjWUICZLSUZf+nqrrXPy/dS4kAACCOfp8JH7eSuo5XVrE2tp7vB7+cY30iiGgBlLomd82IaBTGRIZIOqK/7qQn1rPkSov1LKqoJhdvPYshkmZuAYSiikqKIYBvO2mWQnUSAADAj5gZTW7BR+HHsNKH3jiS4AGUuqZuWGNyw+QGb7nTWtjtknVKtPeAT+RKD48mTcoy0rGepT1shFta5n0xviwX+ccAAEjtBlGae1sOFtqAAAAAAElFTkSuQmCC",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 4061,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAAAdElEQVR4nO3WoQ2AMBRF0RdmY5COgkQwRAWCkSoRjFDZ5GOoJgH6CeEeVfebp64EAPATJVsle/sfVed5LOVikrR5Hj3hOsA4LVqPdx3jV1Iu1ofJUi4Whvl/AwAAcF1sUJGuIXRHq4r8zABUJBUJAAAA4EE7dPI1oVf0+eEAAAAASUVORK5CYII=",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 4061,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAAArklEQVR4nO3WrRECMRCG4R3mCqAESqAA5BWSUpCICApAIpBICqAAxIkUgIhARiB2ZhGcOH9J5n7ep4DN5MvkmxUBAACYgfe5Mb3vLefMTc5hJYWk/4t/XlnnziaAk79J/DYiMghjTUJSa523kNTc8bq+ABYlPram8TCJV6zeAa3zfZk9ax89DSGpdZedaSfr/MvDIltEm5dYTmoa1QGllpOaRgXAcsJyAgAAgNn6Aa/CXpgNuNfNAAAAAElFTkSuQmCC",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 4061,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 63,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAA/CAYAAABQHc7KAAABAElEQVR4nO3WIY7CQBTG8S8bxEqOsEfgACs5SI/AEZAVFQhkBQKBRHIA5IoViEpERQWyAjHJW0E3IatmJ51mWv4/VTN97cu8L08CAACpqTczc8eFxa7zFrtAiKp1jx+/fUevlWQD8uKg5j6T9NSMV1K1zpZZYVXrLFvv021Ac5qbaz7T/UAPwSOwzIpuTs//OjdUuPkKbsB2u9KtnkuSfK/pkOEW3fOM+gZVtt7bV/5urpT3mUkZTbghQTvJrlLvtybJReiv37yoI7x7FA3Ii4Ou3TPhSXiOVKpr8yAZELo2T0bVOruUH+Yues0ZDlmbAQAAAAAAAAAAAAAAAAA9+AHFAJklT88g4QAAAABJRU5ErkJggg==",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
            ],
            callbacks:
                "const type{\n    level_requirements dict\n    random_prod_factor dict\n    supply_requirement integer\n\n    accept_cargo_types cargodict\n    prod_cargo_types cargodict\n}\n\nlocal type{\n    total_delivered integer\n    current_production_level integer\n    random_range integer\n\n    i iterator\n    level iterator\n    cargo iterator\n}\n\nindustry:storage type{\n    supplied_cycles_remaining_cargo cargodict\n\n    base_prod_factor integer\n\n    num_supplies_delivered 27 list\n}\n\nlevel_requirements 0 [] 100 =\nlevel_requirements 16 [] 150 =\nlevel_requirements 16 5 * [] 300 =\n\nrandom_prod_factor 0 [] 8 =\nrandom_prod_factor 1 [] 12 =\nrandom_prod_factor 5 [] 16 =\nrandom_prod_factor 7 [] 20 =\nrandom_prod_factor 10 [] 24 =\nrandom_prod_factor 11 [] 28 =\nrandom_prod_factor 12 [] 32 =\nrandom_prod_factor 13 [] 36 =\n\nsupply_requirement 8 =\n\nprod_cargo_types ctt:FISH [] 8 =\n\n\n/*\n The following is a replication of what FIRS is doing for a primary industry.\n See: https://github.com/andythenorth/firs/blob/4.4.0/src/templates/produce_primary.pynml\n*/\n\n/* Get the total amount of supplies delivered in last 27 production cycles. */\nfunc:produce_total_supplies_delivered def{\n    i 0 26 [..] loop{\n        total_delivered total_delivered num_supplies_delivered i [] + =\n    }\n}\n\n/* Calculate current production level, based on delivered supplies. */\nfunc:produce_calculate_current_production_level def{\n    func:produce_total_supplies_delivered ()\n\n    level level_requirements loop{\n        current_production_level\n            level_requirements level []\n            current_production_level\n            total_delivered supply_requirement / level >=\n        =\n    }\n}\n\n/* Set the number of supplied cycles remaining per cargo - used to display 'supplied' (or not) in the industry window. */\nfunc:update_supplied_cycles_remaining_per_cargo def{\n    cargo accept_cargo_types loop{\n        supplied_cycles_remaining_cargo cargo [] supplied_cycles_remaining_cargo cargo [] 1 - 0 max =\n    }\n}\n\n/* Shift the array of supplies_delivered values one place to the left, and zero the last entry. */\nfunc:produce_256_ticks_shift_supplies_delivered def{\n    i 0 25 [..] loop{\n        num_supplies_delivered i [] num_supplies_delivered i 1 + [] =\n    }\n    num_supplies_delivered 26 [] 0 =\n}\n\n/* On arrival of supplies, push the amount to perm storage, then clear from stockpile. */\ncb:production_cargo_arrival def{\n    cargo accept_cargo_types loop{\n        num_supplies_delivered 26 [] num_supplies_delivered 26 [] industry:cargo_incoming_waiting cargo [] + =\n\n        supplied_cycles_remaining_cargo cargo []\n            28\n            supplied_cycles_remaining_cargo cargo []\n        industry:cargo_incoming_waiting cargo [] 0 >\n        =\n    }\n\n    /*\n     Update the production level immediately, so that production level text immediately updates in industry window.\n     Production won't actually increase until next 256 tick production cycle.\n    */\n    func:produce_calculate_current_production_level ()\n\n    cargo accept_cargo_types loop{\n        result:inputs cargo [] industry:cargo_incoming_waiting cargo [] =\n    }\n}\n\n/* On 256 ticks, if supplied, produce extra output cargo at appropriate multiplier. */\ncb:production_every_256_ticks def{\n    func:produce_calculate_current_production_level ()\n    func:update_supplied_cycles_remaining_per_cargo ()\n    func:produce_256_ticks_shift_supplies_delivered ()\n\n    cargo prod_cargo_types loop{\n        result:outputs cargo [] prod_cargo_types cargo [] industry:production_level base_prod_factor current_production_level * * * 16 16 100 * * / =\n    }\n}\n\ncb:production_initial def{\n    /* Highest value in random_prod_factor is 13. */\n    random_range industry:random_bits 14 % =\n\n    level random_prod_factor loop{\n        base_prod_factor\n            random_prod_factor level []\n            base_prod_factor\n            random_range level >=\n        =\n    }\n\n    /* Initial production level. Can be changed with cheats. */\n    result:value 16 =\n}\n\ncb:production_change_monthly def{\n    result:value 0 =\n}\n\ncb:production_change_random def{\n    result:value 0 =\n}\n",
            type: "primary",
        },
        {
            id: 3,
            available: true,
            name: "Forest",
            colour: 83,
            fundCostMultiplier: 95,
            probabilityMapGen: 10,
            probabilityInGame: 3,
            prospectChance: 75,
            layout: [
                [
                    [-1, -1, -1, -1],
                    [-1, -1, -1, 1],
                    [-1, -1, -1, 0],
                ],
                [
                    [-1, -1, -1],
                    [-1, -1, -1],
                    [-1, -1, -1],
                    [-1, -1, -1],
                    [0, 1, -1],
                ],
                [
                    [-1, -1, -1, -1],
                    [-1, -1, -1, 1],
                    [-1, -1, -1, 0],
                    [-1, -1, -1, -1],
                ],
                [
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, 0, 1, -1],
                    [-1, -1, -1, -1, -1, -1],
                ],
            ],
            cargoAcceptance: ["FMSP"],
            cargoProduction: ["WOOD"],
            placement: "anywhere",
            tiles: [
                {
                    sprites: [
                        {
                            sprite: {
                                id: 2022,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 78,
                                left: -31,
                                top: -45,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAABOCAYAAACQYxCuAAAD9UlEQVR4nO2ZIXDbSBSGP90ECBgsEFggIGBgYCAQIGBgIGBQEBBQEBBQEHCgoOBAQEBBwIHCgICAgoKCgIKAAIMDAQYGAQYGCwQEBBYYCHhmDzhy4rZO5DSRA94345E9Hmnf/79fT7IMgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgvDqRBp32PNdpHFNrvtXk4utI9K4fttnOC3Z74eNrr11A6qOV+JHebvR9bdmQKRZxv3oIGG/H/Lvt8xruo6tGBBpXBX1o4OEIsu2Ih62YEAl/vsw27p4gJ2mFno43d+KeGjIgEjjTI5XTftOEr8J8dDAKfCWxcMrJqCK/FsWD6+UgKrrzxH/IXqNitbzIgYopZxSysFq5DcV/3c3dNNJztfD/rNvh/v9zfZ9sQS0u8mK+P1+yKaxD1otTm4m3sHF0DtJOo38JtjYgDiOVwrb7Q1cu5tQTK+wpWK3N3D7/ZAiKx4Vf36o3NU/euVYJzeTxmfDxgvGcezG47G32xs4AKUCAIJgsb26vGCvWz4qPtW49wO1/Bxqn8Fp/iLi4zh2SimGw2Gt4z3LgJ2W/kV4tdV6sbWjz2tjH0WRa5eGXtdnlJXsJYoi6BDvmD82YlMDal8Gq47PZzlKBWuF53lBNvmCUv7aYxljvLbGXUw17dKQZSUhE9A+p58S9xJG1KXWIv1ea3mu6vYH4HHh49uAwUBxevp0F6o0APgK9hLFtytLepBsnIgoipZ1pmnK9Y9zTP64xlpDsOqmUj759JwgCNB68crzgtHwmFl+RqfbZXx7Z0g2rVW0Mca7zvGmfsRtGXF5YwEIigkAPw/KdaTvDu5mkiJNU4qiwOR46buDR58y1TLA2vL+/axNNvnCaHjMdPyZWX6GyUJ02F4RrcPNHmwYYzxjjFdaGJWKUPtkecnNyNbaP9L3p9x0uqjjaK/rknBhxPHR4LcmbJSAZbHZ/WOrhx1/KLpuAn7mOsez1nrvz0qyrOTkunzyFHh/+NGZvHz0+3Xf1U6AUv5KEmC1y1UC4m6BX4y5+Ppn9/vWWq+O+DiOXVEUwCL+1lp6HR9fRQQ65CYLyM2Y/yYlv7u5ql1kEuJ0HDAeFSgdE4XZcuABxN2CyTCjo3aY2RZ2brl+YgC9BEopF0URAEHYJQkLpmUHgNyMAeiXOWY2ZWZbfM/sSk21LoOpxoVqB4xF74AOMwB2kwFwhbkqYD4nRJEVFmhGPMBeOIP5LZdZC4AfGSi1SGol/Na2sPM5YH/Zv3aR6d0kDYOFZxM7xy99Ij1fdhxoTPi6ui6zFh87etnxp+rauNiHC25T+NbrSjUubfhfnDq81boEQRAEQRAEQRDeFP8D+TAHRYtgkjIAAAAASUVORK5CYII=",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 2022,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 78,
                                left: -31,
                                top: -45,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAABOCAYAAACQYxCuAAAC0klEQVR4nO3ZIXDiQBTG8T8zFSsjKiIiViAQFQgEIhJRgahEVCBOnDhx4sTJyhOVJypOVFZWVFQgKxCIioqIioiIiIjIdXsiLKRAO0BCw9y9n+oU6O57+76FoSCEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCHEzsahssMOtul9bHJyqD88DpUFCNuK7LTDaRYBuX2IaB1qzX3U3gBXeKffnRcN5vmZJwMmr3u16mprQPnEA1+RpBFJYogNJK8G5YHygHTza7PM0MR0VG7AphOfznJiA1lmMDmMzr21GBxLRPZebFPh5RMHGFz21x5z3nvdJP3cBuw8AeXCo+kzp9ly1MsnvhoDZ5+IHNLWDRiHynb6XZ4epny78EnSiCwzJApmSVF4+cRdDJxdI1JjjR/aqgHDDnYUeiRphMkhSQ2BrzA5zDCEw3nh2fqJLwrPog8j0tQ7xVYNKBcN8OMeeiplcNlfi4Gza0RcDD77Dth6Mc/zbE/lTFJaww62iIHhfprTCxSxKYpeRmT52KaIrDblswt3tr4D8jxvTeY/r8Yg6Cv68xPdNiIuBk0V7uy9uJsIKEbaCXzF6MbQU/kiImFbHc2Jr6q8Ca21bZuY8KwY9Yt+caN3T+KNMTiWwp1aNjPwsTPj0VM54ZkiCNx7fRGF3/dpIx9zt1F5U3/Gng18xfmvtFWOhfLgou8tnueeU3W9ulXa0MDHrub/+jZlZorflScCWETjmBpRaSMf5X90U9zyqxNx91hcjsfSiMobGPjYV6VxjVjNf7kRyuPNByGg8SbUtribBticf/fWODMed1+LBiWJQXW7jU5D7YtqrS3wZiKAtWh87xmeXkzj01D7V2JxHBdFaG15ieHFzCci4vox5+eXIv/XtzmvShP4ZjENTTh4x1003su/1tqO2ylXE/NvROA97rK8GS1PvKmiG6W1tlcDdZT/IxDiP/QXhUQYC8N7zoQAAAAASUVORK5CYII=",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
            ],
            callbacks:
                "const type{\n    level_requirements dict\n    random_prod_factor dict\n    supply_requirement integer\n\n    accept_cargo_types cargodict\n    prod_cargo_types cargodict\n}\n\nlocal type{\n    total_delivered integer\n    current_production_level integer\n    random_range integer\n\n    i iterator\n    level iterator\n    cargo iterator\n}\n\nindustry:storage type{\n    supplied_cycles_remaining_cargo cargodict\n\n    base_prod_factor integer\n\n    num_supplies_delivered 27 list\n}\n\nlevel_requirements 0 [] 100 =\nlevel_requirements 16 [] 150 =\nlevel_requirements 16 5 * [] 300 =\n\nrandom_prod_factor 0 [] 8 =\nrandom_prod_factor 1 [] 12 =\nrandom_prod_factor 5 [] 16 =\nrandom_prod_factor 7 [] 20 =\nrandom_prod_factor 10 [] 24 =\nrandom_prod_factor 11 [] 28 =\nrandom_prod_factor 12 [] 32 =\nrandom_prod_factor 13 [] 36 =\n\nsupply_requirement 8 =\n\naccept_cargo_types ctt:FMSP [] 1 =\nprod_cargo_types ctt:WOOD [] 24 =\n\n\n/*\n The following is a replication of what FIRS is doing for a primary industry.\n See: https://github.com/andythenorth/firs/blob/4.4.0/src/templates/produce_primary.pynml\n*/\n\n/* Get the total amount of supplies delivered in last 27 production cycles. */\nfunc:produce_total_supplies_delivered def{\n    i 0 26 [..] loop{\n        total_delivered total_delivered num_supplies_delivered i [] + =\n    }\n}\n\n/* Calculate current production level, based on delivered supplies. */\nfunc:produce_calculate_current_production_level def{\n    func:produce_total_supplies_delivered ()\n\n    level level_requirements loop{\n        current_production_level\n            level_requirements level []\n            current_production_level\n            total_delivered supply_requirement / level >=\n        =\n    }\n}\n\n/* Set the number of supplied cycles remaining per cargo - used to display 'supplied' (or not) in the industry window. */\nfunc:update_supplied_cycles_remaining_per_cargo def{\n    cargo accept_cargo_types loop{\n        supplied_cycles_remaining_cargo cargo [] supplied_cycles_remaining_cargo cargo [] 1 - 0 max =\n    }\n}\n\n/* Shift the array of supplies_delivered values one place to the left, and zero the last entry. */\nfunc:produce_256_ticks_shift_supplies_delivered def{\n    i 0 25 [..] loop{\n        num_supplies_delivered i [] num_supplies_delivered i 1 + [] =\n    }\n    num_supplies_delivered 26 [] 0 =\n}\n\n/* On arrival of supplies, push the amount to perm storage, then clear from stockpile. */\ncb:production_cargo_arrival def{\n    cargo accept_cargo_types loop{\n        num_supplies_delivered 26 [] num_supplies_delivered 26 [] industry:cargo_incoming_waiting cargo [] + =\n\n        supplied_cycles_remaining_cargo cargo []\n            28\n            supplied_cycles_remaining_cargo cargo []\n        industry:cargo_incoming_waiting cargo [] 0 >\n        =\n    }\n\n    /*\n     Update the production level immediately, so that production level text immediately updates in industry window.\n     Production won't actually increase until next 256 tick production cycle.\n    */\n    func:produce_calculate_current_production_level ()\n\n    cargo accept_cargo_types loop{\n        result:inputs cargo [] industry:cargo_incoming_waiting cargo [] =\n    }\n}\n\n/* On 256 ticks, if supplied, produce extra output cargo at appropriate multiplier. */\ncb:production_every_256_ticks def{\n    func:produce_calculate_current_production_level ()\n    func:update_supplied_cycles_remaining_per_cargo ()\n    func:produce_256_ticks_shift_supplies_delivered ()\n\n    cargo prod_cargo_types loop{\n        result:outputs cargo [] prod_cargo_types cargo [] industry:production_level base_prod_factor current_production_level * * * 16 16 100 * * / =\n    }\n}\n\ncb:production_initial def{\n    /* Highest value in random_prod_factor is 13. */\n    random_range industry:random_bits 14 % =\n\n    level random_prod_factor loop{\n        base_prod_factor\n            random_prod_factor level []\n            base_prod_factor\n            random_range level >=\n        =\n    }\n\n    /* Initial production level. Can be changed with cheats. */\n    result:value 16 =\n}\n\ncb:production_change_monthly def{\n    result:value 0 =\n}\n\ncb:production_change_random def{\n    result:value 0 =\n}\n",
            type: "primary",
        },
        {
            id: 4,
            available: true,
            name: "General Store",
            colour: 168,
            fundCostMultiplier: 15,
            probabilityMapGen: 24,
            probabilityInGame: 12,
            prospectChance: 75,
            layout: [[[0]]],
            cargoAcceptance: ["FOOD"],
            cargoProduction: [],
            placement: "in-town",
            tiles: [
                {
                    sprites: [
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAACO0lEQVR4nN1ZvdXDIAyUN2CEjJAig2QIlylTpmSEDOgRsgFfJT9F4SR+DH7vuya2Apg7xGHDQifh+XymEMJ+/3q9ljP6Mf2hmngIgT6fz379eDym9mnawyRxSRphVkYMf4gecQkUl+KMFmJY4xZxom/yXjYQjRPi8EbRHEe/XIaI9jhfM2Sc6FgxDmsoN+KSrETJiHO50YbZ3YDl6hJ6ZHOZwJDERxtmc8Va4kT+yOeyJdeOrsNoEaK6AjK3kpFCYljErXoINUIUF/TW8Zx5IaNjoDneYpitRukW8pYzCaucN+KtholE5LgnBPyzlHirw3PdVsNERokEQUL8BJk4mne60yhNLSF6DBP5hbdyICH2G8vcch3y5rzV2RbDLCFe8xwWYvGWM0RUxnLEOd5rmN4ct4AMU2LPgPf7nWThmrnJ0AQ0tDAIiGAIgbZtywpSklUSewboP2KMKaccIiOvvbKXywW2IWOlIy7Jy7qWINADNLQQpcQsYSzDLCVeO9KM4lVAI8aYdMwyNyKibdu+7q05j7Knhrg2TInm9wCNGGPyOpUjg3wDGaUlbs57UJYe9iaosa5rul6vX52tMUxrxDlurRwarcQZ3V+DpYZZQrwHrZ/E3fsB9/s93W43mIoMPU894pZhSvTuDh22I7Sua9LLXA7eymEZpsRR22LT9gQRLEMbSZwxbFdYvllKWAY3kzhj+LkAv0fkSOYwizjjtJMhInvv4N+cDGl4Gy2zD0lPOZEl+n2zPOt0+A8ZzpDJ1o3gxgAAAABJRU5ErkJggg==",
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 49,
                                left: -31,
                                top: -18,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
            ],
            callbacks:
                "const type{\n    accept_cargo_types cargodict\n}\n\nlocal type{\n    cargo iterator\n}\n\naccept_cargo_types ctt:FOOD [] 1 =\n\n\n/*\n The following is a replication of what FIRS is doing for a tertiary industry.\n See: https://github.com/andythenorth/firs/blob/4.4.0/src/templates/produce_tertiary.pynml\n*/\n\n/* On arrival of supplies, clear the stockpile. */\ncb:production_cargo_arrival def{\n    cargo accept_cargo_types loop{\n        result:inputs cargo [] industry:cargo_incoming_waiting cargo [] =\n    }\n}\n\n/* On 256 ticks, do nothing. */\ncb:production_every_256_ticks def{\n}\n\ncb:production_initial def{\n    /* Initial production level. Can be changed with cheats. */\n    result:value 16 =\n}\n\ncb:production_change_monthly def{\n    result:value 0 =\n}\n\ncb:production_change_random def{\n    result:value 0 =\n}\n",
            type: "tertiary",
        },
        {
            id: 5,
            available: true,
            name: "Herding Co-op",
            colour: 207,
            fundCostMultiplier: 88,
            probabilityMapGen: 14,
            probabilityInGame: 14,
            prospectChance: 75,
            layout: [
                [
                    [4, 1, 1],
                    [3, 2, 2],
                    [0, 5, 3],
                ],
                [
                    [2, 1, 3],
                    [3, 2, 0],
                    [4, 1, 5],
                ],
                [
                    [2, 1],
                    [0, 2],
                    [4, 1],
                    [5, 3],
                ],
                [
                    [2, 1, 4, 1],
                    [3, 2, 5, 0],
                ],
            ],
            cargoAcceptance: ["FMSP"],
            cargoProduction: ["FOOD"],
            placement: "anywhere",
            tiles: [
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 52,
                                left: -31,
                                top: -21,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAA0CAYAAAA62j4JAAAFl0lEQVR4nO2Zr3fiShzFP7yDiIgYMSICERGBQCAiKhAViIqKCkRFJeKJ/gmViJUrKipWrECsqKioqEBUICoiEIgIRERERMSICETPyRPphIQfC6VAxcs1JDmBmXu/d+58E6BChQoVKlSoUKFChQoV/oeonXKwfr+fCiEQQnB3d1e7urpKgyBgMpmcdB5F1E81UL/fT0ejUX4+GAzSIAj0afpdIpxsUCFE2u/3EUIA4HkeQRDgui5xHPNdTjj6gIPBIPU8j9fXV2zbxrZtpJTEcQzw7SIcbQlo4o+Pj7iuu/YeKSWQuaFwTzqZTGr9fj89hSgH/+F2u53atr1SWdd1eXx85Pz8HAClFEqplXuA0vmxRTioA9rtdupHTVzXBMqV9TyPXq/HbDYrEdfX9bIoCrHOGYecLxzQAZp83RS8J4qbS3NtJYvHvV6PIAi23ndMJxzEAUXywnZQwYzhs+LudrWSxYoXd4J19/3NCYfKiC+rWSRvCIkhBHOlmKt4rRM8z2NTRuxyDIfNiH++KsBkMqnpyhchbIe6KRg+J0gpsW0bz/Pwo2bpfJdj13VLmbHuvna7nX6LAACGkJiWBVD6NITMRQiCAO2UZVG2Efc8byex9hHhIBnQaUwhmaJMhZo+Q/2yJE7DfOPUGbHr3L+cAYPBINV7ehzHKKWAbJ8P65cYQhBPvZNlxGcz4UsOGAwG6Wg0yvt7x3FyIQAEY1SsUOYZwnaYf4gDlJxwc7noCP/WR2w67vV6K9fZ0Ql7O0CTdxwnJ6xRFGLZEbLZJPb9/FM7oWn57NNH6GVi2zYAL28GAHVTkMwejiOAfpRdJl58yNlVCCAXoZgR74ni7ra19qlxG3FDSGJvsBO3vQQwrOsU4PamUbL8sghKKbrdLtsyorg0tmXE8vEycdlsAuAPb44ngOn8mwK8J9nE1wmhyW/KiE1CFD+1E9aJsI54M5kQhAHz5tXOAuwdgt2WyWiaHd8Pww8hMoKz2axEXrtiNputCAGLsAzrl5iWlTvCEJI5lIJy+JwAxipx/wnZdrPxo2hnHnsLIKXEEEZeqaIQd7ddgiDIK7+cFctC2LadicV4bR+hRVgmnkQRomEhY4lSiouLM4bDGJLdeezdCT5NslF0x9dtmdRNQd0UDO6nDJ8THMfJX3poFM/1nj+4n/LmW7z5Fn7UJAlneUdpCJF3lGbDoXHWodOYY/hPAAi7wcXFGUIIfD/Edduf4rG3ADpsisTcxntJiPthuCJEHMdIKfOM+PE7zMmZDQfZcpGtxRskLYSwnZy4lBJhivweTfzhNWKYbSxcd+RObfHeAiRL6+xpkhF13fZWIXRG/PgdfnSH8qPSAufdZ65U/vuisXi20MR1xQFUEJaIF3HeMbeK8GkB9I/qrUpPVDabPE0Sfj75efAZIqv6shCu6xbIL4hL9ZYTW4d1VldhuRBZc6UAeB0nW3eCT4fg6zipXbR+pWPVZ5MQY9+HcJFE3VbEaGpR/7Dtw1OSk3fefVSiEA07+76Upe8WCRatrpdGkThA13ggYs6fHcjDnkvgZfpec60hHeMXc5Ul/DohNLJ8yCa48t5ACISZOUaIzN6bsM7quuJd44Gu8cCfcVzbpfIae2+DepDzzjA11JxNjtAQQkCYrWW9bcJiV7i4OOPl5Q3fD0vdYBJFuchF7FvxZXz5fYAW4rrzmCqlVoTYhiJx226sVFivZy2oJt4yfmJh8Gccf+mR/mCvxfVEloXYhiLxrNoKyCqrjLKg+no2XlL7VMezAUf7x+W8Y2ZLY96n24pQSuGFzfxpT4egaVkrxCPmvI6T2nVHpvqZQQiRXz/kPI/+P5wmMZcdvLCZtbYqLr0dgjLxY8+piKMPdt4xUwuDiDnaEUDeI3wXcY2TD1oU5BAhVqFChQoVvoD/AOuIF1v5vMpOAAAAAElFTkSuQmCC",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 52,
                                left: -31,
                                top: -21,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 52,
                                left: -31,
                                top: -21,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAA0CAYAAAA62j4JAAAE9klEQVR4nO2XLXTbSBSFv+4REBgwYICAgECAgIGBgYGBQECBwYKCgIDCgoKCggWFhQUGBQULCgICCgICDAICAgwMAgoEDAQEBAYICAzwOVogjyI7TqM4drJAl8j6ezPvvvvelaFDhw4dOnTo0KFDhw4dOnQ4OI7Hp+XJ+08lQL/fL6MoKl9zP3+95GLH49NSKYVSCkvCa+PFCGgmD9RH4FXJcF5ikePxaRmG4R+f+fj5awnw/duXNy+xJ4uDL9asfBzHAIRhiNa6fsaq4ebqF6Pjd8RxzNXl2YsQcdBFbPLbkrVHrTX2mfj2GuX36nOlFOc/Jwfd48GC2+Q3sUlGM/n6+oqELLnFC/oopQ7WGjsHtQme/5y86ff7pZSS6+vrtXiBR3k0OF2r9uYssIQopbi5+oXye2v3m+2itd57a+wUrNnXtnrbCBj6lNkSjganACyLFC/o34u3TSmb80JrzWJ+hiV0X63x5CCbdgbV8JJS4gX9tY2dDERZFA6/8xyg3nyz75vYvGbVEscxi/kZngPZsro3fPtpLyQ86TvA2tm2ill8/Py1tJZmk+9JiefAYn7GbDpZe7/5O0tu6/NtyYeBS09KAGbTyV6+H1ozuKud2c0HnqCpBqiqaNWQJbc4wq/v2diz6QTPASUkShkAtHbrOEn2vEHe6uV92FlyNQHuiNBFXss5CKN6NjTjbSbv9yLMIgEgTjOUMvy8MYclYN92dnn2hbehB0CamTUihm8/1e9uJq/cAICFGJPnOQPnBoBvV/HhFbBvO8uSgrzICZkCMEsLelKutYfteZu4Ngl+LyJbRmitWcb/0o+GfP0xfRYBrf4L2AFGw860vq8KS9Do+F19zc4LC601SVzZWbGolreK+J3frTdaEVxX3AWzSAiiak5I36vb4Tloxd6h7WxTEb70idOMfjSsKy71d/xexGJeSb8oHJQyJDhc3xQ7q6CVDR7azrxAIIWkKJxqQJqEcFXhIPBXhLqYRYLrLnHdJYVakkuxNfn3I7cch7SyyNYKmKXFQe2sP/yMm/4AKgXYnt+seC4FeW4eTHx05KJViNIxF7Ocy/jPObYiYBzKUogl2vub4vYM2L+dxYlBCVmREQ3r+9pUR2McjOdycam3Jh4O+yhdzZs0NSQG0oXh6pHvhCcp4GhwSp5rnGRKtmSvdhanGUJUAewMaFtx33NJM7OWuCt5tPrQ0gWK4v5jQ18QM66Gl5gihCBb2dlsOqmfu7OziiwrbbWsFBLH1bArTIpOCpSQaDfBORIkucN1i4rP5jmJAa0NJqeqetYmsxYERCNRoqtEmpilBf2hBKDInm9noSOIAyhY4kjxuNR1vFZx4FG570SAZyBTS7Icjjbu2T53i0q6VhFD/76d2YprXSng98UHALLGcLu+tDIvtiYez25RjcTXKr4jHiXgfF68ORmI0vMFWX6BAAxUX27TfyoiVsNL+tXRKkK7CaEfrFU8i13Uys4AMpcHKw4wDilPRpI0i9HakLowT5+fuEWrGXA+vxtA0UiUgSeYpXk93OzwEhuKUG5Q97ytOFQ+n+Agpbvq8fWKN2Hyasj6novJYY5pNdzaYqdAJwNRQlW9ZFHUROgiB9jZzh6ClLIcuPleKr6JZwV8iIin2tlrYm+bORmIcpOI/3PiFnvd1IfIK/OiIHOrcymfJvUOHTp06NChQ4eXxH9CLpsToj+KfQAAAABJRU5ErkJggg==",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3943,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 52,
                                left: -31,
                                top: -21,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAA0CAYAAAA62j4JAAAFHklEQVR4nO1XLXfiShh+ck5ERETECEQEAhGxogKBQCAiEIgKBKICsWJFRcWKCkRFxP0BKysqKioiKioQFVcgEBUVFSMiEBGIESMQETlnrsi+0ySlBCh0P24ek0xIJvN8vO8EoEaNGjVq1KhRo0aNGjVq1KhRo8bnIQgClaap+tXr+FSkaao45yoIAgUAnHPFOf9/iBAEQYFsEARqPp9rIf7KRLznOI3LovxViVjnOBEvg0Sh+//YRFQ5XoU/OhG7OF4FEu237xEfdbwKv3UiDul4FX6bHnFsx6vwSxOxi+MdF6rj4mgL+7QesY/jHRfqyrfUlW8dVQTgyInYp8bHX0x1PXa0AJ8hAnDAHnGIGifS12NHjbvZ+bYi9Ho9dXJyogBgNL5Q/uBsJwK7JsIoPzwcDuF5nkFjAJhMJsa6h99Dx4WaxzCufEtNeYK+Z2GRADezpHKeXq+npJTwTnpgjEEIASEEHh9ud1oD51yFYQjf99HpdAwaX15ewjRNPZeZpqmKoghhGGIymRjD4VDRzUR83LUUsB0BAJjHr8LOYxjzOME2CRiNL9Ry8QwAYIwVjv7gTG0jAr2HTASgOOeKxsSPxkaapooUWef4uGspvkgAAF7T2lqEXXD+PXuvEALLxTOklOj6wzf3cc43JqHjQvU9CwAw5UnBCDKVEk5jg+oj7zghT/6r7+D6UWIewyCV8y/YB/7gTHmeh9ljqAkLIfTvjDFwzgEAnudtLIfxF1N12zbiONHXyiIAWY/LJ96UUuoaAaCoRij2X30HsyjBLMomzqsMJGofEUbjCyWEKBCkMRHPXxNC6PsYY2vL4eYlNZqNRE15otdM66U1BkGgoijSCQCgjOl0qprNpq4ZSoTneUbHhfKaFvgi0c6/kgdc18LXG7m1AOffA0UxbzRPMkfjF/17ufERSJA81iVhXfOdTFfIO15OvNnv9zXxMAxB5PNds9s0dXNZJEC3ZeH6UaK/JXF/cKaIWHZ0NUHmfoGIX9D1h5o4Y6xAmnNeSAWAtWVQbr6DbxPtOJAloFzqplZ/Q9e8eeTwPE8r27ToZcnGzk5Rnz2l6LbFGyc9z6OTTIw17gNAuopBV2ZPKUzbefedVONmGKro7goYDlHe1fJ4N76b9tGgb+PqcfNuMBpfqPvpEgBg2g7SlUS3bWrSVNN54nkUEyMKxC2HQTwFb96/z3dMZf1u6hFVz1qNkcq7tU4ExhiWi2eYtvuGOADcT5cF4mn0A2brHAAgngKj3NU37WrrYFbdsE2PyH9ZFSa3HVgOQyJFdgQwe5JgTBRq2rRdpKtYN0bGmCZOcwBAGv3Qc1+cWricp5U1XoWdt7ByzDYlwm59UySA02xBLqKMyEritN9409iWi2fMeaPgeHZ0kEipBTBb57oEdnW8jL0/ZLb51rZb3xQRpyMJQiIQylHPE2eeB8G5FiBlI1yOXeSN2Bcf/qx9r0eEYYh/bmKUBSgnAcCbGrfbkwLxcgJSNsLAucXd0+rD66/sAVUo9wj6sgSyJphIufY56gl0DrzWuN1oIJESq2W2iyRSIpECJoB+K8XSusXd7OPkgQMIQKAEtNtt/W8y+PGCRGb1XRYiczVrjuQwoUw8XUmcug9YNnAw4oSDCUCgRIzatjp1gft4AADa7XWJIMeRu+fYxAkHF4BA9TlqP6ilBcyjaiEIqzg6OnHCUSfPY9S2C0LkG5/lOJCLCKa4+1njwL9HJk74NAEI7wkxcG4/lXiNn/gPEska5eLp1MgAAAAASUVORK5CYII=",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3943,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 52,
                                left: -31,
                                top: -21,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAA0CAYAAAA62j4JAAAFEklEQVR4nO1YLZPiShQ92WrRIgLRAhERgYhARCAQEQjEExGICMQKJD8AgUCMiBgxYuWIFSOeWBGxYgUCgUAgRiAQEQhEBAIRgYjoqvsEr7MDTAhfM/tmXk4VVXRBf9x7Tt97+wIFChQoUKBAgQIFChQoUKBAgQIF3g++75OUkv70Od4VUkoKw5B83ycACMOQwjD8fzjB9/0dY33fp+l0mjriUyoii3E13nfKp1LEa4wrw/ehnKL+/2EVkcc4AHSqjO6a/FXDPrQiTmG889WglsGoWQY5ADXE645QTnrrGKFdu4CUkhaLBYIgwGAw0JQD1Hj//y1XkJ1ssFxJODUdk+cNlisGABivEw3YOiker7CREskKYIKnv6n1Lcu6+uwA8OWayb7v7xjv+z4FQQDLsrTXjAeA5TIGgNR4s8xQ4hIAoNQQxwlsi8EQDJ1OCWZZoiF4qhbLsrRbKeJsLx5j3PM8VCoVMMYy13WtEgm2NXw0SsAER8MGRqME0gB638Z4GrRQMxIYBk+dNAsl1pEEExyPk1mqgGsVcZYCFOOKYcV4EARg8S/8/N7BYrFAVqQHAFHT8TSXWhgzMMFhliWq3SGkAfCEw/Ma2kZsFTF53mAxl5jMt4pggiPhCebzVRoT4ji+qSIOkBfVOw4n1wK1azq5FqjVdXby+7EDdaqMWq6gTpVRQ/A0M7RcQQDQrunUEJw6VUZBMKaG4OQAO+tdmzWOysb3ffI8L5WXMnowGGjdRpmi1QqWbUAYRjrnV5Tgr6qXBsAwDCkrIJ6CTpVRbJZQWsZYrhgaNnA3Sg7WUvuo86pxv98/eiUPfjglqrsWSNd1lHQdZs0EAKyjCADwHMUYTzaach6wvZ9qnBcjLsV9r04AIEsuXpJ2Vow4JY/btp3K/b5XT+V/36vTfa9O1aZ5INGXa+wXRddCXUHXAnWqjJy2vVM35NUR2rl5XG2aJAyhrKBprbGO1oirNfx8nGitrkN1fRvE+g/TdP6tFZF1Bacbhp+Pk4N9sxShSSlJHeDlHT+2+X2vTuF0BmEILEomKvESDz+itIhZP0cQjGEtJYTgeJokOwd6ucclMUJdQc4lrLoN4PAK7s/JihEnMX4OnLZNrsHT8TqKEM4iGOUyHserqxVRsZrksDHWUsJx6wiHz0g4h92oAgD+nq0wHy0z5+8r/ovKo57n3aRDw6IF1lGUMiIMA0JwxJsNXOt3ChsMBpplWVoQBPB9n9Q4r45YhCMNpW3p/GOUQFTL4FxiumHoP0y1SsXImrpTxyh7teFwSKZp3qyyqjZN+mqXAQCz8RybzQaOW0+/R9zGbDY7WPscRdz36rR8XkIvs4MruI+TY9yt3uOqEGp1Heo4nHptg2zbJtcCdRvl3LVumTXO6UdkTrrmPd5rG9TqOtRrG9RxOKlcfc7h1d6nVJbAaf2Ik3BqHr0Vspok5yjiIsbzMBwO37RDo565LYNtP/++A/ZxTBE3YTwPt+7ZKcMV83fN7fe8OPGS1Vswzk7944usQGEYkhp7nrczPgV1AySjBMJgMMu/j+DUdHyL+JGZQL/fx2KxAIA0a1z74LoIl8aI708BKfbvmtvnrQOkCnCtUub8N7nj1+KSGKHe9UEwTnsBDUff9he+Gjtz3+2OX4tzYsRdk1Pd2L7eVEPktTX/k4zn4do64sMwnodLYsSHZDwPeTHi0zCeh6wY8ekYz0NWjPhThr9f4bAHVbwA+R2ot8Q/cRq6r7NdlJ4AAAAASUVORK5CYII=",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 52,
                                left: -31,
                                top: -21,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAA0CAYAAAA62j4JAAAEJ0lEQVR4nO2ZIXTbSBRFb/YYCBh8ICAgIGAQECAgYFBgIBCwwMCgoKBAoLAgoKCgMMBgYYFBYYBBwIIAAYOABQICAQECAwQMBAYEDNhztEAZxU7TZk9tywW6xJKPrZn35r/Rtww9PT09PT09PT09PT09PT09PcdDROqrd3/WXY75R5eDvcbMG5AXRadjnnQ62itM/UF96o+ozt5QVRV5nqOUOugcf6sKcIcCQJqmAIgIQRAcNBKDQ178/5IkSV1VFVX2NwAiPnmeE8cxVVUB1IeqhKNWQJIk9XQ6rdM0xXVdlHtGaoZEUUQYhtj3wzA8WCUcxYAwDLeEiwhpmjKbzb4TfmgTOjcgDMNaKfWi8MViQRzHrfAuKqFTA6z4IAhYLpetwE3h8/m8PV4sFi+aICJ7M6Gz2+CmeItSiouLC7Is29r08jwnSZL2/TAMAVitVgAkScJ8Pt/L3DszQETqIAgQEUQitM7QWqOUYjabtcI3TbDHVvhkMgEgiiI+f/68l7l3FoEn8YLruugHlyCI2zi8tOktl0tWqxWTyeRR/AhVDhCRvc2rMwNEhNFoBEAQ+MhQ2o3wuQlWeJIkzGYzrHDXddvv7YtOGyERoaoqsix/FO5TVQLQmgBNxrXWBEFAnudNxWj9+Plqr3Pa2YDFe6l9z+H8cv3TTG6Wreu6ZHnWno9GI4qiaIVrrbnOPeK4WWkrPMsag6oq2HXaLTtFIPaoAcq1YfFe6ptP3k9vT1prYDsC8GSOfb1RpzgbhjXCC6IoajpGpXaZ9hY7GZAZ4epGU5aG63805dpweTH+zogP07Ot8+Vy3kbAYjdIgKHnAbTlboVbA4uiYPJmuJdeYKcIaK1P8Kj/yhwix1CWBp978Jw2Gtf3LveVQj88DRVFEVmWolS61Rc839ys4E3hSilk2DwzeBsN66vsYafb4U4GWJFvvxoyI3Cn4c7gCEzHQrk2RFIyPR1yeVuwWblBEOC6LkVRtAKfb3AvCZchrG53E73JLxuwmf/5FHzPYf6tiQVrMDeaN2cOvu9Qrg3n4zPCgeLy9qE1wgq0x5vn8CT8dNAI9wzsuuLP+WUDMiPwKDIrDdOxEL8bczFQP6iIe+Y3mvN349YIrZu+wK68NeBhvcZojTcs0EPF1R5X/Dk7XTj2qDMjRM7Tavtes+I2GgCRo3EEjIa354LvOQBc3j7gGbj/1zZIAUopxsG/ALieT7Uu+Xp993saYBGROnI0QJt/izUicnRz1/jQGFSWBicM22oAOHUD7iu114y/xl4Hsj9TNysCoHJPCR+jAfAxMtzema1qeK2ROhR7bYW11icAmUj9Uv4/JU3+59+aarjwnqrhWBzUdRuNl/J/frk+EZH6Y2T4kpqjPZ7vZGC7WW7m/5iij4aI1F9ip9O/vnp6enp6enp+yH+JG0rsgAKXMQAAAABJRU5ErkJggg==",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
            ],
            callbacks:
                "const type{\n    level_requirements dict\n    random_prod_factor dict\n    supply_requirement integer\n\n    accept_cargo_types cargodict\n    prod_cargo_types cargodict\n}\n\nlocal type{\n    total_delivered integer\n    current_production_level integer\n    random_range integer\n\n    i iterator\n    level iterator\n    cargo iterator\n}\n\nindustry:storage type{\n    supplied_cycles_remaining_cargo cargodict\n\n    base_prod_factor integer\n\n    num_supplies_delivered 27 list\n}\n\nlevel_requirements 0 [] 100 =\nlevel_requirements 16 [] 150 =\nlevel_requirements 16 5 * [] 300 =\n\nrandom_prod_factor 0 [] 8 =\nrandom_prod_factor 1 [] 12 =\nrandom_prod_factor 5 [] 16 =\nrandom_prod_factor 7 [] 20 =\nrandom_prod_factor 10 [] 24 =\nrandom_prod_factor 11 [] 28 =\nrandom_prod_factor 12 [] 32 =\nrandom_prod_factor 13 [] 36 =\n\nsupply_requirement 8 =\n\naccept_cargo_types ctt:FMSP [] 1 =\nprod_cargo_types ctt:FOOD [] 7 =\n\n\n/*\n The following is a replication of what FIRS is doing for a primary industry.\n See: https://github.com/andythenorth/firs/blob/4.4.0/src/templates/produce_primary.pynml\n*/\n\n/* Get the total amount of supplies delivered in last 27 production cycles. */\nfunc:produce_total_supplies_delivered def{\n    i 0 26 [..] loop{\n        total_delivered total_delivered num_supplies_delivered i [] + =\n    }\n}\n\n/* Calculate current production level, based on delivered supplies. */\nfunc:produce_calculate_current_production_level def{\n    func:produce_total_supplies_delivered ()\n\n    level level_requirements loop{\n        current_production_level\n            level_requirements level []\n            current_production_level\n            total_delivered supply_requirement / level >=\n        =\n    }\n}\n\n/* Set the number of supplied cycles remaining per cargo - used to display 'supplied' (or not) in the industry window. */\nfunc:update_supplied_cycles_remaining_per_cargo def{\n    cargo accept_cargo_types loop{\n        supplied_cycles_remaining_cargo cargo [] supplied_cycles_remaining_cargo cargo [] 1 - 0 max =\n    }\n}\n\n/* Shift the array of supplies_delivered values one place to the left, and zero the last entry. */\nfunc:produce_256_ticks_shift_supplies_delivered def{\n    i 0 25 [..] loop{\n        num_supplies_delivered i [] num_supplies_delivered i 1 + [] =\n    }\n    num_supplies_delivered 26 [] 0 =\n}\n\n/* On arrival of supplies, push the amount to perm storage, then clear from stockpile. */\ncb:production_cargo_arrival def{\n    cargo accept_cargo_types loop{\n        num_supplies_delivered 26 [] num_supplies_delivered 26 [] industry:cargo_incoming_waiting cargo [] + =\n\n        supplied_cycles_remaining_cargo cargo []\n            28\n            supplied_cycles_remaining_cargo cargo []\n        industry:cargo_incoming_waiting cargo [] 0 >\n        =\n    }\n\n    /*\n     Update the production level immediately, so that production level text immediately updates in industry window.\n     Production won't actually increase until next 256 tick production cycle.\n    */\n    func:produce_calculate_current_production_level ()\n\n    cargo accept_cargo_types loop{\n        result:inputs cargo [] industry:cargo_incoming_waiting cargo [] =\n    }\n}\n\n/* On 256 ticks, if supplied, produce extra output cargo at appropriate multiplier. */\ncb:production_every_256_ticks def{\n    func:produce_calculate_current_production_level ()\n    func:update_supplied_cycles_remaining_per_cargo ()\n    func:produce_256_ticks_shift_supplies_delivered ()\n\n    cargo prod_cargo_types loop{\n        result:outputs cargo [] prod_cargo_types cargo [] industry:production_level base_prod_factor current_production_level * * * 16 16 100 * * / =\n    }\n}\n\ncb:production_initial def{\n    /* Highest value in random_prod_factor is 13. */\n    random_range industry:random_bits 14 % =\n\n    level random_prod_factor loop{\n        base_prod_factor\n            random_prod_factor level []\n            base_prod_factor\n            random_range level >=\n        =\n    }\n\n    /* Initial production level. Can be changed with cheats. */\n    result:value 16 =\n}\n\ncb:production_change_monthly def{\n    result:value 0 =\n}\n\ncb:production_change_random def{\n    result:value 0 =\n}\n",
            type: "primary",
        },
        {
            id: 6,
            available: true,
            name: "Paper Mill",
            colour: 164,
            fundCostMultiplier: 120,
            probabilityMapGen: 5,
            probabilityInGame: 3,
            prospectChance: 0,
            layout: [
                [
                    [5, 6, 5, 6, 8],
                    [5, 7, 4, 2, 3],
                    [1, 0, 1, 3, 2],
                ],
                [
                    [5, 6, 8, 2],
                    [5, 6, 7, 3],
                    [4, 0, 1, 3],
                ],
                [
                    [5, 6, 1],
                    [5, 6, 0],
                    [7, 8, 2],
                    [4, 2, 3],
                ],
                [
                    [5, 6, 7, 4],
                    [5, 6, 1, 0],
                    [6, 8, 2, 1],
                    [2, 3, 3, -1],
                ],
            ],
            cargoAcceptance: ["KAOL", "WOOD", "SULP"],
            cargoProduction: ["PAPR"],
            placement: "anywhere",
            tiles: [
                {
                    sprites: [
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAAFVklEQVR4nM2ZL3vbSBDGf73HoCBAQECgQGCBwQEBgQCDAMMCgQMHDwjkA+Rj9AMcKDhQUBAQUFBgEGBgICBwQGCBQIGAwAKDAj2PDsizXslS4iS2e0Nk68/uzsw778zOvuMXSZIkre/71HWN7/t8/vz53a9Yx8UnTdO0ld+ivPv70oa42GRpmrZ1XQMgngdQSqG1BqAsS8IwBODh4eEia/vt3BOkadomSdLWswKCmgCN53lAZwittUVBHMcopQAIw7BN07SNoqidGvsUMjvXwEmStOLdAE2FB5VPhU9+f89yubSwd0NBDCJG2iGizfP8LIg4+aAS4wJxoPN8Zfieb4miqKe053lW6bquKcuSOI7tfRF5furQOFkIJEnSQX2neJ7nKKUI0FB13hWvrlYrezXGUJalHSeOYwC22ReAHkm685xq3W+2pqQz15Miq9WKKIrs/y4UFEopsixDKcWQGI0xvftDUUphjAE6g3769OlNOrz64yRJ2sBsqLxr5OpKnucsl0tWqxXL5RLgQFnXWPLc9XhgNhTMLTG67w3ltaHxYhKUGPc8D2N8lOex3cWqMWZIXh3ZVQ/4QdIbxxhjOcAYM6pUwbxbpP7WM7BruFm9oUJxm/zeVqgXG+JoDkjTtL27u7MxvtXfrSIVqltUk9nFCUy11qj5X9TVQ288MZS8J4q5hvA8D8/zrPIuEuq6pq5rO3dF9yy5XbTJ7eJojnjWWm4BMyZ6m6Ouok6ZekX93kddRc/CfPhMa20VHL4zfFdQU63vmc1vegVUgKYKPKh8ArPh78fqSR0nH0oeF3i6RKe2BSZc9GJ6U66sIfQ25zpcjo47xQNuZeiGhFsputIUj8zmN/ZqjOGqypnNb6BZw2yxvzLNEQc37+7uWoGl63ljDMYYwjC0i/bKNVkTdIbZ5sxqjzAMO1g3mUWDyFBZqQRdz7vGcb+R50opvuf3XIddISUIFP6Rq+/7o9wz3GvYP1MFDEC53hCqj72BXMJz/wsch5lhqIh7f0xZEa31XqGJUGyKR+YfAuuMPM+JooimeOTfn55Nxe74Yoh3ruICt4OcPCu6ryof3/fJsmwfc46iQw/rbY7fhD1DwZ7MBNpjNYCb76c4QThAxpAwLMvSokHWKUYZOuQAATP9jUZ9PPBSlmVchw0AhfHtJGEYsmgMX37sJ5sSU6/w/D03jBHcFHEOuUBtC+tx4QG39rjaJQwJS5lPijPhhAMOENbvkVFQd+XsjlTKsiS8viKoDJtyZicQ+AtfiOcFwgC6+HpgBHnHGNPjhDGjjIXBEB00axrdECz+oK5r6/2xfsNkFkjTtHVJRWttDeH7fi8shnwwJaKEi7KpbDBUzv3efW/IDU3xyPxjunfezmlHZ4GhRFHUygZluMAeHzRryh8fCMPQ7uikgls0hiJ4vpwdU3zKQEPDTCHjuQ7T0WVjFEWtQF0phS7+sTkWsHW753m8/7HiKvrzYFFje4YD+DoyhqynlHXrlWM3SS/eQLg9PYAsy4jj2G5eREExwjb/ys8Py14dAfsCZ4rtXyJj6e1YefVu0A0NNy26qXQso8BhShoTNyW6VSjQ20TJ9bXN1JP0A4ADT8pCp5qfcRz3+gVuS+ypfsAwRb61i3yy9tKw3Q0DA2wLVvV7XEKFffqbUnjIG2LoU7XPz9ITHPbz4NDDFsLl2m6senX8sBbhOFZ/qZyt956maTvFAdCHstT7ct9tgAgCznVOcPbDh9uboLVG2HWHZb8uzVCXQN1+3ymhPiUXOxmyndydERq/8/BYMxXeTm7HysXPBse6yG6IXOpITOSXnMjC/+d0+D/cCw3xsaVb7QAAAABJRU5ErkJggg==",
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 64,
                                left: -31,
                                top: -33,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAEu0lEQVR4nO2Zr3ejShTHv3kHgUCMGIGIGIFEjECsqOAPqECsWPHEioonKipWVlSuWPHEioqIiIonKiJWIhAVK55ARDxRgYhAjEBEIHoOT9Ah/CZkCWTP4Ws6JyQw38/cufcyBWbNmjVr1qxZs2bNmjVr1qxZs2bNmjVrRHHOE9u2k6mev5jqwUBqnhCCIAhACAEhBJ7njTqnyQDUmZ8CxCQAusyPCWJ0AJzzhDEG3/c7zY8BYlQA5ZXPgzgWytAgRgPQFvaWZcF13UkiYhQAbeZPiYIhQYwCgBCSyAkfY2xMEONtAVNJgp2GPiBOGfcF8ce5DNfJudZgL0MEQdDLGGOsdlz3/b6d5dkjYLO6TQDg4e9HcK5D3RPE4jW9tlUBAIyxo0DIZMkYg2EY2ZgQAt/3C+NjI0I5t/FXf1v4PBavUKkBAHDMVwih4iUIALSDYIxlhi3LwvPzcwVEHRTHcRJKKVarVS2IwQHkjVOqg1K9cF2al1GwFzGu9DQS2kDIVTUMIzOfByHHnPPsO5xzUErhui4cx0ksy8L9/X0BxOAA6oybULOxNL5+iQ8TETFsqiZ5EE3JMr/adeYty8JqtaqMDcPAarWC4zjJZrPJnj14EpTGpWkhQngiyK6vX+JFwfy7PBEvfvwXLdKIAIi2a02WZRBt5iWgKIrgeR4cx8mS5NlyQN706070+F28gIjBTSVxrjWIfyO8BFEhIvIJz3Xdwgo3gWBLAXZFAACbH14WCWcBIESYGX/cbBdA2geccq9DjkhBAGmOAADf9yt7vg6EffUGgGD9tFukYHWsn9JtcDQAmdycm++tZUWIsGD8VyUjopwjgAOIuuSXN79+2jXOpRNAOat36cv35rrr+2Hn75tUB2IbRVkUUEorUXB7zVrnA7QA6CpnfeVv3waPCJNG6WeeBwCwbTuLAlON4Lk+vt2mXWETiAqAsnGbMmwRw4SKLeIhPAyickTslD08z4PneeBKDKhplHiuDyDKQDx5L4X7ZADKnZtccWl6izhLbpekatXYA1CxFzE0GgMg2As1AwGluObK+uFTbcsqRAhK9YLpPuVsKqXGVWhUxV4AGsX7OIZGCYA9gMOCKz/9LZiiQTcZAODnOwhjSWvL2aUrvzU0euhA5fjh7i8AhwVXAEDRVQgR4i2M8YGbAA4gpjQ+VNXQqIqbL38CKCZ1IcIUwFsYQ9HVWhCPm23zU86ooarG3dcbANXcJpVFgLwoRFgAIXPE54d/fostIFX3Ok6pXqlmi89XaiJfUY0lBXCICKm3MM5yxKWC4KaScK7DsR0A7Y1bPrdlZupAlKvAJYOQAExiVIzLVa9L6hUTvysI+bJ19/EjgKppoL6aNU6+DCIPQW6RSwQhc1aXcanOSedBMEWrJEzgsiJi/fAp6dO/HD3ZPAjgsD2AA4xLAPHt1k76NG69J9kGQmpIEMeeQ5yqk2967mRZfis9V0T98k3rQADFXqIPiKYDmIsFINUE4thkWTYuy5j8e/EApJpA5JUHQd6/09W5dR1tnaqzZepjc4Siq5V/ohzTwAyls5eqrhxR94Iy5jnEaLU6D+IDNzOT+dWf4gBm9GalrcWe4uRpsrZVgjCWdNIjt/8BPufuXac6k7UAAAAASUVORK5CYII=",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAAFVklEQVR4nM2ZL3vbSBDGf73HoCBAQECgQGCBwQEBgQCDAMMCgQMHDwjkA+Rj9AMcKDhQUBAQUFBgEGBgICBwQGCBQIGAwAKDAj2PDsizXslS4iS2e0Nk68/uzsw778zOvuMXSZIkre/71HWN7/t8/vz53a9Yx8UnTdO0ld+ivPv70oa42GRpmrZ1XQMgngdQSqG1BqAsS8IwBODh4eEia/vt3BOkadomSdLWswKCmgCN53lAZwittUVBHMcopQAIw7BN07SNoqidGvsUMjvXwEmStOLdAE2FB5VPhU9+f89yubSwd0NBDCJG2iGizfP8LIg4+aAS4wJxoPN8Zfieb4miqKe053lW6bquKcuSOI7tfRF5furQOFkIJEnSQX2neJ7nKKUI0FB13hWvrlYrezXGUJalHSeOYwC22ReAHkm685xq3W+2pqQz15Miq9WKKIrs/y4UFEopsixDKcWQGI0xvftDUUphjAE6g3769OlNOrz64yRJ2sBsqLxr5OpKnucsl0tWqxXL5RLgQFnXWPLc9XhgNhTMLTG67w3ltaHxYhKUGPc8D2N8lOex3cWqMWZIXh3ZVQ/4QdIbxxhjOcAYM6pUwbxbpP7WM7BruFm9oUJxm/zeVqgXG+JoDkjTtL27u7MxvtXfrSIVqltUk9nFCUy11qj5X9TVQ288MZS8J4q5hvA8D8/zrPIuEuq6pq5rO3dF9yy5XbTJ7eJojnjWWm4BMyZ6m6Ouok6ZekX93kddRc/CfPhMa20VHL4zfFdQU63vmc1vegVUgKYKPKh8ArPh78fqSR0nH0oeF3i6RKe2BSZc9GJ6U66sIfQ25zpcjo47xQNuZeiGhFsputIUj8zmN/ZqjOGqypnNb6BZw2yxvzLNEQc37+7uWoGl63ljDMYYwjC0i/bKNVkTdIbZ5sxqjzAMO1g3mUWDyFBZqQRdz7vGcb+R50opvuf3XIddISUIFP6Rq+/7o9wz3GvYP1MFDEC53hCqj72BXMJz/wsch5lhqIh7f0xZEa31XqGJUGyKR+YfAuuMPM+JooimeOTfn55Nxe74Yoh3ruICt4OcPCu6ryof3/fJsmwfc46iQw/rbY7fhD1DwZ7MBNpjNYCb76c4QThAxpAwLMvSokHWKUYZOuQAATP9jUZ9PPBSlmVchw0AhfHtJGEYsmgMX37sJ5sSU6/w/D03jBHcFHEOuUBtC+tx4QG39rjaJQwJS5lPijPhhAMOENbvkVFQd+XsjlTKsiS8viKoDJtyZicQ+AtfiOcFwgC6+HpgBHnHGNPjhDGjjIXBEB00axrdECz+oK5r6/2xfsNkFkjTtHVJRWttDeH7fi8shnwwJaKEi7KpbDBUzv3efW/IDU3xyPxjunfezmlHZ4GhRFHUygZluMAeHzRryh8fCMPQ7uikgls0hiJ4vpwdU3zKQEPDTCHjuQ7T0WVjFEWtQF0phS7+sTkWsHW753m8/7HiKvrzYFFje4YD+DoyhqynlHXrlWM3SS/eQLg9PYAsy4jj2G5eREExwjb/ys8Py14dAfsCZ4rtXyJj6e1YefVu0A0NNy26qXQso8BhShoTNyW6VSjQ20TJ9bXN1JP0A4ADT8pCp5qfcRz3+gVuS+ypfsAwRb61i3yy9tKw3Q0DA2wLVvV7XEKFffqbUnjIG2LoU7XPz9ITHPbz4NDDFsLl2m6senX8sBbhOFZ/qZyt956maTvFAdCHstT7ct9tgAgCznVOcPbDh9uboLVG2HWHZb8uzVCXQN1+3ymhPiUXOxmyndydERq/8/BYMxXeTm7HysXPBse6yG6IXOpITOSXnMjC/+d0+D/cCw3xsaVb7QAAAABJRU5ErkJggg==",
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 64,
                                left: -31,
                                top: -33,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAAFVklEQVR4nM2ZL3vbSBDGf73HoCBAQECgQGCBwQEBgQCDAMMCgQMHDwjkA+Rj9AMcKDhQUBAQUFBgEGBgICBwQGCBQIGAwAKDAj2PDsizXslS4iS2e0Nk68/uzsw778zOvuMXSZIkre/71HWN7/t8/vz53a9Yx8UnTdO0ld+ivPv70oa42GRpmrZ1XQMgngdQSqG1BqAsS8IwBODh4eEia/vt3BOkadomSdLWswKCmgCN53lAZwittUVBHMcopQAIw7BN07SNoqidGvsUMjvXwEmStOLdAE2FB5VPhU9+f89yubSwd0NBDCJG2iGizfP8LIg4+aAS4wJxoPN8Zfieb4miqKe053lW6bquKcuSOI7tfRF5furQOFkIJEnSQX2neJ7nKKUI0FB13hWvrlYrezXGUJalHSeOYwC22ReAHkm685xq3W+2pqQz15Miq9WKKIrs/y4UFEopsixDKcWQGI0xvftDUUphjAE6g3769OlNOrz64yRJ2sBsqLxr5OpKnucsl0tWqxXL5RLgQFnXWPLc9XhgNhTMLTG67w3ltaHxYhKUGPc8D2N8lOex3cWqMWZIXh3ZVQ/4QdIbxxhjOcAYM6pUwbxbpP7WM7BruFm9oUJxm/zeVqgXG+JoDkjTtL27u7MxvtXfrSIVqltUk9nFCUy11qj5X9TVQ288MZS8J4q5hvA8D8/zrPIuEuq6pq5rO3dF9yy5XbTJ7eJojnjWWm4BMyZ6m6Ouok6ZekX93kddRc/CfPhMa20VHL4zfFdQU63vmc1vegVUgKYKPKh8ArPh78fqSR0nH0oeF3i6RKe2BSZc9GJ6U66sIfQ25zpcjo47xQNuZeiGhFsputIUj8zmN/ZqjOGqypnNb6BZw2yxvzLNEQc37+7uWoGl63ljDMYYwjC0i/bKNVkTdIbZ5sxqjzAMO1g3mUWDyFBZqQRdz7vGcb+R50opvuf3XIddISUIFP6Rq+/7o9wz3GvYP1MFDEC53hCqj72BXMJz/wsch5lhqIh7f0xZEa31XqGJUGyKR+YfAuuMPM+JooimeOTfn55Nxe74Yoh3ruICt4OcPCu6ryof3/fJsmwfc46iQw/rbY7fhD1DwZ7MBNpjNYCb76c4QThAxpAwLMvSokHWKUYZOuQAATP9jUZ9PPBSlmVchw0AhfHtJGEYsmgMX37sJ5sSU6/w/D03jBHcFHEOuUBtC+tx4QG39rjaJQwJS5lPijPhhAMOENbvkVFQd+XsjlTKsiS8viKoDJtyZicQ+AtfiOcFwgC6+HpgBHnHGNPjhDGjjIXBEB00axrdECz+oK5r6/2xfsNkFkjTtHVJRWttDeH7fi8shnwwJaKEi7KpbDBUzv3efW/IDU3xyPxjunfezmlHZ4GhRFHUygZluMAeHzRryh8fCMPQ7uikgls0hiJ4vpwdU3zKQEPDTCHjuQ7T0WVjFEWtQF0phS7+sTkWsHW753m8/7HiKvrzYFFje4YD+DoyhqynlHXrlWM3SS/eQLg9PYAsy4jj2G5eREExwjb/ys8Py14dAfsCZ4rtXyJj6e1YefVu0A0NNy26qXQso8BhShoTNyW6VSjQ20TJ9bXN1JP0A4ADT8pCp5qfcRz3+gVuS+ypfsAwRb61i3yy9tKw3Q0DA2wLVvV7XEKFffqbUnjIG2LoU7XPz9ITHPbz4NDDFsLl2m6senX8sBbhOFZ/qZyt956maTvFAdCHstT7ct9tgAgCznVOcPbDh9uboLVG2HWHZb8uzVCXQN1+3ymhPiUXOxmyndydERq/8/BYMxXeTm7HysXPBse6yG6IXOpITOSXnMjC/+d0+D/cCw3xsaVb7QAAAABJRU5ErkJggg==",
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 64,
                                left: -31,
                                top: -33,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAD00lEQVR4nO2YL3TiShSHv76zYkTFFYiIiAhEREUFAoGoQCAQFRWICkTFihVPrFjxZEVFxYonVqyoWPEEAoFYUfEEAhGBqEBUREREIEZUjNhzZkVIXvjTfVBCt2I+A2eYTPK7d353bgCHw+FwOBwOh8PhcDgcDofD4XA4HA6Hw+F4Q4iIDYLAVr3uH1UvWCUiYsvC6yetyu/xZgLQbynbDVnLcKPVJY7jo0Pd992hFt6GfktZgFZdMa+F1OYzQNvRjIMJXuW3BCAXHjZPF6LBTKeMDRi9Pj8IAqv1hh8q4FUDUM647ymSdEaSGGIDyaNBCSgB0uXr4jg+EpHKCyC8UgA2ZXwSaWID87nBaOh15FkbfO2L/TjMvndDKrXIQQOwJny+nHGA9mVzzQa1mqLfwg4fsnWu/xVAZ3N0tc94kACUhc8mU2ol4eWMr9ogJ7fI8CEbPPNThloBmy2yD5UGoN9SNmyeMh5N+HDukaQz5nNDoiBKMuHljOc2yFm1CGSis92SfT9vClWeFJUFoBtiey0hSWcYDUlq8D2F0RBhaHWbazbIed4imeheR4iG2dzMDgLElTz3Xo1QuXkpiwb4OITbuzTLeE0VNhg//ic+bJ4CLP0WJYbk0dDrSHGfvAA+PoyLsSAI7I8P643TrrxoB/Rbym5qXqIhtqFS7lOOuqG2qzaITSZ6W4usorVmfqmpjwLeqTr1Eey7E3YKQO7x55oXrfXR/WLuJhvkore3iCIajwA4O7siTmLqowipNbL7lWz0UrYKQJ7x55qX+3S9IN2nyzuiDXbVIg2VWWTTSTFOBcjeBaLxiFqtBsB0HhH4AdPpYOl+eaOktd6pOP5y8mrGV4+yTcJ/hYjYhtILi7CwiGE40TR8VdggMlJc43X/5ilNeYqu8zWy8d5XZl8uCN9ngZh9uaB5M+H7+3D/ADwnPG9edhW+ibaHzXuB27sUJTCacSQiNs86QOe8z/RHg6c0O/z9xmn2TNGUp+ia48ZfHHseAOIvPgN/60AsTcqFzyZTWnW1d8b/j/KOKI9dXHxiMLgp5nXO+5zUa3weGpTImuDi2sBn8qmJiGz9Cl3UgPI5vlqZqxaeUy6a5bHB4KY43jrnfe4fjhknCjAcex7xfbY7gnYX8T0k8HkYjNDJ7i1iEYBNlfk138vLlAvZP3ef6fX/tCd1xejprBCpzHfMeMLUNIEsGLlNXoyI2La3f3NxKMLLb9Zv31oRse3uZfF3mfJ61m/f2vDymz3Ua/ObQkTs1dXNUgBeutZv2eJVkGd6l4LncDgcDofD4XA4HI4FPwEJeXYzv9CNNwAAAABJRU5ErkJggg==",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAAFVklEQVR4nM2ZL3vbSBDGf73HoCBAQECgQGCBwQEBgQCDAMMCgQMHDwjkA+Rj9AMcKDhQUBAQUFBgEGBgICBwQGCBQIGAwAKDAj2PDsizXslS4iS2e0Nk68/uzsw778zOvuMXSZIkre/71HWN7/t8/vz53a9Yx8UnTdO0ld+ivPv70oa42GRpmrZ1XQMgngdQSqG1BqAsS8IwBODh4eEia/vt3BOkadomSdLWswKCmgCN53lAZwittUVBHMcopQAIw7BN07SNoqidGvsUMjvXwEmStOLdAE2FB5VPhU9+f89yubSwd0NBDCJG2iGizfP8LIg4+aAS4wJxoPN8Zfieb4miqKe053lW6bquKcuSOI7tfRF5furQOFkIJEnSQX2neJ7nKKUI0FB13hWvrlYrezXGUJalHSeOYwC22ReAHkm685xq3W+2pqQz15Miq9WKKIrs/y4UFEopsixDKcWQGI0xvftDUUphjAE6g3769OlNOrz64yRJ2sBsqLxr5OpKnucsl0tWqxXL5RLgQFnXWPLc9XhgNhTMLTG67w3ltaHxYhKUGPc8D2N8lOex3cWqMWZIXh3ZVQ/4QdIbxxhjOcAYM6pUwbxbpP7WM7BruFm9oUJxm/zeVqgXG+JoDkjTtL27u7MxvtXfrSIVqltUk9nFCUy11qj5X9TVQ288MZS8J4q5hvA8D8/zrPIuEuq6pq5rO3dF9yy5XbTJ7eJojnjWWm4BMyZ6m6Ouok6ZekX93kddRc/CfPhMa20VHL4zfFdQU63vmc1vegVUgKYKPKh8ArPh78fqSR0nH0oeF3i6RKe2BSZc9GJ6U66sIfQ25zpcjo47xQNuZeiGhFsputIUj8zmN/ZqjOGqypnNb6BZw2yxvzLNEQc37+7uWoGl63ljDMYYwjC0i/bKNVkTdIbZ5sxqjzAMO1g3mUWDyFBZqQRdz7vGcb+R50opvuf3XIddISUIFP6Rq+/7o9wz3GvYP1MFDEC53hCqj72BXMJz/wsch5lhqIh7f0xZEa31XqGJUGyKR+YfAuuMPM+JooimeOTfn55Nxe74Yoh3ruICt4OcPCu6ryof3/fJsmwfc46iQw/rbY7fhD1DwZ7MBNpjNYCb76c4QThAxpAwLMvSokHWKUYZOuQAATP9jUZ9PPBSlmVchw0AhfHtJGEYsmgMX37sJ5sSU6/w/D03jBHcFHEOuUBtC+tx4QG39rjaJQwJS5lPijPhhAMOENbvkVFQd+XsjlTKsiS8viKoDJtyZicQ+AtfiOcFwgC6+HpgBHnHGNPjhDGjjIXBEB00axrdECz+oK5r6/2xfsNkFkjTtHVJRWttDeH7fi8shnwwJaKEi7KpbDBUzv3efW/IDU3xyPxjunfezmlHZ4GhRFHUygZluMAeHzRryh8fCMPQ7uikgls0hiJ4vpwdU3zKQEPDTCHjuQ7T0WVjFEWtQF0phS7+sTkWsHW753m8/7HiKvrzYFFje4YD+DoyhqynlHXrlWM3SS/eQLg9PYAsy4jj2G5eREExwjb/ys8Py14dAfsCZ4rtXyJj6e1YefVu0A0NNy26qXQso8BhShoTNyW6VSjQ20TJ9bXN1JP0A4ADT8pCp5qfcRz3+gVuS+ypfsAwRb61i3yy9tKw3Q0DA2wLVvV7XEKFffqbUnjIG2LoU7XPz9ITHPbz4NDDFsLl2m6senX8sBbhOFZ/qZyt956maTvFAdCHstT7ct9tgAgCznVOcPbDh9uboLVG2HWHZb8uzVCXQN1+3ymhPiUXOxmyndydERq/8/BYMxXeTm7HysXPBse6yG6IXOpITOSXnMjC/+d0+D/cCw3xsaVb7QAAAABJRU5ErkJggg==",
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 64,
                                left: -31,
                                top: -33,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAADZElEQVR4nO2aoZfiMBDGP95bERmBqKhcgTiBQCCQCARiJWIF8sSJ/RNWnjhx8sSJEyeQiBUrkIgKBAJRcQJRUVERGZcT3ZRQQlNKySLmp3jMhma+mW9SygIEQRAEQRAEQRAEQRAEQRAEQRAEQRAE4Y35iKlpD8r3dR98X9BkPmIKAEaPDFm3h24WAxDqLUbH1x4+RQCdeG/Y/0gakNst1hKQwu9evApgVjwMGJI0RpJI7CWQ/JNgHGAcQGpfm2USbXeHFwFsFY82AnsJZJmEFMBswk9s4MMiN/WaLXGz4gAwfh6exDTn1q3S9vZ9kw4wE4+jLbrZodXNipdtoGlikaa02gHzEVO9YR/rtwjfngIkqcQyEhiEDJskT/zSitssEgYMk+9pK3tvrQP0kOpmMaQAklQiDBikADaQGE0/Es9OK14knsWVFln9jTCbcCSpxO85V20IcdVi25BaRiJPWnIMmMD4eYg42mL0yKyJl2OnFpFFbLljGDCB0Ze8o56GeVf0H/aNhWjUAa5zfJWiM+0JldsgRpZJJAzYy3zNwSKHmM0i5ZNCCNlBAPVzwzBguTAhYiBgjTviIgEuOcdtNtBJuywSBgyLtShsoKe+meSGc4WdAHb5dZ+GzaxR64+qjjPbkFpGAm8xOpxzNWACqxSdcQCl2/rHn9RqkcW7wGzCi+uaiej1Zkx/DoDCGmHIAKC2NSqDTc/xc2e1Kci0B1U+KfLWtnt89ktWxrQIAIqOWLznAlcJYX2zfI7XHVLaBnXu1MododeNAyjdHbqi+jphwI6EsMW0EIzjaJ8ArCIcvdH0HNei1LlDMz1qdsS5GHCoqEaLdi6mRdpIjsXXQ5FYv3/SDcULsyW1F83qFEMKpzaoe2tq8/G1Hi93RDkGAC8DifVOWruh2HidIdWk4ia6qrfweLkjyrFyN7yu5LEA5gbPDSltg2u+jNzS43rtOf9zztXL4JD8iQDljdqGlCvBqnPYl8erKl6mMqHykHJxbx63VfwiAS7lHj3uovUHIvfmcRetCnCPHnfRmgD36nEXrQng8j/wOR530aoF6vgf8OtxFzd5Kuzyv0+Pu7jpY3HOuQKq/Q/c1uMuvPwGZ+sIXx534e1HSOAghE+Pu/AqgEYPy8+o+F3BOVevY+b9fwIIg/97Oqf3l4o9dQAAAABJRU5ErkJggg==",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAAFVklEQVR4nM2ZL3vbSBDGf73HoCBAQECgQGCBwQEBgQCDAMMCgQMHDwjkA+Rj9AMcKDhQUBAQUFBgEGBgICBwQGCBQIGAwAKDAj2PDsizXslS4iS2e0Nk68/uzsw778zOvuMXSZIkre/71HWN7/t8/vz53a9Yx8UnTdO0ld+ivPv70oa42GRpmrZ1XQMgngdQSqG1BqAsS8IwBODh4eEia/vt3BOkadomSdLWswKCmgCN53lAZwittUVBHMcopQAIw7BN07SNoqidGvsUMjvXwEmStOLdAE2FB5VPhU9+f89yubSwd0NBDCJG2iGizfP8LIg4+aAS4wJxoPN8Zfieb4miqKe053lW6bquKcuSOI7tfRF5furQOFkIJEnSQX2neJ7nKKUI0FB13hWvrlYrezXGUJalHSeOYwC22ReAHkm685xq3W+2pqQz15Miq9WKKIrs/y4UFEopsixDKcWQGI0xvftDUUphjAE6g3769OlNOrz64yRJ2sBsqLxr5OpKnucsl0tWqxXL5RLgQFnXWPLc9XhgNhTMLTG67w3ltaHxYhKUGPc8D2N8lOex3cWqMWZIXh3ZVQ/4QdIbxxhjOcAYM6pUwbxbpP7WM7BruFm9oUJxm/zeVqgXG+JoDkjTtL27u7MxvtXfrSIVqltUk9nFCUy11qj5X9TVQ288MZS8J4q5hvA8D8/zrPIuEuq6pq5rO3dF9yy5XbTJ7eJojnjWWm4BMyZ6m6Ouok6ZekX93kddRc/CfPhMa20VHL4zfFdQU63vmc1vegVUgKYKPKh8ArPh78fqSR0nH0oeF3i6RKe2BSZc9GJ6U66sIfQ25zpcjo47xQNuZeiGhFsputIUj8zmN/ZqjOGqypnNb6BZw2yxvzLNEQc37+7uWoGl63ljDMYYwjC0i/bKNVkTdIbZ5sxqjzAMO1g3mUWDyFBZqQRdz7vGcb+R50opvuf3XIddISUIFP6Rq+/7o9wz3GvYP1MFDEC53hCqj72BXMJz/wsch5lhqIh7f0xZEa31XqGJUGyKR+YfAuuMPM+JooimeOTfn55Nxe74Yoh3ruICt4OcPCu6ryof3/fJsmwfc46iQw/rbY7fhD1DwZ7MBNpjNYCb76c4QThAxpAwLMvSokHWKUYZOuQAATP9jUZ9PPBSlmVchw0AhfHtJGEYsmgMX37sJ5sSU6/w/D03jBHcFHEOuUBtC+tx4QG39rjaJQwJS5lPijPhhAMOENbvkVFQd+XsjlTKsiS8viKoDJtyZicQ+AtfiOcFwgC6+HpgBHnHGNPjhDGjjIXBEB00axrdECz+oK5r6/2xfsNkFkjTtHVJRWttDeH7fi8shnwwJaKEi7KpbDBUzv3efW/IDU3xyPxjunfezmlHZ4GhRFHUygZluMAeHzRryh8fCMPQ7uikgls0hiJ4vpwdU3zKQEPDTCHjuQ7T0WVjFEWtQF0phS7+sTkWsHW753m8/7HiKvrzYFFje4YD+DoyhqynlHXrlWM3SS/eQLg9PYAsy4jj2G5eREExwjb/ys8Py14dAfsCZ4rtXyJj6e1YefVu0A0NNy26qXQso8BhShoTNyW6VSjQ20TJ9bXN1JP0A4ADT8pCp5qfcRz3+gVuS+ypfsAwRb61i3yy9tKw3Q0DA2wLVvV7XEKFffqbUnjIG2LoU7XPz9ITHPbz4NDDFsLl2m6senX8sBbhOFZ/qZyt956maTvFAdCHstT7ct9tgAgCznVOcPbDh9uboLVG2HWHZb8uzVCXQN1+3ymhPiUXOxmyndydERq/8/BYMxXeTm7HysXPBse6yG6IXOpITOSXnMjC/+d0+D/cCw3xsaVb7QAAAABJRU5ErkJggg==",
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 64,
                                left: -31,
                                top: -33,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAAFVklEQVR4nM2ZL3vbSBDGf73HoCBAQECgQGCBwQEBgQCDAMMCgQMHDwjkA+Rj9AMcKDhQUBAQUFBgEGBgICBwQGCBQIGAwAKDAj2PDsizXslS4iS2e0Nk68/uzsw778zOvuMXSZIkre/71HWN7/t8/vz53a9Yx8UnTdO0ld+ivPv70oa42GRpmrZ1XQMgngdQSqG1BqAsS8IwBODh4eEia/vt3BOkadomSdLWswKCmgCN53lAZwittUVBHMcopQAIw7BN07SNoqidGvsUMjvXwEmStOLdAE2FB5VPhU9+f89yubSwd0NBDCJG2iGizfP8LIg4+aAS4wJxoPN8Zfieb4miqKe053lW6bquKcuSOI7tfRF5furQOFkIJEnSQX2neJ7nKKUI0FB13hWvrlYrezXGUJalHSeOYwC22ReAHkm685xq3W+2pqQz15Miq9WKKIrs/y4UFEopsixDKcWQGI0xvftDUUphjAE6g3769OlNOrz64yRJ2sBsqLxr5OpKnucsl0tWqxXL5RLgQFnXWPLc9XhgNhTMLTG67w3ltaHxYhKUGPc8D2N8lOex3cWqMWZIXh3ZVQ/4QdIbxxhjOcAYM6pUwbxbpP7WM7BruFm9oUJxm/zeVqgXG+JoDkjTtL27u7MxvtXfrSIVqltUk9nFCUy11qj5X9TVQ288MZS8J4q5hvA8D8/zrPIuEuq6pq5rO3dF9yy5XbTJ7eJojnjWWm4BMyZ6m6Ouok6ZekX93kddRc/CfPhMa20VHL4zfFdQU63vmc1vegVUgKYKPKh8ArPh78fqSR0nH0oeF3i6RKe2BSZc9GJ6U66sIfQ25zpcjo47xQNuZeiGhFsputIUj8zmN/ZqjOGqypnNb6BZw2yxvzLNEQc37+7uWoGl63ljDMYYwjC0i/bKNVkTdIbZ5sxqjzAMO1g3mUWDyFBZqQRdz7vGcb+R50opvuf3XIddISUIFP6Rq+/7o9wz3GvYP1MFDEC53hCqj72BXMJz/wsch5lhqIh7f0xZEa31XqGJUGyKR+YfAuuMPM+JooimeOTfn55Nxe74Yoh3ruICt4OcPCu6ryof3/fJsmwfc46iQw/rbY7fhD1DwZ7MBNpjNYCb76c4QThAxpAwLMvSokHWKUYZOuQAATP9jUZ9PPBSlmVchw0AhfHtJGEYsmgMX37sJ5sSU6/w/D03jBHcFHEOuUBtC+tx4QG39rjaJQwJS5lPijPhhAMOENbvkVFQd+XsjlTKsiS8viKoDJtyZicQ+AtfiOcFwgC6+HpgBHnHGNPjhDGjjIXBEB00axrdECz+oK5r6/2xfsNkFkjTtHVJRWttDeH7fi8shnwwJaKEi7KpbDBUzv3efW/IDU3xyPxjunfezmlHZ4GhRFHUygZluMAeHzRryh8fCMPQ7uikgls0hiJ4vpwdU3zKQEPDTCHjuQ7T0WVjFEWtQF0phS7+sTkWsHW753m8/7HiKvrzYFFje4YD+DoyhqynlHXrlWM3SS/eQLg9PYAsy4jj2G5eREExwjb/ys8Py14dAfsCZ4rtXyJj6e1YefVu0A0NNy26qXQso8BhShoTNyW6VSjQ20TJ9bXN1JP0A4ADT8pCp5qfcRz3+gVuS+ypfsAwRb61i3yy9tKw3Q0DA2wLVvV7XEKFffqbUnjIG2LoU7XPz9ITHPbz4NDDFsLl2m6senX8sBbhOFZ/qZyt956maTvFAdCHstT7ct9tgAgCznVOcPbDh9uboLVG2HWHZb8uzVCXQN1+3ymhPiUXOxmyndydERq/8/BYMxXeTm7HysXPBse6yG6IXOpITOSXnMjC/+d0+D/cCw3xsaVb7QAAAABJRU5ErkJggg==",
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 120,
                                left: -31,
                                top: -89,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAAFVklEQVR4nM2ZL3vbSBDGf73HoCBAQECgQGCBwQEBgQCDAMMCgQMHDwjkA+Rj9AMcKDhQUBAQUFBgEGBgICBwQGCBQIGAwAKDAj2PDsizXslS4iS2e0Nk68/uzsw778zOvuMXSZIkre/71HWN7/t8/vz53a9Yx8UnTdO0ld+ivPv70oa42GRpmrZ1XQMgngdQSqG1BqAsS8IwBODh4eEia/vt3BOkadomSdLWswKCmgCN53lAZwittUVBHMcopQAIw7BN07SNoqidGvsUMjvXwEmStOLdAE2FB5VPhU9+f89yubSwd0NBDCJG2iGizfP8LIg4+aAS4wJxoPN8Zfieb4miqKe053lW6bquKcuSOI7tfRF5furQOFkIJEnSQX2neJ7nKKUI0FB13hWvrlYrezXGUJalHSeOYwC22ReAHkm685xq3W+2pqQz15Miq9WKKIrs/y4UFEopsixDKcWQGI0xvftDUUphjAE6g3769OlNOrz64yRJ2sBsqLxr5OpKnucsl0tWqxXL5RLgQFnXWPLc9XhgNhTMLTG67w3ltaHxYhKUGPc8D2N8lOex3cWqMWZIXh3ZVQ/4QdIbxxhjOcAYM6pUwbxbpP7WM7BruFm9oUJxm/zeVqgXG+JoDkjTtL27u7MxvtXfrSIVqltUk9nFCUy11qj5X9TVQ288MZS8J4q5hvA8D8/zrPIuEuq6pq5rO3dF9yy5XbTJ7eJojnjWWm4BMyZ6m6Ouok6ZekX93kddRc/CfPhMa20VHL4zfFdQU63vmc1vegVUgKYKPKh8ArPh78fqSR0nH0oeF3i6RKe2BSZc9GJ6U66sIfQ25zpcjo47xQNuZeiGhFsputIUj8zmN/ZqjOGqypnNb6BZw2yxvzLNEQc37+7uWoGl63ljDMYYwjC0i/bKNVkTdIbZ5sxqjzAMO1g3mUWDyFBZqQRdz7vGcb+R50opvuf3XIddISUIFP6Rq+/7o9wz3GvYP1MFDEC53hCqj72BXMJz/wsch5lhqIh7f0xZEa31XqGJUGyKR+YfAuuMPM+JooimeOTfn55Nxe74Yoh3ruICt4OcPCu6ryof3/fJsmwfc46iQw/rbY7fhD1DwZ7MBNpjNYCb76c4QThAxpAwLMvSokHWKUYZOuQAATP9jUZ9PPBSlmVchw0AhfHtJGEYsmgMX37sJ5sSU6/w/D03jBHcFHEOuUBtC+tx4QG39rjaJQwJS5lPijPhhAMOENbvkVFQd+XsjlTKsiS8viKoDJtyZicQ+AtfiOcFwgC6+HpgBHnHGNPjhDGjjIXBEB00axrdECz+oK5r6/2xfsNkFkjTtHVJRWttDeH7fi8shnwwJaKEi7KpbDBUzv3efW/IDU3xyPxjunfezmlHZ4GhRFHUygZluMAeHzRryh8fCMPQ7uikgls0hiJ4vpwdU3zKQEPDTCHjuQ7T0WVjFEWtQF0phS7+sTkWsHW753m8/7HiKvrzYFFje4YD+DoyhqynlHXrlWM3SS/eQLg9PYAsy4jj2G5eREExwjb/ys8Py14dAfsCZ4rtXyJj6e1YefVu0A0NNy26qXQso8BhShoTNyW6VSjQ20TJ9bXN1JP0A4ADT8pCp5qfcRz3+gVuS+ypfsAwRb61i3yy9tKw3Q0DA2wLVvV7XEKFffqbUnjIG2LoU7XPz9ITHPbz4NDDFsLl2m6senX8sBbhOFZ/qZyt956maTvFAdCHstT7ct9tgAgCznVOcPbDh9uboLVG2HWHZb8uzVCXQN1+3ymhPiUXOxmyndydERq/8/BYMxXeTm7HysXPBse6yG6IXOpITOSXnMjC/+d0+D/cCw3xsaVb7QAAAABJRU5ErkJggg==",
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 120,
                                left: -31,
                                top: -89,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAAFVklEQVR4nM2ZL3vbSBDGf73HoCBAQECgQGCBwQEBgQCDAMMCgQMHDwjkA+Rj9AMcKDhQUBAQUFBgEGBgICBwQGCBQIGAwAKDAj2PDsizXslS4iS2e0Nk68/uzsw778zOvuMXSZIkre/71HWN7/t8/vz53a9Yx8UnTdO0ld+ivPv70oa42GRpmrZ1XQMgngdQSqG1BqAsS8IwBODh4eEia/vt3BOkadomSdLWswKCmgCN53lAZwittUVBHMcopQAIw7BN07SNoqidGvsUMjvXwEmStOLdAE2FB5VPhU9+f89yubSwd0NBDCJG2iGizfP8LIg4+aAS4wJxoPN8Zfieb4miqKe053lW6bquKcuSOI7tfRF5furQOFkIJEnSQX2neJ7nKKUI0FB13hWvrlYrezXGUJalHSeOYwC22ReAHkm685xq3W+2pqQz15Miq9WKKIrs/y4UFEopsixDKcWQGI0xvftDUUphjAE6g3769OlNOrz64yRJ2sBsqLxr5OpKnucsl0tWqxXL5RLgQFnXWPLc9XhgNhTMLTG67w3ltaHxYhKUGPc8D2N8lOex3cWqMWZIXh3ZVQ/4QdIbxxhjOcAYM6pUwbxbpP7WM7BruFm9oUJxm/zeVqgXG+JoDkjTtL27u7MxvtXfrSIVqltUk9nFCUy11qj5X9TVQ288MZS8J4q5hvA8D8/zrPIuEuq6pq5rO3dF9yy5XbTJ7eJojnjWWm4BMyZ6m6Ouok6ZekX93kddRc/CfPhMa20VHL4zfFdQU63vmc1vegVUgKYKPKh8ArPh78fqSR0nH0oeF3i6RKe2BSZc9GJ6U66sIfQ25zpcjo47xQNuZeiGhFsputIUj8zmN/ZqjOGqypnNb6BZw2yxvzLNEQc37+7uWoGl63ljDMYYwjC0i/bKNVkTdIbZ5sxqjzAMO1g3mUWDyFBZqQRdz7vGcb+R50opvuf3XIddISUIFP6Rq+/7o9wz3GvYP1MFDEC53hCqj72BXMJz/wsch5lhqIh7f0xZEa31XqGJUGyKR+YfAuuMPM+JooimeOTfn55Nxe74Yoh3ruICt4OcPCu6ryof3/fJsmwfc46iQw/rbY7fhD1DwZ7MBNpjNYCb76c4QThAxpAwLMvSokHWKUYZOuQAATP9jUZ9PPBSlmVchw0AhfHtJGEYsmgMX37sJ5sSU6/w/D03jBHcFHEOuUBtC+tx4QG39rjaJQwJS5lPijPhhAMOENbvkVFQd+XsjlTKsiS8viKoDJtyZicQ+AtfiOcFwgC6+HpgBHnHGNPjhDGjjIXBEB00axrdECz+oK5r6/2xfsNkFkjTtHVJRWttDeH7fi8shnwwJaKEi7KpbDBUzv3efW/IDU3xyPxjunfezmlHZ4GhRFHUygZluMAeHzRryh8fCMPQ7uikgls0hiJ4vpwdU3zKQEPDTCHjuQ7T0WVjFEWtQF0phS7+sTkWsHW753m8/7HiKvrzYFFje4YD+DoyhqynlHXrlWM3SS/eQLg9PYAsy4jj2G5eREExwjb/ys8Py14dAfsCZ4rtXyJj6e1YefVu0A0NNy26qXQso8BhShoTNyW6VSjQ20TJ9bXN1JP0A4ADT8pCp5qfcRz3+gVuS+ypfsAwRb61i3yy9tKw3Q0DA2wLVvV7XEKFffqbUnjIG2LoU7XPz9ITHPbz4NDDFsLl2m6senX8sBbhOFZ/qZyt956maTvFAdCHstT7ct9tgAgCznVOcPbDh9uboLVG2HWHZb8uzVCXQN1+3ymhPiUXOxmyndydERq/8/BYMxXeTm7HysXPBse6yG6IXOpITOSXnMjC/+d0+D/cCw3xsaVb7QAAAABJRU5ErkJggg==",
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 120,
                                left: -31,
                                top: -89,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAAFVklEQVR4nM2ZL3vbSBDGf73HoCBAQECgQGCBwQEBgQCDAMMCgQMHDwjkA+Rj9AMcKDhQUBAQUFBgEGBgICBwQGCBQIGAwAKDAj2PDsizXslS4iS2e0Nk68/uzsw778zOvuMXSZIkre/71HWN7/t8/vz53a9Yx8UnTdO0ld+ivPv70oa42GRpmrZ1XQMgngdQSqG1BqAsS8IwBODh4eEia/vt3BOkadomSdLWswKCmgCN53lAZwittUVBHMcopQAIw7BN07SNoqidGvsUMjvXwEmStOLdAE2FB5VPhU9+f89yubSwd0NBDCJG2iGizfP8LIg4+aAS4wJxoPN8Zfieb4miqKe053lW6bquKcuSOI7tfRF5furQOFkIJEnSQX2neJ7nKKUI0FB13hWvrlYrezXGUJalHSeOYwC22ReAHkm685xq3W+2pqQz15Miq9WKKIrs/y4UFEopsixDKcWQGI0xvftDUUphjAE6g3769OlNOrz64yRJ2sBsqLxr5OpKnucsl0tWqxXL5RLgQFnXWPLc9XhgNhTMLTG67w3ltaHxYhKUGPc8D2N8lOex3cWqMWZIXh3ZVQ/4QdIbxxhjOcAYM6pUwbxbpP7WM7BruFm9oUJxm/zeVqgXG+JoDkjTtL27u7MxvtXfrSIVqltUk9nFCUy11qj5X9TVQ288MZS8J4q5hvA8D8/zrPIuEuq6pq5rO3dF9yy5XbTJ7eJojnjWWm4BMyZ6m6Ouok6ZekX93kddRc/CfPhMa20VHL4zfFdQU63vmc1vegVUgKYKPKh8ArPh78fqSR0nH0oeF3i6RKe2BSZc9GJ6U66sIfQ25zpcjo47xQNuZeiGhFsputIUj8zmN/ZqjOGqypnNb6BZw2yxvzLNEQc37+7uWoGl63ljDMYYwjC0i/bKNVkTdIbZ5sxqjzAMO1g3mUWDyFBZqQRdz7vGcb+R50opvuf3XIddISUIFP6Rq+/7o9wz3GvYP1MFDEC53hCqj72BXMJz/wsch5lhqIh7f0xZEa31XqGJUGyKR+YfAuuMPM+JooimeOTfn55Nxe74Yoh3ruICt4OcPCu6ryof3/fJsmwfc46iQw/rbY7fhD1DwZ7MBNpjNYCb76c4QThAxpAwLMvSokHWKUYZOuQAATP9jUZ9PPBSlmVchw0AhfHtJGEYsmgMX37sJ5sSU6/w/D03jBHcFHEOuUBtC+tx4QG39rjaJQwJS5lPijPhhAMOENbvkVFQd+XsjlTKsiS8viKoDJtyZicQ+AtfiOcFwgC6+HpgBHnHGNPjhDGjjIXBEB00axrdECz+oK5r6/2xfsNkFkjTtHVJRWttDeH7fi8shnwwJaKEi7KpbDBUzv3efW/IDU3xyPxjunfezmlHZ4GhRFHUygZluMAeHzRryh8fCMPQ7uikgls0hiJ4vpwdU3zKQEPDTCHjuQ7T0WVjFEWtQF0phS7+sTkWsHW753m8/7HiKvrzYFFje4YD+DoyhqynlHXrlWM3SS/eQLg9PYAsy4jj2G5eREExwjb/ys8Py14dAfsCZ4rtXyJj6e1YefVu0A0NNy26qXQso8BhShoTNyW6VSjQ20TJ9bXN1JP0A4ADT8pCp5qfcRz3+gVuS+ypfsAwRb61i3yy9tKw3Q0DA2wLVvV7XEKFffqbUnjIG2LoU7XPz9ITHPbz4NDDFsLl2m6senX8sBbhOFZ/qZyt956maTvFAdCHstT7ct9tgAgCznVOcPbDh9uboLVG2HWHZb8uzVCXQN1+3ymhPiUXOxmyndydERq/8/BYMxXeTm7HysXPBse6yG6IXOpITOSXnMjC/+d0+D/cCw3xsaVb7QAAAABJRU5ErkJggg==",
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 120,
                                left: -31,
                                top: -89,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
            ],
            callbacks:
                "const type{\n    accept_cargo_types cargodict\n    prod_cargo_types cargodict\n}\n\nlocal type{\n    current_production_ratio integer\n    total_cargo_produced_this_cycle integer\n    total_cargo_to_distribute_this_cycle integer\n\n    cargo iterator\n}\n\nindustry:storage type{\n    supplied_cycles_remaining_cargo cargodict\n\n    total_produced_cargo_available integer\n}\n\naccept_cargo_types ctt:KAOL [] 2 =\naccept_cargo_types ctt:WOOD [] 4 =\naccept_cargo_types ctt:SULP [] 2 =\nprod_cargo_types ctt:PAPR [] 8 =\n\n\n/*\n The following is a replication of what FIRS is doing for a secondary industry.\n See: https://github.com/andythenorth/firs/blob/4.4.0/src/templates/produce_secondary.pynml\n*/\n\ncb:production_cargo_arrival def{\n    cargo accept_cargo_types loop{\n        supplied_cycles_remaining_cargo cargo []\n            28\n            supplied_cycles_remaining_cargo cargo []\n        industry:cargo_incoming_waiting cargo [] 0 >\n        =\n\n        current_production_ratio\n            current_production_ratio\n                accept_cargo_types cargo []\n                0\n            supplied_cycles_remaining_cargo cargo [] 0 >\n            +\n        =\n\n        total_cargo_produced_this_cycle\n            total_cargo_produced_this_cycle\n            industry:cargo_incoming_waiting cargo [] current_production_ratio * 8 /\n            +\n        =\n    }\n\n    /*\n     When low cargo amounts are delivered, it's possible that final output\n     cargo amounts < 1, which means no cargo is distributed. Prevent that by\n     stockpiling produced cargo on each production cycle until there is enough\n     to distribute. The case is triggered by low amounts being moved to the\n     produce cycle as a vehicle gradually unloads, and was noticeable with\n     Road Hog trams.\n    */\n    total_produced_cargo_available total_produced_cargo_available total_cargo_produced_this_cycle + =\n\n    /*\n     Then check min. distributed by dividing over 8, to get the amount divided\n     by max possible output cargos. 8 is the pathological case, this could be\n     made more accurate by checking the lowest output ratio in current economy.\n     For accuracy, this could also store remainders using mod(8) or so, but eh, TMWFTLB?\n    */\n    total_cargo_to_distribute_this_cycle\n        total_produced_cargo_available\n        0\n        total_produced_cargo_available 8 >=\n    =\n    total_produced_cargo_available total_produced_cargo_available total_cargo_to_distribute_this_cycle - =\n\n    cargo accept_cargo_types loop{\n        result:inputs cargo [] industry:cargo_incoming_waiting cargo [] =\n    }\n    cargo prod_cargo_types loop{\n        result:outputs cargo [] total_cargo_to_distribute_this_cycle prod_cargo_types cargo [] * 8 / =\n    }\n}\n\ncb:production_every_256_ticks def{\n    cargo accept_cargo_types loop{\n        supplied_cycles_remaining_cargo cargo [] supplied_cycles_remaining_cargo cargo [] 1 - 0 max =\n    }\n}\n\ncb:production_change_monthly def{\n    result:value 0 =\n}\n\ncb:production_change_random def{\n    result:value 0 =\n}\n",
            type: "secondary",
        },
        {
            id: 7,
            available: true,
            name: "Phosphate Mine",
            colour: 45,
            fundCostMultiplier: 200,
            probabilityMapGen: 7,
            probabilityInGame: 4,
            prospectChance: 75,
            layout: [
                [
                    [-1, 17, 16, 15, -1],
                    [14, 13, 12, 11, 10],
                    [9, 8, 7, 6, 5],
                    [4, 3, 2, 1, 0],
                ],
                [
                    [14, 13, 12, 11, 10],
                    [9, 8, 7, 6, 5],
                    [4, 3, 2, 1, 0],
                    [-1, 17, 16, 15, -1],
                ],
            ],
            cargoAcceptance: ["ENSP"],
            cargoProduction: ["PHOS"],
            placement: "anywhere",
            tiles: [
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAAD+ElEQVR4nO2ZH3grSxyG396nEAgMDAQCAwuFwMJCIRBYCFwoBIqFwIFisFAoBAoHAxcuHAgECoVCIHBwYCFQGBgoFAYGCoHzPHshnc0mTe+5t90k0k+SbZLfzPf+/uyfHnEg6euLnNoYADNPOf9xf3SIfex9UT2s5SzOCeYBiuPFOcn133vd094W08NaXj428xQhj5FCrP4YoOwRxM4X0cNabuYpUWuKe+4iGw+YeUoUSdLvd4z+bAMQRbL4jfMe734B7Lw1dhZcD2u54xoA+frK4nztO6PxPVJIet1TYGW81ZnzNI+L6nDe0/1+t5O9Vh5UD2t5yDQAi3Oc90gh3rze/PWDk2aEa7VxzpFlGZOLDsY4hDzGu19Fmzjv+flkuJnMK91zZcGGvdNc1h+p/2oTRRLnffGZFKIYcmWFChg/L4jjGGst3vsCQhRJjHEAzBe2cvOwAeDh4SEH6Ha7H17oqtfKWzVVHAt5DFD0NMC01sA5B/oeWRfoWhPvPWmaFpUwbLeA3RkPWgs8Ho9zAPHae1WCgJXxLMtI0xSt9Rvj5ffW2p0P6bUFbm5ucoAoioBqQADEcZwrpd4Y7/f7aK3fGN8nhK3BqwQRx3FuraXX6201PhgMmE6nZFn2LpBdQvjXwJ8FEcwrpQgQgqmy8d9BmM1meO8Pdxr8CIiy+SBrLYPBYGuWy8bjOAZgNpsB0O/3ub29Pfx1wP8BIYTIlVIIIRAiwftl+W9WwrbeD8Y7nQ4ASZJwdXV1eABB/wVEHMf50rxAylN0plFNhbXTdyFsGocI+2TpX3S4vLzcCYDjj/woZGMTRPk6QghBFEU451CqiTEGKSXeC5RSTCYTer0ecRwzmUyAZal773FOYJ8sSSzx3iOl3L6RCvQhAEHvgRiPx/loNEIIgXMOrTOEECjVxDkBUECAlfFwqlyC8q/fd5/Z4m/1KQBBmyBg1RYAUkp0povjKIowxhTGvffcZQ3SdJnpYFzrJSDnVBXb3KpKAASVB9XZ2VnuX+8Hyi3gnCngCCHw3vNgT6iJVZxgPEkSrLVYa6vc5pr+2EXQb2ettYcfk8lt0QJBYUAC1BsNgKLckyQp2gDAGEOnXV+LWZUqrQBYmn90Fv+yCp0kCVpPsXa6dl2wOdyC4bJxay2iborYo7tqb4wqBzC6mx99O2vljxjKlauUQkqJMaYwuDngthkXdZj9fDkCmDGvervVA4AlBIBO2+RAAcKXnhGE4VfWpvETqag645vaCYCgkLkAwvvlaTJkPgB4eX5m4T2NusHX7U4zvqm9PRUOswHAvyxBhJukU7V8WCIbTdzz086zXtZB/hkRJvqJVDy6Vca/9KUvfelLe9Y/PKiuZVKHbA4AAAAASUVORK5CYII=",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 64,
                                left: -31,
                                top: -22,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAACRklEQVR4nO2XL3LbQBSHP88IBBQsEAwIMBQI6AF8AIPAAoOAHiBHMMghAgoCCgwKDAoMBQwKAgUFBAwXLDAwyIwCPE9+3kiR1UqyM9WH1itr9/3eP+2OOBOL2TQ3YYCzrwB8+/l7dA47et909XCXi2jtgPE4JE1t747obbPVw10uYy366jpmt5kAkKaW8TgE4Ov8uRfbOt9kMZvmANEkYbeZkKa2eGbCgNCY4rd1jtAYrHMAhMZ07ojOFpdUlzSPJglJHGHCANhngYy1aCE0psiILkuj9UUl1UUA7KO/SW5x9rVIcRHnR12QMvFp2xFBWwu9zO/zNLWFcGcP9byvcVf81zqHCYPG4pNd1pa5Bf/szZf5fQ77iOquLumt8cU2ER9vM56WSesZ+9cLinBfABwL032grP41ZeKTXcbjr/aFC41LQIQD70TK2Flb+q4g3V+/X0bX4qGBA/R3XJqbH8WqKItA3QT1Oz7bYM33Z3cZ5wAtHKqjVYd2lv5C+PQpHj7IAPmOy0FFmlwV+pnvJEl5Ee2XSFcN7hTeberXuB+tOqGasjLQbIM1QK8R9yksloj7jek6ijHu9mjOH1fN+d1fiLcZAE/L8wkXRjriOtJlZ/c69Dmgaq7vGq+jMEQfYeWGZp07Mt4X81F6a6JJwp+1uyjhQm0PKLu7l0W6bP6Q6udpcKdQaZhcY5vSx+GlTWoNXcymedlV1uezCRdONjj5cZMvVl+Irm6AQ/0vs/SiU7yOxoZLs/zswgcGBgYGBgYG/nveALOBmeDuxiW4AAAAAElFTkSuQmCC",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 96,
                                height: 86,
                                left: -63,
                                top: -55,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAACO0lEQVR4nO2XIXDbMBiFv+wCDAQCDAwMBAoKAgoKDAwKCwYGAgoGCgYGBgYHAg0KBgYLCgYGBgoKCgoHDAwKCgICAgwECgwMBAR85wHHipPu2m1p7txNH7FOZyv/e/+T7IDD4fifGexq4aNY1O34R6p39jvb8uyFTd8f16IoySvNvMjtfF9NeLaippNxjR8iTUbuRVAoAIpqdc/51ax3Jgy3XeBsEtUajRQKTCO6FQ/gByEUas2IPvHXBlycjupC7+OLOT6Q6xApFIXeR4o5LOdaM/ytrd4Nr/70gbNJVF+cjupch/hi3oiEJgGAvxTfneszv21AK1yjyb0IKdTqujQhDLydFborngxmN+q5FyHJwDSiJdnavere2HG7JQDwQ5Lzm94dgPCIAa3wXGukmCOqGGlSAGtE7kVIk61FfXNLSKHIi11K2I4HXbn5FNTq3nBdHjEeLmzEpVCIKmYmKqTJHizU7fjmOLns3+uvxRaWJEkdLD4jqphReEupDu11JirGemjFh4HXzJuceK9Yi/4m776WvRUPMLj5+KbGy6xQaTJrQloeWMFpeUA8ulvf58sPnm5KwsAjXfi97noXW+R0Mq7jcA+8DHVvmribHPyQeHRHqQ7tQ3rYnAVh4K0Z0vdu/wr7GkwuZ4PjL1eDdOHbg8w7OEGajFvxAT1MWexH6GFKFI9sp6Ex4iWKh0f+C3S3xvhohlqsOt0m5OTb9YsU3eVJAd/fvq7bQxD4J0Q7HA6Hw+FwOBwOfgKCNhBLNNBARAAAAABJRU5ErkJggg==",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAAD4ElEQVR4nO2XIXTqSBSGv56DiECMGBGBQERUIBCIiIrKiCcqKiKeqFixYsWTT1QgEIgVT6x8YkVFBALxBBJRgYioiEAgEIiIERGICM7JijBDAqHt2ULonrO/STKBSf5v7tx7c8WFZN/9kQnRJEnWCNFk/vfw6hLvUftDrx++Z/pcm0+Stbkfj/+q9Z1qe9jk210WtjxIFU+LdemeBiBE01zXBeLsDwn7D5myriGeIYUAYNJ0saXkz2l48Pv9qDg3iLNNHvYfMpUk5lqbV+kEaXlADuIpWprfVG0JrXOBOPmk0c92toq6tDovpKtbY3ixUDiOrPzP16VtzjUEfb6vU4M42WTRz3YGUDRvtaaVRwBlXSPTOZBHwmgWkzZTM1/RfLFanHprfHiS4b2bAcjmnJZtAdBy8qM2DWUwJVkBpD6TpgvAaBYTb9SB6XNtjZNFwGsgikpXt6gkQQphjkVNGg5Y0uSGKgj7W+QjfcTJc0ARBFAJoxgFeivsw6hKkLArlftj/7ahOlsV0CAAus6SlmOxirq7alDIAUUVQexDgMMkeSwq3rs1zt4HFEHI5hz3RpQjoGIbAKXcMI3WrFDm1g8//39SKLPfgudSdOT3326oam07h/du1nWWpg/QJqEMogTFCphsHhm9bBj+lidKbXyxWJi5dXdprct5577bAODx8bHSa+3fAsN7N/vixYfVoEImWbo5pH3jYbjrJJeNrjnXphebNn4yMgk3URv8p18lz42PmPmoTF+wjYRSFGxNK6pXvKdC6PV219uxRG0QqoEUgnH8jLRtVJLwvFpw03IIvn7JhGzg/RhfwYUArBYpLWfXFFnSZhVVrzbsjPdUuCuf9oReXJjUdpFCIEUeOeMo5K7TYxyFdKw2HasNQJQuucHh8Xcv66wbFwIQ5x1fy5kC27Lo+UdX29ss8qqxNY/tomL2eok+UIiiVQ7CGG9uuBOSjmqTqA2Dp8kVXCAHQJ4HZHNOyw/M2FHj2/HiyqvY201mu6ac6lDvWG2EbIDt8ryccmNZJGoDcJADagcQBEEmtvv8tTA3soLcsO0i6ZfMSyGq88cW1Hh5C0Bn3TgwrnWxJJgkSWm1Gy+/AHgButYsH0xdpPCRdgDkK39o2jdRghWg6CPtPuPl7avGtS4WAWEYHq3NVc0T5B9Ub+lYqB/TRQAA6G3ged6r71CEUaUioGjaebdxrdoBDAaDDMBxHGAHAt6GUSUN6Pto9jm+Bt+rfRDw/qg4pS4GQEuDgMOoqAPExQEUdWx7nBPEpwKgVSeITwlAqw4QnxqA1j4I3/f/E+99cg0Gg6yYNP/XCfQP/m5f0103GRoAAAAASUVORK5CYII=",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAAFO0lEQVR4nNWZH3zrXBjHv3s/gUAgcCAQCAQKgUBhUBhcKAwKhcGFwoXBYDAYDAaDwWAwuHChUBgMCoPBhUGhMAgUBoVAoBAIFAL9fPpC7slOc5O0d1t73/cnbc85OTm/5/k9f5Lu8ZdgdU6WpmmQJHNM0+C1f733N86x85s2eudLSVr9lJgN73Z6pp3dTPW4CnXMNA0AkmS+M0Ns/SaSOLBCtOh9dY06vm1DbG3zYowXiaqoCwmJbRni0zdt9M6XQKlnJYoGqVNDEZ9tiE/bzOqcLNXfRU9WeVifa6TGYmUeyg22jdD48CYyq0N1HBcJyHUt1+fxZVQq+7JrtqGIf957YaN3vlRLWhFV4+r8aBoAsO94mKaRr68ir87L71bnZCnD7j3Q/vQCVep1Hioeugh1/TiclKql7D5153pPQ7WxAdTkph5G/d3291fIyPki6gxV5vHi2qKxVEgHbRoaa0NAlVjxcMVDj8NJ6R5yrXrwIjlJrE45VaV0eHf129pG73zpdy/XhkallaQlqzxkI5gk4dpkV5bZ6xLbuoSonqHqU5/rADTNCMdxcF/HHA0eS7n+NlhHvG4cyktaXTmrq/1FI29iQEsTAHT9LLLd1zGTNATA0x1ModG+Ha5wznNAWedWl3jKiKXGIp8rU4YKz3SIiEv3zmOdcgcMGrfowuLL42EtcdN28WKHuTaChcMomvJ02lkm8SJXhKbW8So8D27pnFxUEi+TbMv18zJXalRzdbzYH4ymAWmUkrBKHEAXFi/RPsHxAGEnfHsY4GohHesHk2ePSRri6RlhgJZ9wCia4ukOSbzAFBoXXW/p6c5bCBRb2KLn1slwnbw3KZWVsp4Owe1gxs98dQIOj0DYCYOHI9r7Twg74fLSyy4QNt5cW5G+NMgkDfN5qYC8Crz2r/fUGloX6yrqyuKm5IsVQBK3NJHLWn7O3DPaZ3OCR53+84zGEcSRyTj1cYwI4ignj7Dz7xNjgac7XH1/2lMTYmUVULurTRoTOV+WuDZRi1xraQLfc3G17OBpcM/dz4ibztvZBqHP/XnAfi/BFBqn3S6ePmT44ubEW7qey36Shlw9TDarAkWonV9ZGBR/bxIy6rick6VLejoN7gFwjAi/kQJZ7Pd/LniZudx9DTnpx9z1BMJOuOkb6KYHcQSwlvjGBlAN8ZGHlqrcUCT+MAzeLlpMCcOQb20Dr9Hi9PYJ19vn2B1zeJQtaZ/NMUWLm/aYL9c6J19sPN2prPvvNoBqiDJiVUTryqEa4x3rB6NZi4fx297xLPN8OP3JTQdsKzPW9bixcqb784D22ZzDRmOtx4t496NkmSIOm62Vx1tV7upzgkq8Gb9gewHRxAegnzj0DnT6zylxnPUJ8SxF07P7LOYzADTD4vFiTBSkdL9bhGH4Li4ffh9QpQhJPo3SvEGSku/6Gu7rGFNkRngRTdpa1s/H1mk2Fhk07fmKIQBuOyOEnRAFKd8GC4LJ4kMcPvWN0DrZS89L8qNoSst2GaUpLV1HWE8AxLM2+I0VI0hVnDW+fwpxiT9+H1CF2fBub0ZmiMqq8CtaTKHxIpp48YJRNOWoPWc0a2ELCwDBE/oigNgnxKB3YAPguYLmefrffCdYhKqIYq8uSxxAy85qdygMnPgtn4TCIAoCEDa2LTi+GPw/3goX4Xcvl2rCA/IeHd7qNYDt+xnpX7B9f2vEJXb2z9D918PlxFhAHK305bJxybFljxex8/8GL47bSycdE87t1YkdE5f4K//IAjyddpajaIpjRNjmwW8vKnaFfwEbJyluvU/yBwAAAABJRU5ErkJggg==",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAAD8ElEQVR4nMVZLXfiQBS93ROBQIyIQCAqIhAIBKKiohJRgahYsYIfgFiJQFRUVFb0B1RUrKyoWImoQCAQERURCMSKiAhERM7JCs4Lb15m8kEJvQYyM5m8+74nucA3oTOepkq1EUU7KNXG58vjxXfIcfaH9iazlEjzX8K/t+ezynS2h3GLc/AxpdoAgCjanU0RjT+EiAPQiErr8zV8vGlF/Ghq4854mvYms5SuJdHF61NGlq+RXtIZT9POeJrtc2qcXLtE2mRZgrR8kTdInNojTraZtJK0pC3ptXYO4naizQNmhTURGl/ehLI6YI9jSYDWXXsDvK8+ckqx3dOERxydA3qTWcpLmoRtnM9/BGsAwNVlH0q1s/U28nye/stcUxdO3Ru4qxdZSAotwdcvN77RW0zPKZLrmIaqsgJ4cuPC8OvR4EojQ/MSRYoyWVyulcriIANVDY3SEOAuJoWTQi83vnEPWssFl+SIWJHnyFxDeHt+yK3tTWaVyqdVS3SzzUJduPCjTWmyM2X2osRWlhC5DEW/HccFANwN9k4+n8+NXHMhIIlb/6u8sPE2BgwhX+SynKRcS0q2yWALxY7jZsS9zyWU6+DPr9sUAH6+vmuKyC7k6ewYC9nGTPt24WKLsLQVruo9ZPFB34PnbDBKAgRBuL/HdRCFiSYfKcLhddyGxesTxtO5JggXxkT+2htkZc6oVKWPy/7gI1gj3saIYFeQUm20di0AB1cHNhiGK0CpjHgUJujf+Nj6A7hKIYwirO4nKcA8QLawnGAVSxR5T9VSWVTu5PNljHufy/2v52b3BEGYEY/CRJsb3r9caAogmJJfYS5APgTqki/ah5M2ER8lAQAgjCKNB7m857kIoyiz/OjpzZwDJORJrqwxoXleHeTaKlVCZnEJbnEix+Pb81wEQahZGzhYXKK0WeC11BQG8rpKyPBxOSezOCFILuE5m8zVAaB/48Nf9DXyZG0ARovXVgCh7I1OUeUwraMxIO/idwMn59pEijI7gSzOrwG7xSVqn6TqHnvrxDgnHwShVr6U62Rx3O2vc5Ynt69KnHD0UdLkEbfDa+14ywmazgkAcm5P5Cl7A8gIK3cfFuQNHHWJE778PsDmEUQ+3saI20luzlbHh+FKS2qmOAcOoVEW42U46RuhqqWTE3/srrFyh1rnZoOpjn8VJ38nKKuGJG9qYIgYuT5ZnOKeUCWr10XtFyJloHO4VERr10LHaeUOKa6o1/H2BsDeE+qUs2Nxlu8CvK4Pw1WWzalH9xd9rZzxOG+KOOFsX4b+/h6nwN6qvFOTpI8tZ8fi7N8G6VwO5JsYIH9ebxrf8kUWOCiC2temXd2G/9T63TcepVDbAAAAAElFTkSuQmCC",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAAFi0lEQVR4nMWZHXgjWxjHf90nMDBwYGBgYKAQCAQCgUDhQqEwsFAoFC4sFBYXChcCCxcKCxcKhUJgIRAIFgKFhUAgUBgYCAQGAgN9nlw4854585Futx/pK+k5PWfm/P/v139mDvgg86OLrVIuabpBKZflzfeDjzjH3m/aPv+2FdD2r9hq/GOvZ9rbzWyPA0z61wCsV8ecxwEASrkApOlmb0S8+00EOFADD5oATynWacrXtF2Livcm4t0uXs1xG/x86dBtZ5CdgjMCNBGAIaFq70XEm1+0ff5tC4W3q96/CRM8f2oA2yaR4CnFWezvhYg3u5gfXWztcbW4KeVypZYGfJLe0R8o7mcp3XamoyKMwBmV6oJ9rfdIjVdfRKo6lL1tH1Ypl9v2FQDzpQNAoI4A8PwpZKfa81ZkeEpxMnd3dgux1xLx4s12qNuHlDkoPDfp6vE8HhtvCwFinlJmDUA3jEwaVElous9LdcQfb5JQbzpUNeTTdMNQ3RYh3s6Mh5P0TgPN5+yxTZDdInfVFaVcnI1DTyVcX1//EaZnL27yeBXscbfPfbworZGqH6gjPH/aSIQ9FrPT4TwOaqDt+9oE/JWtADi9nTwL228XVfv4U2EoJv+/bV+V+nzQmZOtV8bjtvcDdVQjw/OnQKEVTuZuDXiabvBbnrn392DOLMvobFo8tPtcXl4+ifHTU8Cr6s2+cYDXSITMXall4dW819/P0hJgKYgAQWeutUFunlKQnTJfOoaISbcM2tk4Bnyv2+Zzt6U3rxMAsvmIyy/H2+FwWOpQttXYacpxG+CueQBn0yJzH5n0r0t5HagjPKVqRVCIMKCtFin7xEyNCCP+XoQF2BzoIDg043T9yMJ9BKCz0etkPPxvWsJsBk3Kran1/G5u0r/WnovHdMOo/Jt72G51mrnR7s6Q6wIZz+OxIfThYW2ADRyHWfKQbwwK4FlsxjYpUiM+tc+/basipmp3t1co5TYWP7A0ft7u1mlqfrthZMZiSXrXCN7zp/p/+a+AlxTAGRnw48UvFllM5PuwTsz1Ok6oz+YVgFknmog8NRZZzOjsZHv5ubM1EVCVsALwqdYjUXJ26OI//Fur5qUUqBQ0IUjC3oDM10jBtCPDSOVcPI1XKw3KCww4vTCohX5xcb1eUsEUweXN9wNbTDyV67adHbpk81FpzlNKV/QwohtGJOmdKXieP9UR4YwMQXbLk3X3sxTQukDWmT25cox8n6jTK0jwtGbobFossphFFmsi1gmsEzqbFsOfiwO7DtS6wGr840Dkpd3a5G977qLnk81HhG6i83zpGO/2BzpfcUZ025kpfmSnenN2WjwRUtQDqROyfr06LpHQbWfgjLSmyFWjiYCciEUW03FCBsEhymvRcUKGPxcHtWjgmTqgSoLt9dBNmjfmJtW+aU7yWepAf6BKYW/W+FPG8REDp4giWX8/03VG0kFqwMJ9hHXC8OfiSYzPVoJVTXDR8wGK8K/mIQU5clDJ5aAzL4W4sTwaTKW3lKNYtU0m6R3xJijOAM8CLvbiZwGxJ0kRE3K8gDC7N9NG/eWPwbZMFvBAba4GXO5Bvc//zl78NFiNCICT3oDJr5npDDUicrPTphtGQNERgFInkTlbNQIavBV1z/V41V79PmBXRJRIsCKAdULoJqXaUEoDyq3SFDp0Ko2meRF+ocer9qZvhJoUpHQK22oR4IxM/tuiSfo+aE0RO/1aH3+tvfk7wWrXSNNNqV1WnwHsgmibHSF2rr801HfZXt4K21HQ1DaFjCbAYm8NXOzdvwsMh8PtzlbZ0DpB6/ldT29vbXv7MjQ6O9kCRqWJULFJ6DiheXp7b+Bie/82ePnluOgauXIT0H8iYN7KPuSLLMD0a7SdZbr9Rb5P75+bDznL/4m6I59YUtSyAAAAAElFTkSuQmCC",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAAE90lEQVR4nO2YIXTbSBRFb/YICAwYMEBAQEDAwMAgQMCgIKAgIECgIKBgYUFhQUBBQEBBQWFBwYICg4CCgIIAAwODAAMBAwEBAQEBgQE6Rwu0M5bkZJM0TrznbL+BLWkkzXv//Td/DL/jd/yO/3McPNeDX01FAzBSAUmRcj2vnu1dT4mdT+rVVDSnoUNRjaioAChqSIq0N+6/QsjOJnERR40ubwDwfbd3La18nHINQC5CYEPIvol48svP4nEDEIjMZj0QGWnlE4jMjiuqEYYg6BOxTxL++NUbz+Jx8/WtbFA+AKkbWckD5DKiqEb2WIkE33epZYgrJwSOsNeMX+wjHk3AWTxuLuKoEQgWTkygFwDkdUtELiMAvHKBEom9r0tGRYUSCYEjGKkA2B8JDybAZDyXbaYrKqJ6RupuAHe/A5GRuhG+1/qBUYdA2NJQIuFQtr9HKtgLCffW3lk8bgSCiopVHTJ21ltjchkRlqteCcDGF4qyZOTnpJVvz0NrjrqsqYQD7McY73zR17eyMRMGLPhcRnhOBkWGIUaXNa5sQaB8Ar0grfz2upJM5Q0364BJmJLlGt9zyXK9ZZTQlspVvgJehoitF5yfnzdlWSKl3Bq8XC6tAgx4AF3WKCl7CghExsKJ+yXRIRRgGhbM16q3apjvlyLCPnj09sOD6u9Y1QC46RVAP/uD6JIEgPIRRXlrqQCWIIFAiaRXIs9VHgf3AS/Liuu/PnPy7qx3/ljVrNdrwipps68kFJkFNMy2iS5Yo4DutaFPQLvE6nUKsHMythRQlpvsSCnssZRieC8Ap6GgLEvc9MqqIZeRlX4XTDfDw3KxhP3jIWb80COSzLO/l3pz7VfJ2LrJO3nXwAb8kIR/I+Q0FOib771zqzrkWF5bQHC7Qsw5Qftco6jb/KFLpC5vntRV3jm4WxqGiLuOu3EbCd0Ygt8iQ/mscpfIyXtlZVRlVGaMUomELNPtGBE+moR7BxpFwCbrQxV0j09Dgbf+ZFcAA9AAGNa577nWB0xpdE3QlIBdOt2o5zXQ7zLNfuNaOw8i4t5OML/8cpBffrEP6nrEXX4h6ilHOgc2svfKBe7kjQU1dgOAngmaqJS0AItqRFr5zNcK33MJ9AJhPvUUoNdyu3KCKycPVsGDW+H88stB8u3izoeWZYXnbMD8dD0L0mSqWxqVM7cAzDjbLhelbaGh7RegJSutfLuXSHV73uxClUj4MFscfJgtdlcCd4V38q7pZh3AcxRx5IEu8NafAFg4MUc6Z6VT2xwd6ZyfbuvmUT3rgTDyH56bhGmvaRqWyZ/fyt2sAo+Nrkd4jiKeOITJwgI2EzSeMHYDVjoFWmMzpVI5c4DeSjD0gWGPUFQjHpPt22JnXdUk/tjEkcdh8ZEs11belTMnrXxWdcgbUdvjYXTbYmh9JNUFSiTW7WFD0FOBm9h5j331/qQpixrpL1mKd1tqgDaDop7arC+ceGs32c36LjM+jGfbZJzF42YaFqAjluqQMFmwHkXobA5FxjQsmBXHxOoHZXbISqeM3aCnkK4f/GqN3xfPvt38fnrcSOUwqxRHOkcqh6U6RN98t0ownmAilxGx+sF8rTifrZ51ji/2x8PV+5MGYFYpvHKBUcdca9vydpui5wZu4sX/jT2Lx83YDZD+kjI75Kfr9Qh5/fnyRee0t7+jux6Bu+D1Rb6XufwNLysSKGcLQzYAAAAASUVORK5CYII=",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAACcklEQVR4nO2XIXPbMBiGn+0CBAwEDAwMAgwCDAwCAgIMDQoCCgYKCgYGAgYDBwP3EwoKBgYKBgYLAwIKDAoCAgwCDAQKDHLnAfdT1Et66bau5+z8EJ8tR7n3/aRXn6Gjo6Ojo+NkSMdenY69+rXme/daE70F6dirB34fgH7PA2D2ffFXGk7CAKm4Kz6J1nbcFEM+XP/4Iy2tN8AVL1UX8WGkyG9jALTfw5Tb3zai1QaI+FRtUTqhr3x0uLTjphii/Z69D+M7qiKlrH6SzTcv0tY7/srbI8KzILbPmqqv7X0YKWBJGKlGtDEAlMbg64xvF2UNHF0RrVoBzwkvNhVhoOzVFEOgWfaoBWGkKPJkb74wvuPGzLjO19xfzQ9qff8vhPwJh44237un2FT2PgwUgN0GYXwHQJEn+Frv3nOeC4PLWR1Mpnv/0RoDoAm6VG0B6CvfCh6Nta26XIUwUvhaUxqDKZvfFnkCarE3v9YewWRaDy5n1ohWGeAiVfa2Y4pVhQ6Xj/u+ES3h5+5/2RLNwAiA7GHBRdwHwJgHtG5OkmAyrYPJtG5NBhxKfOCJcCG/jdHhElMMidOcIk8w5ZYo8q0ZFrWAasRnMwB2JkgmtMYAgE+TuIZdl+d794zGmmJVNUG3avJAzn8RLFvAxTXElFtWydnBMGyVAcL8fPQkrJJobQ2QqgtuIwSAWuCrbM+Q7OvNQa2tNMDFNeMs2wBNyEnSw+OWeOwE3cbI15rhl6vT6QOOMT8f1W4bLFvDxT36nqu6y0kZALsVIfkAPDFCeoJjlRdOzgBBjJB8EOKP6//nY+gluEa89AOoo6Ojo6OjA4BfrtcAfYnSiEAAAAAASUVORK5CYII=",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 64,
                                left: -31,
                                top: -22,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 64,
                                left: -31,
                                top: -22,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAE9klEQVR4nO2ZH3jzWhzHP7tPIBA4ECgEBoVBYVAYFAqDwYXBhQsvFAYvDC4Mhi8OXxgMBoPBhQuFQeGFwqAQGBQGhUAhEDhQCPR58kJ6Tk/SZGu7roN7PtI0aZLz/f1PChaLxWKxWCwWi8VisVgsFovFYvn/cPCVN++1nOzFaSGlBCCKor2vx9n3DQEeLnoZwM/wBYDT01NG0S+I9r+WvVq87PEfp10A+okkmITcjqd7j4A/9nGTh4te9nDRy16cFpB73GvmwpM4ot/vf1kqfuqN3/L4ZPbC+Fee892Ol7WkYCwkw+fZXo3xKTWgLsf7iaQzl/Sfhlrk9/NW9ppEjIV897rdjpft2kA7vdi6Oa6EqM/v563srj+uXUu342UAR/4hAIeOx/V/o52sfScXKXu83W4zin7R9I7pzCVXT8ODy1aQbVPkuh0v67pzXHGs9x03IwDktM3fj08f0vChk9fJceXly1aQbZrjb4k3+Yghtjqp13Ky7sm3Nz0OeX7f9ccH3Y6XHfmH3PXH74a7okr8oesDMHOe8eYdAEQQFs47u4k30rTRjzfp42bB2kS03nbnxF6TQ8cDcvEiCCE9QSZzZs4zQcNlGqd48w7Npk+yWBfuaG1DrPWjTXJcVfV1Q90UrYQDlZ4X/qJpuSNtCBGEyGl7eXxxTHH28+0ZY+MUeLjoZSrH/TTRQtfNcbOivyZRvm8h2vS4Qnu+jDKA7ywjQnQB8IVg4DQBeBzNkM6MuH9bua6N54Akjgp9XIma+4IjBEPGlecp4V13zjB1CuKV8EPj9773mm8scp30BF8IknTANE4JhBERoMUDDLwTHof59aUzQwgPzi8zYMUQWxVBs7gpj9cNKaZwM6yrSOULrjjWXpfTdtH7htcBpnIILMWHwRmP4wiSXDiAEB5SFreF8Hh9uDnYygCbDi9njVZhf7mSh/GEdqO5cn4536dyWPBymdBv8ziZ1YrX1xV5iqn9O5+7y8J1ATM8qj1bUdGDhrssasr7i/CfTJJC2BfEjxZCfbSX1acSvJMI2FQ4oAUCWuR75HneLe40KrxM5kyO8m1V6BRVotV+JVyxk4eht8QrlFeDioquxRoCA5GLhGU6qOI3lUPio6ul11kNbfNTCY8r1v4hA5gFTmGKF0GoBxWzX+soSE/AHS3bl3sGi+BIpNTCfSH0kBP6bVAh7y+FInMjKEMo4v5tpXDFVilQntiAleptGkGJVobQRlAhXhpefCEAdM6rah83r8D1eRxGur3VFblyqNexVReAfJBpzCa6tSnxZiGrGmCUcVQXqCpqJlM5zIUDt2GMmHsr+W4aoW7gqWPrInjz14mOgtppDVYrPxS8DRQqvMp7oFDk0jTFDVR+sGKEdT1e5sNd4N9vf2pDKIGFFFh4WLU79eAC6Lw2h5vQz8+NaPI8esmPL8S6M0cbodzOtmVnbfC+JzKzvZlGUIggxHfPmEyS/HtJNMD9MMF13UKBM8NehfymoV7HzgehwXWj8HQnp22aTT8P8UWNiFs3+cE0AdfnfpDP/a7rLoXOvWKV52OhXsenvYEd/HOewbKXz5xnLfz2eYw7qy5+BSNUTG675tNfQQ+uG1no/9Cty6SujZkT3K5CvY69vYNvnF9m5pBSFg778XiZvf8jc9S7zqoeTxX7Eq74sr+kGosXFJtObhaLxWKxWCwWi2Un/Ab8zjSYUSvlCwAAAABJRU5ErkJggg==",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 64,
                                left: -31,
                                top: -22,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAE30lEQVR4nO2ZLXTqSBiGH/ZEICJGRFREICIQCAQCgUBUICoqVqyoQFRcUbFiReWVFRVXVKxYUXHFlYiKigpEBQKBQFQgIhCIiBGICM7JimHCJPw0UEr3nJ3HZDIhJO/3OwxgsVgsFovFYrFYLBaLxWKxWCyW/w+lr3x4t+YkI6eGlBKAMAxP/j7OqR8I8HjdTQB+DEcAnJ+fMwhfIDz9u5zU4nmPfz9vA9CLJP5kyMN4evII+O0UD3m87iaP191k5NQA5XE3UMKjWUiv1/uyVPzUB+/y+GQ+Yvyicr7dcpOaFIyFpP86P6kxPqUGbMvxXiRpLSS9p34qXAteBIJ+7/QpcNQH7pPj3y5ryd+9cSk/3kW75SZ6fKxIOcqX5D3eaDQYhC8Ebp3WQvLXU790U/MTbQDT80XQwjtntcy8575x/Sg/pOFDNxfJcf3yh+S46fG8+HoQZs47d7ODtBx0U7fmJO3m1U6Pm5/fx+O7RIMSPp3FuIsWwh8CIKcNNY6bdH7s11H2+nDRHNeCv13WkrcoLOR1LbzqVag47tp1z33DPyuvJuImlAcQN5HRAuGpei6jBQB//HwqpK1QFyhS1W9qfuq5qlehz5h9ClvVqwCsidehLqctQHmcuAnAdBbjC1LxU9nH99oA/NMVibtovWuInRc/s4/nhUNWvPa4nDaUwKW3KQ/wyh0iKfGEIFq+mxkF5me1sbalxsbJIlXdzGstZh/xWvjZfEJZ1NeE59GG0CGeitX3LY2RMQQrw+hj3hCZk0P7+D7kc91z3wCI5lUqZS8tbKnoZXHTTGUfX7TX8j5vkBcnyJyfLyaZufv7+xIsa8A+Oa69V1S8WdVhvbLrMHfLZMSnxM1MqLuLFqAiYOh3ll+iDo3pM0OvAcDTYK4mPXUQQYOnyTz92mr3NgEo1ev15Ng5/l4r09SDEOJm6tWp7GfamzYAkMnnod/h4XWMWLjEcWw8t8FgOEY6c4RY7yQmb493qwjYtlbXVL0KY8K0ur8n3BStQzz1XN7L5UE6VLlv9HYzrOMmQ7/Dz34IkxDhuUg5R/jqCDAIs+KlVGN9XQg3Fa4p1ev1BKC1iNZ+j++7gNnk7UrZy5wLf6jal1HoVDtrQ3mAnDYIAi8NeVA5PqlfKPEeGUF6bJ5vms8L1zij0agE0DL6eNE8N0P9W6UNQBhHqWjl7XBVzJak4o3wB/DKHSSRGgsBQCRlRvwmtGAt3mTWeyjNdmhIBd7U/KRIjueLWtWr0HYrCH+YEZoXrZevc+c1YwAt1vS4Fv/sNpVwSMW/53FtgG0ez+Nob4+j93PcFA1q4VIPQuS0kgo2hWvRAC4qIgSr0NftyxQP8MA5g+EYCNOc3hb2eYoK1xz8a/Du92Zi9m3TACZ5o5g9HbLeBjKhnve2OfdecSvKh/cDnm/PElO0XrbqOV3J82Gu0b3cDPVdwvWcDv1DhWuOtiP06+oiya/G1patRi8HVm0NkM5mz8Jm8bPew39nR8jk+c/LZNf1od8hGD3xXaqWaeb4tqJ2jFDfxqdtQmpDeEIwmUQEgZdW9bxo2J7bxwr1bXz6Luyvq4vE9LbJpoqej4Jjhfo2TrYNfXZ5k5iLlE2t7BQez3Pyffhq9zbZFOKaUwnXfNlfUmeXNwnsv3KzWCwWi8VisVgsR+FfTmlq5yW7WfwAAAAASUVORK5CYII=",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 64,
                                left: -31,
                                top: -22,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 66,
                                left: -31,
                                top: -35,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 66,
                                left: -31,
                                top: -35,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 64,
                                left: -31,
                                top: -33,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
            ],
            callbacks:
                "const type{\n    level_requirements dict\n    random_prod_factor dict\n    supply_requirement integer\n\n    accept_cargo_types cargodict\n    prod_cargo_types cargodict\n}\n\nlocal type{\n    total_delivered integer\n    current_production_level integer\n    random_range integer\n\n    i iterator\n    level iterator\n    cargo iterator\n}\n\nindustry:storage type{\n    supplied_cycles_remaining_cargo cargodict\n\n    base_prod_factor integer\n\n    num_supplies_delivered 27 list\n}\n\nlevel_requirements 0 [] 100 =\nlevel_requirements 16 [] 150 =\nlevel_requirements 16 5 * [] 300 =\n\nrandom_prod_factor 0 [] 8 =\nrandom_prod_factor 1 [] 12 =\nrandom_prod_factor 5 [] 16 =\nrandom_prod_factor 7 [] 20 =\nrandom_prod_factor 10 [] 24 =\nrandom_prod_factor 11 [] 28 =\nrandom_prod_factor 12 [] 32 =\nrandom_prod_factor 13 [] 36 =\n\nsupply_requirement 8 =\n\naccept_cargo_types ctt:ENSP [] 1 =\nprod_cargo_types ctt:PHOS [] 16 =\n\n\n/*\n The following is a replication of what FIRS is doing for a primary industry.\n See: https://github.com/andythenorth/firs/blob/4.4.0/src/templates/produce_primary.pynml\n*/\n\n/* Get the total amount of supplies delivered in last 27 production cycles. */\nfunc:produce_total_supplies_delivered def{\n    i 0 26 [..] loop{\n        total_delivered total_delivered num_supplies_delivered i [] + =\n    }\n}\n\n/* Calculate current production level, based on delivered supplies. */\nfunc:produce_calculate_current_production_level def{\n    func:produce_total_supplies_delivered ()\n\n    level level_requirements loop{\n        current_production_level\n            level_requirements level []\n            current_production_level\n            total_delivered supply_requirement / level >=\n        =\n    }\n}\n\n/* Set the number of supplied cycles remaining per cargo - used to display 'supplied' (or not) in the industry window. */\nfunc:update_supplied_cycles_remaining_per_cargo def{\n    cargo accept_cargo_types loop{\n        supplied_cycles_remaining_cargo cargo [] supplied_cycles_remaining_cargo cargo [] 1 - 0 max =\n    }\n}\n\n/* Shift the array of supplies_delivered values one place to the left, and zero the last entry. */\nfunc:produce_256_ticks_shift_supplies_delivered def{\n    i 0 25 [..] loop{\n        num_supplies_delivered i [] num_supplies_delivered i 1 + [] =\n    }\n    num_supplies_delivered 26 [] 0 =\n}\n\n/* On arrival of supplies, push the amount to perm storage, then clear from stockpile. */\ncb:production_cargo_arrival def{\n    cargo accept_cargo_types loop{\n        num_supplies_delivered 26 [] num_supplies_delivered 26 [] industry:cargo_incoming_waiting cargo [] + =\n\n        supplied_cycles_remaining_cargo cargo []\n            28\n            supplied_cycles_remaining_cargo cargo []\n        industry:cargo_incoming_waiting cargo [] 0 >\n        =\n    }\n\n    /*\n     Update the production level immediately, so that production level text immediately updates in industry window.\n     Production won't actually increase until next 256 tick production cycle.\n    */\n    func:produce_calculate_current_production_level ()\n\n    cargo accept_cargo_types loop{\n        result:inputs cargo [] industry:cargo_incoming_waiting cargo [] =\n    }\n}\n\n/* On 256 ticks, if supplied, produce extra output cargo at appropriate multiplier. */\ncb:production_every_256_ticks def{\n    func:produce_calculate_current_production_level ()\n    func:update_supplied_cycles_remaining_per_cargo ()\n    func:produce_256_ticks_shift_supplies_delivered ()\n\n    cargo prod_cargo_types loop{\n        result:outputs cargo [] prod_cargo_types cargo [] industry:production_level base_prod_factor current_production_level * * * 16 16 100 * * / =\n    }\n}\n\ncb:production_initial def{\n    /* Highest value in random_prod_factor is 13. */\n    random_range industry:random_bits 14 % =\n\n    level random_prod_factor loop{\n        base_prod_factor\n            random_prod_factor level []\n            base_prod_factor\n            random_range level >=\n        =\n    }\n\n    /* Initial production level. Can be changed with cheats. */\n    result:value 16 =\n}\n\ncb:production_change_monthly def{\n    result:value 0 =\n}\n\ncb:production_change_random def{\n    result:value 0 =\n}\n",
            type: "primary",
        },
        {
            id: 9,
            available: true,
            name: "Port",
            colour: 186,
            fundCostMultiplier: 152,
            probabilityMapGen: 8,
            probabilityInGame: 2,
            prospectChance: 75,
            layout: [
                [
                    [-1, -1, -1],
                    [-1, 1, 7],
                    [-1, 12, 7],
                    [10, 1, -1],
                    [24, 16, -1],
                ],
                [
                    [-1, 6, 13, -1],
                    [-1, 6, 2, 16],
                    [-1, -1, 4, 24],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                ],
                [
                    [16, 7, -1, -1],
                    [16, -1, 9, -1],
                    [16, 0, 11, -1],
                    [-1, -1, 5, -1],
                    [-1, -1, -1, -1],
                ],
                [
                    [16, 16, -1],
                    [0, 11, -1],
                    [12, 8, -1],
                    [1, -1, -1],
                    [11, 8, -1],
                    [-1, -1, -1],
                ],
                [
                    [16, 2, 2, 2, 3, -1],
                    [-1, -1, 12, 0, 7, -1],
                    [-1, -1, 11, 11, 7, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                ],
            ],
            cargoAcceptance: ["PAPR", "ZINC", "FERT"],
            cargoProduction: ["KAOL", "NH3_", "ENSP", "FMSP"],
            placement: "on-water",
            tiles: [
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 50,
                                left: -31,
                                top: -18,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAyCAYAAADsg90UAAAG5ElEQVR4nO2aL3TbyBbGf+4xMDAQEBAQEBAwCDAwKCgoCAgoEDAoCAgweGBBgUBAQEBBQUDAggcCAgoWFAQEBBgsWPCAgECAgYCAgYHBAAODnKMFzlWvxpLjpE4Knr9zciLJ0p35vvtvRjbssccee+yxxx577PH/idbvGjiKosJ1XebzOa7rcnV19Vvm8uaDjkajQo6FvD5+ayHabzXQaDQqHMchyzLE8wCO42CMKY+jKCoAbm5u3kSIVx9EiNvQQsj/MAzLz4A3iYhXMx5FURGGYcW7xpg1j8uxQISQ66+dGjs3KjkuIQ4rT+rw17BFEMJy3a4Tu06NnRmL47iAn6Gtw16ISIjr+zZBR42khWBXQvyyEWlntofrPAuUIhhjuMt7dD2P4fIbjufS9Xwy41U8r+3o9BCBLy4ufonDix+Wag0rUraHgDUPC6npICb/J8HxPZZ3Me+DB9w2pQgASd6pPCMQoXU0GWNeXCOe/ZDkuA5PoJyUCGEXMkE+bbPsRQQfBqvJ51MAlncxc/eYL71bgEo0aBtNaSOfPzc1tr5Z2pldne1j+1wEkrCGkHyas1gY2oOTihBmOqNzf1FGRHL4g87daW1N0WNp4aWlbivEu22Ix3FcaC/KQEIwDMPSA/Z9xpjKhGe9IwI/4KDXpzO5Ibv8A5NPOZg/psRBDGbOj84pJp9WhNXtU48l1/W9URQVUpg3oVEl3cfrCpJGXZUW6CiZ9f7ATGc4vgeAN7kjn+YsexHHPbhdeOXnEg2Hh4e1awVB3ZpBzxdW6dkUEWsX4zgu9IB1uW6HuxC1va+vn72/4+v/jgCYdIcALGYzAPxBHzOdsZjN6Hoe3vSKNE35+PHjxnWD7gqavIxrw3Gcta5RntQtYOy+bVde+36dFroY6vwMgoAkSUgWH0ry3uRPksWHkvzMH7H854zhcFh51hZco078uvEF0jVamrjcXKe6iCBGdVTUrdhkQFtQsf+f8Dv/zY6Zz+cYY8jznCAISNOUIAg4PDwsbTelnl1sm1qxno+9XmnFcVw4jkOe57WkhXhdVdcTsQfVduzJ68kaY9Y8/pQD7Py2x21KxTqb77IsI0kSHMchCIKKAbu6avKO45R/YRiW94RhWN6nicq9ekKu65KmKZ37C4bDIcaYxj5vCy7nemzHcWpTUnOyObSCICgA+v1+hUCe55UJ25PQRmUwu/raewA7VWzU7RTtCTelgobuDHW2gyBgPB4Djy9EAn9OmqZrRrQQTRPT/d9+0WF7XexqMfS1JkG0nU2CNhVCsSPEsyxj4GWMJ+5KgO58AbgcdHIsHUohJJTtXR1UU8SuHXXEbfv2Mtp13TXi9lgaWoSm9pckSYU4q6VI/SuxpyKibnJ1oarf9Nht1Latc1pgr0fs63ZLtBdrdR4X4tli+VOAhduF6c8JbRMRTV1AF0A9Yf26S47txZV4fpMdOyLq0nMb4oI2gFmEgCmFsAXZJjVkcHsyNjRJfc2OIE3+KZtaDDvUs26VcNjtkANmcQAY2nf3GdHnMzB/lUJIBNjYJERd19Co855Nyl7I6M/m8/la/RHBN3lcCIvnk9mKozEGt3/Mu1633QL4ePK1HGza6QOPkaAg5yshUtI0Ra8jnmpTdTkt13QNsPu53KujR4hnWcZ4PGbgZRX7dqivPA6z7nv6UUw/ihlfx602wOT2W2tyC71PpwWAuf/r8aFqatjYpn3aJGTyTekhn9uporuIDnWne08+9UuP29AeX/qrzdj1+XG5B6p0gcnttxbA0eiy8HyXv6/PKkLYqbFNsdTrCP3fXtbaC526a7KR0qE+8KohLv8lx40xEEYrfj/O13a/tW3w7upLC+Dk/HvRbq9uGV+drlJjuR4Rcr5t17D3FnKu79Hkn1PVNXFvcILnuxWPbyWAQD/Y+3RaNKWGRMK2QuhdmaDurfGmUBfidlU3xjAYngJwdfb5yddiW383OLn91pIa4XkeZnzZKIRgkxBJkqztH3RVfyrUBTrH+1G8NfFnCyAiAEyAyeKhADg6CBuL5TYRobtBXajbfVygPb70jwg8b2OoN+HF3w5L+zw5/14A/H199qKuod8S1eW44KniNnkhj1/+evz6/LjV+3RadA4+s4SNCyo510JIL28qbnU5vk1x2xa/LAD8TA1YFUsRoqlraCEG3sNG4pLjnTDCA/zAe1aOP4WdCKAhYgSHXwoDYG4aU6M7X4DvAM3FTYhLa941di6AIB9ftqAaEXVCbOrjS//o1YgL3uz3OP3heWGSa0BtW/05A99hPFH7+MfCltas2l4Db/4jqf7wvPAch8n4srKB2mVhew5+28/kjkaXhR94PDw80G63d1rYnoN/AaWE8ZqnlxX4AAAAAElFTkSuQmCC",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 84,
                                left: -31,
                                top: -52,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 84,
                                left: -31,
                                top: -52,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 84,
                                left: -31,
                                top: -52,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 4061,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 39,
                                left: -35,
                                top: -15,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAnCAYAAAC/mE48AAAB1klEQVR4nO3UoXebUBTH8e92IhCIKyIQCASiYiICMVERgUAiIiImKhD8GfkDIiYmKyoqEBMVExEVFREVEREVERWIioonEBOInsMEJd2yU9ETGOz0fkxOrnjv/u57PFBKKaWUUkop9f586LuBQ3EcVwC+7+9ry+Wysz4HM4DQoXJ9C8+CvKxrI2MDMPt6SRRFnfT6sYtF3yJ0qM7PpHJ9a1/zLDCm5C7OKH4+dbp/bzcgdKhOP9Wh8xJOnwdwdVtg4mvEc3lanODJmOvSJs/zTnr95wP4/apDHd6zYPNQ/hV8Y7kURdFZeOhoAG64rGzHYXf5Zb9+c+JN4OY7N6af4I1WN2iCH/qcJ4M58UOtbPRacHHrWvI4Y31fH3nfJ35o1MYikbfjZr1iFJwBL8Gt24w0Ddmdl38EtxcnuDJm40y4Lwry3ba3x7iVAQDYtiAPN/g+hJOQLNuACACr4AcyG1bwxlEDmE6nlf94B0AwEYwRoABgPg8wxmCMwb6YDy5446gBBEFAnm1h9R2AcTQDwBgDwPbbov4/wOCN1j4BsUewvgJg+/y7f9wGGLxxVGMiUiVJgud5QH0jANI07e1Vf6ujGxSRSqzipWB5/0VwpZRSSin13v0CRFfW5gkBg4EAAAAASUVORK5CYII=",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 4061,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 39,
                                left: -31,
                                top: -14,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAnCAYAAAC/mE48AAAB3ElEQVR4nO3VL2/bQBjH8e+mgAMBDzAwOGBgUFBQMBhoUDAwONAXEFDQFzBQYBAQEBAwMFAQUBgYEFAQUGBQGDBgYFBgcKAgIJIHrHOnVpW6JXYNng+JfJH8PL/74wOllFJKKaV6wybT6uRiUXVR61MXRd7LJtNqGIavxreLi9b6HLT14n/xVnCxr8eO7XPrFd4h3m/ZZzfNs9gQsSHm/pars5L5fN7acejFBIgIw6EQFnfssxuuzkrC7QoRAeBhfs1qtWplEj70CCQhlY0NgyAgCALKssQ9Sf1fEgGwvr7ESsB4PG6lhw/5CPrgkQFrDZvfOwDi8x/1bxw3wZc7g3OOPM9b6bXTHeCDj2IDUAcvdpTljvLbmsfAYmcj9hKQGcv60ZHn21YXqZMdkIRUo1ODtXXwoqhXPCvq4BLVwbtY8ZdaLZKEVN/PpQmc7yAy/QjutVLMBwea89234N5Ri/qt7lca6o/c8t71Lrh3cPE0Tat8MWPzZYbYkJPN1yZ8H1f8pYOaSNO0evg5RYbPl4mfCKDXwb2jXIPuaQ+ADAec3l02E2IlYNnRdfa/DpqALMsY/7oliqJmLM9zJpMJzrleB/cOak5EKgAx7nnQRAC92+pKKaWUUkop9bc/qM/dnt2/LEAAAAAASUVORK5CYII=",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 4061,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 39,
                                left: -31,
                                top: -8,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAnCAYAAAC/mE48AAAB60lEQVR4nO2WIXTaQByHv+4hIiJOnEBEnEBMnoiYQEwgJhGVFRXIiYnJiQlERURFJLJiYgJZgUAgEAgkAhERMYGIiIjgvUxk0IZ1K+kCjNf/Z+4ld7n87rv/5QUEQRAEQRAEQRAEQRCE18VFlcH9fj8H+JEU1/FyxnA4rDTH/8be4cMwzMc3X1Bug7VOATAORBk0Vi6DxeosRbzZd6DWGoCJf8tqlWGch761Thlcq7z3Vue1Jzwwe++aMSbvOMXOT/xblNdEDzt036ni3jI7y4qoFNIYkyul8LMYKIvwPac09lxEvCjc30RoXYhot4o2jjPiuCzC6wQ5QDz6fHI5/xSgakWMnD4AbrNZ6lvcXZ1MRC0v3rcignX45PPKK4RMbzpHF9GoY5Ioii4Akl8i2rNPMIOJf8cSaM2uiB1omzHjSUTDvwYeFu5Mv3F5aZnWEaYitQjY8KQI4N4LmAMfWOC6CpPO0TrBepbRKAKl6oxRiYOW3O7RoN0t9Vtrmc9TrHUBmIdfod1lMBgc7SjUWgG77FaEPxkWHY9EWOsWCweSdM17aw8Z6TcOKmDDn0SM77+j3AZJut6ObbVax4i05SgCNuyK6H3slRZsjCEIgmNGOuw34DmMMTlZtL1OMlW0SXLyHyRBEAThNfATiIe7sq2n7KAAAAAASUVORK5CYII=",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 4061,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 39,
                                left: -27,
                                top: -12,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAnCAYAAAC/mE48AAAB0ElEQVR4nO2XIXPbMBSAv94FGBgIGBgYGBgUFBgYDAQMGAwKFuQnBAwMFAQODPQnFBYMFgwUBBQMFAQEGhoIDAQIDBjszgOKsqW3dr6tkZO79xH53unk9z4/6WQQBEEQBEEQBCEkWX3dZ/V1P3YeZ6Ff6IuO03Qv3tzOgucCIwg4n93+8aurLMWab8FFTEK+TGvdJ9EDq7WlO9eAKxwgbe6JrKUJmRABBWit+6T5ClONihWYB4oCNo3CWktSFKFS2SOYgPV6TR25599rTZIEgLKMgRi1ifrJJuam2QTZCkH3W57nvVKKqjMuMNWUZQnA6vMHFyoijOkAMObwIkY5eZ+KuM+uiNOUYjWjyiLaDvJtt7QdHLIjRhHgeUlEkjgDeeQkwGFEjCrAM6QjpkW0m//4OHk1EUchwDNEBPyS8RoijkqA5yUR+o3aHZL+rPifw/IoBXj+1hHgJDTTLwBc3F2Sz96zWCwG13XUAjzPifC3yIu7y91c+/0Hb68+Mp/PB9UW9Cr8r7RtewZgtyLemU9ggJUrmHjixi1VVQ1e+yQEeJ6KUEpR1zVKqb2il8vl4DVPYgs8R57n7s+ya3cx2yk3WnvStQmCIAiCIAjCgfkJ/EK6kPgqs/sAAAAASUVORK5CYII=",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 4061,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 39,
                                left: -27,
                                top: -12,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAnCAYAAAC/mE48AAAB0ElEQVR4nO2XIXPbMBSAv94FGBgIGBgYGBgUFBgYDAQMGAwKFuQnBAwMFAQODPQnFBYMFgwUBBQMFAQEGhoIDAQIDBjszgOKsqW3dr6tkZO79xH53unk9z4/6WQQBEEQBEEQBCEkWX3dZ/V1P3YeZ6Ff6IuO03Qv3tzOgucCIwg4n93+8aurLMWab8FFTEK+TGvdJ9EDq7WlO9eAKxwgbe6JrKUJmRABBWit+6T5ClONihWYB4oCNo3CWktSFKFS2SOYgPV6TR25599rTZIEgLKMgRi1ifrJJuam2QTZCkH3W57nvVKKqjMuMNWUZQnA6vMHFyoijOkAMObwIkY5eZ+KuM+uiNOUYjWjyiLaDvJtt7QdHLIjRhHgeUlEkjgDeeQkwGFEjCrAM6QjpkW0m//4OHk1EUchwDNEBPyS8RoijkqA5yUR+o3aHZL+rPifw/IoBXj+1hHgJDTTLwBc3F2Sz96zWCwG13XUAjzPifC3yIu7y91c+/0Hb68+Mp/PB9UW9Cr8r7RtewZgtyLemU9ggJUrmHjixi1VVQ1e+yQEeJ6KUEpR1zVKqb2il8vl4DVPYgs8R57n7s+ya3cx2yk3WnvStQmCIAiCIAjCgfkJ/EK6kPgqs/sAAAAASUVORK5CYII=",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 4061,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 39,
                                left: -15,
                                top: -11,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAnCAYAAAC/mE48AAAEN0lEQVR4nO2YIXTiShSGv56DQERERERERCAiECMQCAQiYkUFAoFArFix4okVKypWIBArEE8gKioRCERFRQUCgahARFRERERERESMiEDknDxBkwKFLlDasufxm+TMhJn7/blzZwicddZZZ5111v9WF58dwC5qNBqpqzRRDZ2H3/ZfEfPRZNi91LB7qVkgNQuk1atxeszxC8cc7K3q9/spgKZptFqtCwDpe6hmiaTeQ9F1ZBAedc6TSKdl8ExeIAHo9iYUFBWAoqqhWRZxGDLuXwJgWdabGE7CgHr9WxqEPj/+aQCbjfh97QCQxBKtXKH3zcifEUIcbMRJGNBo/Ez9wEdVVLYZkUkIQaM7o3NZQAiB4zh5+yEmnEgN8DANABUZq4xGzooRsDBjOJxxfT0Gow6wAn+oTsIAKSX+dIK4bGw0omwJpHQolUoALJfB5Sw4REcz4PZ+mja+1N60pBL3llivo6qrGZEtBSEUQKGlLdL/6uqGKIo2LpVd9ekZYLUHKcHNStujG2PoSW5EBg7g+z4A4/EY2zYB6NwlB8//YQbc3k9TgOUssdqDdD5u4wMsvURDXwA9ujGVahnHcRBCMB77OTRA/0EFIHJd5jI6KK53N2Ar+PQX82EbDBMCH12HKIbQnWBadWBhxFz61GwbIIfPwOPwuRpUDJeJt39872bAa+Al/Q6aVaD61FPl8d8hALoOc29CmJAbkWkT+FxKysoUqdWByd5xHt2A3cBX9/goiij/aAGsGOG7E4jAtm36D+oKOCzgbaePWzap2BbOaP94j3YQeg283Kzmz71WsaMoIookAOHgHl1ftMv6YCt8WBNIrY4z6ly4cZJaSmEvpjcbYNi9FKD/s5rDHwK+uEqK3hSAghcT2JvB294AR5hPaQ/OqHMwx8E/zMC/xYstTHRuuBr4zKe/MI2IeakGgKapT9eXBhwKHhQrKIryJvBMB9UAqz1IW173RXvL6xIUYx79mCILoIja1nEy8CJL4MUQ1opcBn5XbQLg3feOtnT3NmAbPEAgI2ScYKCCD7NEYm4x4rPBM+1lwCb44OkAIgAZr57IKgUV6UmAPCPyiXcAn9hfAfCOkOrbtPPAy/CBjDBULYdfB5eJzO/d8uJLjjppA6AkfOga/5N2mmAdflkZ/Dr0upSnPe29q/q+OvggtA6+CXpZr4F/DzxaX7sfCp5pLwOyIrcOPZcSpFx5tqiqzKVcuWbPrq/xfQ8vx9TOE2f7/rKk//zvo6huPuhsAv/INf4n7RxAUW+9MKCgqCSxzL/awmYjMvCS/Z2Z454EeKadA3HjJBWl9ov2bSZ8mXXRVPPk3vi6dg5INDtpedTBB2Z6a6WvGQ5JCiqFpZ0gqNc/parvq72KoA+YgBkOX/SFNQGA1OrEcXyyb3xdOxtQERYzOhSFxWQ6W+lTFCW//xugzzrrWf8BIhh+XvfNrIYAAAAASUVORK5CYII=",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 4061,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 39,
                                left: -45,
                                top: -15,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAnCAYAAAC/mE48AAAD8ElEQVR4nO2YL3DiSgCHv76JQESsiEAgIiIiKiIQCMSJioqKigoE4okTTyBOIE4gKioqECcQFRUnEAhEBAJRgUCcQFRUICIQiIiIFREIZnIit+FPuV6AcKXz+MwO2ezO/j42u5vAiRMnTpw48b/lbN8O7Go7EoU8+XEL13X37u9DUfr6FJkakakR2dV2VPr6FL33mLZlr38sl69E5sUVopBHTn1C32f6VD8DuGs+RFZB4DgOtm0f7czYemD1ej0CaLWnAGi6AKBQKhP6Pv9d6lgF8ardsYrQ0t5Yr9cj0zSXrkyT8ABVJ8QqFDa27XRGPDw87TjEw5JKgAovpcSXEAQBAJVPcxzHwTCMje06nRFSSizLymzAWZN6BqyHBxgMJ3geWBYrItaDO44O6LhulkPPhlQCRqMRlmURPwJGIkHXBUIIPE8yGLqc287G4BALPEb+2ebmyWRCvzdA10KqVzpCDzAMiRACXRcYhoEQAsfRubgwgTh4t/u81yDd/vBg22sqAZ52RX9iA/CpbL6qNwxJ0VkE77dqK8GVDLvaPrpzQioBwcuImZS4z3nc53xy3bIsBsMJAJ7nAdD8UkvqVfDeQ4NBq8H5oPZKgtsfRof8h/9EqjXAzo8ZTxd7vpJw7fjJjLAs69Vz3ntooM+hoAlGgYSCgE4V0zSjXPmOcbt6dn1ZPoPFNFe//xbpdgHrGhuXsW+j6YKZjBfBZRHLZ4QghEGrQUETTDVJiOT8S+VXbelX2WN2BCJSCSg6NiMPin6HUb6SzIRlEddMeOk/YhkgWAQ3KnHwTWeF85sS7y0idefOzW2E56I/P69IUOSEgTO9I1RKLy4xjPie3x2UFGpbfen+QIlQdYcWsVWnzs1tVHRsRt37P4qYW/H+P7PKe4tw+8Oo1vyBns+vyMmCnTpzbm6jzvcGlXIxUxFKQBBIAPzBmFz5jvuqSevfMgDj82amIvbqxLqM3wx1/2knEeuo4DlvCIDmhQDUvg8TAYrpRTsTCZlY3FXEOiq4MVldm6uPvVcCIBsJmT5Pu4hYaR/kAJDhHKFrSXn1zaX9+Squm8uVNvtKOMjKuo0ItWt4+QYzGVA3Bsk9UxmstJHhPC4zlHDQPTatCFicKZav17QukE7ErhL+ymkrjYi3+J0MGc4TCUctQOHc3MYvPW8cqN5CmPF3hs/hIxDLUBI+hADFNiLmoUTTRVLCQsQy6mv0trzrV9pNIhTLoTeV68z8zscToFhfI4AVGYqsw8ORCFCMw3nU/NZN3jXWWZdS9DuYQHuPHEclQJE8GoAIBkgpNwpR+Jd1et17bF37GIvgNizLWCYMw5XfXr959FlOHCM/AaotOVMs/B8BAAAAAElFTkSuQmCC",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 59,
                                left: -31,
                                top: -27,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 66,
                                left: -31,
                                top: -34,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 72,
                                left: -31,
                                top: -40,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 83,
                                left: -31,
                                top: -52,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAABTCAYAAAAvKwHrAAAHAklEQVR4nO2br3fjxhqGn5xjICAwYICAgIGBwYIAgwUGAQULCgwWBBQUGFxw/4ALChcsCCwoCCgoCFhgELCgIKAgwCAgwMDAQEBgwIABAjonF0gzGkmOLSfOj7Z6iU8kOfL7zPt931i7gV69evXq1atXr169evXq1atXr169evXq1atXr17/Dp285c2D6PyheWwQik7vzY0mjEcEQhBGEas/fnqSlzcBEETnD12Ntt4rZPlavD/T+lkQXhVAEJ0/hPHoWb9DjseYNCWMIkyaAhWEeHLK7dcfDvL0KgCOGXXf/DEgvCiAl4r6MSG8CIDXiHqyvNsKQW/WiOGoM4SjAnjtqPsQfB0C4SgA3jLqz4XwLADvJerPgfAkAO8x6snybuv99kE4CMB7j/pTIHQC8HeK+qEQdgL4u0b9EAhbAfwTot4VwqBp/NhRD4Qg0xrg0agHQqA3663XWInhqHVNU12u+fD5M4A7d2KNNy/8p0TdXhNPTmvGP66+8C3RJ4Nt5q2xrjLJGiiS8xgEm4Rkeffiq9y8pmkcQIRF+AdZenVyJoOtEA7RbTLDQniPUW8aj4UEFK4HDIcCAJNmTwLwMVs4CG+xyruiDpVxERdNOkkUUPYAm4BETpmG90AFIhIhqTatV/+clcoybgcz1xNeu967GP9Tf2BibgC4XKn6FAhDwR1TjNGcsgRombbadkwGgUtCpgXw9lH3jX+ezRgu72BVvb8GQIQCbTRhKMAUJk2QY8hbpi0YK3vcQTCzdxF13/h4HPMp/xNOf+S3q+stAEQBQJQjMNUGlWVFaUT3GPJaKfjy4bw0hCcbv/+d6++3JFq1m+Cns1PgLzbEiHIXF4kQlWb10jBVadhrXgPCoVGfbJKa8fW6aHpSCExYNUEH4PvNHTIIOP8IkJB4ZvzSiAbF8TAKijeWQ0OGIcpUyUi1OQqE5634ivVaoVRhdpNrAHRpvgZABoWh5a3XIeyH80ujNLzZ6NrUwFQNUYbHgfB049WK+8Y3q5Tb8S/MxWV5xisBu6L+PiASIZPxGL800rXZWhqfBitnXplGeWg6QzhG1JVSSClZpsW97IqLcEAYRbCGRDdKwK1oVO0DUm1Iy0TY0ljC1tJwycg1BBBmg3pZ7IFwjKgDrNZrTAibVDvjV3kB9XzwrVikssfVEgDtfYCfClsafqPbVxom14TlLXZB2GZ8OI6Kz1RW1mJH1GsrHtIyHghJ5jp/oVYCWitq4Jo5HzYXtW2yNd+aGsrWvmqVxmNJ8BPQNL5IYs64Yzgsvl9M4snOGrcr/j3+HzpfO+P+13ErpXV7DLZWlOqhxjc9Izea8/jGgVg2SiMBV/vN0lDGYILc3cc2xvVyst349AdCvQQDUkqUUvwnXtWirpRqNbdPfCWMIvfVu2nc3V8I7soEProPsA1MBkERoR0gmpuinaVR9hhSkKsvrsZrxkuIlPGXUnZqbrGpIt5Vj+4DltoQnka1ffNjINK0mv/bSsPKL42f4sTbkUGYC2d8OIyL2Z3iTEM96tBubl2lvGQM5vP5w3rxx859QOC6Zh3EVXLGx3zBcChI03IHmGiUMZyPwZaG7Q210iAhFpLxqKhxkVTG/T37eq1aK76rue1SohUmTbkJIsR4zHwqHwaXl5cns9nsQWkN97eFiSBAZe3nAk0QVtfMOeNXwihgk2uMzmCVuPOuNzRKw44jpRRCjJ3x9eKCW2/3Zmt8X3PbpUm8QokpE/5CyhGXl5cnUJbAYrE4AZjNZg9aa1QJAmjVtw/CGF32CEGUhVzxs5sahhyTZo+XRoqLtpSSX0aK9eKCdeNeOlGuxvc1t20a5deIWAACKaUzblWbAk0QVmEUbf3lA6/JpdoQjAswfo+wIGwibGlk1OvbH2tQwWHTRNJN+4w7D9sOViDEw72sHpM/BiKMIqJ099RogpBh6Ez6IOzPUECIhXSbln2yNT6N7/ca3wnAygehc03K3BkGyLwPlnacGoacMKvf1jcv5AAhI7TKHYh9ssbVuKjx0WjExcVFp3/22wnA6jEQUPSIe+8Vuk2NZt8Wsvgo8/spX+NrBhQJqXZt21VvbvtXvKlOAKyaIJaM3bnm80HYPTX+SzW7lVLkg4Av+RyoPzyVQtTmtlXXGt+ngwBY1XqEHtXOdZ0aeLyklOTUAfrxlx7IYxm3ehIAKx+EGp26412mBrSbX1NKa7dvN3nV3A6p8X16FgCrp0yN1sBvSGlNohWJVq65HWPFmzoKAKtDpgZU3/QAhH3GWMoaB4664k0dFYBVl6kBxdMb2+REFDENbmAI35SA8fRFVrypFwFgtWtqWLmoD6a1DdBLG7d61f8sbbfYaTwn+j5nJIuJYaMOFbTX0pv9vcBsNnuwPeA1V7xXr169evXq1cvq/8BFSG1ZaNVQAAAAAElFTkSuQmCC",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 84,
                                left: -31,
                                top: -52,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAABUCAYAAAAyLjFTAAAH4klEQVR4nO2bIXTjSBZFb+YYCAgUKCAgIGBg0CDAIMAgYEDAAoMGAQMNFi5osGDggAENFywIWDCgQQODgAYBBg0CDAwCDAQMBAQKFChgoHOyQKpySbIdO3GSnhk9ktOSHPm9//77Xzod6NChQ4cOHTp06NChQ4cOHTp06NChQ4cOHTp06PD3wNl73jyIrh+bx3qhOOizhdGEcZ9ACMIoYvnHL8/i8i4CBNH146FEW58VsvpZfn6t9YtEeFMBguj6MYz7L/odcjDA5DlhFGHyHNiIEA/Puf/956M4vYkAp7S6T/4UIryqAK9l9VOK8CoCvIXVs/liqwh6lSKS/sEinFSAt7a6L4KPY0Q4iQDvafWXivAiAX4Uq79EhGcJ8CNaPZsvtt7vKRGOEuBHt/pzRDhIgD+T1Y8VYa8Af1arHyPCVgH+ClY/VIRek/iprR4IwVprgJ1WD4RAr9Kt11iIpN+6polDrvnw8SOAO3dmiTcv/KtY3V4TD89rxC+Wv/E102e9beQtsUNhshQonbNLBOuEbL549So3r2kSBxBhaf7eOv9ydimDrSIcg/tsjBXhR7R6k3gsJKBwGZAkAgCTr58lwMV66kR4jyrvszpsiIu4DOksU0CVAdYBmRwxCh+AjRCRCMm1af30z1mo9Zr73thlwlv3+yHE7/QHhmYGwM1S1adAGAoWjDBGc84coEXaYtsxGQTOCWstgPe3uk/843hMMl/AcvP5mgAiFGijCUMBpiRpggJD0SJthbGwx50IZvxDWN0nPhjEXBV3cP4P/vvldosAohRAVCMw1wa1XpetET1gKGqt4MMX57VFeDbxh/9x++2eTKt2CF5dngPfWREjqi0uEiEqX9dbw2xaw17zFiIca/XhKqsRT9My9KQQmHATgk6Ab7MFMgi4vgDIyDwyfmtEvfJ4GAXlB6uhIcMQZTbOyLU5iQgvq/iSNFUoVZJdFRoAXZGvCSCDktD83ksI++X81qgIr1a6NjUwm0CU4WlEeD7xTcV94qtlzv3gVybipjrjtYCtqL8HRCJkOBjgt0aemq2tcdVbOvLKNNpDc7AIp7C6UgopJfO8vJetuAh7hFEEKWS60QKuotFmD8i1Ia8cYVtjDltbwzmj0BBAuO7V2+IJEU5hdYBlmmJCWOXaEf9SlKJe976WRaoyruYAaO8Bvitsa/hB91RrmEITVrfYJ8I24skgKr9T1VnTPVavVTykRTwQkrVL/hItB7QqauCWCR9Wn2trsiXfmhrK9r5qtcYuJ/gOaBKfZjGXLEiS8vliGA/39rit+Lf43+gidcT9x3ELpXV7DLYqyualxlc9pjCa63jmhJg3WiMD1/vN1lDGYILC3ccGYzofbic++plQz8GAlBKlFP+MlzWrK6Va4XbF74RR5B69m8Td/YVgUTlw5x5gA0wGQWmhPUI0l6K9rVFlDDnI5W+ux2vEKxGp7C+lPCjcYrOx+KHYuQfMtSE8j2p78y4h8nwz/7e1hoXfGr/EmbeRQVgIRzxJ4nJ25zjSULc6tMPtUCjPGb3JZPKYTv/YuwcELjXrQnzJLrkopiSJIM+rDTDTKGO4HoBtDZsNtdYgIxaSQb/scZFtiPs7e5qqVsX3hds+ZFph8pxZECEGAyYj+di7ubk5G4/Hj0preLgvSQQBat1+L9AUwuKWCZf8hzAKWBUao9ewzNx5lw2N1rDjSCmFEANHPJ1+5t7b3myPPxVu+zCMlygxYsh3pOy7df8ngOl0ejabzc7E6Ao+XNTIN/vbCmHf/pYZUWbGLRNWK00YBZigqD0uX12ec9H77oQAnLWllPx6riimn2vpDmXVbY8HQiKS417a9otbRvEDQgiklPQrx2mtEULUp8B0Oj0DGI/Hj9pTN4yirb+854Vcrg3BoCTmZ4ShKLfLyhG2NdbU+7tJ3B6nSutj0S9uEbEASuJCCLTWaK1JkoS7uzvSNK0LYLERQjw+yI3iu4QIo4go3z81mkLIMHQkfSHsv60IsZBuaXkKtsdH8YMjDjjyPvFhlHK3lNsF2CaELjQ5k5oQa++L5QdODUNBuK7f1icvZA8hI7QqnBCHEleDssf7/T6+g4UQzOfzGnGqWv50yA1sRgzMV/rFbe2czQg/K/yMsEL0QsGX7JLVSteWojrxHpOHkRtTVph9KT+MlyXx8LvrcUs+SRLSNOXu7o5hlNZESc36cAEs9gnRfD9YEq8LYXFbOclCKYXSmn+pj61r5Y7J0ww3v88PIW6xtwV2oZYRup7Ku6YGgDHaTQ08vaSUFNQF9O3vi7Ar3GC71dOwTrgfBqwAbT4A+nkCWPhCqP65O37I1IB2+DWhtHZ7uyk24eaPsl3hZnvcEraVn+d9QDvRXiSAxXOmBk9MN6U1mVZkWrlw88V6injT6rbilvhisTiDEwlgcczUgM2THoCw7xgrWOKAqzhsFhhrdRE+sMpiR7yJZsUtcYuTCmCxSwgoM6J6HmSZpkghUFojoohRMIMEvioBg1Grx5MkafX4MKpb/G5ZPThlMVAK1iTt41UEsGgKMWfQusZZvTeqLUCwf4GxFW8S3kd2G970P0vbFTuPJ0TfJvRlOTGs1YFawFniwMbqDRxLuIl3+3uB8Xj8aDNgm9UtcX+Gw8sJN/GufzAB8OnTp0doV3w2m73Jd3vVDDgElvh8Pufm5ubdC9KhQ4cOHTr8jfB/jwIGmeW7TRcAAAAASUVORK5CYII=",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 84,
                                left: -31,
                                top: -52,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 84,
                                left: -31,
                                top: -52,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 84,
                                left: -31,
                                top: -52,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAABUCAYAAAAyLjFTAAAIxUlEQVR4nO2bIXfjSBaFv8wxEBAoUEBAQMDAIMDAIMAgYEDAgoAGAQMDBuwPWNCwQYOGAwY0WDCgQYBBQIMAgwYBBgYBBgIGAgIFChQw0DlZUCq5JMuOnThJz6wu8YktS7733Xffs5JAhw4dOnTo0KFDhw4dOnTo0KFDhw4dOnTo0KFDh/8PnLznxYPo6rH5XC8Ue723MJow7hMIQRhFLP767Vlc3kWAILp63JfoxnuFLB/t+1dav0iENxUgiK4ew7j/onPIwQCT54RRhMlzYC1CPBpy//nXgzi9iQDHtLpP/hgivKoAr2X1Y4rwKgK8hdWz2bxVBL1MEUl/bxGOKsBbW90XwcchIhxFgPe0+ktFeJEAP4vVXyLCswT4Ga2ezeat13tKhIME+Nmt/hwR9hLg72T1Q0XYKcDf1eqHiNAqwD/B6vuK0GsSP7bVAyFYaQ2w1eqBEOhl2nqMg0j6G8c0sc8xpx8+AFSvnTjizQP/KVZ3x8SjYY342eITN5k+6bWRd8T2hclSwDpnmwjOCdls/upVbh7TJA4gQmv+3ir/dnIug1YRDsF9dokT4We0epN4LCSgqDIgSQQAJl89S4Cz1aQS4T2qvMvqsCYuYhvSWaaAMgOcAzI5Zhw+AGshIhGSa7Px6L/moFYr7nuXVSa8db/vQ/xOnzIyUwC+LlR9CoShYM4YYzRDZgAbpB3anpNBUDlhpQXw/lb3iX+4vCSZzWGxfn9NABEKtNGEoQBjSZqgwFBskHbCOLjnKxHM5U9hdZ/4YBBzUdzB8F/8+e22RQBhBRDlCMy1Qa1WtjWiBwxFrRV8+OK8tgjPJv7wX26/35NptRmCF+dD4AdLYkS5xUUiROWremuYdWu4Y95ChEOtPlpmNeJpakNPCoEJ1yFYCfB9OkcGAVdnABmZR8Zvjahnnw+jwL6xHBoyDFFm7Yxcm6OI8LKKL0hThVKW7LLQAOiSfE0AGVhCs3svIdyH81ujJLxc6trUwKwDUYbHEeH5xNcV94kvFzn3g49ci6/lK14LuIr6e0AkQkaDAX5r5KlpbY2L3qIir0yjPTR7i3AMqyulkFIyy+21XMVF2COMIkgh040WqCoarfeAXBvy0hGuNWbQ2hqVMwoNAYSrXr0tnhDhGFYHWKQpJoRlrivi3wor6lXvxhapzLiaA2BzD/Bd4VrDD7qnWsMUmrC8xC4R2ogng8h+prKzJjusXqt4yAbxQEhWVfJbbDhgo6IGbrnmdPmltiY78htTQ7neVxutsc0JvgOaxCdZzDlzksR+vxjFo5097ir+Pf4Pukgr4v7XcQel9eYY3Kgo65saN/qSwmiu4mklxKzRGhlUvd9sDWUMJiiq67hgTGejduLjXwn1DAxIKVFK8Xu8qFldKbURbhd8Joyi6qt3k3h1fSGYlw7cuge4AJNBYC20Q4jmUrSzNcqMIQe5+FT1eI14KSKl/aWUe4VbbNYW3xdb94CZNoTDqLY3bxMiz9fzv601HPzW+C3OvI0MwkJUxJMktrM7pyINdavDZrjtC+U5o3d9ff2YTv7auQcEVWrWhfiWnXNWTEgSQZ6XG2CmUcZwNQDXGi4baq1BRiwkg77tcZGtifs7e5qqjYrvCrddyLTC5DnTIEIMBlyP5WNPCIEYX1hVHu4tiSBArTbvCzSFcLjlmnP+IIwCloXG6BUssur1KhsareHGkVIKIQYV8XTyhXtve3M9/lS47cIoXqDEmBE/kLJfrfu/pKk96Wg0Qowv4PSsRr7Z304Id/fXZoTNjFuuWS41YRRggqL2dfnifMhZ70clBFBZW0rJx6GimHyppTvYqrseD4REJIfdtO0Xt4zjB4QQSCnpl47TWiOEoDeZTE4ALi8vH50QqRBoT90wilpP3vNCLteGYGCJ+RlhKOx2WTrCtcaKen83ibvnKdP6UPSLW0QsAEtclJy01iRJwsePH0/AC8HJZHKSJEl1b3A0GpGmNzzIteLbhAijiCjfPTWaQsgwrEj6QrifnQixkNXS8hRcj4/jh4o4UJFPkoS7uzu+fv1a/T6ktgcsl8sToHaD1AmhC03OdU2IlffB8j2nhqEgXNUuWyMvZA8hI7QqKiH2Ja4Gtsf7/X7NwUIIZrMZaZoynU5rvwzqNU9WisA+QoDNiAfv0RIXtXO2TY1mbgtpP8r1w5jP8S09rEPWW1s76uG2tjpQVbyN+FYBfCGGw+HjfD6vX9ATYsager55f9ASF63nvuWaf7Oe3Uopil7Ap+IaqN88lULU5rZDs8dh0+ou4LeRhx0CAMzn85OPv1883t7ntAkhRMqDrqfytqkBYIyupgaeXlJKCuoC+vaXnpDbwg3qVgcYDwI+/fl95y+AdwoAVCcYDoePIkxbhUjTG1R/WD23z9SAzfBrQmld7e2mWIebP8qaFRfhA9qcMp1OT6bTp9jtIYDDfD4/SZLkUQjBLiH2nRo8Md2U1mRakWlVhZsv1jbiyyxmPt9u+Sb2FgBsLiRJ8qi1td4uIZ6aGrD+pgcg3D3GEo44UFUc1guMs7pPHDTz+fygv3o5SABYTwm7M/QBTRKrvYSA+rRYpGkVciKKGAdTSOBGCRiMW1PdJ25Jn6L14cQdDhbAwbkBQJv9hPCnhkNl9d64tgBBe6r7xEG/iDy8QABoumEtxGmwpKHDxtSYpkv60k4MNRhDSb65q7uKj6KUu4XkWMQdjvaXov4ancSKZSarR4DhcAhYgo6Yy4BtCwxQVTyJs7LyFscgDy90gA/fDc4JoTKAbHWEE8J9M2xa3VV8FAUsAW1s5Y9F3OFoAjj42ZAFQ1hpjAwhozUjpJSt4ZaGdmGY5VbMY1m+iaMLAJvZ4NDmiCRJWivu8FrEHX55rRPDWgjbElgneEhiZee4t+unxlbeWv54vb4NryoAWBEcwaYQoTL0Q7sANYm/duUdXl0A8Jywxz08d8xbkIdXyoA2tE0JI8NG5d+m6j7e5d/mXDi6MfjWVffxbv846YsA70Me4H8DbL+2i5n7AQAAAABJRU5ErkJggg==",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 84,
                                left: -31,
                                top: -52,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 84,
                                left: -31,
                                top: -52,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 84,
                                left: -31,
                                top: -52,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 49,
                                left: -31,
                                top: -18,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAxCAYAAABqF6+6AAAEVUlEQVR4nO2Zr3fjRhDHP9cXYBAgYCBgICBgEHAg4EBAgMFBAcOAAoGCAwUCBw4WFAQUFBwIPGgQcMB/wIECA4OCAAMBAQGDBQYGfU8F6Sij8Sp2Ett5fdGXWJJXOzvf+bkr6NChQ4cOHTp06PA28e61BCdJUvX7fZbLJf1+n5ubm1dZy9GFpmlaybUor6+PTcTJsQSlaVoFQcBisUAsDxAEAc65+jpJkgrg9vb2KEQcXIgobqGJkN84juv/gKN4xMEmT5KkiuO4YV3n3IbF5VogRMjzQ4fG3ieVGBcXh3tLavfXsCSIwvLc5ol9h8beJsuyrIIH19ZuL4qIi+txj0F7jYSFYF9EvHgSKWfWwj7LAjUJzjmm+ZDTMGS8/p0g7HMaDli4sGF5PY8ODyH4+vr6RTo8+2XJ1nCvlLUQsGFhUao4z8h/zAgGIetpxofoH/on1CQAzPJe4x2BEK29yTn37Bzx5JckxrV7AvWihAibyAR5ccJ6mBBdnN8vPi8AWE8zlv0rfh1+B2h4g56jLWzk/6eGxs6DpZzZ7Gyv7b0QJG4NMXmRs1o5Ts5/bhDhipLe39e1R8xGE3rTz96comVp4qWk7krET7sonmVZpa0ogkTBOI5rC9hxzrnGgsvhR6JBxNnwPb27WxZ/fMLlBWfL/0LiLAO3ZNL7jMuLBrG6fGpZ8lyPTZKkksT8GFpZ0nXcl5A0fFlaoL2kHH7CFSXBIAQgvJuSFznrYcLVEL6vwvp/8YbRaOTtFQS+nkGvF+7Ds80jNh5mWVZpgb5Yt+4uilrr6+dfPkz57a+PANydjgFYlSUAg/P3uKJkVZachiFhccN8Pufy8vLRvkFXBa28yLUIgmCjatQ3vgbG1m2bee14HRY6Ger4jKKI2WzGbHVRKx/e/clsdVErXw5S1j++MB6PG+9awjV85PvkC6RqvNOKy2Af60KCTKq9wtexiUBLqMz/S/yNr4srlsslzjnyPCeKIubzOVEUMRqN6rnbQs8m27ZSrNdj+5UND7BKi+K+rK4XYoXqeezi9WKdcxsW32YAG99WblsoatQeYAemaVrZjstmX219gW13dQurF2znnEwmtcV9Vha5D2X0QSHrgbYhsx7o21S1VgHfNvaxbOzLvj5SbM/gU1RftxHXtg5oVgZBW6e4tVmwDZDd1m4jQcOXN2TBeozIse9AMxm35R5NwLYWeedO0Pb+vgVYpbU7+qyi3daXrZ9CoiV/103Si/YCsgh776vVtoy2KePzBp88mRv85W1XPHs3KG3mNi+wBPmIeOygxO4BfPfumLtBCwkN6+I2YfksqLGtwvjmhKdb3GJvJ0K7VI22nkCXTGjmANtxive89CBEcJAzQWttX+nzkWFPhnUvImGy78PRg50KWyJs7LahzUv2ZXGLo30X0AnLurv9Hx6I+N9+F7DQRPg2MW29+qHxat8GteK6mzzWJzHBm/863KFDhw4dOnR4u/gXberUC3vOlPAAAAAASUVORK5CYII=",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 50,
                                left: -31,
                                top: -18,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAyCAYAAADsg90UAAAFIUlEQVR4nO1aK3TjRhS97gkwMBAQEDAQEDAIWGCwICDAYKFAYECBQcGCAoEFCwsKDAoKCgwLAwwWGBgELCgQEFhgMEBAQMBggIFBz3GB9ypPzyM7H8fpOatLIkujee++v6QALVq0aNGiRYsWLX5MdN5KcBzHW9/3sVqt4Ps+ptPpm+hydqHj8XjLY5KXx+c2xMW5BI3H463neTDGgJ4HAM/zYK2tjuM43gLAbDY7iyFeXQiJa0hD8G8URdU1AGeJiFfbPI7jbRRFNe9aa/c8zmOChuD5106Nk2/KHGeIAztPyvCX0EYgYZ7XdeLUqXGyzZIk2QIPoS3DnkQY4nLdIcioYVoQpzLEizdhO9MednkWQGUEay3m+QC9IMDN5nd4gY9e0IexQc3zch+ZHjTwZDJ5EYdn38xqDexIaQ8B2PMwSRXDBPnXFF4/wGae4H34L/wLVEYAgDTv1u4haGgZTdbaZ9eIJ9/EHJfhCaBSiobQhYzIiwtsBjHCq+FO+bwAAGzmCVb+LX4dfAGAWjTIPZrShtefmhqPXsx2pquzPta/aSCGNRAhL3Ks1xYXw59rhrBFie63SRUR6egO3fknZ02RsqTh2VIfa4ifHkM8SZKt9CIFkWAURZUH9DprbU3hcvABYT/E5eAdussZzB8fYfMCl6vvKXGZAHaFu+4n2LyoGVa2TymL5+XaOI63LMyH0Ggl2cddBUnCVaUJGSXl4CNsUcLrBwCAYDlHXuTYDGLcDoAv66C6zmgYjUbOWYFwzQxSX2CXnk0RsXcySZKtFOjKdR3uJKq9L89/fj/Hb/98AAAsezcAgHVZAgD6w3ewRYl1WaIXBAiKKbIsw/X19cG5QXYFSZ5yNTzP2+sa1Q/XAKP7tq68er1MC1kMZX6GYYg0TZGuryrywfJPpOurinzZH2Pz9TNubm5q92qDS7iM75JPsGt0JHEudlmdRuCmMipcExsFaoNy/1+iv/GXucVqtYK1FnmeIwxDZFmGMAwxGo2qvZtSTxfbplYs9dHzyl4EaNIk7qrqUhEtVO6jlZfKWmv3PH7MATq/tdymVHTtuVcDxuPxVk9cuvpK7xN63JUjrFRY73l3d1d53OVlyn1oow+EdATqgUxHoC7kYRg2dwHXY+yhauyqvi6j6JnBRVQeNxmuSQ+g3hlce4dhiMViAeARg5AegPRj7TEjSLjqBhWWayhH3wPUi3FT7dEGoK6S+DAwWCz942+EWC05++unOhKnIK0sIZWWYNjqak3i2pCu6JFGaGp/aZrCGFMRx24UedmzgCTUFKoyN7XhXBHhigaXPO6tSTeFOomPBisslj7CfoG86D/9nSAjQo6ZMg2oqJ7d5esuHuvhip4/tI+OCFd6krjL42a9qd3/7JeinKiYGhSuldGQJOU5V867oqypU/C6DnXTqxOOel3kAOz6EoA9/jB0DLPZrDObzToyZ5sKYJPShDGmGoy4XqaSMWZPBj1ujMFiscAwMDVZUW/3XoGeT8t6LXqxAYjpdNqZTCadQ23qUE7zbxRF8DzPmVYyeo4R16G+8/iDnCzLOlmWdU7+XYA1Qs8ROpeb0oPXdaroAYuh7vW+IS/6VY5r7Dxua8Tl9bN9F5DdgRMiUJ/ODs0bwOOquguatMTZPkNJQ7geYpr6d9MAQ+Iah8i68GbfBiVx1yO4Jl6FusJTCWv8b74ON4W6rhUvJazxZgYgOFBpj9/f359Ft7N9HW4Ciadp+mb/I9CiRYsWLVr8oPgPsU+KSLuSNJEAAAAASUVORK5CYII=",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 50,
                                left: -31,
                                top: -18,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 50,
                                left: -31,
                                top: -18,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 50,
                                left: -31,
                                top: -18,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 50,
                                left: -31,
                                top: -18,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 50,
                                left: -31,
                                top: -18,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAyCAYAAADsg90UAAAFCUlEQVR4nO2ZLXDjVhDHf+kYGBgICAgYCBgYBBgEHAgIMDhQIGB4oMCg4ECBwIGDBwoCCgoKAgsPBBwwDDhQYGBwIMBAQMBA4AEDg864wLe61frJceKPgOo/47H8JO++/e+nJGjQoEGDBg0aNGjw/8TFaylOkmQdhiFFURCGIXd3d6+yl7MrHY/HazkW4/XxuYlonUvReDxeB0HAfD5HPA8QBAHOufI4SZI1wP39/VmIOLkSMdxCEyHfvV6vPAecJSJOJjxJknWv16t41zm35XE5FggRsn7q1Di6UMlxCXHYeFKHv4YlQQyWdVsnjp0aRxOWpukafoS2DnsxREJcX7cLOmokLQTHIuJgIdLOrId9ngVKEpxzTLI+nShitPqdIArpRF3mLqp4XsvR6SEE397eHmTDi/8s1Ro2RlkPAVseFqPyq5Ts65SgG7GapLyJ/yVsUZIAMM3alf8IhGgdTc65F9eIZ/9JclyHJ1BuSoiwhUyQ5S1W/YT4+mqz+SwHYDVJKcJ3/Nb/AlCJBi2jLm3k/HNTY++LpZ3Z6myP7W8hSMIaemR5xnLpaF39UiHC5Qva327LiJgOP9OefPDWFK1LEy8tdV8iftrH8DRN19qLokgM7PV6pQfsdc65yoYX/bfE3ZjL/oD24z3zP97jspzL4ntKXKbgCj63P+CyvEKsbp9al6zra5MkWUth3oValnQf9xUkDV+VFugoWfTf4/IFQTcCIHqckOUZq37Cuz58WUbleYmG4XDonRUEvplB7xc26VkXEVuLaZqutUJfrttwF0Ot9/X6xzcTPv3zFoDHzgiA5WIBQPdqgMsXLBcLOlFElN8xm824ubnZOTforqCNF70WQRBsdY3yh2+AsX3bVl57vU4LXQx1fsZxzHQ6Zbq8Lo2PHv9kurwujV90x6y+fmQ0GlX+awnX8JHv0y+QrnGhDZeLfawLCSJUR4VvYhOFllCR/2vvb/6av6MoCpxzZFlGHMfMZjPiOGY4HJay61LPFtu6Vqz3Y+eVizRN10EQkGWZ12gx3FfV9UasUi3Hbl5v1jm35fGnHGDz2+qtS0UNiYCW9qoQURRFJfd9xmuC9NyuJz3NtiVOZD48PBC7W34ejXDO1fZ5H+HSgUS3jQLt/bqbqos4jtcAg8Fgiwh7G7urGvuqr48UOzNo+O4ULel1qaChO4OgblJsAcTdgtlstiVEE1G3Mcuw9o58rFxNhl6z0Lq0vjpCfaH/1IjcAugUSyDksp1heCiJkNCyd3VQrf62dvgMt/LtGB2G4ZbhVpeGJkG+97038D4SeyoifJvzhap+0mPbqJUtxPharZav121LfMmDkxbAMuxA/mNxn4io6wKyUbth/bhLju1wJZ7fJcdGhOzlpXeDLQC37AGuJMISsk9qyEZsrbDQRuo1X4exncMn89DnAS2tQIiQCLDYRYSva2j4vAdVo+wgo88VRVGpP4caLmhlWXYBEMdxeQ+QtwewcluRIL+fS4QUKd89Rkm+qQHz+bwSCSLjWIYLyiLoI8KmhsU+7VNgc7kuPeS8JexU7wm2uoAQARsyALJ8szH5FuxTLPUcob/tWGsHnUOL2754tnAhpbLWLcjyDRHfVjFQP1na4UXIqJvVT42DlfgIeYoIqBqu2+i5XokJjq7MRwhsEzGdTiv3D6/1dvjoL0d1DTGoECNEvJbhgrO9HRZivj/4ePJhZYMGDRo0aNDg5PgPj2xBW+ZaI/sAAAAASUVORK5CYII=",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 50,
                                left: -31,
                                top: -18,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
            ],
            callbacks:
                "const type{\n    level_requirements dict\n    random_prod_factor dict\n    supply_requirement integer\n\n    accept_cargo_types cargodict\n    prod_cargo_types cargodict\n}\n\nlocal type{\n    total_delivered integer\n    current_production_level integer\n    random_range integer\n\n    i iterator\n    level iterator\n    cargo iterator\n}\n\nindustry:storage type{\n    supplied_cycles_remaining_cargo cargodict\n\n    base_prod_factor integer\n\n    num_supplies_delivered 27 list\n}\n\nlevel_requirements 0 [] 100 =\nlevel_requirements 16 [] 150 =\nlevel_requirements 16 5 * [] 300 =\n\nrandom_prod_factor 0 [] 8 =\nrandom_prod_factor 1 [] 12 =\nrandom_prod_factor 5 [] 16 =\nrandom_prod_factor 7 [] 20 =\nrandom_prod_factor 10 [] 24 =\nrandom_prod_factor 11 [] 28 =\nrandom_prod_factor 12 [] 32 =\nrandom_prod_factor 13 [] 36 =\n\nsupply_requirement 8 =\n\naccept_cargo_types ctt:PAPR [] 1 =\naccept_cargo_types ctt:ZINC [] 1 =\naccept_cargo_types ctt:FERT [] 1 =\nprod_cargo_types ctt:KAOL [] 16 =\nprod_cargo_types ctt:NH3_ [] 17 =\nprod_cargo_types ctt:ENSP [] 9 =\nprod_cargo_types ctt:FMSP [] 9 =\n\n\n/*\n The following is a replication of what FIRS is doing for a primary industry.\n See: https://github.com/andythenorth/firs/blob/4.4.0/src/templates/produce_primary.pynml\n*/\n\n/* Get the total amount of supplies delivered in last 27 production cycles. */\nfunc:produce_total_supplies_delivered def{\n    i 0 26 [..] loop{\n        total_delivered total_delivered num_supplies_delivered i [] + =\n    }\n}\n\n/* Calculate current production level, based on delivered supplies. */\nfunc:produce_calculate_current_production_level def{\n    func:produce_total_supplies_delivered ()\n\n    level level_requirements loop{\n        current_production_level\n            level_requirements level []\n            current_production_level\n            total_delivered supply_requirement / level >=\n        =\n    }\n}\n\n/* Set the number of supplied cycles remaining per cargo - used to display 'supplied' (or not) in the industry window. */\nfunc:update_supplied_cycles_remaining_per_cargo def{\n    cargo accept_cargo_types loop{\n        supplied_cycles_remaining_cargo cargo [] supplied_cycles_remaining_cargo cargo [] 1 - 0 max =\n    }\n}\n\n/* Shift the array of supplies_delivered values one place to the left, and zero the last entry. */\nfunc:produce_256_ticks_shift_supplies_delivered def{\n    i 0 25 [..] loop{\n        num_supplies_delivered i [] num_supplies_delivered i 1 + [] =\n    }\n    num_supplies_delivered 26 [] 0 =\n}\n\n/* On arrival of supplies, push the amount to perm storage, then clear from stockpile. */\ncb:production_cargo_arrival def{\n    cargo accept_cargo_types loop{\n        num_supplies_delivered 26 [] num_supplies_delivered 26 [] industry:cargo_incoming_waiting cargo [] + =\n\n        supplied_cycles_remaining_cargo cargo []\n            28\n            supplied_cycles_remaining_cargo cargo []\n        industry:cargo_incoming_waiting cargo [] 0 >\n        =\n    }\n\n    /*\n     Update the production level immediately, so that production level text immediately updates in industry window.\n     Production won't actually increase until next 256 tick production cycle.\n    */\n    func:produce_calculate_current_production_level ()\n\n    cargo accept_cargo_types loop{\n        result:inputs cargo [] industry:cargo_incoming_waiting cargo [] =\n    }\n}\n\n/* On 256 ticks, if supplied, produce extra output cargo at appropriate multiplier. */\ncb:production_every_256_ticks def{\n    func:produce_calculate_current_production_level ()\n    func:update_supplied_cycles_remaining_per_cargo ()\n    func:produce_256_ticks_shift_supplies_delivered ()\n\n    cargo prod_cargo_types loop{\n        result:outputs cargo [] prod_cargo_types cargo [] industry:production_level base_prod_factor current_production_level * * * 16 16 100 * * / =\n    }\n}\n\ncb:production_initial def{\n    /* Highest value in random_prod_factor is 13. */\n    random_range industry:random_bits 14 % =\n\n    level random_prod_factor loop{\n        base_prod_factor\n            random_prod_factor level []\n            base_prod_factor\n            random_range level >=\n        =\n    }\n\n    /* Initial production level. Can be changed with cheats. */\n    result:value 16 =\n}\n\ncb:production_change_monthly def{\n    result:value 0 =\n}\n\ncb:production_change_random def{\n    result:value 0 =\n}\n",
            type: "primary",
        },
        {
            id: 10,
            available: true,
            name: "Pyrite Mine",
            colour: 181,
            fundCostMultiplier: 252,
            probabilityMapGen: 7,
            probabilityInGame: 4,
            prospectChance: 75,
            layout: [
                [
                    [-1, 3, -1, 2],
                    [0, 8, 1, 5],
                    [7, 4, -1, 6],
                ],
                [
                    [3, -1, 2],
                    [0, 8, 1],
                    [7, -1, 5],
                    [0, 8, 1],
                    [7, 4, 6],
                ],
                [
                    [0, 8, 1, 3, -1, 2],
                    [7, 6, 0, 8, 1, 5],
                    [-1, -1, 7, 4, 6, -1],
                ],
                [
                    [0, 8, 1],
                    [7, 6, 4],
                    [0, 8, 1],
                    [7, -1, 5],
                    [3, -1, 2],
                ],
            ],
            cargoAcceptance: ["ENSP"],
            cargoProduction: ["PORE"],
            placement: "anywhere",
            tiles: [
                {
                    sprites: [
                        {
                            sprite: {
                                id: 2022,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 122,
                                left: -31,
                                top: -88,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 2022,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 122,
                                left: -31,
                                top: -88,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 2022,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 122,
                                left: -31,
                                top: -90,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 2022,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 122,
                                left: -31,
                                top: -74,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 2022,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 122,
                                left: -31,
                                top: -90,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAB6CAYAAAAPiFUVAAAEy0lEQVR4nO2ZoXPbSBSHv9wYCAgsWCAgICBgYBBgEBAgYBBQEHCgoH9AQODBAwcM7g8oKCgoKCwwKCgIMCgIMDAwEAgQEBAQWCAg4BkdkFexHcdtbSnOTd834xlLtrX7fn6/p90nEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARB+B9yduoJWKIoqpRSzfFkMnmRub0KAaIoqpIk2Tg3Go34+PFj5/P7o+sBXju9U08AIEkSzs/P0Vo35/I8B7q3xquwQBAElVIK+9Jak+c5xhi6toZY4NQT2Mc+a7TFqxYAahGMMY012ua3t8DJBbgd+NUbd/nkvP8we5HxT26Br3lKsHS49IA8hxx4eLnxTy5AknGGV1ZkOdpxAPCUS2YK6KnOxz+5BbbxlIt2XTzl8pw1bgd+1dZ4J8+A59hnDe26rY3zIgJcX19v/GM/s5wd9hQzDLus8X6RtrYS7FyA8XhcGWMwxvDwUP+FURRVANPp9Mym8yLbXOB4yoXcbBxrd1UbWqRTAcbjcXV3d4fdzAyHwydCLAAW9wy8tdVe0W6Q++hsM2SDD8PwyfI1DMMNISz6YQ48pvpsaQiWDtpxmgzQKzFzY/jnPj56/p0IMB6PqyRJngRud3mWMAyfiABwnsVNFixWNcAK0FxrJcTtt/ujYuhEAMd7WwHcvvMxxmwEvS6CMYbRaMR2jWjYsoatE/aczYhjROhEADe8qQCWhQF2C2GDX68RP7LGLKuvF6intjhUhM6K4Gjgcreo37//nAJw++4xwPXgbVbYwLeLZR6eA2CKOQCJMaAAU2dBbszB8+wsA95GAZN5gaMUJqkDsRnx9+2AXTVim+dqxHQ6RRWGQDkMPF2LUBy2PuhMAEetfNrvk8cxl37J3aIubPussatGAPz7Kd0YY1kYLpYTtOMw8D0WacaX1PxyPK1ZYLN5mRG7l+Rx3HyutWbo142N56yR5zl5nqO1bmxiA1dBCIDreRRZRmkMybxEe85R64ZWBNjd19dM8Jrjybzg+jwkCHyMme4VYj349cABvHRK5keUK9/nZYnH4XuDTleCpckpsgyorTCZxzCPufTrwucoh9Lk9FwFPArRc/vMPqU4Sm8EbgqD8gNK39vIrmNoRYDnm5ce4fIryldQLMCH2P2T73EM6WPajgYZdwuvEcJRGkcpXM/bCBxqK2U75jDwPQa+V/3q6rC1DNjVvBz68Y6+fm0NWxzB1oeYWdpHBWGT3sr3UIVqvgNwdXXBYlb3CYaeqjdN1PuHQzZKRzdEDunprVvDYguoTXmL1hqlFFdXF2itieMUkz7+NjN14If2CI7OgH2Ni33WKI2hND/u8V9dXfDt2z1xnBIEPp9X1t/125PcBn/U09tljaj3gam5+anrrwdub3/2Gl/Sx3XMl9QcNP92imDGWUIJlPWJ1NTWYMn3re/6DzPo+UR8oDRw7940zwHB27CGSTM+sxn4RTEG4GvcziKus35A4FEFS2djN2fRrtvs5d/0qUoDy37ELO1jV5D2LmALZduBWzp9OmxF2LbGulff9KkASlMf37s3zW0Q4Dz9C2g/cMureDy+jhXE0lXggiAIgiAIvz3/Af5bo0LulIorAAAAAElFTkSuQmCC",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 2022,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 122,
                                left: -31,
                                top: -90,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAB6CAYAAAAPiFUVAAADgUlEQVR4nO2YoZabQBiF7/aMQCAQiIgVEcgKBDJiBWIfIXIfoI9TuQ9Q0QdAIFZURkRURiAiIhAjEBFzDhXTfxhI2t0kQNpz7qcSTgJz7/z/nT8BCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYSQ/4aHez58vYrbWAcAgK8/93dZy10eul7FbZ4YlDsFADCVwSIK72LCp7kfuF7FLQBsNyFiHSBPrPiDbvDl82M793rUXA96fYnacqdgKoPnHAAaVwFp1mC7CVFHx7mW45it5KTf06xBUcLtuvCcw5nw7Uc927pmNUBe54lxJqSZrQRTGQD2GjBfKM6SAdLbIrIoAbVUruTzpBN/0A3SrMHrSzRLHkzusuy8JL2UvVoqxDpw720u2DY46MZ99vteT7rGSUNQxMc6QL08Ik2s2HLXiVdLu4TtJvgt3JpRlNYE7PWUS5ymAnzhAFypD0X7VSEhKK+Bzqgp82D0DPDFSz+LEYDtc8kCoDOnKO1xKGw3IfLEIM2aXoCOzagG+P2eZt1OSp+LQLkuldC1QejuJcdlUdqQnGpIGs2A9SpuTWWQJ3bQKXcK202IouwEA50wmQLlBBATFpH9jmDzwH5vChNuNuAJqn2CagErYrsJXe+mWeMExTpAUdpdfs5tVciO54nptQVgDfSNk6lx7OPx6nAR0QAQP4ZYRHaKM5WBWqresOOHnOCPv1IFYhwAdy8A7n5AF5T1vsEbzM3heNUx6ItfrCK7YBxdqqdJN+76yPleR0dnhqkMttpeE/EH3QC6a52iNEByfh23mnBxCwx33lQGsQ4Q68AJFvF1dHSigc4Q2U1pETkJ0qxxn19EocsQH6mm+DE8Wc81XOze0ADBFzIsYwkyfxKU3wFANxoD6GWBWqqTbBhS77uj85pquLgF3mAefBNkkQfdQEWqd+ZLSwD9Y1DKX/pZPquWqmeEiPdF/m1dl2oBRgxBMUIqwZ/zh9dk9+WI9Mv8PbFjBJ/PKAYA/XYAun73/+TwW0Ny4KPixxYujHLTP+UCgJO53sf/ZWgqc9aAqYQLo0yCbzAPslAR4fezDDF1dESaNScj8XtBNyWju3uuGoZ97uOH3rASpt59YMI/RM6dz2KIiAZOd//WY+1SZv0f/qNDyxzC/xluneQIIYQQQq7lF2l1AYXxkFOkAAAAAElFTkSuQmCC",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 2022,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 122,
                                left: -31,
                                top: -90,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAB6CAYAAAAPiFUVAAACXUlEQVR4nO3Xr3YaQRSA8a89KyJGrECsQERERiCQFRWIPEBkRUUfrI8RgaioRCAiKyIqEIgViIg9h4o9dzNZaJLCQiO+n0nYf+y9c+fOAJIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSXrfPvyPL70dl9visqB5aLiZwd0cbmbtuW/f67O+01m/7HZcbqsysao3RAKKy4LZVcP8V8GovmBdPtI8NKx/bwD4QXPSdzzJwz9TbOP/0Th1o1yVCYB1+QjA7KoBYLl4SkpudtWwXCTu71fdsaETUrx+yb+J4Efj9Gx0oemuidKH58GP6gtW9YaokmWdmEw3QMVkumG5SHC/2sJwiRjkIfmIA1SfSqANFOiCg3b0Y+Tzso/zcU3z0JBPF6BL5upn3V17bCKOurkf+PV11QWYN7a7efs3nwL5aPePRX+Ic/0KuZkxWCI+HnIT7AYfLxqjC23gy0WiKlM3mm1Jw2TaBh+f474IOq5fl49UZeqqqSoTy0ViVF8wGie+fE1/fZ+3OLgC8rn+khjNfceiR0QfANi3SuTTB+gqIRyzYgw6Bfr6yYm5nCckRhzoquFuzk5TDNEf4nnHLpmDL4P/kpR8MxRVUJXpWT8Ado71A4fDe8DJNhkvJSJPQjTKWBHgqdSB7lhe8sAgwcMZdoL7EhF7hLyx5fKlMlaQ7txAgYeDV4FjRfBRAZNpu0LE6Lebp3aaRO/I5/q72gi9pr87jO4O7KwQIa+QoUc9d9YEwP5ls5+MPOBwqh9FZ/01+NbNyql/Ab4bh+7eJEnSIP4AbZ5Pj+QHxSAAAAAASUVORK5CYII=",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 2022,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 122,
                                left: -31,
                                top: -90,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAB6CAYAAAAPiFUVAAAGEklEQVR4nO2boVfrWBCHv7enIiLiioiKiAhERQWi4glEBQKBRCBXIFbwR6xYiUQ8gUA+gUAgVlQgEIiKCkQFIqIiIuKKioie0xXplCRNS0pu2u579zMNSZrM/O7M3MklBYvFYrFYLBaLxWKxWCwWi8VisVgsFovFYrFYLBaLxWKxWCwWi8VisVgsFovFYrH8OnzbtwFCv9+fK6WWfz8+Pu7EtoMQoN/vz8MwzO07PT3l7u6ucfv+aPoGh05r3wYAhGHI8fExnuct98VxvJN7H4QAkIqgtUYplRNCaKpGHIwAmyirEVdXV3MTNcLWgH0bUIUma8T/QgD4vEZ8lb2nwHXXn5+7s5X9/vuQ664/b/r+e4+Ap/GEQDmctIE4hhh4T495rtv4/fcuQDjjGzqZQ4znOAC0lUukp9y+TX6/TrCt3J2MvHBwAhRpukbsPQU+o+kacfACNF0j9p4C111/ft7xV/a3lVsa4qZrxN4i4Orqag7gLB5wuv/+XB6Lp1PgF50GxfHhcIhSatnd9c4uAQh/3u10GtyZAEXHBdkeDAapEJdX6YGfdzuxq3GFs44DuVGXTyC3D9IlMYBkkRpvUVoEpQZImtSNksYEKDoO5Ea+TIQs64TI4rkuf7+OD0uAMseBFWe7cTqZe67LY+KsnLMuIrI14mGia9tvrAasG3FxQMg6fh+OCSIH/E6p01kGgwEAp4ZrRG0Fq464EI6fAQhmDnS/L509maULHBIRxdog24JExM3NzX5TQCk1B7i4uADg/f195RwxvCiG1jrn+H04Xgojx4tC9no9AB4eHgAIw7CWD7VTIHHOcgaJEOumu6wzSimexiMAgsgh6PbX3qfoeNw6Wxz5Uct+IzWg5SoSyoXIRkRZOAedfu5a2TBXSq113P9+wjSKmK4G3Ha21/t6igqOSLQm0fFGIcoiIsumUBfHHeXhKIXy20yjqLbtRgRw220SrSsLIVTJ8aLjPTcinLzS7V0wGY5q224mAvw28Xi8tRDZKKjquBf0SqfJr2JEAD1JQ/ErQogIVR0PAp84jnkb1kz+BY08DG0jhAhQ1fHhcEQ4CXE6Zmw1IoAUI4kEoYoQcUsBWzh++hfxdIQ7qV8AwcCKUMtV6DANx01CQFosIZ01XP+IlqtQwREqOOLET/D0K57noVxFEPgopZaOR50zYvV9ee14PCYxUAtqCzCbpkYkOv5UCCEnxGJ7W8e9Tme5mlQHI2uCKjjCUen/6zYJIZGQjQjZ3mbEpQ8wgREBsiNaRQhB+W26vSOAyo5Lqsj36mImAkpyvIoQehItp7OqjkuqmMKIAMUQrypE2TU+c1xSxVQf0Mj/BbYRQtrZqo5LqpjCiADbTH9FIdK+QAPVHC+mSl321geIEI5SX3L8oPqAtMP7jfsASFvZz4Qw0QeI4wfZB0A1IYRt+oCi4wfdB0A1Iar0AU05LjTSB2SL0yYhyq5R1fGDXQ/wOumDerFKy+NuOvXFOMpLFzWjD8fl+9MoMrbm9xnG1wOip2sA2ue3ALn1ACgXAtY7LpEhIy6fehIdxjRY1gcARE/XSzE21QjpAzrTEZ5+XR7v9tIpUq4hZFPFBLUF8KY/6On7XI4XWfeskN2WPkBy/W34nnO+WCP60S396Lau+eZqQE/f4zkOgwrnZpfKJOQ/W+yUEb9M7gGIgDhJatttZBYIW5sNKZv+oLwPELI9g4x4N7wh0lMiPTXiPNSMgPMOy7e43nRCOEsAlTsn0XGu6hd5eXwBFn1AZrEzm+OXyT1vSYLnOEvHtb9YFo5HdVww94KEiPESqdx+5WiCmcNQ/Qmkzw5et0eiNY5SuO00BeRTKns/umWQvgXDqcuK46PRyIjtxt8QKQpxvEiPsJXkhJDpUMg+EkvIiwDHrQS9eIni+fnZqM2NvSMkQrzpj33BzFluZ4WAdMTjJOH9+B8SremGN4xmDkEQAOZGvEhjr8k9jVNxs0JIFISthJ6+B8BLFnntfIjTdV/QfoegKeMy7OyXo8WIkGjIFjYg93YINDfyws5/OrtOiOz7Qk3k+jr29tthEWLiHAPNj7TFYrFYLKv8B7Br/cMW+PtSAAAAAElFTkSuQmCC",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 2022,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 122,
                                left: -31,
                                top: -90,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
            ],
            callbacks:
                "const type{\n    level_requirements dict\n    random_prod_factor dict\n    supply_requirement integer\n\n    accept_cargo_types cargodict\n    prod_cargo_types cargodict\n}\n\nlocal type{\n    total_delivered integer\n    current_production_level integer\n    random_range integer\n\n    i iterator\n    level iterator\n    cargo iterator\n}\n\nindustry:storage type{\n    supplied_cycles_remaining_cargo cargodict\n\n    base_prod_factor integer\n\n    num_supplies_delivered 27 list\n}\n\nlevel_requirements 0 [] 100 =\nlevel_requirements 16 [] 150 =\nlevel_requirements 16 5 * [] 300 =\n\nrandom_prod_factor 0 [] 8 =\nrandom_prod_factor 1 [] 12 =\nrandom_prod_factor 5 [] 16 =\nrandom_prod_factor 7 [] 20 =\nrandom_prod_factor 10 [] 24 =\nrandom_prod_factor 11 [] 28 =\nrandom_prod_factor 12 [] 32 =\nrandom_prod_factor 13 [] 36 =\n\nsupply_requirement 8 =\n\naccept_cargo_types ctt:ENSP [] 1 =\nprod_cargo_types ctt:PORE [] 20 =\n\n\n/*\n The following is a replication of what FIRS is doing for a primary industry.\n See: https://github.com/andythenorth/firs/blob/4.4.0/src/templates/produce_primary.pynml\n*/\n\n/* Get the total amount of supplies delivered in last 27 production cycles. */\nfunc:produce_total_supplies_delivered def{\n    i 0 26 [..] loop{\n        total_delivered total_delivered num_supplies_delivered i [] + =\n    }\n}\n\n/* Calculate current production level, based on delivered supplies. */\nfunc:produce_calculate_current_production_level def{\n    func:produce_total_supplies_delivered ()\n\n    level level_requirements loop{\n        current_production_level\n            level_requirements level []\n            current_production_level\n            total_delivered supply_requirement / level >=\n        =\n    }\n}\n\n/* Set the number of supplied cycles remaining per cargo - used to display 'supplied' (or not) in the industry window. */\nfunc:update_supplied_cycles_remaining_per_cargo def{\n    cargo accept_cargo_types loop{\n        supplied_cycles_remaining_cargo cargo [] supplied_cycles_remaining_cargo cargo [] 1 - 0 max =\n    }\n}\n\n/* Shift the array of supplies_delivered values one place to the left, and zero the last entry. */\nfunc:produce_256_ticks_shift_supplies_delivered def{\n    i 0 25 [..] loop{\n        num_supplies_delivered i [] num_supplies_delivered i 1 + [] =\n    }\n    num_supplies_delivered 26 [] 0 =\n}\n\n/* On arrival of supplies, push the amount to perm storage, then clear from stockpile. */\ncb:production_cargo_arrival def{\n    cargo accept_cargo_types loop{\n        num_supplies_delivered 26 [] num_supplies_delivered 26 [] industry:cargo_incoming_waiting cargo [] + =\n\n        supplied_cycles_remaining_cargo cargo []\n            28\n            supplied_cycles_remaining_cargo cargo []\n        industry:cargo_incoming_waiting cargo [] 0 >\n        =\n    }\n\n    /*\n     Update the production level immediately, so that production level text immediately updates in industry window.\n     Production won't actually increase until next 256 tick production cycle.\n    */\n    func:produce_calculate_current_production_level ()\n\n    cargo accept_cargo_types loop{\n        result:inputs cargo [] industry:cargo_incoming_waiting cargo [] =\n    }\n}\n\n/* On 256 ticks, if supplied, produce extra output cargo at appropriate multiplier. */\ncb:production_every_256_ticks def{\n    func:produce_calculate_current_production_level ()\n    func:update_supplied_cycles_remaining_per_cargo ()\n    func:produce_256_ticks_shift_supplies_delivered ()\n\n    cargo prod_cargo_types loop{\n        result:outputs cargo [] prod_cargo_types cargo [] industry:production_level base_prod_factor current_production_level * * * 16 16 100 * * / =\n    }\n}\n\ncb:production_initial def{\n    /* Highest value in random_prod_factor is 13. */\n    random_range industry:random_bits 14 % =\n\n    level random_prod_factor loop{\n        base_prod_factor\n            random_prod_factor level []\n            base_prod_factor\n            random_range level >=\n        =\n    }\n\n    /* Initial production level. Can be changed with cheats. */\n    result:value 16 =\n}\n\ncb:production_change_monthly def{\n    result:value 0 =\n}\n\ncb:production_change_random def{\n    result:value 0 =\n}\n",
            type: "primary",
        },
        {
            id: 11,
            available: true,
            name: "Pyrite Smelter",
            colour: 19,
            fundCostMultiplier: 120,
            probabilityMapGen: 5,
            probabilityInGame: 3,
            prospectChance: 0,
            layout: [
                [
                    [6, 3, 8],
                    [2, 6, 0],
                    [6, 6, 7],
                    [2, 1, -1],
                    [1, 5, 4],
                ],
                [
                    [6, 6, 6, 0],
                    [2, 6, 3, 7],
                    [1, 2, 1, -1],
                    [5, 4, -1, 8],
                ],
                [
                    [2, 1, 3, 5, 4],
                    [2, 6, 6, 0, -1],
                    [1, 6, 6, 7, 8],
                ],
                [
                    [2, 2, 6, 6, 7],
                    [1, 6, 6, 1, 0],
                    [3, 4, 5, 8, -1],
                ],
            ],
            cargoAcceptance: ["PORE"],
            cargoProduction: ["ZINC", "SULP"],
            placement: "anywhere",
            tiles: [
                {
                    sprites: [
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 122,
                                left: -31,
                                top: -90,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAB6CAYAAAAPiFUVAAAEvUlEQVR4nO3ZIVTjSBzH8S/3KioqRoyIiBgRUVEREVGBQFScQCAiEBUrKlYgEYiKFciKEwhEBQKBqKioQFQgKioiEBUVFREREREjEBV9LytKuuzBcpQL7LL7/yheX5nM/DL/yUwKQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCHEn8UYk//sPrxWpYxGlFIYY3KlFNZa4jjeKaPd9/BXWQ3FcbxjrUUpVVaT76K0AIAPdecLpZQAsCmBj6b0EvhopATKakhKQErgDysB3/dzAO02yJJZKZ25urralJF2PK7HY9I0w3E0jtZ0PoWlB7x1g6uQ3IvMow1PsQP0fT+v+3torcmyDK01Z73us9d5OPBCNIuZzeZorZlOJwB87nRKD+FFjSmlcmvtDqwXu0rVY7VcsGjHBCMfgDiOCXb3yZIZlZoDQLO5S6u1h+s4BL736FpPDRzWYQ6vp2itGQ36GGOI45jO0cmTM6J5Ms6VcRkldSqn293UF60B1todpdTmwFOrKZQO8C4NVDyMaaGUYjFb36ksmVOrLBkN+riOQ5KmT7Y7iRaMxhH/XjyVUqTxLVmWAXC3qtI5OmE2mwMwHA457/dpnozzv8/n+WTRAmDfndMZxFsdzF61CNoswrgGAOMatNYAeI3dzXfuVlUAkjRlPL55sp2zXncnWURPBhEEAa6u0Nw7IEvmm3IYDfrUKkuyZI5NUtJ+l/3WOhhXV+H6aqux/OciWG9f5vF4RK0RUIN8df/57e0ZAHE8Jo5h5R2RKId0MkIpxeouxfd9RoOLZ9uP45ggCImiAZP7z3YDj1ZrfVfH4zFhGBJFEeAD63DDMGSUgqop0n6XauszbhRhjFtOAPX2Za7cdS3XXI+ltawWZ/i+z7LZhaCPMi6zwWj9HcehXY/pTxRKKbTbII5nDIfDZ2vy9vZ2B3q5tZYgCBkMekD4KIiC7/t4nke90WSULkndPZzkhiVgjMtEB1sF8MPOGWNyay3O/hlFEOlVB+dwPXAAGyfYJMWvRDQ8Ta/XQ6l1AEFwSBRd3Q/wZXzfz4sjdRgek9p4E8TDxdJay92ywu39mjBOzaaPZ4fmyQX31QFUvCOqSlFzHJTroIzLzZcv6w5/6mCTbwtcux7T7/c3nd1m8A89FwSwGbzfqK+vc//3p/aMdsdydfFPeQHUgi5La7lLFgA41SlKKeZpHdPaR7kOJh3R8DTd7vPP+209DMIYg+utp3cRRGF4PQVgejMEttuRPvtFpVRezIBsFm0GX+z+Mt2m5jjML9tvugUuDlpheEwUDTZBZFnGZV/heRfA67bizz4FrLU7RKcAVJ3DzfPVOOsAkvHxu+z9vw3s+8XSWovn/b8zyFb/+PDI+9r6LkNRGmUcvkofxGnvPH/rA0yZSu3cae88f48DTJlKeyMEfLddLQ4waZZxdHya/6ozotQXIi85wPQvBr/Ur0ilzoAgWD+emnsHTG+GH2JGvMnFj4+Pc4AoinCMz/RmiHbrHBwcvMtLjm286YWLIJJsxfRmSHPv4NGM0G6daHL9ewZQ+NGM2Gs2AOj1er93AIUiiMViged5P3XgQggAvgJ0BFchwoQoawAAAABJRU5ErkJggg==",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 122,
                                left: -31,
                                top: -90,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 122,
                                left: -31,
                                top: -90,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 130,
                                left: -31,
                                top: -110,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 122,
                                left: -31,
                                top: -90,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 122,
                                left: -31,
                                top: -90,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 122,
                                left: -31,
                                top: -90,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 122,
                                left: -31,
                                top: -90,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAB6CAYAAAAPiFUVAAAClElEQVR4nO3WrVsiURjG4R97GQwGwgQCcQKBQDjBsIFA2EAgECYYNhiMRoN/hsFgMGyYYDAYCAaCYcOECQTChAmECSdMMBj2umbD7BkQP1ZUwPDchfkAznmf95wBEBERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERGRMAyLMAyLbc/jJbV1fXG32y2Ojo6eXA+CYG1jvsenT2ax2+fn5wB85SA+bRLXo7tiEo2rc9/3q+PFIJIkAaDdyPAaTWw2Y3B4trUwPjzw9eju2f29HEaSJNze3uL7Pv39XS5vZtV9YwwAp6enGw/i3QO6PV511HSffZ8LIk1TkiTh+KDN5c2sKtrd6+/vbmVFrDzQS3vcBeGWvjtP0xSA+zgEoDfs8WuUU6/XyfPy9We/iddoMp38xvPK4+/9k42EsPIgg8GgAAiCoLrmguj1etW15cI73TatVtn1y5vZo+KtnWFtxija5Yd5wPMaHJ5cbySAnVU/kOc5AGFYFhYEQbUC3B6HeeFhdF8DaA/6xSSDxk5Emqa0Ol2yNMZa8LwmZ2EKPDCK6hwfND+htLdZOYDGfQRARtnNMAwxxjzpuCscyueFO87+GIZDw9XVFQCe12Y6jarvz/Mca+cPyHV79zILzF4BkO0ZfN9/stQnWQMon+ydTqdwHV/cJlCuCIBpHBFl/sa3wIcHWQxiPB7XoOz4cqGu468FYW1Gq2W+9q/AW7zW8eUg6vU6aZpijOHi4mLj/wNWfga8RRzHNaAAmCT2URDD4RCYB+FYa9cxlf9aSwBQhQBLQSx3fHG1bMPaAnCWg3Bcx+M4rsVxvO5pvOjbpgb6V2gtz3NanW71f0JEREREZDv+AiX/NS38YLVFAAAAAElFTkSuQmCC",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 122,
                                left: -31,
                                top: -90,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAB6CAYAAAAPiFUVAAAFZklEQVR4nO2ZLXPqWhiFn95BICK22AKBiIiIqEBEICqOQFRUVhxRecQRlVceGXF/wBGVV/ADKhAViIqKiggEIgIRgYiI2CICwQxXhJ0mfJSPFnruzPvMdCABkqy1117ZUBAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQfifcfEVJ/3x48ciyzKSJGE0Gn3JNVga5zyZFR5FEUEQ2N2LrzThLAaEYbiIoqgm/E8x4aQntcKTJCEIAmzstz3/ChNOcsJDha+acM6O+NSDdzqdheu6Rwm30+Hcyfi0Duh0Oos49QkCB2DrfF99fnt7i9Z6zYhzdcSnHNSKbziKeW64u3F2jvjt7S1Jkhw8PT7jeqt8OAFV8cr1MMmE/sDw6/79Ea92xKb3vZeEz+yIDzvabH1fNBxFU2maSjEzhpnJNiYhiiL+tI7466MG2JGvolyPhqPoD3K01riuSxRFxKlf297neRAEpdht7+t0OosvM6CpNE6rBVB7bCpdmpAkCXaarJqyS7hdQO36zLEmfLgDrtpjyMfQBvIxL1zWzGk7r5y7Iw65/g91QBiGC2MMxhgmk0nttXF+RVMpsnHEuTrimE44egqEYbgYDodMJhOyLCMIAjzvrQsunRe8+eAsHbG6v9n6vvd0OCoBVrzneWRZVnvN87ytidC+TxbH5aNNgt+KOWYdYaeJ67oAPL02gaKY88nDXtoONiAMw4VdwFSxq7mqEasmALxML0sDgNKEakfMc8Ov+8taD+wr3E616fDv0xhg43V/18YYUxNdNcEYQ6/XY1dHzIx5O/aOjlh9vipc+z55muK0WsT9u9MY4Hg/FwDzvLjwTUZY8cPhEKUU8P7UsMKrjzYJm0zYJNzPRyTThEx1DzLgqBLsXTo0HEXDUfzuT+kPcjzPQ2u9Jl5rDbCzLGH7OsKWW3+Q8/TapOEonLZHu3vFVXtGM35Ea41y1MFajloHaK1pqmY5UgC/+1MAft33SJKkHPnVrrAJCIKgloYrNd64jpgB/YEBmmtRV+0WOitMv77u0u9nkB+m5agEPI6Ks9iRqiYi/D2uJaJKdbu62huOW+XfzGQkw8HSAFUmYXXEAZTb5vq6i1KKOJ4SBJ2DtRyXgEqLW2FB26CUYjgu9tlE3N95ZUdkWYbWmslkQq/X459/p0uhdaNmy0en1WJmDMr1CJyUJH5Ed4LieMv3WOEPz2k5hfI05cZnMYh3d9xRCcjTtLb9OCpGPAg6BO35ux1RFV/csvRypBWXTv24qv3WCXaO2xEHMMmUh+eUflz7WHlnufHZuSA6KAE3PovnOeWtyhqhfZ/HUQyjmKu2KjtiZjIay2KyiWg4PlEpvnjNm8eY3KDa7tY5bOe4HfHoOcVM64bZVHbzEIB9EnCQAYOYixv/YfFsfgKbjXiJY5i+qehdpgzHrdIIoBRfE86yIyqfrQrcFPVNwmcGBun+t/eDp8Ag5uJb44Fu/sDMFDNxkxGWoh+KC1z7TqAUyikSo1QR721sinqxnDZ085BuHjKIuRgeIB6OLEEbrRv/YQGwLREWpRRMi7lsb5vwdle4vu7y9PRKHE+Xi6GsPI41uYod8c40pKn2i/o2PvR7QNWImYFX6kbsoircddvlCDeVXppggLfSXZvjKReka4c9iE/5WXxbInZRFV6MtgGWAhv1ZJX7+diIr3KS39pvfIpEOD/pXaYYY4imfvltz5ag02qtC8eW7fot7DOFW076bydrxNz/RjT1y2hXfx2C04zsvpzcAICZKbZfnSLSduX3lcItZz3xaqy/UrggCIIgCPwHmUff4KiWs10AAAAASUVORK5CYII=",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
            ],
            callbacks:
                "const type{\n    accept_cargo_types cargodict\n    prod_cargo_types cargodict\n}\n\nlocal type{\n    current_production_ratio integer\n    total_cargo_produced_this_cycle integer\n    total_cargo_to_distribute_this_cycle integer\n\n    cargo iterator\n}\n\nindustry:storage type{\n    supplied_cycles_remaining_cargo cargodict\n\n    total_produced_cargo_available integer\n}\n\naccept_cargo_types ctt:PORE [] 8 =\nprod_cargo_types ctt:ZINC [] 4 =\nprod_cargo_types ctt:SULP [] 4 =\n\n\n/*\n The following is a replication of what FIRS is doing for a secondary industry.\n See: https://github.com/andythenorth/firs/blob/4.4.0/src/templates/produce_secondary.pynml\n*/\n\ncb:production_cargo_arrival def{\n    cargo accept_cargo_types loop{\n        supplied_cycles_remaining_cargo cargo []\n            28\n            supplied_cycles_remaining_cargo cargo []\n        industry:cargo_incoming_waiting cargo [] 0 >\n        =\n\n        current_production_ratio\n            current_production_ratio\n                accept_cargo_types cargo []\n                0\n            supplied_cycles_remaining_cargo cargo [] 0 >\n            +\n        =\n\n        total_cargo_produced_this_cycle\n            total_cargo_produced_this_cycle\n            industry:cargo_incoming_waiting cargo [] current_production_ratio * 8 /\n            +\n        =\n    }\n\n    /*\n     When low cargo amounts are delivered, it's possible that final output\n     cargo amounts < 1, which means no cargo is distributed. Prevent that by\n     stockpiling produced cargo on each production cycle until there is enough\n     to distribute. The case is triggered by low amounts being moved to the\n     produce cycle as a vehicle gradually unloads, and was noticeable with\n     Road Hog trams.\n    */\n    total_produced_cargo_available total_produced_cargo_available total_cargo_produced_this_cycle + =\n\n    /*\n     Then check min. distributed by dividing over 8, to get the amount divided\n     by max possible output cargos. 8 is the pathological case, this could be\n     made more accurate by checking the lowest output ratio in current economy.\n     For accuracy, this could also store remainders using mod(8) or so, but eh, TMWFTLB?\n    */\n    total_cargo_to_distribute_this_cycle\n        total_produced_cargo_available\n        0\n        total_produced_cargo_available 8 >=\n    =\n    total_produced_cargo_available total_produced_cargo_available total_cargo_to_distribute_this_cycle - =\n\n    cargo accept_cargo_types loop{\n        result:inputs cargo [] industry:cargo_incoming_waiting cargo [] =\n    }\n    cargo prod_cargo_types loop{\n        result:outputs cargo [] total_cargo_to_distribute_this_cycle prod_cargo_types cargo [] * 8 / =\n    }\n}\n\ncb:production_every_256_ticks def{\n    cargo accept_cargo_types loop{\n        supplied_cycles_remaining_cargo cargo [] supplied_cycles_remaining_cargo cargo [] 1 - 0 max =\n    }\n}\n\ncb:production_change_monthly def{\n    result:value 0 =\n}\n\ncb:production_change_random def{\n    result:value 0 =\n}\n",
            type: "secondary",
        },
        {
            id: 12,
            available: true,
            name: "Wharf",
            colour: 37,
            fundCostMultiplier: 152,
            probabilityMapGen: 6,
            probabilityInGame: 2,
            prospectChance: 75,
            layout: [
                [
                    [-1, -1, -1, -1, -1],
                    [-1, 0, 5, 15, -1],
                    [9, 15, -1, 15, -1],
                    [-1, 0, 5, 0, -1],
                    [15, 16, 11, 2, -1],
                    [27, 27, 19, 19, -1],
                ],
                [
                    [-1, 14, 1, 14, 2, 19],
                    [-1, -1, 10, -1, 11, 19],
                    [-1, 1, 14, 1, 16, 27],
                    [-1, 3, -1, 3, 14, 27],
                    [-1, -1, -1, -1, -1, -1],
                ],
                [
                    [-1, -1, -1, -1, -1, -1],
                    [27, 13, -1, 7, -1, -1],
                    [27, 16, 1, 13, 1, -1],
                    [19, 2, 4, -1, 4, -1],
                    [19, 11, 13, 1, 13, -1],
                ],
                [
                    [19, 19, 27, 27, -1],
                    [2, 11, 16, 12, -1],
                    [12, -1, 0, 6, -1],
                    [0, 8, 12, -1, -1],
                    [12, -1, 0, 6, -1],
                    [-1, -1, -1, -1, -1],
                ],
            ],
            cargoAcceptance: ["BOOM", "PEAT", "WDPR"],
            cargoProduction: ["POTA", "ENSP", "FMSP"],
            placement: "on-water",
            tiles: [
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 40,
                                left: -31,
                                top: -8,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAoCAYAAABOzvzpAAAIZ0lEQVR4nMWaLXTbyhaFv3QZBBgMGCBgMEDAIEBAICDAwKCgQCAgoKDAoOCBCwIKCgIKLigoeKAgIKAgwCAgoEDAoCDAQKDAQEAgQEBggEGA19IF6pmMZTk/bZIeIkvWaGbvs8/PyN7hL1mSJLXWmqqq0Fpzenq68zfW8eKTTiaTWj4LeP/zSxPxYpNNJpO6qioAxPMAYRiS5zkARVFgjAHg4uLiRdb26rknmEwmdZIkddVbQFARkKOUAhoi8jx3KojjmDAMATDG1L5ansuejYAkSerz8/PaGMNsNmsulpqSkOl0ih//figIIUJSkiR1FEXPRsSTy0y8VlUVs9mM0WjE0dEReZ7z+fNnRqPRGmillANdVRVFURDHsbsuJt8/dWg8mQKSJGmk/iu2syxjMpkQkPP+/Xvm8zlfv34ljmOm0ykAaZpiraUoCvecOI4BWM6/AawlSX+ep1r3H7Mp5cz3pFiapkRR5M63KQJuPWytJQxDB7htYRhirQVAKcXnz5//CMNvD06SpA7sFaXaR46+ZVnGeDwmTVPG4zFw68UuIg4PDzfKYmCvWDB0iVGsi5zfDY1HD5IYV0phrUUpxTL/TknozgHnSYCqvEAHCX4ZzPOcLMs6iRCQ4ukhizWCfZX1qitKQgJySsJHE/HgHHB+fl5/+vSplvhd5t8d0JKwWdRq7hYni8/znHD4jqq8WHueUorDw0O01ms5whjjcoRSCqWUA+8roaoqqqpyc5c03yXvD+rk/cGDc8S9bEkDsy1+82VG2I8a0FVKtasJ+9FGefMX3vXdXYpo3yvqK39M6Q1Haw1UQE4ZKCg1gb3i66y8E+PWL5MkqSXh+CXr9PS0c5FXReqIyJcZ+2bc+dx2N9jO8mEYds4hyVJstZjRG47c0VpLv8zoDUew+gG9g9sj23PExsXj4+Na5OsnG2st1lqMMWitmU6nG4s0xmCMaeS/mjs1iLXBSi5wuaJFTpfqJpMJ37Mp+2ZMVVVOgZJ/5Ki1drnHt/Zew534DYyzoPlc/LjChG/WHiQTbQuNdmXwJezP4e8L2uEC20PDV8RqMWM4CJivApRSZFlGFEWsFjN+3ihXiv3nCxE7PnDZmGzU5N6iGVVqtNbM5/PbmPsFtIuIQazQK+Mqg5h4XDq9rh7Ar/cSKl2q8/sICcOiKJwaZJ1CStshr5RSTtbWWgJ75W5SSjWTr4YUV0sCcnrVlWO5KApKtc/B6nYiP6MfjSZkWeaeZ6vUAW83TVprB17W4ptSyoFtd5az2YyqqljmuLFVr2Clb7vMKGoSs6xHKsyrPM+Zz+cIEavwjfOAi9neAmMM5ap09T56PWDfrCiKgh+9ZmxRFIxGTULqWmQ4PHIk+J6VBQEbwB151rp7txEhCTvaW2KuLftmjDFmzQlSeiWEd4wxtTAEjTyVUmsychuToHJh4IeF3wC1rSs0jqJdR/S2auAroytH+Ne6QkPKp1QCP6SMMaRp44hXAGZQkWUZWZbhK0IpxXw+d+zr1fB28rI5F6JY/XByK4oCrZs6PBqNOFitK2Iw/p9rdgSINDY+8DYR/n3+uXSP7YZqNpuhg8SBN8aQ5zlpmhIHOdbaRgF7uwU/bwxy7FLEdDp1cR6GIfnizNVYwPXtSil2r1P60dGGNwN7xXl2c+cW2bcuZXXd518XRQgpbY/HQU660IyHFelCd7fCXYoYj8fEceziRwcJWmvn7VLtM6QJi5vBmGV2jtaa3evUgbmywdb4FUW0O762bQMvR2mxBXjb42L58gb4FQJL3V97YL9aArC3W3SGhjGG+XzeMBrH7nOp9l2J60dH9PJL+tGRA+OXpPuI8JOeVAgfsCRp/7pf+u4DLvYKwC6bhwgRbUK6iBiPmwxbVRXGGLcgv3ZLogM2FiolaRsRWZat5Qe/ZxCC2ibJ2gfeBhz2d5vxy72GgO8/c24Gr/GJEAW0rYuIMAxdCbrTsksXLvLWZzweO+LuqvFtkP7xPo8LYCFiXoZunI7e8mrY7+0AjN59cgOvdyNgUwlyfldoABu9PYA1B8Rx7Dzp4ju7vL3HWpcQu4jw6/djpS4eL/v7RMkxUXJMena80wNYXP67s7iE4ZsPNYD9ef5rUAjYBvg1GybJ0jepGlprevmlCwMhQ7pLn5g8z13ZlXG+IkajEZPJxJEk5TnPc1T/J8X1AILN9YF4vNnIidLPTt66PVDnFvH15EsdDDSzs49u0dZa2uXyIeXzOv3/bS4IKoLSuv269A2+cvz3fb635b5t5cwMrimuB+7ojyNMAMimJxt4e10EfD/9Zwfg3cm3utdrbklPPzShcbOpCDlvQmP9WWH89tbrpaYMICgtKz3ceC3uS7gt9TRNyfPcARePd0u98XgQvyMY6DWPP4gAMX/g8M2HeltoNElT303EL0XM53NWerjx3r9dLe6TugAP+7sULeDx4QcATj8e3fvG604CfFtc/rsjOSIIAmz6ZSsRYvcR0f6BxH/pIsDF43HQAG173I/xKDl+MPBHEyAkACyAxXJVA7zeC7cmy4cool3O2lLP++uAxXyP3wxeY4LgTqlvs0cR4JuUz3cn32qA2dnH36oaWutOj7ezunjeBy7JbTE92Vn8Jo7fJkDs7OTtzvDNh3p374gbAHvuiGiHhJz7REgt35bcumL8IcntofbHBMBtaECTLIWIbVXDJyIOVncClxjfDRMCYGCCR8X4ffYkBPgmZJjxP7UFsBdbQ6NfLWGggO3JTYBLaX5qe3ICxIr0yw6sK6KLiLvq+M3g9bMBF3uxv8hEhye1nZ8B3rZ1UBEPFOnitgze1bU9h734n6Siw5M6UIpF+sWVwadObI+xv/LXNGj2GwMTsFqt6PV6T5rYHmP/AYjd8JZZLxH0AAAAAElFTkSuQmCC",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 40,
                                left: -31,
                                top: -8,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 68,
                                height: 93,
                                left: -35,
                                top: -61,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 4061,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 39,
                                left: -35,
                                top: -15,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAnCAYAAAC/mE48AAACQklEQVR4nO3WL1TbQBzA8W/3KiJOnKiIiDgRUYGIqJioQJyIjKhAIBARiImKigkEAjFRUTEZgUBUTCAQFYiJCUQFAlFRERGBiIiYiOh7N1HS8WC8NyCh7O0+71XcicvvX64By7Isy7Isy7Is6//T2nYAD0VRZAB839/sjcfjxuJ8NwXQLsbzHZQDabnea+cCgMHkjDAMG4n1QxOHPod2McmBNJ7vbPaUA3lechNNKX6uAPDDkWni+VubAO1i+jvrpNMS+ncFOL8qyKNLpPJYHXdRssNlKejqIbNkWHu8b16A+6MO6+SVA/OsfJT43PEoioJ2d8By1sw90Mihnh4b4boszvY351cdrxKu3vM8fzrxprp+X62HV4k/9DGNn9VxHX8hOdp7k+ms5SFPJS699V58O+DHct3ybXf8oVr+BUK1YDU/3ayl5yI9F+dqyjDIybKSPC9Z9C9YDReIU4036ZO7AZelwO0dkKZp662TB2jXdZAQEpl9x/dBB5rpdA5SAjDrXSAHHuK4iyc7zN2AZVHQVpr0etxKk2FdYTzbqyq+u7tr/Nsb6EcA5Lmk0ynQWt+tcwDOTz5tfdSf8qogRqORSafJZi3DAQBBEABw/fUYYCuX2996cTB+ODLRDlQFkOLx21QlPrtZ0hXtd5V45cV3gBCCJJkQxzFKKQB6vR4Ah4eH647vfyY52mt1/1Ccf14YT0x8MjVSSqNcfv+UMmE8aeS7vQmvHsvFz5UZT76Rpbcss6yxT1bLsizLsiyrZr8AhH/ymetw/88AAAAASUVORK5CYII=",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 4061,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 39,
                                left: -40,
                                top: -12,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAnCAYAAAC/mE48AAACHElEQVR4nO3XIXDiQBTG8X9vEBERKyIiVqyIQCAQJ5ERESdOIBCVCEQFohKBQCAQEYgTiArEiRPICEQFogJRUYFARERUICIqEMzsCSbpXTu94UoCiP3NMAzLDG+/feRNAoZhGIZhGIZxMaQ/0tXrqT5FratTFDmU9Efadt1366vpdWn7rJT1w//jo+BCvl8r2pfSKxzA263YLe/yz0K6COliPfykW98wHo9Luxwu4gCEENi2wE3u2S3v6NY3uKsIIQQAj+M+URSVcghnvQR8Fy09i4rj4DgOm82G9EXsv/MVAPP+DVI4dDodgnaoo0m30HlwliGYBVcWSGmxWG8B8ILe/t3z8uCzrUWaplSqTdbRqPD9nvQAsuANzwJgsd6iLFgmWzbf5wglkWHjr+BVv0vRXf/TSQ7Ad9GNmoWU++BJsu/4v4L77SGTXqv0/ZVawHfRrUDkgeMtZ+/4W6UUyoID+fV9acEzhRbM/upZp2E/5GYP6YfByxpuhzq68GAw0PE0ZPE1REiX6uJbHv4SO/7WURsYDAb68ccIYb/eTmQHAZx1uB2qkBuh9GUHgLAr1O5v8gORwmFmSebPKdHTE1W7cjXptYooWZhPd8ILbnXNWtPpdFBK5etxHDMcDknT9CI7Xph6s6+FEFoIoZXL60sprZTSQTs8yfP8sT7dmaAdaqlcbrtNRuEvkviZdZKcdaIbhmEYhmEYhnGw31Jz9d5VLb30AAAAAElFTkSuQmCC",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 4061,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 39,
                                left: -13,
                                top: -19,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAnCAYAAAC/mE48AAACJElEQVR4nO2XIZCbQBiFv+sgEIgViAgEAnGiAoGoiKiIQEZERpxARkREVFRUIE4gEJHIioiKyBOIExEnIiIjIiIQFRERiAhmtoJerlxzM6FNSDPdb4Zh4P9n9+3bNzsACoVCoVAoFAqFQqFQKBSK/4ubOs1hGEqA79vyOVvNmU6ntcb41zha/Hg8lo/3nxGGRmHmANg6rHegbQyS5eYqjXh3TJPjj6RpmgDMvJjNZoetv9QLMye5EzK4NeVZVJ6Ro3bND2K5TGM6ernzMy9GWC3MaYfuB1G+W+2uMhFHi3T8kSyW3xBC4O0yoGqEZ+mV/msxora45zS8ZYRplka0nfKeZTuyrGqE1YkkQJaOLm7OHwsIwolMk0+1EpHqIQBGq1WpLb/2L2bEX09cJxFRMT44hrBKQ57uO40bcbIJ3zICwJn38SydzO7zOFujeXfAy8L1pwm9nstgMGjcAO1UAz0kwxsoD8v052HZng/LmhWxAHyWGIbAzheY5hbXcknTNQhxKhm1OZvjhxJBu1vpcV2XxSLHdQ0AFuMv0O6SJEljSThZAl7znIjKYTmblsVfjHBdo1w4sM0LPrruuSQdpDGnl3kh/fdOJRHbvEAYGtu82PcFyYRBnLJ6iBrRdrYEvObW0H5LRDAIcBxn32PbNlEUYRhWU7Iuhx/E0rZtabfYX0IIGYQT6QdxY/8UF/8Sc/yRdCwLy24xGvb2SVEoFApFA/wAyrzfh8yoYx0AAAAASUVORK5CYII=",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 4061,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 39,
                                left: -27,
                                top: -12,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAnCAYAAAC/mE48AAACDklEQVR4nO2YIW/bQBSAv0kBBgYHDAwMDA4UBBgEBAQMGBgaFBQEBgYEBAQUDBQG+AcEDBQUBBQMBBgUFBQEFBoMBBgUBBgEBES6Ac9uInWTpTWXLLpPOuCns3zv87vnk8FgMBgMBoPBYDDoxAunygun6tTr+KL7gVXStusexLP7vva1wAkEXPXvP3zrwnMp8jftIlo6HxbHsXKsJ5avBdurGCgTB3CzBVZRkOlcEBoFxHGsnOwZejHCFpA/ISWsM0FRFDhS6lrKAVoERINEvaYJoVVe7+fqOA4AQWADNmJtqdbaZpattWwFbftNRmO1y+YIIehs8zLYiwmCAIDlw7gMSYs83wKQ58cXob0JRoNEZWlyIGLhTbBdF7ns0/EsVlvwf1fLagvHrIiTfHoABncPKp1N/ijCcUoDvlVKgOOIOJmAiqYV0ZNWfc/LS+vTRJxcQEVTEfAu4zNEnI2Aio+a5b6IuCvqJln1in9plmcnoKJJRUApIev9AKD9eIPfH3F7e9s4r7MVUPG3ZlmdItuPN/X8YrPj6+SO4XDYKLezF1CRbXYqasvDcwRlwsJuUWx2dWw8X9Dtdi9LQMV+RQghCMOwlNLp1HPSNOX7c8HPxfS/y68x0SBRvu+Xw6UeQgglhFDB9bdG/xouwpCMxkp6Hp7vMh5dM03m5Ks3FrPRReRnMBgMBoPBYDgGvwCjC+ekqUhCEAAAAABJRU5ErkJggg==",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 4061,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 39,
                                left: -15,
                                top: -11,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAnCAYAAAC/mE48AAAExElEQVR4nO2XIXDbSBiFv94IGAgsEBAwWCBgYCAgYBBgIGAQUFBgUBBQUHAgwMAgICAgIKCgICAgIMAgoOCAgUDAAQEDAwMBAQEBgQULBAw0owOKHDttL20lpwX+SGbs7O7/3r5/dw0HDhw4cODAH0lRPJS/u4bfSrFi7wb8te8FmhCFcu9rGHtf4ScQQpSuzrENk6zI6Q2SzXdSyhIgSZI3ba75RyRACFGehcflKAdXdLFNgW2YRKFkiFFKKUutNVprXNdttS1+uwFhGJajHPLRCoAs12S5xjYFvUHCSLoMUo2rc6SUaK0RQrRmQqtxqpnNZuV4PP7huaMoKrXWzEZjAGxhVX9tG4BltGVOkTP0Dc6DdSu17+UM6OfTn/r/6fQGrTXX4ZxtI2rcXh+A0+hfpsLleKw4D5JWam09AUXxUBINcY7lzoElpSy/dYCFYVgGQUySpCilKiOuJztG3KJRjkN8dwdAcjtEu5/4mZR9j9YNkFKW4bXGHumduedTuxxdZjufhWFYLhYLLKuKfBwX3zRCCAHA+P0Z08k78vlHLu40l3ezxia03gJJkryxursPmNWNLPsf/v/6ur4O+PjRx3EkcdwlSVKm0xscB4KHBM/1kF0JwMWdBkBK2bjevRyCxYrS6D/Nnc1FuZ2I48l4x6CRPNqkYJs4LtB6SRyD57k4TrVftfAkSf68BDxnW3wt3M01qJRFFCGdHnOABN57bzfj6kQoJfG8ypxt4bPZAsdpXt/eE5DNRfkhGAFPwlUBaEWiFEIInL4HwNIUwK4RSiksy0JKuRHu+xKA89sMYa2J51e/rGOvCajFu7kGQGUpaIUuCliv6Q5OSMPb6nPAra597hZfgCcjavFKKXxfcvllDcBaK0xpN6pxbwYcT8alSkPcXG8EapXRHZxgAlpr4jjGGZxQAEIIVDwHvjbC8zyUUlvCNWutKHKNLXqN6my1BY4n4/Jv4wF3uGb50OFLVPVuLbzXH5ClEQB2t0eWRgRBAIDv+yRJAkAmcgBWqxVaKUwxAXaFG6bgaNhjfnPaSEMrBljeWTkYxri55kgs6Tod7mcZ0dokM6pXnO/7aK13TNi+44MgwPSqra+F9/zq4RMHDzvCF8vPXH265+as+UOoUQtY3lkJYC4vWC2B0zEyq2Kayvf0paSrNfAkNlqFm/G9/oBoFRKRYnr2jnAbSBdLAPI0xjAF7/9+W40zjdaS28iAjhAYD1U8HQs6szlprzIgs3KE1iwWC3zfJwgCPK867YUQBEFARHU2PBe+vL3B6nvoJAZgeDwAaGXHn9Nowq5/VdYGeLZAmAaJVgDECvqn1Vs+X2SbMY7jfNXjddTrHa+F245ZzdXgmnuJ1m6BRaZxLBBGZYQwCpjNWWR6YwRARv7dqNfCj4Y9Mq1Z3p/vTXjNLy/gjCZlukxxTz4AkF35Lw/y+zs7/jzqtmNimuarCK/55QQURQHA6v4egP4k+KFx2ztumAKdxK8S9e/RaME6BcbjE7Yjvv5BU9N5vO7gdXv8JRovXJsAbIzYpiMsOkJsRMPr9vhLtFKAM5qUALUR29SmjE+GTE7fcXr6ufHrrU1aLcQZTcp/7i8Zn1xgP0a++/hjZR93+IEDBw4caMh/llaHvMyYsecAAAAASUVORK5CYII=",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 4061,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 39,
                                left: -25,
                                top: -20,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAnCAYAAAC/mE48AAAElUlEQVR4nO2YL3TaXBiHn30HgUBcERERcUUEAhERgURERExMVCAmKhAVExOIioqKigoEYmJioqIioqJiAhGBqEAgEBGIiAhERMQVEYiccz+RhkK7nhVG1+4cHsOfQ97k9+S9b+4BDhw4cODAgb1RFGP91tfwphQR/5SA//ZdcD6R+y75vpFSainl6q4XEbpDTXdrQneoaSHEu+6IP+oAx3G0UgqlFFJK3aGm5xOJWWtgNgSOsPBzKFz33YrYWYAQQt8Hx1E57YXClw7NdoLZEKS5Is0VAP04w89hMpm8Owkfdj3w3KvrcVis7jaA02wBkKZp+aoyALqjACEEzWbzxecLgkB3u92dr++l1HY98KhrUo8NLlXM8DfBT04GCCG2qt/KT3e9tK3YyXAQBFrMviKPxwBcqz7f/DuOEcDT4IZhIKWF59m02+0n55RS6iRJPqx/jn8m0BxTq3VetQu2Lh4EgT793OXss6Dhf+dycENwfQGAUuqXwW27bLQsy3Bd94mE0amp/ct047t0JHT7RLAu5jXYeglIKQG4uFZc+iAtyWBwy3Q2xetI4hhs294I/v17yMmJ92xN/zL9EP2QutV7CGtYiiRRrz4DduqASkKSJADEccF0OsO2QQhnFXydLMsYJXcb3/0cBKvzpyOhTf8hcBGha63dh/RL2foE/X5fxzF0uy6PRWRZhmEYT+749fQWACuOSOI5brMJhsXs/ulRiViX8C4F2H5fq6zO+bEJQBgmKxFJkqwEVFTBnfv9QBxNy02TYYAwMGpsiPjhjfjbAraaAY1GgzROubwVAJx+kmRZ+ciT8uH94+BZugDKIWm1j1GzAIoCajUowCl90gt90tFoYym8NlsJMIVgns9RSUxdGGsiMqSU5RpPngZv2H4Z3mgTxzG2013tCxaTq1V9x4RsIfjY9zUEf5rtRWxt2u8N9d14TpErag1BXRjU78PkaoAwDFqtcmNkqgZQdkcYhgB4nodpNUkX8/I3VpN5NGExuUIYZSt8amY4nSWzcZ1vRWdjWO6bnQr3LgLd/3qE63zZEGF7HQDm4ecNEfk0xfPKoVjtFeAhvBBiJcgsIpr1nKOuySJecqccZg3BZGyTTS/2LuKPCvYuAg0QXI0pcoXRcgGwXAd4KqKJRbPVZh5NVjWEECilNj4nScKR8ZNFuuTW8ImG5XLInTOAvYrYSyG/N9QAd+OyrYW0yaIpznEPeL4jquDT6RTP8wjDENd1mbPgUzZisVgSzeuoQhGX85WiM2AR9t+XgArb72uANM6BUgQ83xGmahDH8er4hlvOgGgYYN8/TaUwUHnBNFXAOxdQ4Ryda1OIjY6A50VURMMA1xTlMY0aKi827j78IwIqnKNznef5Rkf8amkQRr+tZfbLITm7+oHlWMSjwV6u/a9sOH63NF5CdHMDQJErzJZJEg7/HQEVz4kAWK49CR6zvP+DpcjVXu8+/GUBFY9nBJQylkqtwq5T3O8s9x0e3khAhd8b6uHwC4PhDcHVGHgIu47lWAB7Dw9vLGCdalO1SKr/FRXB1Rkfj05fJfiBAwcOHAD+B5RDVfzsIy3vAAAAAElFTkSuQmCC",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 4061,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 39,
                                left: -29,
                                top: -5,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAnCAYAAAC/mE48AAAElUlEQVR4nO2YL3TaXBiHn30HgUBcERERcUUEAhERgURERExMVCAmKhAVExOIioqKigoEYmJioqIioqJiAhGBqEAgEBGIiAhERMQVEYiccz+RhkK7nhVG1+4cHsOfQ97k9+S9b+4BDhw4cODAgb1RFGP91tfwphQR/5SA//ZdcD6R+y75vpFSainl6q4XEbpDTXdrQneoaSHEu+6IP+oAx3G0UgqlFFJK3aGm5xOJWWtgNgSOsPBzKFz33YrYWYAQQt8Hx1E57YXClw7NdoLZEKS5Is0VAP04w89hMpm8Owkfdj3w3KvrcVis7jaA02wBkKZp+aoyALqjACEEzWbzxecLgkB3u92dr++l1HY98KhrUo8NLlXM8DfBT04GCCG2qt/KT3e9tK3YyXAQBFrMviKPxwBcqz7f/DuOEcDT4IZhIKWF59m02+0n55RS6iRJPqx/jn8m0BxTq3VetQu2Lh4EgT793OXss6Dhf+dycENwfQGAUuqXwW27bLQsy3Bd94mE0amp/ct047t0JHT7RLAu5jXYeglIKQG4uFZc+iAtyWBwy3Q2xetI4hhs294I/v17yMmJ92xN/zL9EP2QutV7CGtYiiRRrz4DduqASkKSJADEccF0OsO2QQhnFXydLMsYJXcb3/0cBKvzpyOhTf8hcBGha63dh/RL2foE/X5fxzF0uy6PRWRZhmEYT+749fQWACuOSOI5brMJhsXs/ulRiViX8C4F2H5fq6zO+bEJQBgmKxFJkqwEVFTBnfv9QBxNy02TYYAwMGpsiPjhjfjbAraaAY1GgzROubwVAJx+kmRZ+ciT8uH94+BZugDKIWm1j1GzAIoCajUowCl90gt90tFoYym8NlsJMIVgns9RSUxdGGsiMqSU5RpPngZv2H4Z3mgTxzG2013tCxaTq1V9x4RsIfjY9zUEf5rtRWxt2u8N9d14TpErag1BXRjU78PkaoAwDFqtcmNkqgZQdkcYhgB4nodpNUkX8/I3VpN5NGExuUIYZSt8amY4nSWzcZ1vRWdjWO6bnQr3LgLd/3qE63zZEGF7HQDm4ecNEfk0xfPKoVjtFeAhvBBiJcgsIpr1nKOuySJecqccZg3BZGyTTS/2LuKPCvYuAg0QXI0pcoXRcgGwXAd4KqKJRbPVZh5NVjWEECilNj4nScKR8ZNFuuTW8ImG5XLInTOAvYrYSyG/N9QAd+OyrYW0yaIpznEPeL4jquDT6RTP8wjDENd1mbPgUzZisVgSzeuoQhGX85WiM2AR9t+XgArb72uANM6BUgQ83xGmahDH8er4hlvOgGgYYN8/TaUwUHnBNFXAOxdQ4Ryda1OIjY6A50VURMMA1xTlMY0aKi827j78IwIqnKNznef5Rkf8amkQRr+tZfbLITm7+oHlWMSjwV6u/a9sOH63NF5CdHMDQJErzJZJEg7/HQEVz4kAWK49CR6zvP+DpcjVXu8+/GUBFY9nBJQylkqtwq5T3O8s9x0e3khAhd8b6uHwC4PhDcHVGHgIu47lWAB7Dw9vLGCdalO1SKr/FRXB1Rkfj05fJfiBAwcOHAD+B5RDVfzsIy3vAAAAAElFTkSuQmCC",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 4061,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 39,
                                left: -32,
                                top: -21,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAnCAYAAAC/mE48AAAExElEQVR4nO2XIXDbSBiFv94IGAgsEBAwWCBgYCAgYBBgIGAQUFBgUBBQUHAgwMAgICAgIKCgICAgIMAgoOCAgUDAAQEDAwMBAQEBgQULBAw0owOKHDttL20lpwX+SGbs7O7/3r5/dw0HDhw4cODAH0lRPJS/u4bfSrFi7wb8te8FmhCFcu9rGHtf4ScQQpSuzrENk6zI6Q2SzXdSyhIgSZI3ba75RyRACFGehcflKAdXdLFNgW2YRKFkiFFKKUutNVprXNdttS1+uwFhGJajHPLRCoAs12S5xjYFvUHCSLoMUo2rc6SUaK0RQrRmQqtxqpnNZuV4PP7huaMoKrXWzEZjAGxhVX9tG4BltGVOkTP0Dc6DdSu17+UM6OfTn/r/6fQGrTXX4ZxtI2rcXh+A0+hfpsLleKw4D5JWam09AUXxUBINcY7lzoElpSy/dYCFYVgGQUySpCilKiOuJztG3KJRjkN8dwdAcjtEu5/4mZR9j9YNkFKW4bXGHumduedTuxxdZjufhWFYLhYLLKuKfBwX3zRCCAHA+P0Z08k78vlHLu40l3ezxia03gJJkryxursPmNWNLPsf/v/6ur4O+PjRx3EkcdwlSVKm0xscB4KHBM/1kF0JwMWdBkBK2bjevRyCxYrS6D/Nnc1FuZ2I48l4x6CRPNqkYJs4LtB6SRyD57k4TrVftfAkSf68BDxnW3wt3M01qJRFFCGdHnOABN57bzfj6kQoJfG8ypxt4bPZAsdpXt/eE5DNRfkhGAFPwlUBaEWiFEIInL4HwNIUwK4RSiksy0JKuRHu+xKA89sMYa2J51e/rGOvCajFu7kGQGUpaIUuCliv6Q5OSMPb6nPAra597hZfgCcjavFKKXxfcvllDcBaK0xpN6pxbwYcT8alSkPcXG8EapXRHZxgAlpr4jjGGZxQAEIIVDwHvjbC8zyUUlvCNWutKHKNLXqN6my1BY4n4/Jv4wF3uGb50OFLVPVuLbzXH5ClEQB2t0eWRgRBAIDv+yRJAkAmcgBWqxVaKUwxAXaFG6bgaNhjfnPaSEMrBljeWTkYxri55kgs6Tod7mcZ0dokM6pXnO/7aK13TNi+44MgwPSqra+F9/zq4RMHDzvCF8vPXH265+as+UOoUQtY3lkJYC4vWC2B0zEyq2Kayvf0paSrNfAkNlqFm/G9/oBoFRKRYnr2jnAbSBdLAPI0xjAF7/9+W40zjdaS28iAjhAYD1U8HQs6szlprzIgs3KE1iwWC3zfJwgCPK867YUQBEFARHU2PBe+vL3B6nvoJAZgeDwAaGXHn9Nowq5/VdYGeLZAmAaJVgDECvqn1Vs+X2SbMY7jfNXjddTrHa+F245ZzdXgmnuJ1m6BRaZxLBBGZYQwCpjNWWR6YwRARv7dqNfCj4Y9Mq1Z3p/vTXjNLy/gjCZlukxxTz4AkF35Lw/y+zs7/jzqtmNimuarCK/55QQURQHA6v4egP4k+KFx2ztumAKdxK8S9e/RaME6BcbjE7Yjvv5BU9N5vO7gdXv8JRovXJsAbIzYpiMsOkJsRMPr9vhLtFKAM5qUALUR29SmjE+GTE7fcXr6ufHrrU1aLcQZTcp/7i8Zn1xgP0a++/hjZR93+IEDBw4caMh/llaHvMyYsecAAAAASUVORK5CYII=",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 93,
                                left: -31,
                                top: -61,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 93,
                                left: -31,
                                top: -61,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 93,
                                left: -31,
                                top: -61,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 93,
                                left: -31,
                                top: -61,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 93,
                                left: -31,
                                top: -61,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAABdCAYAAAAVIWCbAAAN3ElEQVR4nO2bLVTjSh/Gf91TUVExYkRExYiICkREBAIRgUAgIhCIFSsqEFdcgUCsWIFYgVixYsUKxBUIBAKBqKhAVFRUICoiIioiIkZUVPScvCKdYZKWb9h3v55zOG1KJpnn+X/OpIW/+Iu/+Iu/+Iu/+Is/CEqpQghRALz7f0/mR0MpVbjHf5QAS8ujtbaf/TECGPJpmgIghAD+IAFc8gBKKeAPESAIgmI8HjfMsdbavv/tBQiCoNBao5QqXOIGv7UAhnyapg2tNUKIwsS+wW8rQBAEtty51jexb/BbCmDI163/R4SAIW+S3l2xb/BbCeCSV0oVD1kffiMB6qUOHrY+/CYCGPLm1fT7D1kffgMB6uTNKs/t9+/DLy3AOvJCCLL5pj3ntw2BOvkoigqAbL5Ja3716Ov8kgLULR5FUTEej5m3dphnZ2t7/rvwywkghCjSNEUIUQRBwGAwaIzHY7TWDa81fFTmd/FLCbDs7RvL94zHY5vlH1v36/hlBHBjHmA48Zi3dirnPNX6AM1XnOObQQhhyQshbKzXrb/MCb9+CBgiUFrerOCEEAwnHq35Feb/Bs+xPvykAhi4S9qWt18MJ57N8s7y9lmxb/BTCeDu1wOVDcx5dtZwLe+Sfa714ScSYEnCPUYIYd3eJfxa1oefSACoNi5m68p1e0PS9ZKXWB9+kipgVm8my0Pp/mmaNiBdIS69kDwbAY9b8d2Hn8oD6k9tWt5+UY95IUSRTPomFF58z59KALgtdXUY8ubV3d19SQi8uQD1el2Hm8igdH2vNURrbVd19bhffvYi4ovBgLjTLJ59gafgvhhVStlGZ9nbA1WC7vh6PniqCFtQyE6Z+i6mi8b/NQQ62ycr3lGPa9fyLvnnWD/uNC157W8B8MM8AG6t1dk+KdpeGefe9Dvj8dich9Yab/erHTv57/1aL3Cv9xREUVQsBgOul9x/qAd0tk+K7vv/rEVnWWbJGxjyaisEYOfbpKglvxfV/cFg0Dj4ENnjNxdg86hftMOPAGzs7aK2Qjb2dpllGW3Pox1+xPzfwJDfirfQ6ZTNz0OAtTnhObiZZPb9m4fA5lG/mI7G9rjteZagQXpdNjXu5x3Z4maUVM6bfNvjJTnA4L8PUXEzyfg8nDTeXIC2f1Bs7O1VPpuOxitCdGQLwJK+OT9HKJ/Z6Bjphcj4iMm38jovIX+02S0APg8nDfhBrbDrAQazLOPm/BKTDHWn2vw08zPam19peSEb3YBs5QrPgyFu7/NK130W2p7HLMvQacJM+QB0wgAo+/1ZlhF2A6SUryZAHW+WBJVSRRzHlTrf9jxrcRdC+eg0Qae3Mb/RDd5qahW8qgcIIYooihiPx6Rp2kjTlLZ/cG8rDKDTBLH0AIPB4DtCCCZbx8zSjI5cnvuC+F+HV/UAIYQlr5Qq1Pa/D5KHVQ/IRpcIIVj4/6y7R2XX6KV4dQHw43J978fo0emjxuk0oZmfIRdXZKNLWl5ZHZrJ18p5QRDgb2yuu8Sz8foCJBf0/jlCzicIIZCLK2ajY6DM/LNsNZ0J5SOEIG/u0PJCurNzgiBAKcUsy/AXl7SGx8wWZal8TRFeVQBPBchOl+9fP9u6bvb2wva1FcLAiNFkCoBcXNGdnSPff2GazwHwF5fMFi1LPh9ekQ+v2P/wuPB6CK+aUMKtnSK5KdtWf2OTjmyxfG5HEAR2l1drXWl/O2GAN/lK1v2HxfUJ7WZJ3pCGkrgLf+c9UVSu6D4eHvwce4K+3yUfXqHbguRmSIJx1wlpM0AIjbBfWZ2iR6e0w49MR2MW8znt4TE0q8SNoLQFUFaB45NvBcDNzYSNje6L5vyqAiTJBH/nPVJKri5Oy8+MR8wntJfktdYEizGpEOhlWLSDYD3xJRzixc3NBODF5OGNOsGz0y+NOI6LllCrQiw9QtS+senGOIAAdFsQRRHh1g6sIX5xcYEQ8kVzfRMBer1ekec5VxenRFHEOiGm+ZwgCGyyS26GiJm21wh2Y0OcOnET8+HWzosT4asJEMdxYchAub/X6/WYJVecXQzWCpHUrlGz+Arx0fWVvdfFxcWrJPAXXySO40JKiRCCwfAGISTKK9253+8TBIE9dzBYFcJgJ/5gid5FHMD3fbtvOJ5MEULSv/zv2TyePTCO48LTQzKxiXmd5nOEkLSbM8bjMdvb2/T7fba3twHI8xyoCgFl8hRCImUZz4b49PITE7r4fnWdYK7j3u+5HvHkQb1ezzypMY+lmCVXZPiVCWmt7cTz7ALpxXbiUkqSJGE8HleE2NjoMhhco7wWeZ5bS3eZkInb7s8IZTyg3ZzhkZDhP1mIR3eCZ2dnxfHxcXF+fg7ALLEPLcjw7aQMzOSTJMHvfiDPLir/F0Kwt7dnS2aSTBgMrok2u5h7mKfDhrzrCUZMYLlfUP4vPtgq4oOtRyfHBwXo9XpFHMfFwcEBo9GIb9++oZTibDAlz3OGaX9lQgBhGJLnuY1Z6cUrIhnsOVtm5h5hGDIYDOwYKWV5nWW+ca81Go3sey/TQBmiB5H3oBB3ChDHcXF4eGgvsLe3h+/7uEKEYch0VE4qmY3tWPP+LsJ5niOlXBENWLmHUorBYECe5/YvSRKy63M7RimF1prFZFB6wrRMoll7QRzHKxszLlbi5fDw0H5RwZ3g8lEVSimklJyfnxNFEfv7+yRJQv/LMbNuhBCSxWwKixF5S+K3A3sNI0g9F/i+X4lnI45JluYeJycn9Ho9rsbnbKrtyhiTj8yrlNLmHhffv3+vcLYHJrlVrOKV79PrIcrfrVzI3MhMcnx5gRJl+RNbO7Yy1MnX72HImgRqSqiBmyxdIYLm3AreSi7pdjxGC89uygRBwGIy4GYubCl252CEaLjEfd8nSRI7KZPJ82bpUmRlqRqNRva3N4boYDCwnVzv0zEnJyd0QoFcqJW21ySzJEnsxIw1TQVw670JGdfrjt7vVwSXUjJM+/jtctVpvMF98Or2JEaMd0II69Zaazx9uwgRQpQ3X3RJh2WpaeZDd+uLTGyytShvFOzG6Law8bsf9SqPvnTet8SN0HUYsmsekhJFEQAHBwcEuzGpnpPquc0Rs+Q2WebNlIXUdgkeBOXusvscUgjBuyRJGI1GGCEW/q61gI3Z5gSlFNkiI6O0TLDTYVMtSNOU62Y5Nk1ToihCa72SLAeDAX5334rgknVx17c+TAUArBC6LQh2Y3sPrTV5nhNszFBTzabaRilVMYIpvSaE7a8rjHv4vm/X7G5SSZKkzAnLMHDDwpyzDusS2X7QskLXc0C7OauMd6vFujyyLiGfnJywt7dXnrO4huZWJaSUUvT7pSHeAahOzng8Zjwe43qEEKU7G/Xlont786w8NkKxuLbulqYpUko8PSSKIrYWVY/obP9jm511pbBO1j02pdA9Nn3EuvIpvdiSV0qVFavfJ/QStNalB2y0Um7mCvO6ziPOz89tQvF9n2RyCs0tO0FPD5nQRQhBa9qnHeyvkPP0kLPx/N6M7nrAOs+6q38wnxuPcJsr1+Khl9CfSLa7Of2JXC+A6uSkU7lWCPcX2FB2Yabrc0ufEWE2PmPe2a70EVANDTej+/H7O73iLrjeYsL2IeKqMyWddsoQmMl25YLtvLTCRitdGxpKKdt+hmFo32di05a4drBPM7mkHezbibkl6a6MbkLDTXpSyso6wBzXP3dLX93VDZLZ7Z4FLDdE9MwHdCnEFPtqUApRVX17e9vmCKWUjbNK7V4mOsD2GGaiUkr6/X4lo9dDw7i/iXtD3ghUh5lPkiTW4km7Sthvt0gBPdsANO+ubhLmnXIHphTi1gPqWOcRvu/bEnQvxpc2OYZhaEU0lnQ9ol4+6yTd14cs7rfL0DKWH2W+HSeD97zrtpsNgOjDsR04bQXAamiY4/tCA247vcpaQm0RhmHFC4ww9hytiaIIKeVaIdz6/VRXLy0OWXuTID4kiA/pnx42mgCTy8+NySV0d4/Kb1/dnC0HVUOjDlM+XZhkKaWkmVzaem/EMN2lK0ySJLbsmnGuR0RRRK/XsyK5ri7aN6TTDqw+dQeMxcvQNJ5++um9XQOt3T3Z6X0pvI5kcPrRTlprTb1aPKZ8TvtfrQh4OV6myTwBmbQVxfUcY0W3CXtKVjev7jj8GIDx+acVvmt3ha++/9sA+PDpv6LZLE/pfz8qQ2O+6hHmeF2y9MP3t1bPJJlXblosZNdubph1gevCdVfv9/uV5GYsvt7VS4t74Qe8jqxY/FECGLgDu7tHxV2hUSZNeb8QS48YjUYsZPe2vV7CrRauAHe5uiFez+paa8K9IwC+f9x/cH/w0c8FJpefGyZHeJ6H7n+5UwiDh4RwuzdjbWPxejkLvZJo3eJujAfx4aOJP1kAIwLABJjMFgXAzoZ/Z7J8jEfUy1nd1et13MC1+Lyzg/K8e139Ljz7yZApnx8+lV99HZx+fFbVkFKutXg9qxvLu8RNcpucf2pMnsnjxY/GTj+9b3R3j4rWxj5zAH1mhaiHhDl2hTC1/K7kti7GH5PcHotXeTZoQgPKZGmEuKtquEKE3uJe4ibGW36MB3SU96QYfwiv/nTYiKG2/y00gL64MzTa+Qw6Arg7uRnipjS/Nt7sm6Jp/0sDqh6xToj76vi8s/NmxA1+yA8mAIK9T4X52pxtcDo5YUfQn9yWwfu6trfADxPAINj7VHhCMOl/sWXwtRPbU/DDBTDY6X0pOspjsVjQbDZfNbE9Bf8DGWDtT9QWzhAAAAAASUVORK5CYII=",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 40,
                                left: -31,
                                top: -8,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 92,
                                left: -31,
                                top: -61,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 93,
                                left: -31,
                                top: -61,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 93,
                                left: -31,
                                top: -61,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 93,
                                left: -31,
                                top: -61,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 93,
                                left: -31,
                                top: -61,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 93,
                                left: -31,
                                top: -61,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 93,
                                left: -31,
                                top: -61,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 93,
                                left: -31,
                                top: -61,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 92,
                                left: -31,
                                top: -61,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAABcCAYAAADefbM+AAAGbUlEQVR4nO2aLVDr3BaGH+5URERsEREREbFFBSKiAoE4IuITiAoEAnFFBQLxCeQRVxyJuOITiEoEAoFAICoQCEREBAJRERFREbFFRERmekW7QxrSX37OmTv7mWHy0zTN+66119pJAIPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgM/2/s/e4L2JTzfW8K8OJIAKSUhGHIycnJhzT88QYEQTA9LDOu0xyAq6NDODrl5uYGgF6vx8+fP3fW8UcY4Pv+1PG6C/vsTgFAXlp4yQhPuBwGAanKeeoIer0eo9EIIcSHTPitBtSF1wXbnQKlFDCLcBiG3Fyc4tgC//RvoiiqPouiiPj5jmSym5bfYkBdeJlPWo+phN/coJQiDMNW4Y78ix8H+1xeXv75BiyLeH1bF7f6GF8lfDweo5Si1+vtZMK3GLBtxPX2psI/YsKXGrBqjOv1oOu1pnp9fZ3w+ne2NeFLDGiL+GGZAfDUcYDdIp4kCWEYfqoJn2pAU7gQgry0OFAvS/u4lJLxeLxSeFuqrzJBn3cTEz7FgLZU120MwM9e3vVxLbwuYl3E24bHOnPWmfAhA9pSvWO7C8dUY3zex8XRv9cKr3+WJAnHx8dbC9/UhJ0MWNXOtBFhGNLr9bi6ukIIsZDqen3T4vYRE3QWLTNhKwPWtTMtFKjGok7hbYSvKm7r9jfXoygieX1cOlPcyIC2iDfJS6vVFDWJOT692Crim473eoY0u4MWPuGEYnLzsSHgu0w3Oa6N49MLbq8vd2pn2xQ9fc66cADbk2TRr90NGAwG0yzLeHi2djLA5abKgE2KW3P/poWuTTiA0+3yen26vQH9fn8qpUQpRZZljF7cZYeupMzVl5rQJrwf2GRZRpS7eL0A9/Uf7u7uNqsBFxcXU93Dsyyr9sfPd2T2GcKXqGRcLS3hUKhs5TJPx+9M2ETsqrRfFfHTLiRJykPSwXZdDq3HSsdwOFzQXG0MBoNpUzTubD15ekZlJW5ntvvFOqsENg1ZttSZEB4NyLLsSyOeRjG26yKjcwA63R8zcxznnRF7deG6TTmOU12klJKs80p894TbAccWZLl6Z4SOtLPfQyVjvIND0uenalnPhMH5r9a0X1YYt424Fm7bJQCFFxLHMUEQVAZoM95lQGd8TymPFjLBcRxG90PcDlhygMoVXj5aMMIpHwDIndNWI1ZlwmdH3HEKOt3/kGUZVnpF4YVvOkYjgiCoasK/6ikxHA73tHgpZeVS1nmtzBBCIGxRuevYgv1iNtvzfR87u8a1nimUoswV+WQ2N7BdtxIw4YTR/RApJUIIoih6tw5we33J86vLhBNsT2J7Eqfbxfe96tpUOiFIfyGjc57t2Z9j+QvHxHFcXX+SJHv1gri0CwwGg6kQAqUUQghury8XhoDv2iSTvNq25A+klERRhBCCJElaM6KZCc3usEvEbbsk7l6RTyYUSnHWixhHT3jCI1UphRcu7QKdZQboIhEEwbTX6yHcgALIspmbed6pfjzL376np8PauCS5xragpFdlgkrGs0xIT7i9viQ8GiCl5Pb6ci78ZGGM+/785PlbxElnv21ZJUWxKKMYz8x/TSekliReIn6lAZo4jvfmBWTq+z7JfH/TCC1+mREv89aqh4QlBIUSTPLZcDj46+8q1esRF57L1WOM7XoE6fk74Y7lkxbpwjVnRcJr2UW4gvjxceVkb60BTSN0sZzf61RG1Gkzonj4xYt1RlF7TgBUmXD3MKmN8fmH88xqi7gWbkkfojcDvPKepHNAHK8WrtnYAE1zaGgjLBYfgsCiEY4t2M+vYMKCEToTLOFgCYHwXP5794jT7a6MuBY+jp7I8w5uOgTgMY63usPd2gCNzoh+vz8FSJKkuu1tM0LfJy4zAqBQCpVOOMj/gWgmXBeypvD05ZE8t0gtH+EKHtek+jJ2NkCjq+vb0IhajdDFUi+bRgALwnXEteCm8NdSbjTG1/HpT4V1+9Tv7WD2IGTydEuWq1rbXJxQOfO5hY54c2lZJVk2j7jYPeJNPpwBTXSNGAwG0874nmflMh6PKeazRk1VH3Ja0RHPiuRTI97ky98Mnf1wp6U8qh6RWfOu0TahqmfAV0W8ybe9G6wXS3hvhDbgu4Rrvv3tcL/fnzqO05oRwLcJ1/y2/w9oGgF8q3CDwWAwGAyG/wFXxaCHnwbVZwAAAABJRU5ErkJggg==",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 93,
                                left: -31,
                                top: -61,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAABdCAYAAAAVIWCbAAAHD0lEQVR4nO2aIVTjTBeGH75TERExIiIiImJEBaIiAoFYEfEJBAKBQPyiYgXiE8gVv1iJ+MUKRCUCsQKBWFGBQCAiIhAVERERFREjIiJyTj/RTkhDWtoCy57/zHMOZ9I0bed9771zpylgMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAwGg+H/jb3PnsCmnO97M4AnRwIgpSQMQ05PT9+k4Y83YDAYzA6rnOusAODq6BCOzri5uQEgCAK+ffu2s44/wgDf92eO1186Z/dKAIrKwkvHeMLlcDAgUwUPPUEQBIzHY4QQbzLhUw1oCm8KtnslSilgHuEwDLm5OMOxBf7ZP0RRVD8XRRHx4y3pdDctn2JAU3hVTDuvqYXf3KCUIgzDTuGO/JsvB/tcXl7++QasinjzsV7cmjW+TniSJCilCIJgJxN+iwHbRlw/3lT4W0z4UAPW1bg+HvS9zlRvHr8mvPmabU34EAO6In5Y5QA89Bxgt4inaUoYhu9qwrsa0BYuhKCoLA7U08o+LqUkSZK1wrtSfZ0J+n03MeFdDOhKdd3GAPz86UUf18KbIl6LeFd5vGbOaya8yYCuVO/Z7tI1dY0v+rg4+s+rwpvPpWnKycnJ1sI3NWEnA9a1M21EGIYEQcDV1RVCiKVU18ebLm5vMUFn0SoTtjLgtXamhQJ1LeoU3kb4usXttfPt4yiKSCf3K3eKGxnQFfE2RWV1mqKmMSdnF1tFfNN6b2ZIuzto4VNOKac3bysB32W2yXVdnJxd8PP6cqd2ts2ip9+zKRzA9iR59H13A4bD4SzPc349WjsZ4HJTZ8Ami1v7/KYLXZdwAKffZ3J9tr0Bx8fHMyklSinyPGf85K66dC1VoT7UhC7hxwObPM+JChcvGOBOfnB7e7vZGnBxcTHTPTzP8/p8/HhLbn9F+BKVJvVoCYdS5WvHIktemLCJ2HVpvy7iZ31I04xfaQ/bdTm07msdo9FoSXP9YDgcztqicefH6cMjKq9we/PTT9bXWmDbkFWjzoTwaEie5x8a8SyKsV0XGZ0D0Ot/mZvjOC+M2GsK123KcZx6klJK8t6E+PYBtweOLcgL9cIIHWlnP0ClCd7BIdnjQz02M2F4/r0z7VctjNtGXAu37QqA0guJ45jBYFAboM14kQG95I5KHi1lguM4jO9GuD2w5BBVKLxivGSEU/0CoHDOOo1YlwnvHXHHKen1/0ue51jZFaUXPusYjxkMBvV+5a9mSoxGoz0tXkpZu5T3JrUZQgiELWp3HVuwX853e77vY+fXuNYjpVJUhaKYzvcGtuvWAqacMr4bIaVECEEURS+OAX5eX/I4cZlyiu1JbE/i9Pv4vlfPTWVTBtl3ZHTOoz3/cyx/6Zo4juv5n5yc4DgOSimEEKu7wHA4nAkh6gt/Xl8ulYDv2qTTon5syS9IKYmiCCEEaZp2ZkQ7E9rdYZeI23ZF3L+imE4pleJrEJFED3jCI1MZpReiOxqA7/uMx2MAeqsM0IvEYDCYBUGAcAeUQJ7P3SyKXv3hefH8Or0d1sal6TW2BRVBnQkqTeaZkJ3y8/qS8GiIlJKf15cL4adLNe77izcvniNONv9sy6ooy2UZZTI3f5JNySxJuJiPFp4kCYGbMJ44qw3QxHG8t1hAZr7vky7Ot43Q4lcZ8bRwX5eEJQSlEkyLeTkc/P1PnerNiAvP5eo+xnY9Btn5C+GO5ZOV2dKc8zJlUvURriBolFZTOIttzasGtI3Qi+Xiu05tRJMuI8pf33myvlI27hMAdSbc/po2anzx5CKzuiKuhVvSh+jZAK+6I+0dEASyM+JaeFKU2xmgaZeGNsJi+SZI2wjHFuwXVzBlyQidCZZwsIRAeC7/u73H6ffXRlwLT6IHiqKHm40AkEGwkXDNX+xIHMd7o9Foz/d9fN9HKVV/7X3ViPIKOf0OsJQRpVKobMpB8QMZnWPbFX1vPnPH8ueGyfmYPd1TFD0mlaRwB/Xt9CRJGI/HBO58YW0Llvb8O40q9oEdMqCN3mM/l0bUaYReLPXYzgiAg+IHRMsR15HW41y4xaSSdY2vi7i0LVKeIx9NJaDqub3ZAI0uDd0+9YS0EXqxrEf3hHKxodovrnCK+d5Cty6d6npF31Z4O/LziD8Lj+N4710N6DKil9zxqFySJKFc7Bo1dVkUdKIjnpfpWuHCfiLNvFp4m3bEtXDNh/8y9PWLO6vkUX2LzFp0ja4NVTMDLKsizy0yy687SXMDoyMe9nPGEwffy+ZGdNAW3eS3/TZ4fHw8A+odYtsIbcC2wtusE9vFb/91+Pj4eOY4TmdGACuF16neYlvBbT7t/wPaRgCdwtst9a2C23z6f4hcXFzMgKW9OsD9/f1vmdu7d4Ft0cKjKHpxu8pgMBgMBsOH8i97ry9+ZBhHQAAAAABJRU5ErkJggg==",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 93,
                                left: -31,
                                top: -61,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 93,
                                left: -31,
                                top: -61,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 93,
                                left: -31,
                                top: -61,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 93,
                                left: -31,
                                top: -61,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 93,
                                left: -31,
                                top: -61,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 93,
                                left: -31,
                                top: -61,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAABdCAYAAAAVIWCbAAAHcElEQVR4nO2aL3DbSBvGf70xEBBYsEBAQEDAIMBAICDggMCBgAKDgIADAQEBBwI+UFgY8IGCgMCAgIKAggKDgIAAAQMDAwEBAQOBBQICnskBebeyIst20n9zs89MR7IsO3p+7/O+K9sFKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK6v/mt796gvYVRcH/jPATIYAhGFIHMecnJy8ycNvD2A0Gj0fLQtu8xKA6+MjOD7l7u4OgCiK+PDhw6t9/BYAgiB4lv5w7Zg7qAAolw5+NsEXHkejEbkqeRwIoihiMpkghHgThF8KoGm8adgdVCilgLrCcRxzd3mKdAXB6T8kSWKeS5KE6dM92eJ1Xn4JgKbxZbnoPMcYv7tDKUUcx53GZfgXfx4ecHV19fsD2FTx5mM93Jo93mc8TVOUUkRR9CoIPwXAvhXXj3c1/hYIPxRAX4/r/dHQ74x6c3+b8eZr9oXwQwB0VfxoWQDwOJDA6yqeZRlxHH9XCN8VQNu4EIJy6XCoZhvX8TAMSdO013hX1Psg6PfdBcJ3AdAVdb2MAQTF7MU6ro03TWyreFd7bIOzDcKbAHRFfeB6a+eYHl+t4+L4763Gm89lWcZ4PN7b+K4QXgWgbznTIOI4Jooirq+vEUKsRV3v7zrc3gJBp2gThL0AbFvOtFHA9KKO8D7G+4bbtuPt/SRJyOYPG+8UdwLQVfG2yqXTCUUtpoxPL/eq+K793kxIe3XQxhecUC3u3tYCgcfzLud1aXx6yefbq1ctZ/sMPf2eTeMArh9SJB9fD+Ds7Oy5KAq+PjmvAuBxZxKwy3BrH9910HUZB5DDIfPb0/0BvH///jkMQ5RSFEXBZOZtOrVXy1L9UAhdxt+PXIqiICk9/GiEN//E/f39bjPg8vLyWa/hRVGY49Onewr3HBGEqCw1W0dIKlX0bss8fQFhF7N9se+r+OkQsiznazbA9TyOnAfj4+bmZs2zeXB2dvbcNo1X72ePT6hiiTeoD8+cc2OwDWTTVichPj6jKIofWvE8meJ6HmFyAcBg+GcNR8oXIN41jetlSkppLjIMQ4rBnOn9I94ApCsoSvUChK60PIhQWYp/eET+9Gi2zSScXXzsjP2mwbhvxbVx110CUPkx0+mU0WhkAGgYfwghCIIAKSVKKTz1ZE4SQlAUBXL57euq0htTeWOkKziorgkXH+s/VtziOU9USrEsFeVifUl0hGDgChaccPPpA1JKhBBMJhPCMCQIApIkIQxDhBBmH+Dz7RVPc48FJ7h+yOnxiCO/whEC4XtcPyx4rHxG+UfC5AIpK7yj/1H55+bvj0YjpJRMp1PjTQjBH2makiQJGsQyPDZp0JSKwXwNinCFoatB6NdvAuF6nqncghMmX25emN1m3PVD5HBIEPjm2lS+MMaf3PqfdIK1c7RpgPF4bIothGDQfBIw1ciyDCFEbdoNmfIIwHJ+Q1Uq8Ny11+m7QP3GWXaL60CpwjUQjhBUSrAoT/h8e2UGY5IkJuqfb69WUT950eN1xae4ns8ov4C8jvp0eI2zWFAphRMGzO7P8YVPuaq+vjalFEEQMJlMSNOUAUDgF3SB0BGNogjhjaiAoqjPK8t6IrrukqLcDmJJZJKgsrROQl5DiI/PCMPwhXFgVfHVm5ffKq6NO86SqhqsXXuVZgDM8wW5ExKvrqdpPPJSJnNZA3CLEpAcOBktDsRxbKIZBAHZ6ngbhDa/CcRstbR2JWHy5YbDv/4xUd+l4tq4dALyKl+75qLKmC+HCE8QNVqraZzVbc06upW6EqFB6L5afdYxIJrqAlF9/cjMOadqfE8AmCTcf100enz15CpZXRXXxp0wgOQbAH/5hWxwSBSFnRXXxtOy+gaglC40IPYlojms6p6tjzusfwnSBiFdwUF5DQvWQOgkOEKaqf7/+wfkcNhbcW08TR4pywFeflNfXxTtZFxrAKDKEFAGRBtIX2voG6csy8zH3i4QelHcBAKgUgqVLzgsP0FSG/eFT67yF8bz2QNl6ZA7AcITZni3jafuuuHQdcgAVR4AagVgdREahE5AW32J+NYaSScIPSz1tg0CWDOuK64Nt43Pl6Hp8b6Ka8O68smi9qivbZBl2TuoP/Prg7kzgkq9SIJ+3AcCMKtHE4QelmbrjalKhV9OOCivkaXorLie6Psab0ddV1x7nE6n76AxBLtAtFujrb7lM4oiBukXnpRHmqb1vUNDZj6UdEpXvKiyXuPCnZHlvjHeVrvi2rhW7/cBQRB0fhFy4GTMquDFFjD32xpEPvnEMjw2X5E5q1VDf6YIPJdsUSLd9QQ4zpKiWPW4WO9xwFQ8HhZM5pLAz2sQHWqbbqpzGdTSqWhD0Wb1trc1otP1Ybk63nUfAWyteDvqk3k9e7T5PrNdevPvAl0p6UtEkiRIKTsTAWysuIl6S/sabuu7/zS2qW22gQA6jbeX1Lcabqu3BV6jrrZZaQ2MBqGHYfte/eHh4af8cv3L/oOEToSU0hj/WaatrKysrKysAPgXoYV4fgSVSTsAAAAASUVORK5CYII=",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
            ],
            callbacks:
                "const type{\n    level_requirements dict\n    random_prod_factor dict\n    supply_requirement integer\n\n    accept_cargo_types cargodict\n    prod_cargo_types cargodict\n}\n\nlocal type{\n    total_delivered integer\n    current_production_level integer\n    random_range integer\n\n    i iterator\n    level iterator\n    cargo iterator\n}\n\nindustry:storage type{\n    supplied_cycles_remaining_cargo cargodict\n\n    base_prod_factor integer\n\n    num_supplies_delivered 27 list\n}\n\nlevel_requirements 0 [] 100 =\nlevel_requirements 16 [] 150 =\nlevel_requirements 16 5 * [] 300 =\n\nrandom_prod_factor 0 [] 8 =\nrandom_prod_factor 1 [] 12 =\nrandom_prod_factor 5 [] 16 =\nrandom_prod_factor 7 [] 20 =\nrandom_prod_factor 10 [] 24 =\nrandom_prod_factor 11 [] 28 =\nrandom_prod_factor 12 [] 32 =\nrandom_prod_factor 13 [] 36 =\n\nsupply_requirement 8 =\n\naccept_cargo_types ctt:BOOM [] 1 =\naccept_cargo_types ctt:PEAT [] 1 =\naccept_cargo_types ctt:WDPR [] 1 =\nprod_cargo_types ctt:POTA [] 19 =\nprod_cargo_types ctt:ENSP [] 9 =\nprod_cargo_types ctt:FMSP [] 9 =\n\n\n/*\n The following is a replication of what FIRS is doing for a primary industry.\n See: https://github.com/andythenorth/firs/blob/4.4.0/src/templates/produce_primary.pynml\n*/\n\n/* Get the total amount of supplies delivered in last 27 production cycles. */\nfunc:produce_total_supplies_delivered def{\n    i 0 26 [..] loop{\n        total_delivered total_delivered num_supplies_delivered i [] + =\n    }\n}\n\n/* Calculate current production level, based on delivered supplies. */\nfunc:produce_calculate_current_production_level def{\n    func:produce_total_supplies_delivered ()\n\n    level level_requirements loop{\n        current_production_level\n            level_requirements level []\n            current_production_level\n            total_delivered supply_requirement / level >=\n        =\n    }\n}\n\n/* Set the number of supplied cycles remaining per cargo - used to display 'supplied' (or not) in the industry window. */\nfunc:update_supplied_cycles_remaining_per_cargo def{\n    cargo accept_cargo_types loop{\n        supplied_cycles_remaining_cargo cargo [] supplied_cycles_remaining_cargo cargo [] 1 - 0 max =\n    }\n}\n\n/* Shift the array of supplies_delivered values one place to the left, and zero the last entry. */\nfunc:produce_256_ticks_shift_supplies_delivered def{\n    i 0 25 [..] loop{\n        num_supplies_delivered i [] num_supplies_delivered i 1 + [] =\n    }\n    num_supplies_delivered 26 [] 0 =\n}\n\n/* On arrival of supplies, push the amount to perm storage, then clear from stockpile. */\ncb:production_cargo_arrival def{\n    cargo accept_cargo_types loop{\n        num_supplies_delivered 26 [] num_supplies_delivered 26 [] industry:cargo_incoming_waiting cargo [] + =\n\n        supplied_cycles_remaining_cargo cargo []\n            28\n            supplied_cycles_remaining_cargo cargo []\n        industry:cargo_incoming_waiting cargo [] 0 >\n        =\n    }\n\n    /*\n     Update the production level immediately, so that production level text immediately updates in industry window.\n     Production won't actually increase until next 256 tick production cycle.\n    */\n    func:produce_calculate_current_production_level ()\n\n    cargo accept_cargo_types loop{\n        result:inputs cargo [] industry:cargo_incoming_waiting cargo [] =\n    }\n}\n\n/* On 256 ticks, if supplied, produce extra output cargo at appropriate multiplier. */\ncb:production_every_256_ticks def{\n    func:produce_calculate_current_production_level ()\n    func:update_supplied_cycles_remaining_per_cargo ()\n    func:produce_256_ticks_shift_supplies_delivered ()\n\n    cargo prod_cargo_types loop{\n        result:outputs cargo [] prod_cargo_types cargo [] industry:production_level base_prod_factor current_production_level * * * 16 16 100 * * / =\n    }\n}\n\ncb:production_initial def{\n    /* Highest value in random_prod_factor is 13. */\n    random_range industry:random_bits 14 % =\n\n    level random_prod_factor loop{\n        base_prod_factor\n            random_prod_factor level []\n            base_prod_factor\n            random_range level >=\n        =\n    }\n\n    /* Initial production level. Can be changed with cheats. */\n    result:value 16 =\n}\n\ncb:production_change_monthly def{\n    result:value 0 =\n}\n\ncb:production_change_random def{\n    result:value 0 =\n}\n",
            type: "primary",
        },
    ],
    cargoes: [
        {
            id: 0,
            available: true,
            label: "PASS",
            abbreviation: "PS",
            name: "Passengers",
            unitName: "Passengers",
            weight: 1,
            colour: 152,
            price: 5633,
            penaltyLowerBound: 0,
            penaltyLength: 22,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAA2ElEQVR4nG2QIW/CcBTEfzQIBOKRIP4kE4gJ5AQCWYlATlRMTFZsyXCTCD7ARD8AAoEAj0Ag+AATFQgEYqKOCuSSmyhtge7My7vcy909QAIp9J1+1zPlO0hmJjMTSB5A6Hd4ew7YH765hjXSbFoLLyd7j09EywX3yMUegNsmTIevFdGgt2TY35XCA7AB4m1CHI0B6LpacZCmJwDpBTQBxdHHTZmuQ+FoJ5DqAHME7p3JV7tibc0HAOqVYBcE/iqzPf/wGVC2/k9kTVdwtSxPGf6YqHyNtYoyf+63UOCDFM5SAAAAAElFTkSuQmCC",
            },
            longName: "passengers",
            classes: 1,
        },
        {
            id: 1,
            available: true,
            label: "NH3_",
            abbreviation: "AO",
            name: "Ammonia",
            unitName: "Litres",
            weight: 9,
            colour: 183,
            price: 4482,
            penaltyLowerBound: 32,
            penaltyLength: 64,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAkUlEQVR4nI1PsQ3DMAxTiowdMuSQnOcDHCAndOgBzcYDeoJOyOAhowcd4IIdAqd2g6AVQBCQCIpsREj5Yy7fC9VZVOffwnVdzkzJDMBTLW3QB8tbU2ZUe8lwaw9WrePnNTDuh37qKj5kNNs4OpN+6iQ6q4XAKNfBSYhhd8ri09bZseSqNeD5DIl3XaiWCPiq9RuHVFwM5zWOjQAAAABJRU5ErkJggg==",
            },
            longName: "ammonia",
            classes: 320,
        },
        {
            id: 2,
            available: true,
            label: "MAIL",
            abbreviation: "ML",
            name: "Mail",
            unitName: "Bags",
            weight: 4,
            colour: 15,
            price: 6867,
            penaltyLowerBound: 6,
            penaltyLength: 24,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAA7UlEQVR4nI2PoU7EUBBFTzcrEU+MqHgCgSxJxYqKFSvBVVZAgqioRCIqK/iEfsIIxDosH1CxAvEE8omKCgRyk0EsbcIGwU2uuTlzcycBM/6h9XnQd/cchgOSerr+dcmTubFtbgHwXohxYhrjL3gF0JTXeC/LtfeCpJ5pjEtBUm3FnKRI6hc4xgnvhe0+cDEMXGKsnaTsqpY37ZjGCMDT/p2vzYbss4SrEj5gtata8jzn8fmFoxQcpSB3jiwWNJnSP4TTnhCCqaqpqoUQrK5rCyFY393Z6dHZ2AI550xVrSmzM+gHnK2q1jY3f0Bm39APf+YvpcZ4AAAAAElFTkSuQmCC",
            },
            longName: "mail",
            classes: 2,
        },
        {
            id: 3,
            available: true,
            label: "ENSP",
            abbreviation: "ES",
            name: "Engineering Supplies",
            unitName: "Crates",
            weight: 10,
            colour: 61,
            price: 7072,
            penaltyLowerBound: 2,
            penaltyLength: 32,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAsklEQVR4nGNkYPj/n4EIwESMIgYGBgYmAwNDBgMDQ4YrcxQZ/lxhZPhzhZHBwMAQQyEjzOorcxThgjop93FbvWDPH4Ynd34wLNjzBy7p4hPLEJFQyMDAwMDAAhPkENBhyNnwhyHCAS7E8OHDG0wTTzwRYbC4sYfhA48NXFJAQIRBREQEVaHEliUMVwwMGD701KCY+ObNG4RCF59YhiUMkOBcwvCfIaekFcNEhIOwAGQ3AgBUeTVvFQN4EAAAAABJRU5ErkJggg==",
            },
            longName: "engineering supplies",
            classes: 32,
        },
        {
            id: 4,
            available: true,
            label: "BOOM",
            abbreviation: "EX",
            name: "Explosives",
            unitName: "Crates",
            weight: 4,
            colour: 166,
            price: 6497,
            penaltyLowerBound: 6,
            penaltyLength: 42,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAiElEQVR4nI2QvQ3CQAyFPyMPcAUDUGSAo7uCIW4ICkbIKJQMk4KCIoNkBEuPIgok/ESxZH2W/CS/ZwOJDbVbW0Znr9lAyvn4V/woPX4VjMKsX4wOjdYkj2pQgMOS3oOf3vb9sj+ThgQNMAANpEhfFiwqogB3mNPb5TNWU89r82luoKjok1PaqZ8GZ0OnqGZEfwAAAABJRU5ErkJggg==",
            },
            longName: "explosives",
            classes: 288,
        },
        {
            id: 6,
            available: true,
            label: "FMSP",
            abbreviation: "FS",
            name: "Farm Supplies",
            unitName: "Crates",
            weight: 10,
            colour: 45,
            price: 6990,
            penaltyLowerBound: 2,
            penaltyLength: 32,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAxElEQVR4nI2PsWkDUQyGv3cTyEXAxRW/wYULFy9wRYorM0CKM2QMj+ARPMKNkCGuTOnS4Fe4TKEBAkpx9mGHBCwQ/JI+SfwJInggqqvoSby3T+T8/D/Y1TMK4O686JuBBHC3VPUk1mfnUBtarph/HKiBgYS7T2DaQfQS7s72MhBQgFegBkRQ9RJtKZgZe7MJAjgCb013b+Ya+6ZDN9q/PsfXECEtACjlNJpoNhNgZrj7CP6+Ki1oS2GQbtsRf6WkyDlP9Q+9rk0f6aQUlAAAAABJRU5ErkJggg==",
            },
            longName: "farm supplies",
            classes: 32,
        },
        {
            id: 7,
            available: true,
            label: "FERT",
            abbreviation: "FL",
            name: "Fertiliser",
            unitName: "Tonnes",
            weight: 16,
            colour: 157,
            price: 5057,
            penaltyLowerBound: 22,
            penaltyLength: 44,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAj0lEQVR4nGNkYPj/n4EIwILM+XOBESFhgKH//38Ghv///1xg+P/nT8P/HRUS///8afj/5wLDf5gc1FaEwh0VEv8VFBQgivEpxGciI7JnCLpxwoOY/zUnfP4zMPz/HzPH5D8Dw///NSd8/k94EIPdxJoTvgwPrrxgUNCRYGix2Izd1zAMMxEdMxET2AwMDAwA17CD7Wsnp2oAAAAASUVORK5CYII=",
            },
            longName: "fertiliser",
            classes: 528,
        },
        {
            id: 8,
            available: true,
            label: "FISH",
            abbreviation: "FI",
            name: "Fish",
            unitName: "Tonnes",
            weight: 16,
            colour: 51,
            price: 5510,
            penaltyLowerBound: 0,
            penaltyLength: 18,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAt0lEQVR4nGNgYPj/HxnPWbDmP7oYA8P//4w5JS3/p/RUM8xZsJZhz4EjDAwMDAwiIiIMEgIMDDU11QwwwGSgo8EQkVDIcOHKDQYXBxsGHRURBgMdDYYDJ24wRCQUIhS+eHKDYcWCfgYDHQ2GPQeOMLz4wMBw4coNBgcLDQYRERG4QkaIGwgDJlwScxasReHDTcwpaWXA5ym4QpgCERGIZ148ucEgIaPBsGLNBgYRERGE1YQ8RbRnAP4JXiPdSUIBAAAAAElFTkSuQmCC",
            },
            longName: "fish",
            classes: 132,
        },
        {
            id: 9,
            available: true,
            label: "KAOL",
            abbreviation: "KA",
            name: "Kaolin",
            unitName: "Tonnes",
            weight: 16,
            colour: 141,
            price: 4112,
            penaltyLowerBound: 30,
            penaltyLength: 255,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAfElEQVR4nKWQQQrDQAhFX9IcwIX3P88U5iAGXHgAg13NNLMpgQqC8p//gxtU8aD2J9D/YOaF2fkbvAP3eYLDRVWnqKpkXl/Q7KT3TkQA4O7LAcDe2htVRUQWwd1x95kGVLXWKjPLzCozZ48dqrbxcLOTiEBEUFWO47UkfABX5Fb3dDIyIAAAAABJRU5ErkJggg==",
            },
            longName: "kaolin",
            classes: 576,
        },
        {
            id: 10,
            available: true,
            label: "WOOD",
            abbreviation: "LG",
            name: "Logs",
            unitName: "Tonnes",
            weight: 16,
            colour: 189,
            price: 4276,
            penaltyLowerBound: 24,
            penaltyLength: 255,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAA2klEQVR4nI2QIU8DQRBG312OZOuWZMWJkxUIBKKiTVYikJXIFUjk/Qh+RMXJSiQCWVl5oqICMeLEJqxjkpIsouGgISQdOXl538xXQM6cMeU50L/gbV2wCpc8tYtxV/yODn7C1fwGF3cAiChvCt3m4wgGPwEYoW9A9oqx4JyhCN7kGJXHZY0MioiyFWU5t6N10yvFKti8fkls1TIziWZq8FNzYm1cRdk+H+/zdaINNTH+WGWv3N9Zuv5AOTOJxlVoAhkUTYzRr0PmoXs//TpcXyDxk8ZVdP3hT2VfA9JpYtMpX0oAAAAASUVORK5CYII=",
            },
            longName: "logs",
            classes: 32,
        },
        {
            id: 11,
            available: true,
            label: "WDPR",
            abbreviation: "LU",
            name: "Timber",
            unitName: "Tonnes",
            weight: 16,
            colour: 55,
            price: 4811,
            penaltyLowerBound: 18,
            penaltyLength: 255,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAt0lEQVR4nI2PKw7CUBBFT1Es4AlEF4BEViAqugBIEAhEBbISUYksCUuoYAltUolsgkEgKyorKkbWD4L0lU8gTDLJzOTk3jsOqPJHjf6BfoJdnVMWB7s779ZdnXOrKqRtCPzAzhb8BgAEfoBTFokCH4BIw3oVDorhfKzGNSw20YtCD1TV9ZExSyMFKM8Z0gjbeG8BYyYAiLRDxjRZYoxLdkqZejOMmSDSEh8v/Z+qz50mC012nr7f70DNenOhRkKXAAAAAElFTkSuQmCC",
            },
            longName: "timber",
            classes: 32,
        },
        {
            id: 12,
            available: true,
            label: "FOOD",
            abbreviation: "FD",
            name: "Food",
            unitName: "Tonnes",
            weight: 16,
            colour: 186,
            price: 6908,
            penaltyLowerBound: 0,
            penaltyLength: 20,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAA1klEQVR4nH2PIY4CQRBFXyccoI8wCYgRI1YgOAICgRw5DuSQrEBwAMTKFSORSCQHQBTJij0AosWIFogSKzaBpBCTDpAQKilRlV+/3gfMwExELMZoMUb7+T1Z2qd2ImJZlgEQQgAgzW38Y/jRB8Bl056pXtmv5UlUrgeE8E/YXTqhiJiqMm8mAGyXh9eOG7AAjEV4h+DKqjYA0W/eIbguFYgceURIJU2Lqt6FGxwJwXuPquK955znnIBeutxXdfdyNHpybL+aLkxyTFVWCwCKIgdg9TkD4AaYSHdlLu2vQgAAAABJRU5ErkJggg==",
            },
            longName: "food",
            classes: 132,
        },
        {
            id: 13,
            available: true,
            label: "PAPR",
            abbreviation: "PR",
            name: "Paper",
            unitName: "Tonnes",
            weight: 16,
            colour: 43,
            price: 5880,
            penaltyLowerBound: 12,
            penaltyLength: 60,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAqElEQVR4nI2Quw2DUAxFT6IMQIEUSrowCANQMIq3SAaieAMkOzCAkVwwgJFTvRdImriz7/H15wQR/BHnf6AfUHVBdcF9Q3X5ZiMgwt3D3WOaphCRkmf9nJ3MjJQS8zwDMI4jZob79nHMDqoaIhLDMBRHVQ2IuGQ8pUTf94gIdV1jZocFC5hHArRtC0BVVcerH497KezFdV1pmisAp/3Dn8/XAe66W2l6A9FJbcGpGhsDAAAAAElFTkSuQmCC",
            },
            longName: "paper",
            classes: 32,
        },
        {
            id: 14,
            available: true,
            label: "PEAT",
            abbreviation: "PE",
            name: "Peat",
            unitName: "Tonnes",
            weight: 16,
            colour: 148,
            price: 3659,
            penaltyLowerBound: 30,
            penaltyLength: 255,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAdElEQVR4nGNkYPj/n4EIwESMIjoo1HFRZLCJMMRgMzAwMLDAGB46rAwCPwQYBH7wMPAgsWVsRBlWHHnNwADxNQR76LD8j7ARwWBDQ+b/fx0Xhf82EQb/8bFZcFmJbj3Tjiu/GT58+MDw4c0LBlzsFUdeMwAAZWVTOr2b3VEAAAAASUVORK5CYII=",
            },
            longName: "peat",
            classes: 16,
        },
        {
            id: 15,
            available: true,
            label: "PHOS",
            abbreviation: "PH",
            name: "Phosphate",
            unitName: "Tonnes",
            weight: 16,
            colour: 5,
            price: 4070,
            penaltyLowerBound: 30,
            penaltyLength: 255,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAA3UlEQVR4nI2PIY7DMBREX6qADwIcqcCVTCoFLAgIDMgBcowco0co3AP4IDlAQWFAQUGgpQYYGASYpaBbr7Rarfajr9EbzUwG28Y/bvdTsEPJeDr8DdqhpO0UtfbYofwdvNkjzUdErY5xKjBauNljAvP34+aIWwSAtlNEv+BmlcAMts0OJUYLppIvQwSgb1Zuy57+/PiONpVwvQRq7Wk7hdFCKEwyZe4z30JhcPNL2KvAdBf6Zk1dTSXsxqkg+oVae0wlTHfBaGGJeYKul/DqCDCeDinmPcYHRX9+APAEU5FWznckX0IAAAAASUVORK5CYII=",
            },
            longName: "phosphate",
            classes: 16,
        },
        {
            id: 16,
            available: true,
            label: "POTA",
            abbreviation: "PA",
            name: "Potash",
            unitName: "Tonnes",
            weight: 16,
            colour: 160,
            price: 4194,
            penaltyLowerBound: 30,
            penaltyLength: 255,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAA2klEQVR4nI3OIW7DQBCF4d9RDmAwwAdYsCAH2LDCBY1Us4IcocBH6BEKcoSCsIKSBeExLFywoNDggT2AJZdUrtRWVQeOvpn3GlgW/jGb74s09JyPh79hGnpKnsilkIb+d3iKe6xLqFZC8FTNnOL+JzQzNEVC8JQ84XYXzGyFDSxLGnqqZiRhZrS2BWAcM9457p9fvz5KwvmOXAolT1TNWNuuR81j8Iu17Rrjdhc0RcYxr10lsQnBE27eyKUgCU2Rqpnbu/cVOd+xjU8vAJyPhzVGEu6z0kO6QoIPDJ1g4JB3zBMAAAAASUVORK5CYII=",
            },
            longName: "potash",
            classes: 16,
        },
        {
            id: 17,
            available: true,
            label: "PORE",
            abbreviation: "PY",
            name: "Pyrite Ore",
            unitName: "Tonnes",
            weight: 16,
            colour: 127,
            price: 3577,
            penaltyLowerBound: 30,
            penaltyLength: 255,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAsUlEQVR4nGNkYPj/n4EIwIRNcE6CIMOcBEEUMUZkE2GSBho/GC7c4IArSlnwnoEFWdeSBV8YdHQk4Pw9dxDSWK2+cIYHrshF5Q+qQgcGVoaYBB6GK1dewDW4qPyBa8AwUUQGoXjHHgaGFUdeIzzjwMDKICLDw8CiwMLw58EfBhYFFhTTVhx5jfB1iIwgw5snXxgkbAQYGBgYGP48+MOw5sl77MEDcysDAwPDAYbfKE4CAMDnPEJQLi+iAAAAAElFTkSuQmCC",
            },
            longName: "pyrite ore",
            classes: 16,
        },
        {
            id: 18,
            available: true,
            label: "SULP",
            abbreviation: "SU",
            name: "Sulphur",
            unitName: "Tonnes",
            weight: 16,
            colour: 143,
            price: 4317,
            penaltyLowerBound: 30,
            penaltyLength: 255,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAjUlEQVR4nI2PsQ3DMAwE35lAAVymTJExPFJG0AgZRyWH4AgpVLhwqeKBTxFLthIXJsCC5PHJHwAJJ+Ly28jpCvpwxEo1cwpiiSJNOQXtZw1kiaKjQXSIJR6ADuUUNlWH6OjBvUK3QGvwZuYeMdsLeBjG6YnxtgA0zO/wnZPWnaqKf7+2Yl1odc21d9rMBx3pzQzX2XxIAAAAAElFTkSuQmCC",
            },
            longName: "sulphur",
            classes: 576,
        },
        {
            id: 19,
            available: true,
            label: "ZINC",
            abbreviation: "ZN",
            name: "Zinc",
            unitName: "Tonnes",
            weight: 16,
            colour: 37,
            price: 5181,
            penaltyLowerBound: 12,
            penaltyLength: 255,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAx0lEQVR4nI2QoQ7CYAyEvxEeYRKHQUyUhEdAIkhAIBATSASShImJCQQCMYlAIiDB8QLIJVQgEDwAAjGBJCmC7GdzVN31Ls1dPTDjj6n9YwKol8lmewBARFBVJuGgLJuBWaZ3y/Ru3d7YRMTxQvfArLi02x/J8yfv1wOA6SxCROhI85sxXSeICKNhvxRj7yIAeGAm0sZvBCyTGFWtGAAm4eBXJs+fzKMYAL3evqWCVvU9qhe38H3fYb3eXHP3x+x8qpgA0tXC4Q8rE1QUzT/0LgAAAABJRU5ErkJggg==",
            },
            longName: "zinc",
            classes: 32,
        },
    ],
};
