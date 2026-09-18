document.querySelector('#printResume').addEventListener('click',()=>window.print());
const resumeSections = document.querySelectorAll('.cv-content section[id]');
const sectionObserver = new IntersectionObserver(entries=>{
  const active=entries.filter(entry=>entry.isIntersecting).sort((a,b)=>a.boundingClientRect.top-b.boundingClientRect.top)[0];
  if(!active)return;
  document.querySelectorAll('.cv-sidebar nav a').forEach(link=>{
    const selected=link.hash==='#'+active.target.id;
    link.classList.toggle('active',selected);
    if(selected)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');
  });
},{rootMargin:'-10% 0px -65% 0px',threshold:0});
resumeSections.forEach(section=>sectionObserver.observe(section));
