// ============================================================
// All site content lives here. Edit this file to update text.
// you should not need to touch index.html or main.js for content changes.
//
// `draft: true` on any item means it will NOT render on the live site.
// it's queued for a real one-liner from Esh. Never flip draft to false
// with invented content; only when a real description is supplied.
// ============================================================

const BIO = {
  name: "Eshita Kundu",
  tagline: "Computer Science graduate (8.80 CGPA). I build LLM agents where code, not the model, makes the final call. Open to full-time AI engineering roles.",
  whisper: "she/her | Kolkata | open to full-time roles",
  photoSrc: "assets/img/avatar-photo.webp",
  body: `
    <p>I built and deployed <strong>ARIS</strong>, a live tool that scores whether a software dependency is safe to adopt. It runs on a self-hosted fork of Heym.</p>
    <p>Most of my time goes into the unglamorous parts: getting scoring logic to give the same answer twice, keeping agent workflows from silently breaking, and building dashboards that hold up once real people start clicking around in them.</p>
    <p>I won <strong>2nd Prize</strong> at the BRICS-FS-36 international final in China, hosted by WorldSkills Russia and partner organizations.</p>
  `
};

// ---- TERMINAL HERO -------------------------------------------------------
// Fake terminal session, typed out and looped in the desktop hero.
// `cmd: true` lines get the "C:\Users\eshita>" prompt prefix; others are
// treated as command output.
const TERMINAL_LINES = [
  { cmd: true, text: "whoami" },
  { text: "eshita kundu - agentic ai engineer, cs graduate" },
  { cmd: true, text: "cat status.txt" },
  { text: "3 agents live · 7 merged OSS PRs · open to full-time roles" },
  { cmd: true, text: "cat awards.txt" },
  { text: "2nd place, BRICS-FS-36 international final (data analysis & viz, china)" },
  { cmd: true, text: "ls skills/" },
  { text: "python  fastapi  llm-agents  mcp  evals  postgres  docker" },
  { cmd: true, text: "ps --running" },
  { text: "TraceIntel.exe      RUNNING" },
  { text: "DevPulse.exe        RUNNING" },
  { text: "ARIS.exe            RUNNING" },
  { text: "job-search.exe      RUNNING" },
  { cmd: true, text: "contact --email" },
  { text: "eshita.kundu.2026@gmail.com" },
];

const CONTACT = {
  twitter: "https://x.com/EshitaKunn",
  email: "eshita.kundu.2026@gmail.com",
  linkedin: "https://linkedin.com/in/eshitakundu",
  github: "https://github.com/eshitakundu"
};

// ---- CASE FILES (the three flagship projects at the top of the page) ------
// Every number here is from the project's repo, CI or a recorded live run.
// `evidence` rows are [figure, what it measures]. Keep them checkable.
const CASES = [
  {
    id: "traceintel",
    theme: "blue",
    kicker: "Security agent for Ethereum and Monad",
    name: "TraceIntel",
    host: "traceintel.eshita.dev",
    media: { video: "assets/work/traceintel.mp4", poster: "assets/work/traceintel.jpg", alt: "TraceIntel report: the agent's briefing and a THEN to NOW comparison of a token permission" },
    lede: "Paste an old transaction and see which token permissions it left behind are still live, explained by an agent that may only cite verified evidence.",
    evidence: [
      ["24", "offline evals in CI, 5 of them adversarial", 7],
      ["0", "ungrounded claims in live runs on 2 models", 7],
      ["7/8", "correct advice end to end on a free model", 7],
      ["101", "pytest, Vitest and Playwright tests", 8]
    ],
    how: "A NOOA planner calls 3 typed, read-only tools under a budget enforced in code. The reporter can only cite claims the tools verified, and falls back to a deterministic report.", howCite: 7,
    tags: ["NOOA", "FastAPI", "PostgreSQL", "React + TypeScript", "Cloudflare Workers"],
    links: [
      { label: "Open live", href: "https://traceintel.eshita.dev", primary: true },
      { label: "Watch 1:33 demo", href: "https://drive.google.com/file/d/1-5eEX6gudDaP5FLFxx9WotcHQ9CJlThD/view?usp=drive_link" },
      { label: "Code", href: "https://github.com/eshitakundu/TraceIntel" }
    ]
  },
  {
    id: "aris",
    theme: "dark",
    kicker: "Multi-agent workflow for adopting dependencies",
    name: "ARIS",
    host: "aris.eshita.dev",
    media: { video: "assets/work/aris.mp4", poster: "assets/work/aris.jpg", alt: "ARIS run console: seven evidence branches filling in, ending in a Keep 72.6 verdict" },
    lede: "Name a package and point ARIS at your repo. Seven parallel branches gather evidence from 8 sources, and you get an emailed brief with an adopt, trial, hold or avoid verdict.",
    evidence: [
      ["104", "node DAG with 7 evidence branches running in parallel", 9],
      ["18", "Python nodes compute every score; LLMs only extract and narrate", 9],
      ["38", "scoring tests in CI", 10]
    ],
    how: "Runs on my self-hosted fork of Heym. I proposed its Python exec node upstream, and the maintainers of the 1.7K-star project shipped it as a native feature.", howCite: 19,
    tags: ["Heym", "Python", "NVIDIA NIM", "GitHub / OSV / Tavily", "Docker + Cloudflare Tunnel"],
    links: [
      { label: "Open live", href: "https://aris.eshita.dev", primary: true },
      { label: "Watch 1:21 demo", href: "https://drive.google.com/file/d/1jML5SADdQUz9jS4FM7lG59d3zc-DFHqd/view?usp=sharing" },
      { label: "Code", href: "https://github.com/eshitakundu/ARIS" }
    ]
  },
  {
    id: "devpulse",
    theme: "orange",
    kicker: "Grounded summaries of Hacker News",
    name: "DevPulse",
    host: "devpulse.eshita.dev",
    media: { image: "assets/work/devpulse.jpg", alt: "DevPulse report for Bun: pros and cons, each quoting a real Hacker News comment" },
    lede: "Ask what developers think of a tool and get pros and cons where every point quotes a real Hacker News comment and links to it.",
    evidence: [
      ["149", "verbatim-cited points in a live run over 20 tools", 12],
      ["18/19", "model reports passed the quote validator", 12],
      ["0.27 s", "cached response, down from 17.8 s, with Cloudflare D1", 12]
    ],
    how: "The model only proposes. A validator keeps a point only if its quote appears word for word in the comment it cites, with one repair round and a rule-based fallback.", howCite: 13,
    tags: ["Python", "FastAPI", "Pydantic", "OpenRouter", "Cloudflare Workers + D1"],
    links: [
      { label: "Open live", href: "https://devpulse.eshita.dev/?tool=Bun", primary: true },
      { label: "Code", href: "https://github.com/eshitakundu/DevPulse" }
    ]
  },
  {
    id: "agon",
    theme: "dark",
    kicker: "Hackathon agent, Colosseum · MCP + Solana",
    name: "Agon",
    host: "agon-landing-mu.vercel.app",
    media: { image: "assets/work/agon.jpg", alt: "Agon landing page: a guardrailed AI trading agent" },
    lede: "A team hackathon build: an MCP server that lets AI clients like Claude Code research Solana tokens and paper-trade them, with a guard the model can't talk its way past.",
    evidence: [
      ["8", "typed MCP tools for research and paper trading", 18],
      ["100+", "registered accounts during the hackathon", 20],
      ["~3 µs", "per trade decision by a guard with no network or model calls", 18]
    ],
    how: "I co-designed the MCP server and specified the deterministic trade guard that caps size and slippage outside the LLM. Uncertain outcomes fail closed.",
    howCite: 18,
    tags: ["TypeScript", "MCP", "Solana", "Jupiter API"],
    links: [
      { label: "Open site", href: "https://agon-landing-mu.vercel.app", primary: true },
      { label: "Watch demo", href: "https://youtu.be/2ded1QWIE_g" }
    ]
  }
];

