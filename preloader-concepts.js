(()=>{
  const names={point:'Точка схода',facets:'Восемь граней',focus:'Наведение резкости'};
  const bar=document.querySelector('.preloader-demo-bar'),feedback=document.querySelector('.demo-feedback');
  const hero=document.querySelector('.perspective-hero');
  const surfaces=[document.querySelector('.header'),document.querySelector('main'),document.querySelector('footer')];
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  document.body.classList.add('demo-boot');
  let mode=names[location.hash.slice(1)]?location.hash.slice(1):'point',timeline,loader,fallback,started=false;
  function finish(){
    clearTimeout(fallback);timeline?.kill();loader?.remove();loader=null;
    gsap.set(hero,{clearProps:'filter,transform,opacity'});
    gsap.set(hero.querySelectorAll('.perspective-caption,.perspective-info'),{clearProps:'opacity'});
    gsap.set(surfaces,{clearProps:'opacity'});surfaces.forEach(el=>el.inert=false);
    document.body.classList.remove('demo-running');
    document.body.classList.remove('demo-boot');
    feedback.textContent=reduced.matches?'Уменьшенное движение · анимация пропущена':names[mode]+' · просмотр завершён';
  }
  function makeStage(){
    const source=hero.querySelector('.perspective-stage'),rect=source.getBoundingClientRect();
    const stage=document.createElement('div');stage.className='concept-stage';
    Object.assign(stage.style,{left:rect.left+'px',top:rect.top+'px',width:rect.width+'px',height:rect.height+'px',perspective:getComputedStyle(source).perspective});
    const world=document.createElement('div');world.className='concept-world';stage.append(world);loader.append(stage);
    const sourceWorld=source.querySelector('.perspective-world');
    const worldTarget=Object.fromEntries(['x','y','rotationX','rotationY'].map(key=>[key,Number(gsap.getProperty(sourceWorld,key))]));
    gsap.set(world,worldTarget);
    const cards=[...hero.querySelectorAll('.perspective-card')];
    const targets=cards.map(card=>Object.fromEntries(['x','y','z','rotationY','scale','opacity'].map(key=>[key,Number(gsap.getProperty(card,key))])));
    const planes=cards.map(card=>{const plane=document.createElement('div');plane.className='concept-plane';plane.style.width=card.offsetWidth+'px';plane.innerHTML=card.querySelector('.perspective-art').innerHTML;plane.style.zIndex=card.style.zIndex;world.append(plane);return plane;});
    gsap.set(planes,{xPercent:-50,yPercent:-50});
    return{stage,world,worldTarget,planes,targets,width:rect.width,height:rect.height};
  }
  function reveal(at){
    timeline.to(surfaces,{opacity:1,duration:.45},at);
    timeline.to(loader,{opacity:0,duration:.35},at+.18);
  }
  function point(){
    gsap.set(surfaces,{opacity:0});
    const{stage,planes,targets,width,height}=makeStage();
    const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');svg.classList.add('concept-grid');svg.setAttribute('viewBox',`0 0 ${width} ${height}`);
    const ends=[[-width*.2,0],[width*.18,0],[width*.82,0],[width*1.2,0],[-width*.2,height],[width*.18,height],[width*.82,height],[width*1.2,height]];
    ends.forEach(([x,y],i)=>{const line=document.createElementNS(svg.namespaceURI,'line');line.setAttribute('x1',width/2);line.setAttribute('y1',height/2);line.setAttribute('x2',x);line.setAttribute('y2',y);const length=Math.hypot(x-width/2,y-height/2);line.style.strokeDasharray=length;line.style.strokeDashoffset=length;if(i===5)line.classList.add('grid-accent');svg.append(line);});
    stage.prepend(svg);const dot=document.createElement('div');dot.className='concept-dot';stage.append(dot);
    gsap.set(planes,{x:0,y:0,z:-900,scale:.08,rotationY:0,opacity:0});
    timeline.from(dot,{scale:0,opacity:0,duration:.24},0)
      .to(svg.children,{strokeDashoffset:0,duration:.65,stagger:.025,ease:'power2.inOut'},.13);
    planes.forEach((plane,i)=>timeline.to(plane,{...targets[i],duration:1.12,ease:'power3.inOut'},.48+i*.025));
    timeline.to(svg,{opacity:0,duration:.45},1.25).to(dot,{scale:0,opacity:0,duration:.3},1.25);
    reveal(1.55);
  }
  function facets(){
    gsap.set(surfaces,{opacity:0});
    const{world,worldTarget,planes,targets}=makeStage();
    const size=planes[0].offsetWidth,scale=innerWidth<=600?.48:.43,radius=size*scale/(2*Math.tan(Math.PI/8));
    gsap.set(world,{rotationX:-18,rotationZ:-8,rotationY:-35,transformOrigin:'50% 50%'});
    planes.forEach((plane,i)=>{const a=i*Math.PI/4;gsap.set(plane,{x:Math.sin(a)*radius,y:0,z:Math.cos(a)*radius,rotationY:i*45,scale,opacity:1});plane.style.zIndex='auto';});
    timeline.from(world,{scale:.75,opacity:0,duration:.42,ease:'power2.out'},0)
      .to(world,{rotationY:70,duration:1.1,ease:'power2.inOut'},.05)
      .to(world,{...worldTarget,rotationZ:0,duration:.9,ease:'power3.inOut'},1.0);
    planes.forEach((plane,i)=>timeline.to(plane,{...targets[i],rotationY:targets[i].rotationY+(i>4?360:0),duration:1.04,ease:'power3.inOut',onComplete:()=>plane.style.zIndex=String(Math.round(targets[i].z)+200)},1+i*.02));
    reveal(1.95);
  }
  function focus(){
    loader.classList.add('is-focus');
    const caption=hero.querySelector('.perspective-caption'),info=hero.querySelector('.perspective-info');
    gsap.set([surfaces[0],caption,info],{opacity:0});
    gsap.set(hero,{filter:'blur(18px)',scale:1.035});
    const cards=[...hero.querySelectorAll('.perspective-card')];const front=cards.reduce((a,b)=>Number(gsap.getProperty(a,'z'))>Number(gsap.getProperty(b,'z'))?a:b);
    const rect=front.getBoundingClientRect();
    const frames=[0,1].map(i=>{const frame=document.createElement('div');frame.className='focus-frame';Object.assign(frame.style,{left:rect.left+'px',top:rect.top+'px',width:rect.width+'px',height:rect.height+'px'});if(!i)frame.innerHTML='<span class="focus-caption">ПОИСК ФОКУСА</span>';loader.append(frame);return frame;});
    const tick=document.createElement('div');tick.className='focus-tick';frames[0].append(tick);
    gsap.set(frames[0],{x:-Math.min(110,innerWidth*.14),y:28,scale:1.18,opacity:0});
    gsap.set(frames[1],{x:Math.min(100,innerWidth*.13),y:-28,scale:.88,opacity:0});
    timeline.to(frames,{opacity:1,duration:.3},0)
      .to(frames[0],{x:24,y:-8,scale:1.04,duration:.65,ease:'power2.inOut'},.15)
      .to(frames[1],{x:-20,y:8,scale:.97,duration:.65,ease:'power2.inOut'},.15)
      .to(frames,{x:0,y:0,scale:1,duration:.55,ease:'power3.inOut'},.8)
      .to(hero,{filter:'blur(0px)',scale:1,duration:.75,ease:'power3.inOut'},.85)
      .call(()=>frames[0].querySelector('.focus-caption').textContent='ФОКУС НАЙДЕН',[],1.35)
      .to([surfaces[0],caption,info],{opacity:1,duration:.5},1.4)
      .to(frames,{opacity:0,duration:.4},1.6).to(loader,{opacity:0,duration:.3},1.85);
    // These two elements have their own opacity during the focus sequence.
    timeline.set([caption,info],{clearProps:'opacity'},2.15);
  }
  function play(next=mode){
    started=true;
    finish();mode=next;history.replaceState(null,'','#'+mode);
    bar.querySelectorAll('[data-concept]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.concept===mode)));
    if(reduced.matches)return;
    scrollTo({top:0,behavior:'instant'});
    feedback.textContent=names[mode]+' · '+(document.querySelector('#demo-slow').checked?'замедленно':'обычная скорость');
    surfaces.forEach(el=>el.inert=true);document.body.classList.add('demo-running');
    loader=document.createElement('div');loader.className='concept-loader';loader.setAttribute('aria-hidden','true');
    loader.innerHTML=`<span class="concept-label">Александр Чеботарев</span><div class="concept-foot"><span>${names[mode].toUpperCase()}</span><span>ИЗБРАННЫЕ ПРОЕКТЫ / 01—08</span></div>`;document.body.append(loader);
    timeline=gsap.timeline({onComplete:finish});({point,facets,focus})[mode]();
    timeline.timeScale(document.querySelector('#demo-slow').checked?.45:1);
    fallback=setTimeout(finish,10000);
  }
  bar.addEventListener('click',event=>{const button=event.target.closest('button');if(button)play(button.dataset.concept||mode);});
  document.querySelector('#demo-slow').addEventListener('change',()=>play());
  addEventListener('keydown',event=>{if(event.key==='Escape')finish();});
  addEventListener('resize',()=>{if(loader)finish();});
  reduced.addEventListener('change',finish);
  // Let the existing gallery settle and fonts finish before recording its geometry.
  document.fonts.ready.then(()=>setTimeout(()=>{if(!started)play();},1450));
})();
