import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	server: {
		fs: {
		  allow: ['images_new/']
	  },
	},
	plugins: [sveltekit()],
	resolve: {
		alias: {
		// Здесь вы можете указать алиас для вашего каталога src
		// Например:
		'src': path.resolve('/Users/kamilories/Desktop/svelt_vkr/images_new/', 'src')
		},
  	},
});