// ---- SOURCES -------------------------------------------------------------
// The page cites its own claims. Numbers are fixed in order of first use;
// index.html writes <a class="cite" href="#s4">4</a> by hand for static text,
// and CASES evidence rows carry the source number as a third element.
const SOURCES = [
  { n: 1, type: "Live", title: "TraceIntel, running", href: "https://traceintel.eshita.dev" },
  { n: 2, type: "Live", title: "ARIS, running", href: "https://aris.eshita.dev" },
  { n: 3, type: "Live", title: "DevPulse, running", href: "https://devpulse.eshita.dev/?tool=Bun" },
  { n: 4, type: "PRs", title: "My merged pull requests in amd/gaia", href: "https://github.com/amd/gaia/pulls?q=is%3Apr+author%3Aeshitakundu+is%3Amerged" },
  { n: 5, type: "Credential", title: "BRICS-FS-36 second prize certificate", href: "https://drive.google.com/file/d/1eUbbKUpUdZsSF0-W7ApcbcmyK6M2rRP9/view?usp=drive_link" },
  { n: 6, type: "Credential", title: "EL Excellence Award, Top 50 Learner", href: "https://drive.google.com/file/d/1GGTMfMh05PWTjIRcA4W3HnQFWSENJk-e/view" },
  { n: 7, type: "Code", title: "TraceIntel offline evals and live-run results", href: "https://github.com/eshitakundu/TraceIntel/tree/main/evals" },
  { n: 8, type: "CI", title: "TraceIntel CI: tests and evals on every push", href: "https://github.com/eshitakundu/TraceIntel/actions/workflows/ci.yml" },
  { n: 9, type: "Code", title: "ARIS workflow graph and scoring nodes", href: "https://github.com/eshitakundu/ARIS/tree/main/workflows" },
  { n: 10, type: "CI", title: "ARIS scoring tests", href: "https://github.com/eshitakundu/ARIS/actions/workflows/tests.yml" },
  { n: 11, type: "Docs", title: "ARIS README: architecture and the Heym Code node", href: "https://github.com/eshitakundu/ARIS#readme" },
  { n: 12, type: "Data", title: "DevPulse live benchmark over 20 tools, 17 Nov 2026", href: "https://github.com/eshitakundu/DevPulse/blob/main/evals/results/live-2026-11-17.json" },
  { n: 13, type: "CI", title: "DevPulse CI: guardrail eval and tests", href: "https://github.com/eshitakundu/DevPulse/actions/workflows/ci.yml" },
  { n: 14, type: "PRs", title: "My merged pull requests in CrossGL/crosstl", href: "https://github.com/CrossGL/crosstl/pulls?q=is%3Apr+author%3Aeshitakundu+is%3Amerged" },
  { n: 15, type: "PR", title: "ai-engineering-from-scratch #720", href: "https://github.com/rohitg00/ai-engineering-from-scratch/pull/720" },
  { n: 16, type: "Credential", title: "XPMC automation work, Federation University Australia", href: "https://drive.google.com/file/d/1UYP0-IhTqH1KCa6GsnZkKMWBa8agiodJ/view?usp=sharing" },
  { n: 17, type: "Code", title: "Study Buddy MCP server", href: "https://github.com/eshitakundu/study-buddy" },
  { n: 18, type: "Video", title: "Agon hackathon demo", href: "https://youtu.be/2ded1QWIE_g" },
  { n: 19, type: "Discussion", title: "Heym maintainers ship the proposed Python node (#136)", href: "https://github.com/heymrun/heym/discussions/136" },
  { n: 20, type: "Live", title: "Agon landing page", href: "https://agon-landing-mu.vercel.app" },
  { n: 21, type: "Recommendation", title: "LinkedIn recommendation, XPMC program", href: "https://www.linkedin.com/in/eshitakundu/details/recommendations/" }
];

