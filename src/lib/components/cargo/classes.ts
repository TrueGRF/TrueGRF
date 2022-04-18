export const classes = [
    {
        name: "Passengers",
        value: 0x01,
    },
    {
        name: "Mail",
        value: 0x02,
    },
    {
        name: "Express",
        value: 0x04,
    },
    {
        name: "Armored",
        value: 0x08,
    },
    {
        name: "Bulk",
        value: 0x10,
    },
    {
        name: "Piece Goods",
        value: 0x20,
    },
    {
        name: "Liquid",
        value: 0x40,
    },
];

export const classesOptional = [
    {
        name: "Refrigerated",
        value: 0x0080,
        available: 0x20,
    },
    {
        name: "Hazardous",
        value: 0x0100,
        available: 0x04 | 0x10 | 0x20 | 0x40,
    },
    {
        name: "Covered",
        value: 0x0200,
        available: 0x10 | 0x20,
    },
    {
        name: "Oversized",
        value: 0x0400,
        available: 0x20,
    },
    {
        name: "Powderized",
        value: 0x0800,
        available: 0x10,
    },
    {
        name: "Not Pourable",
        value: 0x1000,
        available: 0x10,
    },
];
