(() => {
  const projects=[['red-path','Красный путь'],['credo','Credo'],['global-digital','Global digital group'],['mens-club','Мужской клуб'],['kozikhinsky','Козихинский 22']];
  const media=window.portfolioMedia,src=id=>media[id][0].src;
  const artwork={credo:{src:media.credo[1].src,ratio:1512/982,scale:1.2,x:.85,y:.54},'red-path':{src:media['red-path'][1].src,ratio:1512/983,scale:1.12,x:.5,y:.5},'global-digital':{src:media['global-digital'][1].src,ratio:1280/869,scale:1.05,x:.5,y:.45},'mens-club':{src:media['mens-club'][0].src,ratio:375/812,scale:1,x:.5,y:.2},kozikhinsky:{src:media.kozikhinsky[1].src,ratio:1512/982,scale:1.05,x:.5,y:.48}};
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const notes={scanner:['01 — Сканер','Первый экран как инструмент исследования: снаружи — структура, внутри линзы — готовый дизайн. Движение курсора раскрывает детали. Выбор проекта меняет всё поле.'],mixer:['02 — Микшер','Сайт отвечает на действие посетителя: баланс «структура / характер» меняет плотность, типографику и композицию работ. Это первое впечатление о твоём подходе к дизайну.'],poster:['03 — Живой плакат','Слово FORM собрано из фрагментов реальных работ. Курсор раздвигает части и собирает их обратно; выбор проекта меняет материал всего плаката.']};
  const scan=document.querySelector('.scan-picture'),field=document.querySelector('.scan-field');
  const ghost=document.querySelector('.scan-ghost');
  const paintScan=id=>{const art=artwork[id];[scan,ghost].forEach(el=>{el.style.backgroundImage=`url("${art.src}")`;const rect=field.getBoundingClientRect();el.style.backgroundSize=`${Math.max(rect.width,rect.height*art.ratio)*art.scale}px auto`;el.style.backgroundPosition=`${art.x*100}% ${art.y*100}%`;});};
  let scanId='credo';paintScan(scanId);new ResizeObserver(()=>paintScan(scanId)).observe(field);
  const lens={x:70,y:48,r:innerWidth<900?31:21};let scanOpen=false;
  const reveal=()=>scan.style.clipPath=`circle(${lens.r}% at ${lens.x}% ${lens.y}%)`;
  field.addEventListener('pointermove',e=>{if(scanOpen)return;const r=field.getBoundingClientRect();gsap.to(lens,{x:(e.clientX-r.left)/r.width*100,y:(e.clientY-r.top)/r.height*100,duration:reduced?0:.4,overwrite:'auto',onUpdate:reveal});});
  document.querySelector('.scan-action').addEventListener('click',()=>{scanOpen=!scanOpen;gsap.to(lens,{r:scanOpen?145:innerWidth<900?31:21,duration:reduced?0:1.5,ease:'expo.inOut',onUpdate:reveal});gsap.to('.scan-field h1,.scan-copy,.scan-instruction',{opacity:scanOpen?0:1,duration:reduced?0:.5});document.querySelector('.scan-action').textContent=scanOpen?'Вернуть линзу ↙':'Раскрыть кадр ↗';});
  document.querySelector('.mix-cards').innerHTML=projects.map(([id,title])=>`<a class="mix-card ${id==='mens-club'?'phone':''}" href="index.html#${id}" aria-label="${title}"><img src="${src(id)}" alt="${title}"></a>`).join('');
  const mixCards=[...document.querySelectorAll('.mix-card')];
  const mix=value=>{
    const amount=value/100;
    mixCards.forEach((card,i)=>gsap.to(card,{y:(i%2?-1:1)*amount*(i===1?85:45),rotation:amount*[-7,4,-3,9,-6][i],scale:1+amount*(i===1?.35:-.08),duration:reduced?0:.65,ease:'power3.out',overwrite:'auto'}));
    gsap.to('.mix-type h1',{letterSpacing:(-.045-amount*.04)+'em',fontWeight:400+Math.round(amount*140),duration:reduced?0:.65,overwrite:'auto'});
  };
  document.querySelector('.mix-control input').addEventListener('input',e=>mix(Number(e.target.value)));mix(30);
  const canvas=document.createElement('canvas');canvas.width=680;canvas.height=210;const ctx=canvas.getContext('2d');ctx.font='900 210px Arial';ctx.textBaseline='middle';ctx.fillText('FORM',0,118);const pixels=ctx.getImageData(0,0,680,210).data;
  const tileField=document.querySelector('.tile-field'),tiles=[];const cols=60,rows=20;let posterId='kozikhinsky',posterOpen=false;
  const wholePoster=document.createElement('div');wholePoster.className='poster-image';tileField.appendChild(wholePoster);
  for(let y=0;y<rows;y++)for(let x=0;x<cols;x++){
    const px=Math.floor((x+.5)*680/cols),py=Math.floor((y+.5)*210/rows);
    const inside=pixels[(py*680+px)*4+3]>=80;
    const tile=document.createElement('div');tile.className='tile';tile.style.cssText=`left:${x/cols*100}%;top:${y/rows*100}%;width:${100/cols+.1}%;height:${100/rows+.2}%;opacity:${inside?1:0}`;tileField.appendChild(tile);tiles.push({el:tile,x:(x+.5)/cols,y:(y+.5)/rows,col:x,row:y,inside});
  }
  const paintPoster=()=>{const r=tileField.getBoundingClientRect();if(!r.width)return;const art=artwork[posterId],w=r.width*art.scale,h=w/art.ratio,ox=(r.width-w)*art.x,oy=(r.height-h)*art.y;wholePoster.style.backgroundImage=`url("${art.src}")`;wholePoster.style.backgroundSize=`${w}px ${h}px`;wholePoster.style.backgroundPosition=`${ox}px ${oy}px`;tiles.forEach(tile=>{tile.el.style.backgroundImage=`url("${art.src}")`;tile.el.style.backgroundSize=`${w}px ${h}px`;tile.el.style.backgroundPosition=`${ox-tile.col*r.width/cols}px ${oy-tile.row*r.height/rows}px`;});};
  new ResizeObserver(paintPoster).observe(tileField);
  const expandPoster=()=>{posterOpen=!posterOpen;gsap.to(wholePoster,{opacity:posterOpen?1:0,duration:reduced?0:.2,delay:reduced||!posterOpen?0:1.25,overwrite:true});tiles.forEach(tile=>gsap.to(tile.el,{opacity:posterOpen||tile.inside?1:0,x:0,y:0,rotation:0,duration:reduced?0:.9,delay:reduced?0:Math.hypot(tile.x-.5,tile.y-.5)*.65,ease:'power3.inOut',overwrite:'auto'}));document.querySelector('.poster-action').textContent=posterOpen?'Собрать плакат ↙':'Раскрыть проект ↗';};
  document.querySelector('.poster-action').addEventListener('click',expandPoster);
  tileField.addEventListener('pointermove',e=>{
    if(reduced||posterOpen)return;const r=tileField.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;
    tiles.filter(tile=>tile.inside).forEach(tile=>{const dx=tile.x-x,dy=tile.y-y,dist=Math.hypot(dx,dy),strength=Math.max(0,1-dist/.2);gsap.to(tile.el,{x:dx*strength*170,y:dy*strength*170,rotation:strength*dx*45,duration:.45,overwrite:'auto'});});
  });
  tileField.addEventListener('pointerleave',()=>gsap.to(tiles.map(t=>t.el),{x:0,y:0,rotation:0,duration:reduced?0:.9,ease:'elastic.out(1,.7)',overwrite:'auto'}));
  document.querySelectorAll('[data-picker]').forEach(picker=>{
    picker.innerHTML=projects.map(([id,title],i)=>`<button type="button" data-project="${id}" class="${(picker.dataset.picker==='scanner'?i===1:id===posterId)?'active':''}">${title}</button>`).join('');
    picker.addEventListener('click',e=>{const button=e.target.closest('button');if(!button)return;picker.querySelectorAll('button').forEach(el=>el.classList.toggle('active',el===button));const id=button.dataset.project;
      if(picker.dataset.picker==='scanner'){scanId=id;paintScan(id);gsap.fromTo(scan,{opacity:.25},{opacity:1,duration:reduced?0:.6});}
      else{posterId=id;paintPoster();tiles.filter(tile=>posterOpen||tile.inside).forEach((tile,i)=>gsap.fromTo(tile.el,{opacity:.2},{opacity:1,duration:reduced?0:.65,delay:reduced?0:i*.001,overwrite:'auto'}));}
    });
  });
  document.querySelectorAll('[data-view]').forEach(button=>button.addEventListener('click',()=>{
    const view=button.dataset.view;history.replaceState(null,'','#'+view);document.querySelectorAll('[data-hero]').forEach(el=>el.hidden=el.dataset.hero!==view);document.querySelectorAll('[data-view]').forEach(el=>{el.classList.toggle('selected',el===button);el.setAttribute('aria-pressed',String(el===button));});document.querySelector('#concept-name').textContent=notes[view][0];document.querySelector('#concept-description').textContent=notes[view][1];if(view==='poster')paintPoster();if(!reduced)gsap.fromTo(`[data-hero="${view}"]`,{opacity:.3},{opacity:1,duration:.5});
  }));
  const initial=location.hash.slice(1);if(notes[initial])document.querySelector(`[data-view="${initial}"]`).click();
  window.addEventListener('hashchange',()=>{const view=location.hash.slice(1);if(notes[view])document.querySelector(`[data-view="${view}"]`).click();});
})();
