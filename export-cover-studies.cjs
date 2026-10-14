const fs=require('node:fs');
const vm=require('node:vm');
const path=require('node:path');
const source=fs.readFileSync(path.join(__dirname,'cover-studies.js'),'utf8').split('function card(')[0].replace(/^\(\(\)=>\{\s*/, '');
const {projects,series,svg}=vm.runInNewContext(source+'\n;({projects,series,svg})');
const out=path.join(__dirname,'assets/cover-studies/exports');
fs.mkdirSync(out,{recursive:true});
for(const s of series)for(const [i,p]of projects.entries()){
 let output=svg(p,s,i);
 if(s.id==='fragment'){
  const image=fs.readFileSync(path.join(__dirname,p.src));
  const mime=p.src.endsWith('.jpg')?'image/jpeg':'image/png';
  output=output.replace(p.src,'data:'+mime+';base64,'+image.toString('base64'));
 }
 fs.writeFileSync(path.join(out,p.id+'-'+s.id+'.svg'),output);
}
fs.writeFileSync(path.join(out,'sources.json'),JSON.stringify(projects.map(p=>({id:p.id,name:p.name,figma:`https://www.figma.com/design/${p.file}/?node-id=${p.node.replace(':','-')}`,motif:p.note})),null,2));
console.log('Exported 24 standalone SVG covers, 800 × 600.');
