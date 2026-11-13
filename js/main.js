const $=(s)=>document.querySelector(s),live=(a)=>a.filter(x=>!x.draft);
const linkList=(a=[])=>a.map(l=>`<a href="${l.href}" target="_blank" rel="noreferrer">${l.label} ↗</a>`).join("");
const byId=id=>[...FLAGSHIP,...DATA_PROJECTS,...MISC_PROJECTS].find(p=>p.id===id);

const flagshipSpecs={
  traceintel:{summary:"On-chain exposure agent: decodes every ERC-20 approval in an Ethereum or Monad transaction, then checks which permissions are still live.",points:[["THEN → NOW","Historical approvals compared with current allowance, owner balance, and spender code at a reorg-safe pinned block"],["Agent design","Planner calls 3 typed read-only tools under a code-enforced budget; reporter cites only verified claims, with a deterministic fallback"],["Evals","24 offline evals in CI, including 5 adversarial cases that script the model to misbehave"],["Architecture & deployment","React + TypeScript → Cloudflare Workers → Render / FastAPI → PostgreSQL; 101 pytest, Vitest, and Playwright tests"]]},
  aris:{summary:"Agent workflow that evaluates a software dependency against your repo and emails an auditable adoption verdict.",points:[["Architecture","104-node DAG with 7 parallel evidence branches"],["Reliability","LLMs only extract and narrate; 18 Python nodes compute every score"],["Deployment","Cloudflare Pages frontend; Dockerized Heym/FastAPI/PostgreSQL backend on DigitalOcean via Cloudflare Tunnel"],["Integrations","GitHub / OSV / PyPI / npm / Stack Exchange / Tavily MCP / NVIDIA NIM"]]},
  "mcp-devops-hub":{summary:"Telegram-driven DevOps agent that maps chat requests to fixed job skills and pulls failed-job logs for analysis.",points:[["Agent runtime","OpenClaw agent with 6 fixed, argument-free skills"],["Orchestration","Telegram → OpenClaw → team backend job queue"],["Diagnostics","Network, system, and login checks; job-status reports; failed-job log analysis"],["Execution safety","No exec tool; skills limited to safe, stateless commands"]]},
  devpulse:{summary:"Pros and cons of a developer tool from Hacker News, where every point quotes a real comment and links to it.",points:[["Grounding","Model proposes; a validator keeps a point only if its quote is verbatim in the comment it cites"],["Failure handling","One repair round, then a rule-based analyst that is grounded by construction"],["Evals","CI guardrail eval scripts 8 model failures, including prompt injection: 0 ungrounded points published; 21 tests"],["Deployment","FastAPI on Cloudflare Python Workers; reports cached in D1 for 24 hours"]]},
  "study-buddy-mcp":{summary:"Personal MCP server that gives Claude structured, safe access to study material and mastery data.",points:[["Protocol","13 tools, 3 resources, and 4 prompts"],["Safety","Path-traversal-safe document access"],["Data","SQLite mastery tracking with fuzzy matching"],["Backend","Pydantic-validated Python MCP server"]]}
};
const flagshipOrder=["traceintel","aris","devpulse","study-buddy-mcp"];
const moreOrder=["agon","jev-flow","reply-radar","mcp-devops-hub","moodify","repobrief","deep-research-agent","github-ranker-mcp","flowchart-mcp","hn-mcp"];
const earlierOrder=["elearning-analytics-dbt","disease-outbreak-predictor","ecommerce-spending","espresso-yourself","vbs-calculator"];

function renderProjects(){
  $("#featuredProjects").innerHTML=flagshipOrder.map((id,i)=>{const p=byId(id),s=flagshipSpecs[id];return `<article class="project ${i===0?"lead":""}" id="project-${id}" data-project="${id}"><div class="project-index">0${i+1}</div><div class="project-copy"><h3>${p.name}</h3><p class="project-summary">${s.summary}</p><div class="engineering"><span>Engineering summary</span><div class="engineering-grid">${s.points.map(([label,value])=>`<div><strong>${label}</strong><p>${value}</p></div>`).join("")}</div></div><div class="tags">${p.tags.slice(0,5).map(t=>`<span>${t}</span>`).join("")}</div></div><div class="project-links">${linkList(p.links)}</div></article>`}).join("");
  $("#projectArchive").innerHTML=`<div class="archive-head"><div><span>Compact project archive</span><h3>More builds</h3></div><span>${String(moreOrder.length).padStart(2,"0")} additional builds</span></div><div class="archive-grid">${moreOrder.map(id=>{const p=byId(id);return `<article id="project-${id}" data-project="${id}"><h4>${p.name}</h4><p>${p.desc}</p><div class="tags">${p.tags.slice(0,5).map(t=>`<span>${t}</span>`).join("")}</div>${linkList(p.links)}</article>`}).join("")}</div><details class="older"><summary>Earlier practice & coursework (${earlierOrder.length+TRASH_PROJECTS.length})</summary><div>${[...earlierOrder.map(id=>{const p=byId(id);return {name:p.name,href:p.links[0].href}}),...TRASH_PROJECTS].map(p=>`<a href="${p.href}" target="_blank" rel="noreferrer">${p.name} ↗</a>`).join("")}</div></details>`;
}

