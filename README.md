# TrueGRF

TrueGRF is a project to make it more accessible for anyone to create NewGRFs for OpenTTD.

Its main goal is not for the expert user, but for those who want to make a simple train, change some graphics, some stats, and the likes.

It is build with Svelte and Rust (via WASM), to have everything work in-the-browser.

## Installation

```bash
npm install
npm run build
```

Alternatively for the last step, you can do `npm run dev` for development.

## Licenses

### Images

TrueGRF comes embedded with ground sprites from [OpenGFX](https://github.com/OpenTTD/OpenGFX).
Normally they are only used for rendering TrueGRF, and in-game it will use the baseset in use by the user.

If you would be to use these sprites for your own work, please be mindful of the GPLv2 license [OpenGFX is licensed](https://github.com/OpenTTD/OpenGFX/blob/master/LICENSE) under.

### OpenTTD

TrueGRF comes embedded with [OpenTTD](https://github.com/OpenTTD/OpenTTD), and is licensed under [GPLv2](https://github.com/OpenTTD/OpenTTD/COPYING.md)
