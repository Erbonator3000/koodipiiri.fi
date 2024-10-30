---
title: Loop ja delay
description: Opas arduino ohjelmoinnin alkeisiin.
sidebar:
  order: 4
---

Kuten perusteet-osiossa todettiin, **loop** on osio, joka suoritetaan toistuvasti, kun Arduino-ohjelmaa suoritetaan. Joskus loop osiossa on tarpeen odottaa hetki, ennen seuraavaa vaihetta. Tällöin voidaan käyttää **delay**-funtiota.

```c
delay(1000); // Odotetaan 1000 millisekuntia
```

**Delay**-funtio ottaa parametrikseen arvon millisekunteina ja odottaa, kunnes annettu aika on kulunut. Tänä aikana muuta koodia ei suoriteta, ja Arduino ei tee mitään.

## Harjoitus 2

Avaa harjoitus klikkaamalla linkkiä.

https://wokwi.com/projects/401573536310785025

Tässä harjoituksessa asetetaan pinni numero **0** OUTPUT modeen. **Loop**-funktiossa vaihdellaan pinniä **HIGH** ja **LOW** tilojen välillä, odottaen delay funtiossa 1000 millisekuntia. Tämä saa vihreän LED valon vilkkumaan.

### Tehtävä 2.1

Kuinka vihreä LED valo saadaan vilkkumaan nopeammin? Entä hitaammin?

### Tehtävä 2.2

Kuinka vihreä ja punainen valo saadaan vilkkumaan vuorotellen?

### Tehtävä 2.3

Tässä simulaattorissa on lisätty myös keltainen valo. 

https://wokwi.com/projects/401574802672996353

Kirjoita **loop**-funtioon koodi, joka saa valot käyttäytymään kuten liikennevalot.
