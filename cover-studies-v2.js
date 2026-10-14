(()=>{
const series=[['type','Типографика'],['metal','Металл и свет'],['optical','Оптическая графика']];
const projects=['Амтек','dl.studio','dl.games','Красный путь','Credo','Global Digital Group','Мужской клуб','Козихинский, 22'];
const dialog=document.querySelector('#new-detail');
function openSheet(id){const name=series.find(s=>s[0]===id)[1];const src=`assets/cover-studies-v2/${id}.png`;const img=document.querySelector('#new-detail-image');img.src=src;img.alt=name+' — восемь обложек';document.querySelector('#new-detail-title').textContent=name;const a=document.querySelector('#new-download');a.href=src;a.download=`covers-${id}.png`;dialog.showModal();}
document.querySelectorAll('.sheet').forEach(b=>b.onclick=()=>openSheet(b.dataset.series));
dialog.querySelector('.close').onclick=()=>dialog.close();
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
const grid=document.querySelector('#project-comparison');
function choose(index){document.querySelectorAll('#project-picker button').forEach((b,i)=>b.setAttribute('aria-pressed',i===index));grid.replaceChildren();series.forEach(([id,name])=>{const f=document.createElement('figure');f.className='project-option';const crop=document.createElement('button');crop.className='crop';crop.setAttribute('aria-label',`${projects[index]} — ${name}. Открыть серию`);crop.style.backgroundImage=`url(assets/cover-studies-v2/${id}.png)`;crop.style.backgroundPosition=`${index%4*100/3}% ${index<4?0:100}%`;crop.onclick=()=>openSheet(id);const c=document.createElement('figcaption');c.textContent=name;f.append(crop,c);grid.append(f);});}
projects.forEach((name,i)=>{const b=document.createElement('button');b.textContent=name;b.setAttribute('aria-pressed',i===0);b.onclick=()=>choose(i);document.querySelector('#project-picker').append(b);});choose(0);
document.querySelector('#compare-new').onclick=e=>{const on=e.currentTarget.getAttribute('aria-pressed')!=='true';e.currentTarget.setAttribute('aria-pressed',on);document.querySelector('#new-series').hidden=on;document.querySelector('#new-comparison').hidden=!on;};
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>{document.querySelector('#new-series').hidden=false;document.querySelector('#new-comparison').hidden=true;document.querySelector('#compare-new').setAttribute('aria-pressed',false);}));
})();
