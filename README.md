# carlosrodrigorivero.github.io

CV web de Carlos Rodrigo Rivero. Sitio estático, sin build ni dependencias.

**En vivo:** https://carlosrodrigorivero.github.io
**Web principal:** https://carlosrodrigorivero.web.app

Un único CV — **Director IT & Innovación** — en español e inglés, con tema
claro/oscuro y descarga del PDF correspondiente.

## Estructura

```
index.html      Maquetación, estilos y render. No suele hacer falta tocarlo.
cv-data.js      TODO el contenido: textos, experiencia, formación, contacto.
assets/foto.jpg Foto de perfil.
pdf/            Los 2 PDFs (ES/EN) del perfil Director IT.
.nojekyll       Le dice a GitHub Pages que sirva los ficheros tal cual.
```

## Cambiar el contenido

Edita **`cv-data.js`** y haz push. Nada más.

```bash
git add -A && git commit -m "Actualizar experiencia" && git push
```

GitHub Pages republica solo en 1-2 minutos. Si no ves el cambio, es caché del
navegador: Ctrl+F5.

## Regenerar los PDFs

Los PDFs salen de `../scripts/generate_cvs.py`, que es la fuente de verdad del
texto. Si cambias algo ahí:

```bash
python ../scripts/generate_cvs.py
cp ../CVs/Carlos/Spanish/CV_DirectorIT_Innovacion_CarlosRodrigoRivero.pdf pdf/
cp ../CVs/Carlos/English/CV_ITDirector_Innovation_CarlosRodrigoRivero.pdf pdf/
```

Y replicar el cambio en `cv-data.js`, que lleva su propia copia del texto.

## Volver a publicar varios perfiles

La web soporta varios perfiles (Jefe de Proyecto, Desarrollador); se retiraron el
15 sept 2026 para publicar solo el más fuerte. La versión de 3 perfiles está
guardada **fuera del repo**, en:

```
../web-archivo/cv-data-3perfiles.js
```

Copia los objetos que quieras de ahí al array `PROFILES` de `cv-data.js`, y sus
PDFs desde `../CVs/Carlos/` a `pdf/`. El selector de perfil reaparece solo en
cuanto hay más de uno.

## Teléfono

Por defecto el teléfono **no** se muestra en la web (sí sigue en los PDFs), para
no dejarlo expuesto a scrapers. Para mostrarlo, en `cv-data.js`:

```js
showPhone: true,
```

## URLs compartibles

El idioma va en la URL, así que puedes enlazar directamente uno u otro:

- `https://carlosrodrigorivero.github.io/` — español (por defecto)
- `https://carlosrodrigorivero.github.io/?l=en` — inglés

## SEO

`index.html` lleva `<link rel="canonical">` apuntando a `carlosrodrigorivero.web.app`.
Eso le dice a Google cuál es la web original, para que no trate esta como
contenido duplicado y no reparta la autoridad entre las dos.

**Si algún día esta pasa a ser la principal**, quita ese canonical de `index.html`
y actualiza `CONFIG.canonical` en `cv-data.js`.

## Imprimir

Ctrl+P sobre la web da un A4 con el texto vectorial, pero ocupa 3 páginas: la web
lleva el contenido completo, sin los recortes que hacen que el PDF quepa en una
hoja. Para enviar a alguien, usa el botón **Descargar PDF**, que da el de 1 página.
