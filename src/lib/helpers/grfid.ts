export function GenerateGRFId(type) {
    /* Prefix every GRFID with the type they are, followed by random 24 bits. */
    let prefix;
    switch (type) {
        case "industry":
            prefix = 0xf1;
            break;
        case "townname":
            prefix = 0xf2;
            break;
        default:
            /* Never reached. */
            return;
    }

    return (((prefix << 24) + Math.ceil(Math.random() * 255 * 255 * 255)) >>> 0).toString(16);
}