const layers=[
 {name:"AI / LLMs",desc:"Model APIs and evaluation form the reasoning layer behind my AI systems.",tech:["NVIDIA NIM","NOOA / OpenRouter","Structured outputs","Agent evaluation","Grounding validators"],projects:["traceintel","aris","devpulse","jev-flow"]},
 {name:"Agents & Orchestration",desc:"Agents divide complex work into coordinated, observable execution paths.",tech:["Python","Tool calling","LangGraph / LangChain","Parallel DAGs","Heym"],projects:["aris","agon","deep-research-agent","jev-flow"]},
 {name:"MCP",desc:"MCP gives models structured, validated access to tools, resources, and prompts.",tech:["FastMCP","MCP primitives","Skill routing"],projects:["aris","agon","study-buddy-mcp","github-ranker-mcp","flowchart-mcp","hn-mcp"]},
 {name:"Tools / APIs",desc:"External APIs ground agent decisions in current, verifiable information.",tech:["GitHub API","OSV","Tavily","Hacker News API","EVM JSON-RPC"],projects:["traceintel","aris","devpulse","github-ranker-mcp"]},
 {name:"Data Systems",desc:"Reliable storage and transformation keep application state and analytics usable.",tech:["PostgreSQL / SQLite","dbt","Snowflake","Airflow"],projects:["traceintel","study-buddy-mcp","elearning-analytics-dbt","disease-outbreak-predictor"]},
 {name:"Infrastructure / Deployment",desc:"Containerization and delivery workflows turn prototypes into running systems.",tech:["Docker","CI/CD","DigitalOcean","Cloudflare Workers + D1","Render"],projects:["traceintel","aris","devpulse","github-ranker-mcp"]}
];
function setLayer(i){
 document.querySelectorAll(".layer-node").forEach((n,j)=>{n.classList.toggle("active",i===j);n.setAttribute("aria-pressed",i===j)});
 const l=layers[i];$("#systemDetail").innerHTML=`<span>Layer 0${i+1}</span><h3>${l.name}</h3><p class="layer-desc">${l.desc}</p><div class="map-tech">${l.tech.map(t=>`<span>${t}</span>`).join("")}</div><p>Projects using this layer</p><div class="map-projects">${l.projects.map(id=>{const p=byId(id);return `<a href="#project-${id}" data-target="${id}">${p.name} <span>↘</span></a>`}).join("")}</div>`;
 document.querySelectorAll("[data-project]").forEach(el=>el.classList.toggle("map-match",l.projects.includes(el.dataset.project)));
}
function renderMap(){

 $("#systemFlow").innerHTML=layers.map((l,i)=>`<button class="layer-node" type="button" aria-pressed="false" data-layer="${i}"><small>0${i+1}</small><span>${l.name}</span><b>↓</b></button>`).join("");
 $("#systemFlow").addEventListener("click",e=>{const b=e.target.closest("[data-layer]");if(b)setLayer(+b.dataset.layer)});
 $("#systemFlow").addEventListener("mouseover",e=>{const b=e.target.closest("[data-layer]");if(b)setLayer(+b.dataset.layer)});
 setLayer(0);
}

