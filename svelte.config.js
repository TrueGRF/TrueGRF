import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { optimizeImports } from "carbon-preprocess-svelte";

const server = {};

// Check if we are running in GitHub Codespaces.
const codespaceName = process.env['CODESPACE_NAME'];
if (codespaceName) {
	const hmrPort = 3000;
	server.hmr = {
		host: `${codespaceName}-${hmrPort}.githubpreview.dev`,
		port: hmrPort,
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
	}
};

export default config;