// ---- KEE: the agent who runs the hero --------------------------------------
// Each scene: Kee walks to `side`, takes a `pose` (props +
// expression), and the opposite half shows `big` type, a short `note` and a few
// `facts`. `cites` are SOURCES numbers; lines without cites are Eshita's own words.
const KEE_TOPICS = [
  { id: "intro", label: "about()", sub: "who she is", pose: "wave", side: "left", wash: "#e6e0d2", inkTone: "#22201c",
    kicker: "Hello", big: "I'm Eshita.",
    note: "I build AI agents, and the checks that stop them from making things up.",
    facts: [
      { title: "AI engineer", text: "Kolkata, India" },
      { title: "B.Tech, Computer Science", text: "CGPA 8.80" },
      { title: "3 agents live", text: "TraceIntel, ARIS, DevPulse", cites: [1, 2, 3], go: "#work" }
    ] },
  { id: "projects", label: "projects()", sub: "3 agents, live", pose: "laptop", side: "left", wash: "#d2dbe7", inkTone: "#22201c",
    kicker: "Projects", big: "3 agents, all live",
    note: "Open any of them right now.",
    facts: [
      { img: "assets/work/traceintel.jpg", title: "TraceIntel", text: "Which token permissions did an old transaction leave behind?", cites: [1, 7], go: "#project-traceintel" },
      { img: "assets/work/aris.jpg", title: "ARIS", text: "Should this dependency enter your stack? A scored brief, by email.", cites: [2, 9], go: "#project-aris" },
      { img: "assets/work/devpulse.jpg", title: "DevPulse", text: "What Hacker News really thinks of a tool, quote by quote.", cites: [3, 12], go: "#project-devpulse" }
    ] },
  { id: "trust", label: "verify()", sub: "how she tests", pose: "detective", side: "right", wash: "#d5e4da", inkTone: "#22201c",
    kicker: "How I test", big: "0 made-up claims",
    note: "in TraceIntel's live runs, on two different models.", noteCites: [7],
    facts: [
      { title: "24 evals in CI", text: "5 of them try to trick the model.", cites: [7, 8] },
      { title: "149 quotes", text: "checked word for word by DevPulse's validator.", cites: [12] },
      { title: "38 scoring tests", text: "ARIS's maths is Python, not the model.", cites: [10] }
    ] },
  { id: "oss", label: "open_source()", sub: "8 merged PRs", pose: "flag", side: "right", wash: "#dfd9ea", inkTone: "#22201c",
    kicker: "Open source", big: "8 merged PRs",
    note: "across 3 projects, mostly AMD's agent framework.", noteCites: [4, 14, 15],
    facts: [
      { title: "AMD GAIA", text: "5 merged, 2 open. The MCP client and bridge.", cites: [4], go: "#open-source" },
      { title: "Honorable mentions", text: "CrossGL's shader compiler (2) and ai-engineering-from-scratch (1).", cites: [14, 15] }
    ] },
  { id: "awards", label: "awards()", sub: "2nd, BRICS final", pose: "trophy", side: "left", wash: "#ecdcbd", inkTone: "#22201c",
    kicker: "Awards", big: "2nd place",
    note: "BRICS-FS-36 Data Analysis and Visualization, international final, China, 2024.", noteCites: [5],
    facts: [
      { img: "assets/experiences/BRICS_winning.webp", title: "The announcement", text: "Second prize, data analysis and visualization." },
      { title: "Top 50 Learner", text: "Federation University Australia, 2026.", cites: [6] }
    ] },
  { id: "hire", label: "contact()", sub: "say hi", pose: "letter", side: "right", wash: "#ead4cc", inkTone: "#22201c",
    kicker: "Contact", big: "Say hi",
    note: "Looking for full-time AI engineering roles. Remote, or relocating within India.",
    facts: [
      { contact: true },
      { title: "Résumé", text: "Everything on one page.", go: "resume.html", goLabel: "Open it" }
    ] }
];

// Smaller builds, listed compactly under the case files (ids from the lists below).
const BUILD_ORDER = ["jev-flow", "study-buddy-mcp", "github-ranker-mcp", "deep-research-agent", "nooa-mini-lab", "mcp-devops-hub", "lost-media-detective", "mcp-api-key-server", "hn-mcp", "flowchart-mcp", "demo-mcp-server", "daily-tech-digest-live", "repobrief", "reply-radar", "moodify", "netflix-elt-dbt-live"];
const EARLIER_ORDER = ["elearning-analytics-dbt", "disease-outbreak-predictor", "ecommerce-spending", "espresso-yourself", "vbs-calculator"];

// ---- RESUME SECTIONS (mirrors jake.tex exactly; do not add unproven claims) --

const EDUCATION = [
  {
    school: "Sister Nivedita University",
    dates: "Jun 2022 - Jun 2026",
    degree: "B.Tech in Computer Science and Engineering",
    meta: "CGPA: 8.80 / 10"
  }
];

const EXPERIENCE = [
  {
    org: "Employability.life (XPMC Program), Federation University Australia",
    cert: "https://drive.google.com/file/d/1UYP0-IhTqH1KCa6GsnZkKMWBa8agiodJ/view?usp=sharing",
    dates: "Sep 2024 - Nov 2024",
    role: "Automation Developer & Business Analyst (Top 50 Learner award)",
    location: "Kolkata, India",
    bullets: [
      "Gathered requirements from client documents and authored Process Design Documents (PDDs) across Agile sprints, owning testing and stakeholder sign-off.",
      "Built a UiPath web-automation bot that turns PDF data into submitted online forms, cutting batch entry to seconds.",
      "Automated vendor receipt processing with OCR and intelligent document processing (UiPath Document Understanding) into Excel reports: 10+ hours saved weekly, 70% fewer errors."
    ]
  }
];

const ACHIEVEMENTS = [
  {
    title: "2nd Place - BRICS-FS-36 Data Analysis & Visualization",
    cert: "https://drive.google.com/file/d/1eUbbKUpUdZsSF0-W7ApcbcmyK6M2rRP9/view?usp=drive_link",
    org: "International final, China · Dec 2024",
    desc: "Won 2nd Prize in the international final held in China and hosted by WorldSkills Russia and partner organizations."
  },
  {
    title: "EL Excellence Award - Top 50 Learner",
    cert: "https://drive.google.com/file/d/1GGTMfMh05PWTjIRcA4W3HnQFWSENJk-e/view",
    citation: "https://drive.google.com/file/d/1YVZL-pyKFrt_LN6Briw1cF5UIUr_n_7M/view",
    org: "Federation University Australia, Feb 2026",
    desc: "Selected among the program’s Top 50 Learners; citation co-signed by both organizations' COO and CEO."
  }
];

