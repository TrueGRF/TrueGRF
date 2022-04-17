import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { optimizeImports } from "carbon-preprocess-svelte";

const server = {};

// Check if we are running in GitHub Codespaces.
if (process.env['CODESPACE_NAME']) {
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
			server: server,
		}
	}
};

export default config;
