import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://koodipiiri.fi',
	integrations: [
		starlight({
      title: 'Koodipiiri.fi',
			sidebar: [
				{
					label: 'Arduino vasta alkajille',
					autogenerate: { directory: 'basic' },
				},
				{
					label: 'Pyörät pyörimään',
					autogenerate: { directory: 'motors' },
				},
				{
					label: 'Sensorit',
					autogenerate: { directory: 'sensors' },
				},
			],
		}),
	],
});