const CERTIFICATIONS = [
  { name: "Applied ML in Python", cert: "https://drive.google.com/file/d/1VJWcxqMfhzTZrcLeHnlotZAyNLGY2VhV/view?usp=sharing", org: "University of Michigan", date: "Apr 2025" },
  { name: "OCI AI Foundations", cert: "https://drive.google.com/file/d/11d-zq13ilOsTe8kAMNJ35lhlTo-YA5TA/view?usp=sharing", org: "Oracle", date: "2026" },
  { name: "MCP Mastery", cert: "https://drive.google.com/file/d/18AgmTAJGU2zwegKp96C6OH06Ux1U24bx/view?usp=sharing", org: "Coursera", date: "2026" },
  { name: "SQL", cert: "https://drive.google.com/file/d/10pEUAIvh9mh0-mswEgHcz70reCDYTkTn/view?usp=sharing", org: "University of Colorado Boulder", date: "Apr 2025" }
];

// Matched directly to the Drive links Esh sent (filenames confirmed by
// fetching each link's title). Linked straight to Drive like the rest of
// CERTIFICATIONS, no local file copy needed.
const CERTIFICATIONS_MORE = [
  { name: "Google Business Intelligence", org: "Google", cert: "https://drive.google.com/file/d/1mNmnKZC7PrGra5U6kKfpYND2YIV0zMtv/view?usp=drive_link" },
  { name: "Oracle Visual Builder (VBCS)", org: "Oracle", cert: "https://drive.google.com/file/d/1I2WwVDHPvaEbkhyw4hm6XGJAKKqC1EIj/view" },
  { name: "Network Security Management", org: "Chongqing Polytechnic", cert: "https://drive.google.com/file/d/1Oh54b18EynwooDJe9FAzwpiEAIBo9eVz/view?usp=sharing" },
  { name: "Job Simulation", org: "Forage", cert: "https://drive.google.com/file/d/14myZWQII6nwkJpEKSx2b0hLYF-oateOz/view?usp=sharing" },
  { name: "XPMC Work Readiness Program Report", org: "Federation University Australia", cert: "https://drive.google.com/file/d/12Rs7PjVmIKwllaCDCizftFmEKKvSpB_O/view?usp=sharing" },
  { name: "Data Science", org: "Internshala", cert: "https://drive.google.com/file/d/1JWIchjJfJ6HGZRRpu7cLJ8Db23VIaZYa/view?usp=sharing" },
  { name: "NSDC", org: "Internshala", cert: "https://drive.google.com/file/d/1bIvUX8Vp0f8O-hgUYQBwuOYPZcn_GaZU/view?usp=sharing" },
  { name: "AICTE Internship", org: "AICTE", cert: "https://drive.google.com/file/d/1VxtdG1Asu9mI2xC9VTSupmY1NGKet3xi/view?usp=sharing" },
  { name: "Data Analytics Essentials", org: "CISCO", cert: "https://drive.google.com/file/d/1qbez9dkHCUw4WrLxaGpaUD01ZZVORYRO/view?usp=sharing" },
  { name: "PRAYAS 2024", org: "", cert: "https://drive.google.com/file/d/1Zq0Yrm_673zGfjQP2Fzi01vTTBW6cq4W/view?usp=sharing" }
];

const SKILLS = {
  "Languages": ["JavaScript", "Python", "SQL"],
  "GenAI & Agentic AI": [ "LLM agents", "agent orchestration", "MCP", "NVIDIA NIM APIs", "agent eval design", "grounding validators"],
  "Data Engineering": ["dbt", "Snowflake", "AWS S3", "Apache Airflow", "ELT Pipelines", "PostgreSQL"],
  "Analytics & BI": ["Apache Superset", "Tableau", "Power BI", "Excel", "Streamlit", "scikit-learn"],
  "Tools & Infra": ["GitHub Actions", "Herdr", "tmux", "Docker", "CI/CD", "Git", "REST APIs", "UiPath (RPA)", "Oracle VBCS"]
};

// ---- PROJECTS -----------------------------------------------------------

