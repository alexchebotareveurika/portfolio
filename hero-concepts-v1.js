(() => {
  const projects=[['red-path','Красный путь'],['credo','Credo'],['global-digital','Global digital group'],['mens-club','Мужской клуб'],['kozikhinsky','Козихинский 22']];
  const media=window.portfolioMedia,src=id=>media[id][0].src;
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const notes={scanner:['01 — Сканер','Первый экран как инструмент исследования: снаружи — структура, внутри линзы — готовый дизайн. Движение курсора раскрывает детали. Выбор проекта меняет всё поле.'],mixer:['02 — Микшер','Сайт отвечает на действие посетителя: баланс «структура / характер» меняет плотность, типографику и композицию работ. Это первое впечатление о твоём подходе к дизайну.'],poster:['03 — Живой плакат','Слово FORM собрано из фрагментов реальных работ. Курсор раздвигает части и собирает их обратно; выбор проекта меняет материал всего плаката.']};
  const scan=document.querySelector('.scan-picture'),field=document.querySelector('.scan-field');
  scan.style.backgroundImage=`url("${src('credo')}")`;
  const lens={x:70,y:48};
  const reveal=()=>scan.style.clipPath=`circle(${innerWidth<900?31:21}% at ${lens.x}% ${lens.y}%)`;
  field.addEventListener('pointermove',e=>{const r=field.getBoundingClientRect();gsap.to(lens,{x:(e.clientX-r.left)/r.width*100,y:(e.clientY-r.top)/r.height*100,duration:reduced?0:.4,overwrite:true,onUpdate:reveal});});
  document.querySelector('.mix-cards').innerHTML=projects.map(([id,title])=>`<a class="mix-card ${id==='mens-club'?'phone':''}" href="index.html#${id}" aria-label="${title}"><img src="${src(id)}" alt="${title}"></a>`).join('');
  const mixCards=[...document.querySelectorAll('.mix-card')];
  const mix=value=>{
    const amount=value/100;
    mixCards.forEach((card,i)=>gsap.to(card,{y:(i%2?-1:1)*amount*(i===1?85:45),rotation:amount*[-7,4,-3,9,-6][i],scale:1+amount*(i===1?.35:-.08),duration:reduced?0:.65,ease:'power3.out',overwrite:'auto'}));
    gsap.to('.mix-type h1',{letterSpacing:(-.045-amount*.04)+'em',fontWeight:400+Math.round(amount*140),duration:reduced?0:.65,overwrite:'auto'});
  };
  document.querySelector('.mix-control input').addEventListener('input',e=>mix(Number(e.target.value)));mix(30);
  const canvas=document.createElement('canvas');canvas.width=680;canvas.height=210;const ctx=canvas.getContext('2d');ctx.font='900 210px Arial';ctx.textBaseline='middle';ctx.fillText('FORM',0,118);const pixels=ctx.getImageData(0,0,680,210).data;
  const tileField=document.querySelector('.tile-field'),tiles=[];const cols=40,rows=13;
  for(let y=0;y<rows;y++)for(let x=0;x<cols;x++){
    const px=Math.floor((x+.5)*680/cols),py=Math.floor((y+.5)*210/rows);
    if(pixels[(py*680+px)*4+3]<80)continue;
    const tile=document.createElement('div');tile.className='tile';tile.style.cssText=`left:${x/cols*100}%;top:${y/rows*100}%;width:${100/cols-.18}%;height:${100/rows-.55}%;background-position:${(x*19)%100}% ${(y*23)%100}%`;tile.style.backgroundImage=`url("${src(projects[(x+y)%5][0])}")`;tileField.appendChild(tile);tiles.push({el:tile,x:(x+.5)/cols,y:(y+.5)/rows});
  }
  tileField.addEventListener('pointermove',e=>{
    if(reduced)return;const r=tileField.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;
    tiles.forEach(tile=>{const dx=tile.x-x,dy=tile.y-y,dist=Math.hypot(dx,dy),strength=Math.max(0,1-dist/.2);gsap.to(tile.el,{x:dx*strength*130,y:dy*strength*130,rotation:strength*dx*60,duration:.45,overwrite:'auto'});});
  });
  tileField.addEventListener('pointerleave',()=>gsap.to(tiles.map(t=>t.el),{x:0,y:0,rotation:0,duration:.9,ease:'elastic.out(1,.7)',overwrite:'auto'}));
  document.querySelectorAll('[data-picker]').forEach(picker=>{
    picker.innerHTML=projects.map(([id,title],i)=>`<button type="button" data-project="${id}" class="${(picker.dataset.picker==='scanner'&&i===1)?'active':''}">${title}</button>`).join('');
    picker.addEventListener('click',e=>{const button=e.target.closest('button');if(!button)return;picker.querySelectorAll('button').forEach(el=>el.classList.toggle('active',el===button));const id=button.dataset.project;
      if(picker.dataset.picker==='scanner'){scan.style.backgroundImage=`url("${src(id)}")`;gsap.fromTo(scan,{opacity:.25},{opacity:1,duration:reduced?0:.6});}
      else{tiles.forEach(tile=>tile.el.style.backgroundImage=`url("${src(id)}")`);gsap.fromTo(tiles.map(t=>t.el),{opacity:.2},{opacity:1,duration:reduced?0:.5,stagger:reduced?0:.002,overwrite:'auto'});}
    });
  });
  document.querySelectorAll('[data-view]').forEach(button=>button.addEventListener('click',()=>{
    const view=button.dataset.view;history.replaceState(null,'','#'+view);document.querySelectorAll('[data-hero]').forEach(el=>el.hidden=el.dataset.hero!==view);document.querySelectorAll('[data-view]').forEach(el=>{el.classList.toggle('selected',el===button);el.setAttribute('aria-pressed',String(el===button));});document.querySelector('#concept-name').textContent=notes[view][0];document.querySelector('#concept-description').textContent=notes[view][1];if(!reduced)gsap.fromTo(`[data-hero="${view}"]`,{opacity:.3},{opacity:1,duration:.5});
  }));
  const initial=location.hash.slice(1);if(notes[initial])document.querySelector(`[data-view="${initial}"]`).click();
  window.addEventListener('hashchange',()=>{const view=location.hash.slice(1);if(notes[view])document.querySelector(`[data-view="${view}"]`).click();});
})();
