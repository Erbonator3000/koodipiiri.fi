import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightSidebarTopics from 'starlight-sidebar-topics'

// https://astro.build/config
export default defineConfig({
  site: 'https://koodipiiri.fi',
  integrations: [
    starlight({
      credits: true,
      title: 'Koodipiiri.fi',
      plugins: [
        starlightSidebarTopics([
          {
            label: 'Arduino vasta-alkajille',
            link: '/arduino/basic/intro',
            items: [
              {
                label: 'Arduino vasta alkajille',
                autogenerate: { directory: '/arduino/basic' },
              },
              {
                label: 'Pyörät pyörimään',
                autogenerate: { directory: '/arduino/motors' },
              },
              {
                label: 'Sensorit',
                autogenerate: { directory: '/arduino/sensors' },
              },
              {
                label: 'Valot vilkkumaan',
                autogenerate: { directory: '/arduino/lights' },
              },
            ],
          },
          {
            label: 'Mikro-ohjainlevyn ohjelmointia Grove Kitin kanssa',
            link: '/grove-kit/intro/arduino_grove-kit',
            items: [
              {
                label: 'Johdatus mikro-ohjainohjelmointiin',
                autogenerate: { directory: '/grove-kit/intro' },
              },
              {
                label: 'Ohjelmistojen asennus',
                autogenerate: { directory: '/grove-kit/setup' },
              },
              {
                label: 'Harjoitukset',
                autogenerate: { directory: '/grove-kit/exercises' },
              },
              {
                label: 'Lopuksi',
                autogenerate: { directory: '/grove-kit/wrapup' },
              },
            ],
          },
        ]),
      ],
    }),
  ],
});
