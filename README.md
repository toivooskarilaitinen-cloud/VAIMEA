# VAIMEA

Kevyt staattinen esseesivusto. Ei tietokantaa, ei CMS:ää, ei pakollista JavaScriptiä.

## Uuden esseen lisääminen

1. Kopioi `ESSAY_TEMPLATE.md` kansioon `src/esseet/`.
2. Nimeä tiedosto esimerkiksi `oma-esseeni.md`.
3. Muokkaa alun kolmea kenttää:

```yaml
---
title: "Oma otsikko"
date: 2026-08-14
description: "Lyhyt kuvaus."
---
```

4. Kirjoita essee niiden alle tavallisena Markdownina.
5. Tallenna ja puske GitHubiin. GitHub Actions rakentaa sivuston automaattisesti.

Siinä kaikki.

## Paikallinen esikatselu

Tarvitset Node.js 18+.

```bash
npm install
npm run dev
```

Avaa Eleventyn terminaaliin ilmoittama localhost-osoite.

## Tuotantoversio

```bash
npm run build
```

Valmis staattinen sivusto syntyy `_site/`-kansioon. Saman kansion voi myöhemmin tarjoilla myös omalta palvelimelta tai Tor onion -palveluna.

## GitHub Pages

Workflow on valmiina tiedostossa `.github/workflows/deploy-pages.yml`.

GitHubissa: repository → Settings → Pages → Source: **GitHub Actions**.

### Jos repo on käyttäjäsivu

Jos repo on nimeltään `KAYTTAJANIMI.github.io`, nykyinen `npm run build` toimii suoraan.

### Jos repo on projektisivu

Jos osoite on tyyliä `KAYTTAJANIMI.github.io/vaimea/`, vaihda workflow'n Build-rivi:

```yaml
run: npm run build:ghpages
```

Jos reposi nimi ei ole `vaimea`, muuta myös `package.json`-tiedoston `build:ghpages`-komennon pathprefix vastaamaan repon nimeä.

Kun käytössä on oma domain, käytä taas normaalia `npm run build` -komentoa ilman pathprefixiä.

## Missä ulkoasu muuttuu?

- Värit, typografia ja layout: `src/assets/style.css`
- Etusivu: `src/index.njk`
- Esseesivu: `src/_includes/essee.njk`
- Yläpalkki ja footer: `src/_includes/base.njk`
- Manifesti: `src/manifesti/index.md`

## Periaate

Sisältö on tavallisia Markdown-tiedostoja. Jos VAIMEA joskus lähtee GitHub Pagesista, esseitä ei tarvitse siirtää alustasta ulos: ne ovat jo omissa tiedostoissasi.
