import { useState } from 'react';

import './Sprite.css';

const sprite_id_to_image: {[key: number]: any} = {
    // 2011-2025 coal mine
    2011: {
        filename: "coalmine_base.gimp.png",
        offset_x: 66,
        offset_y: 8,
        width: 37,
        height: 26,
        rel_x: -17,
        rel_y: -8,
    },
    2012: {
        filename: "coalmine_base.gimp.png",
        offset_x: 114,
        offset_y: 8,
        width: 36,
        height: 50,
        rel_x: -16,
        rel_y: -33,
    },
    2013: {
        filename: "coalmine_anim1.gimp.png",
        offset_x: 162,
        offset_y: 8,
        width: 58,
        height: 50,
        rel_x: -16,
        rel_y: -33,
    },
    2014: {
        filename: "coalmine_anim2.gimp.png",
        offset_x: 162,
        offset_y: 8,
        width: 58,
        height: 50,
        rel_x: -16,
        rel_y: -33,
    },
    2015: {
        filename: "coalmine_anim3.gimp.png",
        offset_x: 162,
        offset_y: 8,
        width: 58,
        height: 50,
        rel_x: -16,
        rel_y: -33,
    },
    2016: {
        filename: "coalmine_base.gimp.png",
        offset_x: 354,
        offset_y: 8,
        width: 49,
        height: 32,
        rel_x: -30,
        rel_y: -9,
    },
    2017: {
        filename: "coalmine_base.gimp.png",
        offset_x: 418,
        offset_y: 8,
        width: 48,
        height: 41,
        rel_x: -29,
        rel_y: -18,
    },
    2018: {
        filename: "coalmine_base.gimp.png",
        offset_x: 482,
        offset_y: 8,
        width: 48,
        height: 41,
        rel_x: -29,
        rel_y: -18,
    },
    2019: {
        filename: "coalmine_base.gimp.png",
        offset_x: 546,
        offset_y: 8,
        width: 36,
        height: 30,
        rel_x: -16,
        rel_y: -12,
    },
    2020: {
        filename: "coalmine_base.gimp.png",
        offset_x: 594,
        offset_y: 8,
        width: 36,
        height: 43,
        rel_x: -16,
        rel_y: -25,
    },
    2021: {
        filename: "coalmine_base.gimp.png",
        offset_x: 642,
        offset_y: 8,
        width: 36,
        height: 43,
        rel_x: -16,
        rel_y: -25,
    },
    2022: {
        filename: "coalmine_base.gimp.png",
        offset_x: 690,
        offset_y: 8,
        width: 64,
        height: 31,
        rel_x: -31,
        rel_y: 0,
    },
    2023: {
        filename: "coalmine_base.gimp.png",
        offset_x: 2,
        offset_y: 72,
        width: 64,
        height: 31,
        rel_x: -31,
        rel_y: 0,
    },
    2024: {
        filename: "coalmine_base.gimp.png",
        offset_x: 82,
        offset_y: 72,
        width: 64,
        height: 31,
        rel_x: -31,
        rel_y: 0,
    },
    2025: {
        filename: "coalmine_base.gimp.png",
        offset_x: 162,
        offset_y: 72,
        width: 64,
        height: 31,
        rel_x: -31,
        rel_y: 0,
    },

    // 2045-2054 power plant
    2045: {
        filename: "industries_misc.png",
        offset_x: 706,
        offset_y: 792,
        width: 43,
        height: 20,
        rel_x: -21,
        rel_y: 2,
    },
    2046: {
        filename: "industries_misc.png",
        offset_x: 754,
        offset_y: 792,
        width: 43,
        height: 56,
        rel_x: -21,
        rel_y: -34,
    },
    2047: {
        filename: "industries_misc.png",
        offset_x:   2,
        offset_y: 872,
        width: 43,
        height: 56,
        rel_x: -21,
        rel_y: -34,
    },
    2048: {
        filename: "industries_misc.png",
        offset_x:  50,
        offset_y: 872,
        width: 50,
        height: 29,
        rel_x: -31,
        rel_y: -4,
    },
    2049: {
        filename: "industries_misc.png",
        offset_x: 114,
        offset_y: 872,
        width: 50,
        height: 51,
        rel_x: -31,
        rel_y: -26,
    },
    2050: {
        filename: "industries_misc.png",
        offset_x: 178,
        offset_y: 872,
        width: 50,
        height: 58,
        rel_x: -31,
        rel_y: -33,
    },
    2051: {
        filename: "industries_misc.png",
        offset_x: 242,
        offset_y: 872,
        width: 30,
        height: 17,
        rel_x: -14,
        rel_y: -3,
    },
    2052: {
        filename: "industries_misc.png",
        offset_x: 290,
        offset_y: 872,
        width: 27,
        height: 28,
        rel_x: -13,
        rel_y: -14,
    },
    2053: {
        filename: "industries_misc.png",
        offset_x: 322,
        offset_y: 872,
        width: 34,
        height: 41,
        rel_x: -13,
        rel_y: -14,
    },
    2054: {
        filename: "industries_misc.png",
        offset_x: 370,
        offset_y: 872,
        width: 49,
        height: 52,
        rel_x: -26,
        rel_y: -29,
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
    const [dataUrl, setDataUrl] = useState("");

    if (props.tile_id === 0xfd) return (<span className="sprite" />);

    const gfx = old_tile_to_sprite_id[props.tile_id];
    const sprite = sprite_id_to_image[gfx.building] || sprite_id_to_image[gfx.ground];

    const canvas = document.createElement("canvas");
    canvas.width = sprite.width;
    canvas.height = sprite.height;
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("Could not get context");

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const sprite_image = new Image();
    sprite_image.src = "sprites/" + sprite.filename;

    sprite_image.onload = () => {
        ctx.drawImage(sprite_image, sprite.offset_x, sprite.offset_y, sprite.width, sprite.height, 0, 0, sprite.width, sprite.height);

        const img = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = img.data;
        for (let i = 0; i < data.length; i += 4) {
            if (data[i] === 0 && data[i + 1] === 0 && data[i + 2] === 255) {
                data[i + 3] = 0;
            }
        }
        ctx.putImageData(img, 0, 0);
        setDataUrl(canvas.toDataURL("image/png"));
    };

    return (
        <img src={dataUrl} className="sprite" alt="" style={{ left: `${sprite.rel_x + 32}px`, top: `${sprite.rel_y + 16}px` }} />
    );
}

export default Sprite;
