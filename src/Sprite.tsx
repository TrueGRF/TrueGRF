import './Sprite.css';

const sprite_id_to_image: {[key: number]: any} = {
    // 2011-2025 coal mine
    2011: {
        filename: "coalmine_base.gimp.png",
        offset_x: 66,
        offset_y: 8,
        width: 37,
        height: 26,
    },
    2012: {
        filename: "coalmine_base.gimp.png",
        offset_x: 114,
        offset_y: 8,
        width: 36,
        height: 50,
    },
    2013: {
        filename: "coalmine_anim1.gimp.png",
        offset_x: 162,
        offset_y: 8,
        width: 58,
        height: 50,
    },
    2014: {
        filename: "coalmine_anim2.gimp.png",
        offset_x: 162,
        offset_y: 8,
        width: 58,
        height: 50,
    },
    2015: {
        filename: "coalmine_anim3.gimp.png",
        offset_x: 162,
        offset_y: 8,
        width: 58,
        height: 50,
    },
    2016: {
        filename: "coalmine_base.gimp.png",
        offset_x: 354,
        offset_y: 8,
        width: 49,
        height: 32,
    },
    2017: {
        filename: "coalmine_base.gimp.png",
        offset_x: 418,
        offset_y: 8,
        width: 48,
        height: 41,
    },
    2018: {
        filename: "coalmine_base.gimp.png",
        offset_x: 482,
        offset_y: 8,
        width: 48,
        height: 41,
    },
    2019: {
        filename: "coalmine_base.gimp.png",
        offset_x: 546,
        offset_y: 8,
        width: 36,
        height: 30,
    },
    2020: {
        filename: "coalmine_base.gimp.png",
        offset_x: 594,
        offset_y: 8,
        width: 36,
        height: 43,
    },
    2021: {
        filename: "coalmine_base.gimp.png",
        offset_x: 642,
        offset_y: 8,
        width: 36,
        height: 43,
    },
    2022: {
        filename: "coalmine_base.gimp.png",
        offset_x: 690,
        offset_y: 8,
        width: 64,
        height: 31,
    },
    2023: {
        filename: "coalmine_base.gimp.png",
        offset_x: 2,
        offset_y: 72,
        width: 64,
        height: 31,
    },
    2024: {
        filename: "coalmine_base.gimp.png",
        offset_x: 82,
        offset_y: 72,
        width: 64,
        height: 31,
    },
    2025: {
        filename: "coalmine_base.gimp.png",
        offset_x: 162,
        offset_y: 72,
        width: 64,
        height: 31,
    },

    // 2045-2054 power plant
    2045: {
        filename: "industries_misc.png",
        offset_x: 706,
        offset_y: 792,
        width: 43,
        height: 20,
    },
    2046: {
        filename: "industries_misc.png",
        offset_x: 754,
        offset_y: 792,
        width: 43,
        height: 56,
    },
    2047: {
        filename: "industries_misc.png",
        offset_x:   2,
        offset_y: 872,
        width: 43,
        height: 56,
    },
    2048: {
        filename: "industries_misc.png",
        offset_x:  50,
        offset_y: 872,
        width: 50,
        height: 29,
    },
    2049: {
        filename: "industries_misc.png",
        offset_x: 114,
        offset_y: 872,
        width: 50,
        height: 51,
    },
    2050: {
        filename: "industries_misc.png",
        offset_x: 178,
        offset_y: 872,
        width: 50,
        height: 58,
    },
    2051: {
        filename: "industries_misc.png",
        offset_x: 242,
        offset_y: 872,
        width: 30,
        height: 17,
    },
    2052: {
        filename: "industries_misc.png",
        offset_x: 290,
        offset_y: 872,
        width: 27,
        height: 28,
    },
    2053: {
        filename: "industries_misc.png",
        offset_x: 322,
        offset_y: 872,
        width: 34,
        height: 41,
    },
    2054: {
        filename: "industries_misc.png",
        offset_x: 370,
        offset_y: 872,
        width: 49,
        height: 52,
    },
}

const old_tile_to_sprite_id: {[key: number] : any} = {
    0x00: {
        ground: 2022,
        building: 2013,
    },
    0x01: {
        ground: 2022,
        building: 2015,
    },
    0x02: {
        ground: 2022,
        building: 2018,
    },
    0x03: {
        ground: 2022,
        building: 2021,
    },
    0x04: {
        ground: 2025,
        building: 0,
    },
    0x05: {
        ground: 2023,
        building: 0,
    },
    0x06: {
        ground: 2024,
        building: 0,
    },
    0x07: {
        ground: 2047,
        building: 0,
    },
    0x08: {
        ground: 2050,
        building: 0,
    },
    0x09: {
        ground: 2053,
        building: 0,
    },
    0x0a: {
        ground: 2054,
        building: 0,
    },
}

function Sprite(props: any) {
    if (props.old_tile_id === 0xfd) return (<span className="sprite" />);

    const gfx = old_tile_to_sprite_id[props.old_tile_id];
    const sprite = sprite_id_to_image[gfx.building] || sprite_id_to_image[gfx.ground];

    return (
        <span className="sprite" style={{background: `url(sprites/${sprite.filename}) -${sprite.offset_x}px -${sprite.offset_y}px`, width: `${sprite.width}px`, height: `${sprite.height}px`}} />
    );
}

export default Sprite;
