import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';
const root = path.resolve(import.meta.dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
// Pre-render selected projects using exactly the same content and renderer as the browser.
const nodes = new Map();
const context = vm.createContext({document:{querySelector(selector){if(!nodes.has(selector))nodes.set(selector, {innerHTML:''});return nodes.get(selector);}}});
const main = read('js/main.js');
vm.runInContext(read('js/data.js') + '\n' + main.slice(0, main.indexOf('const layers=')) + '\nrenderProjects();', context);
let html = read('index.html');
for (const id of ['featuredProjects', 'projectArchive']) {
  const start = `<!-- ${id}:start -->`, end = `<!-- ${id}:end -->`;
  const content = `<div id="${id}">${nodes.get('#'+id).innerHTML}</div>`;
  if (html.includes(start)) html = html.slice(0, html.indexOf(start)) + start + content + end + html.slice(html.indexOf(end) + end.length);
  else html = html.replace(`<div id="${id}"></div>`, start + content + end);
}
fs.writeFileSync(path.join(root,'index.html'),html);
fs.mkdirSync(path.join(root,'dist'), {recursive:true});
for (const file of ['index.html','resume.html','robots.txt','sitemap.xml','_headers']) fs.copyFileSync(path.join(root,file),path.join(root,'dist',file));
for (const dir of ['css','js','assets']) fs.cpSync(path.join(root,dir),path.join(root,'dist',dir),{recursive:true});
console.log('Pre-rendered selected projects and refreshed dist from source.');
