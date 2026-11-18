# eshita.dev

Source for my portfolio at **[eshita.dev](https://eshita.dev)**: projects, open source, experience and a printable résumé.

## How it's built

A dependency-free static site: hand-written HTML, CSS and vanilla JavaScript, no framework. One Cloudflare Pages Function powers the optional "Ask my AI agent" panel.

| Path | What it does |
|---|---|
| `index.html` | Portfolio page |
| `resume.html` + `css/resume.css` + `js/resume.js` | Web résumé with a print stylesheet |
| `js/data.js` | Single source of truth for projects, open source and experience |
| `js/main.js` | Renders the sections from `data.js`; demo player, agent panel, motion and small interactions |
| `css/editorial.css` | The site's base look |
| `css/home.css` | Home-page sections, the agent panel and the motion layer |
| `functions/api/ask.js` | The agent: Workers AI (NVIDIA NIM as fallback) with four read-only tools over the site's own data, rate limited |
| `scripts/kb.mjs` | Builds the agent's knowledge (`lib/kb.js`) from `data.js` |
| `scripts/build.mjs` | Pre-renders the sections into `index.html` (same renderer as the browser, run in a Node `vm`), writes `lib/kb.js`, then copies the site into `dist/` |
| `assets/work/` | Short silent loops and stills from the project demos |
| `_headers` | Cache-control headers for Cloudflare Pages |

Pre-rendering means the content is in the HTML that search engines and link previews see, while the page still renders the same way in the browser.

## The agent

The panel only appears when `/api/ask` answers its health check, so the page is complete without it. To turn it on, add a **Workers AI** binding named `AI` to the Pages project (optional fallback: an `NIM_API_KEY` secret). The agent can only answer from `lib/kb.js` and shows each tool call it makes. Add `?agent=mock` to the URL to try the panel locally with canned answers.

## Develop and deploy

```bash
node scripts/build.mjs        # pre-render, rebuild the agent's knowledge and dist/
npx serve dist                # preview locally
```

Pushing to `main` deploys to Cloudflare Pages.

To add a project, edit `js/data.js` and run the build. Entries with `draft: true` stay off the page.
