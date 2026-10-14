(() => {
  const content = window.portfolioContent;
  Object.assign(content.ru,{about:'Профиль',downloadResume:'Резюме',contact:'Telegram'});
  Object.assign(content.en,{about:'Profile',downloadResume:'CV',contact:'Telegram'});
  Object.assign(content.ru,{workTitle:'Работы<span class="work-dot">.</span>',workEdition:'ИЗБРАННЫЕ ПРОЕКТЫ / 01—05',readCase:'О проекте и процессе',sayHello:'Обсудим проект.'});
  Object.assign(content.en,{workTitle:'Work<span class="work-dot">.</span>',workEdition:'SELECTED PROJECTS / 01—05',readCase:'About the project & process',sayHello:'Let’s talk design.'});
  Object.assign(content.ru,{portfolioHeadline:'8 лет создаю диджитал <span>для <strong class="headline-accent">федеральных брендов</strong>.</span>',portfolioProof:'Корпоративные сайты, отмеченные наградами Рейтинга Рунета.'});
  Object.assign(content.en,{portfolioHeadline:'8 years shaping digital <span>for <strong class="headline-accent">national brands</strong>.</span>',portfolioProof:'Corporate websites recognised by the Runet Rating awards.'});
  Object.assign(content.ru,{galleryScroll:'Наведи на проект, чтобы рассмотреть. Нажми, чтобы открыть кейс.'});
  Object.assign(content.en,{galleryScroll:'Hover to explore. Click to open a case study.'});
  let language='ru';
  try {language=localStorage.getItem('portfolio-language')==='en'?'en':'ru';} catch {}
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  let animationContext;
  let heroCleanup;
  const localText=value=>typeof value==='object' ? value?.[language]||value?.ru||'' : value||'';
  const escape=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const cover=item=>`<div class="cover ${item.theme}" aria-hidden="true"><div class="demo-ui"><div class="demo-bar"><span>${item.title}</span><span>DESIGN EXPLORATION</span></div><div class="demo-headline">${item.word}</div><div class="demo-bottom"><span>${item.mini}</span><span>VISUAL CONCEPT</span></div></div></div>`;
  const screen=(media,eager=false)=>{
    const width=media.width-(media.trimLeft||0)-(media.trimRight||0),height=media.height-(media.trimTop||0)-(media.trimBottom||0);
    const cropStyle=`width:${media.width/width*100}%;margin-left:-${(media.trimLeft||0)/width*100}%;margin-top:-${(media.trimTop||0)/width*100}%`;
    return `<div class="screen-crop" style="--screen-ratio:${width/height};aspect-ratio:${width}/${height}"><img src="${escape(media.src)}" alt="${escape(localText(media.alt))}" width="${media.width}" height="${media.height}" loading="${eager?'eager':'lazy'}" decoding="async" style="${cropStyle}"></div>`;
  };
  function visuals(item, index, entries) {
    return entries.map((media,i)=>`<figure class="project-visual visual-${media.presentation||'screen'}"><div class="visual-mat">${screen(media)}</div>${media.caption?`<figcaption><span class="visual-number">${String((window.portfolioMedia[item.id]||[]).indexOf(media)+1).padStart(2,'0')}</span>${escape(localText(media.caption))}</figcaption>`:''}</figure>`).join('');
  }
  function render() {
    heroCleanup?.();
    const t=content[language];
    window.renderAboutPage?.(language);
    window.renderSiteFooter?.(language);
    document.documentElement.lang=language;
    document.querySelectorAll('[data-i18n]').forEach(el=>{if(t[el.dataset.i18n])el.innerHTML=t[el.dataset.i18n];});
    document.title=(document.body.dataset.page==='about'?(language==='ru'?'Профиль — ':'Profile — '):'')+t.fullName+' — UX/UI & Art Direction';
    document.querySelector('meta[name="description"]').content=language==='ru'?'Портфолио Александра Чеботарева. UX/UI дизайн, арт-дирекшн и избранные проекты.':'Alexander Chebotarev’s portfolio. UX/UI design, art direction and selected projects.';
    const switcher=document.querySelector('.language');
    switcher.textContent=language==='ru'?'EN':'RU';
    switcher.setAttribute('aria-label',language==='ru'?'Switch to English':'Переключить на русский');
    document.querySelector('.brand').setAttribute('aria-label',t.fullName);
    document.querySelectorAll('.year').forEach(el=>el.textContent=new Date().getFullYear());
    document.querySelector('.header nav')?.setAttribute('aria-label',language==='ru'?'Основная навигация':'Main navigation');
    const menuToggle=document.querySelector('.menu-toggle');
    if(menuToggle)menuToggle.setAttribute('aria-label',language==='ru'?(menuToggle.getAttribute('aria-expanded')==='true'?'Закрыть меню':'Открыть меню'):(menuToggle.getAttribute('aria-expanded')==='true'?'Close menu':'Open menu'));
    document.querySelector('#project-jump')?.setAttribute('aria-label',language==='ru'?'Перейти к проекту':'Jump to project');
    document.querySelector('#projects')?.setAttribute('aria-label',t.projects);
    const alts={'assets/portrait.jpg':['Портрет Александра Чеботарева','Portrait of Alexander Chebotarev'],'assets/smile.jpg':['Александр улыбается','Alexander smiling'],'assets/movement.jpg':['Динамичный кадр Александра','Alexander in motion'],'assets/studio.jpg':['Александр в студии у окна','Alexander by a studio window']};
    document.querySelectorAll('img').forEach(el=>{const texts=alts[el.getAttribute('src')];if(texts)el.alt=texts[language==='ru'?0:1];});
    if(!document.querySelector('#case-list'))return;
    const activeCases=new Set(window.portfolioCaseOrder||['red-path','myshyak']);
    const galleryItems=t.items.map(item=>activeCases.has(item.id)?item:{...item,href:`assets/covers/${item.id}.webp`});
    const galleryExtras=(t.galleryExtras||[]).map(item=>activeCases.has(item.id)?{...item,href:undefined}:item);
    heroCleanup=window.PerspectiveHero?.mount([...galleryItems,...galleryExtras],language,reduced.matches);
    const allItems=[...t.items,...galleryExtras];
    const caseItems=[...activeCases].map(id=>allItems.find(item=>item.id===id)).filter(Boolean);
    document.querySelector('#case-list').innerHTML=caseItems.map((item,i)=>{
      const media=window.portfolioMedia?.[item.id]||[];
      const story=window.portfolioCaseStories?.[item.id]?.[language];
      if(story){
        const ru=language==='ru';
        const type=story.type||story.kind;
        const visual=(chapter,opening=false)=>{
          const entries=chapter.media.map(ref=>({...media[ref.index],...ref}));
          const rowRatio=Math.max(...entries.map(e=>(e.width-(e.trimLeft||0)-(e.trimRight||0))/(e.height-(e.trimTop||0)-(e.trimBottom||0))));
          const columns=chapter.layout==='phones'?Math.min(entries.length,3):Math.min(entries.length,2);
          return entries.map(entry=>`<figure class="editorial-visual visual-${entry.presentation||'screen'} ${opening?'story-opening':''}" style="--row-ratio:${rowRatio};--row-columns:${columns}"><div class="editorial-panel" data-case-visual>${screen(entry,entry.eager)}</div>${opening?'':`<figcaption data-case-reveal><span>${escape(localText(entry.caption)||chapter.caption)}</span></figcaption>`}</figure>`).join('');
        };
        const chapterVisuals=(chapter,j)=>{
          const expanded=window.CaseVisualStory?.render(chapter,visual,language);
          if(expanded!==null&&expanded!==undefined)return expanded;
          return j>0&&chapter.media.length?'<div class="editorial-gallery '+(chapter.media.length>1?'gallery-pair':'')+'">'+visual(chapter)+'</div>':'';
        };
        return `<article class="case case-editorial case-story" id="${item.id}"><header class="editorial-header"><h2 data-case-reveal>${escape(item.title)}</h2><p class="case-header-description" data-case-reveal>${escape(story.intro||story.lead||type)}</p><dl class="story-project-meta" data-case-reveal><div><dt>${ru?'Формат':'Format'}</dt><dd>${story.format||'Web'}</dd></div><div><dt>${ru?'Работа':'Work'}</dt><dd>${escape(story.role||(ru?'UX/UI дизайн':'UX/UI design'))}</dd></div></dl></header>${visual({media:[story.chapters[0].media[0]]},true)}${story.chapters.map((chapter,j)=>`<section class="editorial-chapter ${j===1?'dark-story':j===2?'closing-story':''}"><div class="editorial-copy"><p class="editorial-kicker" data-case-reveal>${escape(chapter.label)}</p><h3 data-case-reveal>${escape(chapter.title)}</h3><div class="editorial-prose" data-case-reveal>${chapter.text.map(text=>`<p>${escape(text)}</p>`).join('')}</div></div>${chapterVisuals(chapter,j)}</section>`).join('')}</article>`;
      }
      const groups={context:[],solution:[],process:[]};
      media.forEach((entry,j)=>{const stage=entry.stage||(['context','solution','process'][Math.min(j,2)]);(groups[stage]||groups.process).push(entry);});
      return `<article class="case" id="${item.id}"><div class="case-heading"><div><h2>${item.title}</h2></div><span class="project-type">${item.type}</span></div><p class="case-lead">${item.summary}</p><section class="case-chapter chapter-context"><div class="chapter-visuals case-visuals">${groups.context.length?visuals(item,i,groups.context):cover(item)}</div><div class="chapter-copy"><h3>${t.task}</h3><p>${item.task}</p><dl class="case-meta"><div><dt>${t.role}</dt><dd>${item.type}</dd></div><div><dt>${t.scope}</dt><dd>${item.scope}</dd></div></dl></div></section><section class="case-chapter chapter-solution ${groups.solution.length?'':'text-only'}"><div class="chapter-copy"><h3>${t.solution}</h3><p>${item.solution}</p></div>${groups.solution.length?`<div class="chapter-visuals case-visuals">${visuals(item,i,groups.solution)}</div>`:''}</section><section class="case-chapter chapter-process ${groups.process.length?'':'text-only'}"><div class="case-process"><h3>${t.process}</h3><ol>${item.steps.map(step=>`<li><h4>${step[0]}</h4><p>${step[1]}</p></li>`).join('')}</ol></div>${groups.process.length?`<div class="chapter-visuals case-visuals">${visuals(item,i,groups.process)}</div>`:''}</section><p class="draft-note">${t.draft}</p></article>`;
    }).join('');
  }
  function animate(entrance=true) {
    if(!window.gsap||!window.ScrollTrigger)return;
    gsap.registerPlugin(ScrollTrigger);
    animationContext=gsap.context(()=>{
      gsap.matchMedia().add('(prefers-reduced-motion: no-preference)',()=>{
        window.animateAboutPage?.(entrance);
        window.animateSiteFooter?.();
        const hero=document.querySelector('.perspective-hero');
        const cases=document.querySelector('.case-studies');
        if(hero&&cases){
          gsap.matchMedia().add({layered:'(min-aspect-ratio: 4/5)',flow:'(max-aspect-ratio: 4/5)'},context=>{
          const scene=document.querySelector('.hero-scroll-scene');
          const transition=gsap.timeline({scrollTrigger:{trigger:scene,start:()=>document.querySelector('main').offsetTop,end:()=>document.querySelector('main').offsetTop+hero.offsetHeight,pin:context.conditions.layered,pinSpacing:false,scrub:1.2,invalidateOnRefresh:true,anticipatePin:1}});
          transition.to(hero.querySelector('.perspective-stage'),{scale:.94,y:()=>-innerHeight*.045,duration:1,ease:'power1.inOut'},0)
            .to('.hero-turn-shade',{opacity:.08,duration:.8,ease:'power1.in'},0)
            .fromTo(cases,{borderTopLeftRadius:28,borderTopRightRadius:28,boxShadow:'0 -24px 80px #20211f00'},{borderTopLeftRadius:0,borderTopRightRadius:0,boxShadow:'0 -24px 80px #20211f12',duration:.65,ease:'power1.inOut'},0)
            .to(cases,{boxShadow:'0 -8px 30px #20211f00',duration:.35,ease:'power1.out'},.65);
          });
        }

        if(entrance && !window.portfolioSheetEntry && document.querySelector('.about-hero h1')){
          gsap.from('.about-hero h1',{y:30,opacity:0,duration:.9,ease:'power3.out',clearProps:'all'});
        }
        gsap.utils.toArray('.case-heading h2').forEach(el=>gsap.from(el,{opacity:0,duration:1,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 95%',once:true},clearProps:'all'}));
        gsap.utils.toArray('.visual-mat').forEach(el=>{
          gsap.fromTo(el,{scale:.965},{scale:1,ease:'none',scrollTrigger:{trigger:el,start:'top bottom',end:'top 30%',scrub:1.8}});
          gsap.fromTo(el,{clipPath:'inset(5% 3% 5% 3%)'},{clipPath:'inset(0% 0% 0% 0%)',ease:'none',scrollTrigger:{trigger:el,start:'top 95%',end:'top 35%',scrub:1.8}});
          gsap.from(el.querySelector('img'),{scale:1.07,duration:2.2,ease:'power2.out',scrollTrigger:{trigger:el,start:'top 88%',once:true},clearProps:'transform'});
        });
        gsap.utils.toArray('.case-lead, .chapter-copy, .case-process, .about-text h2, .expertise-row').forEach(el=>gsap.from(el,{opacity:0,duration:1.3,ease:'power2.out',scrollTrigger:{trigger:el,start:'top 96%',once:true},clearProps:'opacity'}));
        gsap.utils.toArray('.case-process ol').forEach(el=>gsap.from(el.children,{opacity:0,duration:1.4,stagger:.16,ease:'power2.out',scrollTrigger:{trigger:el,start:'top 90%',once:true},clearProps:'opacity'}));
        gsap.utils.toArray('.project-visual figcaption').forEach(el=>gsap.from(el,{opacity:0,duration:1.2,ease:'power2.out',scrollTrigger:{trigger:el,start:'top 97%',once:true},clearProps:'opacity'}));
        gsap.utils.toArray('[data-case-reveal]').forEach(el=>gsap.fromTo(el,{clipPath:'inset(0% 0% 100% 0%)'},{clipPath:'inset(0% 0% 0% 0%)',duration:1.15,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 90%',once:true},clearProps:'clipPath'}));
        gsap.utils.toArray('[data-case-visual]').forEach(el=>{
          const timeline=gsap.timeline({scrollTrigger:{trigger:el,start:'top 88%',once:true}});
          timeline.fromTo(el,{clipPath:'inset(8% 0% 8% 0%)'},{clipPath:'inset(0% 0% 0% 0%)',duration:1.5,ease:'power3.out',clearProps:'clipPath'})
            .fromTo(el.querySelector('img'),{scale:1.025},{scale:1,duration:1.7,ease:'power3.out',clearProps:'transform'},0);
        });
        gsap.matchMedia().add('(min-width: 900px) and (prefers-reduced-motion: no-preference)',()=>{
          gsap.utils.toArray('.cover').forEach(el=>gsap.fromTo(el.querySelector('.demo-headline'),{yPercent:-10},{yPercent:10,ease:'none',scrollTrigger:{trigger:el,start:'top bottom',end:'bottom top',scrub:1}}));
        });

      });
    });
    ScrollTrigger.refresh();
  }
  let observer;
  function observeCases() {
    observer?.disconnect();
    observer=new IntersectionObserver(entries=>{
      for(const entry of entries)if(entry.isIntersecting){const jump=document.querySelector('#project-jump');if(jump)jump.value=entry.target.id;}
    },{rootMargin:'-10% 0px -65% 0px',threshold:0});
    document.querySelectorAll('.case').forEach(el=>observer.observe(el));
    document.querySelectorAll('details').forEach(el=>el.addEventListener('toggle',()=>window.ScrollTrigger?.refresh()));
    document.querySelectorAll('.project-visual img').forEach(el=>el.addEventListener('load',()=>window.ScrollTrigger?.refresh(),{once:true}));
  }
  render();animate();observeCases();
  document.querySelector('#project-jump')?.addEventListener('change',e=>{
    const target=document.getElementById(e.target.value);if(!target)return;
    history.pushState(null,'','#'+target.id);target.scrollIntoView({behavior:reduced.matches||Math.abs(target.getBoundingClientRect().top)>innerHeight*2?'instant':'smooth'});
    target.setAttribute('tabindex','-1');target.focus({preventScroll:true});
  });
  document.querySelector('.language').addEventListener('click',()=>{
    const active=[...document.querySelectorAll('.case')].find(el=>{const r=el.getBoundingClientRect();return r.top<=innerHeight*.5&&r.bottom>innerHeight*.5;});
    const offset=active?.getBoundingClientRect().top,id=active?.id;
    animationContext?.revert();language=language==='ru'?'en':'ru';
    try{localStorage.setItem('portfolio-language',language);}catch{}
    render();
    animate(false);observeCases();
    if(id)window.scrollTo({top:document.getElementById(id).getBoundingClientRect().top+scrollY-offset,behavior:'instant'});
  });
  document.addEventListener('click',e=>{
    const link=e.target.closest('a');
    if(!link||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.button!==0)return;
    if(link.getAttribute('href')?.startsWith('#')||(link.origin===location.origin&&link.pathname===location.pathname&&link.hash)){
      const target=document.getElementById(link.hash.slice(1));if(!target)return;
      e.preventDefault();history.pushState(null,'',link.hash);
      target.scrollIntoView({behavior:link.classList.contains('intro-explore')||reduced.matches||Math.abs(target.getBoundingClientRect().top)>innerHeight*2?'instant':'smooth',block:'start'});
      target.setAttribute('tabindex','-1');target.focus({preventScroll:true});
    }else if(link.origin===location.origin&&link.pathname.endsWith('.html')&&window.gsap&&!reduced.matches){
      e.preventDefault();window.PageNavigation?PageNavigation.go(link.href):location.assign(link.href);
    }
  });
  const hashScroll=()=>{if(location.hash)document.getElementById(location.hash.slice(1))?.scrollIntoView({behavior:'instant'});};
  window.addEventListener('load',()=>{window.ScrollTrigger?.refresh();hashScroll();});
  document.fonts?.ready.then(()=>window.ScrollTrigger?.refresh());
  window.addEventListener('pageshow',e=>{if(e.persisted)window.gsap?.set('.page-curtain',{y:'100%'});});
  if(document.readyState==='complete')hashScroll();
})();








