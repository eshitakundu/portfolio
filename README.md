# Portfolio

Static HTML, CSS, and JavaScript. Open `index.html` through a local HTTP server.

## Updating

- Project content: `js/data.js` and `flagshipSpecs` in `js/main.js`.
- Landing-page signal animation: `js/signal.js`.
- Readable resume: `resume.html`; downloadable original: `assets/Eshita_Kundu_Resume.pdf`.
- Styles: `css/editorial.css` and `css/resume.css`.

Run `node scripts/build.mjs` after changing content. It pre-renders selected projects and the archive into the tracked `index.html`, then copies public files into `dist/`. This keeps projects visible without JavaScript and synchronizes the optional static hosting output. Commit the resulting source changes. No dependencies or installation are required.

The public portfolio is https://eshita.dev and its source is the GitHub origin. The existing `.openai/hosting.json` points to a separate Sites registration; do not change public hosting or access settings merely to update the GitHub portfolio.

Asset query versions in the HTML should change whenever corresponding assets change. `_headers` asks compatible Cloudflare static hosting to revalidate HTML, scripts, styles, and the resume.
