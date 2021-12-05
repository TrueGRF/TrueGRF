interface DataPlacementType {
    [name: string]: {
        label: string,
    }
};

const DataPlacement: DataPlacementType = {
    "anywhere": {
        label: "Anywhere",
    },
    "on-water": {
        label: "On water",
    },
    "in-town": {
        label: "In town",
    },
    "in-large-town": {
        label: "In large town",
    },
    "near-town": {
        label: "Near town",
    },
    "custom": {
        label: "Customize",
    },
};

export default DataPlacement;
