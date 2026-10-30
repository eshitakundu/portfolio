# eshita.dev

Source for my portfolio at **[eshita.dev](https://eshita.dev)**: projects, experience and a printable résumé.

## How it's built

A dependency-free static site: hand-written HTML, CSS and vanilla JavaScript, no framework.

| Path | What it does |
|---|---|
| `index.html` | Portfolio page |
| `resume.html` + `css/resume.css` + `js/resume.js` | Web résumé with a print stylesheet |
| `js/data.js` | Single source of truth for projects and experience |
| `js/main.js` | Renders projects from `data.js` and handles interactions |
| `scripts/build.mjs` | Pre-renders the project sections into `index.html` (same renderer as the browser, run in a Node `vm`), then copies the site into `dist/` |
| `_headers` | Cache-control headers for Cloudflare Pages |

Pre-rendering means the projects are in the HTML that search engines and link previews see, while the page still renders the same way in the browser.

## Develop and deploy

```bash
node scripts/build.mjs        # pre-render projects and rebuild dist/
npx serve dist                # preview locally
```

Pushing to `main` deploys `dist/` to Cloudflare Pages.

To add a project, edit `js/data.js` and run the build. Entries with `draft: true` stay off the page.
