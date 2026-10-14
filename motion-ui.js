(()=>{
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const navigation=document.querySelector('.header');
  if(navigation){
    let previousScroll=Math.max(0,scrollY),hidden=false,scrollFrame=0;
    const showNavigation=show=>{
      if(hidden===!show)return;
      hidden=!show;
      navigation.classList.toggle('is-hidden',hidden);
      gsap.to(navigation,{yPercent:hidden?-105:0,duration:reduced?0:show?.65:.45,ease:'power3.out',overwrite:'auto'});
    };
    const updateNavigation=()=>{
      scrollFrame=0;
      const position=Math.max(0,scrollY),delta=position-previousScroll;
      previousScroll=position;
      navigation.classList.toggle('is-floating',position>8);
      if(navigation.classList.contains('is-menu-open'))return;
      if(document.documentElement.classList.contains('hero-boot')||document.documentElement.classList.contains('is-preloading')||document.documentElement.classList.contains('loader-exiting')||navigation.style.clipPath)return;
      if(position<=navigation.offsetHeight||delta<-.8)showNavigation(true);
      else if(delta>.8&&!navigation.contains(document.activeElement))showNavigation(false);
    };
    window.addEventListener('scroll',()=>{if(!scrollFrame)scrollFrame=requestAnimationFrame(updateNavigation);},{passive:true});
    navigation.addEventListener('focusin',()=>showNavigation(true));
  }
  if(matchMedia('(hover:hover) and (pointer:fine)').matches){
    const cursor=document.createElement('div');cursor.className='motion-cursor';cursor.setAttribute('aria-hidden','true');cursor.innerHTML='<span></span>';document.body.append(cursor);
    const label=cursor.firstChild,pos={x:-100,y:-100};let shown=false;
    const xTo=gsap.quickTo(pos,'x',{duration:reduced?0:.18,ease:'power3.out'}),yTo=gsap.quickTo(pos,'y',{duration:reduced?0:.18,ease:'power3.out'});
    const paint=()=>gsap.set(cursor,{x:pos.x,y:pos.y,xPercent:-50,yPercent:-50});gsap.ticker.add(paint);
    document.addEventListener('pointermove',e=>{if(e.pointerType==='touch')return;if(!shown){shown=true;pos.x=e.clientX;pos.y=e.clientY;document.documentElement.classList.add('cursor-ready');}xTo(e.clientX);yTo(e.clientY);cursor.style.opacity='1';
      const el=e.target,zone=document.querySelector('.perspective-zone'),r=zone?.getBoundingClientRect(),inGallery=el.closest('.perspective-stage')&&r&&e.clientX>=r.left&&e.clientX<=r.right&&e.clientY>=r.top&&e.clientY<=r.bottom;
      const interactive=el.closest('a,button,summary,select'),text=el.closest('input,textarea');let mode='default';
      if(document.querySelector('.perspective-stage.is-dragging'))mode='drag';else if(text)mode='text';else if(interactive)mode='link';else if(inGallery)mode='gallery';cursor.dataset.mode=mode;label.textContent=mode==='link'?'↗':mode==='gallery'||mode==='drag'?'↔':'';
    },{passive:true});
    document.addEventListener('pointerout',e=>{if(!e.relatedTarget)cursor.style.opacity='0';});window.addEventListener('blur',()=>{cursor.style.opacity='0';document.documentElement.classList.remove('cursor-ready');shown=false;});
  }
  const loader=document.querySelector('.portfolio-loader');
  if(window.portfolioSheetEntry){loader?.remove();window.dispatchEvent(new Event('portfolio:ready'));return;}
  if(!loader){window.dispatchEvent(new Event('portfolio:ready'));return;}
  const fill=loader.querySelector('.portfolio-loader-fill'),numbers=[...loader.querySelectorAll('.portfolio-loader-count')];
  const surfaces=[...document.querySelectorAll('header,main,footer')];
  surfaces.forEach(el=>el.inert=true);
  const progress={value:0};let finished=false,exiting=false,galleryStarted=false;
  loader.setAttribute('aria-label',document.documentElement.lang==='en'?'Loading portfolio':'Загрузка портфолио');
  const paintProgress=()=>{
    const value=Math.min(100,Math.round(progress.value));
    numbers.forEach(el=>el.textContent=String(value));
    loader.setAttribute('aria-valuenow',String(value));
    gsap.set(fill,{clipPath:`inset(${100-progress.value}% 0% 0% 0%)`});
  };
  const beginGallery=()=>{
    if(galleryStarted)return;galleryStarted=true;
    loader.classList.add('is-exiting');
    document.documentElement.classList.add('loader-exiting');
    document.documentElement.classList.remove('is-preloading');
    window.dispatchEvent(new Event('portfolio:ready'));
  };
  const finish=()=>{
    if(finished)return;finished=true;clearTimeout(fallback);
    timeline.kill();loader.remove();surfaces.forEach(el=>el.inert=false);
    document.documentElement.classList.remove('is-preloading','loader-exiting');
    window.ScrollTrigger?.refresh();
    if(!galleryStarted){galleryStarted=true;window.dispatchEvent(new Event('portfolio:ready'));}
  };
  const exit=()=>{
    if(finished||exiting)return;exiting=true;
    timeline.to(progress,{value:100,duration:reduced?0:.6,ease:'sine.inOut',onUpdate:paintProgress})
      .to(numbers,{opacity:0,duration:reduced?0:.45,ease:'sine.inOut'},reduced?'>':'>+=.12')
      .to(loader,{opacity:0,duration:reduced?0:.8,ease:'sine.inOut',onStart:beginGallery,onComplete:finish},reduced?'>':'>-=.15');
  };
  const assetsReady=Promise.all([document.fonts.ready,...[...document.querySelectorAll('.perspective-card img')].map(img=>img.decode().catch(()=>{}))]);
  const timeline=gsap.timeline();
  const fallback=setTimeout(()=>{progress.value=100;paintProgress();finish();},8000);
  timeline.to(progress,{value:90,duration:reduced?0:1.8,ease:'sine.inOut',onUpdate:paintProgress,onComplete:()=>assetsReady.then(exit)});
})();
