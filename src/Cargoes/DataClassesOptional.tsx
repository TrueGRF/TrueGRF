interface DataClassesOptionalType {
    value: number,
    label: string,
    available: number,
};

const DataClassesOptional : DataClassesOptionalType[] = [
    {
        value: 0x0080,
        label: "Refrigerated",
        available: 0x20,
    },
    {
        value: 0x0100,
        label: "Hazardous",
        available: 0x04 | 0x10 | 0x20 | 0x40,
    },
    {
        value: 0x0200,
        label: "Covered",
        available: 0x10 | 0x20,
    },
    {
        value: 0x0400,
        label: "Oversized",
        available: 0x20,
    },
    {
        value: 0x0800,
        label: "Powderized",
        available: 0x10,
    },
    {
        value: 0x1000,
        label: "Not Pourable",
        available: 0x10,
    },
];

export default DataClassesOptional;
