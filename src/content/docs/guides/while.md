---
title: While toistorakenne
description: Opas arduino ohjelmoinnin alkeisiin.
sidebar:
  order: 8
---

# while (ehto)

Joskus koodissa on tarpeen odottaa jonkin ehdon täyttymistä. Tällöin voidaan käyttää `while` toistorakennetta.

```c
while (ehto) {
	// tehdään asioita niin kauan kuin ehto on voimassa
}
```

`While` muistuttaa siis toiminnaltaan `if`-rakennetta, sillä erotuksella, että `while`  rakenteen ehto tarkistetaan uudestaan ja uudestaan, kunnes se ei enää pidä paikkaansa.

# Toistojen laskeminen

Yhdistämällä `while`  rakenteen ja muuttujan, voidaan saada aikaan rajoitettu määrä toistoja

```c
int toistoja = 0;             // Alustetaan muuttuja 'toistoja' arvolla 0

while (toistoja < 3) {        // jatketaan kunnes on suoritettu kolme toistoa
	toistoja = toistoja + 1;    // Lisätään toistojen määrää yhdellä

	// Tänne voidaan laittaa koodia, joka halutaan suorittaa kolme kertaa
}
// Täältä jatketaan kun halutut toistot on suoritettu
```

Tässä koodissa käytetään `while` rakennetta toistojen laskemiseen. Kun toistot ylittävät halutun rajan, `while`  rakenteen ehto ei enää täyty, ja koodia jatketaan aaltosulkujen jälkeen.

### Harjoitus 6.1

Tässä koodissa vilkutetaan lediä kolme kertaa. Kuinka muuttaisit koodia, jotta ledi vilkkuisi viisi kertaa?

https://wokwi.com/projects/405449905658573825

# Odottaminen

Toinen `while`  rakenteen käyttötarkoitus on odottaa kunnes jotain tapahtuu. Tämä voidaan yhdistää esimerkiksi `digitalRerad()` funktion paluuarvoon.

```c
while (digitalRead(3) == HIGH) {
	digitalWrite(0, HIGH);
}
digitalWrite(0, LOW);
```

Tässä koodissa pidetään lediä päällä niin kauan kuin pinni kolme on kytketty jännitteeseen. Huomattavaa on myös, että `digitalRead()`  funktion paluuarvoa ei ole erikseen tallennettu muuttujaan, vaan sitä vertaillaan suoraan `HIGH` -arvoon.

### Harjoitus 6.2

Tässä koodissa pidetään lediä päällä niin kauan kuin painike on painettuna. Kuinka koodin saisi vilkuttamaan lediä silloin kun painike on painettuna?

https://wokwi.com/projects/405450663678670849

### Harjoitus 6.3

Aiemmin if-lauseen kanssa käytetty tapa tallentaa `digitalRead()`  funktion paluuarvo muuttujaan ei toimikkaan `while` -rakenteen kanssa. Osaatko selittää, miksi?

```c
int painike = digitalRead(3);
while (painike == HIGH) {
	digitalWrite(0, HIGH);
}
digitalWrite(0, LOW);
```

Ongelmana on, että muuttujan `painike`  arvoa ei päivitetä kutsumalla `digitalRead()`  funktiota uudelleen, joten sen arvo pysyy muuttumattomana toistosta toiseen.

Vaihtoehtoinen tapa tehdä `while` -rakenne muuttujalla olisi siis:

```c
int painike = digitalRead(3);
while (painike == HIGH) {
	digitalWrite(0, HIGH);
	painike = digitalRead(3); // Päivitetään muuttujan 'painike' arvo
}
digitalWrite(0, LOW);
```

Tässä painikkeen arvo päivitetään joka toiston lopussa ennen seuraavaa `while` -rakenteen ehdon tarkistusta.

