## Woonnet Haaglanden Bot

Dit is een scriptje dat éénmaal de sociale huurwoning website van Haaglanden scant, dus je moet uiteindelijk zelf bepalen hoe vaak je hem per dag draait (bijvoorbeeld met een cronjob).

### Frequentie

Let goed op dat je de variable `ignoreOlderThanMinutes` goed instelt.

Als je hem bijvoorbeeld elke 5 minuten wil draaien, moet je `ignoreOlderThanMinutes` op 5 zetten anders krijg je elke keer een melding van de woningen die al eerder zijn gevonden.

### Discord bot

Het is ingericht met een Discord bot in gedachten, dus je moet een .env file aanmaken met de volgende variabelen: 

`DISCORD_WEBHOOK_URL = [link naar je discord]`

### Niet alleen haaglanden

main.ts file bevat de constante variable `woonnetUrls`.

Hier kan je je eigen urls (en de extended url van de api) toevoegen, maar let op dat de website van Haaglanden een specifieke structuur heeft die niet per se gelijk zijn aan alle sociale huurwoning websites (zoals die van Regio Midden Holland).

Alle websites waar de sociale huurwoningen kan vinden staan hier:
https://www.woonbond.nl/thema/huren-recht/aanbodsites-sociale-huur/

## Toekomstplannen

- Automatisch laatste tijdstip opslaan in een file zodat je `ignoreOlderThanMinutes` niet hoeft te gebruiken
- In plaats van dat je het met een custom cronjob o.i.d moet draaien, dat de file constant in de achtergrond draait en evt zelf het interval bepaalt