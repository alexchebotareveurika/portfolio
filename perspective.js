window.PerspectiveHero=(()=>{
  let selection=1;
  let introPlayed=Boolean(window.portfolioSheetEntry);
  function mount(items,lang,reduced){
    const root=document.querySelector('.perspective-hero');if(!root)return;
    const header=document.querySelector('.header');
    const sizeHero=()=>root.style.setProperty('--hero-header-height',header.getBoundingClientRect().height+'px');
    sizeHero();
    const headerSize=new ResizeObserver(sizeHero);headerSize.observe(header);
    const stage=root.querySelector('.perspective-stage'),world=root.querySelector('.perspective-world'),status=root.querySelector('.perspective-status');
    const en=lang==='en',step=Math.PI*2/items.length;
    const formats={'mens-club':'Mobile app'};
    const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
    stage.setAttribute('aria-label',en?`${items.length} projects. Use arrow keys to rotate.`:`${items.length} проектов. Поворот стрелками на клавиатуре.`);
    const counter=root.querySelector('.perspective-counter');
    const currentNumber=counter.querySelector('.counter-current');
    counter.querySelector('.counter-total').textContent=String(items.length).padStart(2,'0');
    let counterIndex=-1;
    const zone=root.querySelector('.perspective-zone'),parallax={x:0,y:0};
    const inside=(x,y)=>{const r=zone.getBoundingClientRect();return x>=r.left&&x<=r.right&&y>=r.top&&y<=r.bottom;};
    world.innerHTML=items.map((p,i)=>`<a class="perspective-card" href="${p.href||'#'+p.id}" ${p.href?'target="_blank" rel="noopener noreferrer"':''} data-index="${i}" aria-label="${escape(p.title)}${p.href?(en?' — Figma design':' — макеты в Figma'):''}"><div class="perspective-art">${PortfolioCovers.markup(p.id)}</div><span class="perspective-name"><span class="perspective-label">${escape(p.title)}</span><span class="perspective-format">${formats[p.id]||'Web'}</span></span></a>`).join('');
    const cards=[...world.children],state={angle:-selection*step,entry:1};let targetIndex=selection;let drag=false,startX=0,startAngle=0,moved=false,visible=true;const listeners=[];
    const on=(el,type,fn,options)=>{el.addEventListener(type,fn,options);listeners.push(()=>el.removeEventListener(type,fn,options));};
    const hoverStates=cards.map(()=>({value:0,pointer:false,focus:false}));
    cards.forEach((card,i)=>{
      const hover=hoverStates[i];
      const update=()=>card.classList.toggle('is-hovered',!drag&&(hover.pointer||hover.focus));
      on(card,'pointerenter',e=>{if(e.pointerType==='mouse'){hover.pointer=true;update();}});
      on(card,'pointerleave',()=>{hover.pointer=false;update();});
      on(card,'focus',()=>{hover.focus=true;update();});
      on(card,'blur',()=>{hover.focus=false;update();});
    });
    let orbitRadius=0,hovering=false,lastInteraction=performance.now();
    let flow=0,lastFlowAngle=state.angle,artSizes=[];
    const intro={speed:0,arrival:reduced||introPlayed?0:1,active:false};let introTimeline,revealTimeline,disposed=false,introStarting=false;
    if(!reduced&&!introPlayed)gsap.set(stage,{opacity:0});
    const revealElements=[header,root.querySelector('.perspective-caption'),root.querySelector('.perspective-info')];
    const revealUI=()=>{
      if(!document.documentElement.classList.contains('hero-boot'))return;
      gsap.set(revealElements,{clipPath:'inset(100% 0% 0% 0%)'});
      gsap.set(revealElements.slice(1),{y:reduced?0:12});
      document.documentElement.classList.add('hero-gallery-ready');
      document.documentElement.classList.remove('hero-boot');
      revealTimeline=gsap.to(revealElements,{clipPath:'inset(0% 0% 0% 0%)',y:0,duration:reduced?0:.95,stagger:reduced?0:.04,ease:'power3.out',clearProps:'clipPath,transform'});
    };
    const endIntro=()=>{intro.active=false;lastInteraction=performance.now()-3501;stage.dataset.motion='idle';status.setAttribute('aria-live','polite');revealUI();};
    const cancelIntro=()=>{introTimeline?.kill();introPlayed=true;intro.active=false;intro.speed=0;intro.arrival=0;gsap.set(stage,{clearProps:'opacity'});draw();stage.dataset.motion='manual';status.setAttribute('aria-live','polite');revealUI();};
    const pauseIdle=()=>{lastInteraction=performance.now();if(!intro.active)intro.speed=0;};
    on(stage,'wheel',cancelIntro,{passive:true});on(stage,'pointerdown',cancelIntro);on(stage,'keydown',cancelIntro);
    async function startIntro(){
      if(disposed||introStarting||document.documentElement.classList.contains('is-preloading'))return;
      introStarting=true;
      await Promise.all([document.fonts.ready,...cards.map(card=>card.querySelector('img')?.decode?.().catch(()=>{}))]);
      if(disposed)return;
      sizeHero();measureOrbit();draw();
      document.documentElement.classList.add('hero-gallery-ready');
      if(reduced){gsap.set(stage,{clearProps:'opacity'});revealUI();return;}
      if(introPlayed){gsap.set(stage,{clearProps:'opacity'});if(!intro.active)revealUI();return;}
      introPlayed=true;
      if(!visible||document.hidden){intro.arrival=0;gsap.set(stage,{clearProps:'opacity'});draw();revealUI();return;}
      intro.active=true;stage.dataset.motion='intro';status.setAttribute('aria-live','off');
      introTimeline=gsap.timeline({onComplete:endIntro});
      intro.speed=.8;
      introTimeline.to(intro,{speed:.025,duration:1,ease:'sine.out'})
        .to(intro,{arrival:0,duration:1,ease:'power3.out',onUpdate:draw},0)
        .to(stage,{opacity:1,duration:.85,ease:'sine.inOut',clearProps:'opacity'},0);
    }
    on(window,'portfolio:ready',startIntro);
    on(window,'load',()=>{if(!document.documentElement.classList.contains('is-preloading'))startIntro();});
    if(document.readyState==='complete')requestAnimationFrame(()=>{if(!disposed&&!document.documentElement.classList.contains('is-preloading'))startIntro();});
    on(stage,'pointermove',e=>{hovering=inside(e.clientX,e.clientY);});
    on(stage,'pointerleave',()=>{hovering=false;pauseIdle();});
    on(stage,'wheel',pauseIdle,{passive:true});
    on(stage,'pointerdown',pauseIdle);
    on(stage,'keydown',pauseIdle);
    function measureOrbit(){
      const w=stage.clientWidth,cardWidth=cards[0]?.offsetWidth||0;
      artSizes=cards.map(card=>{const art=card.querySelector('.perspective-art');return {w:art.offsetWidth,h:art.offsetHeight};});
      const mobile=innerWidth<=600,perspective=mobile?1000:1400;
      const gap=Math.max(12,Math.min(20,w*.009+6));
      let radius=0;
      // Check a complete rotation step, so spacing stays constant while scrolling.
      // Project both card edges: their sizes depend on rotation, scale and depth.
      for(let sample=0;sample<=128;sample++){
        const phase=sample/128*step,planes=[];
        cards.forEach((card,i)=>{
          const angle=Math.atan2(Math.sin(i*step+phase),Math.cos(i*step+phase));
          const cos=Math.cos(angle);if(cos<=.17)return;
          const scale=(mobile?.58:.65)+cos*(mobile?.30:.43);
          const depth=cos*(mobile?80:150)-100,turn=angle*.8;
          const edges=[-1,1].map(side=>{
            const localX=side*cardWidth*scale/2;
            const projection=1-(depth-localX*Math.sin(turn))/perspective;
            return {slope:Math.sin(angle)/projection,offset:localX*Math.cos(turn)/projection};
          });
          planes.push({angle,edges});
        });
        planes.sort((a,b)=>a.angle-b.angle);
        for(let i=1;i<planes.length;i++){
          for(const left of planes[i-1].edges)for(const right of planes[i].edges){
            const distance=right.slope-left.slope;
            if(distance>0)radius=Math.max(radius,(gap+left.offset-right.offset)/distance);
          }
        }
      }
      orbitRadius=radius*1.035; // Small reserve for projected card edges.
    }
    function draw(){
      const h=stage.clientHeight,mobile=innerWidth<=600;
      if(!orbitRadius)measureOrbit();
      const hoverIndex=hoverStates.findIndex(hover=>hover.value>.001);
      const hoverX=hoverIndex<0?0:Math.sin(hoverIndex*step+state.angle);
      cards.forEach((card,i)=>{
        const a=i*step+state.angle,cos=Math.cos(a),front=cos>.25;
        const lift=hoverStates[i].value*Math.max(0,cos);
        gsap.set(card,{
          x:Math.sin(a)*orbitRadius+(hoverIndex>=0&&i!==hoverIndex?Math.sign(Math.sin(a)-hoverX)*hoverStates[hoverIndex].value*24:0),y:Math.sin(a*2)*h*.03+intro.arrival*28-lift*16,
          z:cos*(mobile?80:150)-100+lift*55,rotationY:Math.atan2(Math.sin(a),cos)*180/Math.PI*.8,
          rotationZ:0,skewX:0,
          scale:((mobile?.58:.65)+Math.max(0,cos)*(mobile?.30:.43))*(1-intro.arrival*.025)*(1+lift*.045),
          opacity:Math.max(0,Math.min(1,(cos-.15)/.20))*state.entry,
          visibility:cos>.15?'visible':'hidden',xPercent:-50,yPercent:-50
        });
        card.style.zIndex=String(Math.round(cos*100)+100);
        card.style.pointerEvents=front?'auto':'none';card.tabIndex=front?0:-1;
        card.setAttribute('aria-hidden',String(!front));
      });
      const index=((Math.round(-state.angle/step)%items.length)+items.length)%items.length;
      if(index!==counterIndex){
        counterIndex=index;
        currentNumber.textContent=String(index+1).padStart(2,'0');
        counter.setAttribute('aria-label',en?`Project ${index+1} of ${items.length}`:`Проект ${index+1} из ${items.length}`);
        if(!reduced&&!intro.active)gsap.fromTo(currentNumber,{y:5,opacity:.45},{y:0,opacity:1,duration:.4,ease:'power2.out',overwrite:true});
      }
    }
    function labels(){selection=((selection%items.length)+items.length)%items.length;stage.dataset.active=items[selection].id;status.textContent=items[selection].title+' / '+(selection+1)+' / '+items.length;}
    function rotate(index){clearTimeout(wheelTimer);wheelTimer=null;targetIndex=index;const target=-index*step;gsap.killTweensOf(state,"angle");selection=((index%items.length)+items.length)%items.length;labels();gsap.to(state,{angle:target,duration:reduced?0:1.1,ease:'power3.out',onUpdate:draw});}
    function choose(i){const current=targetIndex;let delta=i-((current%items.length+items.length)%items.length);if(delta>items.length/2)delta-=items.length;if(delta<-items.length/2)delta+=items.length;rotate(current+delta);}
    let wheelTimer,wheelAngle=state.angle;
    on(stage,'wheel',e=>{
      if(e.ctrlKey||drag||!inside(e.clientX,e.clientY))return;
      const raw=Math.abs(e.deltaX)>Math.abs(e.deltaY)?e.deltaX:e.deltaY;
      if(!raw)return;
      e.preventDefault();
      const delta=raw*(e.deltaMode===1?16:e.deltaMode===2?stage.clientHeight:1);
      if(!wheelTimer)wheelAngle=state.angle;
      wheelAngle-=Math.max(-120,Math.min(120,delta))*.0055;
      gsap.killTweensOf(state,'angle');
      gsap.to(state,{angle:wheelAngle,duration:reduced?0:.75,ease:'power3.out',onUpdate:draw});
      selection=((Math.round(-wheelAngle/step)%items.length)+items.length)%items.length;labels();
      clearTimeout(wheelTimer);wheelTimer=setTimeout(()=>{wheelTimer=null;rotate(Math.round(-wheelAngle/step));},240);
    },{passive:false});
    on(stage,'keydown',e=>{if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();rotate(targetIndex+(e.key==='ArrowRight'?1:-1));}});
    on(stage,'pointerdown',e=>{if(e.button!==0||!inside(e.clientX,e.clientY))return;clearTimeout(wheelTimer);wheelTimer=null;drag=true;moved=false;startX=e.clientX;startAngle=state.angle;gsap.killTweensOf(state,"angle");});
    const applyParallax=()=>gsap.set(world,{x:parallax.x*60,y:parallax.y*36,rotationY:parallax.x*6,rotationX:-parallax.y*4});
    on(window,'pointermove',e=>{
      if(reduced||drag||intro.active||document.documentElement.classList.contains('hero-boot')||document.documentElement.classList.contains('loader-exiting')||e.pointerType==='touch')return;
      gsap.to(parallax,{x:e.clientX/innerWidth-.5,y:e.clientY/innerHeight-.5,duration:1.25,ease:'power3.out',overwrite:true,onUpdate:applyParallax});
    });
    on(document.documentElement,'pointerleave',()=>gsap.to(parallax,{x:0,y:0,duration:1.25,ease:'power3.out',overwrite:true,onUpdate:applyParallax}));
    on(window,'pointermove',e=>{if(!drag)return;const dx=e.clientX-startX;if(Math.abs(dx)>7){moved=true;stage.classList.add('is-dragging');state.angle=startAngle+dx/stage.clientWidth*3.5;draw();}});
    const end=()=>{if(!drag)return;drag=false;stage.classList.remove('is-dragging');if(moved)rotate(Math.round(-state.angle/step));};on(window,'pointerup',end);on(window,'pointercancel',end);
    on(stage,'click',e=>{const card=e.target.closest('.perspective-card');if(moved){e.preventDefault();e.stopPropagation();moved=false;}else if(card&&+card.dataset.index!==selection){e.preventDefault();e.stopPropagation();choose(+card.dataset.index);}});
    cards.forEach(card=>on(card,'dragstart',e=>e.preventDefault()));
    const resize=new ResizeObserver(()=>{measureOrbit();draw();});resize.observe(stage);const observer=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;});observer.observe(root);
    const artworks=cards.map(card=>card.querySelector('.perspective-art'));
    let clock=0;
    const tick=()=>{
      if(reduced||!visible||document.hidden){lastFlowAngle=state.angle;if(intro.active)cancelIntro();return;}
      const steering=drag||gsap.isTweening(state);
      const dt=Math.min(.05,gsap.ticker.deltaRatio()/60);
      hoverStates.forEach((hover,i)=>{
        const active=!drag&&(hover.pointer||hover.focus)&&Math.cos(i*step+state.angle)>.25;
        hover.value+=((active?1:0)-hover.value)*(1-Math.exp(-dt/.22));
        cards[i].classList.toggle('is-hovered',active);
      });
      clock+=dt;
      // One velocity drives the carousel before, during and after braking.
      if(!steering&&!intro.active){
        const canRotate=!hovering&&!stage.contains(document.activeElement)&&performance.now()-lastInteraction>3500;
        intro.speed+=((canRotate?.025:0)-intro.speed)*(1-Math.exp(-dt/1.8));
      }
      if(!steering&&intro.speed>.0001){
        state.angle-=intro.speed*dt;
        targetIndex=Math.round(-state.angle/step);
        const next=((targetIndex%items.length)+items.length)%items.length;
        if(selection!==next){selection=next;labels();}
      }
      // Deform each card's silhouette from velocity, without raster filters.
      const velocity=(state.angle-lastFlowAngle)/Math.max(dt,.001);
      lastFlowAngle=state.angle;
      const targetFlow=intro.active?0:Math.tanh(velocity*.3);
      const response=Math.abs(targetFlow)>Math.abs(flow)?.24:.65;
      flow+=(targetFlow-flow)*(1-Math.exp(-dt/response));
      draw();
      artworks.forEach((art,i)=>{
        const {w,h}=artSizes[i]||{w:0,h:0};
        if(!w||!h)return;
        const strength=Math.abs(flow),bend=w*.07*strength;
        // Bend only the vertical edges: the elastic pull follows horizontal travel.
        const leftBend=flow<0?bend*.2:bend;
        const rightBend=flow<0?bend:bend*.2;
        const path=`M 0 0 L ${w} 0 Q ${w-rightBend} ${h*.5} ${w} ${h} L 0 ${h} Q ${leftBend} ${h*.5} 0 0 Z`;
        gsap.set(art,{y:Math.sin(clock*.6+i*step)*2,scaleX:1+strength*.03,scaleY:1,clipPath:strength>.001?`path('${path}')`:'none'});
      });
    };gsap.ticker.add(tick);
    labels();draw();
    return()=>{disposed=true;introTimeline?.kill();revealTimeline?.kill();gsap.set(revealElements,{clearProps:"clipPath,transform"});gsap.killTweensOf(intro);clearTimeout(wheelTimer);listeners.forEach(fn=>fn());headerSize.disconnect();resize.disconnect();observer.disconnect();gsap.ticker.remove(tick);gsap.killTweensOf(state);gsap.killTweensOf(parallax);gsap.killTweensOf(currentNumber);gsap.set(stage,{clearProps:'opacity'});gsap.set(world,{clearProps:'transform,opacity'});};
  }
  return{mount};
})();


























