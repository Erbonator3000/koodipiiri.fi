# Oman kurssin lisääminen

## Kurssin tiedostojen lisääminen

Oma kurssi lisätään omaan alihakemistoon `src/content/docs` alle. Tämän alle voi tehdä omia alihakemistoja, jos haluaa erotella
kurssin eri lohkoihin (dropdown menut sivupalkissa)

## Configuraatio

Kurssi pitää tämän jälkeen lisätä `astro.config.mjs` tiedostoon.

```js
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
                autogenerate: { directory: '/arduino/basic/' },
              },
              {
                label: 'Pyörät pyörimään',
                autogenerate: { directory: '/arduino/motors/' },
              },
              {
                label: 'Sensorit',
                autogenerate: { directory: '/arduino/sensors/' },
              },
              {
                label: 'Valot vilkkumaan',
                autogenerate: { directory: '/arduino/lights/' },
              },
            ],
          },
          {
            label: 'Arduino vasta-alkasdasdsaajille',
            link: '/arduino/basic/intro',
            autogenerate: { directory: '/arduino/basic/' },
          },
          /*
            Lisää tähän uusi topic, pohjan voi kopioida yltä
          */
        ]),
      ],
		}),
	],
});
```

Oma kurssi tarvitsee siis:
* `label`: Kurssin nimi
* `link`: Linkki kurssin ensimmäiselle sivulle
* `items`: Lista kurssin osioista, eli kurssin alihakemistoista. Tämän sisältö:
  - `label`: osion otsikko
  - `autogenerate`: Osion alihakemisto, josta yksittäiset sivut generoidaan automaattisesti

## Linkki etusivulle
Lopuksi kurssi on linkitettävä etusivulle. Tämä tapahtuu `src/content/docs/index.mdx` tiedostossa lisäämällä tiedoston loppuun
`LinkCard` elementti:

```html
<LinkCard
  title="Arduino vasta-alkajille"
  href="/arduino/basic/intro"
  description="Opettele arduino-ohjelmointia alusta alkaen tekemällä helppoja simulaattoriharjoituksia."
/>
```
Tässä parametrit:
* `title`: Kurssin otsikko
* `href`: Linkki kurssin aloitussivulle
* `description`: Kuvaus kurssin sisällöstä
