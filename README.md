# Александр Чеботарев — портфолио

Статический HTML/CSS/JS + локальные GSAP 3.13.0 и ScrollTrigger. Две страницы, RU/EN, вертикальная лента проектов без слайдера. Каждый кейс строится по главам: контекст рядом с первым визуалом, решение рядом со следующими, процесс со своей группой изображений. На телефоне главы складываются последовательно. Навигация — компактный выбор проекта. Настройка reduced motion отключает анимации. Шрифт Inter хранится локально; лицензии OFL находятся рядом с файлами. Нет внешних зависимостей во время просмотра.

## Запуск

В этой папке: `npm run dev`. Открыть http://127.0.0.1:4173. Установка npm-пакетов не нужна.

## Редактирование

Главная начинается с анимированной стопки пяти проектов. На десктопе ScrollTrigger фиксирует сцену и раскрывает карточки при вертикальной прокрутке; счётчик и выделение названия отражают текущую работу. На телефоне и при reduced-motion карточки идут последовательно. После галереи сразу следуют подробные кейсы с открытым процессом; дублирующей сетки нет. «Смотреть работы» ведёт к началу кейсов. В кейсах текст расположен в единой левой колонке, визуалы — справа на подложках с полями. На телефоне каждая глава начинается с текста, затем идёт визуал. Положение текста кейсов не анимируется.

- `content.js`: тексты интерфейса и пяти кейсов на обоих языках. Роли, задачи, решения и категории сейчас демонстрационные. Заменить проверенными данными перед публикацией.
- `app.js`: шаблоны карточек и кейсов, переключение языка, GSAP-анимации.
- `media.js`: отдельный массив визуалов для каждого проекта. Число записей не ограничено. Добавить изображения в `assets/projects/`, указать `src`, `alt`, при необходимости `caption`, `width` и `height`. Поле `stage` привязывает изображение к главе: `context`, `solution`, `process`. Без него первая запись относится к контексту, вторая к решению, остальные к процессу. Подписи и alt поддерживают RU/EN. Сохраняется исходное соотношение сторон. Пустой массив показывает демонстрационную обложку.
- `style.css`: визуальные настройки и адаптация; `about.css`: композиция страницы «Обо мне».
- `assets/`: предоставленные фотографии. Используются локальные копии, оригиналы сохранены.
- `index.html` и `about.html`: структура страниц и базовые метаданные.

Визуалы пяти проектов экспортированы из предоставленных Figma-файлов. Credo: welcome и 3D flow Sunmode, Icemode, Snowmode. GDG: экспорт содержимого без браузерного слоя. В `media.js` сохранены исходные `fileKey` и `nodeId`, RU/EN-подписи и привязка к главам. `presentation: 'mobile'` оформляет телефонные экраны, `dialog` — отдельную форму. `trimTop` скрывает верхнюю техническую рамку исходного изображения, сохраняя пропорции содержимого. Тексты, роли и история процесса пока предварительные. Не добавлены неподтверждённые показатели, даты проектов, клиенты или история трудоустройства.

## Vercel

Разместить содержимое этой папки в Git-репозитории, импортировать в Vercel. Framework Preset: Other; Build Command: оставить пустым; Output Directory: `.`. Если репозиторий содержит весь workspace, Root Directory: `portfolio`. Настройки в `vercel.json`. Публикация ещё не выполнена.

## Проверка

`npm run check` проверяет синтаксис. В браузере проверить выбор проекта, открытый процесс, RU/EN, переходы между страницами, Telegram, узкий экран и настройку уменьшенного движения.

## Референсы

Пользовательское направление: telhaclarke.com.au, detroit.paris, hirotos.com, art-yakushev.com, etienne.studio, marioroudil.com, ning-h.com, formandfun.co. Исходные изображения и код этих сайтов не копируются.

Поле trimBottom дополнительно задаёт нижнюю границу кадра. В welcome Credo оно скрывает служебный cookie-баннер в презентационных визуалах. Исходный экспорт PNG сохранён вне публичной папки.




