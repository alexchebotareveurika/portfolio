(() => {
  const header=document.querySelector('.header'),toggle=header.querySelector('.menu-toggle'),panel=header.querySelector('.header-panel');
  const mobile=matchMedia('(max-width:760px)');
  const surfaces=[document.querySelector('main'),document.querySelector('footer')].filter(Boolean);
  let previousInert=[];
  const sizeHeader=()=>header.style.setProperty('--menu-header-height',header.getBoundingClientRect().height+'px');
  new ResizeObserver(sizeHeader).observe(header);sizeHeader();
  header.querySelector('nav .active')?.setAttribute('aria-current','page');
  const close=(restoreFocus=false)=>{
    if(!header.classList.contains('is-menu-open'))return;
    header.classList.remove('is-menu-open');
    document.documentElement.classList.remove('mobile-menu-open');
    toggle.setAttribute('aria-expanded','false');
    toggle.setAttribute('aria-label',document.documentElement.lang==='en'?'Open menu':'Открыть меню');
    panel.inert=mobile.matches;
    surfaces.forEach((surface,i)=>surface.inert=previousInert[i]);
    if(restoreFocus)toggle.focus();
  };
  const sync=()=>{if(!mobile.matches)close();panel.inert=mobile.matches&&!header.classList.contains('is-menu-open');};
  sync();mobile.addEventListener('change',sync);
  toggle.addEventListener('click',()=>{
    if(header.classList.contains('is-menu-open')){close(true);return;}
    previousInert=surfaces.map(surface=>surface.inert);
    surfaces.forEach(surface=>surface.inert=true);
    panel.inert=false;
    header.classList.add('is-menu-open');
    document.documentElement.classList.add('mobile-menu-open');
    toggle.setAttribute('aria-expanded','true');
    toggle.setAttribute('aria-label',document.documentElement.lang==='en'?'Close menu':'Закрыть меню');
  });
  header.addEventListener('click',event=>{if(event.target.closest('a'))close();});
  header.addEventListener('keydown',event=>{
    if(!header.classList.contains('is-menu-open'))return;
    if(event.key==='Escape'){event.preventDefault();close(true);return;}
    if(event.key!=='Tab')return;
    const focusable=[...header.querySelectorAll('a[href],button:not([disabled])')];
    const first=focusable[0],last=focusable[focusable.length-1];
    if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}
    else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}
  });
})();
