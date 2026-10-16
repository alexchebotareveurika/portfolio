// Case narratives based on the designer's first-hand project account.
(() => {
  const chapter=(label,title,text,media=[])=>({label,title,text,media});
  const stories=window.portfolioCaseStories['one-price-coffee'];
  Object.assign(stories.ru,{
    intro:'Корпоративный сайт федеральной сети кофеен: объединить опыт гостей и предложение франшизы после смены задачи в середине проекта.',
    role:'UX/UI и координация дизайна',
    chapters:[
      chapter('Задача и ограничения','Пересобрать проект после согласования главной.',[
        'One Price Coffee — федеральная сеть кофеен и крупная франшиза. Один из самых сложных проектов в моей практике: после согласования главной страницы пришлось заново выстроить дизайн-направление и процесс работы.',
        'Первоначальный бриф был ориентирован на B2C. Мы подготовили концепцию для гостей кофеен — с выразительными продуктовыми визуалами и анимацией. Главная задавала стилистику всего сайта и уже была согласована, когда обратная связь акционеров выявила другой приоритет: сайт должен работать и на будущих партнёров сети.',
        'Задача изменилась с B2C на B2C + B2B. Требовалось сохранить привлекательность бренда и усилить функциональную составляющую, чтобы помогать посетителям принимать решение о покупке франшизы. Переработка главной нарушила первоначальный график: дальнейший дизайн нужно было вести в ускоренном режиме.'
      ],[{index:0}]),
      chapter('Дизайн-решение','Две аудитории. Одно визуальное направление.',[
        'Полностью переработал главную страницу под новую задачу. В одном сайте соединили два маршрута: знакомство с кофе и сетью для гостей, изучение франшизы для будущих партнёров. После согласования новой главной перешли к остальным страницам.',
        'Главная сохранила насыщенную, «вкусную» подачу продукта. Остальные страницы получили более функциональный характер. В итоговых макетах раздел франшизы раскрывает предложение сети, а меню, программа лояльности и карта кофеен поддерживают задачи гостей.'
      ],[
        {index:1,caption:{ru:'B2B: предложение франшизы и факты о сети.',en:'B2B: the franchise offer and network facts.'}},
        {index:2,caption:{ru:'B2C: продуктовая подача меню для гостей кофеен.',en:'B2C: a product-led menu presentation for guests.'}}
      ]),
      chapter('Процесс и моя роль','20+ страниц. Несколько дизайнеров. Цельный сайт.',[
        'Объём корпоративного сайта превышал 20 страниц. Чтобы продолжить работу в сжатые сроки, к проекту привлекли внештатных дизайнеров. Я распределял страницы между ними и собой, выстраивая параллельную работу над сайтом.',
        'Помимо собственной работы над UX/UI, выполнял задачи по визуальному руководству: проводил ревью макетов, давал комментарии и следил за единым дизайн-направлением. Это помогало связывать работу нескольких дизайнеров в цельное решение.'
      ]),
      chapter('Результат','2-е место среди корпоративных сайтов.',[
        'Подготовили дизайн всего сайта под обе аудитории: выразительную главную и функциональные внутренние страницы. Проект занял 2-е место в категории «Корпоративные сайты» Рейтинга Рунета.',
        'После завершения проекта клиент рекомендовал команду и привёл новых заказчиков. Для меня результатом стали не только готовый сайт и награда, но и доверие, которое продолжилось за пределами проекта.'
      ],[
        {index:3,caption:{ru:'Программа лояльности — отдельный сценарий для гостей сети.',en:'The loyalty programme supports a distinct guest journey.'}},
        {index:4,caption:{ru:'Карта кофеен помогает перейти от знакомства с брендом к выбору точки.',en:'The coffee shop map connects brand discovery with choosing a location.'}}
      ])
    ]
  });
  Object.assign(stories.en,{
    intro:'A corporate website for a national coffee chain: bringing guest journeys and the franchise offer together after a mid-project change in direction.',
    role:'UX/UI and design coordination',
    chapters:[
      chapter('Challenge and constraints','Rebuild the direction after homepage approval.',[
        'One Price Coffee is a national coffee chain and a major franchise. This was one of the most challenging projects in my practice: after the homepage was approved, we had to rethink both the design direction and the working process.',
        'The initial brief focused on B2C. We developed a concept for coffee shop guests, with expressive product imagery and animation. The homepage established the visual language for the whole website. Once it had been approved, shareholder feedback revealed another priority: the site also needed to serve prospective franchise partners.',
        'The scope shifted from B2C to B2C + B2B. We needed to retain the brand’s appeal while making the franchise offer more functional and useful for decision-making. Reworking the homepage disrupted the original schedule, so the remaining design had to move forward at an accelerated pace.'
      ],[{index:0}]),
      chapter('Design solution','Two audiences. One visual direction.',[
        'I completely reworked the homepage around the revised brief. The site brought together two journeys: discovering the coffee and the chain as a guest, and exploring the franchise as a prospective partner. Once the new homepage was approved, we moved on to the remaining pages.',
        'The homepage retained a vivid, appetising product presentation. The other pages took a more functional approach. In the final layouts, the franchise section explains the network’s offer, while the menu, loyalty programme and coffee shop map support guests’ needs.'
      ],[{index:1,caption:{ru:'B2B: предложение франшизы и факты о сети.',en:'B2B: the franchise offer and network facts.'}},{index:2,caption:{ru:'B2C: продуктовая подача меню для гостей кофеен.',en:'B2C: a product-led menu presentation for guests.'}}]),
      chapter('Process and my role','20+ pages. Several designers. One coherent website.',[
        'The corporate website included more than 20 pages. Freelance designers joined the project to support delivery under tight deadlines. I divided pages between them and myself, organising parallel work across the site.',
        'Alongside my own UX/UI work, I took on visual direction responsibilities: reviewing layouts, providing feedback and maintaining a shared design direction. This helped bring several designers’ work together into a coherent solution.'
      ]),
      chapter('Outcome','Second place for corporate websites.',[
        'We completed the website design for both audiences: an expressive homepage and functional internal pages. The project received second place in the Corporate Websites category of the Runet Rating.',
        'After completion, the client recommended the team and brought in new customers. For me, the outcome went beyond the website and its award: it established trust that continued beyond the project.'
      ],[{index:3,caption:{ru:'Программа лояльности — отдельный сценарий для гостей сети.',en:'The loyalty programme supports a distinct guest journey.'}},{index:4,caption:{ru:'Карта кофеен помогает перейти от знакомства с брендом к выбору точки.',en:'The coffee shop map connects brand discovery with choosing a location.'}}])
    ]
  });
  const kids=window.portfolioCaseStories['kids-pizza-academy'];
  const visual=(index,ru,en)=>({index,caption:{ru,en}});
  Object.assign(kids.ru,{
    intro:'Сайт детской кулинарной академии Dodo Pizza: от эксперимента в ОАЭ до запуска в Москве и Санкт-Петербурге.',
    role:'UX/UI дизайн',
    chapters:[
      chapter('Задача','Проверить новую идею Dodo Pizza.',[
        'Kids Pizza Academy — один из пяти проектов, которые я сделал для Dodo Pizza. В этот раз команда решила попробовать новое направление: кулинарные мастер-классы для детей. Первоначально проект запускали в ОАЭ — в Дубае и Абу-Даби.',
        'Сайт должен был передать настроение будущего занятия и объяснить предложение родителям: как проходят мастер-классы, какие есть тематические мероприятия, как отпраздновать день рождения и подарить участие ребёнку.',
        'Нужна была игровая, иллюстративная подача с анимацией — вместе с понятными сценариями записи, оплаты и покупки подарочных карт.'
      ],[{index:0}]),
      chapter('Визуальное решение и сотрудничество','Детская интонация. Совместная работа.',[
        'Я работал над UX/UI сайта, объединяя игровой характер и функциональные сценарии. Иллюстрации готовила команда Dodo. Клиент тесно участвовал в работе: визуальные материалы и интерфейс развивались в постоянном взаимодействии.',
        'Персонажи, фотографии и мягкие цветные поверхности помогли создать дружелюбную среду. Общую стилистику продолжили на всех страницах — от знакомства с программами до оформления заказа и сообщений об успешном действии или ошибке.'
      ],[visual(1,'Тематические программы: иллюстрации команды Dodo в интерфейсе академии.','Themed programmes: Dodo’s illustrations within the academy interface.')]),
      chapter('Запись на мероприятие','От выбора занятия до подтверждения.',[
        'Спроектировал сценарий бронирования: выбор мероприятия, подробная страница, запись и оплата. Детальный экран должен был помочь родителю разобраться в занятии и перейти к бронированию.',
        'Отдельно подготовили состояния успеха и ошибки. Они сохраняли общую стилистику, чтобы оформление и завершение записи ощущались продолжением сайта, а не отдельным техническим процессом.'
      ],[
        visual(2,'Выбор программы, даты и времени мастер-класса.','Choosing a programme, date and time.'),
        visual(3,'Подробности занятия и переход к бронированию.','Class details and the path to booking.'),
        visual(5,'Подтверждение записи продолжает игровую интонацию сайта.','Booking confirmation carries the site’s playful tone through to completion.')
      ]),
      chapter('Подарочные карты','Подарок, который интересно собрать.',[
        'Одним из самых интересных сценариев стал кастомайзер подарочных карт. За отправную точку взяли механику подарочных карт «Золотого яблока» и адаптировали её к мягкой, детской стилистике Kids Pizza Academy.',
        'Хотелось сделать создание подарка самостоятельной приятной частью опыта. Игровая подача продолжалась и в оформлении: данные получателя, время отправки и итог заказа собрали в последовательный сценарий.'
      ],[visual(4,'Оформление подарочной карты: данные получателя, время отправки и итог заказа.','Gift card checkout: recipient details, delivery time and order summary.')]),
      chapter('Результат','Из ОАЭ — в Россию.',[
        'После запуска в Дубае и Абу-Даби команда проверила модель детских мастер-классов и перенесла проект на русскоязычную версию. Затем Kids Pizza Academy запустили в Москве и Санкт-Петербурге.',
        'Для меня этот проект — пример сотрудничества, в котором клиент становится активным участником создания продукта. Dodo возвращается с новыми задачами: у нас уже пять совместных проектов. Это доверие и продолжение работы — важная часть результата.'
      ])
    ]
  });
  Object.assign(kids.en,{
    intro:'A kids culinary academy website for Dodo Pizza: from an experiment in the UAE to launches in Moscow and Saint Petersburg.',
    role:'UX/UI design',
    chapters:[
      chapter('Challenge','Test a new idea for Dodo Pizza.',[
        'Kids Pizza Academy is one of five projects I have completed for Dodo Pizza. The team wanted to explore a new direction: cooking masterclasses for children. The project initially launched in the UAE, in Dubai and Abu Dhabi.',
        'The website needed to convey the atmosphere of a class while explaining the offer to parents: how masterclasses work, themed events, birthday celebrations and gifting a place to a child.',
        'The goal was a playful, illustrated presentation with animation, alongside clear journeys for booking, payment and gift card purchases.'
      ],[{index:0}]),
      chapter('Visual direction and collaboration','A playful tone. A shared creative process.',[
        'I worked on the website’s UX/UI, connecting its playful character with functional journeys. Dodo’s team created the illustrations. The client was closely involved, with visual assets and interface design developing through ongoing collaboration.',
        'Characters, photography and soft colour surfaces created a welcoming environment. The shared visual language continued across every page, from programme discovery to checkout, success states and error messages.'
      ],[visual(1,'Тематические программы: иллюстрации команды Dodo в интерфейсе академии.','Themed programmes: Dodo’s illustrations within the academy interface.')]),
      chapter('Class booking','From choosing a class to confirmation.',[
        'I designed the booking journey: choosing an event, viewing its details, booking and payment. The detail page needed to help parents understand the class and move on to booking.',
        'We also designed success and error states. They retained the shared visual language so that checkout and confirmation felt like a continuation of the website rather than a separate technical process.'
      ],[
        visual(2,'Выбор программы, даты и времени мастер-класса.','Choosing a programme, date and time.'),
        visual(3,'Подробности занятия и переход к бронированию.','Class details and the path to booking.'),
        visual(5,'Подтверждение записи продолжает игровую интонацию сайта.','Booking confirmation carries the site’s playful tone through to completion.')
      ]),
      chapter('Gift cards','A gift that is fun to put together.',[
        'The gift card customiser became one of the most interesting journeys. We used Golden Apple’s gift card mechanics as a starting point and adapted the approach to Kids Pizza Academy’s soft, child-friendly visual language.',
        'Creating a gift was intended to be an enjoyable experience in its own right. The playful presentation continued into checkout, with recipient details, delivery time and the order summary organised into a sequential journey.'
      ],[visual(4,'Оформление подарочной карты: данные получателя, время отправки и итог заказа.','Gift card checkout: recipient details, delivery time and order summary.')]),
      chapter('Outcome','From the UAE to Russia.',[
        'Following launches in Dubai and Abu Dhabi, the team tested the kids masterclass model and adapted the project into Russian. Kids Pizza Academy subsequently launched in Moscow and Saint Petersburg.',
        'For me, this project demonstrates a collaboration in which the client actively helps shape the product. Dodo continues to return with new challenges: we have now completed five projects together. That trust and continuing relationship are an important part of the outcome.'
      ])
    ]
  });
  const gdg=window.portfolioCaseStories['global-digital'];
  Object.assign(gdg.ru,{
    intro:'Главная страница и внутренняя платформа сервиса майнинга биткоина: 20+ страниц, аналитика, две темы и три формата устройств.',
    role:'UX/UI и дизайн-система',
    chapters:[
      chapter('Задача и масштаб','Сложная платформа. Понятный рабочий интерфейс.',[
        'Global Digital Group — сервис майнинга биткоина. На нашей стороне были главная страница, личный кабинет и вся внутренняя платформа: дашборд, воркеры, блоки, начисления и выплаты. Объём проекта — более 20 страниц.',
        'Нужно было объединить большой набор функций, графиков и числовых показателей. Дополнительную сложность создавали вложенные разделы: интерфейс должен был оставаться понятным при переходе от общего обзора к деталям.'
      ],[{index:0}]),
      chapter('Интерфейс','От обзора показателей — к конкретному действию.',[
        'В дашборде собрали ключевые значения и крупные графики. Важно было дать пользователю общий обзор, сохранив возможность перейти к подробностям и отдельным операциям.',
        'Для начислений и выплат использовали табличное представление. Работа с воркерами получила собственные сценарии и формы. Общие принципы навигации, подачи данных и действий связывали эти разделы в одну рабочую среду.'
      ],[
        visual(1,'Начисления и выплаты: табличная структура для финансовых данных.','Accruals and payouts: a table-based structure for financial data.'),
        visual(2,'Добавление воркера: отдельная форма для конкретного действия.','Adding a worker: a dedicated form for a specific action.')
      ]),
      chapter('Дизайн-система','Две темы на одной системе токенов.',[
        'Все экраны подготовили в светлой и тёмной темах. Это было требованием клиента: часть аудитории работает с сервисом ночью, поэтому нужна была полноценная тёмная версия интерфейса.',
        'Цветовые стили выстроили на токенах. Переключение набора токенов меняло палитру макетов без ручного перекрашивания каждого экрана. Для проекта такого объёма это стало одной из самых сложных и важных частей работы над дизайн-системой.'
      ]),
      chapter('Адаптация и результат','20+ страниц для трёх форматов устройств.',[
        'Подготовили версии для компьютеров, планшетов и телефонов. Аналитический интерфейс нужно было продумать для разных размеров экрана, сохранив доступ к данным и основным рабочим сценариям.',
        'В результате собрали дизайн главной страницы и внутренней платформы в двух темах и нескольких разрешениях. Для меня это был ценный опыт работы со сложным техническим продуктом, насыщенной аналитикой и масштабной дизайн-системой.'
      ])
    ]
  });
  Object.assign(gdg.en,{
    intro:'A homepage and internal platform for a Bitcoin mining service: 20+ pages, analytics, two themes and three device formats.',
    role:'UX/UI and design system',
    chapters:[
      chapter('Challenge and scope','A complex platform. A clear working interface.',[
        'Global Digital Group is a Bitcoin mining service. Our scope included the homepage, personal account and the entire internal platform: dashboard, workers, blocks, accruals and payouts. The project covered more than 20 pages.',
        'We needed to bring together extensive functionality, charts and numerical indicators. Nested sections added complexity: the interface had to remain understandable as users moved from an overview into the details.'
      ],[{index:0}]),
      chapter('Interface','From an overview to a specific action.',[
        'The dashboard brought together key indicators and large charts. It needed to provide an overview while retaining access to detailed information and individual operations.',
        'Accruals and payouts used a table-based presentation. Worker management had its own journeys and forms. Shared principles for navigation, data presentation and actions connected these sections into one working environment.'
      ],[
        visual(1,'Начисления и выплаты: табличная структура для финансовых данных.','Accruals and payouts: a table-based structure for financial data.'),
        visual(2,'Добавление воркера: отдельная форма для конкретного действия.','Adding a worker: a dedicated form for a specific action.')
      ]),
      chapter('Design system','Two themes. One token system.',[
        'Every screen was designed in both light and dark themes. This was a client requirement: part of the audience works with the service at night, so a complete dark version of the interface was needed.',
        'Colour styles were built around tokens. Switching the token set changed the layouts’ palette without manually recolouring every screen. At this scale, theme support became one of the most demanding and important parts of the design system work.'
      ]),
      chapter('Responsive design and outcome','20+ pages across three device formats.',[
        'We prepared desktop, tablet and mobile versions. The analytics interface needed to work across screen sizes while retaining access to data and core workflows.',
        'The result was a homepage and internal platform design in two themes and multiple resolutions. For me, it was valuable experience with a complex technical product, extensive analytics and a large-scale design system.'
      ])
    ]
  });
  const credo=window.portfolioCaseStories.credo;
  Object.assign(credo.ru,{
    intro:'Промо-платформа доступной линейки шин Ikon Tyres: Mobile First, три стихии и интерактивный рассказ о преимуществах продукта.',
    role:'UX/UI и digital-концепция',
    chapters:[
      chapter('Задача и позиционирование','Рабочая лошадка с выразительным характером.',[
        'Credo — подбренд Ikon Tyres в более доступном ценовом сегменте. Нужно было выстроить позиционирование практичного продукта и показать его с интересной стороны, не теряя ясности для покупателя.',
        'За разработкой шин стоят исследования и технические решения. На сайте их важно было перевести на простой язык: какие качества получает водитель, что изменилось в сцеплении и как устроены преимущества конкретной модели. Технические подробности должны были помогать выбору, а не усложнять его.'
      ],[{index:0}]),
      chapter('Визуальная концепция','Вода. Лёд. Снег.',[
        'Для трёх моделей придумали разные визуальные условия. Летнюю Credo Sunmode связали с водой и её отводом по ламелям, Icemode — со льдом, Snowmode — со снегом. Эти стихии стали основой характеров моделей.',
        'Вокруг шин разместили капли воды, кубики льда и снежки, реагирующие на взаимодействие через параллакс. Так назначение моделей можно было считывать через окружение, а не только через техническое описание.',
        'Проект делали совместно с отделом продакшна: команда готовила 3D шин, протекторов, канавок и другие визуальные материалы. Представление визуалов прошло несколько итераций с учётом требований клиента. Я работал над digital-концепцией и UX/UI, встраивая эти материалы в сценарии сайта.'
      ],[
        visual(1,'Sunmode: вода как визуальный образ летней модели и её свойств.','Sunmode: water expresses the summer model and its properties.'),
        visual(2,'Icemode: ледяная среда задаёт характер модели.','Icemode: an icy environment establishes the model’s character.'),
        visual(3,'Snowmode: снежная среда продолжает идею трёх стихий.','Snowmode: a snowy environment completes the three-element concept.')
      ]),
      chapter('UX и путь к покупке','От преимуществ — к своей шине.',[
        'Проектирование начали с Mobile First: мобильное разрешение было главным ориентиром исходя из целевой аудитории. В каталоге нужно было разместить в одной карточке много преимуществ и сохранить заметное действие «Купить», ведущее к дистрибьютору.',
        'Самая сложная часть находилась внутри модели. Для каждой шины задумали 3D flow в полноэкранном модальном окне: последовательное знакомство с преимуществами, затем доступные типоразмеры и отзывы — короткие видео и текст.',
        'Сценарий выстраивали так, чтобы человек сначала понял свойства модели, проверил наличие нужного размера, изучил отзывы и затем мог перейти к покупке у дистрибьютора.'
      ]),
      chapter('Ограничения и MVP','Сохранить идею. Упростить реализацию.',[
        'Изначально 3D-визуалы планировали как многоступенчатую секвенцию. Её реализация оказалась сложной в рамках согласованных сроков, поэтому для MVP решили сократить анимационную часть.',
        'На первом этапе выбрали короткие видео с минимальной анимацией. Полноценную секвенцию оставили для дальнейшего развития проекта. Это позволило сохранить визуальную идею и рассказ о моделях в более простом формате реализации.'
      ]),
      chapter('Адаптация и композиция','Три разрешения. Разные принципы подачи.',[
        'Для компьютеров, планшетов и телефонов подготовили индивидуальные версии. Mobile First задавал основу сценария, а остальные разрешения раскрывали возможности своего формата.',
        'Для десктопа разработали несколько композиционных шаблонов: текстовые блоки меняли положение относительно 3D-визуала. Продакшн мог подстраивать материалы под конкретный шаблон, сохраняя читаемость и разнообразие сцен.',
        'В итоге объединили практичное позиционирование Credo, понятное объяснение свойств и выразительную идею трёх стихий. Сайт знакомит с продуктом через визуальный опыт и продолжает это знакомство конкретными шагами выбора.'
      ])
    ]
  });
  Object.assign(credo.en,{
    intro:'A promotional platform for Ikon Tyres’ affordable tyre range: Mobile First, three elements and an interactive explanation of product benefits.',
    role:'UX/UI and digital concept',
    chapters:[
      chapter('Challenge and positioning','A practical workhorse with a distinctive character.',[
        'Credo is an Ikon Tyres sub-brand in a more affordable price segment. The task was to position a practical product and present it in an engaging way while keeping the buying experience clear.',
        'Tyre development involves research and technical decisions. The website needed to translate them into accessible explanations: what drivers gain, what has changed in grip and how each model’s benefits work. Technical details needed to support the choice rather than complicate it.'
      ],[{index:0}]),
      chapter('Visual concept','Water. Ice. Snow.',[
        'We developed different visual conditions for the three models. The summer Credo Sunmode was linked to water and drainage through the sipes; Icemode to ice; and Snowmode to snow. These elements established each model’s character.',
        'Water drops, ice cubes and snowballs surrounded the tyres, responding to interaction through parallax. The environment helped communicate the intended use alongside the technical explanation.',
        'We collaborated with the production department, which prepared the 3D tyres, tread patterns, grooves and other visual assets. The visual treatment went through several iterations to meet client requirements. I worked on the digital concept and UX/UI, incorporating those assets into the website journeys.'
      ],[
        visual(1,'Sunmode: вода как визуальный образ летней модели и её свойств.','Sunmode: water expresses the summer model and its properties.'),
        visual(2,'Icemode: ледяная среда задаёт характер модели.','Icemode: an icy environment establishes the model’s character.'),
        visual(3,'Snowmode: снежная среда продолжает идею трёх стихий.','Snowmode: a snowy environment completes the three-element concept.')
      ]),
      chapter('UX and purchase journey','From benefits to the right tyre.',[
        'We started with Mobile First, using the mobile format as the main reference for the target audience. Catalogue cards needed to accommodate many benefits while retaining a prominent Buy action leading to a distributor.',
        'The most demanding work was inside each model. We planned a 3D flow in a full-screen modal: a sequential introduction to the benefits, followed by available sizes and reviews in both short-video and text formats.',
        'The journey was designed to help people understand a model’s properties, check their tyre size, read reviews and then proceed to purchase through a distributor.'
      ]),
      chapter('Constraints and MVP','Keep the concept. Simplify the implementation.',[
        'The 3D visuals were initially planned as a multi-stage sequence. Implementation proved demanding within the agreed schedule, so we decided to reduce the animation scope for the MVP.',
        'For the first stage, we chose short videos with minimal animation. A full sequence remained a future development plan. This preserved the visual concept and model storytelling in a simpler implementation format.'
      ]),
      chapter('Responsive design and composition','Three resolutions. Different presentation approaches.',[
        'We prepared individual desktop, tablet and mobile versions. Mobile First established the journey, while the other resolutions used the opportunities of their respective formats.',
        'For desktop, we developed several composition templates with text in different positions relative to the 3D visual. Production could adapt assets to a particular template while retaining readability and variety between scenes.',
        'The result connected Credo’s practical positioning, clear explanations of product properties and the expressive three-element concept. Visual discovery leads into concrete steps for choosing a tyre.'
      ])
    ]
  });
  const studio=window.portfolioCaseStories['dl-studio'];
  Object.assign(studio.ru,{
    intro:'Сайт нашей собственной студии dl.studio: выразительная визуальная подача, интерактивные сценарии и сложная структура услуг.',
    role:'UX/UI дизайн',
    chapters:[
      chapter('Задача и согласование','Показать характер собственной студии.',[
        'Сайт dl.studio делали для нашей собственной студии. Хотелось создать проект фестивального характера: с насыщенными визуалами, видео, выразительной подачей кейсов и большим количеством анимации.',
        'Одна из сложностей — найти общее визуальное направление для людей с разными взглядами и высокой насмотренностью. Нужно было согласовать решение, которое представляло бы студию и устраивало всех участников принятия решений.'
      ],[{index:0}]),
      chapter('Визуальный язык и движение','Студия, которую можно почувствовать.',[
        'Визуальную подачу выстроили вокруг работ студии. Крупные образы, видео и разнообразные анимации помогали передавать характер проектов и самой команды.',
        'Продумали реакции на курсор и скролл, чтобы взаимодействие поддерживало впечатление от сайта. При этом выразительность не должна была вытеснять функциональность: посетителю по-прежнему нужно было находить проекты, услуги и информацию о студии.'
      ],[visual(1,'Сетка кейсов на главной: разные проекты в общем визуальном языке студии.','Homepage project grid: varied work within the studio’s shared visual language.')]),
      chapter('Структура услуг','Четыре уровня вложенности на одной странице.',[
        'Страница услуг стала одной из самых сложных частей проекта. На одной странице нужно было организовать четыре уровня вложенности и дать доступ к направлениям и технологиям, с которыми работает студия.',
        'Для этого придумали нижнее меню. Выбранное положение меняло содержимое и показывало соответствующий стек: сайты, приложения, enterprise-дизайн. Так сложная структура раскрывалась через переключение внутри страницы.'
      ],[visual(3,'Обзор направлений работы студии на главной странице.','An overview of studio services on the homepage.')]),
      chapter('Журнал, клиенты и результат','Не только проекты. Люди и опыт студии.',[
        'Разработали журнал для статей студии. Он продолжал общий характер сайта: визуальная подача и интерактивность оставались частью знакомства с материалами.',
        'На странице клиентов и отзывов хотелось показать не только масштаб сотрудничества с крупными компаниями, но и людей за ним. Разместили happy selfie и комментарии клиентов, добавив к перечню брендов личный опыт совместной работы.',
        'В результате получили визуально выразительный, интерактивный сайт, который согласовали внутри команды. Работы, услуги, статьи и отзывы сохранили свои задачи и стали частями одного образа студии.'
      ],[visual(2,'Факты и партнёры на главной странице поддерживают рассказ о масштабе студии.','Homepage facts and partners support the account of the studio’s scope.')])
    ]
  });
  Object.assign(studio.en,{
    intro:'A website for our own studio, dl.studio: expressive visuals, interactive journeys and a complex services structure.',
    role:'UX/UI design',
    chapters:[
      chapter('Challenge and alignment','Express the character of our own studio.',[
        'We built the dl.studio website for our own studio. The ambition was a festival-oriented project with rich visuals, video, expressive case presentations and extensive animation.',
        'One challenge was finding a shared visual direction among people with different perspectives and a highly developed visual sensibility. The solution needed to represent the studio and gain agreement from everyone involved in the decision.'
      ],[{index:0}]),
      chapter('Visual language and motion','A studio you can experience.',[
        'The visual presentation centred on the studio’s work. Large imagery, video and varied animations helped express the character of the projects and the team.',
        'Cursor and scroll responses supported the experience of the site. At the same time, visual expression needed to retain functionality: visitors still had to find projects, services and information about the studio.'
      ],[visual(1,'Сетка кейсов на главной: разные проекты в общем визуальном языке студии.','Homepage project grid: varied work within the studio’s shared visual language.')]),
      chapter('Services structure','Four levels of nesting within one page.',[
        'The services page became one of the most demanding parts of the project. We needed to organise four levels of nesting on a single page and provide access to the studio’s disciplines and technology stacks.',
        'We developed a bottom menu whose selected position changed the content and revealed the relevant stack: websites, applications and enterprise design. The complex structure unfolded through switching within the page.'
      ],[visual(3,'Обзор направлений работы студии на главной странице.','An overview of studio services on the homepage.')]),
      chapter('Journal, clients and outcome','Beyond projects. People and studio experience.',[
        'We developed a journal for the studio’s articles. Its visual presentation and interactivity continued the character of the website as visitors explored the content.',
        'The clients and reviews page needed to show both the scale of work with major companies and the people behind those relationships. Happy selfies and client comments added a personal account of collaboration to the list of brands.',
        'The result was a visually expressive, interactive website agreed upon within the team. Projects, services, articles and reviews retained their purposes while contributing to one coherent studio identity.'
      ],[visual(2,'Факты и партнёры на главной странице поддерживают рассказ о масштабе студии.','Homepage facts and partners support the account of the studio’s scope.')])
    ]
  });
  const games=window.portfolioCaseStories['dl-games'];
  Object.assign(games.ru,{
    intro:'Сайт компании по разработке мобильных игр в составе Digital Lab: переплетающиеся игровые вселенные, чистая подача и интерактивные механики.',
    role:'UX/UI дизайн',
    chapters:[
      chapter('Задача','Показать компанию, которая создаёт игровые миры.',[
        'dl.games — компания по разработке мобильных игр в составе Digital Lab. Я работал над её сайтом: нужно было представить проекты и компанию через интересный визуальный опыт, сохранив понятную структуру.',
        'Подготовили страницы кейсов, статей и контактов, а также разделы о геймификации и самой компании. Хотелось, чтобы сайт передавал игровой характер команды и располагал к знакомству с её работой.'
      ],[{index:0}]),
      chapter('Визуальная идея','Каждая линия — отдельная вселенная.',[
        'В основу стилистики положили линии как визуальный якорь. Каждая из них обозначает одну из вселенных, которые создаёт dl.games. Линии проходят рядом и переплетаются, складываясь в общий воображаемый мир.',
        'Этот приём связывал разные части сайта, оставляя саму подачу чистой. Проекты сохраняли собственный характер, а повторяющийся образ линий объединял их в историю компании.'
      ],[visual(1,'Проекты и цветные линии в общей композиции сайта.','Projects and coloured lines within the site’s shared composition.')]),
      chapter('Интерактивные механики','Игровой характер через взаимодействие.',[
        'На странице геймификации объясняли, зачем она нужна. Интерактивность помогала продолжить этот рассказ: среди механик были пролетающие карточки.',
        'Для страницы About Us продумали сцену с шариками в 3D- и 2D-пространстве. Они падали, и пользователь мог взаимодействовать с ними. Знакомство с компанией получало игровую составляющую.'
      ]),
      chapter('Подача и результат','Выразительный сайт с понятной структурой.',[
        'Визуальную часть выстроили так, чтобы движения и игровые приёмы не перегружали знакомство с компанией. Кейсы, статьи, контакты и информация о команде сохраняли свои роли внутри сайта.',
        'В итоге получили чистую, дружелюбную подачу с выразительной идеей переплетающихся вселенных. Для меня это был проект, в котором интерактивные механики стали частью характера бренда.'
      ],[
        visual(2,'Клиенты и хайлайты на главной странице: знакомство с работой компании.','Clients and highlights on the homepage introduce the company’s work.'),
        visual(3,'Цветные линии обрамляют финальное действие на главной странице.','Coloured lines frame the homepage’s final action.')
      ])
    ]
  });
  Object.assign(games.en,{
    intro:'A website for a mobile game development company within Digital Lab: interwoven game universes, a clean presentation and interactive mechanics.',
    role:'UX/UI design',
    chapters:[
      chapter('Challenge','Introduce a company that creates game worlds.',[
        'dl.games is a mobile game development company within Digital Lab. I worked on its website, presenting the projects and company through an engaging visual experience while retaining a clear structure.',
        'We prepared case study, article and contact pages, alongside sections about gamification and the company itself. The website needed to convey the team’s playful character and encourage visitors to explore its work.'
      ],[{index:0}]),
      chapter('Visual concept','Every line is a separate universe.',[
        'Lines became the visual anchor. Each represents one of the universes created by dl.games. They run alongside one another and intertwine, forming a shared imaginary world.',
        'This device connected different parts of the website while keeping the presentation clean. Projects retained their own character, and the recurring lines brought them together into the company’s story.'
      ],[visual(1,'Проекты и цветные линии в общей композиции сайта.','Projects and coloured lines within the site’s shared composition.')]),
      chapter('Interactive mechanics','Express a playful character through interaction.',[
        'The gamification page explained why gamification is useful. Interactivity extended that narrative, including flying cards as one of the mechanics.',
        'For the About Us page, we developed the idea of a scene with balls in 3D and 2D space. They fell, and visitors could interact with them, adding a playful dimension to discovering the company.'
      ]),
      chapter('Presentation and outcome','An expressive site with a clear structure.',[
        'The visual approach aimed to keep motion and playful devices from overwhelming the introduction to the company. Case studies, articles, contacts and team information retained their roles within the website.',
        'The result was a clean, welcoming presentation with a distinctive concept of interwoven universes. For me, it was a project in which interactive mechanics became part of the brand’s character.'
      ],[
        visual(2,'Клиенты и хайлайты на главной странице: знакомство с работой компании.','Clients and highlights on the homepage introduce the company’s work.'),
        visual(3,'Цветные линии обрамляют финальное действие на главной странице.','Coloured lines frame the homepage’s final action.')
      ])
    ]
  });
  const amtek=window.portfolioCaseStories.amtek;
  Object.assign(amtek.ru,{
    intro:'Сайт международной логистической компании: выразительный образ бренда и подбор маршрутов перевозки в проекте на 30 страниц.',
    role:'UX/UI дизайн',
    chapters:[
      chapter('Задача','Представить компанию. Помочь выбрать перевозку.',[
        'Амтэк перевозит грузы по всему миру, с основным фокусом на направлениях между Китаем и Россией. Клиент дал команде большую свободу в работе над сайтом.',
        'Нужно было совместить имиджевую подачу с конкретным предложением услуг: показать компанию, объяснить направления перевозок и помочь посетителю перейти к обращению. Визуальная чистота должна была сохраниться при большом объёме информации.'
      ],[{index:0}]),
      chapter('Услуги и структура','Много направлений. Понятный выбор.',[
        'Разные направления услуг нужно было представить в общей структуре. На сайте собрали страницы услуг, новостной раздел и информацию о компании — всего около 30 страниц.',
        'Обзор перевозок помогал перейти от общего знакомства к конкретной задаче. Карточки направлений объединяли название, транспорт и условия, сохраняя единый порядок подачи.'
      ],[visual(1,'Обзор направлений перевозок в единой сетке.','Transportation services presented in a shared grid.')]),
      chapter('Ключевой сценарий','Показать не только услугу, но и маршрут.',[
        'Главной функциональной идеей стал подбор маршрута прямо на сайте. Пользователь задаёт город отправления и город назначения, после чего получает несколько вариантов перевозки.',
        'Варианты раскрывали, каким транспортом и через какие участки проходит груз. Маршрут показывали на карте, чтобы путь можно было не только прочитать, но и увидеть.',
        'Для сценария использовалась большая база направлений. Работа над интерфейсом связывала ввод исходных данных, сравнение вариантов и визуальное представление пути в один процесс выбора.'
      ]),
      chapter('Визуальное решение','Чистая геометрия. Фирменные градиенты.',[
        'В основу сайта лёг брендинг, подготовленный незадолго до начала проекта. Использовали бело-чёрно-синюю палитру, работали с паттернами и специально подготовили фирменные градиенты.',
        'Градиенты стали одним из узнаваемых приёмов сайта. Они добавляли выразительности, а сдержанная композиция помогала удерживать внимание на содержании и услугах.'
      ],[visual(2,'Фирменный градиент и факты о компании в общей визуальной системе.','A signature gradient and company facts within the shared visual system.')]),
      chapter('Результат','От имиджевого сайта — к инструменту выбора.',[
        'Подготовили сайт примерно на 30 страниц, объединив услуги, информацию о компании, новости и сценарий подбора маршрута. Задача привлечения новых обращений получила функциональную опору: посетитель мог изучить варианты перевозки до контакта с компанией.',
        'Проект получил положительную реакцию клиента. Для меня его ценность — в сочетании визуально чистой подачи и содержательного инструмента, который помогает разобраться в сложной логистической задаче.'
      ],[visual(3,'Заявка на расчёт — переход от изучения услуг к обращению.','A quote request connects service discovery with contacting the company.')])
    ]
  });
  Object.assign(amtek.en,{
    intro:'A website for an international logistics company: a distinctive brand presentation and route selection across a 30-page project.',
    role:'UX/UI design',
    chapters:[
      chapter('Challenge','Introduce the company. Help choose a shipment.',[
        'Amtek transports cargo worldwide, with a primary focus on routes between China and Russia. The client gave the team considerable freedom in developing the website.',
        'The task combined brand presentation with a concrete service offer: introduce the company, explain transportation services and help visitors move towards an enquiry. The visual approach needed to remain clean despite the volume of information.'
      ],[{index:0}]),
      chapter('Services and structure','Many services. A clear choice.',[
        'Different service areas needed to work within one structure. The website brought together service pages, a news section and company information, covering around 30 pages in total.',
        'The transportation overview helped visitors move from an introduction to a specific need. Service cards combined the name, transport type and conditions in a consistent presentation.'
      ],[visual(1,'Обзор направлений перевозок в единой сетке.','Transportation services presented in a shared grid.')]),
      chapter('Core journey','Show the route, not just the service.',[
        'The central functional idea was route selection directly on the website. Users enter an origin city and destination city, then receive several transportation options.',
        'The options explained the transport modes and the segments through which the cargo would travel. A map made it possible to see the route as well as read about it.',
        'The journey used a large database of routes. The interface connected entering the initial details, comparing options and visualising the journey into one selection process.'
      ]),
      chapter('Visual solution','Clean geometry. Signature gradients.',[
        'The website built on branding prepared shortly before the project began. We used a white, black and blue palette, explored patterns and created signature gradients specifically for the website.',
        'Gradients became a recognisable visual device. They added expression, while restrained compositions kept attention on the content and services.'
      ],[visual(2,'Фирменный градиент и факты о компании в общей визуальной системе.','A signature gradient and company facts within the shared visual system.')]),
      chapter('Outcome','From a brand website to a selection tool.',[
        'We prepared a website of around 30 pages, combining services, company information, news and the route-selection journey. The goal of attracting enquiries gained a functional foundation: visitors could explore transportation options before contacting the company.',
        'The project received a positive client response. For me, its value lies in combining a clean visual presentation with a useful tool for understanding a complex logistics task.'
      ],[visual(3,'Заявка на расчёт — переход от изучения услуг к обращению.','A quote request connects service discovery with contacting the company.')])
    ]
  });
  const arsenic=window.portfolioCaseStories.myshyak;
  Object.assign(arsenic.ru,{
    intro:'Сайт производителя мышьяковой продукции: сделать технические материалы визуально выразительными и показать продукт на первом плане.',
    role:'UX/UI дизайн',
    chapters:[
      chapter('Задача','Увидеть выразительность в сложном продукте.',[
        'Мышьяковая кислота, кристаллический мышьяк и мышьяковистый ангидрид — продукты узкой специализации. Их внешний вид не даёт привычной для коммерческого сайта привлекательной картинки. Задача состояла в том, чтобы представить материалы содержательно и визуально интересно.',
        'Мы решили не прятать продукт за абстрактными образами. Напротив, сами материалы вывели на первый план: сайт должен был показывать, что компания производит и продаёт.'
      ],[{index:0,trimBottom:3595}]),
      chapter('Каталог и визуальная подача','Разные формы. В центре — материал.',[
        'В каталоге использовали разные формы для размещения визуалов. Этот приём разбавлял композицию и помогал сделать подачу разнообразной, сохраняя внимание на самих продуктах.',
        'Изображение материала, название и описание работали вместе. Каталог должен был знакомить с ассортиментом через предметную подачу, а не скрывать специфику продукции.'
      ],[visual(1,'Разные формы визуальных блоков делают каталог разнообразнее, сохраняя продукт в центре внимания.','Varied image-block shapes bring visual diversity to the catalogue while keeping the products central.')]),
      chapter('Структура сайта','От материала — к продукту и производству.',[
        'Разработали каталог и карточку товара. На сайте также рассказывали о производстве мышьяка, чтобы знакомство с продукцией дополнялось пониманием того, чем занимается компания.',
        'Предметная подача связывала эти части сайта: материал оставался основой рассказа, а информация раскрывала его в контексте продукции и производства.'
      ]),
      chapter('Результат','Узкая специализация. Выразительная подача.',[
        'Получился визуально интересный сайт для продукции, которую непросто представить привлекательной. Разнообразие форм и внимание к самим материалам позволили сохранить специфику отрасли и сделать её частью визуального характера проекта.'
      ])
    ]
  });
  Object.assign(arsenic.en,{
    intro:'A website for an arsenic product manufacturer: making technical materials visually expressive and placing the products at the forefront.',
    role:'UX/UI design',
    chapters:[
      chapter('Challenge','Find visual expression in a demanding product.',[
        'Arsenic acid, crystalline arsenic and arsenic trioxide are highly specialised products. Their appearance does not offer the familiar attractive imagery of a commercial website. The task was to present the materials in an informative and visually engaging way.',
        'We chose not to hide the products behind abstract imagery. Instead, the materials themselves took centre stage: the website needed to show what the company manufactures and sells.'
      ],[{index:0,trimBottom:3595}]),
      chapter('Catalogue and visual presentation','Different shapes. The material at the centre.',[
        'We used varied shapes for the catalogue visuals. This diversified the composition while retaining attention on the products themselves.',
        'The material image, name and description worked together. The catalogue introduced the range through a tangible product presentation rather than concealing its specialised nature.'
      ],[visual(1,'Разные формы визуальных блоков делают каталог разнообразнее, сохраняя продукт в центре внимания.','Varied image-block shapes bring visual diversity to the catalogue while keeping the products central.')]),
      chapter('Website structure','From material to product and production.',[
        'We developed the catalogue and product detail page. The website also explained arsenic production, connecting the introduction to the products with an understanding of the company’s work.',
        'A tangible presentation connected these parts of the website: the material remained central to the narrative, with information placing it in the context of products and production.'
      ]),
      chapter('Outcome','A specialised industry. An expressive presentation.',[
        'The result was a visually engaging website for products that are not easy to present attractively. Varied shapes and attention to the materials preserved the industry’s specialised nature and made it part of the project’s visual character.'
      ])
    ]
  });
  const redPath=window.portfolioCaseStories['red-path'];
  Object.assign(redPath.ru,{
    intro:'Коммуникация креативно-производственного кластера с нуля: интерактивный сайт, 3D-карта, брендбук и коммерческая презентация.',
    role:'UX/UI и визуальное направление',
    chapters:[
      chapter('Контекст и задача','Новое пространство. Новая коммуникация.',[
        '«Красный путь» — креативно-производственный кластер на территории бывших заводов и цехов. Пространства переосмыслили для современных бизнесов: мастерских, гончарных и небольших производств.',
        'Нужно было с нуля выстроить коммуникацию кластера с будущими посетителями, резидентами и покупателями помещений. Современный характер пространства требовал соответствующего визуального языка. Для меня это стал один из самых сложных и интересных проектов в практике.'
      ],[{index:0}]),
      chapter('Процесс и ограничения','Связать сайт с развивающейся айдентикой.',[
        'Работу над брендингом и сайтом начали параллельно. После согласования концепции логотипа и айдентики продолжили развивать остальные материалы, но сайт какое-то время двигался обособленно от брендинга.',
        'Макеты сайта были готовы раньше окончательного согласования фирменного стиля. Следующим этапом стало его внедрение во весь сайт. Это заметно преобразило проект: айдентика стала основой не только оформления, но и интерактивных механик.'
      ]),
      chapter('Визуальный язык и взаимодействие','Фирменная звезда становится движением.',[
        'Сайт оформили с опорой на швейцарскую типографику: чёткую сетку и шрифтовую пару. Эта основа помогала организовать разные виды содержания — от знакомства с пространством до событий и коммерческой информации.',
        'Звезду из логотипа придумали преобразовывать в разные формы и использовать в интерактивных сценариях: наведении на фотографии, горизонтальных слайдерах и других взаимодействиях. На первых экранах появились механики с отслеживанием курсора.',
        'Разработали афишу мероприятий и другие блоки сайта в общем интерактивном характере. Фирменный стиль проявлялся через типографику, композицию и поведение элементов.'
      ],[visual(2,'Раздел об истории места: крупная типографика, сетка и работа с фотографиями.','The history section: large typography, a grid and photographic composition.')]),
      chapter('3D-карта и коммерческий сценарий','От знакомства с территорией — к помещению.',[
        'Для проекта разработали 3D-карту. Со своей стороны я задал её визуальную стилистику и принципы подачи. На карте показали номера корпусов; к каждому можно было приблизиться и изучить информацию.',
        'Этот сценарий раскрывал территорию через конкретные объекты. Для людей, заинтересованных в аренде или покупке, карта давала переход от общего впечатления к продуктовой информации о корпусах и помещениях.'
      ],[visual(1,'3D-карта с номерами корпусов — основа знакомства с отдельными объектами кластера.','The 3D map with building numbers introduces individual properties within the cluster.')]),
      chapter('Материалы для продаж и результат','Одна система для сайта, продаж и печати.',[
        'После согласования сайта собрали брендбук: оформили в систему решения, накопленные за время разработки и согласований.',
        'Также подготовили коммерческую презентацию как инструмент для команды продаж клиента. Первая часть вводила в контекст кластера и знакомила с пространством. Вторая раскрывала доступные лоты, характеристики и преимущества помещений.',
        'Ключевые носители фирменного стиля подготовили для печати: ручки, блокноты, стенды, наклейки на двери и плакаты. Проект связал сайт, карту, коммерческие материалы и физические носители в общую коммуникацию кластера.'
      ])
    ]
  });
  Object.assign(redPath.en,{
    intro:'Communication for a creative-production cluster, built from the ground up: an interactive website, 3D map, brand book and sales presentation.',
    role:'UX/UI and visual direction',
    chapters:[
      chapter('Context and challenge','A new place. A new communication system.',[
        'Red Path is a creative-production cluster on the site of former factories and workshops. The spaces were reimagined for contemporary businesses, including craft workshops, pottery studios and small-scale production.',
        'We needed to build communication with future visitors, tenants and property buyers from the ground up. The contemporary character of the place required a corresponding visual language. For me, this became one of the most challenging and interesting projects in my practice.'
      ],[{index:0}]),
      chapter('Process and constraints','Connect the website to an evolving identity.',[
        'Branding and website work began in parallel. After the logo and identity concept had been approved, the remaining materials continued to develop, but the website progressed somewhat independently of the branding.',
        'The website layouts were ready before final approval of the visual identity. We then integrated that identity throughout the site. This substantially transformed the project: the identity became a foundation for interactive mechanics as well as visual presentation.'
      ]),
      chapter('Visual language and interaction','The brand star becomes movement.',[
        'The website drew on Swiss typography, with a clear grid and a considered type pairing. This foundation organised varied content, from an introduction to the place to events and commercial information.',
        'We developed the idea of transforming the logo’s star into different shapes and using it within interactive journeys: photo hover effects, horizontal sliders and other interactions. The opening sections included cursor-tracking mechanics.',
        'The event programme and other sections continued this interactive character. The visual identity was expressed through typography, composition and element behaviour.'
      ],[visual(2,'Раздел об истории места: крупная типографика, сетка и работа с фотографиями.','The history section: large typography, a grid and photographic composition.')]),
      chapter('3D map and commercial journey','From discovering the site to exploring a property.',[
        'We developed a 3D map for the project. I established its visual direction and presentation principles. The map showed building numbers, with the ability to move closer to each building and explore its information.',
        'The journey introduced the territory through individual properties. For prospective tenants and buyers, it connected an overall impression with specific information about buildings and premises.'
      ],[visual(1,'3D-карта с номерами корпусов — основа знакомства с отдельными объектами кластера.','The 3D map with building numbers introduces individual properties within the cluster.')]),
      chapter('Sales materials and outcome','One system for the website, sales and print.',[
        'After the website was approved, we assembled a brand book, systematising the decisions developed during the design and approval process.',
        'We also prepared a commercial presentation as a tool for the client’s sales team. The first part introduced the cluster and its spaces. The second presented available properties, their specifications and advantages.',
        'Key brand applications were prepared for print: pens, notebooks, stands, door stickers and posters. The project connected the website, map, sales materials and physical applications into a shared communication system for the cluster.'
      ])
    ]
  });
  const club=window.portfolioCaseStories['mens-club'];
  Object.assign(club.ru,{
    intro:'Мобильное приложение премиального закрытого клуба: от входа по приглашению до выбора партнёров, мест и мероприятий.',
    role:'UX/UI мобильного приложения',
    chapters:[
      chapter('Контекст и задача','Клубные возможности в одном приложении.',[
        '«Мужской клуб» — закрытый премиальный клуб, в который вступают по приглашению. Участники платят взносы и получают доступ к специальным предложениям партнёров, которыми пользуются в повседневной жизни.',
        'Нужно было объединить информацию о партнёрах, местах и мероприятиях в мобильном приложении и проработать полный опыт участника — от первого знакомства до регулярного использования.'
      ],[{index:0}]),
      chapter('Первое знакомство','Войти в клуб. Освоить приложение.',[
        'Разработали онбординг и полный сценарий регистрации и авторизации. Первый этап знакомил с клубом и вёл к началу работы в приложении.',
        'После входа предусмотрели отдельный обучающий онбординг: он объяснял, как пользоваться приложением. Так знакомство с предложением клуба и инструкция по работе с интерфейсом решали разные задачи.'
      ],[visual(1,'Вводный онбординг знакомит с клубом перед началом работы.','The introductory onboarding presents the club before users get started.')]),
      chapter('Каталог, поиск и выбор','Найти место, событие или предложение.',[
        'Подготовили каталог мест и мероприятий, поиск, категории партнёров и детальную страницу места. Информация о предложениях должна была работать в одном сценарии выбора.',
        'Проработали фильтрацию и любимые категории. Они помогали организовать большой объём предложений с учётом интересов участника.'
      ]),
      chapter('Личный кабинет и состояния','Полноценный мобильный опыт.',[
        'Разработали личный кабинет, разделы событий и состояния интерфейса, включая скелетоны загрузки. Работа охватывала как основные экраны, так и промежуточные состояния использования приложения.',
        'В результате подготовили полноценный дизайн мобильного приложения для премиального клуба. Сегодня им пользуются предприниматели; проект связал доступ к клубным предложениям, выбор мест и мероприятий и личный опыт участника.'
      ],[visual(2,'Личный кабинет участника: персональная информация и разделы приложения.','The member account brings together personal information and app sections.')])
    ]
  });
  Object.assign(club.en,{
    intro:'A mobile app for a premium private club: from invitation-only access to discovering partners, venues and events.',
    role:'Mobile UX/UI design',
    chapters:[
      chapter('Context and challenge','Club benefits in one app.',[
        'Men’s Club is a premium private club with invitation-only membership. Members pay fees and gain access to special partner offers for everyday use.',
        'The task was to bring partner, venue and event information into a mobile app and design the complete member experience, from the first introduction to regular use.'
      ],[{index:0}]),
      chapter('First introduction','Join the club. Learn the app.',[
        'We designed onboarding and the complete registration and sign-in journey. The first stage introduced the club and led users into the app.',
        'After sign-in, a separate instructional onboarding explained how to use the app. The club introduction and interface guidance served distinct purposes.'
      ],[visual(1,'Вводный онбординг знакомит с клубом перед началом работы.','The introductory onboarding presents the club before users get started.')]),
      chapter('Catalogue, search and selection','Find a venue, event or offer.',[
        'We prepared a venue and event catalogue, search, partner categories and a venue detail page. Offer information needed to work within one selection journey.',
        'We also designed filtering and favourite categories to organise the extensive range of offers around members’ interests.'
      ]),
      chapter('Member account and interface states','A complete mobile experience.',[
        'We designed the member account, event sections and interface states, including loading skeletons. The work covered primary screens as well as intermediate states during app use.',
        'The result was a complete mobile app design for the premium club. Entrepreneurs use the app today; it connects access to club offers, venue and event discovery and the individual member experience.'
      ],[visual(2,'Личный кабинет участника: персональная информация и разделы приложения.','The member account brings together personal information and app sections.')])
    ]
  });
})();
