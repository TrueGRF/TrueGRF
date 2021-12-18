import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { ViteRsw } from 'vite-plugin-rsw';

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
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		paths: {
			base: process.env['BASE_PATH'] || '',
		},

		vite: {
			plugins: [
				ViteRsw({
					profile: "release",
					crates: [
						"truegrf-rs",
					],
					unwatch: [
						"src/lib/*",
						"src/routes/*"
					]
				}),
			],
			ssr: {
			  	noExternal: [/^@smui(?:-extra)?\//],
			},
			server: {
				fs: {
					allow: ["truegrf-rs"],
				},
				...server
			}
		}
	}
};

export default config;
