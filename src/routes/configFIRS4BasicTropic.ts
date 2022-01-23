export const config = {
    version: 3,
    general: {
        grfid: "TRU1",
        name: "TrueGRF",
        description: "Your first NewGRF based on FIRS4 BasicTropic (some industries are missing!)",
    },
    industries: [
        {
            id: 0,
            available: true,
            name: "Arable Farm",
            colour: 209,
            fundCostMultiplier: 55,
            probabilityMapGen: 11,
            probabilityInGame: 4,
            prospectChance: 75,
            layout: [
                [
                    [-1, 0, -1],
                    [4, 1, 3],
                    [2, -1, -1],
                ],
                [
                    [4, 0, 2],
                    [3, 1, -1],
                ],
                [
                    [0, 4, 3],
                    [1, -1, 2],
                ],
            ],
            cargoAcceptance: ["FMSP"],
            cargoProduction: ["GRAI", "BEAN"],
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
                                height: 59,
                                left: -31,
                                top: -28,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAA7CAYAAADLjIzcAAADMklEQVR4nO2ar1MqQQDHP7wxEAgbNhAIFwwE4gWDgWAwEghEA+H9AQajgWgkGI1Eg8FgMBAMBALhBcMGg+HCBYLhzdwLzuJxwt3u/QCZt58ZZ4S529vvZ797B6PgcDgcDofD4XA4HA6Hw+FwOBz/EbWiA4juRXTqfwCwWCxSj202W0gpeLiZFL5uWRSaiOheRG3vHSkF01kdLWI6q6eep8/5CSJyTyAZfpOIQ2hErgunhT+0Rlhf0DT8oTTC6kJ5wv/0RhhfoGh420Y0my2AykUYDWwTvt0+5v5xeTCNyBww78rHRWRJ2ec9InWgbrcbeecdAONVTQufJWUfjUgdoNfrRWEYArAPEbtoROaJl5eX0evrK7sUoX/fRSMyTxiNRhFAGIbkEZE3/CYRVTQi88DxeLwS8FNEmGIi4shkICnl2mvf91ci1OPnqvTOO8D2u33R8J/jHCOD9O2wJsDgGCMBmqIiirZABnXanRObKWdiJEAIQRAEq9d5RZQRvlH/+21+V3cjAPqdc/r9PkopBoOB0X3AqgFJdiVCh++0WwghCMMQpdQqeLPZ4v39jbOzM4QQeJ5nnMFKgG5CGY3IEx5gPp+vBZdSEAShTQx7AfEnQJyqRcTDJ1d8W/DkHLNIFTDwGxGwFtKEMkTE9/zgegh8VT0NvUVMyWzA9O6KVvc3nuetRGxrRJK8InT40eQaSF9xKeXa+6U2YDJb1gAG3EZv8E1EkuSWiE8yTpoIHf7P4sUqeHwONhJ+mRw0mS1rk9my9vZ8y/TuCqUUsH1rCCE2vi+lRAix+vF9H9/3EUKgHhdrtR8Oh8YhimD1FMhqRHJr2DZCh9/0GEuuuB530/hKKQZ+I9LzTSPX54Cqtsa28KaEYcj0ZcHT2Lw9hT4ImTZCk/U5wvO8b3t4215PchIo7m+Ga/MyoZAAje3WsCGt6gCN5wca2IWOU4oATRlbw1RS0eCaUgVoijQi6zF2EigIVOHgmkoEaGwbkUZZK56kUgEaGxHJ1a8quGYnAjQmIoQQzOdzlh9HeItpZcE1e/37vP6ypUVIKVl+HPE0vgCqW/U4e/8HBfgSodlFcIfDAcA/9WzuhVihwegAAAAASUVORK5CYII=",
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
                                top: -28,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAA7CAYAAADLjIzcAAABf0lEQVR4nO3UrW7jQBSG4TeVgYHBAAMDgwEFBgsGFBQEBATuBQQE7AUUBhYWFBQWFBYU7AUsDAgoKDQMCDAIMDAYYBBQaQqqpHJXqlTJ+VH1PWw89hzPp6MDIiIiIiIiIiIiIiIiIiIiIiI/2mBfB49GowCwWCwGAL8LQprGpHkKwN3f9d5qf8fefsI5F7z3WGsBsK8vnf1TCeKsj0Py8V34/Mx7jzEG7z1VVVFFl1TRJfB++WbdADCb5GFykfz3/aH0kr61NryeX5FkGZvn686eMaazdskS+OiAcrGmyRwuWfL4vDl4N0R9HFJV1cByHzYriIc3ALsgvPdAN4g0T/kX3dLWNQUzyrIcFEfqgl4Sn1wk4aVJdy1vjGHza0Y+n7KKbefdeHhDW9es57Nd7XFGmNf7m0df6aXo9gLjjNBkbhdCEa1o25YkSSiLBwCWT9OTmP69G2cEeJ/+27VzLvwZxqGYPh1tyB3U9vLwEcgxJ/zRbUMQEREREREROS1vOod5e2ns5PIAAAAASUVORK5CYII=",
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
                                top: -28,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAA7CAYAAADLjIzcAAAGG0lEQVR4nO2ZL3Ti3BbFf7z1xAjEFRFXRERERCAiEIgKxAhEBKKioiICUVFRUYEYgXgCUYGoQFQgKhAVCEQFoqKiYkQEoiICgYiIuGJExbdWPgE3JED/AZ2ZtV624XIbyNn77HvOCYUCBQoUKFCgQIECBQoUKFCgQIECBQoU+D9C6U8H8FHU/EaicHmJxszupweL+68XIEsc4Jv0EAQ8De4PEvtfK4AmLgiIonlKPLs+hAh/nQCvZTyK5rnrDiXCf/b58CFR8xuJ47cTgJdozDfpIaXJSzRG4SKlCZDuR9MBCpea30j2ue8fd8BbGX9r/RKNUXGMrPh7OeG3OGB46m1kKZvxaDrYmnG9BlKB9P436eFU3PSaXZ3w5Q64btQSwzAAOLkdl7ZlfD37z9MAYRgLq7/jBEGAZx/x48ePv9MBsVLEcQyA47eTKJojCNKMCwJgJYTCRVZ8VBxvOGF9fWqXadVbVKvVneP7rUVQW1evdWXXxPQrkLO3vn4bcVOWsSxr55i+VABRlblzua2qa4J6rV2Rzbh2S5b48/SJfn+C67oopXaO8csEEFWZtOqnub1tNtbtDPhwxoUQhCHo2rKPAP/d+ZNvQJO3LIv4cbX/Eo1R0kNKeJ4OoOLjVCBaZnlR3FbXeHYZabYwZXnxvULk7mNZ5tb9z+DLukC22vvqHwwhUEceN4/Dd3u6Zx8hTQdTlplMJoQh9PuXzGazlKzOut8f7fWAdHAH6H4cRXNUHCArPgPGXLLIVOvohJvHIUp6wHzV02WwNeNZqwshcsQFAS9LEa0GyS4iHEwAnfEo19PHKcFbAi6WRLQIqz7+MasrpXLElfQYdjrLv9Vp3Dc+HffeR8BqVJJ1S0fTAcIwcoONrPhE0wH9yx5xHKOUYhw+0qq3AHiePr1r9ew9HPUPhmHQatUXcVgWUspP89mrC4iqTI4rjY3qLSt+rtrrni4rPr37AYZhIITAs48AMGV5q9V1xi/6nfS7+hdXDM6aS9LmPuEDewigK70QAi3CW/N8dp0VQbe1LKFtxIedG3ondVzXBeDs7DvVqoFSiot+Z2cBdjoC2TanA1ZKcTe9/9QT3EXDTwlpNLuD3Gd6J3X6LY/23SNKKVzXJQgCwjDk9ucYVy2myebZFcGkg2FIWu3Rh3ntVATVz6hk+VY65ekMHlca3E03e72Uq17vyFWv790P6FkdgFeL27YxtzPscVx+wVVxujfqXyIcAwOomSQAT/P3E/wpAfQXA6mFzy+uqDguJydV4jjmmJUIesjRgqwPObbtbxB/GgwIggCl1EY36Ax7jNwBrpoTKrBNg3AeY9llDENycz3iQcdXBs8hMaWk/xC9KsSHBPCcBfH412pPF6pyWaTvNbIi6F6/bbpTSjE4a+L3oX9xwd1dAEAYhgDpU56sOjzetnFVTBAE6X3iMlRrNjfXo5S0Rkr8OXqT25tF8KwuE88hiX/lyQNphizTwjCM9H3veoRlWRuF8bUnOKVUWtx0EbRt+9WYtNWFY2A75xjuJUZ5Rd6UkvEzpbeynsWHLjqry2QeRTkRTtvXubalyXSv7rBMi+/fLWazGY/xlFa9tXWsnc1m6W8Fx8fHaXY7w16uuI36l4v7OMZGbLYQIE8xpKTZOPqaSVCrmRXitnsO3xucVr30uqwjtDgalmXlen1KIJNtTdxldb51xjXZcDkY6XWoFKhrwme4GdwlnxXiU3NA/yEqjZ8pubZcWG5yz233nDiO0+nu5KTK8bGLEALDMLAsKz3vCyHyw0sYhnSGPQBcNcc2F2TDeYxwDKo1G9s5p1b/X0oeyK1tIeh2H0rx9Ipm46h0021++PfBvUbhjaOxdMT60VhvZbPZjDAMmU76aaa3Wf3h9gFYne9m+w5DSp4efmALQas9Kt10m0n29bMcDvI4vC7Eaft6EfhSCD3sTCYTYHl8gPppHVsIfj4tqr5wDGwh3q7qbFq9e1lL2ldPO3E56O8Brwlh2/ZiclsSX4cWYp34ez1816xn8SU/iGzrGpDP6DriXx8nfkh86U30ALUOU0rmUZS+Zvd/F/E/As8hOavLvf6XV6BAgQIFDoh/ATxz23Ii9NEqAAAAAElFTkSuQmCC",
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
                                height: 59,
                                left: -31,
                                top: -28,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAA7CAYAAADLjIzcAAAEMklEQVR4nO2ZIXDjOBiFX28WFggIBCwQMFwQIFgYEFCwICDgQGBAQUBBwMGCgAULFgQEHCwoOLBggeGBAwIBgQIGBQECAgcW3EwOtL8qK7Yju8mmO6tvphPLdhy/9z/9Sh0gkUgkEolEIpFIJBKJRCKRSCQSvw4X576BNvT7/R0AFO+2bp9V21dp+CkM8IUzzgEAvd57AMB2+4ji26azjjdtQJNwiz6+b7+6c7ua8CYNaCPcp4sJb8qAtsJ7vffYbh/dK9DehLMZwGRvR9vivx6A9hUPISPamPAu/paPgxN+OYSwawAvwhl4hfCnyvpV9rdpDKC0L5YfloC2FQ9FVhEK75KAkxvQVHEgLuqHKk5joo0JJ5sCexW366ioA/vNLRTaJDzcd4ijJ4CEM87Btk/+xlS8KfJthbdJwNEM8KN+N5Lgz4IBwBiDL+oRDOuDXT1sdkC9cDoW7uecYbPZRJnwagP8igPA7fUUAGCthbUWACCEAOcc8z/v3PvadHV/7E+PEM4ZfpcfYYzBzc3NaRPgV5y4G0kAQJZl0FqXXvM8h5SyZELIaypOwq21yLIM4/H4NE0wrDigAACjD09GFEWBLMtK77HWQggBpRQWkz/2TGgSHgr2t33hWmtYazEYDFrpiTYgrLj9Xj4upYTWGkKIvfculzlGoz4GgwHyPHcmHIp63b464WR0URSxsuIMuL+/3x06xxjjTKC5X4UQAsaYUhJCkXVG1AlnjIEx1vi5dfwWc9J4PL4wxoAxBmOM+6MxY6x0/nKZl1aB6bQcS7rR2+tpZbzDRHDOMBtOMBRX0FqjKApIKSGEKCVOKRWn2qN1D/CFaa1L4/A4jckorTWAJwOMMe7cunleV3G6DvUapRSyLNvrPTFEJaCK6adZSSxtG2P2Kk7H6RwhRCmuVV29ruLAyypDZFmGxeKhk47OBtThV7yKh4c1OOfOAH/9bxJOy1ue55WNbj4flUyJJa4HyMsdgFYfEE6FOqi5Hao4Y8yNV6tVabmj1UdK6cZ0z4eIWwXUvxfAfAcAV5NFlLAq/OkhpYQxBrPhpHGOa60xGAwwnI1wez11wukLFl0LeOoF1lps/lo83/NhopvgywXnz85elhpZFWGTzLKs1AA555XruLXWJQEA8jzHcvbJXZP2+02QhJfv9TCdvwpTxCgRNPettXtrMgmuOk7b/X7fHVuv11BKQQjhRE4/3+Lb5wesVqvSfqVUJ+FE5+cBYSKuJovKRCyXuYt91bIZrgiEH3XazvPcbW++LqD+UcG9tOdo/w5XJaJuivj7/cr7CTDGuKj7FT+WcOJoT4SqEkH4gv1ENFEUxUmFE0d/JHbIiBjxAI4e9TpO9kwwNhFVGGPw+PfypMKJk/8u0GREyGuWs678sB9Gmow4h3DibD+N0arx4eP8LMLfDLHf2ROJxEn4H5GDMp48skp/AAAAAElFTkSuQmCC",
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
                                height: 59,
                                left: -31,
                                top: -28,
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
                "const type{\n    level_requirements dict\n    random_prod_factor dict\n    supply_requirement integer\n\n    accept_cargo_types cargodict\n    prod_cargo_types cargodict\n}\n\nlocal type{\n    total_delivered integer\n    current_production_level integer\n    random_range integer\n\n    i iterator\n    level iterator\n    cargo iterator\n}\n\nindustry:storage type{\n    supplied_cycles_remaining_cargo cargodict\n\n    base_prod_factor integer\n\n    num_supplies_delivered 27 list\n}\n\nlevel_requirements 0 [] 100 =\nlevel_requirements 16 [] 150 =\nlevel_requirements 16 5 * [] 300 =\n\nrandom_prod_factor 0 [] 8 =\nrandom_prod_factor 1 [] 12 =\nrandom_prod_factor 5 [] 16 =\nrandom_prod_factor 7 [] 20 =\nrandom_prod_factor 10 [] 24 =\nrandom_prod_factor 11 [] 28 =\nrandom_prod_factor 12 [] 32 =\nrandom_prod_factor 13 [] 36 =\n\nsupply_requirement 8 =\n\naccept_cargo_types ctt:FMSP [] 1 =\nprod_cargo_types ctt:GRAI [] 14 =\nprod_cargo_types ctt:BEAN [] 14 =\n\n\n/*\n The following is a replication of what FIRS is doing for a primary industry.\n See: https://github.com/andythenorth/firs/blob/4.4.0/src/templates/produce_primary.pynml\n*/\n\n/* Get the total amount of supplies delivered in last 27 production cycles. */\nfunc:produce_total_supplies_delivered def{\n    i 0 26 [..] loop{\n        total_delivered total_delivered num_supplies_delivered i [] + =\n    }\n}\n\n/* Calculate current production level, based on delivered supplies. */\nfunc:produce_calculate_current_production_level def{\n    func:produce_total_supplies_delivered ()\n\n    level level_requirements loop{\n        current_production_level\n            level_requirements level []\n            current_production_level\n            total_delivered supply_requirement / level >=\n        =\n    }\n}\n\n/* Set the number of supplied cycles remaining per cargo - used to display 'supplied' (or not) in the industry window. */\nfunc:update_supplied_cycles_remaining_per_cargo def{\n    cargo accept_cargo_types loop{\n        supplied_cycles_remaining_cargo cargo [] supplied_cycles_remaining_cargo cargo [] 1 - 0 max =\n    }\n}\n\n/* Shift the array of supplies_delivered values one place to the left, and zero the last entry. */\nfunc:produce_256_ticks_shift_supplies_delivered def{\n    i 0 25 [..] loop{\n        num_supplies_delivered i [] num_supplies_delivered i 1 + [] =\n    }\n    num_supplies_delivered 26 [] 0 =\n}\n\n/* On arrival of supplies, push the amount to perm storage, then clear from stockpile. */\ncb:production_cargo_arrival def{\n    cargo accept_cargo_types loop{\n        num_supplies_delivered 26 [] num_supplies_delivered 26 [] industry:cargo_incoming_waiting cargo [] + =\n\n        supplied_cycles_remaining_cargo cargo []\n            28\n            supplied_cycles_remaining_cargo cargo []\n        industry:cargo_incoming_waiting cargo [] 0 >\n        =\n    }\n\n    /*\n     Update the production level immediately, so that production level text immediately updates in industry window.\n     Production won't actually increase until next 256 tick production cycle.\n    */\n    func:produce_calculate_current_production_level ()\n\n    cargo accept_cargo_types loop{\n        result:inputs cargo [] industry:cargo_incoming_waiting cargo [] =\n    }\n}\n\n/* On 256 ticks, if supplied, produce extra output cargo at appropriate multiplier. */\ncb:production_every_256_ticks def{\n    func:produce_calculate_current_production_level ()\n    func:update_supplied_cycles_remaining_per_cargo ()\n    func:produce_256_ticks_shift_supplies_delivered ()\n\n    cargo prod_cargo_types loop{\n        result:outputs cargo [] prod_cargo_types cargo [] industry:production_level base_prod_factor current_production_level * * * 16 16 100 * * / =\n    }\n}\n\ncb:production_initial def{\n    /* Highest value in random_prod_factor is 13. */\n    random_range industry:random_bits 14 % =\n\n    level random_prod_factor loop{\n        base_prod_factor\n            random_prod_factor level []\n            base_prod_factor\n            random_range level >=\n        =\n    }\n\n    /* Initial production level. Can be changed with cheats. */\n    result:value 16 =\n}\n\ncb:production_change_monthly def{\n    result:value 0 =\n}\n\ncb:production_change_random def{\n    result:value 0 =\n}\n",
            type: "primary",
        },
        {
            id: 1,
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
            cargoAcceptance: ["OIL_", "NITR"],
            cargoProduction: ["RFPR"],
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
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAABCCAYAAADnodDVAAAJh0lEQVR4nO2bLXTiShiGn+5BICJGjIiIQEQgIioQFQgEogKBQFQgVlRUrFixYsUVV6yoqLiiYsWKKyoqKioQVyAQCAQCERExAhERETECEdFzuCJMmqRAfxZYw3sOJwn5me975/t5EwIcccQRRxxxxBFHHHHEEUcccVj8uPm5/PXvw/JP2nDyJwe/+Px1KaXEtiW2lFx+7h3cnj9CgNO+WQLYyRAhJFKmnz9BxMEGcto3S8u2s+3+6YLHx0eEkGgds6j1Oa1MMyI8z6N73ty7fXsfoN6/WwrHRocRiyjCsm36pwsAHh8fcd06nlcHYGy10POQWjQ4GBF7JUA2/loCyHodQ4JZGhIMxlYrW9fzEKBAxL5SYy8EWO7V0jlrZtvCsdceJ2pOtu7IKmGcACkBouasJeK83aZx6u7M7r0QUO/fLcPJGICqkFkEGIeNg46sAhDGSbZutvU8JJzOSLTGbbeYXLdP8l1jV6mxcwKc9s0y0ZpEx4iai56r9PtVRBgiDAnr4D8MSLSmcdnHfxjgNE7RYURw1z+B3bbPD5344+bnctPAJu8NEh3jnDUJJ2OeFpqKJbIlpBGS6JiqkKttgdfr4D8M8HodII2YPAEGeSLO221ms9m7yfj0noMNfD9g5gdrlVyi42y9KkQ2816vR8US2bL57SsAjcs+VSFXS5E57fU6WVqImrO2jigVEAQBvh/w79090l5fa7bhXWy9RcBY7tWyKiRVIUi0pioElm1TazayorYp9IFCLQAKhXFy3S7Y67RvlnYyTK8pJBe97rsj4NWDPyJg+l/uspCW9Xp27qb8z3cAs52HKYp5LbHOnlaryd3MYhFF6XnDb6/6V9m0Y5uAAZAyHRAWjK0r5vOQmj8gimK+X51iS8n32xmLKCLROiNiXfEzzhsi8l0h77xJA2NPuq0yewwhY6uDnodY9t1yEUVbiVi7Y5cCxvM8vtxMCrOWb4nrUI6I6a87NtkjHJuOVFvtMZO4jojCF/sWMP2bCYsoYjH9kRp7IwD49vTf2nHGN/+wS3v8hwcW6mfB50IKmHYFZDn8moAxg66uUBAwtDsMhyPaXkAUxfRPJZ53xueLogPriqOehzu3x+v1mFz/LIydsbFPARMHAVUhaDphoWt8+3oJQP3q4cW1jNH7FFSQi4BE64xps/5RAQNpHzcza7TBUFtURZWmExBJybe/rvE8D9/3GcRuwfh92pNHJoQOIWASHZNoXRAww+GI83b7hWGHElRZKOxTwPgPzyHu9XqE0xl5AfPlyxXXo+eqr8OIcDLmEILqE0DVvljC8wwBWduaj6fZYOUQKt/BbdrnnDURNRfnrIkO0x7e7Xaz/b7vp05PZ4TTGfNhGrb7sqfev8vk+ycgyyMzKKRiIw6C7PvXBEx50LKAsWw7U2j5MMwLGK/XwWmcUmt3EDV3L/aUx9+oBE3YQRqSBuvCrqzkDNRw9HzealAjYAa4hSgwAsZcP09a2g1+3x6D/PkVYG1VNYiDAFmvs4giosGX1NgNAsYMZgSMkb955/PLvGorG5snwn94yKr7R+wB1naAjIAkuj+x3Kulcd60kzzr63BIAaOGow/bUzhmJYsLBBg8LXT6ZSkKzAmG6ea39Lj61ctBMhUImYAJJ2NYFcC8gIFnQ/OzVRYwkN4HmBrwHnvKzkPxLvFFDTCpUM6cbczncQhB9R57DPJ5n0fhiVCt3cmMMwaZgROtaf3sc37/Bbtzu1a+rjNyn4LqLfaUnS8LoUIE5HNjESoqlsgcMsv8LWn5gvmBjICBtIeLmoPX6wFkzudJKDu9CR+1p/wgxaAQAeaAfKimzkiqQuKcNQu92AxiPvsWMCaa3mpP3vlNKBCwiCKS6P6kTEJejJRzz1x8EUV7FVSQzu577DGf1B6dXqM0doEAc9C/7fSpj4kA45Bl2yRaI2pO4eJGrKxDWcDoMNpYpdc9GssjP6tvtSfRmht7RDz9cbKIXo5dqAGyXudvebYMlKJTiYiThEmlm0WDYdyRVfwcYQa7FlSwvqW91Z5Ea1rRLUHF5vb8bHn99DICKgD3/c7ycpIyNwoC4iTB7fYRgJ5OqdVqSPnEf/OXBsp6HTv8lRpra9TijF0JqsIxKwFTt9N0EkKgcF/Y41mpAHNdF6UUsXvKyJ8gq1USW+PIKvf9zvLibnCSERAoxbUbI2XIvdXCmBrHMbVaLVt3nwb4iyaOrKIbp1QnP9D+AL0ySAgBi90IqrLzAO5TOhaA1przRsDjzMaRVaL4Lh1/tW86nWY2yW6fOI65tWbEvy4IcpHyqdVqLUdqzsgPCJSinURcWE/EccyPziy7WzOsV4UoavYNM5svoKYrbKoT25DPe106XymV2WMmCqDRaABw258D0E4i2klEoBQjP2Ck5rRarSVAZTQanbRarWUMWah4jk1bCPyRhwpVwUnT1uzgFoRAa41YLQ1q7Q7z4SATVOXe3fqZih67Y2980lt2Xjg2ib9aX2NPfvw4jmk0GvijleORxg/TmoZ3VrhGBWA0Gp0ArCOiJwTSemJYTQeKZwG1ZqMQGYYEABa7FVR5AZMPcbMdB6k9rpvWA6VUGsGhT6BfOm58NSh0gW1EnIoYKSXjevoai7NiGp4Ljuu6TMN0VmL/ZVfI/1wWB8FGp/POb4MQAunUM3vaScRpNSFQ0auOG2z97czkCTkipBBIKblfVJBSZiRA+nTnflRB1FzcpwGTIHWwTILpCOYxtXE2/9TIwPysVms2cKY3KKXQWtNoNFBKoSqdtM/HMXFpxjc5ncfGJ0KwPSLaQiCTJ4YydVIplaVFojVYULcDgqj+QlBlEVBzCKezbJ8RMOY+wrPGYIGKRDbL8FzkrhyLOH4gUK+H+ocIKBPR7XaXsdZrUyPOFSZZr6P9AUII+g0LpRSTwH6XgPGs8XNez1ONoCZpmrWTiDiOX+T4aDQ6YTR6i0vvI8Dg8fHx1Yi4J5Wldo6Q1JH0lx2tA+ItAiYPU1cSnQqYtmO9ubi9Fb/1jtC2GjGs2nw9G/LPpI1SqtAqXdflcWbT/X6Juv1cyGkz60aHfLmrrUL9ZY7/juMGO3lJqtvtLrXWG4nIw5AxXTTxeh2q/30vtDVTWKWUWaiXHRdCZNH4u9jpW2KvRQSQOTdOWlllz0MptdcZL2Mv7wm+hYjHmU3jsl8gYNOMw+4dN9jrq7LbUuNvLhCOjRffHyTUN+Egb4tvi4hDz3gZB/2/wDoi/pTjBn/kDxPdbncJxTu4Qzt+xAr/Ax8RZXNWWh8zAAAAAElFTkSuQmCC",
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
                "const type{\n    accept_cargo_types cargodict\n    prod_cargo_types cargodict\n}\n\nlocal type{\n    current_production_ratio integer\n    total_cargo_produced_this_cycle integer\n    total_cargo_to_distribute_this_cycle integer\n\n    cargo iterator\n}\n\nindustry:storage type{\n    supplied_cycles_remaining_cargo cargodict\n\n    total_produced_cargo_available integer\n}\n\naccept_cargo_types ctt:OIL_ [] 4 =\naccept_cargo_types ctt:NITR [] 4 =\nprod_cargo_types ctt:RFPR [] 8 =\n\n\n/*\n The following is a replication of what FIRS is doing for a secondary industry.\n See: https://github.com/andythenorth/firs/blob/4.4.0/src/templates/produce_secondary.pynml\n*/\n\ncb:production_cargo_arrival def{\n    cargo accept_cargo_types loop{\n        supplied_cycles_remaining_cargo cargo []\n            28\n            supplied_cycles_remaining_cargo cargo []\n        industry:cargo_incoming_waiting cargo [] 0 >\n        =\n\n        current_production_ratio\n            current_production_ratio\n                accept_cargo_types cargo []\n                0\n            supplied_cycles_remaining_cargo cargo [] 0 >\n            +\n        =\n\n        total_cargo_produced_this_cycle\n            total_cargo_produced_this_cycle\n            industry:cargo_incoming_waiting cargo [] current_production_ratio * 8 /\n            +\n        =\n    }\n\n    /*\n     When low cargo amounts are delivered, it's possible that final output\n     cargo amounts < 1, which means no cargo is distributed. Prevent that by\n     stockpiling produced cargo on each production cycle until there is enough\n     to distribute. The case is triggered by low amounts being moved to the\n     produce cycle as a vehicle gradually unloads, and was noticeable with\n     Road Hog trams.\n    */\n    total_produced_cargo_available total_produced_cargo_available total_cargo_produced_this_cycle + =\n\n    /*\n     Then check min. distributed by dividing over 8, to get the amount divided\n     by max possible output cargos. 8 is the pathological case, this could be\n     made more accurate by checking the lowest output ratio in current economy.\n     For accuracy, this could also store remainders using mod(8) or so, but eh, TMWFTLB?\n    */\n    total_cargo_to_distribute_this_cycle\n        total_produced_cargo_available\n        0\n        total_produced_cargo_available 8 >=\n    =\n    total_produced_cargo_available total_produced_cargo_available total_cargo_to_distribute_this_cycle - =\n\n    cargo accept_cargo_types loop{\n        result:inputs cargo [] industry:cargo_incoming_waiting cargo [] =\n    }\n    cargo prod_cargo_types loop{\n        result:outputs cargo [] total_cargo_to_distribute_this_cycle prod_cargo_types cargo [] * 8 / =\n    }\n}\n\ncb:production_every_256_ticks def{\n    cargo accept_cargo_types loop{\n        supplied_cycles_remaining_cargo cargo [] supplied_cycles_remaining_cargo cargo [] 1 - 0 max =\n    }\n}\n\ncb:production_change_monthly def{\n    result:value 0 =\n}\n\ncb:production_change_random def{\n    result:value 0 =\n}\n",
            type: "secondary",
        },
        {
            id: 2,
            available: true,
            name: "Coffee Estate",
            colour: 70,
            fundCostMultiplier: 54,
            probabilityMapGen: 10,
            probabilityInGame: 3,
            prospectChance: 75,
            layout: [
                [
                    [-1, -1, -1],
                    [-1, -1, -1],
                    [1, 0, -1],
                ],
                [
                    [-1, -1],
                    [-1, -1],
                    [-1, -1],
                    [-1, 1],
                    [-1, 0],
                ],
                [
                    [-1, -1, -1, -1],
                    [-1, 0, 1, -1],
                ],
                [
                    [-1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1],
                    [-1, 0, -1, -1, -1],
                    [-1, 1, -1, -1, -1],
                ],
                [
                    [-1, -1, -1, -1],
                    [-1, -1, 1, 0],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                ],
            ],
            cargoAcceptance: ["FMSP"],
            cargoProduction: ["JAVA", "FRUT"],
            placement: "anywhere",
            tiles: [
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3962,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 59,
                                left: -31,
                                top: -28,
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
                                id: 3962,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 59,
                                left: -31,
                                top: -28,
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
                "const type{\n    level_requirements dict\n    random_prod_factor dict\n    supply_requirement integer\n\n    accept_cargo_types cargodict\n    prod_cargo_types cargodict\n}\n\nlocal type{\n    total_delivered integer\n    current_production_level integer\n    random_range integer\n\n    i iterator\n    level iterator\n    cargo iterator\n}\n\nindustry:storage type{\n    supplied_cycles_remaining_cargo cargodict\n\n    base_prod_factor integer\n\n    num_supplies_delivered 27 list\n}\n\nlevel_requirements 0 [] 100 =\nlevel_requirements 16 [] 150 =\nlevel_requirements 16 5 * [] 300 =\n\nrandom_prod_factor 0 [] 8 =\nrandom_prod_factor 1 [] 12 =\nrandom_prod_factor 5 [] 16 =\nrandom_prod_factor 7 [] 20 =\nrandom_prod_factor 10 [] 24 =\nrandom_prod_factor 11 [] 28 =\nrandom_prod_factor 12 [] 32 =\nrandom_prod_factor 13 [] 36 =\n\nsupply_requirement 8 =\n\naccept_cargo_types ctt:FMSP [] 1 =\nprod_cargo_types ctt:JAVA [] 9 =\nprod_cargo_types ctt:FRUT [] 9 =\n\n\n/*\n The following is a replication of what FIRS is doing for a primary industry.\n See: https://github.com/andythenorth/firs/blob/4.4.0/src/templates/produce_primary.pynml\n*/\n\n/* Get the total amount of supplies delivered in last 27 production cycles. */\nfunc:produce_total_supplies_delivered def{\n    i 0 26 [..] loop{\n        total_delivered total_delivered num_supplies_delivered i [] + =\n    }\n}\n\n/* Calculate current production level, based on delivered supplies. */\nfunc:produce_calculate_current_production_level def{\n    func:produce_total_supplies_delivered ()\n\n    level level_requirements loop{\n        current_production_level\n            level_requirements level []\n            current_production_level\n            total_delivered supply_requirement / level >=\n        =\n    }\n}\n\n/* Set the number of supplied cycles remaining per cargo - used to display 'supplied' (or not) in the industry window. */\nfunc:update_supplied_cycles_remaining_per_cargo def{\n    cargo accept_cargo_types loop{\n        supplied_cycles_remaining_cargo cargo [] supplied_cycles_remaining_cargo cargo [] 1 - 0 max =\n    }\n}\n\n/* Shift the array of supplies_delivered values one place to the left, and zero the last entry. */\nfunc:produce_256_ticks_shift_supplies_delivered def{\n    i 0 25 [..] loop{\n        num_supplies_delivered i [] num_supplies_delivered i 1 + [] =\n    }\n    num_supplies_delivered 26 [] 0 =\n}\n\n/* On arrival of supplies, push the amount to perm storage, then clear from stockpile. */\ncb:production_cargo_arrival def{\n    cargo accept_cargo_types loop{\n        num_supplies_delivered 26 [] num_supplies_delivered 26 [] industry:cargo_incoming_waiting cargo [] + =\n\n        supplied_cycles_remaining_cargo cargo []\n            28\n            supplied_cycles_remaining_cargo cargo []\n        industry:cargo_incoming_waiting cargo [] 0 >\n        =\n    }\n\n    /*\n     Update the production level immediately, so that production level text immediately updates in industry window.\n     Production won't actually increase until next 256 tick production cycle.\n    */\n    func:produce_calculate_current_production_level ()\n\n    cargo accept_cargo_types loop{\n        result:inputs cargo [] industry:cargo_incoming_waiting cargo [] =\n    }\n}\n\n/* On 256 ticks, if supplied, produce extra output cargo at appropriate multiplier. */\ncb:production_every_256_ticks def{\n    func:produce_calculate_current_production_level ()\n    func:update_supplied_cycles_remaining_per_cargo ()\n    func:produce_256_ticks_shift_supplies_delivered ()\n\n    cargo prod_cargo_types loop{\n        result:outputs cargo [] prod_cargo_types cargo [] industry:production_level base_prod_factor current_production_level * * * 16 16 100 * * / =\n    }\n}\n\ncb:production_initial def{\n    /* Highest value in random_prod_factor is 13. */\n    random_range industry:random_bits 14 % =\n\n    level random_prod_factor loop{\n        base_prod_factor\n            random_prod_factor level []\n            base_prod_factor\n            random_range level >=\n        =\n    }\n\n    /* Initial production level. Can be changed with cheats. */\n    result:value 16 =\n}\n\ncb:production_change_monthly def{\n    result:value 0 =\n}\n\ncb:production_change_random def{\n    result:value 0 =\n}\n",
            type: "primary",
        },
        {
            id: 3,
            available: true,
            name: "Flour Mill",
            colour: 49,
            fundCostMultiplier: 50,
            probabilityMapGen: 10,
            probabilityInGame: 10,
            prospectChance: 0,
            layout: [
                [
                    [2, 0],
                    [3, 1],
                ],
                [
                    [2, 2, 0],
                    [3, 3, 1],
                ],
                [
                    [2, 0],
                    [3, 1],
                    [2, 0],
                    [3, 1],
                ],
                [
                    [6, 4],
                    [5, 7],
                ],
                [
                    [6, 5],
                    [4, 7],
                ],
                [
                    [5, 4],
                    [7, 6],
                ],
            ],
            cargoAcceptance: ["GRAI"],
            cargoProduction: ["FOOD"],
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
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAAEbklEQVR4nN1ZrXbjPBC9PcfAwCDAwMDAIGBBoEBAwMKCAsMPLCwo7APkIQr3AQoWBvQBCgICBD4QUBBgYCAgYGAQ4HO8IJnpWJGTNM3POSsUxZI8c+fOn3yHG43p0327NCGUUpv5dHp3Czmu/tL8IW5HqUKYTgAA63IOALCmRKr+uzoQV3vZ9Om+BYAwnaDUfxAnKWhevb8iHGY8B67HiIu/RCpeFAWSoATwaXFigMsIAur3bHlRGS92uFQcgFdR06QYFHMMfv5icPrWX4oRZz+UFF+vClYMAKy1AIA4jpEEJT9fl3NEUYW6HiBMJ6w4PdeLF4xShSiq0Awezg7E2Q7L87wFAKVUh+qS+taUMI0BAIxShWWpgWBj4VGy5vXAhgHLUkONnz/nF8ga3z6ELH7Ip0l4rTVGyRphOmHr0m81fub/TJMiy7K9MQL4PhAnb3Z9vCgKZFnGzynSu8HPp0hRFLBmxnvV+HlHUQkc7SeQgNOB+PKmY4IbzSX1JTvIv2n9stSIkxyBXXTSowucL13K92mtMZvNvqTT0YunT/etRJyEIz/dBwTRWj5n5beuIX8H1RtW1aijvC8muECdwoiDi6ZP9y292JfHg+ptA8iqZitLJaWfu0rT3AXWHdbaTvwAwFmB9tB+11UOAdH7MH+I2+E67lAV6Pp8YBcAwJGdaOzSfRX9YMFJWaKzaVKmvrSwXrxwhiCGmCaFNbNNsNwqKtPp0oRAM/cysg+InT8fHx9bX0FCFncRdgsYOSfrL00I4DPVkWDSolT5RXWDOgoAYCeruDGg1H+2wKcnZw2euD5OG6WwZA2y0CFqE3AkJAGhlEL1/opVaBEnObIs4/NcxrhgEUs66VRrLrCOKbElEHf7orq0kAx2BJRevGwsS7l8u56EkMAM6w+mqvs+GTM4JQYTDOsPdhPXMH2KBdUb7P8VBj9/7TDGZZzWussAedC+2pyKFgo+QfWGuh7sCEbWj+oG4TDr9VEJXJykzIJh/cEsoeBLe+idy1KzEWRgPJoBcEZf90Y+SPTsO5hcBdjU/QC44fGuX7wgCZIOY9zzRsmaWeAzzFcY0hsD3JHnedunaPX+iirbUk5EferuVtEPjIeGGxyfIERPXwxxIzylRsr11swQJznLSo0Wycs1yhG9w1F1gBRc+mxfZUZNDgUmYJP+rLWfMUUUQAA66YzmVTY5WELve75P8aMBkED4ovy+kpi6vyRIECcprCnRxGNOV6ZJ+fxBMec4ITtK17X6CqhTm6Sz9gIyGHKmEILLvH1MuqJiyO0eZcEk7xuUUl9uir7VDcq87lKTLOq6BuV9X/oqVjUMhgCwUzn6LE4MyrLset2gO/oYsS9qy/Vu1pDpjm6KfOef2v2542w3Qn23vlTrE93dYCepLe8IL30RQuMid4KdpsYTvIDdgov+u5biNG5yK+y7H/AVSNQNAvg21fvGVb8LAP7a3VcwEYsu/YHkJl+GgF0g6L9/7suQOw4B8c9+G3SHC8Stvg7/BUb3XEvOEKzkAAAAAElFTkSuQmCC",
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
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAADt0lEQVR4nO2YIXDjOBiFv8wYBBgIGAQIGBQsCCgoCCgoWGBQUBBQUHDggEHgggOGBgsKFhQEFiwoDFgQsKBggUFBQMGCAgODgAABg4DM+IDzO4rj9nqdJO3O5CHJliW9p/f/ktzinRCFQdHpnmOM4Wl0w+3DtPUe89j7oEIc4OE2Zk7O2M0BUMohHS32Oqe9DRaFQdHWpwA8jW4AGLlTfN/BmLJN9/eC3lVcto+ivcxt54NEYVB0z/5iNpvx6/Yf2rjc6xkAvt/GmDnGrMhnD3cAJKkDwGQy2ekcd9a5WN3zPEbXf1fEjVmgVElOKTbIJ6lDz18AVOUkdXYmhLPtDptiPNFzfB9IwfeFfLn6dQjh816HHln1rOd3i/EkJ03TrQqxtc6iMChUNqcd9BnfDPDczrMrrhTLeps0LUUQFyilePw5BFYO8Dqa2TSrxtqmEFvpZBhfFZOHCfrkkuR7xOOnlbEkzmXFhbSIAKwlQc/tcHQxWBNCsAshthICWTaryq7rYkyOUk6N5MrutgNKUUoRHj85GDMlGH2ljcvRxaDsf5kYbfJeRxMcZ3DcLQCGo8c3CbEVB0RhUMjk9Mklj6OvACR6PcbtrK8UG26wQwLgLPMANoR4Cf9XiK0mFBFCn1wCkHyPgHJlbTfAehIUQWxhRCgoQwNY2ybtcPA6GpXNeXJWTnytEFtPgka3sd2glGJ8M8B13TVHbIbB+q6QpgtOp2U5GJQHp6acUCdex38JsdVt8MuP+9Ywviqknj3ckbEikC+FAEiYL3cIcUFZF9J6+Z3nedzfxWvjCHEDGN3GQwNsOAIgvHg5R+zsIHR9flYY3a7qMrnu5xCgcoUgz8v7gIjVRBzgaOFVLpMw8Dp6rY0thJST1MEYs7Fr7PwoPIyvCnuXsMMDQFnJ4TnSNtEmwtLv0aJMmiKQfZIE6Pf7KKUYxQN+Tkvue7lwXJ+fFW5P0yREHTa5eDhuRWFQAEh+sb+XtrY4dSSpQ7/fL8vLpPyrU747nb7DdVhCo04IViS19iqx6s+aiEu7J2dWCWETl21Zrt2+7zC5XezPAc8hCoMiHo5bw/iqyJNsjWiTQPKuLpBNHNjYhmXFm/43vKsAgigMCq3L+M2TDAmXJsIC2xE2up/DKsG+5kfLhxDAhiRNrT3yJOPLj/uWLZAtSP3cIeRlxY+PXe6/5S9y/HAC1CHniiYn2HU5gcpl7LW/1j68ADbsXNG0K8A73wX2iXpYxMPxH8vlzZAzwgEHHHDAAQcc8Cb8C/PSaRgjUkitAAAAAElFTkSuQmCC",
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
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAAEbklEQVR4nN1ZrXbjPBC9PcfAwCDAwMDAIGBBoEBAwMKCAsMPLCwo7APkIQr3AQoWBvQBCgICBD4QUBBgYCAgYGAQ4HO8IJnpWJGTNM3POSsUxZI8c+fOn3yHG43p0327NCGUUpv5dHp3Czmu/tL8IW5HqUKYTgAA63IOALCmRKr+uzoQV3vZ9Om+BYAwnaDUfxAnKWhevb8iHGY8B67HiIu/RCpeFAWSoATwaXFigMsIAur3bHlRGS92uFQcgFdR06QYFHMMfv5icPrWX4oRZz+UFF+vClYMAKy1AIA4jpEEJT9fl3NEUYW6HiBMJ6w4PdeLF4xShSiq0Awezg7E2Q7L87wFAKVUh+qS+taUMI0BAIxShWWpgWBj4VGy5vXAhgHLUkONnz/nF8ga3z6ELH7Ip0l4rTVGyRphOmHr0m81fub/TJMiy7K9MQL4PhAnb3Z9vCgKZFnGzynSu8HPp0hRFLBmxnvV+HlHUQkc7SeQgNOB+PKmY4IbzSX1JTvIv2n9stSIkxyBXXTSowucL13K92mtMZvNvqTT0YunT/etRJyEIz/dBwTRWj5n5beuIX8H1RtW1aijvC8muECdwoiDi6ZP9y292JfHg+ptA8iqZitLJaWfu0rT3AXWHdbaTvwAwFmB9tB+11UOAdH7MH+I2+E67lAV6Pp8YBcAwJGdaOzSfRX9YMFJWaKzaVKmvrSwXrxwhiCGmCaFNbNNsNwqKtPp0oRAM/cysg+InT8fHx9bX0FCFncRdgsYOSfrL00I4DPVkWDSolT5RXWDOgoAYCeruDGg1H+2wKcnZw2euD5OG6WwZA2y0CFqE3AkJAGhlEL1/opVaBEnObIs4/NcxrhgEUs66VRrLrCOKbElEHf7orq0kAx2BJRevGwsS7l8u56EkMAM6w+mqvs+GTM4JQYTDOsPdhPXMH2KBdUb7P8VBj9/7TDGZZzWussAedC+2pyKFgo+QfWGuh7sCEbWj+oG4TDr9VEJXJykzIJh/cEsoeBLe+idy1KzEWRgPJoBcEZf90Y+SPTsO5hcBdjU/QC44fGuX7wgCZIOY9zzRsmaWeAzzFcY0hsD3JHnedunaPX+iirbUk5EferuVtEPjIeGGxyfIERPXwxxIzylRsr11swQJznLSo0Wycs1yhG9w1F1gBRc+mxfZUZNDgUmYJP+rLWfMUUUQAA66YzmVTY5WELve75P8aMBkED4ovy+kpi6vyRIECcprCnRxGNOV6ZJ+fxBMec4ITtK17X6CqhTm6Sz9gIyGHKmEILLvH1MuqJiyO0eZcEk7xuUUl9uir7VDcq87lKTLOq6BuV9X/oqVjUMhgCwUzn6LE4MyrLset2gO/oYsS9qy/Vu1pDpjm6KfOef2v2542w3Qn23vlTrE93dYCepLe8IL30RQuMid4KdpsYTvIDdgov+u5biNG5yK+y7H/AVSNQNAvg21fvGVb8LAP7a3VcwEYsu/YHkJl+GgF0g6L9/7suQOw4B8c9+G3SHC8Stvg7/BUb3XEvOEKzkAAAAAElFTkSuQmCC",
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
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAAC30lEQVR4nO2XIXDbQBBFn2cEAgQEBAwEBAoCDAoCDAIMAgwMDAMMAgUCCgsECgwKAg0MCwICCwoMAgoCAgIDDAUEDAwOCAho5gpu1j4pdhM3sp2Z6hPppNXd7d+/u6cWR8LnK0crBZ15AcCvOa1j7OPgi/a+uDpJcjzPjD3vhCTJj0bEwRYLh45WqsDzHDwPlKJEglI5SsHp3DybzYuD7G3vi4jUxfkwNM5K5IUEgdj2M5dlmnG/2O8enX1NHA4d7XkmupADDkoVKJWvbGznlYIwNLZh6PKY5BA4DOaFzhV7I6L2SSeTiZ5NrgF4PjX8iqNJUlaBpEH1ar5Z24BJjUIVtRNR22TRsKP9dsBykdK5iADYRITtJKwjL2lhnq1VYtsBdNMTsiyrrVjWMkkc9TXAcpEiJAB0LiJ83+f22yWwJgIMCUlSEIbOKtpQfmbGLzsGmPZZR2rUpgAhwYZNBPxdEdWiaI9FJfb7uoplrfk0HY90mi4ZT2etTap4a2qIIuyrTcYmRfxrjdhbi6kqQtQA2xUhUVbKpIHArg1VpUjKyKkyV+AHLndP2Zt82xsBN4OeBnC7AWm6LL0TMoKzS+I4bg1O0QAPbfC8siqkQArsemHfC3Yl4iCnrTjq6yDwS0TYigjOLvE8b6siqmTYdcNulaIcGXfmBd3R2Owhjjf6etBz982gp1VwUqoRsF0RQkQ1JeBlnTB2xnaYtfk0NGSmT3cATH8+H5+A6Xi0cjp7THG7AQBRfNuKo762idikCLtb2KkhEe+lPmdXsfnmfmrW3OK44Ci/oDYkPYQEeF0RNpQqOF9A/3qC7/v8vjOSf81xwdEJgHXHGE9nLXtcVcTDj69kWQaA67oAnF99Lznut4PVPG/BhyBAIGoANipC2ieA7xs7O+Jx1Ne7OA8fjACBXSDt7mF3DsGuEa9ib7/D70HVIbt4VjvIf4PpeKRtIho0aNCgQYMGDRo0eB/+AI5S5MeyiBHRAAAAAElFTkSuQmCC",
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
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAAEbklEQVR4nN1ZrXbjPBC9PcfAwCDAwMDAIGBBoEBAwMKCAsMPLCwo7APkIQr3AQoWBvQBCgICBD4QUBBgYCAgYGAQ4HO8IJnpWJGTNM3POSsUxZI8c+fOn3yHG43p0327NCGUUpv5dHp3Czmu/tL8IW5HqUKYTgAA63IOALCmRKr+uzoQV3vZ9Om+BYAwnaDUfxAnKWhevb8iHGY8B67HiIu/RCpeFAWSoATwaXFigMsIAur3bHlRGS92uFQcgFdR06QYFHMMfv5icPrWX4oRZz+UFF+vClYMAKy1AIA4jpEEJT9fl3NEUYW6HiBMJ6w4PdeLF4xShSiq0Awezg7E2Q7L87wFAKVUh+qS+taUMI0BAIxShWWpgWBj4VGy5vXAhgHLUkONnz/nF8ga3z6ELH7Ip0l4rTVGyRphOmHr0m81fub/TJMiy7K9MQL4PhAnb3Z9vCgKZFnGzynSu8HPp0hRFLBmxnvV+HlHUQkc7SeQgNOB+PKmY4IbzSX1JTvIv2n9stSIkxyBXXTSowucL13K92mtMZvNvqTT0YunT/etRJyEIz/dBwTRWj5n5beuIX8H1RtW1aijvC8muECdwoiDi6ZP9y292JfHg+ptA8iqZitLJaWfu0rT3AXWHdbaTvwAwFmB9tB+11UOAdH7MH+I2+E67lAV6Pp8YBcAwJGdaOzSfRX9YMFJWaKzaVKmvrSwXrxwhiCGmCaFNbNNsNwqKtPp0oRAM/cysg+InT8fHx9bX0FCFncRdgsYOSfrL00I4DPVkWDSolT5RXWDOgoAYCeruDGg1H+2wKcnZw2euD5OG6WwZA2y0CFqE3AkJAGhlEL1/opVaBEnObIs4/NcxrhgEUs66VRrLrCOKbElEHf7orq0kAx2BJRevGwsS7l8u56EkMAM6w+mqvs+GTM4JQYTDOsPdhPXMH2KBdUb7P8VBj9/7TDGZZzWussAedC+2pyKFgo+QfWGuh7sCEbWj+oG4TDr9VEJXJykzIJh/cEsoeBLe+idy1KzEWRgPJoBcEZf90Y+SPTsO5hcBdjU/QC44fGuX7wgCZIOY9zzRsmaWeAzzFcY0hsD3JHnedunaPX+iirbUk5EferuVtEPjIeGGxyfIERPXwxxIzylRsr11swQJznLSo0Wycs1yhG9w1F1gBRc+mxfZUZNDgUmYJP+rLWfMUUUQAA66YzmVTY5WELve75P8aMBkED4ovy+kpi6vyRIECcprCnRxGNOV6ZJ+fxBMec4ITtK17X6CqhTm6Sz9gIyGHKmEILLvH1MuqJiyO0eZcEk7xuUUl9uir7VDcq87lKTLOq6BuV9X/oqVjUMhgCwUzn6LE4MyrLset2gO/oYsS9qy/Vu1pDpjm6KfOef2v2542w3Qn23vlTrE93dYCepLe8IL30RQuMid4KdpsYTvIDdgov+u5biNG5yK+y7H/AVSNQNAvg21fvGVb8LAP7a3VcwEYsu/YHkJl+GgF0g6L9/7suQOw4B8c9+G3SHC8Stvg7/BUb3XEvOEKzkAAAAAElFTkSuQmCC",
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 82,
                                left: -31,
                                top: -51,
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
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAAEbklEQVR4nN1ZrXbjPBC9PcfAwCDAwMDAIGBBoEBAwMKCAsMPLCwo7APkIQr3AQoWBvQBCgICBD4QUBBgYCAgYGAQ4HO8IJnpWJGTNM3POSsUxZI8c+fOn3yHG43p0327NCGUUpv5dHp3Czmu/tL8IW5HqUKYTgAA63IOALCmRKr+uzoQV3vZ9Om+BYAwnaDUfxAnKWhevb8iHGY8B67HiIu/RCpeFAWSoATwaXFigMsIAur3bHlRGS92uFQcgFdR06QYFHMMfv5icPrWX4oRZz+UFF+vClYMAKy1AIA4jpEEJT9fl3NEUYW6HiBMJ6w4PdeLF4xShSiq0Awezg7E2Q7L87wFAKVUh+qS+taUMI0BAIxShWWpgWBj4VGy5vXAhgHLUkONnz/nF8ga3z6ELH7Ip0l4rTVGyRphOmHr0m81fub/TJMiy7K9MQL4PhAnb3Z9vCgKZFnGzynSu8HPp0hRFLBmxnvV+HlHUQkc7SeQgNOB+PKmY4IbzSX1JTvIv2n9stSIkxyBXXTSowucL13K92mtMZvNvqTT0YunT/etRJyEIz/dBwTRWj5n5beuIX8H1RtW1aijvC8muECdwoiDi6ZP9y292JfHg+ptA8iqZitLJaWfu0rT3AXWHdbaTvwAwFmB9tB+11UOAdH7MH+I2+E67lAV6Pp8YBcAwJGdaOzSfRX9YMFJWaKzaVKmvrSwXrxwhiCGmCaFNbNNsNwqKtPp0oRAM/cysg+InT8fHx9bX0FCFncRdgsYOSfrL00I4DPVkWDSolT5RXWDOgoAYCeruDGg1H+2wKcnZw2euD5OG6WwZA2y0CFqE3AkJAGhlEL1/opVaBEnObIs4/NcxrhgEUs66VRrLrCOKbElEHf7orq0kAx2BJRevGwsS7l8u56EkMAM6w+mqvs+GTM4JQYTDOsPdhPXMH2KBdUb7P8VBj9/7TDGZZzWussAedC+2pyKFgo+QfWGuh7sCEbWj+oG4TDr9VEJXJykzIJh/cEsoeBLe+idy1KzEWRgPJoBcEZf90Y+SPTsO5hcBdjU/QC44fGuX7wgCZIOY9zzRsmaWeAzzFcY0hsD3JHnedunaPX+iirbUk5EferuVtEPjIeGGxyfIERPXwxxIzylRsr11swQJznLSo0Wycs1yhG9w1F1gBRc+mxfZUZNDgUmYJP+rLWfMUUUQAA66YzmVTY5WELve75P8aMBkED4ovy+kpi6vyRIECcprCnRxGNOV6ZJ+fxBMec4ITtK17X6CqhTm6Sz9gIyGHKmEILLvH1MuqJiyO0eZcEk7xuUUl9uir7VDcq87lKTLOq6BuV9X/oqVjUMhgCwUzn6LE4MyrLset2gO/oYsS9qy/Vu1pDpjm6KfOef2v2542w3Qn23vlTrE93dYCepLe8IL30RQuMid4KdpsYTvIDdgov+u5biNG5yK+y7H/AVSNQNAvg21fvGVb8LAP7a3VcwEYsu/YHkJl+GgF0g6L9/7suQOw4B8c9+G3SHC8Stvg7/BUb3XEvOEKzkAAAAAElFTkSuQmCC",
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 82,
                                left: -31,
                                top: -51,
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
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAABTCAYAAAAvKwHrAAAETUlEQVR4nO2YH3gjXRTGf/s9C4GBCxcCAwMXAoGBQCAwEAguBBYWA4XCQmFxsVBYWCgEFwoDCwuFgUBgYWGgUBgIBAIDFwqF73nmg/TeTtM/mz9N88H5SZ80nbnnfc857yQFQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAE4e0Yhqra9xn/7PuAbRiGqpp+Pa6GSY/jdrhXE97t8+abMgxV9Xn0iXkxA+C6KOh2Yn5Npny/mu+l1v+FAc8Jt/aGdDIlabeYXF2Tzu2r13tQA/4mvKkCWmFIaS0tY5jmuZ+EYaiq1zDkIAasI1wHAf1Bn3kx47ooAJgUM3Sjgbu2bsi2vKkBX7utyomCe+GB1nwb/1hbeP3aXfPhTQyod3ya5+ggeLTjpbVopdBae+FX8wXAk8JfKx/2asDfRr0dNmkZg1IBvyZTenHMdVGsJfylfNiEvRiwTqq7jgO+6+sKf25NJuXtYQ1YN9XjbudB8S8JXycfzIdPAIzH48MYMAxVVd7eohsNhknv2eIBWsY8K3zTfFCDIQBxHANwfHz89gYkulHpRoPSLIvQRc7n0Scu0p9+R7cJt5fyYVW4MQalFN1u9wAGJEml7nYZwFqLLnKGSQ+lAgKt/cium+rP5UNdeJqmAHz58gV3/jYGvN9St8e5b631BRdAOpkyTHr8/pM/Eu4M6XZiWsYw/nlJUwUk7dajfJhcXaMGQ1T7YcftjSYKIy/eWstR0qzOJ4uNTNj526BSCqUUURSRZRlZlmGMoTQx6WTK1XxBeXsL4IUptQyz8c9LpnlOO2yigwCtNdll5js+b/dQgyFxHFMUBWmaesOjMEJr7cUDzBcLjpLmRt8edzbAWuu78L5hULqDUmppwp1w2l1vSH/Q59dkSv77z3LPw5CWMQBPCo/j2HdcqY6fNmPg5OSDF18UBeXN5ibstAJHSbMKauMfBMqPZRRFlGXJv4C6+/vSxHwb//D5EK/kQ33U0zSlKApOT08BHnQcoN/vM5vNKIqCH6fHAOgAwmaTTdZgawOOkmY1Xyxo3b2uj6VSy0dep9PxE+J+ZjzOh5d23F1nDIxGH5jNZgCPhMPm4rc2wIkvb+5/Z63F2j9YC1HU99ngcK+NMT4k1+m4u8dzHXfCgY3Fw5YGnE8W746SZsViwfTijN7HE5RSvkhniCs+yzI6nc5SWBQtb2LMkx13167bcVfPNjpgx88Bq5PQ+3ji36t3/+zszIvt9/v+vfoj9Pw8Q2vNaJQAPAi3fQh37BSC9UkAmF6cAUsjrLVEUeSF5HkOLA2Ah+I32XF37i5119n5g5A3AVg1wg5G9yNfw5kCeBPq6/N1NAD2K9yxswFwX9iqEVeXY1RtLeBhNtSNeKuOr7KXGzsj6vlwfaMAODlZGuKfCAcS7tjrAU8ZAdAejIjj+KDCHW920FNmHFK44yD/Fl/9rH4I4YIgCALwH5c+WwePK1cwAAAAAElFTkSuQmCC",
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
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAABbklEQVR4nO3UoW/CQBTH8S9LRUXFiYqKihMTFRMnEAgEArk/AIHYHzCJnERMICcmJxD7AyYRFQhkJQJRgaioOFGBILkJAqSbWJYVxrL3cde7Xt798vJACCGEEOKfav12AQC9Xs8BpGnaArhNcGHoE8YhAJPX9cnqvIgAjDHOWovWGgC9XdT2TxnEVdMXfiXuT9zHb9ZalFJYa8nznNzrkHsdYPf4cl0CMBrEbtAOPv3/E2fvAK21217fE0QRm/lDbU8pVVubYAkcOyBL15SRwQRLXuabRmr3mrjkO/I8b2me3GYFfncMcAjCWgvUgwjjkDfvkaooSBiRZVkrabALzt4Bg3bgFmV4aHmlFJubEfFsyMrXtbN+d0xVFKxno0Od/Qg3K5qr++wB7B/Qj3BlZA4hJN6KqqoIgoAseQZgOR1exJBuXD/CwW7679fGGHfX9V0ynDY65C7W/vFwDKTpCf+n7EMQQgghhBBCiHN4B0jceXuoMOH3AAAAAElFTkSuQmCC",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
            ],
            callbacks:
                "const type{\n    accept_cargo_types cargodict\n    prod_cargo_types cargodict\n}\n\nlocal type{\n    current_production_ratio integer\n    total_cargo_produced_this_cycle integer\n    total_cargo_to_distribute_this_cycle integer\n\n    cargo iterator\n}\n\nindustry:storage type{\n    supplied_cycles_remaining_cargo cargodict\n\n    total_produced_cargo_available integer\n}\n\naccept_cargo_types ctt:GRAI [] 6 =\nprod_cargo_types ctt:FOOD [] 8 =\n\n\n/*\n The following is a replication of what FIRS is doing for a secondary industry.\n See: https://github.com/andythenorth/firs/blob/4.4.0/src/templates/produce_secondary.pynml\n*/\n\ncb:production_cargo_arrival def{\n    cargo accept_cargo_types loop{\n        supplied_cycles_remaining_cargo cargo []\n            28\n            supplied_cycles_remaining_cargo cargo []\n        industry:cargo_incoming_waiting cargo [] 0 >\n        =\n\n        current_production_ratio\n            current_production_ratio\n                accept_cargo_types cargo []\n                0\n            supplied_cycles_remaining_cargo cargo [] 0 >\n            +\n        =\n\n        total_cargo_produced_this_cycle\n            total_cargo_produced_this_cycle\n            industry:cargo_incoming_waiting cargo [] current_production_ratio * 8 /\n            +\n        =\n    }\n\n    /*\n     When low cargo amounts are delivered, it's possible that final output\n     cargo amounts < 1, which means no cargo is distributed. Prevent that by\n     stockpiling produced cargo on each production cycle until there is enough\n     to distribute. The case is triggered by low amounts being moved to the\n     produce cycle as a vehicle gradually unloads, and was noticeable with\n     Road Hog trams.\n    */\n    total_produced_cargo_available total_produced_cargo_available total_cargo_produced_this_cycle + =\n\n    /*\n     Then check min. distributed by dividing over 8, to get the amount divided\n     by max possible output cargos. 8 is the pathological case, this could be\n     made more accurate by checking the lowest output ratio in current economy.\n     For accuracy, this could also store remainders using mod(8) or so, but eh, TMWFTLB?\n    */\n    total_cargo_to_distribute_this_cycle\n        total_produced_cargo_available\n        0\n        total_produced_cargo_available 8 >=\n    =\n    total_produced_cargo_available total_produced_cargo_available total_cargo_to_distribute_this_cycle - =\n\n    cargo accept_cargo_types loop{\n        result:inputs cargo [] industry:cargo_incoming_waiting cargo [] =\n    }\n    cargo prod_cargo_types loop{\n        result:outputs cargo [] total_cargo_to_distribute_this_cycle prod_cargo_types cargo [] * 8 / =\n    }\n}\n\ncb:production_every_256_ticks def{\n    cargo accept_cargo_types loop{\n        supplied_cycles_remaining_cargo cargo [] supplied_cycles_remaining_cargo cargo [] 1 - 0 max =\n    }\n}\n\ncb:production_change_monthly def{\n    result:value 0 =\n}\n\ncb:production_change_random def{\n    result:value 0 =\n}\n",
            type: "secondary",
        },
        {
            id: 4,
            available: true,
            name: "Food Processing Plant",
            colour: 181,
            fundCostMultiplier: 65,
            probabilityMapGen: 5,
            probabilityInGame: 3,
            prospectChance: 0,
            layout: [
                [
                    [0, 0, 1, 3],
                    [0, 0, 1, 3],
                    [2, 2, 3, 3],
                ],
                [
                    [1, 0, 1, 1],
                    [2, 3, 3, 3],
                    [0, 0, 0, 0],
                    [2, 2, -1, -1],
                ],
                [
                    [0, 0, 0],
                    [0, 0, 0],
                    [1, 1, 3],
                    [2, 2, 3],
                ],
            ],
            cargoAcceptance: ["BEAN", "FRUT"],
            cargoProduction: ["FOOD"],
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
                                height: 87,
                                left: -31,
                                top: -56,
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
                                height: 87,
                                left: -31,
                                top: -56,
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
                                height: 87,
                                left: -31,
                                top: -56,
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
                                height: 87,
                                left: -31,
                                top: -56,
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
                "const type{\n    accept_cargo_types cargodict\n    prod_cargo_types cargodict\n}\n\nlocal type{\n    current_production_ratio integer\n    total_cargo_produced_this_cycle integer\n    total_cargo_to_distribute_this_cycle integer\n\n    cargo iterator\n}\n\nindustry:storage type{\n    supplied_cycles_remaining_cargo cargodict\n\n    total_produced_cargo_available integer\n}\n\naccept_cargo_types ctt:BEAN [] 6 =\naccept_cargo_types ctt:FRUT [] 6 =\nprod_cargo_types ctt:FOOD [] 8 =\n\n\n/*\n The following is a replication of what FIRS is doing for a secondary industry.\n See: https://github.com/andythenorth/firs/blob/4.4.0/src/templates/produce_secondary.pynml\n*/\n\ncb:production_cargo_arrival def{\n    cargo accept_cargo_types loop{\n        supplied_cycles_remaining_cargo cargo []\n            28\n            supplied_cycles_remaining_cargo cargo []\n        industry:cargo_incoming_waiting cargo [] 0 >\n        =\n\n        current_production_ratio\n            current_production_ratio\n                accept_cargo_types cargo []\n                0\n            supplied_cycles_remaining_cargo cargo [] 0 >\n            +\n        =\n\n        total_cargo_produced_this_cycle\n            total_cargo_produced_this_cycle\n            industry:cargo_incoming_waiting cargo [] current_production_ratio * 8 /\n            +\n        =\n    }\n\n    /*\n     When low cargo amounts are delivered, it's possible that final output\n     cargo amounts < 1, which means no cargo is distributed. Prevent that by\n     stockpiling produced cargo on each production cycle until there is enough\n     to distribute. The case is triggered by low amounts being moved to the\n     produce cycle as a vehicle gradually unloads, and was noticeable with\n     Road Hog trams.\n    */\n    total_produced_cargo_available total_produced_cargo_available total_cargo_produced_this_cycle + =\n\n    /*\n     Then check min. distributed by dividing over 8, to get the amount divided\n     by max possible output cargos. 8 is the pathological case, this could be\n     made more accurate by checking the lowest output ratio in current economy.\n     For accuracy, this could also store remainders using mod(8) or so, but eh, TMWFTLB?\n    */\n    total_cargo_to_distribute_this_cycle\n        total_produced_cargo_available\n        0\n        total_produced_cargo_available 8 >=\n    =\n    total_produced_cargo_available total_produced_cargo_available total_cargo_to_distribute_this_cycle - =\n\n    cargo accept_cargo_types loop{\n        result:inputs cargo [] industry:cargo_incoming_waiting cargo [] =\n    }\n    cargo prod_cargo_types loop{\n        result:outputs cargo [] total_cargo_to_distribute_this_cycle prod_cargo_types cargo [] * 8 / =\n    }\n}\n\ncb:production_every_256_ticks def{\n    cargo accept_cargo_types loop{\n        supplied_cycles_remaining_cargo cargo [] supplied_cycles_remaining_cargo cargo [] 1 - 0 max =\n    }\n}\n\ncb:production_change_monthly def{\n    result:value 0 =\n}\n\ncb:production_change_random def{\n    result:value 0 =\n}\n",
            type: "secondary",
        },
        {
            id: 5,
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
            id: 6,
            available: true,
            name: "General Store",
            colour: 168,
            fundCostMultiplier: 15,
            probabilityMapGen: 24,
            probabilityInGame: 12,
            prospectChance: 75,
            layout: [[[0]]],
            cargoAcceptance: ["FOOD", "GOOD", "BEER"],
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
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAxCAYAAABqF6+6AAAHmUlEQVR4nO1aLXfbSBS93WNgIDBggIDAAAGDBQICBQEBAgUBAgYFCwr0AxYYLCg0WGCwIDCgICAgwKCgIMAgoKDAIMBAQEDAYMAAAQOdowXSG4++YseK24Lcc3wsj6Sx7n0f82ZGwBve8NtjPp8X8/m8OEfff5yj09fG/f392foena3nF8DzvIIx1nt+vV4DAC4vL7UXKKUQBAEWi8W7If/9SwXwPK8ASjJKKTwnAl0HAIwxCCHAGMNsNiuGiPBLBDCJA2gRN3/TNdTOGIPrurVzQ0T4qQI0iUdRBGAf4+QFJmkTvu+32uieKIqKm5ubF4swKH6ORZM4gTGG6XTaSnKmB5gWN9uSJOkU66UinHUU8Dyv8DyvoBgnEMEkSVr30DnGGIIgaJE3++oSNIqiFw2XZxGgjzhQJ2i2mR/f9+G6bu3evmOzLzMcjn3WVxXgEPHnsjwR932/18qHiNOxlBJhGB4lwqsI8BLiXR5AFgfqZAjNPoUQrWuVUojjGFJKcM7BOT/KEwYlwb7kBrSHtmZbczhrJrSuBGe2mcdSSgAA57x2PbUvl8tenicJcKx7daErqRGIlGlVs7153EU8juPO0OgT4WQPCJ1RkeX5i+8TV1Evoee84Dni5PbU3iUiAKxWqxbfk3NAluewRiP9IZhtXZ/k603vAzYrQ6VULd6llJosIY5jLUJTLPpNybULJ3tANOFFoqQmTTC9QjAOmSlkeQ7BKmvR78oTTHJkRfObyAH9Md4nKJFe3y7wsO3mOjgEpDNFlikI9dApBLVxiyFRsi5KjwgmuSbxvhjvIn5/u4ALYMIdXD+lnVxPngtwiyFTEswqHyBBgEusITNVI649IlM1MZApJF9vaiKY5JVSOmGaXmEmymbOaBL/N7jaC/mUdvIYPBkyh7YkLS1shkaXEKZ3mCJQPDddHdiLcgxx5kwx2X3XfZne1MRgAUw3JPcGAOlMkRih0RTCGo1ankDlb19WP5Z46ggg/n7U8w+qBAXjYPEXJGkCVRHnVUgwi8GyGBIW1NpJjCzPa55ijg5E/lBWv79dYH27KIlzB8IR1XlPP2Nz1GjiZA+QBmGerQBAJzl6aAJHeUyjgTTyQV84mPFOOGRx3/ewje9gO2Ns6b8PhMCgOsBhNmSmtBhEHjDctsr+JrjFasTJIwBoTzBng8da3HbGAIBtugMAXTc8h5MFEIxjI9NeIdztUocGCUPf5ClZnreEMEVoEv83uEIUXB0kHgQuPj/8eNb1BwtASFiAb/mkJcR4NIafreBnK+0BXZ4inSmerMuaEIJxyG9foJSqWRworXqI+N/LDOF/TwetDwzIAUTKsQVUppAggMjXyPIcE+4gVWUUcotpwpQIa7nCqCM+jDYAgFRt8fHyA7DbAsEV7jKhszrnHOMqxk3iIvqB8L8nAE/453IMm42QpO2iarAAs9msAMrykiAcUcbrdq1DA0BLCJmpmiBAPVlu0hQT7mihKINTcqM2dYD4bTQFAFx43kE+RwtAxIGyHKWCR2X7MRrbvZsnLECSAyJPYY1Gur0Js44gwbjFasNXM6v7B4h/2V3h0/irFmywALPZrDCnokopkA2zrHtToxYaVTGk3AuAMWTflxCMl56wXeJHdrm/j9mlCEYCI1cn/L3MOonfjT8BAMZjALu9YINCIAzDIo5jPTRxzstqrRrLP4w2eMxK8hll9yo/UGgIcMT2n1ok630I8DLROcyGX9URGyU7Q4A9XoM5+yT4z19ti48Zx5gxWLYNudno5x9UCEVRVDQXIkiImC6KHyGwhMNs7Mw6oBEa7vYJyUbCeh+WVvn2BVmedyZLXWRVD05WJEs+zD4CqFucTybItls0Qff27R49KwBtMjS3pulBmkIQEaA/NFarFQBgapezSXOSRPdTH+Z/ERkAQJribvypZnHm2Mi2WzBn7wF07yZNsXMU5vN5oZSqbagelQM+f/78bjabtXZw+4ToCw0TNIzSXEGoh5oQJvEb6eBi9x0Xhiv3WVyl+7ZNmiJ1fcC1wSsezeuPHgUWi8U7CgkhhN6yNh+2KzS4xQDWH4NmsqQ6AKhPicVY9M7uTIs3kbq+7qdvy+xFdQB1QkL0LX1zzntDg2CuG+g6Qm6Qqi0cZgPorgP0/1QuTxanbzu9wcRh2PEP4M8QJ5xUClOn5jydZmr0Tev+yr2Aci9adQCRp2k0YwwbmephENgnMCp5TZiuDpTEfeuxZpRjNkpPLoUpkYRhWHDOwRiD53laFFrN9TwP6/Vae4SH8o2PCXfKyZSRLKneJw8AShHiRh1ggizO+X6/4SU7xK+2PR6GYeH7PpIkged5SJKk5iGMsVKIatmLVaHhMBuP4/dgFsNoc6NFmDiO9oCH8QWc+A6TqhbYpCmeuNtaS/wt3g+4vr4uaO8e2K/WCiG0IH1CEPRkqII5nJmJDTiNtImzvCBBpTOFAQD9QoMQAkmS6JGkTwiyNtAmPpS0ibO+ITKfzwt6CaJJHti/7EBeEsexFiL40z8rccJPeUUmiqJCSqmXuai8NsPCFIJAw+A5iBN+igAEc1eZhsvmyq859xj6DuBvCZpXNL+b57vOveENb3h1/A8nqbWQ+XURvgAAAABJRU5ErkJggg==",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
            ],
            callbacks:
                "const type{\n    accept_cargo_types cargodict\n}\n\nlocal type{\n    cargo iterator\n}\n\naccept_cargo_types ctt:FOOD [] 1 =\naccept_cargo_types ctt:GOOD [] 1 =\naccept_cargo_types ctt:BEER [] 1 =\n\n\n/*\n The following is a replication of what FIRS is doing for a tertiary industry.\n See: https://github.com/andythenorth/firs/blob/4.4.0/src/templates/produce_tertiary.pynml\n*/\n\n/* On arrival of supplies, clear the stockpile. */\ncb:production_cargo_arrival def{\n    cargo accept_cargo_types loop{\n        result:inputs cargo [] industry:cargo_incoming_waiting cargo [] =\n    }\n}\n\n/* On 256 ticks, do nothing. */\ncb:production_every_256_ticks def{\n}\n\ncb:production_initial def{\n    /* Initial production level. Can be changed with cheats. */\n    result:value 16 =\n}\n\ncb:production_change_monthly def{\n    result:value 0 =\n}\n\ncb:production_change_random def{\n    result:value 0 =\n}\n",
            type: "tertiary",
        },
        {
            id: 7,
            available: true,
            name: "Nitrate Mine",
            colour: 121,
            fundCostMultiplier: 180,
            probabilityMapGen: 7,
            probabilityInGame: 4,
            prospectChance: 75,
            layout: [
                [
                    [0, 4, 3, 2, 1],
                    [5, 4, 3, 2, 1],
                    [7, 8, 8, 8, 6],
                ],
                [
                    [4, 0, 6],
                    [3, 2, 1],
                    [3, 2, 1],
                    [5, 8, 7],
                ],
            ],
            cargoAcceptance: ["ENSP"],
            cargoProduction: ["FMSP", "NITR"],
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
                                height: 110,
                                left: -31,
                                top: -70,
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
                                height: 64,
                                left: -31,
                                top: -32,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAFgklEQVR4nO2ZLXDjRhiGn+sYCCxYICAgICBgECAgEBBwQKDgQEGAQUBBQUDgwYCCgIKAggMGAQUBBgEBBw4YGBwIEDAIMDAQEBAQEFggoJkU2KuTHPnfvqRTvTOe1a+t9/l+dm1Dq1atWrVq1apVq1atWrVq1apVq1atWrVq9b/Rh7d+gF1197t8AbiPPABc1yUIAnq93lae/nMAPM97ufIiPj/O9q8vPOyzSwaDAQC+73N9fb2xr3cJwHGcF9Pu1o6JTg6AKgxOsiFnviATHlKN+Zp9xPd9hsMhUsqtILwrAFXjVcOik5NlGTCLcBAEfLu5wLE6dD5eE4ZheS4MQ8ZPj0TJZt7eBYCq8UIljddo44PBgCzLCIKg0bjp/srH0xNub2/fP4BlEa/u6+ZWrfFVxqfTKVmW4fv+RhDeBMC2Edf7mxrfBsJPBbCqxvW217UbU726vc549Z51EH4KgKaIX3kRAF/GDrBbxKMoIgiCvSAcFcCicSklqjC4dJ+WzuOu6zKdTlcab0r1VRD0+zZBOAqAplTX0xiAVzy/mse18aqJdRFvKo91cBYhHBRAU6p3hFW7Rte4nseVd7XWePVcFEWcn59vbXwZhIMAWDWdaRBBEOD7Pv1+HyllLdX19qbNbR8IOos0hL0ArJvOtFGgrEWdwtsYX9Xc1h1f3A7DkGgyKleKOwFoiviiVGE0QsmSMecXn7eK+Kb1Xs2QxdlBG0/okSeD/UrAsXjZ5T6A84vPPNzf7jSdbdP09HtWjQMI2yUNb/bvAYbV2wmCxaDMgE2a2+LxTRtdk3EAs9tlcn+xPwDhXu4EoFDZUSE0Gf/NE6RpSqgsbN/j6a+g9P3LrgBM1QdAOm5tNKS5chS2S0KPh/tbXNdFSkkYhvi+j+M4PDw84Ps+UkqGwyGu6+I4DsPhsDwehmHtXt1oH+5veZpYJPQQtouwXcxuF8exMc3Z52dxvS/tDADgJO9jTz4DkM8XOoaUa8eOkCUE0zRLs00QqmY1kHXGLz55nNk5hpRI26I/Svie23jxDW54dTgAAKaQnOR93OSmBiLPMgqVldcJy6qP80wYfr2rRbwKYdHsrhHXxoUoEKKoPf/OPcCxeLE6YLh/kKkMWw1J54afjUvM4hsAyrxAxVPME58smmKfnhE/fUc6Llk0LXtC8OkP0jQ9SI3H4RhhWWW0TTOn0/2TNE0x4j6DUO3fA7SklEghS7I6I6SUOI6DSO+xjKcyI1Qyq8GmTDh0xJ/E7GUaTu2aqvYGUEzuyKd3jWC0iVUgFnvCIWpciIKp/+VH33Ednh8vkdE/hwMgLY/c9Mq0V6oD8KrGloHQWswE3RizLNupxk3z9co0n0YATOKESeHWznV2BTAejz/A7Hd6gDQd10Bo84sgsixDSsnzvFlWMyHPJImalcOsxruvanwW8THCsvHiK4hn0A2jIM87mIZDnMe1Z03ziEnRRVqS8WhU63s7A1gHoqomEPm3G56Ny3LW0BK2SxL36AiJIc15xOcn1Wzw4pulxg3XgfAHALv4StQ5ZTweNTb8vQFoLYIwqP8IAnUQppCcqD4k1EDoTDCkWdb4348jzG53ZcS18Wn4HaU6WPGsL43mz7VMBwOgVQWhv/Y2gdDrsWUgYLaWyOKEU/UFwplxW9rEWfzKePw8QimD2HCQlmQ0ao74og4OQGsdCCEKUvVjXAQB1IzriGvDi8YnhdtY4+t0NABay0DoZlmO1jn5fEF1ovqYSjZGXHf0fY1rHR2A1iKIvLJMhkp/UM3364ineXQQ41pv9tdY2Szns4YpJKnKcCxBlChMUc8AwyhI03mNy81rfJ3e/M/RZSA0gGMZ13pzAFpNIICjGdd6NwC0NAjgqMZbtWrVqhXwLyPjmZpdnLFLAAAAAElFTkSuQmCC",
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
                                height: 64,
                                left: -31,
                                top: -31,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAADfUlEQVR4nO2ar3ajQBjFb/YgIhAjKhARIyIRIyorIhArVlT0AXiAPkIEog9QsTIiD7AiYkVFRERExQoEMgKBQCIQCM6ZFZzJkpTADKX82TM/2w6Z7879LvOlBTQajUaj0Wg0Go1Go9FoNJpJ4Tlz7jlz3nb9ty43MwRhnGN7stBWhEkL4NoGP6QLAMAvWK2eMVkBXNvgvmGDEALGWOvnTFKAjUv4w70JAKCU4pT6WJps2E31iWsbnFLKNy7htkP54+Njbf/XBeXkHCCsDwCvEcETYux2u1ndmrqgnJQAZeuLvvf2WW3xTUE5KQGOf1K8HAieWSjV9zJBORkBVK0vG5S19hkL5eJFMcE+lLL+epXgNSJYmqxSsNE7oM0rT8Utoxegqu/T993N31cNylELUHWSdcUD6kE52gyo63vHAt/HH/cu1iRJAnMJPCFufE2O0gGubfCHexPPLGzV97J3BAAwPr3bjhHpfTgUhfwgB0RphmND3wOA718GZYCw8fNG6QBCCADglPqIogy++f38M8fCh+usalCWGVUGiJP86dMPfe/aBgeAbZDPyhlQ1ffHIAMAVOXENaNyQFOCb4N85toGX9wVnXur72UKF4xGANnLyzbIzyevGpRVjCIEr0/ylPqNCa4alLcY3AGyV11qFWclZnrVoLzF4CEoO7SIwheLOQC1oKxjUAeojrjePpupBmUTgwlQleDi9SWzRiYoZRhEgKq+t4Kwdk0Y51C56orMaGIQAapsXNevbYNSht4FKNv4d7K6GHFv9W2VYLeywnPmXGYIEvQqQNX7Poxz7GPMPGfOq2zbJihH7QDg0sbUMm6eWpugBOTGYEGvAohirm1cteE2QdmG3gTYuIQ/sxD5XQIAtcUD6kFZ96w6vvwmWB5XAWC9ShBFWe1my2sYY2DpG45Bhn2MmWsbXOU938SXDUPl2R4AzCWwNBmi6E2qeOBfUJJSUAIAgryzfXYugCjg5ZAAANarEECR4On7Dp7krH4ZlDE8y+CqCS9DZxmwcQnfuOR8eo7jwFwWhUdR1viXHIFKUHZBpw+llPL1KgFQXHLS953U11IC0TavEQGAStFULzqDIGwqO5e7tsEZY5xSev7Hh66tfotBlbwOyvwuwdIsUr+vUx5EgKpXI1BY3wpCpbb5LL3eBLsKyi7p/QM/G5T/DapBqdF8DX8B2mWnvBSX2iUAAAAASUVORK5CYII=",
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
                                height: 64,
                                left: -31,
                                top: -31,
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
                                height: 64,
                                left: -31,
                                top: -31,
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
                                height: 64,
                                left: -31,
                                top: -31,
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
                                height: 64,
                                left: -31,
                                top: -31,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAADjElEQVR4nO2ZrXPbSBiHH90IGBgsEBAwWGBgYCBQEFBgIHCgIKCgoKAgsCDAoKAg8P6IAwWFAgEBBQICBgYFAgIGBgIGAgILDAw8owPKOkrsuo5dfczNPiROoszuPvq9rzYrMBgMBoPBYDAYDAaDwWAwGP4oUspCSlm0PY9f8VfdAyilgFJE3WOdQ+0CNEKITkqoXYAQAqUUSqlOSrCbGkiXghCiqSG7gb7jQohCCFEAeJ7XmRTUXgJSyt1npZTVtRJorAl6nocQolBKEcex5Xle0YUkNCZAo1Oge0LbNCpAKWXpFKRpaimlWu8HjScA9ntBmxJaKYGXKYD2JLSSAHiegjiOLWhHQmslUE2BlLLQEpqmtQTA8xT47z62sklqtQSqKVgmM5zBGGhWQqsJgOcpaENC6yVQTQFA+PDdalJC6wmAJxFQ9gItQW+Z257fRUwmk6L69RDV/xSllIVuiE00xk4kAPZ7QXXxh5LwaWwXd37vYjHNCUjmvB+IgxP+VS8AcAbjgwmI1gOi7dXF06pfwOPCnV6PYKWObnaqKZBSFlUJOgXT6bT491vwx0qiVgF64QD50Dt67aEUwFMS/HcfC9/3CcOQRTLfnTPe/5hdJKP27edkMilI5jC+Ioqio+M9CtilIE1TazqdFsIdEkUzALyRSxiG+L6PcIcAjMflY/P677evXk9jh6KnUE3Bzc0NQRAUwh2isiXeyEWL+Hz7FQDHdQGYhfdnj9kpARqllBUEZZ1H0Yx8lQDw+faKD++v9xauk3AOtTfBcb4k3vaYbLKTrq+mQCnFMimj7/s+i2SO47pMb++YhfcEQUAQBABkWX7WO4daBVwP7GKlMib9NSuVc3c1evUE9YFJvMhY5Vtm4T3jkYdwhwghEEKQZTnJz3B37WuoTcD1wC4jvO7j9AUA+Xp9kgSlnj8u0zTdfa7GXb9kWXz/ShzHZ82zNgFqYxOt+wghCDd9enb5OExWp5XCMRzHIcty7EXEyF6ypJT2Utwp1FoCQgjSNLXSNLWSLD/576RNIdYKsVa7n/2cPQBlracPX8ijf1jm8GNpQw5v4az9QGPHUBOn3LdH+ebomNJ9WojaiL3fv+mp8o5vyvpnk+LaMF+dt5ZWzuF+h7SfJKRbLP39YAsr/aptlTLYwuzCNXRSQBXpUrg2ZNvHu95TF93xl3ReAOwnos25GAwGg8FgMBj+L/wHSTLmlJzM2jkAAAAASUVORK5CYII=",
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
                                height: 64,
                                left: -31,
                                top: -31,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAADuklEQVR4nO2YIXfrNhiGn+4EGBgICAQYCAQUDAgUDBRcYDhQEDgwYFh4f8DAYH7ABQEDFwwYFhoEFBQYCFwQEGBgYCAgYGDQczLg2EuapkmbO2fb0UNsyyc63/vq+z5ZAY/H4/F4PB6Px+PxeDwej8fj8Xg8Ho/H4/F4PP93ri4dwEdJkmRtrcUYQ1EUH9bxnzNgW7jWmqIocM592ITR9w7wn6ITnmUZcRwjhMAYQxzHWGsB1h8x4YfvH+r7uItGayHE+tD7JEnWd3d36yzLkFIihCDLMm5ubtBa041rrVFKHZznEBc3IBJjvvx8uzd+SPh0Ot0Tfo4JFzegeW4wq1X/fGzF5/M5cRz3ws/NhIsbYGsH7AqfTCZvrvhsNutNmM/nr5rwVlltc/FdILmWaykkf1YNcRyT5znOOabTKavVCmMMSZKQ5/lO03s5rrUGYLFYAHA7hoelO6rvYgZ0XZ38ARkK8iDCObcj8BQTuvtt4QBSNvzx2Pz7DNBar5VSffDdir8m6hQTXgofXScUZUEsvjHLlkf1DdoDtNbroih2mluSJAcbWhzHpGnKZDLp672r8TRNWSwW3I5b8aPrhDKM27lDQTBRJ8U0mAGdeKUUaZr2Yt9qaEBvgpQSYE+4lA1h+NwLVypCCHFyXIMYsC0eOGrC9v6++T1pmuKc64XrTz/xFN4T/fhpM2cr/OnrPc/LOeW3xUmxDdIDhBBrpRSBNYxvPlPlMxrZfsdPp9NXu/pbza1pRjyK3wD4dZKxyh+p61H/XgaKZVmdtAsMkgGdeBkKpJQ04ylKxX0mdCt+Uo0HCoBw3DrSrAqgFX4dtWO2Kfrvi2MMYkBgDWocAptU3RgRWLNnwnubm22K9moDlmXFsmiwNuCpPC27BzsNRiJiWVfkuUGItllVocBag1KtcNhP9VBKnHMoFWGtpVk97sxrbdBea0cjNWZprsCdHNcgBshQ/H0vJbnJ+2c1Dikqw+1YbN63wmWgKJuyF/709R4AK5udsHeEl+bdsQ22DZauBHZLANrMgK3tbFPjXap3Xb2rcWsD6npEXVU0zvFUcmWM+XAzH/ww9PDll74EOmQo9oS/bG5djdvaUQaKMvt8ZfPfz97FBimBMlBEdQFsUj6f8ZDvlkYwUZCXvfC2uY2wNsBSnZ3qhxjEAGPMFVqvAaK6QIaCMHymqByle94JY1s4nF/jx7jIYQjarRHaLLC141oFNM2o/6DphZ9R36dwsePwa0bAcMI7Lv6HyLYRQwr3eDwej8fDXwechNEMa1RwAAAAAElFTkSuQmCC",
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
                                height: 64,
                                left: -31,
                                top: -31,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACXElEQVR4nO2XIXLjMBSGv50JKAgoEBQQNPABCgoC9giBPcCCPUJhD7CwByjMAQoWBBQELjAwFDAIEAgwCOhMCpwny06202ls707nfSS2J5b1/+/XswyKoiiKoiiKoiiKoiiKoiiKoiiKoiiKoiiKoijK1+Xbv3jodrs9zOsN9fwGY0r2fhePZ7PFpHOaTfGQx4e7A4CzFgBjSjDXXNGIB5jXG8qi4vV1fSjXBfn3n5MYMcpD+oIFay0mXwIQihXZIieEDGgMALhy1wCU6wKTL/nz/AsAX1UA/Lh/GnTOgw7WF26Pv9kip1wXnd8QshMT5BwaA5yz1PMbgI4RQ5owyEDnhMvkRZRU1Jgy3hdC1ukB0CRBUrD3O7xvKi/jDZ2Ii25+r+JphaGNtFzb+10n7ueuAZ0lI8fGlPx+eo7zuCQVnzbg8eHu4KyNooEoFrqivK+iKZIAOU5TAHRSk44FXTNSqqr6tAmDvwVESCoAiIkwx+UABeb4nxAygl/hnGVebwi0op1rDT4n/FIGMcA5i/dVbFwSYyCpfnMeQobJ2yQYU0ax3lc4Z6No76vYA+BUsE/OJ18CcLoMxIh0PYu4/rW0T0hzTPuG3Aet8DFehRcPlDZC23vvyzKQZQF0Orx0/jTaYqIg6xuG3wPAgPuA94yQ5pW+4oR+s0y5pLl9lMGaoExSjAC4vW0qXNPu9NLKG1Ni8iXletUfbpAG9xEm2QrLFrjfxYW06TlneXlpzBq7+jDy12CaBkFMkXQAMfpp1cdc9ymTfw7/7UNJmEr4f8W5pCiKoiiKoigj8wb8zopbcNvt3gAAAABJRU5ErkJggg==",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
            ],
            callbacks:
                "const type{\n    level_requirements dict\n    random_prod_factor dict\n    supply_requirement integer\n\n    accept_cargo_types cargodict\n    prod_cargo_types cargodict\n}\n\nlocal type{\n    total_delivered integer\n    current_production_level integer\n    random_range integer\n\n    i iterator\n    level iterator\n    cargo iterator\n}\n\nindustry:storage type{\n    supplied_cycles_remaining_cargo cargodict\n\n    base_prod_factor integer\n\n    num_supplies_delivered 27 list\n}\n\nlevel_requirements 0 [] 100 =\nlevel_requirements 16 [] 150 =\nlevel_requirements 16 5 * [] 300 =\n\nrandom_prod_factor 0 [] 8 =\nrandom_prod_factor 1 [] 12 =\nrandom_prod_factor 5 [] 16 =\nrandom_prod_factor 7 [] 20 =\nrandom_prod_factor 10 [] 24 =\nrandom_prod_factor 11 [] 28 =\nrandom_prod_factor 12 [] 32 =\nrandom_prod_factor 13 [] 36 =\n\nsupply_requirement 8 =\n\naccept_cargo_types ctt:ENSP [] 1 =\nprod_cargo_types ctt:FMSP [] 12 =\nprod_cargo_types ctt:NITR [] 17 =\n\n\n/*\n The following is a replication of what FIRS is doing for a primary industry.\n See: https://github.com/andythenorth/firs/blob/4.4.0/src/templates/produce_primary.pynml\n*/\n\n/* Get the total amount of supplies delivered in last 27 production cycles. */\nfunc:produce_total_supplies_delivered def{\n    i 0 26 [..] loop{\n        total_delivered total_delivered num_supplies_delivered i [] + =\n    }\n}\n\n/* Calculate current production level, based on delivered supplies. */\nfunc:produce_calculate_current_production_level def{\n    func:produce_total_supplies_delivered ()\n\n    level level_requirements loop{\n        current_production_level\n            level_requirements level []\n            current_production_level\n            total_delivered supply_requirement / level >=\n        =\n    }\n}\n\n/* Set the number of supplied cycles remaining per cargo - used to display 'supplied' (or not) in the industry window. */\nfunc:update_supplied_cycles_remaining_per_cargo def{\n    cargo accept_cargo_types loop{\n        supplied_cycles_remaining_cargo cargo [] supplied_cycles_remaining_cargo cargo [] 1 - 0 max =\n    }\n}\n\n/* Shift the array of supplies_delivered values one place to the left, and zero the last entry. */\nfunc:produce_256_ticks_shift_supplies_delivered def{\n    i 0 25 [..] loop{\n        num_supplies_delivered i [] num_supplies_delivered i 1 + [] =\n    }\n    num_supplies_delivered 26 [] 0 =\n}\n\n/* On arrival of supplies, push the amount to perm storage, then clear from stockpile. */\ncb:production_cargo_arrival def{\n    cargo accept_cargo_types loop{\n        num_supplies_delivered 26 [] num_supplies_delivered 26 [] industry:cargo_incoming_waiting cargo [] + =\n\n        supplied_cycles_remaining_cargo cargo []\n            28\n            supplied_cycles_remaining_cargo cargo []\n        industry:cargo_incoming_waiting cargo [] 0 >\n        =\n    }\n\n    /*\n     Update the production level immediately, so that production level text immediately updates in industry window.\n     Production won't actually increase until next 256 tick production cycle.\n    */\n    func:produce_calculate_current_production_level ()\n\n    cargo accept_cargo_types loop{\n        result:inputs cargo [] industry:cargo_incoming_waiting cargo [] =\n    }\n}\n\n/* On 256 ticks, if supplied, produce extra output cargo at appropriate multiplier. */\ncb:production_every_256_ticks def{\n    func:produce_calculate_current_production_level ()\n    func:update_supplied_cycles_remaining_per_cargo ()\n    func:produce_256_ticks_shift_supplies_delivered ()\n\n    cargo prod_cargo_types loop{\n        result:outputs cargo [] prod_cargo_types cargo [] industry:production_level base_prod_factor current_production_level * * * 16 16 100 * * / =\n    }\n}\n\ncb:production_initial def{\n    /* Highest value in random_prod_factor is 13. */\n    random_range industry:random_bits 14 % =\n\n    level random_prod_factor loop{\n        base_prod_factor\n            random_prod_factor level []\n            base_prod_factor\n            random_range level >=\n        =\n    }\n\n    /* Initial production level. Can be changed with cheats. */\n    result:value 16 =\n}\n\ncb:production_change_monthly def{\n    result:value 0 =\n}\n\ncb:production_change_random def{\n    result:value 0 =\n}\n",
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
            cargoAcceptance: ["COPR", "JAVA", "WOOL", "BEER", "RFPR", "FOOD"],
            cargoProduction: ["ENSP", "GOOD", "FMSP"],
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
                "const type{\n    level_requirements dict\n    random_prod_factor dict\n    supply_requirement integer\n\n    accept_cargo_types cargodict\n    prod_cargo_types cargodict\n}\n\nlocal type{\n    total_delivered integer\n    current_production_level integer\n    random_range integer\n\n    i iterator\n    level iterator\n    cargo iterator\n}\n\nindustry:storage type{\n    supplied_cycles_remaining_cargo cargodict\n\n    base_prod_factor integer\n\n    num_supplies_delivered 27 list\n}\n\nlevel_requirements 0 [] 100 =\nlevel_requirements 16 [] 150 =\nlevel_requirements 16 5 * [] 300 =\n\nrandom_prod_factor 0 [] 8 =\nrandom_prod_factor 1 [] 12 =\nrandom_prod_factor 5 [] 16 =\nrandom_prod_factor 7 [] 20 =\nrandom_prod_factor 10 [] 24 =\nrandom_prod_factor 11 [] 28 =\nrandom_prod_factor 12 [] 32 =\nrandom_prod_factor 13 [] 36 =\n\nsupply_requirement 8 =\n\naccept_cargo_types ctt:COPR [] 1 =\naccept_cargo_types ctt:JAVA [] 1 =\naccept_cargo_types ctt:WOOL [] 1 =\naccept_cargo_types ctt:BEER [] 1 =\naccept_cargo_types ctt:RFPR [] 1 =\naccept_cargo_types ctt:FOOD [] 1 =\nprod_cargo_types ctt:ENSP [] 9 =\nprod_cargo_types ctt:GOOD [] 17 =\nprod_cargo_types ctt:FMSP [] 12 =\n\n\n/*\n The following is a replication of what FIRS is doing for a primary industry.\n See: https://github.com/andythenorth/firs/blob/4.4.0/src/templates/produce_primary.pynml\n*/\n\n/* Get the total amount of supplies delivered in last 27 production cycles. */\nfunc:produce_total_supplies_delivered def{\n    i 0 26 [..] loop{\n        total_delivered total_delivered num_supplies_delivered i [] + =\n    }\n}\n\n/* Calculate current production level, based on delivered supplies. */\nfunc:produce_calculate_current_production_level def{\n    func:produce_total_supplies_delivered ()\n\n    level level_requirements loop{\n        current_production_level\n            level_requirements level []\n            current_production_level\n            total_delivered supply_requirement / level >=\n        =\n    }\n}\n\n/* Set the number of supplied cycles remaining per cargo - used to display 'supplied' (or not) in the industry window. */\nfunc:update_supplied_cycles_remaining_per_cargo def{\n    cargo accept_cargo_types loop{\n        supplied_cycles_remaining_cargo cargo [] supplied_cycles_remaining_cargo cargo [] 1 - 0 max =\n    }\n}\n\n/* Shift the array of supplies_delivered values one place to the left, and zero the last entry. */\nfunc:produce_256_ticks_shift_supplies_delivered def{\n    i 0 25 [..] loop{\n        num_supplies_delivered i [] num_supplies_delivered i 1 + [] =\n    }\n    num_supplies_delivered 26 [] 0 =\n}\n\n/* On arrival of supplies, push the amount to perm storage, then clear from stockpile. */\ncb:production_cargo_arrival def{\n    cargo accept_cargo_types loop{\n        num_supplies_delivered 26 [] num_supplies_delivered 26 [] industry:cargo_incoming_waiting cargo [] + =\n\n        supplied_cycles_remaining_cargo cargo []\n            28\n            supplied_cycles_remaining_cargo cargo []\n        industry:cargo_incoming_waiting cargo [] 0 >\n        =\n    }\n\n    /*\n     Update the production level immediately, so that production level text immediately updates in industry window.\n     Production won't actually increase until next 256 tick production cycle.\n    */\n    func:produce_calculate_current_production_level ()\n\n    cargo accept_cargo_types loop{\n        result:inputs cargo [] industry:cargo_incoming_waiting cargo [] =\n    }\n}\n\n/* On 256 ticks, if supplied, produce extra output cargo at appropriate multiplier. */\ncb:production_every_256_ticks def{\n    func:produce_calculate_current_production_level ()\n    func:update_supplied_cycles_remaining_per_cargo ()\n    func:produce_256_ticks_shift_supplies_delivered ()\n\n    cargo prod_cargo_types loop{\n        result:outputs cargo [] prod_cargo_types cargo [] industry:production_level base_prod_factor current_production_level * * * 16 16 100 * * / =\n    }\n}\n\ncb:production_initial def{\n    /* Highest value in random_prod_factor is 13. */\n    random_range industry:random_bits 14 % =\n\n    level random_prod_factor loop{\n        base_prod_factor\n            random_prod_factor level []\n            base_prod_factor\n            random_range level >=\n        =\n    }\n\n    /* Initial production level. Can be changed with cheats. */\n    result:value 16 =\n}\n\ncb:production_change_monthly def{\n    result:value 0 =\n}\n\ncb:production_change_random def{\n    result:value 0 =\n}\n",
            type: "primary",
        },
        {
            id: 10,
            available: true,
            name: "Ranch",
            colour: 168,
            fundCostMultiplier: 45,
            probabilityMapGen: 11,
            probabilityInGame: 4,
            prospectChance: 75,
            layout: [
                [
                    [2, 1, -1, 0],
                    [-1, -1, -1, 4],
                    [-1, 3, -1, -1],
                ],
                [
                    [1, -1, 2],
                    [0, -1, -1],
                    [3, -1, 4],
                ],
            ],
            cargoAcceptance: ["FMSP"],
            cargoProduction: ["LVST", "WOOL"],
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
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAA0CAYAAAA62j4JAAAD7UlEQVR4nO2Zr3fqSBiGn+5BIBAjIhAVFYgrKhAjKipHICsiIioQKxBXXtE/ofKKFYgVFRURiBVXICIqrrhiRMWKFSMQCETECEQF57ACJg00QAgBumfzGEjOJMz7fj9mEqCioqKioqKioqKioqKi4n/HxbknsA/tdnsOIIRIzr28vByk4T9hgBPuXV7jeR5A8tm+/sLvXb+wjk9twDbhzaZH051rNrnr3BbS8ikNyCs8TVETPpUBRYSnKWLC2QyQt525+z6bToDiwh2TOKbpeXv1hFr+KZeDE96ovWGtBcoRDuQen+ZkBqxH3FK+cJcB+3D0EjhFxN2xY58yOFoGnCrih1K6AeeI+CGUVgJOuBAed52bRChAHMfYtxqTSXwS4W58njI42IB0xAF832c0GjGOZ0xGr4sxUiKlZPqWL+EOEX795ZK//xnn7gGFDUhH3HHXuWE0GmGtJY5jPM9DCIG1FmMMvV5vqwllCI9eftINOnQ6neM0wfWIz6bjxXkpAdBa02q13scvzwsh6Pf7mSaUIfx7P2Qyel357TzkNiAr4g7P85BS8tfwF1LKpPk5+v2IXk9hrV0xoWzhDw8PGGPySgJyGhCG4XzXGK01jdoUKVVyvG4ELDJBa42U8qzCHbkMCILgIgzDeRRFSW2vfyqliKIIeI94FEVoren11Mr9xvEMCbxNJ9gcjXGTcCklV1dXybgoilaO81BoHyCEIM4ZNWMM1lqEEMl1k9ErWtcW5TK2G6/dJlwpldw/iiKUUrRarb0z4be9Ri+RUhIEwcqrKUdWxN1E3XVSSsbxbOP9m56Hum0D8L0f8vz0x7K8JL7vo5Ti8fExGb84HhSRUswAgH6/n3T4NC4iWusN10VIKZM9QpptwpVSiXBXamkeHvzM87s42rOAMWZlN7gJUZ9RbzR3pnqv1wPIrHFX+0opjDEYkz8bchsw/PGNWr2T+8ZZpMvDrQa+7+cSvo114V+//ln+C5Gn5/FF9344Fw2AINc1683SWksYhslmRUr5YTkbDAZIKRPh6aU0q+cAhYQ79iqBp+fx8ge+zWH3jss9A2itPxjhaNSmmet41h4im9dCwh2FesDCiDFXl2aZEZtLw+0JjDGZy2e73S4yBZjp3Pv9bRzUBF1GdO+H8+GP4Ycesb4kbsqIXVxdTgEQYgazGP1L8/JzWsqjfCmrQNqIdEas1zysZsQ23kXXgfpS8LSM6a5Q6jK4zQjYvEnKQojjiU5zlH3APhmxibJSfBdHfS2+KyPWMWZAu714+DrmvNKc9J+h7v3lHKBW7xDHMUEQLJvhK1BsHT+Us/w15oyQN4uMOIfwioqKCoB/AXn4cBnRqC7eAAAAAElFTkSuQmCC",
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
                                top: -19,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAA0CAYAAAA62j4JAAAE6ElEQVR4nO1ZLXvqSBg93eeKFYgRERERIyIQFRURFYiICgQCURGBWFGBqKiI6A+4AoFYUYFAXFGBWFGBqEBURFREVFQgRkQgIiJGXHFdVuS+00kInwHafTZHTQZo5pz3vB9JgRo1atSoUaNGjRo1atSo8f/D2WcfYFf4vp8y00Y0DzEejyuf/z8jgE48SRI4rTZkLDAcDitx+PICEHEZCwghFHF9XUWELyvAqogLIWAYBgAcxAlfTgA94lJK8KazNvpVnfBlBFgV8U0iVK0JJxVg0uuk3uM0d89tcpxEILK2bQNA6Xd2FeFkAjy0L1PKXe9xelYW8VX5zhjb6IQweAYAPD097cTpj8NTLUciJZIkAQB8H45SKSVkLMCbDmzbVgSIDDNtOK02kiQBM20wxhDNQzDTVt9nZuaEMHhGp9tDv9/f+VwnE0BHNA/Bm45aSylh2zaSJEE0D3OCFMmSCECeuGU2wDnf+SwnEcB13VS/ZowpUoyxbO93ZCniOnFa86aDJElyxOfvrxiNZri4uICUcuezHV0A13VTx3Fye0WCuiCGYSwRXxVxxhiEgJoL9hHgW2WGa0DkOedIgo/9MHiG02rDLqwpNVgs1D6EUMQtswEAyjUEzq3S/W1wVAe8vLycAYD89Q2L85YqhI7jrI1yWcR1qwMZWcYY7u+vcXVl7xV94IgO8H0/BTJbCpFFMwJgLN7BGFMiOK02DCnVOgmeSyOuW53aIq2r4OAC6P0dQFbt56EiGDEG5zcRXYRVxHWQ1aWU6rPxeAwhgNHI/9wieHNzk34fjlIAqmLra93qk8lEDTgkQqfbQ6fb28rq5IDMXR/OAIC+a6bLpzuyAK7rpmWVvEic1k6rvSQCAFhmo9TqRJpzrvZIGODDGQDwJmJ0mki3FaKyAFTpGWO5fl1GfJ0I1NZ0QkXirj9bEqbfv4LjGHh7e0MYZmmX/AQWcbzV+Ss9C+htjg6c2XL9o6s+84fBMzzPU5YvQkoJzjlcfwZmmXi6O0cURSrfhRAAgMfBrfqNkZUQWKaJ0Ut8BgB/9az0x+NiiW+lItiIX8D5tbqmCOpRLvZ6Wuu9fjKZKBH1wqcXO95yIKOF2i8SJ9I54vMPF5SRB/YUoNNEmvzMrEYWvr0b4rx5Ac9z1EPPJhFoyPE8r7SqF0XQsS3xTdhJgE4TKZARJ1A+NhpMXeso6/XF6Y5SB8DSaEv7lvEnruUDpj+yv9v1LjGPF0jCxV7ECVsVwb5rpnrUdahCZXEYhqGu/354Auc8VxhJkLInuLKqrvf1S3GH4D1EksQI3kMYhonWuQPDsfDL2j+TdyqCfddMF3GcE6F3/5BrW3TwwfAfcIvj6oojiiIIIVTEZ7OZsnkURYiiKFdICUIIZfWudwnDMAEAwXuIppmJZBgmgvdwZY5vwk7SUUXVhXgc3KLl+blncd0R+pACAJzzpeEFWE2ccjyYvmI6x9nAv0xb55mbyA1N08LAt9L74evOIuzlnaIQwWSIAJkbCJ7nLNUDyncgP7wAy+2stLgBmMcLtLSojwfd9OZ+t9dgOg7yTrCYGuSIYmoU39hQamzq4euwqr9vi4O+FC0KQY4gIWjYmc2yia4K8UPhKDdaJYRt25Ujfmgc9YZlXQNYzm+a26fz0/+j5iQ3pAEK+CD8GWRr1KhRo0aNPP4FkMzTzY6uwroAAAAASUVORK5CYII=",
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
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAA0CAYAAAA62j4JAAADc0lEQVR4nO2YL3TiShSHv76DQCBGjIiIQERURCAiEBEVCAQCgUAgVlQgnniiYkXFihUVK1ZGPFGxAoGoeOIJBAKJQERURCAiRoyIQET0nKxIE/4s7elZQvvOefOZgSFnuL/fvbkzCRgMBoPBYDAYDAaDwWAwGAwGg8Hwv+HiowM4ZPjprwxAa42Ushwn99/PEut/xoBOb5TpOKTZbALQ649QWuO5TVIaAPS7fuXxfrgBnd4oz/iz+M1Tg6srf0+4VgqlNa7rVm7Chxng+d1MCImUEoA0WeP53VJ4msQAbNIajfoTm7QGgLSsSk14dwNarVbWbDZJkgQhBOv1msFo/EvGAZTWOLYoxSutsaSs1IR3M8DzuxlAo5YihCjm9oSnSbyX8cMRKD9XZcLZDSiEO84lkHf3w3s8TWKiOMGSsszySyNUWwlnM6AQ3m77e/O9jlcKD8MQxxaleOBotgvBu9kPl3Nub29Pjr926gKHHMt4wXA4IGV7j7uuS5rEZTa1UqVgoJwvqAubh8mUNFkzHA4ribdyA5aLfy9ubm6yKIrKRleMsN3SHFuglUJaNlEYAtvS3mab52ssJpMpAL7n4DhdkiSpJN4/KlnlCFJKhBB7Y50N0rKwpCSKEyAX6NgCAMcWSMtCaV2W+my+oL5a4DoS15GVx3k2A44RBAGTybQ0oVF/+qXTp0mM67rM5gvug2/4nkPSbDJ9WOF5XuUxVWpA2yZr22SvXdOobcpK2N3fi4xHUUS4nON7DuPxGAAhBHdfr2G12lurd/n6f72FSgzoXZK9FMxgMCiFFOxWAuTNUMWP/DO9Zzab4TjO/iKrFVEUQasFwJfrLt9v8iY4vrJOMuGkJji+srJYKfTm9es+3/7N3ddrgiAo5xq1DeFyThjpsqsvl8vjC7RaEEV8ue4CIBunRL3PSQYEc3UBrxsxnU7z8n2Bt3T1Q+H2c+UEc3XBo/rN6HMq2QYPjVhMvgFgef389yAoH3p2cRxn75xwyDHhVYjepdJzwKERavmAYmvEWynu73MKL6j8IAS/b0SvDSB4uM+/n1N4wbs8DR72CMvrI6Wk0+mgtebH3Z8A9IdtHlWM73oswmU53v+Izxbnu74PeKlZ7nZ1Py+DfF5aXH9+OGuMH/JGaPfMYFsWsVLbcgc+jezsnFk3GAwGg8EAwE/PEMivXoirvAAAAABJRU5ErkJggg==",
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
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAA0CAYAAAA62j4JAAACAElEQVR4nO2YzZGDMAyFtZ1QCoXlqHJSgEugBJdAEcx4DztiHK9lyYDNT/TdkknA1nt+EgAYhmEYhmEYhmEYhmEY/UDEsCxLOHsdXVmWJXjvAyIGAADvffDef0cREPFjs4gYpmlaC/FIR3CK0+e0KI9yRE5x2ngKFYV+f1tHSIoPwxDmeQ7zPGc3dmtHaBV3zoVpmtZCUA7EUNEunxGS4jnGcQzOueCc++eG1CGXdgQtLg600sZzjOOocshlMqKkuPf+kAWVHHKqI7gzHqsu2Z+DNjoMw8d/cw6J79M8I7RnnIpDBdI4AhE/VM6FoURTR9T0ce43JUeQzenMc2prOCwjtqR6Dq0j9mw6JXeMqhyxRXHNNY/IiNL1c8dInRFHKa5ZaG1GaJCOkZgR8QKOUFyihSM0x4jLiGaKc8TndK8juNZZInU89Ji1S+2u1hF7WmfWAc655pOVpt1pM6K2daozrvWsrW13GkfUXKu6q13l6Wtr1zisq22ZtbmXHdJLkBI1GdFijqnOCO5lB/e9tjglR/SYY9QZwT3Klh5xNW+I4kJwL1R7zDFVGcGFVfp9qTgpseJ0755zzEqr5/FSwp+iuETrOaLbGd9LiznikopL7J0jbqO4xJaMuKXiElJGPEZxCS4jHqe4BJcRZ23854ybAvxt/P1+AwDA6/U6bR2/pRA5QveWJ1YAAAAASUVORK5CYII=",
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
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAA0CAYAAAA62j4JAAABuUlEQVR4nO2Y3ZGEIBCE5zIhUB8JZwMgBEIgBIKginu4GsuzgBlQfnTne9t1a3W6m0YFEARBEARBEARBEARBEMahtY4hhDj7OoYSQojOuai1jgAAzrnonPsOEbTW/4bVWkdr7S7EKxORcxw/n0V5VSJSjuPgZ1AU/P1jE0E5TvHoRNQ4ToGiLd8RVx2nWDoRLY5776P3PiqlqoZYpiNaHPfeR2NMxOEx1ohSaj9GnX9qIlrXOApgjInW2qT7eAyFoMQY1hEcxzmxpiKvlNpFOgtQSkjXRJQcp2KNtKz5loTc1hHcNV6KNVecGkoJOXIpEbVrPOcqZ81zyKWH83/sjui1j18Z+s70kIk4KpJyPFdANVtXDXel50yuI1iO5woo9/1Vce4aOsU58cDZR3MFVCqm2n19BMkEGGOqWjPnTqqoOK3dG3bH9bzX7hnpEk13rks/fTG4bVd7zPP4gTvfR+zUdsRoer+P2FnmefxAF8drTzo6EcMcp5jREVMcp+jdEcs4TtGjI5Z0nOJqRzzGcYqWjnik4xRUR7zGcYpcR7zOcYpcR8wa/GfGSQH+Bv98PgAAsG3btOv4BXySYFJJpnu9AAAAAElFTkSuQmCC",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
            ],
            callbacks:
                "const type{\n    level_requirements dict\n    random_prod_factor dict\n    supply_requirement integer\n\n    accept_cargo_types cargodict\n    prod_cargo_types cargodict\n}\n\nlocal type{\n    total_delivered integer\n    current_production_level integer\n    random_range integer\n\n    i iterator\n    level iterator\n    cargo iterator\n}\n\nindustry:storage type{\n    supplied_cycles_remaining_cargo cargodict\n\n    base_prod_factor integer\n\n    num_supplies_delivered 27 list\n}\n\nlevel_requirements 0 [] 100 =\nlevel_requirements 16 [] 150 =\nlevel_requirements 16 5 * [] 300 =\n\nrandom_prod_factor 0 [] 8 =\nrandom_prod_factor 1 [] 12 =\nrandom_prod_factor 5 [] 16 =\nrandom_prod_factor 7 [] 20 =\nrandom_prod_factor 10 [] 24 =\nrandom_prod_factor 11 [] 28 =\nrandom_prod_factor 12 [] 32 =\nrandom_prod_factor 13 [] 36 =\n\nsupply_requirement 8 =\n\naccept_cargo_types ctt:FMSP [] 1 =\nprod_cargo_types ctt:LVST [] 14 =\nprod_cargo_types ctt:WOOL [] 13 =\n\n\n/*\n The following is a replication of what FIRS is doing for a primary industry.\n See: https://github.com/andythenorth/firs/blob/4.4.0/src/templates/produce_primary.pynml\n*/\n\n/* Get the total amount of supplies delivered in last 27 production cycles. */\nfunc:produce_total_supplies_delivered def{\n    i 0 26 [..] loop{\n        total_delivered total_delivered num_supplies_delivered i [] + =\n    }\n}\n\n/* Calculate current production level, based on delivered supplies. */\nfunc:produce_calculate_current_production_level def{\n    func:produce_total_supplies_delivered ()\n\n    level level_requirements loop{\n        current_production_level\n            level_requirements level []\n            current_production_level\n            total_delivered supply_requirement / level >=\n        =\n    }\n}\n\n/* Set the number of supplied cycles remaining per cargo - used to display 'supplied' (or not) in the industry window. */\nfunc:update_supplied_cycles_remaining_per_cargo def{\n    cargo accept_cargo_types loop{\n        supplied_cycles_remaining_cargo cargo [] supplied_cycles_remaining_cargo cargo [] 1 - 0 max =\n    }\n}\n\n/* Shift the array of supplies_delivered values one place to the left, and zero the last entry. */\nfunc:produce_256_ticks_shift_supplies_delivered def{\n    i 0 25 [..] loop{\n        num_supplies_delivered i [] num_supplies_delivered i 1 + [] =\n    }\n    num_supplies_delivered 26 [] 0 =\n}\n\n/* On arrival of supplies, push the amount to perm storage, then clear from stockpile. */\ncb:production_cargo_arrival def{\n    cargo accept_cargo_types loop{\n        num_supplies_delivered 26 [] num_supplies_delivered 26 [] industry:cargo_incoming_waiting cargo [] + =\n\n        supplied_cycles_remaining_cargo cargo []\n            28\n            supplied_cycles_remaining_cargo cargo []\n        industry:cargo_incoming_waiting cargo [] 0 >\n        =\n    }\n\n    /*\n     Update the production level immediately, so that production level text immediately updates in industry window.\n     Production won't actually increase until next 256 tick production cycle.\n    */\n    func:produce_calculate_current_production_level ()\n\n    cargo accept_cargo_types loop{\n        result:inputs cargo [] industry:cargo_incoming_waiting cargo [] =\n    }\n}\n\n/* On 256 ticks, if supplied, produce extra output cargo at appropriate multiplier. */\ncb:production_every_256_ticks def{\n    func:produce_calculate_current_production_level ()\n    func:update_supplied_cycles_remaining_per_cargo ()\n    func:produce_256_ticks_shift_supplies_delivered ()\n\n    cargo prod_cargo_types loop{\n        result:outputs cargo [] prod_cargo_types cargo [] industry:production_level base_prod_factor current_production_level * * * 16 16 100 * * / =\n    }\n}\n\ncb:production_initial def{\n    /* Highest value in random_prod_factor is 13. */\n    random_range industry:random_bits 14 % =\n\n    level random_prod_factor loop{\n        base_prod_factor\n            random_prod_factor level []\n            base_prod_factor\n            random_range level >=\n        =\n    }\n\n    /* Initial production level. Can be changed with cheats. */\n    result:value 16 =\n}\n\ncb:production_change_monthly def{\n    result:value 0 =\n}\n\ncb:production_change_random def{\n    result:value 0 =\n}\n",
            type: "primary",
        },
        {
            id: 11,
            available: true,
            name: "Stockyard",
            colour: 177,
            fundCostMultiplier: 115,
            probabilityMapGen: 5,
            probabilityInGame: 3,
            prospectChance: 0,
            layout: [
                [
                    [-1, -1, -1, -1, 0],
                    [-1, 7, -1, 4, 1],
                    [10, 8, -1, 5, 2],
                    [-1, 9, -1, 6, 3],
                ],
            ],
            cargoAcceptance: ["LVST"],
            cargoProduction: ["FOOD"],
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
                                height: 44,
                                left: -31,
                                top: -13,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAsCAYAAADVX77/AAACD0lEQVR4nO2ZoXajQBSGv+6JQCBGjKhAICJXrIhYwSMgRkasqOgD7KNUIiorEBGIyAhERUUEMgKBiIhAjIjAZQUhzcmm2TW5wznwGUD9M/+5c+dnBhyRpukhTdODK/2OibRgN+lya6WlryJmQN8m3iFmQJIkFEVBkiQApGkqJX2TBykhY8zBWstkkwPw/NIaMJ/PxcZwDbEK0Fq3ghMFwOvvuZT0TcQMUEq1L/5Rcn/8xkoN4SriBkyUxgOglpK+yTdpQQ9ogEBpaemriBsAECjVGxPEDLDWArCPYl4q/7gM3CNmwKkJAr6vqKNfvNlASv5LnCwB5SugNcI1ohXQVcHpOSQD4HPiXSg6XxauEMsBi8UCay1hGAIlgZqdjHCJeBDSm3fWnvvm1yH+L8AOjNew7YkRok1Qa82PcAqAVppZs5WS/xLxXaA+BiIYWBLs2EcxbzYg6MEOAI6CkO8rNt/jYSVBe1b6g02Cl++DS4IdfUqC4rtAWZbU9QfAsJIgtCZMp1NWq5Wk7E1EDaiqCoBZsyXYNWSN+2MR8R4QhiEqfmIfxRivkZb/i7sbYIw5GGNOl6BVVZEtCxoU+yi+t/w/uasB5xM/x/cVj4+abFncU/6/uHsFZFn2AO15wHq9xn9f9ioIid4Nwmci/Nns+PAi8vzV6d2guPilEXmeOzXAGZfNcWRkZGRkZGRkRJg/YfCX9k4ZvzUAAAAASUVORK5CYII=",
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
                                height: 74,
                                left: -31,
                                top: -43,
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
                                height: 88,
                                left: -31,
                                top: -57,
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
                                height: 85,
                                left: -31,
                                top: -54,
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
                                height: 104,
                                left: -31,
                                top: -73,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAABoCAYAAABBlvaFAAAFPElEQVR4nO2arVfjShiHn94TgYh4xYiKCERFRUXFCkTFihVXIK5YsQKxAoFAIO4fgEBesQJRgbhiRQQCgUBUICoQiApERAQiAjEiogLRc1iRpvRraNK0hHDmOYfTln5k5jfv/N53ZlJjTY5b3kvT81BKIeLy97lfW/e3ymStRn/35KU3BBGZ/B3uwsH/t5UTwVn1AdNIH3guTa+O1HdQbh1XKeB22+3dOG+O2LKRPvvaIgof6Q8GTAvjNZsAtI5PKxUFKyNgfqQB+oMBnXYbERdXKUQpoiAYR0G1MArgH+y/QNJZAGfkAiBKcXR0yO31DVprVDxkqPU7NHU7GAW4vO1TFzfzSIfhI8cVzAQrp4DWeulI9x7ucXCpizvxgiryl+mNyyiuRfHTwv/D8JFfF78XOu81drfZzq2xMgJMIz39WsTdekO3hTECABzcTzPSJt4UAD7PSJtYKcBnJ5cAVSx0VpFLAFPBU2VhCk2BIIoAszBVoJAATc9j5Aw31ZZSyCSA1HdmXtc/UTZYKwKe4mqP+jSZBIifnpPHT9TxlFwRsKwQSpfJVSWTAKaVXpoFqkzhLFB1MgtQ9XRnIpMAekWhU2VztIuhshtQNoUFGDnDSu8TFBKgqhuh02QWYFnBs8ocq4D1gLIbUDaFBXBG7tp1gO/7L0WvX5SV5wJZyJsF0o6HUbyJyxcikwBBFNFRqvDe33zHH4P7Qr+3CTIJkC56hlqvJYKp4x8hixSaAkEUsVffAd6eApf/HgHw/b8uAPGTAMmNF2WzEQ8wkY588OuUZxaFuL+vyBQwYdoPMJlcy0vuMJkXokxyCRDHwwUPmK4QjSYXv851T9SCEGWSSwBTuos7/xDz2vH7/g0wu1bwJHnebDQA6N3fIe5WZ2AmCrVA/TwBZjuednp+oRTFGk8UvZ06t/1Hzr7sAXARXBdpQmFy1QEp6dxd1vH51Ka1Jv3m8/jRdQV/OOIhKH8nKVcdMB/q8VNIGIbG72mtaTQaxEEfTxTR2AvEFUDjurJ+yzdErrVAt9vl6OiIhic0PCGO48l7S0deqcln0imgtUZEkhsuPoAAmT0g2fkR2u02Fyc/ADj85QPQ6/UmAiilZsTQWkOzA4D3FKCCPkoCtOpUrxBK57njCMCCEL7vz3xeRGaEGdBEtRQ7D33oX9GU8neUcqZBSZ6k6WuYvDYJYfKHqJVEBA/9PJffCmsJ4IgiOTAfh/oKIWD5wieoN4EgTxM2TmYBpis+PTY0ZRCi2+0yGAzodpN0OT81PsIqMCWzAD9+X9fOzvZeIKnqnufeTyq9pGMjg1n6vj/JDvAxhHhTgMsorhHF8JCcAqcpbdjZ5+p6wMnuEB3HkzJ3IkxGs2yMy+Iyye0BqQiuKwStr9xc33IgiUDPwA75zbJM1l4LpEWM6wq6kwiRRkQes7y6ulq3CRsh5x0iMunc5HFKiKC1z+/4dY9Aj0tfJQpPFOI6yZ8jiCMTkyyT3BGQToPEyEZLhUjJYpZls9a5QBiGaH0HvFaH00JMm+Vl7OGN35s2SyXqQ5wt5oqA4+PjGsDpXvMlijXpHUKefJmJiNxmWSJrmeDpXZAIIYFRiJQsZlkmhXaETEK029+ApG5YbpaJED+LXHxDbORw9PQuqF0EutYeL3fhNbyXeQTwITZDYMPnAmlEnEOyOxyGQLjgETBrlmWylW3ZPGZZNlvdl85jlmXxLhvzq8yyTN71ZGJeCL6VL0CpnJ+fl36HiMVisVgsFovFYrFYLBaLxWKxWCwWi8VisVgsFovFYrF8av4ANU9WSqvOBQ4AAAAASUVORK5CYII=",
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
                                height: 91,
                                left: -31,
                                top: -60,
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
                                height: 98,
                                left: -31,
                                top: -67,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAABiCAYAAADgDdXjAAAMC0lEQVR4nO2cL3DjyNbFf54SMDBo0MDAQEAgIEBAwGCAgcCCgICAgAcWGCwwWDAgYMGABQELBgwYEDDgAYOAgAELAgYEGBgIBBgIGBgENGhgYJAqf6B9ZUmRE9ux47z65lSlxv8i9Tl97+nbtz2BA6PT6cw7nc78UPevHerGQjqKItI0JQgC0jTl5ubmTcf05gKEYTgH8H0frTXGGACCIAAgTVO01lxdXb3J2LzBYDBvt9t7v5nMuFIqey3/OE1TYCmECJUkyV7H5l1cXDAYDOYA+xAiDMO5UioL9fF4DLgIAAoRkKYpw+EQgG63C0Cv19v1kArwoiji4uICYKdCCHGZZZlh3/cJgoDhcMhwOCQIAowx3N7eAkviSZK8dghrodbpdOZRFGXKA1xeXgLbCZHP8Zdgrc0en52dATAejwuv79sLvCiKsieSf9tERJm4kJAIsNYWct5ai7U2m3EhrpRimFiicPnZfcKTgUoO5rGOEJ1OZ26tJYqiLJ+11tn7ZSHEA1aF+u3PMaqhtme0ITxwRhQEQZaP1trCslQlhMy4Uir7rBBP0zQzPfmMCNHtdtFaMxwOs9eGiSXu+O6zDRHL7pf5Al554AKZMSForX0ixNXVFWmaZoLlHT2fx+PxuBDq+VkfJhbVUFn4K6XQ2hKGodQDe6LukEWARAGQLUfyPE8mCIJMCDHLy8vLTAjxABFTzK1MWnJcNdSCuHvv/HyZSm+BLALkplKWgpt9Ywznts5kMiatL3+xSoh8RORdXa4FT3PcRdjTVeOtlkFP8lN+BBIV1loms0eS0T2/Hx2TXN+iOiGwNM6yEMPhMCOglOL255goXMx0QxVy/Pw8yu4HZPVAflneJzxrLcaYzKiCIHAz/vDITdMD4Ht9CqHPifYBGFdcKF9QXV5eEkUR19fXhRmXPNfaEsdxRtoYkwkmxPddAgs8eSCzn6Ypk1mDZHTPKcckozFJ6APwt7mHOmCXZCQK0jTNIuD2LslukM9xa2024+BSrzzjb0Vc4MVxTL/fJ18Nfq9PUZ2QE6/lBsU08wWBmJwx5glxdfsdgHHrOJtx3w8L9cGhiQtqZy01P/vnGwDfvn0rVG5QXMPzj4GVxLXWzOqaOzzCMCzc8FChvgq17pGe2+kjAHkhBCJIfvZkTS8Tb7ePAEjTRW63f8t+570RF9S+/taeJ2MXzquEkJlfNeNCvPtjit965LzhrmPav71b4gIPoKU0WinMIryvP/0BwB8LIWSNrgp1WBJXDU0QKIKGIU2ds79X4gJXCCmF1hqtNaM05bjVBJZChH+6mc8TDwIpnw2qoQgChVTSkgKLeuBdEhd4xlom1mDqTe5HU/6OnNvnhagivgz3sk8s1/ZFCr1Jy21beAChH5BoTaPh0Z8+cj+a8h+1/FC7fZTNajnceRihtcb3G/DjvzABFqmxj07TruE2Q9Zi6gbVcDPYaCgcE5ceQh54Eu4A4eQGJktPuK03odVEGYPW+l0L8WFiDVott6NAZUNiVnfkqpbFRuvIVXX1Jrf1Zm5bq7NdplKKi4sLJpMZ19c/58MkzX72TfI5fODjKcZazuozwocfQLFdLStDfbbs9vi+Tzi5wb+/A+AOz806TwsnEUprTa/3GQA/aBUGcUgRPhhjmBx/JGkdAxDPHohnd5UfntU14eQGPfgXrTV35p6b0U+AlXt42VUaY/g5cNcdp5Mnn5P0eGvUTk9P51AM6dZ9UYCjICAINPcTFwn9qVd4vz5xdX0jPC+8Xm6JtwK3EWo23b2ai3uqhubr18+v6kZvi4yJWRiWMQaOP7oBL4SY1TVparirN6HeRNeXnwcwxO4iSd/9XsfVD8vtr0YpxWxxr4cHQ7OpeTAmEyHfYHlLs6x1u915nnz+XygSzUMplc2sEJTnqyKirnygOgIGgx9Ib0I85C0i4kMcx9mTKqICyWN5DMtzhHI7fNaKmbVipkmfadIvmCq4CAB4qPCNIAiIoiiLCDm625dH1OIm8+4XF7qyR88TqnosA813kfPiydJXjgjdcSG+KgIEckIswsl+Yh8RUTtrqbl9tACUhRAy5cioShVBebZhaYLj8ZiP8VkmADgRvn75myiKsiVUrltOM3m8SyE81fBg6gZ99afL2bwQVZ5QRlmIfB0gg5bX7m6vieOY29tbfN/PusawnHn5XShGnry2S7OsfW4fzSfW3UD6AeWI6Pf7T9IhT7wsQD4KhsNh4VisTFpmXc4o89fMn0tU3XsXZrnYDmtcy38xu4uI+PbtG0mSZI2Rfr+f3VwGUyafjxBpmpZnUEhLn0HOH4DCmUT+OnkDlq27REK+Cbspahftozm4Zu/EGlpKIxFhjj5ircVbVHv5iBAByj3E8uDzr6dpWnivaqmt8pD8tYwxT4jbh5Rut8vR0dHmEXBtW/zpTzHW0lJuEC2lXdGyGJTnuUGVPWJVRJRXi/zZg4gmRVI+74WkCCGPRaByL3I8cqtDOa02EqDRUIyOO/z74yf/Ua5Gn+EiIpuNxqJgXGGWZSGEuByTiTjlrrK8nidc2IiVttNl4lKpqlLneRN4svVtNBTmoxNCIkIG463wiCohyucHgjwxmfW8uVXl+UvE9TPpsi68cg8gHxG/Lz5kFt6wrlnmz/7LkPtVFVjlY/iXiGfH+qXI2QSeu8jjk2ZII9cUyTwhB+cXbuCPShGG4crUkFzPO3x5wPmvy5TNrX/9pZL4LuAZM6ClIqqEkFmcfjzh5keytVkOh8PKL2GAm/WXzK1MXFLk26RJFCnUawTQozukPVEWIm9auzBL+dKFRIN8h+AlcyumieZyVKd3fo66GWwd+pkAVyNT+6xG84k1lUIIdmmWLxGvMjetF8TjE1Tj3+y1/Bi3gQfweTCqAZSFCEO3Va5qmL7GLD/9dfks8bK5XYzq9HrnqIkjLmPx/RYw3roGAPiQf/J5MKpdjUwtfBihR3eFm5UrtU3MUjU897MwS/uQcnbSoXV/R+v+zp1M5U6nyhsuuVdVR/q18KpelIj4CnMQ40p3ZpZKqUpzE1zPjomaS3MrE3czD9Ym2zNf4MNzb/Z6vVqv18siYpIOMWZQGEx5SXOpccJ/7bL1nTfL/P5BZhyW5jaNf39yzSrio/uB20U+jLJN1TZdo8oIKGOVR2xrlgJZzl4ytzxxa50nxbMH0qM2ftzFZ/sd4VoCCHZllvK5K9Nyy9kL5rYOcSma/vq0Ef/NBBCUhSCOs5phncpSsK65PUf8tTvCrQQQbGuWgnXNzff9lcRfuyN8lQCCXq/nImLRXlunsoRq4uVQB1wP8ZmiSWtNceFcHzsRQLCJWcJm5raKuKDcS1gXOxVA8JJZbmNu+9oR7kUAwSqzFGxiblopGq2j7Ji+P/X4K1R8+ukRx/7WY9yrAIKyWQo2MTetNcwMs7qmPjOMJx7J6QlKDV41tjcRQCBmKUfy25jbl2RKr/d7Vju8dkf4bCm8L9zc3NTa7Xbt9i5hPBoyHg0LG6OjIMhyXMwtK5NLtYMY6dZd4deSeQ3OTjprm9u+doQHFaDK3MBtjMrm9lLRVNVnXAcHSYE8tHamJt9CuxzVSfyTJ2Se2xH693fZFntTHFwAwZdkWsjxcoivIh7PHgpb7E1xUAE2MbdVxCVytsVBPQA22xGGk3v3fqE9vnx/GxxegDXNLSOfg5wNxLH/v5kCsL655ZulxphC++w1OLgAm5ibtM/q559WmuWmOLgA65rbS2a5LQ7uAeua274qwYMvg8+ZW3rUXrbUnjFLay1JkvzvVYKbmNtzZrntEgjvwANgPXNbdSgSzx4Iw3DrvcDBPeDyhYNPQb599pFH6jOT/cfMKIqw1r59W3wX2PRsANx/yJziiP/R+2frhii8BwFeqATH4zFRFBHPHgoz/kfvH+qN5qv/4MrBBXjubCAP0/6tkrhSimA0oD/1Cl/yXhcHF2DV2QA40uPx2J0jfv/5hHjj9jvg0Z96W9cFBxdgXXN7ifi2f3HqHQiwnrntmrjgoAIopTYwt3SnxAUHj4B1zW3XxAUHj4B1zW1ff1Xu4G3xQxEXHDwFDkVccHAB9mVu6+Kg/4//9PR0fiji7wLdbvegfzvgF37hF37hF37hF/5/4/8AsJ0hEYyZb1sAAAAASUVORK5CYII=",
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
                                height: 54,
                                left: -31,
                                top: -23,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAA2CAYAAAB3Ep8CAAAEjUlEQVR4nOVaoZLjOBTs3TIwEBAQCAg0ODAfE7BgPuDAgYP3GQcXHJgPGLDwwIGAgIUDDiw4YBgQYCBgYOCqLPC28izLkWZma6TJddVWbEWe9Wv16/ds5QNeicfHx/Nrrr+/v//w2nt4DaqXXsjA26MFAOz/fvw5d/TGeDYBfuBPX/+BMQZN00BrDWsttNYAAGstuq5D0zSwdprP87ZtYYzB4XD4KYG8FMkE+IHbU+uCAKbA/GABwBjjiOBca607zo0oAWuBN02DpmmmMWvdsQSVQHRd58ZJSm5ECfjyx28AgE9//gUAeDphFixXm9KnKqgIf6WNMWjb1h3nRtSBf7/bngHgZHsAgoinJzdH5j0ARwJXGkDwuG1bHA6HrFUgiYBhHFBXNYAlEfv93q28VIb0h2t4eHgouwwO4zA712q6xE8NgoHTDH1jlJVCmmUuJFUBrr4kY6MVgCURbdu6dJDlkJCeQS/Iiaj8fv3FnG0/YqPVQg11Vbsx248AlqkBYLb68hx4BykAYBY8g6YqeL6WGvv9fvXv+mUyB57dCZKIkBoAQKuJnBARfrUoAVEC5IqfbA+tKhcsMY1fCElVRAkekFwFhnEI+gBwqQyENM1rRIS6x7fGi54GpR9I0AiZBkRd1djo6XitfOZC1IF32+q81RsA63nvE8KUkWbpz2ND9eVos1aBjymThnFwN+yPAwgGuTZ+MctqkTo5ECXAKI26qt3N+rKXAXPFufr8J6+TYyUgSQGErP0SMvBrc+uqhu3HxdyciBJAY2Pepqwg5/gPUMClhS5FBVECZJ6ulTt/NX1z5HUkopTggWeYYOimQ13h0Z4ALEkBLqtPlJAGyR7Q9TZ43vXWHUtCfMJ8UwQQrCxvjSgBMnAZNGGUhlHaBWaUnl3v9wIAnAn6isiBpDIoP2mKMlBfHQTnhhqiUnwgSQEywBHpspWmOYyDI0SO5Ua0FfMlTXS9hVHafaZgrZnKiSQTpAJkOrBDlN+vpQJRUuDEi6oA0yIk4RAJskqE2uScSCagwuTYUgUhZaSgJCVEPYBBTuanZ9+FAo6NhcpiTkQVUEGhgpoFUUEtGqFUHwDKcH8iSgDLHkuY7Uc3JlNApsQa/JJaghKSPGBEv6j/RmlUUNjqzaIzXAOJKglJBNAAJRh0qJ/3G56SkfxOyigdbYOfu7oleEGUgK3e4GhP6H4sNIP0S6AEO75rc+S2Wk4k7QtIg+NnBQWtKth+XH25eU0RJTwKAxEP2O12Z2Auc5ZEBh8C3d3242wO3wmW5BGrBDB4YN4FjuhnAcjVly0vlcHveU0J7wAkoinQbu4AALr96sYmEq4Hwj1EKfVSZC8R3xn6oQTu6Zv239n3a/kvX4xKxWy0mhGRe2co+T/3iWhO3wDI/cBqduy/AfLVQLwbAog1IkKQpc4ngIS9OwKIGBGhFef2Og3yXRNApCqCvzMCLh3gTRBAxDzCNz/iZgggQlUjVBKBiZTP3463RQDhE3HXXX4PJH3g4b/uNgkgrvURN60AHyEi/lcEED4RuX8tng273e4sH7hy4TsP/mjEbSNg0gAAAABJRU5ErkJggg==",
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
                                height: 76,
                                left: -31,
                                top: -45,
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
                                height: 32,
                                left: -31,
                                top: -1,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAgCAYAAACinX6EAAAA+0lEQVR4nO3XIW7DMBTG8b+ngsIAg4KAQB9goKBgwHDABygs2DFyhB5gsKAwxygsDAwoKAgoKAjLQJpqVQc24ETKvh+KLMXPn6Un+RlG5ta79no+8/HWAOC9p6oqym0OwHHhACiKwsSoP4ux6V+sXQUOqt22W/CeLMvY34JDvPAA0Tb+rY2zLUCaWADyQznomV6GLPaTNLGkiSU/lOa4cIQQ2iHrj94CfY+H4AYN3hv9Anox+1xERERE5JnJl90b/HSpAVit3pk33XcztxT15emnKT1b70H6sdS/LgHYXx/HhCmF/u6e8rOsDUDtZg9T2VSDi4iIiIiI/Gtf53o+qcnFCW4AAAAASUVORK5CYII=",
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
                                height: 49,
                                left: -31,
                                top: -18,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAxCAYAAABqF6+6AAAD/klEQVR4nN2aIXejWhSFv3mrAhFxxRUREQgEoqIiIuLJiBEjIpCV/QGVFRWVkf0BFRUVIyoqRoyIGBEREYEYEYGIiKi4AhGB6Fp9ghwCBCYNeZ1buk2yCKzL3mefzYEAljGbzV5ns9mrrfVPbC0suLq6AlIhAAaDwZe/ub51Afr9PlEUWRPCugBxHAP2hLAugDEm++55HpCK8reEsC6A1hqAKIqArQjy+d5CWBcg74DyNs/z6Pf7wPsJYV0AcUBeCK01SiniOM4+30sI6wJAseJRFKG1JooiPM8riKCUqmyNyWTC9fV1IyGsC2CMyVwA294X0sYYlFIopbLtAOPxGIDJNARH0xTWBRDyecLSAnni4oAgCIAN8cTw8uPhqPWtCyAE5btUXOYD+f3i4gLYJa5zxzeBdQGksvJdWgD4Y8WFeKfn4yS7V5K3wroAqlRBqfy+igvxBEjanAGwdcFbKq61LhBeuR7L5bLx2h9CgIOIb+y+PuuzBpZhuOOiQ2BdgLf0OACJwUkMZvAVgMfHkOHQLVwpmsC6APuIO4khcXRG/O7+F8HorDAXtFqAl8dbYNfq69UCrSuId7b7wQtKqcIgdSj+OeLc/xdopQpVTxydXta+nWMGX7m7/5WG5Ia4VNt1e+nxm6GpKewLoDWdno/WKfGV6zFxurXEy9VufQsIxOqS6qqTbi8Sf9lUfkkch9nvrb4M1qW6FLWOeBAEzG8umf+ebq8UDWC9BTKrl1JdrC69HschcRwTBAHu7ynzm0uAo8jDBxCgmOpk5PcRl/3Xq8VR61tvgWKqL3NPgyZAvdXNhnjYO213CEqPC/L3BHU97iSG++Q0zYxc+zSBdQGqUr1s8wSyW97xwiEYDVDrONu/1XPAn3o8/6B0vHCI/EFtZjSFdQGqUj1v+fHCYeV6n3cSnN9cZoRlGoSUePzvt88/CWqd3uM7G8tLqqtOemqffxI0hk7P5z46YTgcZKl+yCTY6gy4M720xxtMglrro8jDBxCgySSYJz5xuketb70FDpkEgR3irt8nAnj40Wh96wK8ZRKU/YwxBeIA8+nPo9rAugD7JkF5BD7hBHrdjPjt9xUAo7Pj5gDrAuxL9enmFMvEHaVIcv8nNIV1AcrEZfwtW12Ia99n/fxMp9v9HAJIqgvC3ilQXfEqHHsvYF2AqlSH6oqvn58rj2+1A+pS3VG7j7o63d1rfutboC7VqyouTgA495fgO+2/F8hb3SwW24ruuh0Q4rB8uE03DIe4rtt4fesCSI8L6ixdJt5TaXbIu0Kj0ej16enp4BelrAtQxjbV0+mwjnjYLWZEE/LwAQWQVD/35+9KXGBdgHLQSQvkiYddn/xbQMeSzuM/75Vykp0U1asAAAAASUVORK5CYII=",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
            ],
            callbacks:
                "const type{\n    accept_cargo_types cargodict\n    prod_cargo_types cargodict\n}\n\nlocal type{\n    current_production_ratio integer\n    total_cargo_produced_this_cycle integer\n    total_cargo_to_distribute_this_cycle integer\n\n    cargo iterator\n}\n\nindustry:storage type{\n    supplied_cycles_remaining_cargo cargodict\n\n    total_produced_cargo_available integer\n}\n\naccept_cargo_types ctt:LVST [] 6 =\nprod_cargo_types ctt:FOOD [] 8 =\n\n\n/*\n The following is a replication of what FIRS is doing for a secondary industry.\n See: https://github.com/andythenorth/firs/blob/4.4.0/src/templates/produce_secondary.pynml\n*/\n\ncb:production_cargo_arrival def{\n    cargo accept_cargo_types loop{\n        supplied_cycles_remaining_cargo cargo []\n            28\n            supplied_cycles_remaining_cargo cargo []\n        industry:cargo_incoming_waiting cargo [] 0 >\n        =\n\n        current_production_ratio\n            current_production_ratio\n                accept_cargo_types cargo []\n                0\n            supplied_cycles_remaining_cargo cargo [] 0 >\n            +\n        =\n\n        total_cargo_produced_this_cycle\n            total_cargo_produced_this_cycle\n            industry:cargo_incoming_waiting cargo [] current_production_ratio * 8 /\n            +\n        =\n    }\n\n    /*\n     When low cargo amounts are delivered, it's possible that final output\n     cargo amounts < 1, which means no cargo is distributed. Prevent that by\n     stockpiling produced cargo on each production cycle until there is enough\n     to distribute. The case is triggered by low amounts being moved to the\n     produce cycle as a vehicle gradually unloads, and was noticeable with\n     Road Hog trams.\n    */\n    total_produced_cargo_available total_produced_cargo_available total_cargo_produced_this_cycle + =\n\n    /*\n     Then check min. distributed by dividing over 8, to get the amount divided\n     by max possible output cargos. 8 is the pathological case, this could be\n     made more accurate by checking the lowest output ratio in current economy.\n     For accuracy, this could also store remainders using mod(8) or so, but eh, TMWFTLB?\n    */\n    total_cargo_to_distribute_this_cycle\n        total_produced_cargo_available\n        0\n        total_produced_cargo_available 8 >=\n    =\n    total_produced_cargo_available total_produced_cargo_available total_cargo_to_distribute_this_cycle - =\n\n    cargo accept_cargo_types loop{\n        result:inputs cargo [] industry:cargo_incoming_waiting cargo [] =\n    }\n    cargo prod_cargo_types loop{\n        result:outputs cargo [] total_cargo_to_distribute_this_cycle prod_cargo_types cargo [] * 8 / =\n    }\n}\n\ncb:production_every_256_ticks def{\n    cargo accept_cargo_types loop{\n        supplied_cycles_remaining_cargo cargo [] supplied_cycles_remaining_cargo cargo [] 1 - 0 max =\n    }\n}\n\ncb:production_change_monthly def{\n    result:value 0 =\n}\n\ncb:production_change_random def{\n    result:value 0 =\n}\n",
            type: "secondary",
        },
        {
            id: 12,
            available: true,
            name: "Vineyard",
            colour: 85,
            fundCostMultiplier: 54,
            probabilityMapGen: 10,
            probabilityInGame: 3,
            prospectChance: 75,
            layout: [
                [
                    [-1, -1, -1],
                    [-1, -1, -1],
                    [1, -1, 0],
                ],
                [
                    [-1, -1],
                    [-1, -1],
                    [-1, -1],
                    [-1, 0],
                    [-1, 1],
                ],
                [
                    [-1, -1, -1, -1],
                    [-1, 1, 0, -1],
                ],
                [
                    [-1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1],
                    [-1, 1, -1, -1, -1],
                    [-1, 0, -1, -1, -1],
                ],
                [
                    [-1, -1, -1, -1],
                    [-1, -1, 0, 1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                ],
            ],
            cargoAcceptance: ["FMSP"],
            cargoProduction: ["BEER", "FRUT"],
            placement: "anywhere",
            tiles: [
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3962,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 59,
                                left: -31,
                                top: -28,
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
                                id: 3962,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 59,
                                left: -31,
                                top: -28,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAA7CAYAAADLjIzcAAAFDElEQVR4nO2YIXTiShSGv75TgYgYERERETECgYhAIBAREYgnKhAVFSsQFRVPVCBXVFRUrKioQDxRgYhYsaICgUCsWBGBQERERCAiRlRUvHPyBGQIlLahpeyKfOdUwEmY+//3zj9JoaKioqKioqKioqKioqKioqKioqKioqKi4jfQtUV26DX/OvSC2+jaIpt8vci6XpuLhn1QE44OudgmXVtk//TOSKIYgFkU0Wq6/BhPuJ0mB6nttxjwknClHgnGE7xGnfF0RpCoT6/voAa8JdwSBnXbJlWKupRMwlBPQtcW2WcYchADygg3DQO/45NEMbMoAmAcxZi1Gvm9RUP2xaca8LVVz3JRsBJumCbfBvelhRfv3Xc+fIoBxY5PwhDTMJ7t8VQpTCEwTVMLnyZzgK3CPysf9mrAW6PesC3qUiKEwY/xhLbrMouiUsJfy4ePsBcDyqR63nFAd72s8Je2yTh9+r0GlE11t9VcK/414WXyQZ6cATAYDHT9t7e3WbPZpNVq7aTpXQZ0bZGlT0+YtRpdr/1i8QB1KV8Uvms+iE4XANd1Abi4uDgqiu/3+wyHQyzLKq1rZwM8s5aZtRqpXBRhRiH/9M4YBt/1Hn1PuL2WD5vCpZQIIXS3e71ednV1BUAYhnQ6naOyE7G7AZ6XieVeBlBKYUYhXa+NEAaGaeqRLZvqL+VDUXgQBAD0+33y9XNxJycnme/7+L7PaDQCoOxEHO9qQO6+UkoXHAHBeELXa/PzV/hMeG5Iq+lSl5LB9wcsYeA16s/yYTydITpdRGO94+rRxLEdLV4pxblnZXfj+ZFpmiilCMMQKSVBENDtdhkOh4Rh+KqenQ0QQui/wWAAgO/72gSAPB+Kwv2Or/OhYVvavNHDomN5x3PhQRAQRZHuuGM7mKapxQMk8znnnpWdnUjceh2AOI5I05QgCBZ1LY3dmwFKKRzHQSnFcU1iGAszpJRE05+YtRo0WqRLQ4r50LCttXwojvprHVdKISX0eifEcQywMOfmWgsPZzMA3Hqd+5svxHGiJ2JvBpx7VmYUxt8whC7ScRzSNOU/QCyvT6XLt8G9zgd3Ix+2dfz6+hpgreOwmLI4jol/3ePYNtKAaZgwm/6k3mhp8WtmuKtM+LAB556VJfM59eXn4lgKsTjyms0mSindNSEEI57nw2sdz+/b7Hgu3LFt4iRZmmQD8JgqkvlM15rOE0zLJgxDfVR+yIBcfPq4+k4phVK/UAocx9e5kJN/llLqfCjT8fw38o5HUcT99QX+3x0tOhcOaDOOj1fic05PT9885UoZcDeeH517VsZ8zmR4Q/v0EiGELjI3JC9+NBrRbDYXBTvO4kek3Nrx/N5te/z++gIA01gJS5IU215tjc3PAGmakKYJZSi9BTZNALQRxbEH1o4e3/efPcAopdb2eNHMTeEAtmWtxBU6nAtPkpQnNdXf9/rfSz/f7BSCRROANSOKpwOsTPB9H1gXv22Pvyb8bjw/+tJWWZJG1MztqX4zTI4Ylut6kXe9C5x7VgaLcxjQ2dDo9HAch5ubG33t5eUlsAjI4kNMka+9xf7eJnxz7S/tWgZgNzwAru4ePvRCt/NzQLGw3Ih8IqYPA8Tp5dq1xWwoCn+r4y+t/e9k+Qo8eXhP6c/Yy/8DihORT8PsUQCrCdAnwjuFfxZ7XXCbEbDYGq7r/lHCcz5t4W1m/EnCcw5SgM6KJX+C8IqKioqKCvgfdrvOa82gEmsAAAAASUVORK5CYII=",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
            ],
            callbacks:
                "const type{\n    level_requirements dict\n    random_prod_factor dict\n    supply_requirement integer\n\n    accept_cargo_types cargodict\n    prod_cargo_types cargodict\n}\n\nlocal type{\n    total_delivered integer\n    current_production_level integer\n    random_range integer\n\n    i iterator\n    level iterator\n    cargo iterator\n}\n\nindustry:storage type{\n    supplied_cycles_remaining_cargo cargodict\n\n    base_prod_factor integer\n\n    num_supplies_delivered 27 list\n}\n\nlevel_requirements 0 [] 100 =\nlevel_requirements 16 [] 150 =\nlevel_requirements 16 5 * [] 300 =\n\nrandom_prod_factor 0 [] 8 =\nrandom_prod_factor 1 [] 12 =\nrandom_prod_factor 5 [] 16 =\nrandom_prod_factor 7 [] 20 =\nrandom_prod_factor 10 [] 24 =\nrandom_prod_factor 11 [] 28 =\nrandom_prod_factor 12 [] 32 =\nrandom_prod_factor 13 [] 36 =\n\nsupply_requirement 8 =\n\naccept_cargo_types ctt:FMSP [] 1 =\nprod_cargo_types ctt:BEER [] 9 =\nprod_cargo_types ctt:FRUT [] 9 =\n\n\n/*\n The following is a replication of what FIRS is doing for a primary industry.\n See: https://github.com/andythenorth/firs/blob/4.4.0/src/templates/produce_primary.pynml\n*/\n\n/* Get the total amount of supplies delivered in last 27 production cycles. */\nfunc:produce_total_supplies_delivered def{\n    i 0 26 [..] loop{\n        total_delivered total_delivered num_supplies_delivered i [] + =\n    }\n}\n\n/* Calculate current production level, based on delivered supplies. */\nfunc:produce_calculate_current_production_level def{\n    func:produce_total_supplies_delivered ()\n\n    level level_requirements loop{\n        current_production_level\n            level_requirements level []\n            current_production_level\n            total_delivered supply_requirement / level >=\n        =\n    }\n}\n\n/* Set the number of supplied cycles remaining per cargo - used to display 'supplied' (or not) in the industry window. */\nfunc:update_supplied_cycles_remaining_per_cargo def{\n    cargo accept_cargo_types loop{\n        supplied_cycles_remaining_cargo cargo [] supplied_cycles_remaining_cargo cargo [] 1 - 0 max =\n    }\n}\n\n/* Shift the array of supplies_delivered values one place to the left, and zero the last entry. */\nfunc:produce_256_ticks_shift_supplies_delivered def{\n    i 0 25 [..] loop{\n        num_supplies_delivered i [] num_supplies_delivered i 1 + [] =\n    }\n    num_supplies_delivered 26 [] 0 =\n}\n\n/* On arrival of supplies, push the amount to perm storage, then clear from stockpile. */\ncb:production_cargo_arrival def{\n    cargo accept_cargo_types loop{\n        num_supplies_delivered 26 [] num_supplies_delivered 26 [] industry:cargo_incoming_waiting cargo [] + =\n\n        supplied_cycles_remaining_cargo cargo []\n            28\n            supplied_cycles_remaining_cargo cargo []\n        industry:cargo_incoming_waiting cargo [] 0 >\n        =\n    }\n\n    /*\n     Update the production level immediately, so that production level text immediately updates in industry window.\n     Production won't actually increase until next 256 tick production cycle.\n    */\n    func:produce_calculate_current_production_level ()\n\n    cargo accept_cargo_types loop{\n        result:inputs cargo [] industry:cargo_incoming_waiting cargo [] =\n    }\n}\n\n/* On 256 ticks, if supplied, produce extra output cargo at appropriate multiplier. */\ncb:production_every_256_ticks def{\n    func:produce_calculate_current_production_level ()\n    func:update_supplied_cycles_remaining_per_cargo ()\n    func:produce_256_ticks_shift_supplies_delivered ()\n\n    cargo prod_cargo_types loop{\n        result:outputs cargo [] prod_cargo_types cargo [] industry:production_level base_prod_factor current_production_level * * * 16 16 100 * * / =\n    }\n}\n\ncb:production_initial def{\n    /* Highest value in random_prod_factor is 13. */\n    random_range industry:random_bits 14 % =\n\n    level random_prod_factor loop{\n        base_prod_factor\n            random_prod_factor level []\n            base_prod_factor\n            random_range level >=\n        =\n    }\n\n    /* Initial production level. Can be changed with cheats. */\n    result:value 16 =\n}\n\ncb:production_change_monthly def{\n    result:value 0 =\n}\n\ncb:production_change_random def{\n    result:value 0 =\n}\n",
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
            label: "BEER",
            abbreviation: "AL",
            name: "Alcohol",
            unitName: "Litres",
            weight: 17,
            colour: 183,
            price: 6826,
            penaltyLowerBound: 9,
            penaltyLength: 36,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAuElEQVR4nI2QPQrCQBCFP0MCKSy2SGG5RSB7gJQWlhYWKTyAR/AgHsBjpEzhEXKADVjsAVZIkUKIsBZJ1h8U8mCYN8zjzQ/gHDgni9Btjks31d8RMBOzheFE8lxg7d03tG48VyobhLKIsDYmSWJkEWHKHqvUm5/7P/o6xseOWxQnsSdvU85yB8ABB8B6zAFAIVMunQYgEcK7rKrK88Xwwwgphx3rusWUvT9Iqezl+AtaNxhjeHQ3AJ49YUEWHX5GzwAAAABJRU5ErkJggg==",
            },
            longName: "alcohol",
            classes: 64,
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
            label: "BEAN",
            abbreviation: "BN",
            name: "Beans",
            unitName: "Tonnes",
            weight: 16,
            colour: 61,
            price: 4893,
            penaltyLowerBound: 4,
            penaltyLength: 40,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAA1UlEQVR4nI2QoQ7CQBBEHwSBgARxJIiTWBJEJaICAQ6BwOAr60H2AxCIekz/ACQSUYFAVCBPVKy4BEQFSRFNCwQEqyazL5vZqUGe88c0fplhsOQcn1E9TRDuAai9X1x7UwC0VhgjSGoquAK92YChM8QYQWsF8AHXARajbrV4h0otqSkyNq1FJkBcmOWUOrwsqLt+m2Mf7FY4kCBOyoGE7Jq8vruuiozzoItIhlJN4tjiOB0Axkzw1juAIqNIRiO6I5LRPz0AaEW2gr7qcf02AMfN7avbJ+cMXUND4hUrAAAAAElFTkSuQmCC",
            },
            longName: "beans",
            classes: 16,
        },
        {
            id: 4,
            available: true,
            label: "RFPR",
            abbreviation: "CH",
            name: "Chemicals",
            unitName: "Litres",
            weight: 19,
            colour: 166,
            price: 4728,
            penaltyLowerBound: 20,
            penaltyLength: 255,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAl0lEQVR4nGNkYPj/n4EIwIQucObDX4YzH/4SVvjhAxEm7nnwF64Y3VRGZDee+fCXwWAGC4ZpLBX/ESbCTGNgYGAQ6RBAoTGsDokwYGBgYGB4U/GBQaRDgOFNxQdUhXse/GVIyTBgkJCQgZsEU4zVRBiAmYRsIgPEM///73nw57+Ch85/iwSP/z4lEf/3PPjzHybHwPD/PwDovESUR1b+DgAAAABJRU5ErkJggg==",
            },
            longName: "chemicals",
            classes: 288,
        },
        {
            id: 5,
            available: true,
            label: "GOOD",
            abbreviation: "GD",
            name: "Goods",
            unitName: "Crates",
            weight: 8,
            colour: 45,
            price: 6702,
            penaltyLowerBound: 10,
            penaltyLength: 56,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAz0lEQVR4nG3Pr07DYBSG8d/IRAWiogISxGTFRAUC/C6BC8CjcFzC8FwGchK5ZBUTExWfQFRUTFRUTFSQDNF8HSN71MnJ854/E45HWK/eFXkO6roxX7z4y2S9Wh6jsAsBLgamoSqFqpTPH86kGIpMoW33QlWCZBskWSpF33bnIhR9KslSrk9CkqWqj1d925mG3RZ8/QyBxTwfJWi+6+GZ+PXy6VHbdbJ0EIq7Gxh7V/7Rdt3Ferwx1MOKODHSHHrNYX9aHXm+vwX5bAbePjfgF0SGUZFCWfPzAAAAAElFTkSuQmCC",
            },
            longName: "goods",
            classes: 4,
        },
        {
            id: 6,
            available: true,
            label: "JAVA",
            abbreviation: "CF",
            name: "Coffee",
            unitName: "Bags",
            weight: 4,
            colour: 157,
            price: 7113,
            penaltyLowerBound: 0,
            penaltyLength: 26,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAkklEQVR4nI2PsQ3CMBBFn5nAHSnd4Q3iITICY1EwDmXY4NJRUDgShQdAOgpjxwIL8aXT/ZOedP8bUOUP7dpj8qbr31IF1cmjPb9Nc/yCTckY41p/pJTqDmEEwIBqjCvno+MWnwDcH3mfLgKA94cMiixYa7tth2GPyJJbl1efaiPUjPN8xTn3BQCEMG5ggVuVIgAvgoJhjjXHXiYAAAAASUVORK5CYII=",
            },
            longName: "coffee",
            classes: 4,
        },
        {
            id: 7,
            available: true,
            label: "COPR",
            abbreviation: "CR",
            name: "Copper",
            unitName: "Tonnes",
            weight: 16,
            colour: 51,
            price: 6003,
            penaltyLowerBound: 7,
            penaltyLength: 255,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAwUlEQVR4nI2QIQ+CcBDFfzCDkUAk/CMfwGDwAxCMBoJBN6MfwMDG30Y0GNkkGAhuFqPRaDQYiQQCzSAbBsYpm4FL7+7e7r13BtQ1PcrsQwIY/DZ3vQTAdhXFM2OkD7IzWuks3QKQxBFZXqGDAADlh19ie+lySwHI8gqA9WyO7SqUHzYe96cjtquYTnyR0kEgFjoekzhisdowxe8Q/oZJ4giAcek1oSxLdiZA8njLwHGGgouylOTyR319dUgA3u4s+ANYfDp+fWJS+wAAAABJRU5ErkJggg==",
            },
            longName: "copper",
            classes: 32,
        },
        {
            id: 8,
            available: true,
            label: "CORE",
            abbreviation: "CO",
            name: "Copper Ore",
            unitName: "Tonnes",
            weight: 16,
            colour: 141,
            price: 3659,
            penaltyLowerBound: 30,
            penaltyLength: 255,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAz0lEQVR4nI2PLQ7CQBBG35IRCETFCkiWBFGxhmRFJRKBqEAg9gAcAcEBOAg34AIIBLKiEoHcBMQKBAm4Ihoa/gSjJpOX782noKr4Y1r/QADyeVj4PtZlAMyXm9+JJusRQ2S1O7LHsPD9bzC3Cp8Ko3zCLLlgY0F0UwaTIQAKqiq3Ci0CibC9J/hUGv2hLOrE3CqsM5AI2mh8Km96AOsyWmWnSwwRBppDGZqfXvWr3bFWm6yHu54pO10AxlaIRUDrNgDr/a0GXws9YYBQnJr9AdU9QTXDqpm/AAAAAElFTkSuQmCC",
            },
            longName: "copper ore",
            classes: 16,
        },
        {
            id: 9,
            available: true,
            label: "ENSP",
            abbreviation: "ES",
            name: "Engineering Supplies",
            unitName: "Crates",
            weight: 10,
            colour: 189,
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
            id: 10,
            available: true,
            label: "FMSP",
            abbreviation: "FS",
            name: "Farm Supplies",
            unitName: "Crates",
            weight: 10,
            colour: 55,
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
            id: 11,
            available: true,
            label: "FISH",
            abbreviation: "FI",
            name: "Fish",
            unitName: "Tonnes",
            weight: 16,
            colour: 43,
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
            id: 13,
            available: true,
            label: "FRUT",
            abbreviation: "FT",
            name: "Fruit",
            unitName: "Tonnes",
            weight: 16,
            colour: 148,
            price: 5098,
            penaltyLowerBound: 0,
            penaltyLength: 26,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAABHElEQVR4nFWPIUzDUBRFz5YJBBJR8UkmKxAlqRjJSCYqJ0aCqJiABIFATExUTiCKQ4CbQCAmJiYmKiommjCBmKioQHxRUfFFxcTETz6iaQcneea9e+/LBYwBY5J1aMZz1/R9x6Txm6n39bST9Qs90WKhI2SsGUwEofyg71+Sxu/UdLJ0y8PTCLvTo/SWbF5zoucZOyujPOwbYRtAqYIs3TJQgnDsk32uiIcBCx3xPbuvEmuHUgXeqc16GOABajXAH21wXJfR4zWtqS8MwJkQICuTd2GT3GkWM8Xctcl/JK2qFUz9cwrPQsaaoT4BwBFW9a0sj0KAaHLDLi+aAo6wUGV5LFOzy4vm8Jd8f/ifWBPeXpFJid3tAhAsv/gFSSd66Fyot6UAAAAASUVORK5CYII=",
            },
            longName: "fruit",
            classes: 160,
        },
        {
            id: 14,
            available: true,
            label: "GRAI",
            abbreviation: "GR",
            name: "Grain",
            unitName: "Tonnes",
            weight: 16,
            colour: 5,
            price: 4687,
            penaltyLowerBound: 4,
            penaltyLength: 40,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAArklEQVR4nGNkYPj/n4EIwESMIsoU7qiQZNhRIYmhkAXGKImQZUhwYWHQiMlgYGBgYPgTwwhRoAPxAiMDw///OyokGVwsJBjecDxgYGBgYBCR+cCwZ4kEg0sDRBMLRz0DEzZrGBgYIIruNMCdw8TAwMAgo8LBcOPNB7hpDAwMDG8OTGBgYGBg2NMwg8Gj4znEamQ3whT3LOCBujmBgYWjHqEQpthF4Q/ceo+O53A2ANjxMJ87n7o9AAAAAElFTkSuQmCC",
            },
            longName: "grain",
            classes: 16,
        },
        {
            id: 15,
            available: true,
            label: "LVST",
            abbreviation: "LV",
            name: "Livestock",
            unitName: "Items",
            weight: 3,
            colour: 160,
            price: 5016,
            penaltyLowerBound: 0,
            penaltyLength: 15,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAA00lEQVR4nHWQMWrDUAyGP5cOHVXw6EGBjj1ED9Gh0DVHeAEPHTp68JgxYws5hAdn9xEMecMbA9WYwfAyPKIhJQKhX+KX9EtAzqqaQwgZ8l2vVDVzYzEeUV0R49FrD1fQdZ3HEDaYGaorJz6aGSLCNE0AtG2LmQHQ1zXvsRArEclmf95tZsz9FoB6/ekTqyK2mMgzc79FtClNMTnZNQK8fbyyP4+eizacdr//JwIswwGLif15JKWZ8LIux9y+5rpuGRrsKSHa8DV8w70HL8Po+LT7yReelnKMPqc6IwAAAABJRU5ErkJggg==",
            },
            longName: "livestock",
            classes: 32,
        },
        {
            id: 16,
            available: true,
            label: "NITR",
            abbreviation: "NI",
            name: "Nitrates",
            unitName: "Tonnes",
            weight: 16,
            colour: 127,
            price: 4235,
            penaltyLowerBound: 30,
            penaltyLength: 255,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAnElEQVR4nKWPIRKDQAxFHwwCUcEBEBEViL1DEfgehOuUg+BXcIgIBCJiD4BA4Khima1ipl9lMj///WRwHNxQfsf0v1H9wLaMyS777bgtI6VU7LYC8Hi+08QzpZSKeVIAzALqBwCKK8Wx28o8KSI1ZiFFq/8cTesiyiwgUkfDeZC7rmeelFIqzAJN6+J8ynX99Yz6ISKb1lEUrwT9BcxHRGA4gHvGAAAAAElFTkSuQmCC",
            },
            longName: "nitrates",
            classes: 16,
        },
        {
            id: 17,
            available: true,
            label: "OIL_",
            abbreviation: "OL",
            name: "Oil",
            unitName: "Litres",
            weight: 14,
            colour: 143,
            price: 4153,
            penaltyLowerBound: 30,
            penaltyLength: 255,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAmUlEQVR4nGNkYPj/38UnlgEZ7NmymAEdsLj4xDJoaGgwSEiIMKxZMoPBxiWEgYEBUyOjiY3HfwEBERQJdI03btxAKBQRgeATJ44wYNPIwsDAwPDhwxsMN8E0SkiIMFy5cgOiENnEO3cwNYqIiGA3EVkjySYynTmyneHDhzcMb95AMDYTGRgYGBgZGP7/R/eIiY0niuIpPdUMAL+CQOEpZRE6AAAAAElFTkSuQmCC",
            },
            longName: "oil",
            classes: 64,
        },
        {
            id: 18,
            available: true,
            label: "WOOL",
            abbreviation: "WL",
            name: "Wool",
            unitName: "Items",
            weight: 3,
            colour: 37,
            price: 4564,
            penaltyLowerBound: 8,
            penaltyLength: 48,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAiklEQVR4nK2QvQnDMBCFP2cGgW6DeINoCJcZVgOkECQjqFB5AhUaQEYpgh2rCLjIg8fjuHe/E/TOCVzOmP5jbG1FNe/xtO2omhGxQ3KDiP10VM0452htxRgDsOsw+rEseO+JMVJKGQwppa/x/noyz1dqrdRaASilIGKPNb1vDCEMeuRwtXO3n+95Awk2RFeFf+AVAAAAAElFTkSuQmCC",
            },
            longName: "wool",
            classes: 544,
        },
    ],
};
