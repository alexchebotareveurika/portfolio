(()=>{
  const names={spray:'Shake → Spray → Rock',poster:'Сорвать афишу',glass:'Удар по стеклу',reverse:'Обратный взрыв',signal:'Захват сигнала'};
  const bar=document.querySelector('.rock-controls'),feedback=document.querySelector('.demo-feedback'),hero=document.querySelector('.perspective-hero');
  const surfaces=[document.querySelector('.header'),document.querySelector('main'),document.querySelector('footer')];
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  const pause=document.createElement('button');pause.type='button';pause.dataset.pause='';pause.textContent='Ⅱ Пауза';pause.disabled=true;pause.setAttribute('aria-label','Приостановить анимацию');bar.insertBefore(pause,bar.querySelector('.demo-speed'));
  let mode=names[location.hash.slice(1)]?location.hash.slice(1):'spray',tl,layer,timer,tick,started=false,svgSource='',request=0;
  const artReady=fetch('assets/rock-hand.svg').then(response=>{if(!response.ok)throw Error('SVG недоступен');return response.text();}).then(source=>svgSource=source);
  const imageReady=new Promise(resolve=>{const image=new Image();image.onload=resolve;image.onerror=resolve;image.src='assets/rock-hand.svg';});
  document.body.classList.add('demo-boot');
  function finish(){
    request++;
    clearTimeout(timer);tl?.kill();if(tick)gsap.ticker.remove(tick);tick=null;layer?.remove();layer=null;
    pause.disabled=true;pause.textContent='Ⅱ Пауза';pause.setAttribute('aria-label','Приостановить анимацию');
    gsap.set(surfaces,{clearProps:'opacity,transform,filter'});gsap.set(hero,{clearProps:'filter,transform'});
    surfaces.forEach(el=>el.inert=false);document.body.classList.remove('demo-running','demo-boot');
    feedback.textContent=reduced.matches?'Уменьшенное движение · анимация пропущена':names[mode]+' · просмотр завершён';
  }
  function el(className,markup='',parent=layer){const node=document.createElement('div');node.className=className;node.innerHTML=markup;parent.append(node);return node;}
  function sign(parent=layer){return el('rock-sign','<img src="assets/rock-hand.svg" alt="">',parent);}
  function phase(text){layer.querySelector('.rock-phase').textContent=text;}
  function reveal(at,duration=.5){tl.to(layer,{opacity:0,duration,ease:'power2.inOut'},at).fromTo(hero,{y:18},{y:0,duration:.7,ease:'power3.out'},at);}
  function wipe(at){const ink=el('rock-wipe');gsap.set(ink,{scale:0});tl.to(ink,{scale:Math.hypot(innerWidth,innerHeight)/32,duration:.4,ease:'power3.in'},at).to(layer,{clipPath:'inset(0 0 100% 0)',duration:.65,ease:'power4.inOut'},at+.42);}
  function spray(){
    const mark=el('rock-sign',svgSource);const stamps=[...mark.querySelectorAll('mask use')];
    const path=stamps.map(stamp=>{const matrix=stamp.transform.baseVal.consolidate().matrix;return{x:matrix.e,y:matrix.f};});
    gsap.set(stamps,{opacity:0});
    const can=el('spray-can','<div class="can-neck"></div><div class="can-body"><span class="can-label">ROCK.<small>АЧ / BLUE EDITION</small></span><i class="can-rim"></i></div><div class="can-nozzle"></div>');
    const echoes=[el('shake-echo'),el('shake-echo')];gsap.set(echoes,{opacity:0});
    const canvas=document.createElement('canvas');canvas.className='rock-canvas';layer.append(canvas);const ctx=canvas.getContext('2d');
    const ratio=Math.min(devicePixelRatio,2);canvas.width=innerWidth*ratio;canvas.height=innerHeight*ratio;ctx.scale(ratio,ratio);
    const r=mark.getBoundingClientRect(),progress={value:0},particles=[];let spraying=false,lastTime=performance.now();
    function nozzle(){const p=path[Math.min(path.length-1,Math.floor(progress.value*(path.length-1)))];return{x:r.left+p.x/1106*r.width,y:r.top+p.y/1106*r.height};}
    tick=()=>{const now=performance.now(),dt=Math.min((now-lastTime)/1000,.04);lastTime=now;if(tl?.paused())return;ctx.clearRect(0,0,innerWidth,innerHeight);
      if(spraying){const p=nozzle();for(let i=0;i<8;i++)particles.push({x:p.x+12,y:p.y-6,vx:-35-Math.random()*85,vy:(Math.random()-.5)*180,life:.18+Math.random()*.3,max:.5,size:.4+Math.random()*2.4});}
      for(let i=particles.length-1;i>=0;i--){const p=particles[i];p.life-=dt;p.x+=p.vx*dt;p.y+=p.vy*dt;if(p.life<=0){particles.splice(i,1);continue;}ctx.globalAlpha=Math.min(1,p.life/p.max)*.5;ctx.fillStyle='#0267ff';ctx.beginPath();ctx.arc(p.x,p.y,p.size,0,Math.PI*2);ctx.fill();}ctx.globalAlpha=1;
    };gsap.ticker.add(tick);
    gsap.set(can,{x:-38,y:-65,rotation:-15});
    tl.from(can,{y:innerHeight*.6,rotation:35,opacity:0,duration:.45,ease:'power3.out'},0)
      .to(can,{x:-54,y:-93,rotation:15,duration:.085,repeat:5,yoyo:true,ease:'none'},.45)
      .fromTo(echoes,{scale:.65,opacity:.6},{scale:1.65,opacity:0,duration:.45,stagger:.18},.45)
      .call(()=>phase('02 / SPRAY'),[],1.0)
      .to(can,{rotation:27,duration:.18},1.0)
      .call(()=>spraying=true,[],1.15)
      .to(progress,{value:1,duration:1.7,ease:'none',onUpdate:()=>{const p=nozzle();gsap.set(can,{x:p.x-innerWidth/2+22,y:p.y-innerHeight*.46-12});}},1.15)
      .to(stamps,{opacity:1,duration:.07,stagger:1.7/Math.max(1,stamps.length-1),ease:'none'},1.15)
      .call(()=>{spraying=false;phase('03 / ROCK');},[],2.95)
      .to(can,{x:innerWidth*.5,y:innerHeight*.65,rotation:65,opacity:0,duration:.42,ease:'power2.in'},2.95)
      .to(mark,{rotation:-7,scale:1.1,duration:.18,ease:'power3.out'},3.08);
    wipe(3.4);
  }
  function poster(){
    const poster=el('rock-poster','<h2 class="poster-heading">DESIGN<span>LOUD.</span></h2><div class="poster-strip">UX/UI & ART DIRECTION — ALEXANDER CHEBOTAREV — SELECTED WORK —</div><div class="poster-footer"><span>АВТОРСКИЙ ДИЗАЙН / 2026</span><span>ВХОД СВОБОДНЫЙ ↗</span></div>');sign(poster);
    const fold=el('paper-fold','',poster),remnant=el('poster-remnant');gsap.set(remnant,{opacity:0});
    tl.from(poster,{scale:1.08,duration:.5,ease:'power3.out'},0)
      .to(fold,{width:280,height:280,duration:.45,ease:'power2.inOut'},.55)
      .to(poster,{rotation:-1.4,x:-12,y:8,duration:.09,repeat:3,yoyo:true},.9)
      .call(()=>phase('02 / RIP'),[],1.2)
      .set(remnant,{opacity:1},1.25)
      .to(poster,{clipPath:'polygon(0% 0%, 82% 0%, 79% 6%, 88% 12%, 76% 19%, 83% 28%, 72% 37%, 85% 45%, 78% 54%, 88% 64%, 81% 72%, 92% 85%, 100% 100%, 0% 100%)',duration:.15},1.25)
      .to(poster,{x:-innerWidth*1.15,y:innerHeight*.6,rotation:-26,rotationY:-38,skewY:12,duration:.85,ease:'power4.in'},1.25)
      .to(layer,{backgroundColor:'rgba(246,246,242,0)',duration:.15},1.25)
      .to(layer.querySelectorAll('.rock-meta,.rock-bottom,.rock-phase'),{opacity:0,duration:.2},1.25)
      .to(remnant,{rotation:18,x:innerWidth*.25,y:-innerHeight*.3,opacity:0,duration:.5,ease:'power3.in'},2.12)
      .fromTo(hero,{y:16},{y:0,duration:.65,ease:'power3.out'},1.55);
  }
  function glass(){
    const scene=el('glass-scene');sign(scene);
    const ns='http://www.w3.org/2000/svg',svg=document.createElementNS(ns,'svg');svg.classList.add('glass-cracks');svg.setAttribute('viewBox','0 0 1000 1000');svg.setAttribute('preserveAspectRatio','none');scene.append(svg);
    const edges=[[0,0],[340,0],[720,0],[1000,0],[1000,360],[1000,750],[1000,1000],[650,1000],[220,1000],[0,1000],[0,650],[0,260]];
    const crackPaths=[];
    edges.forEach(([x,y],i)=>{const path=document.createElementNS(ns,'path');const mx=500+(x-500)*.48+(i%2?25:-25),my=460+(y-460)*.48;path.setAttribute('d',`M500 460 L${mx} ${my} L${x} ${y} M${mx} ${my} l${i%2?55:-55} 35`);svg.append(path);const length=path.getTotalLength();gsap.set(path,{strokeDasharray:length,strokeDashoffset:length});crackPaths.push(path);});
    const ring=el('impact-ring');gsap.set(ring,{opacity:0});
    tl.from(scene,{opacity:0,scale:1.12,duration:.4},0)
      .to(scene,{x:9,y:5,rotation:.7,duration:.04,repeat:5,yoyo:true},.55)
      .fromTo(ring,{scale:0,opacity:.8},{scale:11,opacity:0,duration:.5},.55)
      .to(crackPaths,{strokeDashoffset:0,duration:.36,stagger:.016,ease:'power4.out'},.56)
      .call(()=>phase('02 / BREAK'),[],1.25);
    const shards=edges.map(([x,y],i)=>{const next=edges[(i+1)%edges.length];const shard=el('glass-shard');shard.style.clipPath=`polygon(50% 46%,${x/10}% ${y/10}%,${next[0]/10}% ${next[1]/10}%)`;sign(shard);gsap.set(shard,{opacity:0});return{shard,x:(x+next[0])/2-500,y:(y+next[1])/2-460};});
    tl.set(shards.map(s=>s.shard),{opacity:1},1.28).set(scene,{opacity:0},1.28)
      .to(layer,{backgroundColor:'rgba(246,246,242,0)',duration:.1},1.28)
      .to(layer.querySelectorAll('.rock-meta,.rock-bottom,.rock-phase'),{opacity:0,duration:.15},1.28);
    shards.forEach(({shard,x,y},i)=>tl.to(shard,{x:x*innerWidth/600,y:y*innerHeight/600,z:550,rotationX:(i%2?1:-1)*32,rotationY:(i%3-1)*45,rotationZ:(i%2?1:-1)*18,scale:1.65,opacity:0,duration:.85,ease:'power3.in'},1.3+i*.018));
    tl.fromTo(hero,{scale:.98},{scale:1,duration:.7},1.45);
  }
  function reverse(){
    const mark=sign();gsap.set(mark,{opacity:0});
    const size=mark.getBoundingClientRect().width,n=7,tiles=[];
    for(let row=0;row<n;row++)for(let col=0;col<n;col++){
      const tile=el('reverse-tile','<img src="assets/rock-hand.svg" alt="">');const cell=size/n;
      Object.assign(tile.style,{width:cell+.5+'px',height:cell+.5+'px'});Object.assign(tile.firstChild.style,{width:size+'px',left:-col*cell+'px',top:-row*cell+'px'});
      const x=col*cell-size/2,y=row*cell-size/2,angle=Math.atan2(y,x),distance=120+Math.random()*Math.max(innerWidth,innerHeight)*.65;
      gsap.set(tile,{x:Math.cos(angle)*distance,y:Math.sin(angle)*distance,rotation:Math.random()*200-100,scale:.4+Math.random()*.8,opacity:.5});tiles.push({tile,x,y});
    }
    const dust=Array.from({length:90},()=>{const p=el('reverse-dust');const a=Math.random()*Math.PI*2,r=150+Math.random()*innerWidth*.7;gsap.set(p,{x:Math.cos(a)*r,y:Math.sin(a)*r,scale:Math.random()*2,opacity:.5});return p;});
    const type=['UX','UI','АЧ','↗','08'].map((text,i)=>{const p=el('reverse-type',text);gsap.set(p,{x:(i-2)*innerWidth*.16,y:(i%2?1:-1)*innerHeight*.25,rotation:(i-2)*12});return p;});
    phase('01 / REWIND');
    tiles.forEach(({tile,x,y},i)=>tl.to(tile,{x,y,rotation:0,scale:1,opacity:1,duration:1.25,ease:'power4.inOut'},.18+i*.006));
    tl.to(dust,{x:0,y:0,opacity:0,duration:1.2,stagger:.003,ease:'power4.in'},.1).to(type,{x:0,y:0,scale:0,opacity:0,duration:1,ease:'power4.in'},.25);
    tl.set(mark,{opacity:1},1.75).set(tiles.map(s=>s.tile),{opacity:0},1.75).call(()=>phase('02 / RELEASE'),[],1.75)
      .to(mark,{rotationY:90,scale:.7,duration:.48,ease:'power3.in'},2.0);
    const cards=[...hero.querySelectorAll('.perspective-card')];const covers=cards.map((card,i)=>{const p=el('reverse-cover',card.querySelector('.perspective-art').innerHTML);gsap.set(p,{opacity:0,scale:.2,rotationY:-90});return p;});
    covers.forEach((cover,i)=>{const a=(i-3.5)*.24;tl.to(cover,{opacity:1,x:Math.sin(a)*Math.min(innerWidth*.48,600),y:Math.cos(a)*-35,rotationY:a*35,rotationZ:a*12,scale:1,duration:.55,ease:'power3.out'},2.2+i*.025);});
    reveal(2.9,.5);
  }
  function signal(){
    const title=el('signal-title','АЧ'),subtitle=el('signal-subtitle','PORTFOLIO / SIGNAL 0267');el('signal-ruler');
    tl.from(title,{scaleX:.7,opacity:0,duration:.32,ease:'power4.out'},0).from(subtitle,{opacity:0,duration:.3},.2);
    const bands=Array.from({length:7},(_,i)=>{const band=el('signal-band');band.style.top=i*14.3+'%';const text=el('signal-title','АЧ',band);text.style.top=innerHeight*.45-i*innerHeight*.143+'px';text.style.transform='translate(-50%,-50%)';gsap.set(band,{opacity:0});return band;});
    tl.set(bands,{opacity:1},.65).set(title,{opacity:0},.65);
    bands.forEach((band,i)=>{tl.to(band,{x:(i%2?1:-1)*(30+i*13),duration:.065,repeat:3,yoyo:true,ease:'steps(1)'},.65+i*.025);tl.to(band,{x:(i%2?1:-1)*innerWidth*.22,scaleX:1.3,duration:.075,ease:'steps(1)'},1.02+i*.018);});
    const takeover=el('signal-intercept');sign(takeover);gsap.set(takeover,{opacity:0});
    const line=el('signal-line');gsap.set(line,{top:'15%',scaleX:0});
    tl.to(line,{scaleX:1,duration:.12},.8).to(line,{top:'75%',duration:.4,ease:'steps(5)'},.92)
      .set(takeover,{opacity:1},1.2).set([bands,subtitle,line].flat(),{opacity:0},1.2)
      .fromTo(takeover.querySelector('.rock-sign'),{scale:1.4,rotation:-10},{scale:1,rotation:4,duration:.35,ease:'power4.out'},1.2)
      .call(()=>phase('02 / SIGNAL FOUND'),[],1.55);
    const slices=Array.from({length:8},(_,i)=>{const slice=el('signal-intercept');slice.style.clipPath=`inset(${i*12.5}% 0 ${100-(i+1)*12.5}% 0)`;sign(slice);gsap.set(slice,{opacity:0});return slice;});
    tl.set(slices,{opacity:1},1.9).set(takeover,{opacity:0},1.9).to(layer,{backgroundColor:'rgba(246,246,242,0)',duration:.05},1.9)
      .to(layer.querySelectorAll('.rock-meta,.rock-bottom,.rock-phase,.signal-ruler'),{opacity:0,duration:.1},1.9);
    slices.forEach((slice,i)=>tl.to(slice,{x:(i%2?1:-1)*innerWidth*1.15,duration:.42,ease:'power4.in'},1.94+i*.025));
    tl.fromTo(hero,{x:-12,opacity:.5},{x:0,opacity:1,duration:.35,ease:'power3.out'},2.18);
  }
  async function play(next=mode){
    started=true;finish();const currentRequest=request;mode=next;history.replaceState(null,'','#'+mode);
    bar.querySelectorAll('[data-mode]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.mode===mode)));
    if(reduced.matches){finish();return;}
    try{await artReady;await imageReady;}catch{feedback.textContent='Не удалось загрузить SVG. Сайт доступен.';return;}
    // A second click can supersede asset preparation on the first run.
    if(currentRequest!==request)return;
    scrollTo({top:0,behavior:'instant'});surfaces.forEach(node=>node.inert=true);document.body.classList.add('demo-running');
    layer=el('rock-loader','',document.body);layer.setAttribute('aria-hidden','true');layer.dataset.mode=mode;
    layer.innerHTML=`<div class="rock-meta"><span>Александр Чеботарев</span><span>PRELOADER STUDIES / VOL. 02</span></div><span class="rock-bottom">${names[mode].toUpperCase()}</span><span class="rock-phase">01 / READY</span>`;
    feedback.textContent=names[mode]+' · '+(document.querySelector('#rock-slow').checked?'замедленно':'обычная скорость');
    timer=setTimeout(finish,16000);
    try{tl=gsap.timeline({onComplete:finish});({spray,poster,glass,reverse,signal})[mode]();tl.timeScale(document.querySelector('#rock-slow').checked?.4:1);pause.disabled=false;}catch(error){finish();feedback.textContent='Анимация остановлена. Сайт доступен.';console.error(error);}
  }
  bar.addEventListener('click',event=>{const button=event.target.closest('button');if(!button)return;if(button===pause){if(!layer||!tl)return;clearTimeout(timer);const resume=tl.paused();tl.paused(!resume);pause.textContent=resume?'Ⅱ Пауза':'▷ Продолжить';pause.setAttribute('aria-label',resume?'Приостановить анимацию':'Продолжить анимацию');if(resume)timer=setTimeout(finish,16000);return;}play(button.dataset.mode||mode);});
  document.querySelector('#rock-slow').addEventListener('change',()=>play());
  addEventListener('keydown',event=>{if(event.key==='Escape')finish();});addEventListener('resize',()=>{if(layer)finish();});reduced.addEventListener('change',finish);
  Promise.all([document.fonts.ready,artReady,imageReady]).then(()=>setTimeout(()=>{if(!started)play();},1450)).catch(()=>{finish();feedback.textContent='Не удалось загрузить SVG.';});
})();