function renderProfile(){
 $("#bio").innerHTML=`<p>I build LLM agents that call tools under hard limits: typed tool access, MCP servers, validators that check every claim against evidence, and evals in CI.</p><p>I built and deployed <strong>ARIS</strong>, a multi-agent technology adoption system with reproducible scoring and auditable verdicts. My latest project, <strong>TraceIntel</strong>, follows Ethereum and Monad transaction permissions from historical evidence to current exposure, using a NOOA agent that cites only verified evidence and falls back to deterministic analysis. <strong>DevPulse</strong> applies the same rule to opinions: the model proposes, and a validator publishes only points quoted verbatim from real comments.</p><p>I also contribute to open source: five merged PRs in <strong>AMD GAIA</strong>’s agent framework, mostly its MCP client and bridge, and two in <strong>CrossGL</strong>. I’m looking for agentic AI engineering roles.</p>`;
  $("#experienceList").innerHTML=EXPERIENCE.map(x=>`<article><div><span>${x.dates}</span><small>${x.location}</small></div><div><h3>${x.role}</h3><h4>${x.org}</h4><ul>${x.bullets.map(b=>`<li>${b.replace("10+ hours/week","<strong>10+ hours/week</strong>").replace("70%","<strong>70%</strong>")}</li>`).join("")}</ul><a href="${x.cert}" target="_blank">View credential ↗</a><figure class="experience-photo"><img src="assets/experiences/XPMC.webp" alt="XPMC Work Readiness Program group" loading="lazy"><figcaption>XPMC Work Readiness Program · Federation University Australia</figcaption></figure></div></article>`).join("");
 $("#educationList").innerHTML=EDUCATION.map(x=>`<article><div><span>${x.dates}</span></div><div><h3>${x.degree}</h3><p>${x.school} · <strong>${x.meta}</strong></p></div></article>`).join("");
 const groups=[
  ["Languages, Frontend & Backend",["JavaScript","TypeScript","React","Vite","Python","SQL","Node.js","FastAPI","Pydantic","REST APIs"]],
  ["Agents & Orchestration",["LangGraph","LangChain","LLM Agents","MCP","FastMCP","Tool / Function Calling","Agent Orchestration","NOOA","Human-in-the-loop"]],
  ["Retrieval & Evaluation",["RAG","Embeddings","Vector Search","Structured Outputs","LLM / Agent Evaluation","Adversarial Evals","Grounding Validators"]],
  ["Databases",["PostgreSQL","SQLite","Cloudflare D1","FAISS"]],
  ["Infrastructure & Developer Tooling",["Docker","Docker Compose","Git / GitHub","GitHub Actions","CI/CD","DigitalOcean","Cloudflare","Cloudflare Workers","Render","AWS S3"]],
  ["Data & Analytics",["pandas","NumPy","scikit-learn","dbt","Snowflake","Airflow","Tableau","Power BI"]]
 ];
 $("#skills").innerHTML=groups.map(([name,items],i)=>`<article><span class="stack-index">0${i+1}</span><h3>${name}</h3><ul class="stack-list">${items.map(item=>`<li>${item}</li>`).join("")}</ul></article>`).join("");
}
function renderRecognition(){
 $("#achievements").innerHTML=ACHIEVEMENTS.map((a,i)=>`<article class="${i===0?"primary-award":""}"><span>0${i+1}</span><div><h3>${i===0?"2nd Prize":a.title}</h3><h4>${i===0?"BRICS-FS-36 Data Analysis & Visualization · International Final · Dec 2024":a.org}</h4><p>${i===0?"8-hour international analytics final · Python · Excel · Tableau · Streamlit":a.desc}</p><a href="${a.cert}" target="_blank">Credential ↗</a>${a.citation?`<a href="${a.citation}" target="_blank">Citation ↗</a>`:""}</div></article>`).join("");
 $("#memories").innerHTML=MESSAGES.map(m=>`<figure><img src="${m.img}" alt="${m.caption}" loading="lazy"><figcaption><strong>${m.text}</strong><span>${m.caption} · ${m.date}</span></figcaption></figure>`).join("");
 $("#certifications").innerHTML=[...CERTIFICATIONS,...CERTIFICATIONS_MORE].map(c=>`<a href="${c.cert}" target="_blank"><span>${c.name}<small>${c.org}</small></span><span>${c.date||"View"} ↗</span></a>`).join("");
}

renderProjects();renderMap();renderProfile();renderRecognition();$("#year").textContent=new Date().getFullYear();
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");observer.unobserve(e.target)}}),{threshold:.08});document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
let lastY=0;addEventListener("scroll",()=>{const y=scrollY;$(".site-header").classList.toggle("hidden",y>lastY&&y>160);lastY=y},{passive:true});

const emailCopy=$("#emailCopy"),copyStatus=$("#copyStatus");
emailCopy.addEventListener("click",async()=>{
 const email=emailCopy.dataset.email;
 try{await navigator.clipboard.writeText(email)}catch{const field=document.createElement("textarea");field.value=email;field.setAttribute("readonly","");field.style.position="fixed";field.style.opacity="0";document.body.appendChild(field);field.select();const copied=document.execCommand("copy");field.remove();if(!copied){copyStatus.textContent="Please select and copy the email address above.";return}}
 emailCopy.querySelector("strong").textContent="Copied!";copyStatus.textContent="Email address copied to clipboard.";
 setTimeout(()=>{emailCopy.querySelector("strong").textContent="Copy email";copyStatus.textContent=""},2500);
});
const localClock = document.querySelector('#localClock');
function updateClock(){localClock.textContent = new Intl.DateTimeFormat('en-GB',{timeZone:'Asia/Kolkata',hour:'2-digit',minute:'2-digit'}).format(new Date());}
updateClock(); setInterval(updateClock,60000);
