# carlosrodrigorivero.github.io

Web CV for Carlos Rodrigo Rivero. Static site, no build step, no dependencies.

**Live:** https://carlosrodrigorivero.github.io
**Main site:** https://carlosrodrigorivero.web.app

A single CV — **IT Director & Innovation** — in Spanish and English, with a
light/dark theme and a download link for the matching PDF.

## Layout

```
index.html      Markup, styles and rendering. Rarely needs touching.
cv-data.js      ALL the content: copy, experience, education, contact details.
assets/photo.jpg Profile photo.
pdf/            The two PDFs (ES/EN) for the IT Director profile.
.nojekyll       Tells GitHub Pages to serve the files as-is.
```

## Changing the content

Edit **`cv-data.js`** and push. That's it.

```bash
git add -A && git commit -m "Update experience" && git push
```

GitHub Pages redeploys on its own within a minute or two. If you don't see the
change, it's the browser cache: Ctrl+F5.

## Regenerating the PDFs

The PDFs come from `../scripts/generate_cvs.py`, which is the source of truth for
the copy. After changing anything there:

```bash
python ../scripts/generate_cvs.py
cp ../CVs/Carlos/Spanish/CV_DirectorIT_Innovacion_CarlosRodrigoRivero.pdf pdf/
cp ../CVs/Carlos/English/CV_ITDirector_Innovation_CarlosRodrigoRivero.pdf pdf/
```

Then mirror the change in `cv-data.js`, which keeps its own copy of the text.

## Publishing more than one profile again

The site supports multiple profiles (Project Manager, Developer); they were
pulled on 15 Sept 2026 to publish only the strongest one. The three-profile
version is kept **outside this repo**, at:

```
../web-archive/cv-data-3profiles.js
```

Copy whichever profile objects you want into the `PROFILES` array in
`cv-data.js`, and their PDFs from `../CVs/Carlos/` into `pdf/`. The profile
switcher reappears by itself as soon as there is more than one.

## Phone number

The phone number is **not** shown on the site by default (it is still in the
PDFs), to keep it away from scrapers. To show it, in `cv-data.js`:

```js
showPhone: true,
```

## Shareable URLs

The language lives in the URL, so you can link straight to either one:

- `https://carlosrodrigorivero.github.io/` — Spanish (default)
- `https://carlosrodrigorivero.github.io/?l=en` — English

## SEO

`index.html` carries a `<link rel="canonical">` pointing at
`carlosrodrigorivero.web.app`. That tells Google which site is the original, so
this one is not treated as duplicate content and the ranking authority is not
split between the two.

**If this ever becomes the main site**, drop that canonical from `index.html` and
update `CONFIG.canonical` in `cv-data.js`.

## Printing

Ctrl+P produces A4 with real vector text, but it runs to three pages: the site
carries the full content, without the trimming that makes the PDF fit on one
sheet. To send the CV to someone, use the **Download PDF** button, which gives
the single-page version.
