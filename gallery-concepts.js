(() => {
  const media=window.portfolioMedia;
  const url=(id,index=0)=>media[id][index].src;
  const bg=(selector,id,index=0)=>document.querySelector(selector).style.backgroundImage=`url("${url(id,index)}")`;
  bg('.fold-next','kozikhinsky');bg('.fold-top','red-path');bg('.fold-bottom','red-path');bg('.slit-image','red-path');bg('.cut-first','red-path',1);bg('.cut-second','credo',1);bg('.cut-third','global-digital');bg('.zoom-image','credo',1);
  const pictures=(ids)=>ids.map(([id,i])=>`<img src="${url(id,i)}" alt="${media[id][i].alt.ru}">`).join('');
  document.querySelector('.zoom-series').innerHTML=pictures([['credo',0],['credo',2],['credo',3]]);
  document.querySelector('.zoom-others').innerHTML=pictures([['red-path',0],['kozikhinsky',0],['global-digital',0],['mens-club',0]]);
  const motion={};
  motion.fold=gsap.timeline({paused:true}).to('.fold-bottom',{rotationX:95,duration:1.1,ease:'power2.inOut'}).to('.fold-top',{rotationX:-95,duration:1.1,ease:'power2.inOut'},.55).to('.fold-line',{opacity:0,duration:.5},1).to({}, {duration:.6});
  motion.slit=gsap.timeline({paused:true}).to('.slit-title',{xPercent:-25,opacity:0,duration:1,ease:'power2.inOut'},0).to('.slit-image',{clipPath:'inset(0 0% 0 0%)',duration:2,ease:'expo.inOut'},0).to({}, {duration:.5});
  motion.cuts=gsap.timeline({paused:true}).to('.cut-second',{clipPath:'circle(75% at 52% 52%)',duration:1.4,ease:'power3.inOut'},.35).to('.cut-second',{scale:1.06,duration:1.2,ease:'none'},1.5).to('.cut-third',{clipPath:'polygon(0 0%,100% 0%,100% 100%,0 100%)',duration:1.4,ease:'power3.inOut'},2.6).to({}, {duration:.5});
  motion.zoom=gsap.timeline({paused:true}).fromTo('.zoom-image',{scale:4.5},{scale:1,duration:2,ease:'power2.inOut'}).to('.zoom-main',{scale:.56,yPercent:-23,duration:1.5,ease:'power3.inOut'},2.1).to('.zoom-series',{opacity:1,duration:.7},2.7).to('.zoom-project',{scale:.48,duration:1.5,ease:'power3.inOut'},3.8).to('.zoom-others',{opacity:1,duration:1},4).to({}, {duration:.5});
  document.querySelectorAll('[data-concept]').forEach(article=>{
    const timeline=motion[article.dataset.concept],slider=article.querySelector('input'),button=article.querySelector('button');
    timeline.eventCallback('onUpdate',()=>{slider.value=Math.round(timeline.progress()*100);});
    timeline.eventCallback('onComplete',()=>{button.textContent='Повторить ↗';});
    button.addEventListener('click',()=>{button.textContent='Повторить ↗';timeline.restart();});
    slider.addEventListener('input',()=>timeline.pause().progress(Number(slider.value)/100));
  });
})();