// Flagship / detailed projects get the full annotated-diagram treatment.
// Current deployed work leads; keep descriptions grounded in implementation.
const FLAGSHIP = [
  {
    id: "traceintel",
    name: "TraceIntel",
    flagship: true,
    hex: ["#6699FF", "#8FC97A"],
    caption: "the transaction finished. what permissions are still active?",
    desc: "On-chain exposure agent for Ethereum and Monad. Decodes every ERC-20 approval in a transaction and compares historical permissions with current allowance, owner balance, and spender code in a THEN → NOW view. A NOOA planner calls 3 typed read-only tools under a code-enforced budget; a reporter cites only verified claims, with a deterministic fallback. 24 offline evals (5 adversarial) and 101 tests run in CI, and live runs on 2 models produced 0 ungrounded claims.",
    tags: ["NOOA", "FastAPI", "PostgreSQL", "React + TypeScript", "Ethereum + Monad"],
    links: [
      { label: "Live", href: "https://traceintel.eshita.dev" },
      { label: "Demo", href: "https://drive.google.com/file/d/1-5eEX6gudDaP5FLFxx9WotcHQ9CJlThD/view?usp=drive_link" },
      { label: "GitHub", href: "https://github.com/eshitakundu/TraceIntel" }
    ]
  },
  {
    id: "aris",
    name: "ARIS | Technology Adoption Intelligence",
    flagship: true,
    hex: ["#6699FF", "#99CCFF", "#8FC97A", "#000000"],
    caption: "a multi-agent verdict engine for 'should we adopt this dependency?'",
    desc: "Agent workflow that scores a software dependency against your repo across 6 weighted dimensions and emails a verdict-backed Adoption Brief. A 104-node DAG with 7 parallel evidence branches runs on a self-hosted Heym fork; LLMs only extract and narrate, while 18 Python nodes compute every score, covered by 38 tests in CI. I proposed the Python exec node to Heym, and its maintainers shipped it as a native Code node. Ran with Docker Compose on a DigitalOcean droplet behind a Cloudflare Tunnel.",
    tags: ["Heym self-hosted fork", "PythonExec node", "LLM Agents", "NVIDIA NIM", "GitHub/OSV/Tavily APIs"],
    links: [
      { label: "Live", href: "https://aris.eshita.dev" },
      { label: "Demo", href: "https://drive.google.com/file/d/1jML5SADdQUz9jS4FM7lG59d3zc-DFHqd/view?usp=sharing" },
      { label: "GitHub", href: "https://github.com/eshitakundu/ARIS" }
    ]
  },
  {
    id: "devpulse",
    name: "DevPulse | Grounded Opinions from Hacker News",
    hex: ["#FFD84D", "#6699FF"],
    caption: "what do developers actually say about a tool?",
    desc: "Reads the Hacker News threads about a developer tool and returns pros and cons where every point quotes a real comment and links to it. The model only proposes; a validator keeps a point only if its quote appears word for word in the comment it cites, with one repair round and a rule-based fallback. In a live run over 20 tools, the model wrote 18 of 19 reports that passed validation (149 verbatim-cited points), and the D1 cache cut response time from 17.8 s to 0.27 s. Runs as a Python Worker on Cloudflare.",
    tags: ["Python", "FastAPI", "Pydantic", "OpenRouter", "Cloudflare Workers + D1"],
    links: [
      { label: "Live", href: "https://devpulse.eshita.dev/?tool=Bun" },
      { label: "GitHub", href: "https://github.com/eshitakundu/DevPulse" }
    ]
  },
  {
    id: "jev-flow",
    name: "Jev Flow | Support Triage with Human Review",
    hex: ["#8FC97A", "#000000"],
    caption: "the model answers typed questions; a tested policy routes",
    desc: "Support-triage inbox where an LLM answers typed questions and a deterministic, tested policy routes each message, with human review below a confidence threshold. Changing the threshold reroutes instantly without a new model call.",
    tags: ["TypeScript", "Next.js", "Zod", "React Flow", "Human-in-the-loop"],
    links: [
      { label: "Live", href: "https://jevflow.eshita.dev" },
      { label: "GitHub", href: "https://github.com/eshitakundu/jev-flow" }
    ]
  },
  {
    id: "agon",
    name: "Agon | Guardrailed AI Trading Agent",
    hex: ["#000000", "#FFD84D"],
    caption: "give your trading agent a budget, not your keys",
    desc: "Team hackathon project with 100+ registered accounts. Co-designed an MCP server that lets AI clients such as Claude Code research Solana tokens and paper-trade at live Jupiter prices through 8 typed tools. A deterministic guard outside the LLM enforces spending caps and slippage limits before signing: a pure function with 0 network or model calls that decides in about 3 µs. Uncertain trade outcomes fail closed with no blind retries.",
    tags: ["TypeScript", "MCP", "Solana", "Jupiter API", "Agent guardrails"],
    links: [
      { label: "Site", href: "https://agon-landing-mu.vercel.app" },
      { label: "Demo", href: "https://youtu.be/2ded1QWIE_g" }
    ]
  },
  {
    id: "deep-research-agent",
    name: "Deep Research Agent",
    hex: ["#99CCFF", "#8FC97A"],
    caption: "three agents, one research question, run in parallel",
    desc: "Multi-agent research orchestration on Heym. Three agents (web search, document analysis, trend analysis) run on the same question at once, then fold their findings into one brief.",
    tags: ["Python", "Multi-Agent", "LLM", "Tavily", "NVIDIA NIM", "Agentic AI"],
    links: [{ label: "GitHub", href: "https://github.com/eshitakundu/deep-research-agent" }]
  },
  {
    id: "mcp-devops-hub",
    name: "MCP Driven DevOps Orchestration Hub",
    hex: ["#000000", "#FFD84D", "#F5A3C7"],
    caption: "chat-driven DevOps jobs through fixed agent skills",
    desc: "Team-built DevOps job runner where I built the OpenClaw agent layer: a Telegram bot and 6 fixed, argument-free skills for network, system, and login checks, job-status reports, and failed-job log analysis.",
    tags: ["OpenClaw", "Telegram Bot", "Agent Skills", "Node.js", "REST APIs"],
    links: [
      { label: "GitHub", href: "https://github.com/Mouli51ch/Devops-Automation/tree/feature/openclaw-agent" },
      { label: "Demo", href: "https://drive.google.com/file/d/1hDGKNvoISSvxF2wnWiTTDwlYouhe_ICL/view?usp=sharing" }
    ]
  },
  {
    id: "study-buddy-mcp",
    name: "Study Buddy MCP | Personal Study System",
    hex: ["#F5A3C7", "#6699FF"],
    caption: "a personal MCP server for studying, doubling as a full protocol reference",
    desc: "Python MCP server exposing 13 tools, 3 resources, and 4 prompts across the full set of MCP primitives, giving Claude structured, path-traversal-safe access to personal study notes and past-year question papers, with PDF, DOCX, and image support. SQLite-backed mastery tracking with fuzzy topic matching prevents silent duplicate topics. Built for the Codédex Monthly Challenge, June 2026.",
    tags: ["Python", "MCP", "SQLite", "Pydantic", "uv"],
    links: [{ label: "GitHub", href: "https://github.com/eshitakundu/study-buddy" }]
  },
  {
    id: "github-ranker-mcp",
    name: "GitHub Ranker | Remote MCP Server",
    hex: ["#6699FF", "#000000"],
    caption: "ranks candidates against a job description, automatically",
    desc: "A remote MCP server that ranks GitHub candidates against job requirements using FastMCP + the GitHub API.",
    tags: ["Python", "GitHub API", "MCP", "FastMCP", "httpx", "Render"],
    links: [{ label: "GitHub", href: "https://github.com/eshitakundu/github-ranker-remote-mcp-server" }]
  },
  {
    id: "flowchart-mcp",
    name: "Flowchart MCP Server",
    hex: ["#8FC97A", "#000000"],
    caption: "describe a process in English, get a flowchart back",
    desc: "MCP server that lets Claude generate academic-quality flowcharts from natural language or code.",
    tags: ["Python", "SVG", "Graphviz", "MCP", "Automation"],
    links: [{ label: "GitHub", href: "https://github.com/eshitakundu/flowchart-mcp-server" }]
  },
  {
    id: "hn-mcp",
    name: "Hacker News MCP Server",
    hex: ["#FFD84D", "#000000"],
    caption: "Hacker News, exposed as MCP tools",
    desc: "MCP server that exposes Hacker News as tools, resources, and prompts, built on the official Python MCP SDK.",
    tags: ["Python", "Hacker News", "MCP", "Model Context Protocol"],
    links: [{ label: "GitHub", href: "https://github.com/eshitakundu/hn-mcp-server" }]
  }
];

