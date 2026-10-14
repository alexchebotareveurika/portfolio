(() => {
  const stories=window.portfolioCaseStories;
  window.portfolioCaseOrder=['red-path','credo','global-digital','mens-club','myshyak','amtek','dl-studio','dl-games','one-price-coffee','kids-pizza-academy'];
  const chapter=(label,title,text,indices,caption)=>({label,title,text,media:indices.map(index=>({index})),caption});
  const labels={ru:['Задача','Дизайн-решение','Логика и процесс'],en:['The challenge','Design decision','Logic & process']};
  const add=(id,ru,en)=>{stories[id]={ru:{chapters:ru.map((c,i)=>chapter(labels.ru[i],...c))},en:{chapters:en.map((c,i)=>chapter(labels.en[i],...c))}};};
  add('credo',[
    ['Промо, которое объясняет продукт.',['Новая линейка шин требует одновременно выразительной презентации и понятного выбора. Важно передать характер моделей, а затем помочь посетителю разобраться в различиях.','Welcome собирает внимание вокруг продукта: крупная шина, короткое сообщение и спокойная навигация. Здесь 3D становится частью рассказа, а не отдельным украшением.'],[0],'Первое знакомство с линейкой.'],
    ['У каждой модели — своя среда.',['Sunmode, Icemode и Snowmode представлены через разные материалы, свет и окружение. Визуальная среда помогает считывать назначение модели ещё до подробного чтения.','Общий принцип композиции связывает сцены: продукт остаётся главным объектом, а типографика и пояснения поддерживают его. Смена атмосферы сохраняет узнаваемость платформы.'],[1,2],'Sunmode и Icemode: единая композиционная логика, разный характер продукта.'],
    ['От образа — к характеристикам.',['Работу над платформой выстраивал вокруг сценария знакомства с продуктом: визуальная концепция, презентация моделей и раскрытие характеристик. Продумывал поведение на компьютерах и мобильных устройствах.','Промо-подача и продуктовый UX должны работать вместе. Образ вовлекает, а информация помогает перейти от впечатления к осознанному выбору.'],[3],'Snowmode продолжает историю линейки и сохраняет общий визуальный язык.']
  ],[
    ['A promotion that explains the product.',['A new tyre range needs a distinctive introduction and a clear path to selection. The design presents each model’s character before explaining the differences.','The welcome screen centres on the tyre, a concise message and quiet navigation. 3D becomes part of the narrative rather than an isolated decoration.'],[0],'An introduction to the range.'],
    ['A distinct environment for each model.',['Sunmode, Icemode and Snowmode use different materials, lighting and environments to communicate their purpose.','A consistent composition connects the scenes: the product remains central, supported by typography and explanations.'],[1,2],'Sunmode and Icemode share a composition while expressing different product characteristics.'],
    ['From appearance to specifications.',['I developed the digital concept, model presentation and feature storytelling, planning desktop and mobile journeys.','Promotional storytelling and product UX work together: the visuals engage, while the information supports a considered choice.'],[3],'Snowmode extends the range’s visual language.']
  ]);
  add('global-digital',[
    ['Данные, с которыми можно работать.',['Пользователю майнинг-пула нужно видеть состояние оборудования, динамику показателей и финансовую информацию. На одном экране эти задачи легко превращаются в поток несвязанных чисел.','Дашборд разделяет обзор и подробности: ключевые показатели вынесены в карточки, график показывает изменение во времени, а навигация ведёт к отдельным рабочим сценариям.'],[0],'Главный экран: показатели и динамика в одной иерархии.'],
    ['Быстрый обзор. Точные детали.',['В финансовом разделе таблица становится основным инструментом чтения. Суммы, даты и состояния организованы в повторяемую структуру, которую удобно просматривать и сравнивать.','Визуальный язык сохраняется между разделами: нейтральные поверхности, синий акцент действий и компактная типографика. Интерфейс не конкурирует с данными.'],[1],'Начисления и выплаты как самостоятельный рабочий сценарий.'],
    ['Одно действие — один ясный шаг.',['Логику интерфейса удобно рассматривать через три уровня: обзор состояния, просмотр подробностей и конкретное действие. Для добавления воркера используется отдельный диалог.','Небольшая форма ограничивает контекст текущей задачей. Поля, пояснения и основное действие собраны рядом, а общий экран остаётся за пределами этого шага.'],[2],'Диалог добавления воркера без лишней информации.']
  ],[
    ['Data people can work with.',['Mining pool users need equipment status, performance trends and financial information. Without hierarchy, these become a stream of unrelated numbers.','The dashboard separates overview from detail: metric cards, a time-based graph and navigation to specific workflows.'],[0],'Metrics and trends in one clear hierarchy.'],
    ['A quick overview. Precise detail.',['Tables form the core of the financial section. Amounts, dates and states follow a repeatable structure for scanning and comparison.','Neutral surfaces, blue actions and compact typography connect the sections without competing with the data.'],[1],'Payments as a dedicated workflow.'],
    ['One action. One clear step.',['The interface connects three levels: an overview, detailed information and a specific action. Adding a worker uses a dedicated dialog.','The small form focuses on the current task, bringing fields, explanations and the primary action together.'],[2],'A focused worker dialog.']
  ]);
  add('mens-club',[
    ['Клубный опыт в одном приложении.',['Рекомендации мест, события и личный профиль должны складываться в понятный повседневный сценарий. На главном экране важно быстро показать участнику, что ему доступно.','Фотографии помогают выбирать места, а карточки объединяют название и условия. Нижняя навигация сохраняет доступ к основным разделам приложения.'],[0],'Главный экран приложения с рекомендациями.'],
    ['Сначала познакомить. Затем вовлечь.',['Онбординг объясняет приложение до начала работы с ним. Он отделён от основной ленты, поэтому первое знакомство не перегружает повседневный интерфейс.','Светлый фон, фотографии и тёплые акценты задают спокойный клубный характер. Визуальная иерархия помогает различать содержание, навигацию и действия.'],[1],'Онбординг как отдельный этап знакомства.'],
    ['От общего предложения — к личному.',['Структура приложения связывает знакомство с клубом, просмотр рекомендаций и личный раздел. Каждый уровень отвечает на свой вопрос: что это, куда пойти и что доступно мне.','В профиле информация участника собрана в вертикальную систему. Повторяемые блоки поддерживают чтение длинного экрана и сохраняют связь с общей навигацией.'],[2],'Личный раздел продолжает общую систему приложения.']
  ],[
    ['The club experience in one app.',['Recommendations, events and a member profile need to form a clear everyday journey. The home screen introduces what is available.','Photography supports venue selection; cards combine names and conditions, while bottom navigation keeps the core sections accessible.'],[0],'The app home with recommendations.'],
    ['Introduce first. Engage next.',['Onboarding explains the app separately from the main feed, keeping introductory content out of everyday use.','Light surfaces, photography and warm accents establish a quiet club character and a clear hierarchy of content and actions.'],[1],'A dedicated onboarding experience.'],
    ['From a shared offer to a personal view.',['The structure connects introduction, recommendations and the member area, each answering a different question.','The profile organises member information vertically. Repeated blocks support a longer screen and stay connected to the app’s navigation.'],[2],'The personal area extends the interface system.']
  ]);
  add('amtek',[
    ['Показать логистику как систему.',['На сайте логистической компании нужно соединить направления перевозок, информацию о компании и обращение за расчётом. Первый экран должен дать понятную отправную точку для этого маршрута.','Контейнеры формируют предметный образ, а карточки направлений переводят его в конкретное предложение. Заголовок и действие остаются в одном поле внимания.'],[0],'Первый экран: образ компании и направления перевозок.'],
    ['Разные услуги. Один принцип выбора.',['Направления перевозок представлены в единой сетке: иконка, название и краткое условие. Такой порядок помогает сравнивать варианты без перехода между разрозненными блоками.','Синие поверхности и геометрия контейнеров связывают продуктовую информацию с айдентикой. Блок о компании добавляет контекст, не меняя язык страницы.'],[1,2],'Система услуг и представление компании.'],
    ['Знакомство заканчивается запросом.',['Маршрут страницы ведёт от предложения и подтверждающей информации к заявке на расчёт. Форма раскрывает задачу через направление, тип перевозки и контакты.','Визуальная часть рядом с формой продолжает образ контейнера. Коммерческое действие становится завершением общей истории, а не отдельным экраном с другой стилистикой.'],[3],'Заявка на расчёт как следующий шаг.']
  ],[
    ['Present logistics as a system.',['The site connects transportation services, company information and a request for a quote. The opening screen establishes a clear starting point.','Containers create a tangible image, while service cards turn it into a specific offer alongside the headline and action.'],[0],'Company character and transportation services.'],
    ['Different services. One selection pattern.',['Service cards share a consistent structure of icon, name and concise condition, supporting comparison.','Blue surfaces and container geometry connect information with the identity. Company information extends the same visual language.'],[1,2],'Service selection and company introduction.'],
    ['An introduction leading to a request.',['The page moves from the offer and company information to a quote request with route, transport type and contact fields.','The container illustration beside the form continues the visual story, making the commercial action its natural conclusion.'],[3],'The quote request as the next step.']
  ]);
  add('dl-studio',[
    ['Студия через характер и работу.',['Сайт digital-студии должен познакомить с командой через её подход и проекты. Важно соединить выразительный первый экран с понятным рассказом об услугах.','Крупное STUDIO и фиолетовая контурная графика задают узнаваемую композицию. Кейс на первом экране быстро переводит внимание от заявления к конкретной работе.'],[0],'Первый экран студии.'],
    ['Работы говорят первыми.',['Сетка проектов соединяет разнообразные визуалы с короткими подписями. Она позволяет быстро увидеть широту задач, сохраняя единый порядок карточек.','Портфолио сменяется фактами о студии и партнёрами. Масштаб типографики различает примеры работ и подтверждающую информацию, а зелёные акценты выделяют числа.'],[1,2],'Портфолио и информация о студии в разных типографических ритмах.'],
    ['От проекта — к компетенции.',['Страница выстроена как последовательность: визуальное знакомство, проекты, информация о студии, услуги и контакт. Так каждое следующее действие получает контекст.','Услуги раскрываются отдельными строками с примерами. Контактный блок завершает маршрут и сохраняет характер главного экрана — крупную типографику и фиолетовый акцент.'],[3],'Услуги и переход к обсуждению задачи.']
  ],[
    ['A studio through its character and work.',['The site introduces a digital studio through its approach and projects, connecting an expressive opening with a clear account of services.','Large STUDIO typography and purple contours establish a recognisable composition. A project preview moves attention from a statement to actual work.'],[0],'The studio opening screen.'],
    ['Let the work speak first.',['A project grid combines varied visuals with concise captions and a consistent card structure.','Portfolio examples lead to company facts and partners. Typographic scale separates these layers, while green accents emphasise figures.'],[1,2],'Portfolio examples and studio information use different typographic rhythms.'],
    ['From projects to capabilities.',['The page connects introduction, portfolio, studio information, services and contact so each next step has context.','Services appear as separate rows with examples. The contact section carries the opening screen’s typography and purple accent forward.'],[3],'Services and the path to a conversation.']
  ]);
  add('dl-games',[
    ['Показать игры через вовлечение.',['Сайт игровой студии знакомит с проектами через их настроение и персонажей. Важно дать ощущение игрового опыта и одновременно сохранить понятный путь к работам и контакту.','Первый экран соединяет короткое заявление с плавными цветными лентами. Они задают движение и становятся повторяющимся элементом всей страницы.'],[0],'Первый экран с цветными лентами.'],
    ['Каждая игра — отдельный мир.',['Карточки проектов строятся вокруг персонажей и предметов. Короткие подписи добавляют контекст, а разнообразные фоны помогают различать игровые миры.','Одна сетка удерживает эти разные образы вместе. Общая типографика и порядок информации позволяют рассматривать проекты, не переучиваясь от карточки к карточке.'],[1],'Игровые проекты в единой сетке.'],
    ['От эмоции — к доверию и контакту.',['После проектов страница раскрывает клиентов, хайлайты и информацию о студии. Рассказ переходит от впечатления к более конкретному знакомству с её работой.','Цветные ленты связывают разделы и обрамляют финальное действие. Контактный блок продолжает игровую интонацию, оставаясь простым и читаемым.'],[2,3],'Клиенты, хайлайты и финальный контактный блок.']
  ],[
    ['Introduce games through engagement.',['The site presents game projects through mood and characters while keeping a clear path to work and contact.','The opening combines a concise statement with flowing coloured ribbons that recur throughout the page.'],[0],'The opening screen and coloured ribbons.'],
    ['A distinct world for each game.',['Project cards centre on characters and objects, with concise captions and different backgrounds distinguishing the game worlds.','One grid, shared typography and a repeatable information order keep the varied imagery coherent.'],[1],'Game projects in a shared grid.'],
    ['From emotion to trust and contact.',['Clients, highlights and studio information follow the projects, moving from first impressions to a more specific introduction.','Coloured ribbons connect the sections and frame the final action, carrying the playful character into a clear contact area.'],[2,3],'Clients, highlights and the final contact section.']
  ]);
  add('one-price-coffee',[
    ['Одна сеть. Две аудитории.',['Задача One Price Coffee расширилась с B2C до B2C + B2B. Понадобилось пересобрать структуру и прототипы, чтобы учесть разные аудитории в одном проекте.','Перестроил не только интерфейс, но и процесс работы: новый объём нужно было довести до результата в условиях жёстких сроков.'],[0],'One Price Coffee.'],
    ['Расширить задачу. Сохранить целостность.',['Подключил дополнительных дизайнеров и распределил задачи. При параллельной работе удерживал единое UX- и визуальное направление.','Структура, прототипы и дизайн развивались как части одного решения. Координация команды помогала сохранять целостность проекта при изменении его масштаба.'],[],''],
    ['2-е место в Рейтинге Рунета.',['Довёл проект до результата в условиях жёстких сроков. Сайт One Price Coffee занял второе место в своей категории в Рейтинге Рунета.'],[],'']
  ],[
    ['One network. Two audiences.',['The One Price Coffee scope expanded from B2C to B2C + B2B. I reworked the structure and prototypes to address both audiences in one project.','The larger scope also required changes to the design process, with delivery under tight deadlines.'],[0],'One Price Coffee.'],
    ['Expand the scope. Preserve coherence.',['I brought in additional designers and distributed tasks while maintaining a unified UX and visual direction.','The structure, prototypes and design developed as parts of one solution, with team coordination preserving coherence as the scope changed.'],[],''],
    ['2nd place in the Runet Rating.',['Delivered under tight deadlines. The One Price Coffee website received second place in its category in the Runet Rating.'],[],'']
  ]);
  add('kids-pizza-academy',[
    ['Dodo. Пять совместных проектов.',['Для Dodo сделал уже пять проектов. Kids Pizza Academy — один из проектов этого сотрудничества.','Команда возвращается с новыми задачами: сотрудничество продолжается за пределами одного запуска.'],[0],'Kids Pizza Academy — проект для Dodo.'],
    ['Характер проекта — в первом впечатлении.',['Обложка Kids Pizza Academy строится вокруг персонажа-пиццы, движения и насыщенного цвета. Крупный образ задаёт игровую интонацию проекта.'],[],''],
    ['Сотрудничество, которое продолжается.',['Пять проектов для одного клиента — важная часть моего опыта. Новая задача становится продолжением отношений с командой Dodo.'],[],'']
  ],[
    ['Dodo. Five projects together.',['I have completed five projects for Dodo. Kids Pizza Academy is one of these collaborations.','The team returns with new challenges, extending our collaboration beyond a single launch.'],[0],'Kids Pizza Academy — a project for Dodo.'],
    ['Project character in the first impression.',['The Kids Pizza Academy cover combines a pizza character, movement and saturated colour, establishing a playful tone.'],[],''],
    ['A continuing collaboration.',['Five projects for one client are an important part of my experience. New challenges continue the relationship with the Dodo team.'],[],'']
  ]);
  stories['one-price-coffee'].ru.chapters[2].label='Результат';
  stories['one-price-coffee'].en.chapters[2].label='Outcome';
  stories['kids-pizza-academy'].ru.chapters[2].label='Сотрудничество';
  stories['kids-pizza-academy'].en.chapters[2].label='Collaboration';
  stories['kids-pizza-academy'].ru.client='Dodo';
  stories['kids-pizza-academy'].en.client='Dodo';
  const formats={'red-path':['Сайт кластера','Cluster website','Web'],credo:['Промо-платформа','Promotional platform','Web'],'global-digital':['Майнинг-пул','Mining pool','Web app'],'mens-club':['Клубное приложение','Club app','Mobile app'],myshyak:['Сайт и каталог','Website & catalog','Web'],amtek:['Логистика','Logistics','Web'],'dl-studio':['Сайт студии','Studio website','Web'],'dl-games':['Сайт игровой студии','Game studio website','Web'],'one-price-coffee':['Сайт сети кофеен','Coffee chain website','Web'],'kids-pizza-academy':['Kids Pizza Academy','Kids Pizza Academy','Digital']};
  for(const [id,[ru,en,format]] of Object.entries(formats))for(const lang of ['ru','en']){stories[id][lang].type=lang==='ru'?ru:en;stories[id][lang].format=format;}
  const crop=(id,index,width,height,top,bottom,ru,en)=>({src:`assets/projects/${id}-full.png`,width,height,trimTop:top,trimBottom:bottom,presentation:'screen',caption:{ru,en},alt:{ru,en}});
  window.portfolioMedia.amtek=[crop('amtek',0,1515,5408,112,4426,'Первый экран','Opening screen'),crop('amtek',1,1515,5408,2000,2550,'Направления перевозок','Transportation services'),crop('amtek',2,1515,5408,1340,3350,'Информация о компании','Company information'),crop('amtek',3,1515,5408,3750,748,'Заявка на расчёт','Quote request')];
  window.portfolioMedia['dl-studio']=[crop('dl-studio',0,1280,6156,0,4780,'Первый экран и пример проекта','Opening and project preview'),crop('dl-studio',1,1280,6156,2040,2880,'Сетка проектов','Project grid'),crop('dl-studio',2,1280,6156,3280,1860,'Факты и партнёры','Facts and partners'),crop('dl-studio',3,1280,6156,4260,380,'Услуги и контакт','Services and contact')];
  window.portfolioMedia['dl-games']=[crop('dl-games',0,1920,6934,0,5890,'Первый экран','Opening screen'),crop('dl-games',1,1920,6934,1040,3934,'Игровые проекты','Game projects'),crop('dl-games',2,1920,6934,2940,2170,'Клиенты и хайлайты','Clients and highlights'),crop('dl-games',3,1920,6934,4850,610,'Факты и контакт','Facts and contact')];
  window.portfolioMedia.amtek.forEach(entry=>{entry.trimLeft=2;entry.trimRight=2;});
  const screen=(name,width,height,ru,en,top=0,bottom=0)=>({src:`assets/projects/${name}.png`,width,height,trimTop:top,trimBottom:bottom,presentation:'screen',caption:{ru,en},alt:{ru,en}});
  window.portfolioMedia['one-price-coffee']=[
    screen('one-price-coffee-full',1512,7154,'Первый экран One Price Coffee','One Price Coffee opening',112,6192),
    screen('one-price-coffee-full',1512,7154,'Раздел франшизы','Franchise section',962,5422),
    screen('one-price-coffee-full',1512,7154,'Меню для гостей','Menu for guests',3663,2831),
    screen('one-price-coffee-full',1512,7154,'Программа лояльности','Loyalty programme',4465,2239),
    screen('one-price-coffee-full',1512,7154,'Карта кофеен','Coffee shop map',6215,345)
  ];
  for(const lang of ['ru','en']){
    stories['one-price-coffee'][lang].chapters[1].media=[{index:1},{index:2}];
    stories['one-price-coffee'][lang].chapters[2].media=[{index:3},{index:4}];
  }
  stories['one-price-coffee'].ru.chapters[1].text.push('Для гостей сайт раскрывает меню, программу лояльности и карту кофеен. Для будущих партнёров — франшизу и шаги открытия. Эти маршруты объединены фирменными цветами, предметными визуалами и общей типографикой.');
  stories['one-price-coffee'].en.chapters[1].text.push('Guests can explore the menu, loyalty programme and shop map. Potential partners can discover the franchise and opening process. Brand colours, product imagery and shared typography connect the two journeys.');
  window.portfolioMedia['kids-pizza-academy']=[
    screen('kids-pizza-welcome',1512,839,'Первый экран Kids Pizza Academy','Kids Pizza Academy opening'),
    screen('kids-pizza-world',1512,855,'Тематические кулинарные приключения','Themed culinary adventures'),
    screen('kids-pizza-dates',1512,2732,'Выбор мастер-класса','Masterclass selection',0,360),
    screen('kids-pizza-detail',1512,1884,'Описание и запись на мастер-класс','Masterclass details and booking',0,360),
    screen('kids-pizza-checkout',1512,1136,'Оформление подарочного сертификата','Gift card checkout'),
    screen('kids-pizza-success',1512,1554,'Подтверждение записи','Booking confirmation',0,360)
  ];
  stories['kids-pizza-academy'].ru.chapters=[
    chapter('Задача','Детям — приключение. Родителям — ясность.',['Kids Pizza Academy — проект Dodo о детских кулинарных мастер-классах в Дубае. Сайт знакомит с программами и помогает перейти к выбору занятия и записи.','Фотографии детей показывают сам опыт, а персонажи и цветные иллюстрации передают игровую атмосферу. Информация о занятиях и основные действия остаются читаемыми внутри этой яркой подачи.'],[0],'Первое знакомство с академией.'),
    chapter('Дизайн-решение','Яркий мир. Понятный выбор.',['Визуальный язык соединяет фотографии, персонажей и мягкие цветные поверхности. У разных программ свой характер, но интерфейс сохраняет общие принципы навигации и действий.','От списка мастер-классов посетитель переходит к подробному экрану. Возраст, длительность, содержание занятия и информация о ведущем помогают оценить предложение; выбор дня и времени расположен рядом с записью.'],[2,3,1],'Программы, подробности занятия и визуальный язык академии.'),
    chapter('Сценарии и сотрудничество','От выбора — к подтверждению.',['Запись на занятие и покупка подарочного сертификата — разные маршруты. Для сертификата выделен пошаговый сценарий с данными получателя, временем отправки и итогом заказа.','Экран успешной записи завершает путь отдельным подтверждением. Важно сохранить понятное состояние после действия, а не оборвать сценарий на форме.','Kids Pizza Academy — один из пяти проектов, которые сделал для Dodo. Команда возвращается с новыми задачами, и сотрудничество продолжается.'],[4,5],'Оформление подарка и подтверждение записи.')
  ];
  stories['kids-pizza-academy'].en.chapters=[
    chapter('The challenge','Adventure for children. Clarity for parents.',['Kids Pizza Academy is a Dodo project for children’s culinary masterclasses in Dubai. The site introduces programmes and leads to class selection and booking.','Children’s photography shows the experience, while characters and colourful illustrations establish a playful atmosphere. Information and primary actions remain readable within that expressive presentation.'],[0],'An introduction to the academy.'),
    chapter('Design decision','A playful world. A clear choice.',['Photography, characters and soft coloured surfaces form the visual language. Individual programmes have their own character, with shared navigation and action patterns.','Visitors move from the class list to a detailed page. Age, duration, content and host information explain the offer; day and time selection sit alongside booking.'],[2,3,1],'Programmes, class details and the academy’s visual language.'),
    chapter('Journeys & collaboration','From selection to confirmation.',['Class booking and gift card purchase follow different journeys. The gift card uses a step-by-step flow with recipient details, delivery time and an order summary.','A booking success screen completes the journey with a clear confirmation instead of ending at the form.','Kids Pizza Academy is one of five projects I have completed for Dodo. The team returns with new challenges, extending our collaboration.'],[4,5],'Gift card checkout and booking confirmation.')
  ];
  stories['kids-pizza-academy'].ru.type='Сайт детской академии';
  stories['kids-pizza-academy'].en.type='Kids academy website';
  stories['kids-pizza-academy'].ru.format=stories['kids-pizza-academy'].en.format='Web';
  for(const lang of ['ru','en'])for(const item of window.portfolioContent[lang].galleryExtras){if(item.id==='one-price-coffee')item.title='One Price Coffee';if(item.id==='kids-pizza-academy')item.title='Kids Pizza Academy';}
  const intros={
    'red-path':['Пространство, события и резиденты креативно-производственного кластера — в одной цифровой системе.','Spaces, events and residents of a creative cluster in one digital system.'],
    credo:['Промо-платформа для новой линейки шин: продуктовый UX, 3D и интерактивная презентация характеристик.','A promotional tyre platform combining product UX, 3D and interactive feature storytelling.'],
    'global-digital':['Рабочая среда майнинг-пула: от обзора показателей до оборудования и выплат.','A mining pool workspace connecting performance, equipment and payments.'],
    'mens-club':['Места, события и личный профиль — мобильный опыт участника клуба.','Venues, events and a personal profile in a mobile club experience.'],
    myshyak:['Сайт производителя химической продукции. Материалы, технологии и каталог для профессиональной аудитории.','A chemical manufacturer’s website connecting materials, technology and a professional catalog.'],
    amtek:['Логистика через понятное предложение: направления перевозок, информация о компании и заявка на расчёт.','A clear logistics offer connecting transportation services, company information and quote requests.'],
    'dl-studio':['Сайт digital-студии, который раскрывает её характер через проекты, компетенции и команду.','A digital studio website introducing its character through projects, capabilities and the team.'],
    'dl-games':['Игровые миры, персонажи и проекты — выразительная цифровая презентация студии.','Game worlds, characters and projects in an expressive studio presentation.'],
    'one-price-coffee':['Два маршрута в одном сайте: для гостей кофеен и будущих партнёров сети.','Two journeys in one website: for coffee shop guests and future network partners.'],
    'kids-pizza-academy':['Сайт детской кулинарной академии Dodo в Дубае: знакомство с программами, выбор занятия и запись.','A Dodo kids culinary academy website in Dubai: programmes, class selection and booking.']
  };
  for(const [id,[ru,en]] of Object.entries(intros)){stories[id].ru.intro=ru;stories[id].en.intro=en;}
})();
