(()=>{
const projects=[
['amtek','Амтек','Логистический сайт','Контейнеры и перспективный ритм синих рёбер.'],
['dl-studio','dl.studio','Сайт digital-студии','Первый экран сайта и фиолетовая ступенчатая графика.'],
['dl-games','dl.games','Сайт игровой студии','Каталог игр и розовая оптическая петля.'],
['red-path','Красный путь','Сайт креативного кластера','Кирпичная архитектура и коралловый радиальный мотив.'],
['credo','Credo','Сайт шинного бренда','Колесо и графитовые эллиптические линии.'],
['global-digital','Global Digital Group','Майнинговый дашборд','Метрики продукта и синяя волна данных.'],
['mens-club','Мужской клуб','Мобильное приложение','Экран приложения и бронзовые складки.'],
['kozikhinsky','Козихинский, 22','Сайт жилого дома','Светлый фасад и зелёные оптические арки.']
];
document.querySelector('.context-grid').innerHTML=projects.map(([id,name,type,note],i)=>`<figure class="context-card"><button class="context-art" data-project="${id}" aria-label="Увеличить ${name}"><img src="assets/optical-context/${id}.png" width="1448" height="1086" alt="${note}"><span class="before" style="background-position:${(i%4)*100/3}% ${i<4?0:100}%" aria-hidden="true"></span></button><figcaption><span class="context-type">${type}</span><h2>${name}</h2><p>${note}</p></figcaption></figure>`).join('');
const on=document.querySelector('#context-on'),off=document.querySelector('#context-off');
function mode(before){document.body.classList.toggle('show-before',before);on.setAttribute('aria-pressed',!before);off.setAttribute('aria-pressed',before);}
on.onclick=()=>mode(false);off.onclick=()=>mode(true);
const dialog=document.querySelector('#context-detail'),names=Object.fromEntries(projects.map(p=>[p[0],p[1]]));
document.querySelectorAll('.context-art').forEach(b=>b.onclick=()=>{if(document.body.classList.contains('show-before')){mode(false);return;}const id=b.dataset.project,src=`assets/optical-context/${id}.png`;document.querySelector('#context-image').src=src;document.querySelector('#context-image').alt=names[id];document.querySelector('#context-name').textContent=names[id];const a=document.querySelector('#context-download');a.href=src;a.download=id+'-context.png';dialog.showModal();});
dialog.querySelector('.close').onclick=()=>dialog.close();dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
})();
