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
  tagline: "Computer Science graduate (8.80 CGPA). Built and deployed ARIS. Open to full-time AI engineering roles.",
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
  { text: "ARIS deployed · open to full-time roles · kolkata, india" },
  { cmd: true, text: "cat awards.txt" },
  { text: "2nd place, worldskills BRICS-FS-36 (data analysis & viz, russia)" },
  { cmd: true, text: "ls skills/" },
  { text: "python  sql  llm-agents  mcp  dbt  snowflake  airflow  docker" },
  { cmd: true, text: "ps --running" },
  { text: "ARIS.exe            RUNNING" },
  { text: "mcp-devops-hub.exe  RUNNING" },
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
    role: "Experiential Learner - RPA Developer & Business Analyst",
    location: "Kolkata, India",
    bullets: [
      "Cut manual data-processing time by 10+ hours/week, reduced error rate by 70%, with UiPath RPA for Excel reporting.",
      "Authored Process Design Documents (PDDs) for automation pipelines across multiple Agile sprints, coordinating directly with stakeholders on scope and sign-off."
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
  { name: "MCP Fractal", cert: "https://drive.google.com/file/d/18AgmTAJGU2zwegKp96C6OH06Ux1U24bx/view?usp=sharing", org: "Coursera", date: "2026" },
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
  "GenAI & Agentic AI": [ "LLM agents", "agent orchestration", "MCP", "NVIDIA NIM APIs", "agent eval design", "prompt engineering"],
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
    desc: "Persistent on-chain exposure intelligence for Ethereum and Monad through a shared EVM pipeline. Reconstructs transaction evidence and compares historical ERC-20 approvals with current allowance, owner balance, and spender bytecode in a THEN → NOW view. Deterministic risk and exposure analysis stays separate from evidence-grounded NOOA interpretation; PostgreSQL preserves block-specific report snapshots.",
    tags: ["React + TypeScript", "FastAPI", "PostgreSQL", "NOOA", "Ethereum + Monad"],
    links: [
      { label: "Live", href: "https://traceintel.eshita.dev" },
      { label: "GitHub", href: "https://github.com/eshitakundu/TraceIntel" }
    ]
  },
  {
    id: "aris",
    name: "ARIS | Technology Adoption Intelligence",
    flagship: true,
    hex: ["#6699FF", "#99CCFF", "#8FC97A", "#000000"],
    caption: "a multi-agent verdict engine for 'should we adopt this dependency?'",
    desc: "Live multi-agent decision-support tool that scores software dependencies across 6 weighted dimensions and emails a verdict-backed Adoption Brief. Runs as a 7-branch parallel agent DAG on a self-hosted Heym fork, with deterministic Python scoring, MCP payload compression, and self-hosted deployment via Docker Compose on a DigitalOcean droplet with zero-downtime build-then-swap deploys.",
    tags: ["Heym self-hosted fork", "PythonExec node", "LLM Agents", "NVIDIA NIM", "GitHub/OSV/Tavily APIs"],
    links: [
      { label: "Live", href: "https://aris.eshita.dev" },
      { label: "GitHub", href: "https://github.com/eshitakundu/ARIS" }
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
    caption: "natural-language CI/CD triggering with MCP skill routing",
    desc: "Team-built DevOps system where I containerized and sandboxed the OpenClaw LLM agent in Docker, then integrated a Telegram bot with MCP skill routing for CI/CD triggering and automated log summaries.",
    tags: ["Docker", "OpenClaw", "Telegram Bot", "MCP", "CI/CD"],
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
  { id: "netflix-elt", name: "Netflix ELT (dbt + Snowflake)", draft: true, tags: ["dbt", "Snowflake", "ELT"], links: [{ label: "GitHub", href: "https://github.com/eshitakundu/netflix-elt-dbt-snowflake" }] },
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
  { id: "repobrief", name: "repobrief", draft: true, tags: ["Python"], links: [{ label: "GitHub", href: "https://github.com/eshitakundu/repobrief" }] },
  { id: "daily-tech-digest", name: "daily-tech-digest", draft: true, tags: ["Automation"], links: [{ label: "GitHub", href: "https://github.com/eshitakundu/daily-tech-digest" }] },
  { id: "pow-app", name: "pow-app", draft: true, tags: ["Python"], links: [{ label: "GitHub", href: "https://github.com/eshitakundu/pow-app" }] },
  { id: "neuraseek", name: "NeuraSeek", draft: true, tags: ["Python"], links: [{ label: "GitHub", href: "https://github.com/eshitakundu/NeuraSeek" }] },
  { id: "constellation-app", name: "constellation-app", draft: true, tags: ["JavaScript"], links: [{ label: "GitHub", href: "https://github.com/eshitakundu/constellation-app" }] },
  { id: "moodify", name: "MoodIfy", draft: true, tags: ["Python"], links: [{ label: "GitHub", href: "https://github.com/eshitakundu/MoodIfy" }] },
  { id: "devpulse", name: "DevPulse", draft: true, tags: ["Python"], links: [{ label: "GitHub", href: "https://github.com/eshitakundu/DevPulse" }] },
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
