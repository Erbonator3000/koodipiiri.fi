---
title: Ehtolauseet
description: Opas arduino ohjelmoinnin alkeisiin.
sidebar:
  order: 6
---

Tähän mennessä kirjoittamamme ohjelmat ovat olleet toiminnaltaan lineaarisia. Jotta ohjelmamme pystyy reagoimaan muutoksiin ympäristössään, tarvitaan ehtolauseita. Ehtolauseet asettavat nimensä mukaisesti ehdon, jonka perusteella ohjelman suoritus haarautuu kahdeksi tai useammaksi poluksi.

# If-lause

yksinkertaisin ehtolause on `if` rakenne.

```c
if (ehto) {
	// jos ehto pitää paikkansa, suoritetaan koodi hakasulkujen välissä
}
```

If-rakenne alkaa ohjelmointikielen varatulla termillä `if`. Tämän jälkeen asetetaan tarkasteltava ehto sulkujen väliin. Lopuksi ehdon täyttyessä suoritettava koodi asetetaan hakasulkujen sisään.

If-rakenteessa käytettävä ehto arvioidaan totuusarvona, eli `bool` tyyppinä. Mikäli ehto saa arvon `true`, hakasulkujen välissä oleva koodi suoritetaan. Mikäli taas `false`, hypätään hakasulkujen ohi. If-rakenteen ehto voi olla myös numeerinen arvo. Tällöin nolla luetaan samaksi kuin `false` ja mikä tahansa nollasta poikkeava luku (myös negatiiviset luvut) luetaan samaksi kuin `true`.

Yleensä if-rakenteeseen ei suoraan aseteta arvoa true tai false, vaan sitä käytetään tarkkailemaan jonkin muuttujan tilaa.

```c
bool muuttuja = true;

if (muuttuja) {
	// Suoritetaan jos muuttuja on true
}
```

### Harjoitus 4.1

Tässä koodissa vain vihreä valo palaa, mutta punainen ei. Muuta koodia siten, että punainen valo palaa myös. Entä miten saat vihreän valon sammumaan?

<a href="https://wokwi.com/projects/401650299392099329" target="_blank" rel="noopener noreferrer" >Harjoitus 4.1</a>

# Vertailu ja totuusarvot

Yleinen if-rakenteen käyttökohde on numeeristen arvojen tarkastelu ja vertailu. Näin voidaan numeerisista arvoista tuottaa totuusarvoja.

```c
int muuttuja = 100;

if (muuttuja == 90) {
	// Tätä ei suoriteta, koska if-lauseen ehto on false
}
```

Arduino-ohjelmoinnissa (ja muissakin ohjelmointikielissä) numeeristen arvojen vertailu onnistuu seuraavanlaisilla merkinnöillä.

| == | Yhtäsuuruus. Tulos on `true`, jos luvut ovat yhtäsuuret, muuten `false`. **Huomaa kaksi `==` merkkiä peräkkäin!** |
| --- | --- |
| > | Suurempi kuin. Tulos on `true`, jes merkin vasemmalla puolella oleva arvo on suurempi kuin oikealla puolella oleva. |
| < | Pienempi kuin. Tulos on `true` jos merkin vasemmalla puolella oleva arvo on pienempi kuin oikealla puolella oleva. |
| >= | Suurempi tai yhtäsuuri kuin. Tulos on `true`, jos vasemmalla puolella oleva arvo on suurempi kuin oikealla puolella oleva, tai arvot ovat yhtäsuuret. |
| <= | Pienempi tai yhtäsuuri kuin. Tulos on `true`, jos vasemmalla puolella oleva arvo on pienempi kuin oikealla puolella oleva, tai arvot ovat yhtäsuuret. |
| != | Erisuuruus. Tulos on `true`, jos arvot ovat erisuuret. |

Jos halutaan ottaa totuusarvoisen muuttujan käänteisarvo arvo, voidaan käyttää `!` merkintää.

```c
int totuus = false;

if (!totuus) {
	// Täällä oleva koodi suoritetaan, koska false:n käänteisarvo on true
}
```

### Harjoitus 4.2

Tämä koodi ei toimi, mikään valo ei syty. Muuta vertailuja niin, että saat kaikki LED valot syttymään.

<a href="https://wokwi.com/projects/401651191367555073" target="_blank" rel="noopener noreferrer">Harjoitus 4.2</a>

# If-else rakenne

Joskus ehtolauseessa halutaan suorittaa koodia myös silloin, kun ehto ei toteudu. Tällöin voidaan käyttää `else` rakennetta `if` rakenteen lisäksi.

```c
if (ehto) {
	// Jos ehto pitää paikkansa, suoritetaan koodi hakasulkujen välissä
} else {
	// Jos ehto ei pitänyt paikkaansa, suoritetaan tämä koodi
}
```

Jos ehto pitää paikkansa, suoritetaan ensimmäisten hakasulkujen välissä oleva koodi. Jos taas ehto ei pidä paikkaansa, suoritetaan `else` :n jälkeen hakasuluissa oleva koodi.

### Harjoitus 4.3

Muuta seuraavaa koodia niin, että punainen valo syttyy vihreän valon sijaan

<a href="https://wokwi.com/projects/401653711677907969" target="_blank" rel="noopener noreferrer">Harjoitus 4.3</a>

### Harjoitus 4.4

Tämä koodi laittaa vain vihreän valon päälle.  Miten saisit vihreän ja punaisen valon vilkkumaan vuorotellen muttamalla `ok` muuttujan arvoa loop-funkiton sisällä?

<a href="https://wokwi.com/projects/401653822317366273" target="_blank" rel="noopener noreferrer">Harjoitus 4.4</a>

# If - else if - else

Joko-tai vertailun lisäksi joskus voi olla tarpeen reagoida useampaan eri tilanteeseen. Tällöin voidaan `if` ja `else` osioiden lisäksi käyttää `else if` osiota

```c
if (ehto) {
	// Suoritetaan jos ehto pitää paikkansa
} else if (toinenEhto) {
	// Suoritetaan jos toinenEhto pitää paikkansa
}
```

Näitä else if osioita voidaan lisätä peräkkäin tarvittava määrä ilman rajoituksia. `else if` osioiden jälkeen voidaan myös tarvittaessa lisätä `else` osio, joka suoritetaan, jos mikään ehdoista ei täyty.

```c
if (ehto) {
	// Suoritetaan jos ehto pitää paikkansa
} else if (toinenEhto) {
	// Suoritetaan jos toinenEhto pitää paikkansa
} else if (kolmasEhto) {
	// Suoritetaan jos kolmasEhto pitää paikkansa
} else {
	// Suoritetaan jos mikään ehdoista ei täyty
} 
```

### Harjoitus 4.5

Tässä esimerkissä liikennevaloista toimivat vain vihreä ja punainen valo. Muuta koodia siten, että liikennevalot toimivat oikein myös keltaisen valon osalta. **Vinkki:** Kokeile luoda lisää arvoja muuttujalle tila, ja sytyttää LED valoja sen perusteella.

<a href="https://wokwi.com/projects/401659312000234497" target="_blank" rel="noopener noreferrer">Harjoitus 4.5</a>
