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
      locales: {
        root: {
          label: 'Suomi',
          lang: 'fi',
        },
        en: {
          label: 'English',
          lang: 'en',
        },
      },
      plugins: [
        starlightSidebarTopics([
          {
            label: 'Arduino vasta-alkajille',
            link: '/arduino/basic/intro',
            items: [
              {
                label: 'Arduino vasta-alkajille',
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
        ]),
      ],
    }),
  ],
});
