# Koodipiiri.f

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

Koodipiiri-projektin tarkoituksena on mahdollistaa mutkaton mikrokontrolleri-ohjelmoinnin opettelu netissä.

## Projektin ajaminen
Tämän projektin mukana tuleva docker-compose.yml tiedosto sisältää tarvittavat konfiguraatiot projektin käynnistämiseen kehitysmodessa, sivuston buildaamiseen, ja muihin projektin ylläpitoon liittyviin asioihin.

Node ympäristö voidaan tietysti ajaa myös ilman kontainerisointia, mutta tämä on vähemmän turvallista npm paketinhallintaan liittyvien tietoturvariskien takia.

### Projektin initialisointi
```bash
docker compose up install
```
Asentaa tarvittavat npm packaget docker containerin cache volumelle.

### Käynnistäminen kehitysmodessa
```bash
docker compose up dev
```
Käynnistää projetin paikallisesti
