// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			logo: {
				src: './src/assets/Logo-hev.svg',
				replacesTitle: true,
			},
			customCss: ["./src/styles/global.css"],
			components: {
			Hero: "./src/components/MyHero.astro",
			Header: "./src/components/MyHeader.astro",
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
	vite: {
		build: {
			rollupOptions: {
				external: ['/pagefind/pagefind.js']
			}
		}
	}
});
