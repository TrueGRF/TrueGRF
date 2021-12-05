interface DataClassesType {
    value: number,
    label: string,
};

const DataClasses : DataClassesType[] = [
    {
        value: 0x01,
        label: "Passengers",
    },
    {
        value: 0x02,
        label: "Mail",
    },
    {
        value: 0x04,
        label: "Express",
    },
    {
        value: 0x08,
        label: "Armored",
    },
    {
        value: 0x10,
        label: "Bulk",
    },
    {
        value: 0x20,
        label: "Piece Goods",
    },
    {
        value: 0x40,
        label: "Liquid",
    },
];

export default DataClasses;
