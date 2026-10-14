(()=>{
  const preview=document.querySelector('.preview'),stack=document.querySelector('.scene-stack');
  const scenes={projects:document.querySelector('[data-scene=projects]'),about:document.querySelector('[data-scene=about]')};
  const curtain=document.querySelector('.blue-curtain'),ghost=document.querySelector('.type-ghost'),play=document.querySelector('#play');
  const labels={sheet:'Смена листа',curtain:'Синяя шторка',circle:'От точки клика',type:'Типографика'};
  const descriptions={sheet:'Новый лист поднимается снизу, предыдущий мягко отступает. Глубина за счёт разницы скоростей.',curtain:'Синяя плоскость закрывает сцену и продолжает движение вверх. Контент раскрывается вслед за её краем.',circle:'Следующая страница раскрывается из точки нажатия. Попробуй кнопку в меню и кнопку под макетом — начало эффекта будет разным.',type:'Название раздела вырастает из меню, становится главным элементом перехода и занимает своё место на новой странице.'};
  let direction='sheet',current='projects',busy=false;
  const reduced=matchMedia('(prefers-reduced-motion:reduce)').matches;
  function status(){document.querySelector('.demo-status').textContent=labels[direction]+' · '+(current==='projects'?'Проекты':'Обо мне');}
  function lock(value){busy=value;document.querySelectorAll('button').forEach(button=>button.disabled=value);preview.setAttribute('aria-busy',String(value));}
  function activate(page){current=page;Object.entries(scenes).forEach(([id,scene])=>{scene.inert=id!==page;scene.setAttribute('aria-hidden',String(id!==page));});document.querySelectorAll('[data-page]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.page===page)));play.textContent=current==='projects'?'Показать переход ↗':'Обратно к проектам ↗';status();}
  function finish(page){Object.values(scenes).forEach(scene=>{gsap.set(scene,{clearProps:'transform,clipPath,boxShadow,zIndex'});gsap.set(scene.querySelectorAll('[data-reveal],[data-transition-title]'),{clearProps:'transform,clipPath,visibility'});gsap.set(scene,{visibility:scene===scenes[page]?'visible':'hidden'});});gsap.set(curtain,{yPercent:100});gsap.set(ghost,{visibility:'hidden'});activate(page);lock(false);}
  function go(page,event){
    if(busy||page===current)return;
    lock(true);
    const outgoing=scenes[current],incoming=scenes[page],rect=stack.getBoundingClientRect();
    const rawX=event?.clientX-rect.left,rawY=event?.clientY-rect.top;
    const x=Number.isFinite(rawX)?Math.max(0,Math.min(rect.width,rawX)):rect.width*.5;
    const y=Number.isFinite(rawY)?Math.max(0,Math.min(rect.height,rawY)):rect.height*.5;
    gsap.set(incoming,{visibility:'visible',zIndex:2});gsap.set(outgoing,{zIndex:1});
    if(reduced){finish(page);return;}
    const timeline=gsap.timeline({onComplete:()=>finish(page)});
    if(direction==='sheet'){
      gsap.set(incoming,{yPercent:100,boxShadow:'0 -24px 70px #20211f15'});
      timeline.to(outgoing,{yPercent:-16,scale:.96,duration:1.2,ease:'power3.inOut'},0)
        .to(incoming,{yPercent:0,duration:1.2,ease:'power3.inOut'},0)
        .fromTo(incoming.querySelectorAll('[data-reveal]'),{y:18},{y:0,duration:.8,stagger:.06,ease:'power3.out'},.65);
    }else if(direction==='curtain'){
      gsap.set(incoming,{visibility:'hidden'});
      timeline.to(curtain,{yPercent:0,duration:.55,ease:'power3.inOut'})
        .set(outgoing,{visibility:'hidden'}).set(incoming,{visibility:'visible'})
        .to(curtain,{yPercent:-100,duration:.65,ease:'power3.inOut'})
        .fromTo(incoming.querySelectorAll('[data-reveal],[data-transition-title]'),{clipPath:'inset(0 0 100% 0)'},{clipPath:'inset(0 0 0% 0)',duration:.65,stagger:.05,ease:'power3.out'},.9);
    }else if(direction==='circle'){
      gsap.set(incoming,{clipPath:`circle(0px at ${x}px ${y}px)`});
      timeline.to(incoming,{clipPath:`circle(${Math.hypot(rect.width,rect.height)}px at ${x}px ${y}px)`,duration:1.05,ease:'power3.inOut'},0)
        .to(outgoing,{scale:.98,duration:1.05,ease:'power2.inOut'},0);
    }else{
      const title=incoming.querySelector('[data-transition-title]'),target=title.getBoundingClientRect(),font=getComputedStyle(title).fontSize;
      ghost.textContent=title.textContent;
      const menuButton=document.querySelector(`[data-page=${page}]`).getBoundingClientRect();
      gsap.set(ghost,{visibility:'visible',left:menuButton.left-rect.left,top:menuButton.top-rect.top,fontSize:12});
      gsap.set(incoming,{visibility:'hidden'});gsap.set(title,{visibility:'hidden'});
      timeline.to(outgoing,{clipPath:'inset(0 0 100% 0)',duration:.55,ease:'power3.inOut'},0)
        .to(ghost,{left:rect.width*.08,top:rect.height*.28,fontSize:Math.min(rect.width*.1,140),duration:.65,ease:'power3.inOut'},0)
        .set(incoming,{visibility:'visible'},.65)
        .to(ghost,{left:target.left-rect.left,top:target.top-rect.top,fontSize:font,duration:.7,ease:'power3.inOut'},.8)
        .fromTo(incoming.querySelectorAll('[data-reveal]'),{clipPath:'inset(0 0 100% 0)',y:12},{clipPath:'inset(0 0 0% 0)',y:0,duration:.7,stagger:.06,ease:'power3.out'},.9);
    }
  }
  document.querySelectorAll('[data-direction]').forEach(button=>button.addEventListener('click',()=>{if(busy)return;direction=button.dataset.direction;document.querySelectorAll('[data-direction]').forEach(other=>other.setAttribute('aria-pressed',String(other===button)));document.querySelector('#direction-description').textContent=descriptions[direction];finish('projects');}));
  document.querySelectorAll('[data-page]').forEach(button=>button.addEventListener('click',event=>go(button.dataset.page,event)));
  play.addEventListener('click',event=>go(current==='projects'?'about':'projects',event));
  finish('projects');
})();
