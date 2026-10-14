(() => {
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  const position={y:scrollY};
  let target=scrollY,tween=null;
  const stop=()=>{
    tween?.kill();tween=null;
    document.documentElement.classList.remove('is-smooth-scrolling');
    target=position.y=scrollY;
  };
  const nestedScroller=(element,delta)=>{
    for(let node=element;node&&node!==document.body;node=node.parentElement){
      if(node.nodeType!==1)continue;
      const overflow=getComputedStyle(node).overflowY;
      if(!/auto|scroll/.test(overflow)||node.scrollHeight<=node.clientHeight+1)continue;
      if(delta<0&&node.scrollTop>0||delta>0&&node.scrollTop+node.clientHeight<node.scrollHeight-1)return true;
    }
    return false;
  };
  document.addEventListener('wheel',event=>{
    const html=document.documentElement;
    if(event.defaultPrevented||event.ctrlKey||event.metaKey||reduced.matches||!window.gsap)return;
    if(html.matches('.is-preloading,.loader-exiting,.mobile-menu-open,.is-page-leaving'))return;
    if(Math.abs(event.deltaX)>Math.abs(event.deltaY)||!event.deltaY)return;
    const delta=event.deltaY*(event.deltaMode===1?16:event.deltaMode===2?innerHeight:1);
    if(nestedScroller(event.target,delta))return;
    const maximum=Math.max(0,document.documentElement.scrollHeight-innerHeight);
    if(!tween)target=position.y=scrollY;
    target=Math.max(0,Math.min(maximum,target+delta));
    if(Math.abs(target-scrollY)<.5)return;
    event.preventDefault();
    html.classList.add('is-smooth-scrolling');
    tween=gsap.to(position,{y:target,duration:.8,ease:'power3.out',overwrite:true,
      onUpdate:()=>{
        window.scrollTo({top:position.y,behavior:'instant'});
        window.ScrollTrigger?.update();
      },
      onComplete:()=>{tween=null;html.classList.remove('is-smooth-scrolling');target=position.y=scrollY;}
    });
  },{passive:false});
  // Native touch, keyboard, scrollbar and anchor navigation stay in control.
  window.addEventListener('pointerdown',stop,{passive:true});
  window.addEventListener('touchstart',stop,{passive:true});
  window.addEventListener('keydown',event=>{if(['ArrowDown','ArrowUp','PageDown','PageUp','Home','End',' '].includes(event.key))stop();});
  document.addEventListener('click',event=>{if(event.target.closest('a'))stop();},true);
  window.addEventListener('resize',stop,{passive:true});
  window.addEventListener('popstate',stop);
  window.addEventListener('pagehide',stop);
  reduced.addEventListener('change',stop);
})();
