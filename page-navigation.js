(()=>{
  const key='portfolio-sheet-navigation';
  if(location.pathname.endsWith('/about.html'))document.documentElement.classList.add('profile-boot');
  window.portfolioSheetEntry=window.name==='portfolio-sheet-preview';
  try{
    const pending=JSON.parse(sessionStorage.getItem(key)||'null');
    if(pending&&pending.path===location.pathname+location.search&&Date.now()-pending.time<15000){
      window.portfolioSheetEntry=true;
      sessionStorage.removeItem(key);
    }
  }catch{}
  let navigating=false;
  window.PageNavigation={go(url){
    if(navigating)return;
    navigating=true;
    const target=new URL(url,location.href);
    try{sessionStorage.setItem(key,JSON.stringify({path:target.pathname+target.search,time:Date.now()}));}catch{}
    if(matchMedia('(prefers-reduced-motion: reduce)').matches){location.assign(target.href);return;}
    // Prepare the real destination before moving either sheet. The frame and
    // committed document use the same layout, without another loading sequence.
    const sheet=document.createElement('div');sheet.className='navigation-sheet';sheet.setAttribute('aria-hidden','true');
    const frame=document.createElement('iframe');frame.name='portfolio-sheet-preview';frame.title='';frame.tabIndex=-1;sheet.append(frame);document.body.append(sheet);
    gsap.set(sheet,{yPercent:100});
    let leaving=false;
    const fallback=setTimeout(()=>location.assign(target.href),10000);
    frame.addEventListener('load',async()=>{
      if(leaving)return;
      try{
        const doc=frame.contentDocument;
        await Promise.all([frame.contentWindow.portfolioPageReady,doc.fonts.ready,...[...doc.querySelectorAll('.perspective-card img,[data-about-image] img')].map(img=>img.decode().catch(()=>{}))]);
        if(target.hash)doc.getElementById(target.hash.slice(1))?.scrollIntoView({behavior:'instant'});
      }catch{}
      leaving=true;clearTimeout(fallback);
      const position=scrollY;
      const pin=document.querySelector('.hero-scroll-scene');
      const pinned=pin&&getComputedStyle(pin).position==='fixed';
      const pinOffset=pinned?position-(pin.parentElement.getBoundingClientRect().top+position):0;
      const content=document.createElement('div');content.className='sheet-outgoing';
      content.style.setProperty('--sheet-pin-offset',pinOffset+'px');
      document.body.insertBefore(content,document.body.firstChild);
      [...document.body.children].forEach(child=>{if(child!==sheet&&child!==content&&!child.classList.contains('motion-cursor'))content.append(child);});
      document.documentElement.classList.add('is-page-leaving');
      document.querySelectorAll('.header').forEach(header=>header.inert=true);
      const timeline=gsap.timeline({onComplete:()=>{
        try{sessionStorage.setItem(key,JSON.stringify({path:target.pathname+target.search,time:Date.now()}));}catch{}
        location.assign(target.href);
      }});
      timeline.to(content,{y:-innerHeight*.16,scale:.96,transformOrigin:`50% ${position+innerHeight*.5}px`,duration:1.2,ease:'power3.inOut'},0)
        .to(sheet,{yPercent:0,duration:1.2,ease:'power3.inOut'},0);
    },{once:true});
    frame.src=target.href;
  }};
  window.addEventListener('pageshow',event=>{if(event.persisted){navigating=false;document.querySelector('.navigation-sheet')?.remove();const content=document.querySelector('.sheet-outgoing');if(content){[...content.children].forEach(child=>document.body.insertBefore(child,content));content.remove();}document.documentElement.classList.remove('is-page-leaving');document.querySelector('.header').inert=false;window.ScrollTrigger?.refresh();}});
})();
