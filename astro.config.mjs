import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Koodipiiri.fi',
			sidebar: [
				{
					label: 'Arduino vasta alkajille',
					autogenerate: { directory: 'guides' },
				},
			],
		}),
	],
});
