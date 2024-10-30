---
title: Muuttujat
description: Opas arduino ohjelmoinnin alkeisiin.
sidebar:
  order: 5
---
Ohjelmoinnissa yksi oleellinen konsepti ovat muuttujat. Muuttujat ovat tapa tallentaa esimerkiksi numeerisia arvoja ohjelman käyttöön. Muuttujien määrittäminen arduino ohjelmoinnissa tapahtuu esimerkiksi seuraavasti:

```c
int muuttuja = 100;
```

`int` määrittelee muuttujan tyypin. `muuttuja`  on tässä esimerkissä muuttujan nimi. Muuttujan nimi on vapaasti valittavissa. `= 100` asettaa muuttujalle alkuarvon. Huomaathan, että kuten funktiokutsu, tämäkin toiminto päättyy puolipisteeseen `;`.

Arduino-ohjelmoinnissa on muuttujan tyyppi on aina määriteltävä. Tässä vaiheessa esitellään kolme erilaista muuttujatyyppiä:

- `int`  tyyppiset muuttujat ovat kokonaislukuja ja voivat saada arvon välillä -32768 ja 32767
- `bool`  tyyppiset muuttujat ovat totuusarvoja, eli voivat saada arvon `true` tai `false`.
- `float` tyyppiset muuttujat tarkoittavat desimaalilukuja

Muuttujan arvo voi nimensä mukaisesti muuttua ohjelman suorituksen aikana. Muuttujan arvon voi muuttaa koodilla:

```c
muuttuja = 42;
```

Kuten huomataan, muuttujan arvon asettaminen muistuttaa uuden muuttujan luomista, lukuunottamatta muuttujan tyypin määrittelyä.

Muuttujia voi myös käyttää matemaattisissa toimituksissa ja niiden arvoja tallentaa toisiin muuttujiin.

```c
int muuttuja = 100;
int toinenMuuttuja = muuttuja + 50; // Tämän jälkeen toinenMuuttujan arvo on 150
```

Muuttujia voidaan myös käyttää niiden itsensä muokkaamiseen

```c
int muuttuja = 100;
muuttuja = muuttuja - 20; // Tämän jälkeen muuttujan arvo on 80
```

Suurin hyöty on muuttujien käyttämisestä funktioiden parametreina

```c
int tauko = 1000;
delay(tauko); // Odotetaan 1000 millisekuntia
```

## Huomioita!

Muuttujien nimeämistä koskee muutama erikoissääntö

- Muuttujan nimi ei voi alkaa numerolla
- muuttuja ei voi sisältää erikoismerkkejä tai välilyöntiä. esim `+` `-` `*` `/` `#` . Alaviiva `_` on kuitenkin sallittu.
- Muuttujan nimi on case-sensitive, eli isoilla ja pienillä kirjaimilla on väliä.
- Muuttujan nimi ei voi olla Arduino ohjelmointikielen varattu termi, esimerkiksi `int` `bool` `float` `if` `for`  jne.

## Tehtävä 3

Tässä esimerkissä delay funktion pituus on määritelty muuttujassa `tauko`

https://wokwi.com/projects/401578519885705217

### Harjoitus 3.1

Miten nyt saadaan LED valon vilkkuminen nopeutettua tai hidastettua?

### Harjoitus 3.2

Kuinka LED-valoSaadaan vilkkumaan nopeammin? Entä hitaammin.

# Muuttujien näkyvyys

Muuttujien näkyvyys koodissa riippuu siitä, missä kyseinen muuttuja on määritelty. Edellisessä esimerkissä muuttuja oli määritelty koodin alussa, eli kyseessä on niinsanotusti globaali muuttuja. Muuttuja voidaan myös määritellä funktion sisällä, jolloin se on käyttettävissä vain kyseisessä funktiossa. Näinollen tämäkin koodi toimisi:

```c
void loop() {
	int tauko = 1000;
	digitalWrite(0, HIGH);
  delay(tauko);
  digitalWrite(0, LOW);
  delay(tauko);
}
```

### Harjoitus 3.3

Pohdi, miksi seuraava koodi ei toimi. Kuinka sen saisi toimimaan?

```c
void setup() {
	pinMode(0, OUTPUT);
	int tauko = 1000;
}

void loop() {
	digitalWrite(0, HIGH);
  delay(tauko);
  digitalWrite(0, LOW);
  delay(tauko);
}
```

### Harjoitus 3.4

Tämän esimerkin liikennevaloissa kaikki valot ovat päällä yhtä pitkään. Miten käyttäisit määriteltyjä muuttujia yhdessä delay funktioiden kanssa, jotta valot olisivat päällä eripituisia aikoja?

https://wokwi.com/projects/405997287258007553

Seuraavana vuorossa Ehtolauseet

[Ehtolauseet](https://www.notion.so/Ehtolauseet-202087280a7a44eba05a32e67c6712d6?pvs=21)

