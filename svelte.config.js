import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { optimizeImports } from "carbon-preprocess-svelte";
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';

const server = {};

/* Abstract the version from the package.json file. */
const file = fileURLToPath(new URL('package.json', import.meta.url));
const json = readFileSync(file, 'utf8');
const pkg = JSON.parse(json);

// Check if we are running in GitHub Codespaces.
if (process.env['CODESPACE_NAME'] || process.env['GITPOD_INSTANCE_ID']) {
	server.hmr = {
		clientPort: 443
	};
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [optimizeImports(), preprocess()],

	kit: {
		adapter: adapter(),
		prerender: {
			default: true,
		},

		paths: {
			base: process.env['BASE_PATH'] || '',
		},
		vite: {
			define: {
				__VERSION__: JSON.stringify(pkg.version),
			},
			server: server,
		}
	}
};

export default config;
