# TrueGRF

TrueGRF is a project to make it more accessible for anyone to create NewGRFs for OpenTTD.

Its main goal is not for the expert user, but for those who want to make a simple train, change some graphics, some stats, and the likes.

It is build with React and Rust (via WASM), to have everything work in-the-browser.

## Rust / Web

### Installation (Rust)

Have latest rust installed, and install `wasm-pack` (with `cargo install wasm-pack`).

```bash
cd truegrf-rs
wasm-pack build
```

### Installation (Web)

(depends on Rust)

```bash
npm install
npm run build
```

Alternatively for the last step, you can do `npm run dev` for development.

# Included images

TrueGRF comes embedded with images from the [https://github.com/andythenorth/firs](FIRS) NewGRF.
Using these images in your NewGRF means you also have to follow the same license as found [https://github.com/andythenorth/firs/blob/master/license.pt](here).