// Data engineering & analytics projects.
const DATA_PROJECTS = [
  {
    id: "elearning-analytics-dbt",
    name: "E-learning Analytics (dbt + Snowflake)",
    desc: "End-to-end analytics engineering project. E-learning platform data modeled across staging, dimensions, facts, and a consolidated performance mart.",
    tags: ["SQL", "Snowflake", "dbt", "Analytics Engineering"],
    links: [{ label: "GitHub", href: "https://github.com/eshitakundu/elearning-analytics-dbt" }]
  },
  {
    id: "disease-outbreak-predictor",
    name: "Disease Outbreak Predictor",
    desc: "Streamlit web app predicting diabetes, heart disease, and Parkinson's disease risk using trained ML models.",
    tags: ["Python", "Streamlit", "Machine Learning"],
    links: [{ label: "GitHub", href: "https://github.com/eshitakundu/disease-outbreak-predictor" }]
  },
  {
    id: "ecommerce-spending",
    name: "E-Commerce Customer Spending Analysis",
    desc: "Analyzes customer behavior to help an e-commerce company decide whether to invest in their mobile app or website for revenue growth, using Linear Regression & Gradient Descent.",
    tags: ["Python", "Regression", "ML"],
    links: [{ label: "GitHub", href: "https://github.com/eshitakundu/E-Commerce-Customer-Spending-Analysis" }]
  },
  { id: "netflix-elt", name: "Netflix-style ELT (dbt + DuckDB)", draft: true, tags: ["dbt", "DuckDB", "ELT"], links: [{ label: "GitHub", href: "https://github.com/eshitakundu/netflix-elt-dbt" }] },
  { id: "csv-mysql-airflow", name: "CSV → MySQL Airflow Pipeline", draft: true, tags: ["Python", "Airflow", "MySQL"], links: [{ label: "GitHub", href: "https://github.com/eshitakundu/csv-mysql-airflow" }] },
  { id: "powerbi-hospitality", name: "Hospitality Revenue Insights (Power BI)", draft: true, tags: ["Power BI"], links: [{ label: "GitHub", href: "https://github.com/eshitakundu/PowerBI-Hospitality-Revenue-Insights" }] },
  { id: "coffee-sales-dashboard", name: "Coffee Sales Dashboard", draft: true, tags: ["Dashboard"], links: [{ label: "GitHub", href: "https://github.com/eshitakundu/Coffee-Sales-Dashboard" }] },
  { id: "ml-xgboost", name: "ML / XGBoost Experiments", draft: true, tags: ["Jupyter", "XGBoost"], links: [{ label: "GitHub", href: "https://github.com/eshitakundu/ML-XGBoost-Experiments" }] }
];

