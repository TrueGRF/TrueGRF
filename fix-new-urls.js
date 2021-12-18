// Temporary fix for https://github.com/vitejs/vite/issues/5169
import { readFileSync, writeFileSync } from 'fs';

const re = /[^\n]*new URL[^\n]*/g;
for(let crateName of JSON.parse(readFileSync("./.rsw.json", "utf8")).crates) {
    try {
        const fileName = "./.rsw/crates/" + crateName + "/pkg/" + crateName + ".js";
        writeFileSync(fileName, readFileSync(fileName, "utf8").replace(re, "// removed to fix https://github.com/vitejs/vite/issues/5169 "));
    } catch {
        // ignore
    }
}
