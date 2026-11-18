// Builds lib/kb.js (the agent's only knowledge) from the page's own data.
export function buildKB(ctx) {
  const { CASES, HOME, FLAGSHIP, DATA_PROJECTS, MISC_PROJECTS, SOURCES, EDUCATION, EXPERIENCE, ACHIEVEMENTS, CONTACT } = ctx;
  const all = [...FLAGSHIP, ...DATA_PROJECTS, ...MISC_PROJECTS];
  const strip = (s = "") => String(s).replace(/<[^>]+>/g, "");
  const projects = [];
  for (const id of ["traceintel", "aris", "devpulse"]) {
    const c = CASES.find((x) => x.id === id), h = HOME.work[id];
    const results = c.evidence.map(([n, t]) => `${n} ${t}`);
    projects.push({ id, name: c.name, flagship: true, status: h.status || "Live: anyone can try it now.", plain: h.plain, details: `${c.lede} ${c.how}`, results, links: c.links.map((l) => ({ label: `${c.name}: ${id === "aris" && l.primary ? "Saved reports" : l.label}`, href: l.href })),
      text: [c.name, c.kicker, c.lede, c.how, h.plain, ...c.tags, ...results].join(" ").toLowerCase() });
  }
  const o0 = HOME.oss;
  projects.push({ id: "amd-gaia", name: "AMD GAIA (open source)", flagship: true, status: "Merged pull requests in AMD's open-source agent framework.", plain: o0.plain,
    details: o0.changes.join(" "), results: [`${o0.merged.length} merged pull requests`, `${o0.open.length} in review`],
    links: [{ label: "GAIA pull requests", href: SOURCES.find((s) => s.n === 4).href }],
    text: ["amd gaia open source mcp model context protocol client connectors agents framework pull requests", o0.plain, ...o0.changes].join(" ").toLowerCase() });
  for (const m of HOME.more) {
    const p = m.id ? (all.find((x) => x.id === m.id) || CASES.find((x) => x.id === m.id)) : { links: [{ label: "Open", href: m.href }], tags: [] };
    const name = m.name || p.name.split(" | ")[0];
    const desc = strip(p.desc || p.lede || "") + (m.tag ? ` Built at ${m.tag}.` : "");
    projects.push({ id: m.id || name.toLowerCase().replace(/\s+/g, "-"), name, flagship: false, plain: m.plain, details: desc, results: [], links: (p.links || []).slice(0, 2).map((l) => ({ label: `${name}: ${l.label}`, href: l.href })),
      text: [name, m.plain, desc, m.tag || "", "hackathon".repeat(m.tag ? 1 : 0), ...(p.tags || [])].join(" ").toLowerCase() });
  }
  const o = HOME.oss;
  const oss = { gaia: { what: o.plain, merged_changes: o.changes, merged_prs: o.merged.map((n) => `amd/gaia#${n}`), open_prs: o.open.map((p) => `amd/gaia#${p.n}: ${p.text}`) },
    others: o.others.map((x) => `${x.name}: ${x.count}, ${x.text}`), merged_total: o.merged.length + 3 };
  const background = { location: "Kolkata, India", wants: "Full-time AI engineering roles (agents, tool use, MCP). Remote, or relocating anywhere in India.",
    education: EDUCATION.map((e) => `${e.degree}, ${e.school}, ${e.dates}, ${e.meta}`),
    experience: EXPERIENCE.map((e) => `${e.role} at ${e.org}, ${e.dates}. ${e.bullets.join(" ")}`),
    awards: [...ACHIEVEMENTS.map((a) => `${a.title} (${a.org})`), ...HOME.background.filter((b) => b.k === "Award" && !ACHIEVEMENTS.some((x) => x.title.includes(b.title.split(",")[0]))).map((b) => `${b.title}: ${b.text}`)],
    contact: { email: CONTACT.email, linkedin: CONTACT.linkedin, github: CONTACT.github, resume: "https://eshita.dev/assets/Eshita_Kundu_Resume.pdf" } };
  return { projects, oss, background,
    ossLinks: [{ label: "GAIA pull requests", href: SOURCES.find((s) => s.n === 4).href }],
    backgroundLinks: [{ label: "Résumé", href: "/assets/Eshita_Kundu_Resume.pdf" }, { label: "LinkedIn", href: CONTACT.linkedin }] };
}