// Other / fun builds.
const MISC_PROJECTS = [
  {
    id: "espresso-yourself",
    name: "espresso-yourself",
    desc: "An AI-powered coffee shop where your rants meet comforting advice, awkward encouragement, or brutally honest roasts.",
    tags: ["Python", "Gemini API", "LangChain", "Streamlit"],
    links: [{ label: "GitHub", href: "https://github.com/eshitakundu/espresso-yourself" }]
  },
  {
    id: "vbs-calculator",
    name: "vbs-calculator",
    desc: "Calculator app built in Oracle Visual Builder (VBCS).",
    tags: ["HTML", "Oracle VBCS"],
    links: [{ label: "GitHub", href: "https://github.com/eshitakundu/vbs-calculator" }]
  },
  {
    id: "repobrief",
    name: "repobrief",
    desc: "Understand any GitHub repo in seconds: metadata, README and recent commits, summarised by a free OpenRouter model or as a facts-only brief. Clear errors, tests, CI.",
    tags: ["Python", "httpx", "GitHub API", "OpenRouter", "pytest"],
    links: [{ label: "GitHub", href: "https://github.com/eshitakundu/repobrief" }]
  },
  { id: "daily-tech-digest", name: "daily-tech-digest", draft: true, tags: ["Automation"], links: [{ label: "GitHub", href: "https://github.com/eshitakundu/daily-tech-digest" }] },
  { id: "pow-app", name: "pow-app", draft: true, tags: ["Python"], links: [{ label: "GitHub", href: "https://github.com/eshitakundu/pow-app" }] },
  { id: "neuraseek", name: "NeuraSeek", draft: true, tags: ["Python"], links: [{ label: "GitHub", href: "https://github.com/eshitakundu/NeuraSeek" }] },
  { id: "constellation-app", name: "constellation-app", draft: true, tags: ["JavaScript"], links: [{ label: "GitHub", href: "https://github.com/eshitakundu/constellation-app" }] },
  {
    id: "reply-radar",
    name: "Reply Radar",
    desc: "Local tool that finds X posts worth replying to and drafts replies in your voice with a free LLM. It cleans, scores and de-duplicates imported posts, falls back between free models when one is busy, and never posts for you: you review each draft and post it yourself.",
    tags: ["JavaScript", "Node.js", "OpenRouter", "Playwright"],
    links: [
      { label: "GitHub", href: "https://github.com/eshitakundu/reply-radar" }
    ]
  },
  {
    id: "moodify",
    name: "MoodIfy",
    desc: "Community music TV: tell it how you feel and get a song someone shared for that feeling. Free LLM mood reader with keyword fallback, TF-IDF retrieval and layered moderation.",
    tags: ["Python", "FastAPI", "OpenRouter", "Cloudflare Workers + D1"],
    links: [
      { label: "Live", href: "https://moodify.eshita.dev" },
      { label: "GitHub", href: "https://github.com/eshitakundu/MoodIfy" }
    ]
  },
  { id: "nooa-mini-lab", name: "nooa-mini-lab", desc: "Minimal NVIDIA NOOA experiment: an agent that inspects and modifies live Python state through object-oriented actions.", tags: ["Python", "NOOA", "Agents"], links: [{ label: "GitHub", href: "https://github.com/eshitakundu/nooa-mini-lab" }] },
  { id: "mcp-api-key-server", name: "mcp-api-key-server", desc: "Tiny MCP server that only answers requests carrying an API key, for checking what clients and tunnels really send.", tags: ["Python", "MCP", "Auth"], links: [{ label: "GitHub", href: "https://github.com/eshitakundu/mcp-api-key-server" }] },
  { id: "demo-mcp-server", name: "demo-mcp-server", desc: "Minimal FastMCP server with two typed tools; my template for larger MCP servers, with MCP Inspector and Claude Desktop setup.", tags: ["Python", "FastMCP"], links: [{ label: "GitHub", href: "https://github.com/eshitakundu/demo-mcp-server" }] },
  { id: "lost-media-detective", name: "Lost Media Detective", desc: "Turns a vague memory of a lost online video into ranked candidates with evidence links, or says not found yet. Work in progress.", tags: ["LangGraph", "LangSmith", "Tavily"], links: [{ label: "GitHub", href: "https://github.com/eshitakundu/lost-media-detective" }] },
  { id: "daily-tech-digest-live", name: "daily-tech-digest", desc: "Heym workflow that summarises top Hacker News stories with an LLM and emails a daily digest.", tags: ["Heym", "LLM", "Email"], links: [{ label: "GitHub", href: "https://github.com/eshitakundu/daily-tech-digest" }] },
  { id: "netflix-elt-dbt-live", name: "MovieLens ELT (dbt + DuckDB)", desc: "Python loads raw data into DuckDB, and dbt builds tested staging views and star-schema marts: 42 tests, CI on every push.", tags: ["dbt", "DuckDB", "CI"], links: [{ label: "GitHub", href: "https://github.com/eshitakundu/netflix-elt-dbt" }] },
  { id: "trackify", name: "Trackify", draft: true, tags: ["Python"], links: [{ label: "GitHub", href: "https://github.com/eshitakundu/Trackify" }] }
];

// Old / practice / coursework repos. Honest framing,
// not hidden in shame. Just labeled for what it is.
const TRASH_PROJECTS = [
  { name: "weather-etl-pipeline", href: "https://github.com/eshitakundu/weather-etl-pipeline" },
  { name: "ML-Lab", href: "https://github.com/eshitakundu/ML-Lab" },
  { name: "rock-paper-scissors", href: "https://github.com/eshitakundu/rock-paper-scissors" },
  { name: "PL-SQL-Practice-Programs", href: "https://github.com/eshitakundu/PL-SQL-Practice-Programs" },
  { name: "sql-queries", href: "https://github.com/eshitakundu/sql-queries" },
  { name: "predictive_models", href: "https://github.com/eshitakundu/predictive_models" },
  { name: "SalesDataAutomation", href: "https://github.com/eshitakundu/SalesDataAutomation" },
  { name: "Data-Entry-Robotic-Process-Automation-Challenge", href: "https://github.com/eshitakundu/Data-Entry-Robotic-Process-Automation-Challenge" },
  { name: "UiPath-Even-Number-Analyzer", href: "https://github.com/eshitakundu/UiPath-Even-Number-Analyzer" },
  { name: "Netflix-Revenue-and-Usage-Statistics", href: "https://github.com/eshitakundu/Netflix-Revenue-and-Usage-Statistics" },
  { name: "QuestEd (Ideathon project)", href: "https://github.com/eshitakundu/QuestEd" }
];

// ---- MEMORIES / MESSAGES ------------------------------------------------
// Rendered as a chat-thread, like reliving the text you'd have sent at the
// time. Add more entries here as more photos come in, same shape each time:
// { text, img, caption, date }. Keep `text` short and in-the-moment.

const MESSAGES = [
  {
    text: "BRICS-FS-36 participation",
    img: "assets/experiences/BRICS_attending.webp",
    caption: "BRICS-FS-36, Data Analysis & Visualization",
    date: "Nov 2024"
  },
  {
    text: "BRICS-FS-36 · 2nd Prize",
    img: "assets/experiences/BRICS_winning.png",
    caption: "2nd Prize, BRICS-FS-36 International Final",
    date: "Nov 2024"
  }
];

