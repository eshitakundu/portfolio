// ============================================================
// main.js | Eshita Kundu portfolio | v4
// Window manager + content renderers + 3D Three.js wallpaper.
// ============================================================
(function () {
  "use strict";

  const $  = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const prefersReducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Flat, filled classic pictograms (not stroke-based line icons) — reads as
  // period desktop-icon clip art instead of a modern icon font.
  const ICON = {
    folder:   `<svg viewBox="0 0 24 24"><path d="M2 6h7l2 2h11v12H2z" fill="currentColor"/><path d="M2 6h7l2 2h11v2H2z" fill="#000" opacity=".22"/></svg>`,
    doc:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="butt" stroke-linejoin="miter"><path d="M5 2h9l5 5v15H5z"/><path d="M14 2v5h5"/><path d="M7.5 12h9M7.5 15h9M7.5 18h6"/></svg>`,
    pdf:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="butt" stroke-linejoin="miter"><path d="M5 2h9l5 5v15H5z"/><path d="M14 2v5h5"/><text x="7" y="18" font-size="6.5" font-family="'Pixelated MS Sans Serif',sans-serif" font-weight="700" stroke="none" fill="currentColor">PDF</text></svg>`,
    trophy:   `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 3h10v6a5 5 0 0 1-10 0z"/><path d="M4 4h3v2a4 4 0 0 1-3-1z"/><path d="M20 4h-3v2a4 4 0 0 0 3-1z"/><path d="M10 15h4v3h-4z"/><path d="M7 20h10v1H7z"/></svg>`,
    person:   `<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="7" r="4"/><path d="M4 21c0-4.5 3.6-7.5 8-7.5s8 3 8 7.5z"/></svg>`,
    mail:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="butt" stroke-linejoin="miter"><path d="M3 5h18v14H3z" fill="#fff"/><path d="M3 5l9 8 9-8"/></svg>`,
    trash:    `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 8h12l-1 13H7z"/><path d="M4 5h16v2H4z"/><path d="M9 3h6v2H9z"/></svg>`,
    link:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="butt" stroke-linejoin="miter"><path d="M13 3h8v8"/><path d="M21 3 11 13"/><path d="M5 6h4v2H7v10h10v-2h2v4H5z"/></svg>`,
    github:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`,
    linkedin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
    phone:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.95.36 1.88.69 2.78a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.33 1.83.56 2.78.69A2 2 0 0 1 22 16.92z"/></svg>`,
    skill:    `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h8v8H3zM13 3h8v8h-8zM13 13h8v8h-8zM3 13h8v8H3z"/></svg>`,
    exp:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="butt" stroke-linejoin="miter"><path d="M3 8h18v11H3z" fill="currentColor" fill-opacity=".18"/><path d="M9 8V5h6v3"/><path d="M3 13h18" stroke-width="1.2"/></svg>`,
  };

  const boot = $("#boot");
  if (boot) {
    const dismiss = () => boot.classList.add("boot-done");
    setTimeout(dismiss, prefersReducedMotion ? 200 : 950);
    boot.addEventListener("click", dismiss);
  }

  const clockEl = $("#clock");
  if (clockEl) {
    const tick = () => {
      const now = new Date();
      clockEl.textContent =
        now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) +
        " | " +
        now.toLocaleDateString([], { weekday: "short", day: "numeric", month: "short" });
    };
    tick(); setInterval(tick, 30000);
  }

  // "light" = Classic (teal desktop, navy titlebar), "dark" = Eggplant (an
  // actual Windows 95 Appearance scheme — not a modern dark mode; window
  // chrome stays silver either way). One-shot reset so v7+ lands on Classic.
  if (!localStorage.getItem("ek-theme-v7")) {
    localStorage.removeItem("ek-theme");
    localStorage.setItem("ek-theme-v7", "1");
  }
  const savedTheme = localStorage.getItem("ek-theme");
  if (savedTheme) document.body.setAttribute("data-theme", savedTheme);
  const themeToggle = $("#themeToggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const next = document.body.getAttribute("data-theme") === "dark" ? "light" : "dark";
      document.body.setAttribute("data-theme", next);
      localStorage.setItem("ek-theme", next);
    });
  }

  function catLabel(tags = []) {
    const t = tags.join(" ").toLowerCase();
    if (/mcp/.test(t))                                    return "MCP";
    if (/agent|agentic|llm/.test(t))                      return "Agentic AI";
    if (/dbt|snowflake|airflow|elt/.test(t))              return "Data Eng.";
    if (/streamlit|tableau|power.?bi|analytics/.test(t))  return "Analytics";
    return "Build";
  }
  // Small animated 8-bit sprites, one per project category — CSS-driven
  // (blink/bounce/flow) so each cover reads as a tiny looping "gif" with
  // no external image files. Slug keys double as the CSS variant class.
  const COVER_SLUG = {
    "Agentic AI": "agentic",
    "MCP":        "mcp",
    "Data Eng.":  "dataeng",
    "Analytics":  "analytics",
    "Build":      "build"
  };
  const COVER_ART = {
    "Agentic AI": "<svg class='cover-art' viewBox='0 0 16 16' shape-rendering='crispEdges' aria-hidden='true'><rect class='cv-antenna' x='7' y='0' width='2' height='2' fill='rgba(0,0,0,.45)'/><rect x='2' y='3' width='12' height='10' fill='#fff' opacity='.95'/><rect x='0' y='6' width='2' height='4' fill='#fff' opacity='.8'/><rect x='14' y='6' width='2' height='4' fill='#fff' opacity='.8'/><rect class='cv-eye' x='4' y='6' width='2' height='3' fill='rgba(0,0,0,.5)'/><rect class='cv-eye' x='10' y='6' width='2' height='3' fill='rgba(0,0,0,.5)'/><rect x='5' y='11' width='6' height='1' fill='rgba(0,0,0,.4)'/></svg>",
    "MCP": "<svg class='cover-art' viewBox='0 0 16 16' shape-rendering='crispEdges' aria-hidden='true'><rect x='6' y='0' width='1' height='3' fill='#fff' opacity='.95'/><rect x='9' y='0' width='1' height='3' fill='#fff' opacity='.95'/><rect x='4' y='3' width='8' height='5' fill='#fff' opacity='.95'/><rect x='5' y='8' width='6' height='3' fill='#fff' opacity='.95'/><rect x='7' y='11' width='2' height='5' fill='#fff' opacity='.95'/><rect class='cv-led cv-led-a' x='6' y='5' width='1' height='1' fill='rgba(0,0,0,.55)'/><rect class='cv-led cv-led-b' x='9' y='5' width='1' height='1' fill='rgba(0,0,0,.55)'/></svg>",
    "Data Eng.": "<svg class='cover-art' viewBox='0 0 16 16' shape-rendering='crispEdges' aria-hidden='true'><rect x='2' y='1' width='10' height='3' fill='#fff' opacity='.95'/><rect x='2' y='6' width='10' height='3' fill='#fff' opacity='.95'/><rect x='2' y='11' width='10' height='3' fill='#fff' opacity='.95'/><rect class='cv-flow cv-flow-1' x='13' y='2' width='1' height='1' fill='rgba(0,0,0,.5)'/><rect class='cv-flow cv-flow-2' x='13' y='7' width='1' height='1' fill='rgba(0,0,0,.5)'/><rect class='cv-flow cv-flow-3' x='13' y='12' width='1' height='1' fill='rgba(0,0,0,.5)'/></svg>",
    "Analytics": "<svg class='cover-art' viewBox='0 0 16 16' shape-rendering='crispEdges' aria-hidden='true'><rect x='1' y='14' width='14' height='1' fill='rgba(0,0,0,.4)'/><rect class='cv-bar cv-bar-1' x='3' y='9' width='2' height='5' fill='#fff' opacity='.95'/><rect class='cv-bar cv-bar-2' x='7' y='6' width='2' height='8' fill='#fff' opacity='.95'/><rect class='cv-bar cv-bar-3' x='11' y='2' width='2' height='12' fill='#fff' opacity='.95'/></svg>",
    "Build": "<svg class='cover-art' viewBox='0 0 16 16' shape-rendering='crispEdges' aria-hidden='true'><rect x='6' y='6' width='2' height='9' fill='#fff' opacity='.95'/><rect class='cv-swing' x='2' y='2' width='9' height='4' fill='#fff' opacity='.95'/><rect class='cv-swing' x='3' y='3' width='2' height='2' fill='rgba(0,0,0,.35)'/></svg>"
  };
  function coverColor(p, cat) {
    const fallbacks = {
      "MCP":        "#d89aff",
      "Agentic AI": "#7ea6ff",
      "Data Eng.":  "#6ee6b4",
      "Analytics":  "#ffd24d",
      "Build":      "#ff9d6e"
    };
    const hexes = (p.hex || []).filter(h => h && h.toLowerCase() !== "#000000" && h.toLowerCase() !== "#ffffff");
    return hexes[0] || fallbacks[cat] || fallbacks["Build"];
  }
  function workCard(p, featured) {
    const cat = catLabel(p.tags);
    const links = (p.links || []).map(l => `<a href="${l.href}" target="_blank" rel="noopener">${l.label}</a>`).join("");
    const tags = (p.tags || []).slice(0, 4).map(t => `<span>${t}</span>`).join("");
    const slug = COVER_SLUG[cat] || "build";
    return `
      <article class="project-card ${featured ? "project-card-featured" : ""}">
        <div class="project-cover cover-art--${slug}" style="background:${coverColor(p, cat)}">
          ${COVER_ART[cat] || COVER_ART["Build"]}
          <span class="cover-cat">${cat}</span>
        </div>
        <h3>${p.name}</h3>
        ${p.caption ? `<p class="project-caption">${p.caption}</p>` : ""}
        <p>${p.desc}</p>
        <div class="project-tags">${tags}</div>
        <div class="project-links">${links}</div>
      </article>`;
  }

  function renderWork() {
    const flagship = (typeof FLAGSHIP !== "undefined" ? FLAGSHIP : []);
    const data = (typeof DATA_PROJECTS !== "undefined" ? DATA_PROJECTS.filter(p => !p.draft) : []);
    const misc = (typeof MISC_PROJECTS !== "undefined" ? MISC_PROJECTS.filter(p => !p.draft) : []);
    const flagshipRows = flagship.map((p, i) => workCard(p, i === 0)).join("");
    const smallRows = [...data, ...misc].map(p => workCard(p, false)).join("");
    return `
      <span class="app-kicker">Selected builds</span>
      <h1 class="app-h">Mostly agentic AI and data engineering.</h1>
      <p class="app-sub">ARIS is live. Everything else links to GitHub.</p>
      <div class="project-grid">${flagshipRows}${smallRows}</div>`;
  }

  function renderExperience() {
    if (typeof EXPERIENCE === "undefined") return "";
    const storyCards = [
      {
        img: "assets/experiences/BRICS_attending.webp",
        kicker: "Dec 2024, Russia",
        title: "wish me luck for BRICS",
        text: "Data sprint, Russia, and no room to freeze."
      },
      {
        img: "assets/experiences/BRICS_winning.webp",
        kicker: "WorldSkills BRICS",
        title: "then I ranked 2nd globally",
        text: "Python, Excel, Tableau, Streamlit, eight hours."
      },
      {
        img: "assets/experiences/japanese_delegates_hosting.webp",
        kicker: "Campus diplomacy",
        title: "hosted Japanese delegates",
        text: "A different kind of engineering: calm rooms, clear words."
      },
      {
        img: "assets/experiences/XPMC.webp",
        kicker: "Federation University XPMC",
        title: "cut 10+ hours a week",
        text: "UiPath workflows for Excel reporting, 70% fewer errors."
      }
    ].map((card, i) => `
      <a class="story-card ${i === 1 ? "story-card-hero" : ""}" href="${card.img}" data-pswp-width="1600" data-pswp-height="1100" target="_blank" rel="noopener">
        <img src="${card.img}" alt="${card.title}" loading="lazy">
        <div class="story-caption">
          <span>${card.kicker}</span>
          <h3>${card.title}</h3>
          <p>${card.text}</p>
        </div>
      </a>`).join("");
    const body = EXPERIENCE.map((e) => `
      <div class="exp-entry">
        <div>
          <div class="exp-dates">${e.dates.replace(/--/g, " to ")}</div>
          <div class="exp-org">${e.org.split(",")[0].trim()}</div>
        </div>
        <div>
          <h3 class="exp-role">${e.role.replace(/--/g, " - ")}</h3>
          <ul class="exp-bullets">${e.bullets.map(b => `<li>${b}</li>`).join("")}</ul>
          ${e.cert ? `<a class="exp-cert" href="${e.cert}" target="_blank" rel="noopener">View certificate</a>` : ""}
        </div>
      </div>`).join("");
    return `
      <span class="app-kicker">Field notes</span>
      <h1 class="app-h">A few photos, then the work experience.</h1>
      <p class="app-sub">BRICS and the XPMC program with Federation University Australia.</p>
      <div class="story-grid">${storyCards}</div>
      <span class="app-kicker exp-mini-kicker">Resume proof</span>
      ${body}`;
  }

  function renderSkills() {
    if (typeof SKILLS === "undefined") return "";
    const rows = Object.entries(SKILLS).map(([cat, items]) => `
      <div class="skill-row">
        <dt class="skill-dt">${cat}</dt>
        <dd class="skill-dd">${items.join(" | ")}</dd>
      </div>`).join("");
    return `
      <span class="app-kicker">Schematic | stack | v4</span>
      <h1 class="app-h">THE TOOLKIT</h1>
      <p class="app-sub">Pulled from the resume.</p>
      <dl class="skill-dl">${rows}</dl>`;
  }

  function renderRecognition() {
    const bricsPhotoHTML = `
      <figure class="achieve-photo">
        <img src="assets/experiences/BRICS_winning.webp" alt="BRICS-FS-36 2nd place podium" loading="lazy">
      </figure>`;
    const achieve = (typeof ACHIEVEMENTS !== "undefined" ? ACHIEVEMENTS : []).map((a, i) => {
      const badge = (a.org.match(/\w+ \d{4}/) || [a.org])[0];
      return `
        <div class="achieve-row">
          <div class="achieve-badge">${badge}</div>
          <div>
            <div class="achieve-title">${a.title}</div>
            <div class="achieve-org">${a.org}</div>
            <p class="achieve-desc">${a.desc}</p>
            ${a.cert ? `<a class="achieve-cert" href="${a.cert}" target="_blank" rel="noopener">View certificate →</a>` : ""}
            ${i === 0 ? bricsPhotoHTML : ""}
          </div>
        </div>`;
    }).join("");

    const allCerts = [
      ...(typeof CERTIFICATIONS !== "undefined" ? CERTIFICATIONS : []),
      ...(typeof CERTIFICATIONS_MORE !== "undefined" ? CERTIFICATIONS_MORE : []),
    ];
    const certs = allCerts.map(c => `
      <a class="cert-pill" href="${c.cert}" target="_blank" rel="noopener">
        <span class="cert-name">${c.name}</span>
        <span class="cert-org">${c.org}${c.date ? " | " + c.date : ""}</span>
      </a>`).join("");

    return `
      <span class="app-kicker">Honours and awards</span>
      <h1 class="app-h">Recognition.</h1>
      <p class="app-sub">Awards and certifications, linked to the source.</p>
      <div class="achieve-list">${achieve}</div>
      <div class="certs-section">
        <span class="app-kicker">Certifications | ${allCerts.length} total</span>
        <div class="certs-grid">${certs}</div>
      </div>`;
  }

  function renderAbout() {
    if (typeof BIO === "undefined") return "";
    const photos = `
      <div class="about-photos">
        <figure class="about-photo">
          <img src="${BIO.photoSrc}" alt="Eshita Kundu portrait" loading="lazy">
          <figcaption>Eshita Kundu | Kolkata | she/her</figcaption>
        </figure>
      </div>`;
    return `
      <span class="app-kicker">Profile | about</span>
      <h1 class="app-h">Hi, I'm Eshita.</h1>
      <p class="app-sub">${BIO.tagline}</p>
      <div class="about-inner">
        <div class="about-body">${BIO.body}</div>
        ${photos}
      </div>`;
  }

  function renderContact() {
    if (typeof CONTACT === "undefined") return "";
    return `
      <div class="contact-app-head">
        <h3>Let's <em>talk</em>.</h3>
        <p>Looking for a full-time role in agentic AI or data engineering.</p>
      </div>
      <div class="contact-links-row">
        <div class="contact-row">
          <a href="mailto:${CONTACT.email}">${ICON.mail} ${CONTACT.email}</a>
          <button class="copy-btn" data-copy="${CONTACT.email}">Copy</button>
        </div>
        <div class="contact-row">
          <a href="${CONTACT.linkedin}" target="_blank" rel="noopener">${ICON.linkedin} LinkedIn</a>
        </div>
        <div class="contact-row">
          <a href="${CONTACT.github}" target="_blank" rel="noopener">${ICON.github} GitHub</a>
        </div>
      </div>`;
  }

  function renderTrash() {
    if (typeof TRASH_PROJECTS === "undefined") return "";
    return `
      <p class="trash-note">Older projects and coursework, not hidden, just not the focus.</p>
      <div class="trash-list">
        ${TRASH_PROJECTS.map(t => `<a href="${t.href}" target="_blank" rel="noopener">${t.name}<span class="arr">↗</span></a>`).join("")}
      </div>`;
  }

  const APPS = {
    work:        { title: "Projects",    glyph: "g-folder", icon: ICON.folder, w: 880, h: 620, render: renderWork,        pinned: true, world: "editorial" },
    experience:  { title: "Experience",  glyph: "g-exp",    icon: ICON.exp,    w: 860, h: 620, render: renderExperience,                world: "vapor"     },
    skills:      { title: "Skills",      glyph: "g-skill",  icon: ICON.skill,  w: 600, h: 480, render: renderSkills,                    world: "blueprint" },
    recognition: { title: "Recognition", glyph: "g-trophy", icon: ICON.trophy, w: 660, h: 560, render: renderRecognition,               world: "y2k"      },
    about:       { title: "About Me",    glyph: "g-person", icon: ICON.person, w: 760, h: 520, render: renderAbout,                     world: "shinkai"   },
    contact:     { title: "Contact",     glyph: "g-mail",   icon: ICON.mail,   w: 480, h: 440, render: renderContact,    pinned: true,  world: "yinyang"   },
    trash:       { title: "Trash",       glyph: "g-trash",  icon: ICON.trash,  w: 500, h: 460, render: renderTrash,                     world: "grunge"    },
  };

  const DESKTOP_ICONS = [
    { id: "work" }, { id: "experience" }, { id: "skills" },
    { id: "recognition" }, { id: "about" }, { id: "contact" },
    { id: "resume", title: "Resume.pdf", glyph: "g-doc", icon: ICON.pdf, badge: "↗",
      action: () => window.open("assets/Eshita_Kundu_Resume.pdf", "_blank", "noopener") },
    { id: "aris-live", title: "ARIS Live", glyph: "g-link", icon: ICON.link, badge: "↗",
      action: () => window.open("https://aris.eshita.dev", "_blank", "noopener") },
    { id: "trash" },
  ];

  const DOCK_PINNED = [
    { id: "resume", title: "Resume.pdf", glyph: "g-doc", icon: ICON.pdf,
      action: () => window.open("assets/Eshita_Kundu_Resume.pdf", "_blank", "noopener") },
    { id: "work" }, { id: "about" }, { id: "contact" },
    { id: "__sep" },
    { id: "github", title: "GitHub", glyph: "g-link", icon: ICON.github,
      action: () => typeof CONTACT !== "undefined" && window.open(CONTACT.github, "_blank", "noopener") },
    { id: "linkedin", title: "LinkedIn", glyph: "g-link", icon: ICON.linkedin,
      action: () => typeof CONTACT !== "undefined" && window.open(CONTACT.linkedin, "_blank", "noopener") },
  ];

  const desktop = $("#desktop");
  const layer   = $("#windowsLayer");
  const dock    = $("#dockItems");
  const open    = {};
  let zCounter  = 10;
  let cascade   = 0;

  function isMobile() { return window.innerWidth <= 760; }

  function focusWindow(id) {
    $$(".win", layer).forEach(w => w.classList.add("win-inactive"));
    const rec = open[id]; if (!rec) return;
    rec.el.classList.remove("win-inactive");
    rec.el.style.zIndex = ++zCounter;
  }
  function updateDockState(id, isOpen) {
    $$(`.dock-item[data-app="${id}"]`).forEach(el => el.classList.toggle("is-open", isOpen));
  }
  function ensureDockEntry(id) {
    if ($(`.dock-item[data-app="${id}"]`, dock)) return;
    const app = APPS[id]; if (!app) return;
    dock.appendChild(makeDockItem({ id, title: app.title, glyph: app.glyph, icon: app.icon }, true));
  }
  function removeDynamicDockEntry(id) {
    if (APPS[id] && APPS[id].pinned) return;
    const el = $(`.dock-item[data-app="${id}"]`, dock);
    if (el) el.remove();
  }
  function closeWindow(id) {
    const rec = open[id]; if (!rec) return;
    rec.el.classList.add("win-closing");
    setTimeout(() => rec.el.remove(), 180);
    delete open[id];
    updateDockState(id, false);
    removeDynamicDockEntry(id);
  }
  function minimizeWindow(id) {
    const rec = open[id]; if (!rec) return;
    rec.el.style.display = "none";
    rec.minimized = true;
  }
  function restoreWindow(id) {
    const rec = open[id]; if (!rec) return;
    rec.el.style.display = "flex";
    rec.minimized = false;
    focusWindow(id);
  }
  function toggleMaximize(id) {
    const rec = open[id]; if (!rec || isMobile()) return;
    const el = rec.el;
    if (!rec.maximized) {
      rec.prevRect = { left: el.style.left, top: el.style.top, width: el.style.width, height: el.style.height };
      const b = desktop.getBoundingClientRect();
      el.style.left = "8px"; el.style.top = "8px";
      el.style.width = (b.width - 16) + "px"; el.style.height = (b.height - 16) + "px";
      rec.maximized = true; el.classList.add("win-max");
    } else {
      Object.assign(el.style, rec.prevRect);
      rec.maximized = false; el.classList.remove("win-max");
    }
  }

  async function initPhotoSwipe(root) {
    const gallery = root.querySelector(".story-grid");
    if (!gallery || gallery.dataset.pswpReady) return;
    gallery.dataset.pswpReady = "1";
    try {
      const module = await import("https://cdn.jsdelivr.net/npm/photoswipe@5.4.4/dist/photoswipe-lightbox.esm.min.js");
      const lightbox = new module.default({
        gallery,
        children: "a.story-card",
        pswpModule: () => import("https://cdn.jsdelivr.net/npm/photoswipe@5.4.4/dist/photoswipe.esm.min.js"),
      });
      lightbox.init();
    } catch (err) {
      console.warn("PhotoSwipe init failed", err);
    }
  }

  function initWindowEnhancements(id, root) {
    if (id === "experience") initPhotoSwipe(root);
  }
  function clampToDesktop(left, top, w, h) {
    const b = desktop.getBoundingClientRect();
    const maxLeft = Math.max(0, b.width - w);
    const maxTop  = Math.max(0, b.height - h);
    return [Math.min(Math.max(0, left), maxLeft), Math.min(Math.max(0, top), maxTop)];
  }
  function makeDraggable(el, titlebar, id) {
    let sx, sy, sl, st, dragging = false;
    const onDown = (e) => {
      if (isMobile() || e.target.closest(".win-traffic")) return;
      dragging = true;
      focusWindow(id);
      const p = e.touches ? e.touches[0] : e;
      sx = p.clientX; sy = p.clientY;
      sl = parseFloat(el.style.left) || 0;
      st = parseFloat(el.style.top)  || 0;
      document.addEventListener("mousemove", onMove);
      document.addEventListener("mouseup", onUp);
      document.addEventListener("touchmove", onMove, { passive: false });
      document.addEventListener("touchend", onUp);
    };
    const onMove = (e) => {
      if (!dragging) return;
      e.preventDefault();
      const p = e.touches ? e.touches[0] : e;
      const dx = p.clientX - sx, dy = p.clientY - sy;
      const [l, t] = clampToDesktop(sl + dx, st + dy, el.offsetWidth, el.offsetHeight);
      el.style.left = l + "px"; el.style.top = t + "px";
    };
    const onUp = () => {
      dragging = false;
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onUp);
      document.removeEventListener("touchmove", onMove);
      document.removeEventListener("touchend", onUp);
    };
    titlebar.addEventListener("mousedown", onDown);
    titlebar.addEventListener("touchstart", onDown, { passive: true });
    titlebar.addEventListener("dblclick", () => toggleMaximize(id));
  }

  function makeResizable(el, handle, id) {
    let sx, sy, sw, sh, resizing = false;
    const onDown = (e) => {
      if (isMobile()) return;
      resizing = true; e.stopPropagation();
      const p = e.touches ? e.touches[0] : e;
      sx = p.clientX; sy = p.clientY;
      sw = el.offsetWidth; sh = el.offsetHeight;
      document.addEventListener("mousemove", onMove);
      document.addEventListener("mouseup", onUp);
    };
    const onMove = (e) => {
      if (!resizing) return;
      const p = e.touches ? e.touches[0] : e;
      const w = Math.max(320, sw + (p.clientX - sx));
      const h = Math.max(240, sh + (p.clientY - sy));
      el.style.width = w + "px"; el.style.height = h + "px";
    };
    const onUp = () => {
      resizing = false;
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onUp);
    };
    handle.addEventListener("mousedown", onDown);
  }

  function openApp(id) {
    if (open[id]) {
      if (open[id].minimized) restoreWindow(id); else focusWindow(id);
      return;
    }
    const app = APPS[id]; if (!app) return;

    const el = document.createElement("div");
    el.className = "win";
    el.dataset.app = id;
    if (app.world) el.dataset.world = app.world;
    el.setAttribute("role", "dialog");
    el.setAttribute("aria-label", app.title);

    const offset = (cascade++ % 6) * 28;
    const w = Math.min(app.w, window.innerWidth - 40);
    const h = Math.min(app.h, window.innerHeight - (isMobile() ? 0 : 140));
    el.style.width  = w + "px";
    el.style.height = h + "px";
    el.style.left   = (72 + offset) + "px";
    el.style.top    = (28 + offset) + "px";
    el.style.zIndex = ++zCounter;

    el.innerHTML = `
      <div class="win-titlebar">
        <div class="win-title">${app.icon} ${app.title}</div>
        <div class="win-traffic">
          <button class="win-min" aria-label="Minimize"></button>
          <button class="win-max-btn" aria-label="Maximize"></button>
          <button class="win-close" aria-label="Close"></button>
        </div>
      </div>
      <div class="win-body">${app.render()}</div>
      <div class="win-resize"></div>
    `;

    layer.appendChild(el);
    open[id] = { el, minimized: false, maximized: false };

    el.querySelector(".win-close").addEventListener("click", () => closeWindow(id));
    el.querySelector(".win-min").addEventListener("click",   () => minimizeWindow(id));
    el.querySelector(".win-max-btn").addEventListener("click", () => toggleMaximize(id));
    el.addEventListener("mousedown", () => focusWindow(id));

    makeDraggable(el, el.querySelector(".win-titlebar"), id);
    makeResizable(el, el.querySelector(".win-resize"), id);

    el.querySelectorAll(".copy-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const val = btn.getAttribute("data-copy");
        navigator.clipboard?.writeText(val).then(() => {
          btn.textContent = "Copied"; btn.classList.add("copied");
          setTimeout(() => { btn.textContent = "Copy"; btn.classList.remove("copied"); }, 1400);
        });
      });
    });

    ensureDockEntry(id);
    updateDockState(id, true);
    focusWindow(id);
    initWindowEnhancements(id, el);
  }

  document.addEventListener("click", (e) => {
    const trigger = e.target.closest("[data-open]");
    if (!trigger) return;
    const id = trigger.getAttribute("data-open");
    if (id) openApp(id);
  });

  function makeDesktopIcon(cfg) {
    const app = APPS[cfg.id] || {};
    const title = cfg.title || app.title;
    const glyph = cfg.glyph || app.glyph;
    const icon  = cfg.icon  || app.icon;
    const el = document.createElement("div");
    el.className = "dicon"; el.tabIndex = 0;
    el.innerHTML = `
      <div class="dicon-glyph ${glyph}">${icon}${cfg.badge ? `<span class="dicon-badge">${cfg.badge}</span>` : ""}</div>
      <div class="dicon-label">${title}</div>`;
    const activate = () => (cfg.action ? cfg.action() : openApp(cfg.id));
    el.addEventListener("click", activate);
    el.addEventListener("keydown", (e) => { if (e.key === "Enter") activate(); });
    return el;
  }
  function makeDockItem(cfg) {
    const app = APPS[cfg.id] || {};
    const title = cfg.title || app.title;
    const glyph = cfg.glyph || app.glyph;
    const icon  = cfg.icon  || app.icon;
    const el = document.createElement("button");
    el.className = "dock-item " + glyph;
    el.dataset.app = cfg.id;
    el.title = title;
    el.innerHTML = `${icon}<span class="dock-running"></span>`;
    el.addEventListener("click", () => (cfg.action ? cfg.action() : openApp(cfg.id)));
    return el;
  }

  const iconsWrap = $("#desktopIcons");
  DESKTOP_ICONS.forEach(cfg => iconsWrap.appendChild(makeDesktopIcon(cfg)));
  DOCK_PINNED.forEach(cfg => {
    if (cfg.id === "__sep") { const s = document.createElement("div"); s.className = "dock-sep"; dock.appendChild(s); return; }
    dock.appendChild(makeDockItem(cfg));
  });

  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    const topId = Object.keys(open).reduce((best, id) => {
      if (open[id].minimized) return best;
      const z = parseInt(open[id].el.style.zIndex || 0, 10);
      return (!best || z > best.z) ? { id, z } : best;
    }, null);
    if (topId) closeWindow(topId.id);
  });

  // ---------------------------------------------------------
  // START MENU | classic Win95 Start button + popup app list.
  // ---------------------------------------------------------
  (function initStartMenu() {
    const btn = $("#startBtn");
    const menu = $("#startMenu");
    if (!btn || !menu) return;

    const ENTRIES = [
      { id: "work",        title: "Projects" },
      { id: "experience",  title: "Experience" },
      { id: "skills",      title: "Skills" },
      { id: "recognition", title: "Recognition" },
      { id: "about",       title: "About me" },
      { id: "contact",     title: "Contact" },
      { id: "__sep" },
      { id: "resume", title: "Resume.pdf",
        action: () => window.open("assets/Eshita_Kundu_Resume.pdf", "_blank", "noopener") },
      { id: "aris-live", title: "ARIS (live)",
        action: () => window.open("https://aris.eshita.dev", "_blank", "noopener") },
      { id: "__sep" },
      { id: "trash", title: "Trash" },
    ];

    menu.innerHTML = ENTRIES.map(e => {
      if (e.id === "__sep") return `<div class="start-menu-sep"></div>`;
      const app = APPS[e.id] || {};
      return `<button class="start-menu-item" data-app="${e.id}">${app.icon || ""}<span>${e.title}</span></button>`;
    }).join("");

    let isOpen = false;
    function setOpen(next) {
      isOpen = next;
      menu.classList.toggle("is-open", isOpen);
      menu.setAttribute("aria-hidden", String(!isOpen));
      btn.setAttribute("aria-expanded", String(isOpen));
      btn.classList.toggle("is-pressed", isOpen);
    }
    btn.addEventListener("click", (e) => { e.stopPropagation(); setOpen(!isOpen); });
    menu.addEventListener("click", (e) => {
      const item = e.target.closest(".start-menu-item");
      if (!item) return;
      const id = item.dataset.app;
      const entry = ENTRIES.find(x => x.id === id);
      if (entry && entry.action) entry.action(); else openApp(id);
      setOpen(false);
    });
    document.addEventListener("click", (e) => {
      if (isOpen && !menu.contains(e.target) && e.target !== btn) setOpen(false);
    });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") setOpen(false); });
  })();

  // ---------------------------------------------------------
  // TERMINAL HERO | looping typewriter over TERMINAL_LINES (data.js).
  // ---------------------------------------------------------
  (function initTerminalHero() {
    const hero = $("#terminalHero");
    const body = $("#termBody");
    const closeBtn = $("#termClose");
    const toggleBtn = $("#termToggle");
    if (!hero || !body || typeof TERMINAL_LINES === "undefined") return;

    function escapeHtml(s) {
      return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }

    if (prefersReducedMotion) {
      body.textContent = TERMINAL_LINES.map(l => l.text).join("\n");
    } else {
      const PROMPT = "C:\\Users\\eshita> ";
      let lineIndex = 0, charIndex = 0;
      let rendered = "";
      let timer = null;
      let running = false;

      function typeSpeed(ch) { return ch === "\n" ? 60 : 14 + Math.random() * 18; }
      function scrollDown() { body.scrollTop = body.scrollHeight; }

      function step() {
        if (!running) return;
        const line = TERMINAL_LINES[lineIndex];
        const prefix = line.cmd ? PROMPT : "";
        const full = prefix + line.text;
        if (charIndex <= full.length) {
          body.innerHTML = escapeHtml(rendered + full.slice(0, charIndex)) + '<span class="term-cursor"></span>';
          scrollDown();
          charIndex++;
          timer = setTimeout(step, typeSpeed(full[charIndex - 1] || ""));
        } else {
          rendered += full + "\n";
          lineIndex++;
          charIndex = 0;
          if (lineIndex >= TERMINAL_LINES.length) {
            // Loop signal: two blank lines, then keep going from the top —
            // scrolls like a real long-running session instead of wiping the screen.
            rendered += "\n\n";
            lineIndex = 0;
          }
          timer = setTimeout(step, 220);
        }
      }

      function start() {
        if (running) return;
        running = true;
        rendered = ""; lineIndex = 0; charIndex = 0;
        body.innerHTML = '<span class="term-cursor"></span>';
        timer = setTimeout(step, 400);
      }
      function stop() {
        running = false;
        if (timer) clearTimeout(timer);
      }

      hero._termStart = start;
      hero._termStop = stop;
      start();
    }

    // Single source of truth for open/closed state — avoids the two buttons
    // getting out of sync (that's what made close/reopen flaky before).
    function setTerminalOpen(open) {
      hero.classList.toggle("is-closed", !open);
      if (open) {
        if (hero._termStart) hero._termStart();
        else if (typeof TERMINAL_LINES !== "undefined" && !body.textContent) {
          body.textContent = TERMINAL_LINES.map(l => l.text).join("\n");
        }
      } else if (hero._termStop) {
        hero._termStop();
      }
      if (toggleBtn) {
        toggleBtn.classList.toggle("is-open", open);
        toggleBtn.title = open ? "Hide terminal" : "Show terminal";
        toggleBtn.setAttribute("aria-pressed", String(open));
      }
    }

    if (closeBtn) {
      closeBtn.type = "button";
      closeBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        setTerminalOpen(false);
      });
    }
    if (toggleBtn) {
      toggleBtn.type = "button";
      toggleBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        setTerminalOpen(hero.classList.contains("is-closed"));
      });
    }
  })();

  // Keep the landing page visible so the 3D scene and pitch do the first sell.

  // Wallpaper is a static retro-desktop gradient (.wallpaper-fallback). No particles, no 3D scene —
  // keeps things era-appropriate (and lighter to load).

  // ---------------------------------------------------------
  // AGENT PET | draggable SVG robot — cursor-tracking eyes, panic state,
  // dangle physics on drag, gravity + landing collision on release.
  // ---------------------------------------------------------
  (function initAgentPet() {
    const pet = document.getElementById("agentPet");
    if (!pet) return;
    const svg = pet.querySelector("svg");
    if (!svg) return;

    const VB_W = 110, VB_H = 130;
    const STORAGE_KEY = "ek-pet-pos-v4";
    const EDGE_PAD   = 8;
    const DOCK_H     = 46;
    const GRAVITY    = 0.85;     // px / frame²
    const AIR_FRIC   = 0.985;    // horizontal air drag
    const BOUNCE     = 0.32;     // vertical restitution on land
    const STOP_VY    = 1.2;      // bounce threshold
    const MAX_VY     = 28;

    // Surfaces the robot can land on (in viewport space, per call).
    // Deliberately dock-only: the terminal panel resizes live as it types,
    // and a robot "perched" on a growing box just sinks into it. Keeping the
    // robot's only resting surface the taskbar keeps it visually fixed.
    function surfacesAt(centerX) {
      const out = [];
      // Dock spans full width.
      out.push({ top: window.innerHeight - DOCK_H, kind: "dock" });
      return out;
    }

    // --- Eye tracking ---------------------------------------------------
    const trackables = [...pet.querySelectorAll(".pet-pupil")].map(el => ({
      el,
      baseX: parseFloat(el.getAttribute("cx")),
      baseY: parseFloat(el.getAttribute("cy")),
      maxOffset: 1.8,
    }));
    let targetCX = window.innerWidth / 2, targetCY = window.innerHeight / 2;
    let curCX = targetCX, curCY = targetCY;
    let trackRaf = null;
    function scheduleTrack() { if (!trackRaf) trackRaf = requestAnimationFrame(trackTick); }
    function onCursorMove(e) {
      const p = e.touches ? e.touches[0] : e;
      targetCX = p.clientX; targetCY = p.clientY;
      scheduleTrack();
    }
    function trackTick() {
      trackRaf = null;
      curCX += (targetCX - curCX) * 0.30;
      curCY += (targetCY - curCY) * 0.30;
      const rect = svg.getBoundingClientRect();
      const sx = rect.width  / VB_W;
      const sy = rect.height / VB_H;
      for (const t of trackables) {
        const eyeX = rect.left + t.baseX * sx;
        const eyeY = rect.top  + t.baseY * sy;
        const dx = curCX - eyeX, dy = curCY - eyeY;
        const r  = Math.min(t.maxOffset, Math.hypot(dx, dy) / 60);
        const a  = Math.atan2(dy, dx);
        t.el.setAttribute("cx", t.baseX + Math.cos(a) * r);
        t.el.setAttribute("cy", t.baseY + Math.sin(a) * r);
      }
      if (Math.abs(targetCX - curCX) > 0.5 || Math.abs(targetCY - curCY) > 0.5) scheduleTrack();
    }
    window.addEventListener("mousemove", onCursorMove, { passive: true });
    window.addEventListener("touchmove", onCursorMove, { passive: true });
    requestAnimationFrame(trackTick);

    // --- Position helpers ----------------------------------------------
    function dims() {
      return { w: pet.offsetWidth || 54, h: pet.offsetHeight || 64 };
    }
    function clampX(x) {
      const { w } = dims();
      return Math.max(EDGE_PAD, Math.min(window.innerWidth - w - EDGE_PAD, x));
    }
    function clampY(y) {
      const { h } = dims();
      // Never let the robot's bottom edge cross into the dock.
      return Math.max(EDGE_PAD, Math.min(window.innerHeight - DOCK_H - h, y));
    }
    function setXY(x, y) {
      pet.style.left = clampX(x) + "px";
      pet.style.top  = clampY(y) + "px";
    }
    function getXY() {
      return {
        x: parseFloat(pet.style.left) || 0,
        y: parseFloat(pet.style.top)  || 0,
      };
    }

    // Place on top of the dock at the right edge.
    function placeOnDock() {
      const { w, h } = dims();
      setXY(window.innerWidth - w - 32, window.innerHeight - DOCK_H - h);
    }

    // Initial placement: saved pos (then gravity-settle) or fresh dock seat.
    requestAnimationFrame(() => {
      const raw = localStorage.getItem(STORAGE_KEY);
      let pos = null;
      if (raw) { try { pos = JSON.parse(raw); } catch (_) {} }
      if (pos && typeof pos.x === "number" && typeof pos.y === "number") {
        setXY(pos.x, pos.y);
        // Settle onto a surface if the saved spot is now airborne.
        startFall(0, 0);
      } else {
        placeOnDock();
      }
    });

    // --- State machine: idle | dragging | falling ----------------------
    let mode = "idle";
    let grabOX = 0, grabOY = 0;
    let lastPX = 0, lastPY = 0, lastT = 0;
    let smoothVelX = 0, smoothVelY = 0;     // px / ms
    let angle = 0, angleVel = 0;
    let vx = 0, vy = 0;                      // px / frame
    let physRaf = null;

    function dragLoop() {
      if (mode !== "dragging") return;
      const targetAngle = Math.max(-26, Math.min(26, -smoothVelX * 22));
      angleVel += (targetAngle - angle) * 0.18;
      angleVel *= 0.78;
      angle += angleVel;
      smoothVelX *= 0.90;
      const t = performance.now() * 0.022;
      const wobble = Math.sin(t * 4.5) * 1.6 + Math.sin(t * 7.1) * 0.7;
      pet.style.transform = `rotate(${(angle + wobble).toFixed(2)}deg)`;
      requestAnimationFrame(dragLoop);
    }

    function startFall(initVx, initVy) {
      mode = "falling";
      vx = initVx;
      vy = initVy;
      if (!physRaf) physRaf = requestAnimationFrame(fallLoop);
    }

    function fallLoop() {
      physRaf = null;
      if (mode !== "falling") return;

      const { w, h } = dims();
      const p = getXY();

      // Step velocity.
      vy = Math.min(MAX_VY, vy + GRAVITY);
      vx *= AIR_FRIC;

      // Spring angle toward 0 so it settles upright while in flight.
      angleVel += (0 - angle) * 0.14;
      angleVel *= 0.85;
      angle += angleVel;

      const newX = clampX(p.x + vx);
      const newY = p.y + vy;
      const curBottom = p.y + h;
      const newBottom = newY + h;
      const centerX  = newX + w / 2;

      // Surface collision check — find the highest surface top that the bottom
      // is about to cross from above.
      let landY = null;
      for (const s of surfacesAt(centerX)) {
        if (s.top >= curBottom - 1 && s.top <= newBottom) {
          if (landY === null || s.top < landY) landY = s.top;
        }
      }

      // Bounce-on-floor fallback (viewport bottom — shouldn't trigger if dock is present).
      if (landY === null && newBottom >= window.innerHeight - EDGE_PAD) {
        landY = window.innerHeight - EDGE_PAD;
      }

      if (landY !== null) {
        // Snap to surface.
        setXY(newX, landY - h);
        // Small bounce if still energetic, else settle.
        if (vy > STOP_VY) {
          vy = -vy * BOUNCE;
          vx *= 0.7;
          physRaf = requestAnimationFrame(fallLoop);
        } else {
          // Land!
          vy = 0; vx = 0;
          angle = 0; angleVel = 0;
          pet.style.transform = "";
          pet.classList.add("is-landing");
          setTimeout(() => pet.classList.remove("is-landing"), 320);
          const pos = getXY();
          localStorage.setItem(STORAGE_KEY, JSON.stringify(pos));
          mode = "idle";
        }
      } else {
        setXY(newX, newY);
        pet.style.transform = `rotate(${angle.toFixed(2)}deg)`;
        physRaf = requestAnimationFrame(fallLoop);
      }
    }

    pet.addEventListener("pointerdown", (e) => {
      // Cancel any in-flight fall.
      if (physRaf) cancelAnimationFrame(physRaf), physRaf = null;
      mode = "dragging";
      const r = pet.getBoundingClientRect();
      grabOX = e.clientX - r.left;
      grabOY = e.clientY - r.top;
      lastPX = e.clientX; lastPY = e.clientY; lastT = performance.now();
      smoothVelX = 0; smoothVelY = 0;
      pet.classList.add("is-panicking");
      try { pet.setPointerCapture(e.pointerId); } catch (_) {}
      requestAnimationFrame(dragLoop);
      e.preventDefault();
    });

    pet.addEventListener("pointermove", (e) => {
      if (mode !== "dragging") return;
      setXY(e.clientX - grabOX, e.clientY - grabOY);
      const now = performance.now();
      const dt  = Math.max(1, now - lastT);
      const dx  = e.clientX - lastPX;
      const dy  = e.clientY - lastPY;
      smoothVelX = smoothVelX * 0.55 + (dx / dt) * 0.45;
      smoothVelY = smoothVelY * 0.55 + (dy / dt) * 0.45;
      lastPX = e.clientX; lastPY = e.clientY; lastT = now;
    });

    function stopDrag(e) {
      if (mode !== "dragging") return;
      pet.classList.remove("is-panicking");
      try { pet.releasePointerCapture(e.pointerId); } catch (_) {}
      // Convert throw velocity (px/ms) to px/frame (~16.67ms) with limits.
      const throwX = Math.max(-22, Math.min(22, smoothVelX * 16));
      const throwY = Math.max(-30, Math.min(30, smoothVelY * 16));
      startFall(throwX, throwY);
    }
    pet.addEventListener("pointerup", stopDrag);
    pet.addEventListener("pointercancel", stopDrag);
  })();

})();
