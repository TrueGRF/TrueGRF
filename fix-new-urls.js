// Temporary fix for https://github.com/vitejs/vite/issues/5169
import { readFileSync, writeFileSync } from 'fs';

const re = /[^\n]*new URL[^\n]*/g;
try {
    const fileName = "./truegrf-rs/pkg/truegrf.js";
    writeFileSync(fileName, readFileSync(fileName, "utf8").replace(re, "// removed to fix https://github.com/vitejs/vite/issues/5169 "));
} catch {
    // ignore
}
