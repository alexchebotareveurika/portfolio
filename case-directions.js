(() => {
  gsap.registerPlugin(ScrollTrigger);
  const root=document.querySelector('#case-preview'),select=document.querySelector('select');
  let direction=location.hash==='#story'?'story':'split',context;
  const reduced=matchMedia('(prefers-reduced-motion:reduce)');
  const titles={'red-path':'Красный путь',myshyak:'Мышьяк'};
  function render(){
    context?.revert();
    const project=select.value,story=portfolioCaseStories[project].ru,media=portfolioMedia[project];
    const image=(chapter,detail=false)=>{
      const ref=chapter.media[0],m={...media[ref.index],...ref};
      const h=m.height-(m.trimTop||0)-(m.trimBottom||0);
      return `<div class="${detail?'detail-crop':'image-crop'}" ${detail?'':`style="aspect-ratio:${m.width}/${h}"`}><img src="${m.src}" width="${m.width}" height="${m.height}" alt="${m.alt.ru}" ${detail?'':`style="${m.trimTop?`margin-top:-${m.trimTop/m.width*100}%`:''}"`} loading="lazy"></div>`;
    };
    document.querySelectorAll('[data-direction]').forEach(button=>{const active=button.dataset.direction===direction;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active));});
    if(direction==='split'){
      root.innerHTML=`<article class="split-case"><aside class="case-reading"><h1>${titles[project]}</h1><p class="case-lead">${story.lead}</p><div class="chapter-nav">${story.chapters.map((c,i)=>`<button data-chapter="${i}" class="${i===0?'active':''}" aria-pressed="${i===0}">${c.label}</button>`).join('')}</div><div class="reading-panels">${story.chapters.map((c,i)=>`<section class="reading-panel ${i===0?'active':''}" ${i===0?'':'inert aria-hidden="true"'}><h2>${c.title}</h2>${c.text.map(p=>`<p>${p}</p>`).join('')}</section>`).join('')}</div></aside><div class="case-gallery">${story.chapters.map((c,i)=>`<section class="gallery-chapter" id="gallery-${i}"><div class="mobile-reading"><h2>${c.title}</h2>${c.text.map(p=>`<p>${p}</p>`).join('')}</div><div class="image-frame" data-image>${image(c)}</div><p class="visual-note"><span>${media[c.media[0].index].caption.ru}</span><span>${c.caption}</span></p>${i===1?`<div class="detail-grid"><figure data-image><div class="image-frame">${image(c,true)}</div><figcaption class="small-caption">Деталь интерфейса</figcaption></figure><figure data-image><div class="image-frame">${image(story.chapters[0],true)}</div><figcaption class="small-caption">Деталь первого экрана</figcaption></figure></div>`:''}</section>`).join('')}</div></article>`;
      const panels=[...root.querySelectorAll('.reading-panel')],buttons=[...root.querySelectorAll('[data-chapter]')];
      let active=0;
      const activate=i=>{
        if(i===active)return;active=i;
        panels.forEach((panel,index)=>{panel.classList.toggle('active',index===i);panel.inert=index!==i;panel.setAttribute('aria-hidden',String(index!==i));});
        buttons.forEach((button,index)=>{button.classList.toggle('active',index===i);button.setAttribute('aria-pressed',String(index===i));});
        if(!reduced.matches)gsap.fromTo(panels[i],{y:12,clipPath:'inset(0 0 100% 0)'},{y:0,clipPath:'inset(0 0 0% 0)',duration:.7,ease:'power3.out',overwrite:true});
      };
      buttons.forEach((button,i)=>button.addEventListener('click',()=>{activate(i);root.querySelector(`#gallery-${i}`).scrollIntoView({behavior:reduced.matches?'instant':'smooth'});}));
      context=gsap.context(()=>{
        if(innerWidth>650)root.querySelectorAll('.gallery-chapter').forEach((chapter,i)=>ScrollTrigger.create({trigger:chapter,start:'top 45%',end:'bottom 45%',onEnter:()=>activate(i),onEnterBack:()=>activate(i)}));
        animateImages();
      },root);
    }else{
      root.innerHTML=`<article class="story-case"><header class="story-intro"><h1>${titles[project]}</h1><dl class="story-project-meta"><div><dt>Клиент</dt><dd>${titles[project]}</dd></div><div><dt>Тип</dt><dd>${project==='red-path'?'Сайт кластера':'Сайт и каталог'}</dd></div><div><dt>Формат</dt><dd>Web</dd></div><div><dt>Роль</dt><dd>UX/UI дизайн</dd></div></dl></header><section class="story-opening"><div class="image-frame" data-image>${image(story.chapters[0])}</div></section>${story.chapters.map((c,i)=>`<section class="story-chapter ${i===1?'dark-story':i===2?'closing-story':''}"><div class="story-copy-grid"><p class="story-kicker" data-reveal>${c.label}</p><h2 data-reveal>${c.title}</h2><div class="story-prose" data-reveal>${c.text.map(p=>`<p>${p}</p>`).join('')}</div></div>${i>0?`<div class="image-frame" data-image>${image(c)}</div><p class="visual-note"><span>${c.caption}</span></p>`:''}</section>`).join('')}</article>`;
      context=gsap.context(()=>{
        if(!reduced.matches)root.querySelectorAll('[data-reveal]').forEach(el=>gsap.fromTo(el,{clipPath:'inset(0 0 100% 0)',y:24},{clipPath:'inset(0 0 0% 0)',y:0,duration:1.25,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 89%',once:true}}));
        animateImages();
      },root);
    }
    root.querySelectorAll('img').forEach(img=>img.addEventListener('load',()=>ScrollTrigger.refresh(),{once:true}));
    window.scrollTo({top:0,behavior:'instant'});ScrollTrigger.refresh();
  }
  function animateImages(){
    if(reduced.matches)return;
    root.querySelectorAll('[data-image]').forEach(el=>gsap.fromTo(el,{clipPath:'inset(8% 0 0 0)'},{clipPath:'inset(0% 0 0 0)',duration:1.5,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 92%',once:true}}));
  }
  document.querySelectorAll('[data-direction]').forEach(button=>button.addEventListener('click',()=>{direction=button.dataset.direction;history.replaceState(null,'','#'+direction);render();}));
  select.addEventListener('change',render);render();
})();