Текущая галерея: лента из пяти проектов, вдохновлённая композицией Mario Roudil. Все кадры видны сразу, наведённый или выбранный с клавиатуры кадр расширяется GSAP-анимацией. Вертикальная прокрутка не закрепляется; горизонтального скролла нет. Под лентой — крупный заголовок с контрастом гротеска и курсива. На мобильном экране — один крупный кадр и четыре карточки; при уменьшенном движении анимация отключена.

Эскизы четырёх альтернатив галереи доступны в gallery-concepts.html: сгиб, щель, переходы между проектами и раскрытие масштаба. Это отдельная страница сравнения, с запуском и ручным прогрессом каждого GSAP-перехода.

hero-concepts.html — три самостоятельных концепции первого экрана: Сканер, Микшер, Живой плакат. Переключаются верхним меню; hash сохраняет выбранный вариант. Реальные визуалы проектов использованы для исследуемого изображения, композиции и типографического плаката. Это отдельные эскизы для выбора направления.

Обновлены Сканер и Живой плакат: крупные детали проектов вместо мелкой мозаики; линза раскрывается до полного кадра, а типографический плакат волной превращается в цельное изображение. Предыдущие эскизы сохранены в hero-concepts-v1.html.

creative-directions.html — отдельная серия экспериментальных первых экранов: Монтажная (управление соединением кадров), Разрыв (бумажная типографическая поверхность) и Орбита (удерживание центра собирает проекты). В каждом варианте можно выбрать любой из пяти проектов. Это интерактивные концепции для обсуждения, а не замена главной страницы.

sign-concept.html — «Перекрёсток»: объёмный дорожный указатель с пятью стрелками проектов и круглым экраном выбранного визуала. CSS 3D и GSAP, поворот перетягиванием либо кнопками, выбор мышью и клавиатурой, переход к кейсу. Самостоятельный прототип в направлении объектного первого экрана Hirotos.

new-directions.html — новая серия: Живой индекс (названия работ как первый экран), Разборка (интерактивное раскрытие слоёв интерфейса GDG, условный каркас для демонстрации идеи), Атлас (перемещаемое поле фрагментов проектов). Все три — самостоятельные эскизы на GSAP.

Обложки пересобраны в covers.js / covers.css и подключены к галерее главной страницы. В minimal-covers.html можно посмотреть все пять отдельно; PNG-экспорты находятся в assets/covers. «Красный путь» и GDG — графические концепции обложек, Credo / Мужской клуб / Козихинский 22 — крупные детали исходных визуалов без технического UI.

