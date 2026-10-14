(() => {
  window.renderSiteFooter=language=>{
    const ru=language==='ru',name=window.portfolioContent[language].fullName;
    document.querySelector('#contact').innerHTML=`<div class="site-footer-top"><p class="site-footer-intro">${ru?'От задачи — к решению.':'From challenge to solution.'}</p><div class="site-footer-column"><p class="site-footer-label">${ru?'Связаться':'Enquire'}</p><a href="https://t.me/Alexchebotareveurika" target="_blank" rel="noopener noreferrer">@Alexchebotareveurika</a><p class="site-footer-note">Telegram</p></div><div class="site-footer-column"><p class="site-footer-label">${ru?'Навигация':'Explore'}</p><a href="index.html#projects">${ru?'Проекты':'Projects'} ↗</a><a href="about.html">${ru?'Обо мне':'About me'} ↗</a></div></div><a class="site-footer-title" href="https://t.me/Alexchebotareveurika" target="_blank" rel="noopener noreferrer"><span>${ru?'Обсудим проект':'Let’s discuss'}</span><span class="footer-arrow" aria-hidden="true"><svg viewBox="0 0 100 100" fill="none"><path d="M20 80 80 20M20 20H80V80" stroke="currentColor" stroke-width="2"/></svg></span></a><div class="site-footer-bottom"><span>${ru?'UX/UI дизайн · Арт-дирекшн':'UX/UI Design · Art Direction'}</span><span>© ${new Date().getFullYear()} ${name}</span><a href="#main">${ru?'Наверх':'Back to top'} ↑</a></div>`;
  };
  window.animateSiteFooter=()=>{
    if(!window.gsap||!window.ScrollTrigger)return;
    const title=document.querySelector('.site-footer-title');
    gsap.fromTo(title,{clipPath:'inset(0 0 100% 0)'},{clipPath:'inset(0 0 0% 0)',duration:1.7,ease:'power3.inOut',scrollTrigger:{trigger:title,start:'top 94%',once:true},clearProps:'clipPath'});
    gsap.fromTo(title.firstElementChild,{y:25},{y:-8,ease:'none',scrollTrigger:{trigger:title,start:'top bottom',end:'bottom top',scrub:1.8}});
  };
})();
