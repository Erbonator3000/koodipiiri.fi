---
title: pinMode ja digitalWrite
description: Opas arduino ohjelmoinnin alkeisiin.
sidebar:
  order: 3
---

Arduinon fyysisiä sähköisiä liitoksia kutsutaan pinneiksi. Näiden avulla Arduino voi ohjata ulkoisia komponentteja ja lukea jännitteen tai ulkoiset sensorien arvoja. Arduino simulaattorissa pinnit löytyvät Arduino ohjelmointialustan reunoilta, ja pinnien numerot ovat kirjoitettuna pinnien viereen.

Tässä vaiheessa kurssia keskitymme pinnien käyttöön yksinkertaisina päälle/pois kytkiminä, joilla voidaan kytkeä päälle esimerkiksi valoja.

# Pinnien ohjaus

Arduinon pinnien ohjaukselle on kaksi oleellista funktiota, **pinMode** ja **digitalWrite.**

```c
 pinMode(0, OUTPUT); // Asetetaan pinni '0' OUTPUT tilaan
```

pinMode määrittää, käytetäänkö pinniä INPUT vai OUTPUT tarkoituksiin. Tässä vaiheessa haluamme ohjata Arduinoon kytkettyä LED:iä, joten valitsemme OUTPUT moden pinnille numero `0` .

```c
digitalWrite(0, HIGH); // Laitetaan pinniin sähköt päälle
```

digitalWrite ohjaa OUTPUT-pinnin jännitettä. Se ottaa kaksi parametria: pinnin numeron ja tilan (HIGH tai LOW). HIGH asettaa pinnin 5V jännitteeseen ja LOW asettaa pinnin 0V jännitteeseen.

## Harjoitus 1

Avaa linkki ensiommäiseen harjoitukseen

https://wokwi.com/projects/401573340205036545

Tässä esimerkissä kaikki toiminnot suoritetaan setup funktiossa. Ensin asetetaan pinni numero ‘0’ OUTPUT-modeen. Tämän jälkeen asetetaan pinnin arvoksi HIGH. Tämä kytkee pinniin viiden voltin jännitteen, ja siihen kytketty vihreä LED valo syttyy

### Tehtävä 1.1

Mitä muutoksia koodiin pitää tehdä, jotta punainen LED valo syttyy?

### Tehtävä 1.2

Miten saadaan molemmat LED valot syttymään yhtä aikaa?
