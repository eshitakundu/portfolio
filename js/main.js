// Renders the home page sections from data.js (HOME + CASES + SOURCES).
// Everything above the BROWSER-ONLY marker also runs at build time (scripts/build.mjs
// pre-renders it into index.html), so keep it DOM-free apart from $(selector).innerHTML.
const $=(s)=>document.querySelector(s);
const esc=(s)=>String(s).replace(/&(?![a-z#0-9]+;)/gi,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;");
const isExt=(h)=>/^https?:/.test(h);
const a=(href,label,cls="")=>`<a${cls?` class="${cls}"`:""} href="${href}"${isExt(href)?' target="_blank" rel="noreferrer"':""}>${label}</a>`;
const allProjects=()=>[...FLAGSHIP,...DATA_PROJECTS,...MISC_PROJECTS];
const byId=(id)=>allProjects().find(p=>p.id===id);
const src=(n)=>SOURCES.find(s=>s.n===n);
const drivePreview=(h)=>h.includes("drive.google.com/file/d/")?h.replace(/\/view.*$/,"/preview"):h;
const ICON={traceintel:["blue","T"],aris:["blue","A"],devpulse:["orange","D"]};

function caseMedia(c){
  const m=c.media;
  const inner=m.video
    ?`<video class="case-video" muted loop playsinline preload="none" poster="${m.poster}" aria-label="${esc(m.alt)}" width="1120" height="630"><source src="${m.video}" type="video/mp4"></video>`
    :`<img src="${m.image}" alt="${esc(m.alt)}" loading="lazy" width="1120" height="630">`;
  return `<figure class="case-media"><span class="case-url" aria-hidden="true">${c.host}</span>${inner}</figure>`;
}

function renderCases(){
  $("#cases").innerHTML=["traceintel","aris","devpulse"].map((id,i)=>{const c=CASES.find(x=>x.id===id),h=HOME.work[id],[tone,letter]=ICON[id];
    const live=c.links.find(l=>l.primary),code=c.links.find(l=>l.label==="Code"),demo=c.links.find(l=>/demo/i.test(l.label));
    return `<article class="case case-${id}" id="project-${id}">
${caseMedia(c)}
<div class="case-copy">
<div class="case-title"><span class="identity-icon ${tone}">${letter}</span><h3>${c.name}</h3>${id==="aris"?'<span class="live-tag demo">RECORDED DEMO</span>':'<span class="live-tag"><span class="status-dot"></span>LIVE</span>'}</div>
<p class="case-problem"><span>Problem</span>${h.problem}</p>
<p class="case-plain"><span>What it does</span>${h.plain}</p>
<a class="case-proof" href="${h.proof[2]}" target="_blank" rel="noreferrer"><em>Proof</em><span>${h.proof[0]}</span> <strong>${h.proof[1]}</strong> ↗</a>
<div class="hero-actions case-actions">${a(live.href,id==="aris"?"See saved reports ↗":"Try it live ↗","primary")}${demo?`<button type="button" data-video="${drivePreview(demo.href)}" data-title="${esc(c.name)} demo">Watch ${h.demo} demo ▶</button>`:""}${a(code.href,"Code ↗")}</div>
<details class="case-how"><summary>How it works <b class="expand">+</b></summary>
<div class="engineering-grid"><div><strong>What it does</strong><p>${c.lede}</p></div><div><strong>How it's built</strong><p>${c.how}</p></div></div>
<ul class="case-results">${c.evidence.map(([n,t,s])=>`<li><a href="${src(s).href}" target="_blank" rel="noreferrer"><b>${n}</b> ${t} ↗</a></li>`).join("")}</ul>
<div class="tags">${c.tags.map(t=>`<span>${t}</span>`).join("")}</div>
</details>
</div></article>`}).join("");
}

function renderOss(){
  const o=HOME.oss,pr=(n)=>a(`https://github.com/amd/gaia/pull/${n}`,`#${n}`);
  $("#oss").innerHTML=`<div class="oss-grid">
<div class="oss-tile"><span class="tile-label">AMD GAIA</span><strong>5 merged,<br>2 in review.</strong><p>${o.plain}</p><p class="oss-prs">Merged: ${o.merged.map(pr).join(" ")}</p>${a(src(4).href,"See all my merged pull requests ↗")}</div>
<div class="oss-list">
<ul class="spans">${o.changes.map(t=>`<li><span class="state">MERGED</span><span>${t}</span></li>`).join("")}${o.open.map(p=>`<li class="is-open"><span class="state">IN REVIEW</span><span>${p.text} ${pr(p.n)}</span></li>`).join("")}</ul>
<div class="oss-others">${o.others.map(x=>`<a href="${x.href}" target="_blank" rel="noreferrer"><b>${x.name}</b><span>${x.text}</span><em>${x.count}</em></a>`).join("")}</div>
</div></div>`;
}

function renderMore(){
  $("#more-list").innerHTML=`<div class="more-grid">${HOME.more.map(m=>{const p=m.id?(byId(m.id)||CASES.find(c=>c.id===m.id)):null;const name=m.name||p.name.split(" | ")[0];const href=m.href||(p.links.find(l=>/live|site/i.test(l.label))||p.links[0]).href;
    return `<a class="more-item" href="${href}" target="_blank" rel="noreferrer">${m.tag?`<span class="tile-label">${m.tag.toUpperCase()}</span>`:""}<h3>${name}</h3><p>${m.plain}</p><span>${/github\.com/.test(href)?"Code":"Open"} ↗</span></a>`}).join("")}</div><div class="more-foot"><button class="more-toggle" type="button">Show ${HOME.more.length-4} more ↓</button><a href="https://github.com/eshitakundu?tab=repositories" target="_blank" rel="noreferrer">All projects on GitHub ↗</a></div>`;
}

function renderBackground(){
  $("#background-list").innerHTML=`<div class="bg-grid">${HOME.background.map(b=>`<article class="${b.k==="Award"&&/2nd/.test(b.title)?"primary-award":""}"><span class="tile-label">${b.k.toUpperCase()}</span><h3>${a(b.href,b.title)}</h3><p>${b.text}</p></article>`).join("")}</div>`;
}

/* BROWSER-ONLY: everything below needs a real browser. */
if(!$("#cases").children.length){renderCases();renderOss();renderMore();renderBackground();}
$("#year").textContent=new Date().getFullYear();
const still=matchMedia("(prefers-reduced-motion: reduce)");

// Header hides on scroll down, returns on scroll up (as before).
let lastY=0;addEventListener("scroll",()=>{const y=scrollY;$(".site-header").classList.toggle("hidden",y>lastY&&y>160);lastY=y},{passive:true});

// Project loops play only while on screen, and never for reduced-motion users.
const vids=new IntersectionObserver(es=>es.forEach(e=>{const v=e.target;
  if(e.isIntersecting&&!still.matches){v.preload="auto";v.play().catch(()=>{})}else v.pause();
}),{threshold:.4});
document.querySelectorAll(".case-video").forEach(v=>vids.observe(v));

// Full demos open in a player only when asked for.
const player=$("#player"),frame=$("#playerFrame");let lastFocus=null;
const closePlayer=()=>{player.classList.remove("open");setTimeout(()=>{player.hidden=true;frame.src="about:blank"},still.matches?0:150);lastFocus?.focus()};
document.addEventListener("click",e=>{const b=e.target.closest("[data-video]");if(!b)return;
  lastFocus=b;frame.title=b.dataset.title;frame.src=b.dataset.video;player.hidden=false;requestAnimationFrame(()=>requestAnimationFrame(()=>player.classList.add("open")));$("#playerClose").focus()});
$("#playerClose").addEventListener("click",closePlayer);
player.addEventListener("click",e=>{if(e.target===player)closePlayer()});

$(".more-toggle")?.addEventListener("click",e=>{$(".more-grid").classList.add("all");e.currentTarget.remove()});

const emailCopy=$("#emailCopy"),copyStatus=$("#copyStatus");
emailCopy.addEventListener("click",async()=>{const email=emailCopy.dataset.email,label=emailCopy.querySelector("strong");
  try{await navigator.clipboard.writeText(email)}catch{copyStatus.textContent="Couldn't copy. The address is "+email;return}
  const swapTo=(t)=>{label.classList.add("swap");setTimeout(()=>{label.textContent=t;label.classList.remove("swap")},still.matches?0:110)};
  swapTo("Copied!");copyStatus.textContent="Email address copied to clipboard.";
  setTimeout(()=>{swapTo("Copy email");copyStatus.textContent=""},2500)});

const localClock=$("#localClock");
const dayNight=$("#dayNight");
const SUN='<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2.6M12 18.9v2.6M2.5 12h2.6M18.9 12h2.6M5.3 5.3l1.8 1.8M16.9 16.9l1.8 1.8M5.3 18.7l1.8-1.8M16.9 7.1l1.8-1.8"/></svg>';
const MOON='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/></svg>';
function updateClock(){const now=new Date();localClock.textContent=new Intl.DateTimeFormat("en-GB",{timeZone:"Asia/Kolkata",hour:"2-digit",minute:"2-digit"}).format(now);
  const h=+new Intl.DateTimeFormat("en-GB",{timeZone:"Asia/Kolkata",hour:"2-digit",hour12:false}).format(now),day=h>=6&&h<18;
  dayNight.innerHTML=day?SUN:MOON;dayNight.className="daynight "+(day?"is-day":"is-night");dayNight.setAttribute("aria-label",day?"Daytime in Kolkata":"Night-time in Kolkata");dayNight.title=dayNight.getAttribute("aria-label")}
updateClock();setInterval(updateClock,60000);

// ---- Ask my AI agent ----------------------------------------------------
// Optional. The button only appears when /api/ask answers its health check,
// so the page is complete without it. ?agent=mock uses canned data for testing.
const agent=$("#agent"),askLog=$("#askLog"),askForm=$("#askForm"),askInput=$("#askInput");
const nodes=[...document.querySelectorAll(".agent-graph li")];
const mock=new URLSearchParams(location.search).get("agent")==="mock";
const api=async(body)=>{
  if(mock){await new Promise(r=>setTimeout(r,700));return {trace:[{tool:"search_projects",args:{query:body.q},ms:4,note:"3 matches"},{tool:"get_project",args:{id:"traceintel"},ms:2,note:"TraceIntel"}],answer:"This is test data. She built TraceIntel and DevPulse, which are live, and ARIS, which has a recorded demo.",links:[{label:"TraceIntel",href:"#project-traceintel"}]}}
  const r=await fetch("/api/ask",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(body)});
  if(!r.ok)throw new Error(r.status===429?"limit":"down");return r.json()};
(async()=>{try{if(!mock){const r=await fetch("/api/ask");if(!r.ok)return;const j=await r.json();if(!j.ok)return}agent.hidden=false;document.querySelector(".intro-panel").classList.add("has-agent");document.querySelector(".intro-grid").classList.add("agent-on")}catch{}})();

addEventListener("keydown",e=>{if(e.key==="Escape"&&!player.hidden)closePlayer()});
const SUGGEST=["What has she built?","Has she worked with MCP?","Is she open to remote work?","What has she done in open source?"],asked=new Set();
if(mock)$("#agentMode").textContent="Test mode";
askLog.addEventListener("click",e=>{const b=e.target.closest(".idle-list button,.ask-follow button");if(!b||askForm.querySelector("button").disabled)return;askInput.value=b.querySelector("span")?.textContent||b.textContent;askForm.requestSubmit()});

const fmtArgs=(o)=>Object.entries(o||{}).map(([k,v])=>`${k}: "${esc(String(v).slice(0,40))}"`).join(", ");
const wait=(ms)=>new Promise(r=>setTimeout(r,still.matches?0:ms));
// The answer types in word by word: it shows the agent producing it, and is skipped for reduced motion.
async function typeIn(el,text){if(still.matches){el.textContent=text;return}const words=text.split(" ");el.textContent="";
  for(let i=0;i<words.length;i++){el.textContent+=(i?" ":"")+words[i];if(i%2)await wait(22)}}
askForm.addEventListener("submit",async e=>{e.preventDefault();const q=askInput.value.trim();if(!q)return;asked.add(q);
  askInput.value="";const send=askForm.querySelector("button");send.disabled=true;
  const turn=document.createElement("div");turn.className="ask-turn";
  turn.innerHTML=`<p class="ask-q">${esc(q)}</p><ol class="ask-spans"><li class="pending"><span class="s-tool">choosing tools</span><span class="s-ms">…</span></li></ol>`;
  askLog.replaceChildren(turn);nodes.forEach(n=>{n.classList.remove("hit");delete n.dataset.result});agent.classList.add("working");
  const spans=turn.querySelector(".ask-spans");
  try{const res=await api({q});spans.innerHTML="";agent.classList.remove("working");
    for(const s of res.trace){const li=document.createElement("li");li.innerHTML=`<span class="s-tool">${esc(s.tool)}(<em>${fmtArgs(s.args)}</em>)</span><span class="s-ms">${s.ms} ms</span><span class="s-note">${esc(s.note||"")}</span>`;spans.appendChild(li);const node=nodes.find(n=>n.dataset.tool===s.tool);if(node){node.classList.add("hit");node.dataset.result=s.note||"done"}await wait(200)}
    const ms=res.trace.reduce((t,s)=>t+(s.ms||0),0);
    const p=document.createElement("div");p.className="ask-a";
    p.innerHTML=`<span class="tile-label">AGENT</span><p class="ask-text"></p>`;turn.appendChild(p);
    await typeIn(p.querySelector(".ask-text"),res.answer);
    p.insertAdjacentHTML("beforeend",`<p class="ask-meta">${res.trace.length} tool call${res.trace.length===1?"":"s"} · ${ms} ms · ${res.mode==="preset"?"fixed answer from this site's data, no AI model":"AI answer from this site's data only"}</p>${res.links?.length?`<p class="ask-links">${res.links.map(l=>a(l.href,esc(l.label)+" ↗")).join("")}</p>`:""}`);
    const next=SUGGEST.filter(s=>!asked.has(s)).slice(0,2);
    if(next.length)turn.insertAdjacentHTML("beforeend",`<div class="ask-follow"><span class="tile-label">ASK NEXT</span>${next.map(s=>`<button type="button"><span>${s}</span></button>`).join("")}</div>`);
  }catch(err){spans.innerHTML="";agent.classList.remove("working");const p=document.createElement("p");p.className="ask-a ask-err";
    p.textContent=err.message==="limit"?"That's the question limit for now. The résumé has everything, or email me directly.":"The agent isn't answering right now. The résumé has everything, or email me directly.";turn.appendChild(p)}
  send.disabled=false;askInput.focus({preventScroll:true})});
