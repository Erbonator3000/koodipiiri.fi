import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Koodipiiri.fi',
			social: {
				github: 'https://github.com/withastro/starlight', // TODO
			},
			sidebar: [
				{
					label: 'Arduino vasta alkajille',
					autogenerate: { directory: 'guides' },
				},
			],
		}),
	],
});