motion-directions.html — три новых варианта на этой серии обложек: Дрейф (асимметричная плавающая экспозиция), Перспектива (поворот пространственной галереи), Течение (плавное движение по двум траекториям). Учитывают уменьшенное движение; есть клавиатурный выбор проекта и ссылки к кейсам.
`nMain landing now uses perspective.css + perspective.js. All five projects are available by name, arrows, keyboard and drag. Side covers move to the center before opening. RU/EN state and reduced motion are supported. Minimal covers remain shared with concept previews.
Cover revision: all five covers now use a restrained typographic/sign treatment on pale neutral backgrounds. Photos, interface crops, curves and text overlays were removed. PNG exports in assets/covers match this revision.
Motion polish: wheel/drag are restricted to the cover rectangle (.perspective-zone). Cursor parallax is damped and recenters on leave. Header uses the localized full name; navigation fonts are equal (14px desktop, 12px mobile). motion-ui provides an interactive cursor on fine pointers and a short card-assembly intro; reduced-motion users skip the intro and parallax. Intro unlocks automatically with a 5-second fallback. Full-cycle headline supports RU/EN.
Eight-project gallery: added Amtek, dl.studio and dl.games as source-linked Figma entries with clean cover concepts (galleryExtras). Existing five case studies remain unchanged. Removed bottom anchor navigation and separator. Bottom corner shows project count and focus. Parallax follows the viewport; wheel/drag remain restricted to the cover rectangle. Gallery has closer neighboring planes, smooth opacity transitions and longer easing. Headline is 2 desktop lines / 3 mobile lines.
Hero viewport sizing: dynamic viewport height minus measured header height (ResizeObserver). Gallery and caption share a responsive grid; cover sizes also respond to available height. Mobile stage stays within viewport width.
Gallery motion: soft local fabric folds using an SVG displacement field, driven by carousel velocity. Removed skew and squash/stretch. Folds ease out after wheel, drag or keyboard rotation; filter switches off at rest. Labels stay stable and reduced motion skips deformation.

Fabric smoothing: speed is filtered before the fold envelope, with 0.22s attack and 0.6s release. Direction reversals preserve the envelope. Broader, blurred displacement field produces softer folds.
Fabric fold amplitude reduced from 48 to 10 (about one fifth); smoothing remains unchanged.
Removed fabric deformation entirely. Carousel rotation, cursor parallax and subtle idle float remain.
Gallery fisheye: a smooth radial SVG displacement map enlarges the center by up to 19% and compresses the periphery. Map is generated at resize only; carousel motion and hit targets remain native HTML. Effect is confined to the gallery stage, outside headline/header.
Fisheye strength increased 2.5x: radial coefficient 0.16 to 0.40; center magnification now up to 1.67x.
Fisheye removed completely: no radial displacement map or gallery filter. Original perspective carousel remains.
Responsive gallery spacing: orbit radius is derived from actual card width and projected edges over a full rotation step, with reserved space for cursor parallax. Tablet/phone cards retain gaps during rotation. Geometry verified across 56 viewport sizes (320–1920px wide), with extreme cursor parallax: minimum projected gap 24.9px. Mobile JS breakpoint now matches CSS at 600px.
Hero polish: tighter responsive orbit gaps (12–20px target with parallax reserve); live current/total project counter follows the actual centered card. Larger RU/EN headline highlights seven years and national brands, with Runet Rating recognition as supporting text. Site-wide GSAP parallax uses independent CSS translate layers: softer text movement, deeper visuals, scroll scrub 1.4 and cursor easing 1.4s. Applies to work/about, header/footer; cleans up on locale changes and respects reduced motion. Browser verified at desktop, 768px, 390px, short landscape, and RU/EN; no console errors.

preloader-concepts.html — три отдельных прототипа прелоадера: Точка схода, Восемь граней и Наведение резкости. В нижней панели — выбор, повтор и замедленный просмотр. Escape завершает анимацию, изменение размера окна безопасно открывает сайт. При уменьшенном движении прелоадеры пропускаются. Основной прелоадер главной страницы пока прежний.
Parallax revised: removed all cursor-driven movement from page elements and gallery world. Scroll-only independent translate layers now use scrub 1.8 to settle softly after scrolling. Header is static; custom cursor and gallery drag/wheel controls remain. Browser verified delayed convergence after a page scroll; no console errors.
Restored viewport cursor parallax exclusively for the hero gallery world. Rest of page remains scroll-only with delayed scrub; hero caption/counter do not respond to pointer. Gallery retains independent scroll translate.
Stronger scroll motion: visual layers travel up to +/-64px, headings +/-42px, text +/-22px (reduced on mobile). GSAP eases each scroll target for 1.25s; shared velocity-based content lag settles in 1.15s. Layer progress uses stable cumulative layout offsets, fixing incorrect ScrollTrigger ranges after restored mid-page reload. Hero gallery retains cursor parallax. Browser confirmed visible layer offsets change correctly after scrolling and settle; no console errors.

Gallery covers replaced with eight user-supplied artworks. Original 512x384 SVG viewports preserved; their identical embedded PNG is stored once as assets/covers/gallery-sheet.png to avoid eight duplicate downloads. Inline SVG crops map each artwork to its named project. Carousel interactions and case visuals remain unchanged.

Cover grounds now use complementary colours through CSS compositing; gallery cards include Web / Mobile app format labels. Removed global scroll translation and velocity lag entirely. Scroll motion now reveals text through opacity and visual frames through clipping, image zoom and subtle 0.98-to-1 scale with GSAP scrub 1.2. Hero cursor parallax remains.

rock-preloaders.html — вторая серия прелоадеров: Shake → Spray → Rock (исходный assets/rock-hand.svg проявляется по штампам маски), Сорвать афишу, Удар по стеклу, Обратный взрыв, Захват сигнала. Панель: выбор, повтор, пауза и замедление. Escape и изменение размера завершают сцену. Уменьшенное движение пропускает анимацию. Эти прототипы не заменяют основной прелоадер.
Cover backgrounds revised to very pale tonal shades matching each artwork: blue, red, lavender, magenta, slate, ochre and green.
Gallery labels now put format on the right in place of the arrow. Desktop card width grows up to 700px, constrained by viewport height. Brand has a black ground with white text; language/contact spacing widened. Idle GSAP ticker rotation eases toward 0.025 rad/s, pauses on card hover/focus/manual input and while hidden/reduced-motion. Case scroll animation uses reversible clipping and scale with 1.8s scrub, softer zoom and staggered process text fades; no content translation.
Desktop gallery reduced again to min(550px,25vw,48cqh). Added liquid-covers.js: per-cover curved WebGL mesh and velocity-smoothed UV flow, with Canvas2D strip rendering fallback when WebGL is unavailable. Covers retain the supplied artwork and pale tonal grounds. Liquid flow follows carousel wheel/drag/keys/idle speed, settles with 0.28s damping, respects reduced motion, skips hidden cards and disposes contexts on locale rerender. Reference: MarceloDesignX X video 2107307188343742937 (cylindrical card curvature).
Liquid corrected: removed independent per-card deformation entirely. A shared central Canvas2D frame composites both outgoing and incoming artwork and tonal backgrounds through a curved feathered liquid mask, with directional UV stretch. Progress derives solely from carousel angle (reversible wheel/drag/idle); no random/time waves. Original adjacent cards fade into/out of the shared frame; central link and label track the actual visible project. Keyboard/snap transitions slowed to 1.5s sine.inOut. Reduced motion retains original cards.
Reverted all reference-related liquid changes at user request: removed liquid renderer, shared morph frame, deformation and script import; restored perspective cards, previous 620px/28vw/54cqh desktop sizing, 1.1s power3.out snap and subtle idle artwork float. Cursor parallax and slow idle carousel rotation remain.
Approved contextual optical cover series installed: PortfolioCovers now loads the exact eight PNGs from assets/optical-context by project ID. Images render at their original 4:3 ratio with no tint/blend filter. Shared gallery, cover export and concept cover views update through the same helper. Internal case study media and copy preserved. Browser verified all eight PNGs load at 1448x1086 on desktop and mobile; no horizontal page overflow or console errors.
Gallery load intro: after preloader finishes and eight PNG covers decode, GSAP runs a one-time 1.5s speed envelope (0.12s acceleration to 8*pi rad/s, 0.78s fast rotation, 0.6s power3 deceleration to existing 0.025 rad/s idle). Angle integrates continuously without snapping at handoff. Manual wheel/drag/keys cancel intro; language rerenders do not repeat it. Reduced-motion users skip it. Browser observed intro -> idle in 1472ms after detection, no console errors.
Intro shortened to exactly 1.0s: 0.4s sine.inOut acceleration and 0.6s sine.inOut deceleration to idle. Removed the constant high-speed plateau; speed and acceleration join continuously at the peak and idle handoff.
Intro extended to 1.5s again while retaining smooth acceleration: 0.4s sine.inOut acceleration plus a longer 1.1s sine.inOut deceleration (83% longer than previous braking phase), with zero acceleration at both joins.
Temporarily restored minimalist abstract optical covers from original shared gallery-sheet.png with pale tonal backgrounds. Contextual PNGs remain saved in assets/optical-context. Gallery geometry, startup spin and case study content are unchanged.
Continuous intro braking: one shared speed value now drives the same ticker throughout intro and idle; completion no longer assigns another velocity. Braking extended to 2.6s with quintic smootherstep (zero first and second derivatives at endpoints). It arrives at 0.025 rad/s and continues from that exact value and angle. Pointer leave does not reset speed during intro; explicit manual input still cancels it.
