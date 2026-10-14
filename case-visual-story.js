(() => {
  const stories=window.portfolioCaseStories,media=window.portfolioMedia;
  const text=(ru,en)=>({ru,en});
  const add=(id,name,w,h,ru,en,options={})=>{
    const index=media[id].length;
    media[id].push({src:`assets/case-story/${name}.png`,width:w,height:h,presentation:'screen',caption:text(ru,en),alt:text(ru,en),...options});
    return {index};
  };
  const screen=(title,items,layout='pair')=>({type:'screens',title,items,layout});
  const flow=(title,steps)=>({type:'flow',title,steps});
  const block=(id,chapter,blocks)=>{for(const lang of ['ru','en'])stories[id][lang].chapters[chapter].visualStory=blocks;};
  const ref=index=>({index});

  const opcFranchise=add('one-price-coffee','opc-franchise-mobile',360,949,'Франшиза: мобильная версия B2B-сценария.','Franchise: the mobile B2B journey.',{presentation:'mobile'});
  const opcMenu=add('one-price-coffee','opc-menu-mobile',360,527,'Меню: мобильная версия для гостей сети.','Menu: the mobile presentation for guests.',{presentation:'mobile'});
  block('one-price-coffee',0,[{type:'shift',title:text('Смена задачи','A change in scope'),before:text('B2C','B2C'),beforeNote:text('Гости кофеен · продуктовая подача','Coffee shop guests · product presentation'),after:text('B2C + B2B','B2C + B2B'),afterNote:text('Гости сети + будущие партнёры франшизы','Guests + prospective franchise partners')}]);
  block('one-price-coffee',1,[screen(text('Два маршрута в одном сайте','Two journeys within one website'),[ref(1),ref(2)]),screen(text('Те же задачи на мобильном экране','The same needs on mobile'),[opcFranchise,opcMenu],'phones')]);
  block('one-price-coffee',2,[flow(text('Как связывалась работа команды','How the team’s work was connected'),[text('Новая главная и общее направление','New homepage and shared direction'),text('Распределение 20+ страниц','Distribution of 20+ pages'),text('Параллельная работа дизайнеров','Parallel design work'),text('Ревью и единое решение','Reviews and a coherent solution')])]);
  block('one-price-coffee',3,[{type:'award',title:text('Рейтинг Рунета','Runet Rating'),value:'2',detail:text('место · корпоративные сайты','place · corporate websites')},screen(text('Функциональные сценарии для гостей','Functional guest journeys'),[ref(3),ref(4)])]);

  const customizer=add('kids-pizza-academy','kids-customizer',1512,982,'Выбор оформления: иллюстрация и цвет подарочной карты.','Choosing the gift card illustration and colour.');
  const amount=add('kids-pizza-academy','kids-amount',1512,982,'Следующий шаг — выбор суммы подарка.','The next step is choosing the gift amount.');
  const error=add('kids-pizza-academy','kids-error',1512,1404,'Ошибка записи: понятное сообщение в общей стилистике.','Booking error: a clear message within the shared visual language.',{trimBottom:365});
  block('kids-pizza-academy',2,[screen(text('Выбор занятия и его подробности','Choosing a class and exploring its details'),[ref(2),ref(3)]),screen(text('Два исхода одного сценария','Two outcomes of one journey'),[ref(5),error])]);
  block('kids-pizza-academy',3,[screen(text('Сначала — характер подарка','First, the character of the gift'),[customizer],'wide'),screen(text('Затем — сумма и оформление','Then, the amount and checkout'),[amount,ref(4)])]);
  block('kids-pizza-academy',4,[{type:'shift',title:text('Развитие проекта','Project expansion'),before:text('ОАЭ','UAE'),beforeNote:text('Дубай · Абу-Даби','Dubai · Abu Dhabi'),after:text('Россия','Russia'),afterNote:text('Москва · Санкт-Петербург','Moscow · Saint Petersburg')}]);

  const gdgWorkers=add('global-digital','gdg-dark',1280,1242,'Воркеры: график распределения и подробный список.','Workers: a distribution chart and a detailed list.',{trimTop:112,eager:true});
  const gdgDark=add('global-digital','gdg-theme',1280,1242,'Тот же раздел воркеров в тёмной теме.','The same workers section in the dark theme.',{trimTop:112,eager:true});
  const gdgTablet=add('global-digital','gdg-tablet',768,1033,'Планшет: дашборд и крупный график.','Tablet: the dashboard and its main chart.',{trimTop:74,trimBottom:36,presentation:'tablet'});
  const gdgMobile=add('global-digital','gdg-workers-mobile',375,812,'Телефон: поиск воркеров и распределение хешрейта.','Mobile: worker search and hashrate distribution.',{trimTop:74,trimBottom:151,presentation:'mobile'});
  block('global-digital',0,[flow(text('Три уровня работы с данными','Three levels of working with data'),[text('Обзор: показатели и графики','Overview: metrics and charts'),text('Разделы: воркеры, блоки, выплаты','Sections: workers, blocks, payouts'),text('Действия: поиск, добавление, экспорт','Actions: search, adding, export')])]);
  block('global-digital',2,[{type:'themes',title:text('Один интерфейс. Две палитры.','One interface. Two palettes.'),light:gdgWorkers,dark:gdgDark}]);
  block('global-digital',3,[screen(text('Планшет и телефон: разная плотность данных','Tablet and mobile: different information density'),[gdgTablet,gdgMobile],'devices')]);

  const credoWelcome=add('credo','credo-mobile',375,812,'Мобильный welcome: первый контакт с продуктом.','Mobile welcome: the first product encounter.',{trimTop:28,trimBottom:68,presentation:'mobile'});
  const credoCatalog=add('credo','credo-catalog',375,2087,'Мобильный каталог: свойства модели и переход к покупке.','Mobile catalogue: model properties and the purchase action.',{presentation:'mobile'});
  const credoSizes=add('credo','credo-reviews',920,781,'Типоразмеры: проверка подходящей версии шины.','Tyre sizes: checking the appropriate variant.',{trimRight:6,presentation:'dialog'});
  const credoReviews=add('credo','credo-review-list',375,812,'Отзывы как следующий шаг знакомства с моделью.','Reviews as the next step in exploring a model.',{presentation:'mobile'});
  block('credo',2,[flow(text('Логика выбора модели','The model selection journey'),[text('Преимущества','Benefits'),text('Типоразмер','Tyre size'),text('Отзывы','Reviews'),text('Дистрибьютор','Distributor')]),screen(text('Mobile First в макетах','Mobile First in the layouts'),[credoWelcome,credoCatalog,credoReviews],'phones'),screen(text('Проверка типоразмера','Checking the tyre size'),[credoSizes],'wide')]);
  block('credo',3,[{type:'shift',title:text('Решение для первого запуска','The first-launch decision'),before:text('Секвенция','Sequence'),beforeNote:text('Изначально запланированная многоступенчатая анимация','The initially planned multi-stage animation'),after:text('Короткие видео','Short videos'),afterNote:text('Формат для MVP · секвенция оставлена в планах развития','MVP format · the sequence remains a future development plan')}]);
  block('credo',4,[{type:'layouts',title:text('Принцип десктопных композиций','The desktop composition principle')}]);

  const studioStack=add('dl-studio','studio-stack',1280,833,'Аналитика, проектирование и визуализация: фрагмент страницы услуг.','Analysis, prototyping and visual design: a fragment of the services page.',{trimLeft:40,trimRight:40,trimTop:133,trimBottom:268});
  const studioTech=add('dl-studio','studio-tech',1280,801,'Технологический стек на отдельной странице услуг.','Technology stacks on the dedicated services page.');
  const studioJournal=add('dl-studio','studio-journal',1280,2647,'Журнал: самостоятельная структура для статей студии.','Journal: a dedicated structure for studio articles.',{trimBottom:403});
  const studioClients=add('dl-studio','studio-clients',1280,1618,'Страница клиентов и отзывов: личный опыт сотрудничества.','Clients and reviews: personal accounts of collaboration.');
  block('dl-studio',2,[screen(text('От направления работы — к стеку','From a discipline to the technology stack'),[studioStack,studioTech]),screen(text('Переключение внутри страницы','Switching within the page'),[{...studioStack,trimLeft:214,trimRight:214,trimTop:738,trimBottom:20,caption:text('Нижнее меню: сайты, мобильные приложения, поддержка и дизайн. Фрагмент исходного макета.','Bottom menu: websites, mobile applications, support and design. A fragment of the original layout.')}],'strip')]);
  block('dl-studio',3,[screen(text('Две самостоятельные страницы','Two distinct pages'),[studioJournal,studioClients])]);

  const gamesGamification=add('dl-games','games-gamification',1920,1059,'Страница геймификации: этапы разработки соединены цветной линией.','Gamification page: a coloured line connects development stages.');
  const gamesAbout=add('dl-games','games-about',1920,2386,'About Us: карточки и композиция с круглыми элементами.','About Us: cards and a composition of circular elements.');
  block('dl-games',1,[{type:'worlds',title:text('Переплетающиеся игровые вселенные','Interwoven game universes')},screen(text('Идея в реальном макете','The concept in the actual layout'),[ref(1)],'wide')]);
  block('dl-games',2,[screen(text('Геймификация и About Us','Gamification and About Us'),[gamesGamification,gamesAbout])]);

  const amtekMap=add('amtek','amtek-map',1512,870,'География перевозок: города, варианты маршрута и карта.','Transportation geography: cities, route options and a map.',{trimBottom:65});
  const amtekRoute=add('amtek','amtek-route-card',680,178,'Маршрут разложен на участки и виды транспорта.','The route is broken down into segments and transport modes.');
  block('amtek',2,[flow(text('Подбор перевозки','Choosing transportation'),[text('Город отправления и назначения','Origin and destination'),text('Сравнение вариантов','Comparing options'),text('Транспорт и участки на карте','Transport and segments on the map'),text('Заявка','Enquiry')]),screen(text('Варианты маршрута рядом с картой','Route options beside the map'),[amtekMap],'wide'),screen(text('Как читается отдельный маршрут','Reading an individual route'),[amtekRoute],'strip')]);

  const redEvents=add('red-path','red-events',1512,1891,'Афиша: разные события в общей типографической системе.','Events: varied programmes within one typographic system.');
  const redBuilding=add('red-path','red-building',1512,982,'Детальная страница корпуса: фотографии и коммерческие характеристики.','Building detail: photography and commercial specifications.');
  block('red-path',1,[{type:'shift',title:text('Две параллельные линии работы','Two parallel strands of work'),before:text('Брендинг + сайт','Branding + website'),beforeNote:text('Параллельное развитие и согласование','Parallel development and approval'),after:text('Общая система','A shared system'),afterNote:text('Внедрение согласованной айдентики во все макеты','The approved identity applied across all layouts')}]);
  block('red-path',2,[screen(text('Типографика в разных сценариях','Typography across different journeys'),[ref(2),redEvents])]);
  block('red-path',3,[screen(text('От территории — к конкретному корпусу','From the site to an individual building'),[ref(1),redBuilding])]);
  block('red-path',4,[flow(text('Как коммуникация раскрывается в материалах','How communication extends across the materials'),[text('Сайт: знакомство с кластером','Website: discovering the cluster'),text('Брендбук: правила системы','Brand book: system guidelines'),text('Презентация: контекст и лоты','Presentation: context and properties'),text('Печать: физические носители','Print: physical applications')])]);

  const clubLogin=add('mens-club','club-login',375,812,'Авторизация: вход по номеру телефона.','Sign-in using a phone number.',{presentation:'mobile'});
  const clubTutorial=add('mens-club','club-tutorial',375,812,'Обучение внутри приложения: пояснение раздела партнёров.','In-app guidance: introducing the partners section.',{presentation:'mobile'});
  const clubFilters=add('mens-club','club-filters',375,812,'Фильтры: сортировка, расстояние, город и категории.','Filters: sorting, distance, city and categories.',{presentation:'mobile'});
  const clubDetail=add('mens-club','club-detail',375,870,'Карточка места: предложение партнёра и переход к действию.','Venue detail: the partner offer and the next action.',{presentation:'mobile'});
  const clubLoading=add('mens-club','club-loading',375,812,'Скелетон сохраняет структуру главной во время загрузки.','The skeleton preserves the homepage structure while loading.',{presentation:'mobile'});
  block('mens-club',1,[screen(text('Три разных этапа знакомства','Three distinct introduction stages'),[ref(1),clubLogin,clubTutorial],'phones')]);
  block('mens-club',2,[screen(text('Сузить выбор. Изучить предложение.','Narrow the choice. Explore the offer.'),[clubFilters,clubDetail],'phones')]);
  block('mens-club',3,[screen(text('Личный кабинет и состояние загрузки','Member account and loading state'),[ref(2),clubLoading],'phones')]);

  block('myshyak',2,[screen(text('Материал, название и описание — в одном блоке','Material, name and description within one block'),[
    {index:1,trimLeft:48,trimRight:912,trimTop:199,trimBottom:120,caption:text('Мышьяковая кислота: прямоугольная форма визуала. Фрагмент каталога.','Arsenic acid: a rectangular image shape. A catalogue fragment.')},
    {index:1,trimLeft:618,trimRight:342,trimTop:199,trimBottom:120,caption:text('Металлический мышьяк: скруглённая форма визуала. Фрагмент каталога.','Metallic arsenic: a rounded image shape. A catalogue fragment.')}
  ],'phones')]);

  const escape=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const arrow='<svg viewBox="0 0 48 24" aria-hidden="true"><path d="M1 12h44m-10-9 10 9-10 9" fill="none" stroke="currentColor" stroke-width="1.3"/></svg>';
  window.CaseVisualStory={
    render(chapter,visual,language){
      if(!chapter.visualStory)return null;
      const value=t=>escape(typeof t==='object'?t[language]:t),ru=language==='ru';
      return chapter.visualStory.map(b=>{
        const title=`<p class="story-visual-title" data-case-reveal>${value(b.title)}</p>`;
        if(b.type==='screens')return `<div class="story-visual-group">${title}<div class="editorial-gallery story-gallery story-gallery-${b.layout}">${visual({media:b.items,layout:b.layout})}</div></div>`;
        if(b.type==='flow')return `<figure class="story-exhibit">${title}<ol class="story-flow" data-case-reveal>${b.steps.map(t=>`<li><span>${value(t)}</span></li>`).join('')}</ol></figure>`;
        if(b.type==='shift')return `<figure class="story-exhibit">${title}<div class="story-shift" data-case-reveal><div><p>${value(b.before)}</p><span>${value(b.beforeNote)}</span></div>${arrow}<div><p>${value(b.after)}</p><span>${value(b.afterNote)}</span></div></div></figure>`;
        if(b.type==='award')return `<figure class="story-exhibit story-award" data-case-reveal><strong>${escape(b.value)}</strong><div><p>${value(b.title)}</p><span>${value(b.detail)}</span></div></figure>`;
        if(b.type==='themes')return `<figure class="story-exhibit story-themes" data-theme="light">${title}<div class="story-theme-controls" aria-label="${ru?'Цветовая тема макета':'Layout colour theme'}"><button type="button" data-story-theme="light" aria-pressed="true">${ru?'Светлая':'Light'}</button><button type="button" data-story-theme="dark" aria-pressed="false">${ru?'Тёмная':'Dark'}</button><span>${ru?'Те же данные и структура':'The same data and structure'}</span></div><div class="story-theme-picture" data-variant="light">${visual({media:[b.light]})}</div><div class="story-theme-picture" data-variant="dark" hidden>${visual({media:[b.dark]})}</div><div class="story-theme-palette" aria-hidden="true"><i></i><i></i><i></i><i></i></div></figure>`;
        if(b.type==='layouts')return `<figure class="story-exhibit">${title}<div class="story-layouts" data-case-reveal>${['left','right','center'].map((position,i)=>`<div class="story-layout story-layout-${position}"><span class="story-layout-text">${ru?'Текст':'Text'}</span><span class="story-layout-object">3D</span><small>${ru?['Текст слева','Текст справа','Центральная композиция'][i]:['Text on the left','Text on the right','Centred composition'][i]}</small></div>`).join('')}</div></figure>`;
        if(b.type==='worlds')return `<figure class="story-exhibit story-worlds">${title}<svg viewBox="0 0 1200 340" role="img" aria-label="${ru?'Три переплетающиеся линии как игровые вселенные':'Three interwoven lines representing game universes'}"><path d="M-30 220C210 350 280 20 520 140S890 380 1230 130" stroke="#0267ff"/><path d="M-30 150C200 0 310 300 540 230S930 0 1230 220" stroke="#7b3be8"/><path d="M-30 240C220 20 330 200 560 120S920 320 1230 100" stroke="#ffc928"/></svg></figure>`;
        return '';
      }).join('');
    }
  };
  document.addEventListener('click',event=>{
    const button=event.target.closest('[data-story-theme]');if(!button)return;
    const figure=button.closest('.story-themes'),theme=button.dataset.storyTheme;if(figure.dataset.theme===theme)return;
    figure.dataset.theme=theme;
    figure.querySelectorAll('[data-story-theme]').forEach(el=>el.setAttribute('aria-pressed',String(el===button)));
    figure.querySelectorAll('[data-variant]').forEach(el=>{el.hidden=el.dataset.variant!==theme;});
    const panel=figure.querySelector(`[data-variant="${theme}"] .editorial-panel`);
    if(window.gsap&&!matchMedia('(prefers-reduced-motion: reduce)').matches)gsap.fromTo(panel,{clipPath:'inset(0 0 100% 0)'},{clipPath:'inset(0)',duration:.55,ease:'power3.out',clearProps:'clipPath'});
    window.ScrollTrigger?.refresh();
  });
})();