// ---- HOME (2026-11 redesign) ----------------------------------------------
// Plain-English layer for the home page. Every line restates a fact already
// in CASES / SOURCES above; `href` is where a visitor can check it.
const HOME = {
  line: "I build AI assistants that check their facts before they answer.",
  meta: "AI engineer in Kolkata. Open to full-time roles, remote or anywhere in India.",
  trace: [
    { label: "Built 3 AI tools anyone can try today", value: "3 live", href: "#work" },
    { label: "Code merged into AMD's open-source AI agent framework", value: "5 merged", href: "#open-source" },
    { label: "Tested to catch made-up answers", value: "0 made-up claims", href: "https://github.com/eshitakundu/TraceIntel/tree/main/evals" },
    { label: "2nd place, international data analysis final in China", value: "2024", href: "https://drive.google.com/file/d/1eUbbKUpUdZsSF0-W7ApcbcmyK6M2rRP9/view?usp=drive_link" },
    { label: "B.Tech in Computer Science, Sister Nivedita University", value: "CGPA 8.80", href: "resume.html" }
  ],
  work: {
    traceintel: {
      problem: "Token approvals outlive the swaps that create them, so a wallet can be drained months later without signing anything new.",
      plain: "Paste in an old transaction and it shows which permissions are still open, and whether you should revoke them.",
      proof: ["Live tests on 2 AI models:", "0 made-up claims", "https://github.com/eshitakundu/TraceIntel/tree/main/evals"],
      demo: "1:33"
    },
    aris: {
      problem: "Picking a new library means digging through CVEs, GitHub activity and download charts, then judging whether it fits your codebase.",
      plain: "Name a library and point it at your repo. It researches the library across 8 sources and emails you a scored verdict: adopt, trial, hold or avoid.",
      proof: ["Every score is checked by", "38 automated tests", "https://github.com/eshitakundu/ARIS/actions/workflows/tests.yml"],
      demo: "1:21",
      status: "The hosted research backend is offline, so the site shows recorded reports and a demo video instead of running new briefs."
    },
    devpulse: {
      problem: "The real opinions about a dev tool are buried in long Hacker News threads, and AI summaries of those threads can make up quotes.",
      plain: "Ask about any dev tool and get pros and cons from Hacker News, each one quoting and linking the actual comment.",
      proof: ["Checked word for word in a live run:", "149 quoted points", "https://github.com/eshitakundu/DevPulse/blob/main/evals/results/live-2026-11-17.json"]
    }
  },
  oss: {
    plain: "GAIA is AMD's framework for running AI agents on your own machine. I mostly work on its MCP layer, the part that lets those agents talk to other tools. 5 of my pull requests are merged and 2 more are in review.",
    changes: [
      "Fixed GAIA's MCP client to follow the spec, so servers built with the official MCP SDK accept it.",
      "Made AI calls stop as soon as the requesting app disconnects.",
      "Keeps saved connectors in sync when the connector catalog changes."
    ],
    merged: [6525, 6629, 6724, 6238, 6239],
    open: [
      { n: 8121, text: "Passes large tool results by reference to keep them out of the prompt (planned for v0.27.0)" },
      { n: 8294, text: "A test that measures how many prompt tokens each MCP server costs" }
    ],
    others: [
      { name: "CrossGL crosstl", count: "2 merged", text: "Fixes in a shader compiler", href: "https://github.com/CrossGL/crosstl/pulls?q=is%3Apr+author%3Aeshitakundu+is%3Amerged" },
      { name: "ai-engineering-from-scratch", count: "1 merged", text: "A widely used open AI engineering course", href: "https://github.com/rohitg00/ai-engineering-from-scratch/pull/720" },
      { name: "Heym", count: "idea adopted", text: "I proposed its Python code node; the maintainers built it", href: "https://github.com/heymrun/heym/discussions/136" }
    ]
  },
  more: [
    { name: "Readmit", tag: "ETHGlobal Mumbai 2026", href: "https://readmit-kohl.vercel.app", plain: "Tells you which step of a new-style Ethereum transaction broke, why, and how to fix it. It then resends the corrected transaction." },
    { name: "Origami Verse", tag: "NEAR hackathon 2026", href: "https://multiverse-lending.vercel.app", plain: "Conditional markets on NEAR: hold assets across possible outcomes and borrow against the least favourable one." },
    { name: "Ebbflow", tag: "NEAR hackathon 2026", href: "https://github.com/prithwish122/near-pm", plain: "An order book on NEAR where each order is a price curve, so a single trade can fill across many sellers at once." },
    { id: "jev-flow", plain: "Sorts support messages and hands the unclear ones to a human" },
    { id: "agon", name: "Agon", tag: "Colosseum hackathon", plain: "An AI trading assistant with hard spending limits the AI can't override" },
    { id: "study-buddy-mcp", plain: "Gives Claude structured access to my study notes and past papers" },
    { id: "deep-research-agent", plain: "Three AI agents research one question at the same time, then combine what they found" },
    { id: "github-ranker-mcp", plain: "Ranks GitHub profiles against a job description" },
    { id: "mcp-devops-hub", plain: "Team build: run server health checks by chatting with a Telegram bot" },
    { id: "repobrief", plain: "Explains any GitHub repo in a few seconds" },
    { id: "reply-radar", plain: "Finds X posts worth replying to and drafts replies in my voice" },
    { id: "flowchart-mcp", plain: "Describe a process in plain English, get a flowchart back" },
    { id: "hn-mcp", plain: "Lets AI assistants browse Hacker News" },
    { id: "moodify", plain: "Tell it how you feel and get a song someone in the community shared for that feeling" },
    { id: "lost-media-detective", plain: "Work in progress: turns a vague memory of a lost video into ranked leads with evidence links" }
  ],
  background: [
    { k: "Experience", title: "Automation Developer and Business Analyst", text: "Federation University Australia industry program, Sep to Nov 2024. Built bots that saved a team 10+ hours a week.", href: "https://drive.google.com/file/d/1UYP0-IhTqH1KCa6GsnZkKMWBa8agiodJ/view?usp=sharing" },
    { k: "Award", title: "2nd place, BRICS-FS-36 Data Analysis and Visualization", text: "International final, China, Dec 2024 (competed remotely).", href: "https://drive.google.com/file/d/1eUbbKUpUdZsSF0-W7ApcbcmyK6M2rRP9/view?usp=drive_link" },
    { k: "Award", title: "Top 100, UnvibeCode Engineering Challenge", text: "Alphashots.ai, Cohort 3, 2026. Rank 88, recognised for open-source contribution.", href: "assets/certs/unvibecode-cohort3-certificate.pdf" },
    { k: "Award", title: "Top 50 Learner", text: "Federation University Australia, Feb 2026.", href: "https://drive.google.com/file/d/1GGTMfMh05PWTjIRcA4W3HnQFWSENJk-e/view" },
    { k: "Education", title: "B.Tech, Computer Science and Engineering", text: "Sister Nivedita University, 2022 to 2026. CGPA 8.80 out of 10.", href: "resume.html" }
  ]
};
