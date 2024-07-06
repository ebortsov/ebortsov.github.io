import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: 'build',
			fallback: '404.html',
			strict: true
		}),
		paths: {
			base: process.argv.includes('dev') ? '' : '/ebortsov.github.io'
		}
	}
};

export default config;
