import type { Lang } from "../lib/i18n";

export interface LinkContent {
  href: string;
  label: string;
  external?: boolean;
}

export interface SubsectionContent {
  title: string;
  paragraphs?: string[];
  listIntro?: string;
  links?: LinkContent[];
}

export interface SectionContent {
  id?: string;
  title: string;
  paragraphs?: string[];
  subsections?: SubsectionContent[];
  cta?: LinkContent;
}

export interface PageContent {
  metaTitle: string;
  metaDescription: string;
  title: string;
  intro?: string[];
  cta?: LinkContent;
  sections: SectionContent[];
}

export const site = {
  uk: {
    name: "Сергій Бабіч",
    title: "Сергій Бабіч.",
    tagline: "Фронтенд-інженер, технічний інтервʼюєр, автор.",
    navLabel: "Головна навігація",
    menuLabel: "Відкрити меню",
    nav: [
      { href: "/", title: "Головна" },
      { href: "/interviews", title: "Співбесіди" },
      { href: "/youtube", title: "YouTube" },
      { href: "/blog", title: "Блоґ" },
    ],
    home: {
      metaTitle: "Головна",
      metaDescription: "Сергій Бабіч — технічний експерт",
      heroAlt: "Сергій Бабіч",
      title: "Привіт, я — Сергій Бабіч",
      intro: [
        "Понад 15 років я працюю у веброзробці — пройшов шлях від наївного джуна, який думав, що знає все на світі, до синьйора, який нарешті зрозумів, скільки всього ще не знає.",
        "Мене цікавить розробка не як набір фреймворків, а як інженерна практика — коли рішення треба підтримувати, командам треба домовлятися, а розробників треба <a href=\"/interviews\">наймати, оцінювати й навчати</a>.",
        "Веду <a href=\"/youtube\">YouTube-канал</a>, пишу про веброзробку, виступаю з доповідями й роблю формати, у яких компанії можуть говорити з розробниками по суті.",
      ],
      sections: [
        {
          title: "Доручіть мені ваші технічні співбесіди",
          paragraphs: [
            "Я проводжу <a href=\"/interviews\">технічні співбесіди</a> для розробників, допомагаю налагодити оцінювання й даю незалежний технічний висновок — щоб компанія розуміла, кого запрошує до команди, а в кандидата лишалися про вас якнайкращі враження.",
          ],
          cta: { href: "/proposal", label: "Поговорити про співбесіди" },
        },
        {
          title: "Розкажіть про компанію так, щоб вас чули розробники",
          paragraphs: [
            "Я веду <a href=\"/youtube\">YouTube-канал</a> і проводжу офлайн-події для розробників. Це інтервʼю, публічні співбесіди, живі подкасти й авторські формати, де компанії можуть говорити по суті — про роботу, найм, команду й технічні рішення.",
          ],
          cta: { href: "/youtube", label: "Підібрати формат" },
        },
        {
          title: "А ще є блоґ",
          paragraphs: [
            "Про frontend, браузери, HTML, CSS, технічні співбесіди, практичний досвід та інше, про що говорять розробники.",
          ],
          cta: { href: "/blog", label: "Читати блоґ." },
        },
      ],
    },
    interviews: {
      metaTitle: "Співбесіди",
      metaDescription: "Сергій Бабіч — технічний експерт",
      title: "Технічні співбесіди",
      intro: [
        "Я проводжу технічні співбесіди для розробників, допомагаю налагодити оцінювання й даю незалежний технічний висновок — щоб компанія розуміла, кого запрошує до команди, а в кандидата лишалися про вас якнайкращі враження. Якщо потрібен вже готовий формат роботи, є окрема <a href=\"/proposal\">пропозиція співпраці</a>.",
      ],
      sections: [
        {
          title: "Чому технічні співбесіди часто не працюють",
          paragraphs: [
            "Погана технічна співбесіда виглядає вдалою рівно до моменту, коли після дзвінка треба пояснити, що саме ви зрозуміли про кандидата і чому готові або не готові кликати його далі.",
          ],
        },
        {
          title: "Як я проводжу співбесіди",
          paragraphs: [
            "Я не ганяю кандидата випадковими питаннями й не перевіряю, чи він вгадав відповідь, яку хотів почути інтервʼюєр.",
            "Мені важливо побачити, як людина думає, говорить про свій досвід, пояснює рішення, ставить уточнення й поводиться там, де немає ідеально сформульованого завдання.",
            "Після співбесіди команда отримує технічний висновок: що кандидат показав, де можуть бути ризики для цієї ролі й чому я раджу рухатися далі або зупинитися.",
          ],
        },
        {
          title: "Чому мені можна це довірити",
          paragraphs: [
            "Я понад 15 років у веброзробці й понад 10 років проводжу технічні співбесіди.",
            "Моя головна експертиза — <b>front‑end від Trainee до Tech Lead</b>. Також можу проводити співбесіди для <b>React Native</b>, <b>Node.js</b> і <b>Python</b> до рівня <b>Middle</b>, якщо роль не потребує глибшої спеціалізації поза моїм досвідом.",
            "Окрім роботи з компаніями, я провів понад 50 <a href=\"/youtube\">публічних інтервʼю на YouTube</a>, тому вмію вести технічну розмову так, щоб кандидат не просто захищався від питань, а показував, як він справді працює з задачами.",
          ],
        },
      ],
    },
    proposal: {
      metaTitle: "Пропозиція співпраці",
      metaDescription: "Пропозиція співпраці від Сергія Бабіча",
      title: "Про співпрацю",
      intro: [
        "Я проводжу <a href=\"/interviews\">технічні співбесіди</a> з розробниками, готую план оцінювання для конкретної ролі й даю незалежний технічний висновок після кожної розмови.",
        "Моя основна зона — frontend і web development від Trainee до Tech Lead. Також можу проводити співбесіди для React Native, Node.js і Python до Middle-рівня, якщо роль не вимагає глибшої спеціалізації поза моїм досвідом.",
        "Мета співпраці — зробити технічний етап зрозумілим для команди й нормальним для кандидата. Без випадкових питань, розмитих критеріїв і фідбеку, з якого незрозуміло, що робити далі.",
      ],
      sections: [
        {
          title: "Як відбувається співпраця",
          subsections: [
            {
              title: "Розбираємо роль",
              paragraphs: [
                "Спочатку я говорю з наймаючим лідером. Уточнюємо, кого ви шукаєте, яку роботу людина має взяти на себе, які навички справді важливі й що потрібно перевірити на співбесіді.",
                "Після цього я готую мапу оцінювання: теми, критерії, питання й сценарії для конкретної ролі. Вона потрібна, щоб усі кандидати проходили співбесіду в одній логіці, а команда потім могла порівнювати результати не за відчуттям, а за зрозумілими спостереженнями.",
                "Якщо ви наймаєте кількох людей на одну роль, мапа може бути спільною. Якщо ролі різні, краще робити окремі процеси.",
              ],
            },
            {
              title: "Проводжу співбесіди",
              paragraphs: [
                "Перед кожною розмовою я переглядаю CV кандидата й дивлюся, на що варто звернути більше уваги в межах узгодженого плану.",
                "Співбесіда проходить як структурована технічна розмова. Ми говоримо про досвід, рішення, компроміси, уточнення, невизначеність і ситуації, схожі на реальну роботу.",
                "Зазвичай це онлайн-зустріч на 60–90 хвилин. Coding-етап можна додати окремо, якщо він потрібен для ролі.",
              ],
            },
            {
              title: "Даю технічний висновок",
              paragraphs: [
                "Після кожної співбесіди я готую технічний висновок: що кандидат показав, який рівень виглядає реалістичним для цієї ролі, де сильні сторони, де можуть бути ризики і чи є сенс рухатися далі.",
                "Висновок ґрунтується на вимогах ролі й тому, що було видно під час розмови. Не на “сподобався / не сподобався” і не на випадкових факторах.",
                "Фінальне рішення про найм залишається за компанією.",
              ],
            },
          ],
        },
        {
          title: "Що входить у роботу",
          paragraphs: [
            "Підготовка до ролі, мапа оцінювання, перегляд CV, сама співбесіда, технічний висновок і коротка комунікація з командою щодо результатів.",
          ],
        },
        {
          title: "Вартість",
          paragraphs: [
            "<b>$80/година</b>",
            "Спочатку ми окремо готуємо роль: уточнюємо вимоги, мапу оцінювання, критерії та сценарій співбесіди. Ця частина оплачується погодинно, а її обсяг залежить від того, як швидко ми узгодимо все з командою.",
            "Коли підготовка завершена, робота з кожним кандидатом зазвичай займає <b>2–3 години</b>: CV, співбесіда, технічний висновок і коротка комунікація з командою. Орієнтовно це <b>$160–240</b>.",
          ],
        },
        {
          title: "Умови",
          paragraphs: [
            "Працюємо за консалтинговим договором. NDA — за потреби або за вашим стандартним процесом.",
            "Оплата — за фактично витрачений час.",
            "Оцінювання проводиться за критеріями ролі. Особисті, випадкові або нерелевантні фактори в оцінку не входять.",
            "Фінальне рішення про найм залишається за компанією. Я даю незалежний технічний висновок і пояснюю, на чому він ґрунтується.",
          ],
        },
        {
          title: "Інші формати співпраці",
          paragraphs: [
            "Якщо вам потрібно не закрити технічний етап найму, а вийти до розробників через змістовний контент, подію або публічну розмову, для цього є окрема сторінка про YouTube-співпрацю.",
          ],
          cta: {
            href: "/youtube",
            label: "Переглянути YouTube-формати",
          },
        },
        {
          title: "Наступний крок",
          paragraphs: [
            "Напишіть мені, і ми коротко обговоримо роль, процес найму та формат роботи.",
          ],
          cta: {
            href: "https://calendar.app.google/gbbTfofNZ6Rie8vb7",
            label: "Призначити зустріч",
            external: true,
          },
        },
      ],
    },
    youtube: {
      metaTitle: "YouTube",
      metaDescription: "Формати співпраці для YouTube-каналу Сергія Бабіча",
      title: "YouTube-співпраця",
      intro: [
        "Я веду YouTube-канал «Сергій Бабіч та Дивовижний світ веброзробки». Це канал про розробку, <a href=\"/interviews\">технічні співбесіди</a>, карʼєру, ІТ-ринок, навчання, ШІ, інженерне мислення й те, як змінюється професія.",
        "Я відкритий до співпраці з компаніями, продуктами, освітніми проєктами, подіями й командами, яким важливо не просто промайнути перед розробниками, а нормально розповісти про себе через людей, досвід, роботу, найм і технічні рішення.",
      ],
      cta: { href: "#contact", label: "Обговорити співпрацю" },
      sections: [
        {
          title: "Про канал",
          paragraphs: [
            "«Сергій Бабіч та Дивовижний світ веброзробки» — це канал для розробників і людей, які працюють поруч із розробкою.",
            "Мене цікавить не тільки код. Мене цікавить, як розробники проходять співбесіди, ростуть у професії, змінюють ролі, працюють у командах, помиляються, ухвалюють рішення й дають собі раду зі змінами в індустрії.",
            "Технічні теми тут не відірвані від роботи. Frontend, web platform, ШІ, найм, карʼєра, рівні інженерів, навчання й робота команд складаються в одну розмову про те, що сьогодні означає бути розробником.",
          ],
        },
        {
          title: "Кому підходить співпраця",
          paragraphs: [
            "Це може бути корисно компаніям, які <a href=\"/proposal\">наймають інженерів</a> і хочуть показати не тільки вакансії, а й людей, підхід до технічної оцінки, роботу команди й те, як у них насправді влаштована розробка.",
            "Так само це підходить технічним продуктам і сервісам, яким треба пояснити себе через задачі розробників, а не просто пройтися списком можливостей.",
            "Освітні проєкти, курси й ментори можуть говорити тут про навчання, професійний ріст і вхід в ІТ без обіцянок швидкого успіху й глянцевих історій про “нове життя за три місяці”.",
            "Конференції, спільноти й події можуть вийти до українських розробників через канал, де вже є довіра до технічних і професійних тем.",
          ],
        },
        {
          title: "Формати співпраці",
          subsections: [
            {
              title: "Партнерський випуск",
              paragraphs: [
                "Це окреме відео за підтримки партнера.",
                "Тему будуємо навколо питання, яке справді цікаве аудиторії. Це може бути співбесіда, карʼєра, навчання, робота команд, інструменти, ринок, ШІ, технічні рішення або професійний розвиток.",
                "Партнер у такому випуску не просто “згадується”. Він входить у розмову через тему, експертизу, продукт, людей або досвід, який може бути корисним розробникам.",
              ],
              listIntro: "Приклади:",
              links: [
                {
                  href: "https://www.youtube.com/watch?v=XCPPTNBNKB4",
                  label:
                    "Співбесіда на сцені №2 | Frontend Tech Lead | Давид Касумов",
                  external: true,
                },
                {
                  href: "https://www.youtube.com/watch?v=IESsvnPfPtU",
                  label:
                    "ДЖУН, МІДЛ І СИНЬЙОР — FRONTEND | Одне питання — три відповіді №2 | Львів",
                  external: true,
                },
                {
                  href: "https://www.youtube.com/watch?v=UtSfAFwNl5k",
                  label:
                    "ІТ проти ДЖУНІОРІВ? | Чи наймають сьогодні джунів і чому",
                  external: true,
                },
              ],
            },
            {
              title: "Інтервʼю з фахівцем компанії",
              paragraphs: [
                "Це розмова з інженером, технічним лідом, засновником, ментором або людиною, яка добре розуміє, як у компанії працює розробка.",
                "Фокус не на тому, яка компанія чудова. Фокус на досвіді. Що ви будуєте, як ухвалюєте рішення, як наймаєте, де помилялися, що вже зрозуміли й що з цього може бути корисним іншим.",
              ],
              listIntro: "Приклади:",
              links: [
                {
                  href: "https://www.youtube.com/watch?v=lIugEWpCzX4",
                  label:
                    "Розробники і бізнес — друзі чи попутники? | Розмова з Ігорем Закутинським",
                  external: true,
                },
                {
                  href: "https://www.youtube.com/watch?v=UtSfAFwNl5k",
                  label:
                    "ІТ проти ДЖУНІОРІВ? | Чи наймають сьогодні джунів і чому",
                  external: true,
                },
              ],
            },
            {
              title: "Публічна співбесіда або технічний розбір",
              paragraphs: [
                "Цей формат підходить компаніям, освітнім проєктам і командам, яким важлива тема найму, оцінки навичок або підготовки розробників.",
                "Можна зробити мок-співбесіду, розбір відповідей, аналіз типових помилок, розмову про критерії оцінки або випуск про те, як змінилися технічні інтервʼю.",
              ],
              listIntro: "Дотичні сторінки й приклади:",
              links: [
                {
                  href: "/interviews",
                  label: "Як я проводжу технічні співбесіди",
                },
                {
                  href: "/proposal",
                  label: "Пропозиція співпраці для приватних співбесід",
                },
                {
                  href: "https://www.youtube.com/watch?v=Fds47q02RNQ",
                  label:
                    "Вайбкодинг трейні — працює чи ні? | Розбір тестового завдання",
                  external: true,
                },
                {
                  href: "https://www.youtube.com/watch?v=XCPPTNBNKB4",
                  label:
                    "Співбесіда на сцені №2 | Frontend Tech Lead | Давид Касумов",
                  external: true,
                },
              ],
            },
            {
              title: "Живий подкаст або офлайн-подія",
              paragraphs: [
                "Це формат із глядачами в залі. Компанія може напряму говорити з розробниками, відповідати на питання й бути частиною живої професійної розмови, а не тільки зʼявитися у випуску.",
                "Такий формат підходить, коли важливо не просто зробити відео, а зібрати людей навколо теми й дати їм можливість побачити компанію наживо.",
              ],
              listIntro: "Приклад:",
              links: [
                {
                  href: "https://www.youtube.com/watch?v=XCPPTNBNKB4",
                  label:
                    "Співбесіда на сцені №2 | Frontend Tech Lead | Давид Касумов",
                  external: true,
                },
              ],
            },
            {
              title: "Авторський формат",
              paragraphs: [
                "Можемо зібрати окрему ідею під вашу задачу. Наприклад, співбесіду на сцені, “одне питання — три відповіді”, технічну дискусію, розбір кейсу або розмову з кількома людьми з команди.",
                "Тут важливо не вписатися в готовий рекламний шаблон, а знайти формат, у якому компанія справді має що сказати.",
              ],
              listIntro: "Приклад:",
              links: [
                {
                  href: "https://www.youtube.com/watch?v=IESsvnPfPtU",
                  label:
                    "ДЖУН, МІДЛ І СИНЬЙОР — FRONTEND | Одне питання — три відповіді №2 | Львів",
                  external: true,
                },
              ],
            },
            {
              title: "Інтеграція в доречний випуск",
              paragraphs: [
                "Це коротка партнерська згадка у відео, де продукт, подія або компанія природно повʼязані з темою.",
                "Текст підлаштовується під аудиторію, тон каналу й конкретний випуск. Я не читаю готові маркетингові абзаци, якщо вони звучать чужо.",
              ],
            },
          ],
        },
        {
          title: "Як я працюю з партнерським контентом",
          paragraphs: [
            "Я беруся за співпрацю тоді, коли бачу нормальний звʼязок між партнером, темою й людьми, які дивляться канал.",
            "Я не маскую рекламу під особисту рекомендацію, не беру теми, далекі від розробників, і не читаю готовий маркетинговий текст без правок. Якщо інтеграція ламає довіру до каналу, я за неї не беруся.",
            "Партнерський контент має виглядати не як банер, який випадково потрапив у відео, а як частина нормальної розмови.",
          ],
        },
        {
          title: "Що отримує партнер",
          paragraphs: [
            "Партнер отримує вихід до українських розробників і формат, у якому можна пояснити продукт, подію, компанію, експертизу або підхід до найму без пресрелізної інтонації.",
            "Такий контент можна використовувати не тільки на YouTube. Він може працювати в соцмережах, рекрутингу, комунікаціях, контент-маркетингу або роботі з брендом роботодавця.",
            "І головне — випуск не перетворюється на рекламну паузу. Редакційний підхід зберігає довіру глядачів і робить присутність партнера частиною розмови, а не чужим шматком посеред відео.",
          ],
        },
        {
          title: "Коли це не підходить",
          paragraphs: [
            "Це не той формат, якщо вам потрібна просто рекламна начитка або затверджений маркетинговий текст без змістовних правок.",
            "Також це не спрацює, якщо продукт, подія або пропозиція не мають стосунку до розробників, технологій, освіти, ІТ-ринку чи професійного розвитку.",
            "І точно не підходить, якщо від мене очікують гарантовано позитивний відгук без права на редакційну обережність.",
          ],
        },
        {
          id: "contact",
          title: "Обговорити співпрацю",
          paragraphs: [
            "Напишіть, що хочете представити — продукт, вакансії, подію, освітній проєкт, бренд роботодавця або технічну експертизу.",
            "Я подивлюся, чи є для цього природний формат на каналі, і запропоную варіант співпраці.",
          ],
          cta: {
            href: "mailto:hello@babich.dev?subject=YouTube-%D1%81%D0%BF%D1%96%D0%B2%D0%BF%D1%80%D0%B0%D1%86%D1%8F",
            label: "Написати щодо YouTube-співпраці",
            external: true,
          },
        },
      ],
    },
    blog: {
      metaTitle: "Блоґ",
      metaDescription:
        "Блоґ Сергія Бабіча про веброзробку, співбесіди, команди й технічні рішення",
      title: "Блоґ",
      intro:
        "Тут я пишу про веброзробку, співбесіди, команди, технічні рішення й усе, чим хочеться поділитися, поки думка не загубилася.",
      thanks: "Дякую, що завітали. Приємного читання.",
      allPosts: "Усі дописи",
      empty: "Поки що немає опублікованих постів.",
      yearTitle: (year: number) => `Блоґ ${year}`,
      yearDescription: (year: number) => `Всі пости блоґу за ${year} рік`,
      yearHeading: (year: number) => `Усі дописи за ${year} рік`,
      yearEmpty: (year: number) =>
        `Поки що немає опублікованих постів за ${year} рік.`,
      monthTitle: (monthName: string, year: number) =>
        `Блоґ ${monthName} ${year}`,
      monthDescription: (monthName: string, year: number) =>
        `Всі пости блоґу за ${monthName} ${year}`,
      monthHeading: (monthName: string, year: number) =>
        `Усі дописи за ${monthName} ${year} року`,
      monthEmpty: (monthName: string, year: number) =>
        `Поки що немає опублікованих постів за ${monthName} ${year}.`,
      dayTitle: (dateName: string) => `Блоґ | ${dateName}`,
      dayDescription: (dateName: string) => `Всі пости блоґу за ${dateName}`,
      dayHeading: (dateName: string) => `Усі дописи за ${dateName}`,
    },
  },
  en: {
    name: "Serhii Babich",
    title: "Serhii Babich.",
    tagline: "Frontend engineer, technical interviewer, author.",
    navLabel: "Main navigation",
    menuLabel: "Open menu",
    nav: [
      { href: "/", title: "Home" },
      { href: "/interviews", title: "Interviews" },
      { href: "/youtube", title: "YouTube" },
      { href: "/blog", title: "Blog" },
    ],
    home: {
      metaTitle: "Home",
      metaDescription: "Serhii Babich — technical expert",
      heroAlt: "Serhii Babich",
      title: "Hi, I am Serhii Babich",
      intro: [
        "I have worked in web development for more than 15 years: from a naive junior who thought he knew everything to a senior engineer who finally understood how much there still is to learn.",
        "I care about software development not as a collection of frameworks, but as an engineering practice: decisions have to be maintained, teams have to align, and developers have to be <a href=\"/interviews\">hired, evaluated, and trained</a>.",
        "I run a <a href=\"/youtube\">YouTube channel</a>, write about web development, speak at events, and create formats where companies can talk to developers with substance.",
      ],
      sections: [
        {
          title: "Let me handle your technical interviews",
          paragraphs: [
            "I conduct <a href=\"/interviews\">technical interviews</a> for developers, help set up evaluation, and provide an independent technical assessment so the company understands who it is inviting into the team and candidates leave with the best possible impression of you.",
          ],
          cta: { href: "/proposal", label: "Discuss interviews" },
        },
        {
          title: "Tell your company story so developers actually listen",
          paragraphs: [
            "I run a <a href=\"/youtube\">YouTube channel</a> and host offline events for developers. These include interviews, public technical interviews, live podcasts, and custom formats where companies can talk clearly about work, hiring, teams, and technical decisions.",
          ],
          cta: { href: "/youtube", label: "Choose a format" },
        },
        {
          title: "There is also a blog",
          paragraphs: [
            "About frontend, browsers, HTML, CSS, technical interviews, practical experience, and other topics developers talk about.",
          ],
          cta: { href: "/blog", label: "Read the blog." },
        },
      ],
    },
    interviews: {
      metaTitle: "Interviews",
      metaDescription: "Serhii Babich — technical expert",
      title: "Technical Interviews",
      intro: [
        "I conduct technical interviews for developers, help set up evaluation, and provide an independent technical assessment so the company understands who it is inviting into the team and candidates leave with the best possible impression of you. If you need a ready cooperation format, there is a separate <a href=\"/proposal\">cooperation proposal</a>.",
      ],
      sections: [
        {
          title: "Why technical interviews often fail",
          paragraphs: [
            "A bad technical interview looks successful exactly until the moment someone has to explain what the team actually learned about the candidate and why they are, or are not, ready to move forward.",
          ],
        },
        {
          title: "How I conduct interviews",
          paragraphs: [
            "I do not chase candidates with random questions or check whether they guessed the answer the interviewer expected.",
            "I want to see how a person thinks, talks about their experience, explains decisions, asks clarifying questions, and behaves when the task is not perfectly framed.",
            "After the interview, the team receives a technical assessment: what the candidate demonstrated, where the risks may be for this role, and why I recommend moving forward or stopping.",
          ],
        },
        {
          title: "Why you can trust me with this",
          paragraphs: [
            "I have been in web development for more than 15 years and have conducted technical interviews for more than 10 years.",
            "My main expertise is <b>front-end from Trainee to Tech Lead</b>. I can also interview for <b>React Native</b>, <b>Node.js</b>, and <b>Python</b> up to <b>Middle</b> level when the role does not require deep specialization outside my experience.",
            "Beyond company work, I have conducted more than 50 <a href=\"/youtube\">public interviews on YouTube</a>, so I know how to guide a technical conversation where a candidate does not just defend themselves from questions, but shows how they actually work with problems.",
          ],
        },
      ],
    },
    proposal: {
      metaTitle: "Cooperation Proposal",
      metaDescription: "Cooperation proposal from Serhii Babich",
      title: "About Cooperation",
      intro: [
        "I conduct <a href=\"/interviews\">technical interviews</a> with developers, prepare an evaluation plan for a specific role, and provide an independent technical assessment after each conversation.",
        "My main area is frontend and web development from Trainee to Tech Lead. I can also interview React Native, Node.js, and Python candidates up to Middle level when the role does not require deeper specialization outside my experience.",
        "The goal is to make the technical stage clear for the team and decent for the candidate. No random questions, vague criteria, or feedback that leaves everyone unsure what to do next.",
      ],
      sections: [
        {
          title: "How cooperation works",
          subsections: [
            {
              title: "We unpack the role",
              paragraphs: [
                "First, I talk with the hiring lead. We clarify who you are looking for, what work this person will take on, which skills really matter, and what should be checked during the interview.",
                "Then I prepare an evaluation map: topics, criteria, questions, and scenarios for the specific role. It keeps every candidate going through the same logic and helps the team compare results by clear observations instead of impressions.",
                "If you are hiring several people for the same role, the map can be shared. If the roles are different, separate processes are better.",
              ],
            },
            {
              title: "I conduct the interviews",
              paragraphs: [
                "Before each conversation, I review the candidate's CV and decide what deserves more attention within the agreed plan.",
                "The interview is a structured technical conversation. We discuss experience, decisions, tradeoffs, clarification, uncertainty, and situations close to real work.",
                "Usually this is a 60–90 minute online meeting. A coding stage can be added separately if the role requires it.",
              ],
            },
            {
              title: "I provide a technical assessment",
              paragraphs: [
                "After each interview, I prepare a technical assessment: what the candidate demonstrated, what level looks realistic for this role, where their strengths are, where risks may appear, and whether it makes sense to continue.",
                "The assessment is based on the role requirements and what was visible during the conversation. Not on “liked / disliked” or random factors.",
                "The final hiring decision stays with the company.",
              ],
            },
          ],
        },
        {
          title: "What is included",
          paragraphs: [
            "Role preparation, evaluation map, CV review, the interview itself, the technical assessment, and short communication with the team about the results.",
          ],
        },
        {
          title: "Price",
          paragraphs: [
            "<b>$80/hour</b>",
            "First, we prepare the role separately: clarify requirements, the evaluation map, criteria, and the interview scenario. This part is billed hourly, and its scope depends on how quickly we align everything with the team.",
            "After preparation is complete, work with each candidate usually takes <b>2–3 hours</b>: CV, interview, technical assessment, and short communication with the team. The approximate cost is <b>$160–240</b>.",
          ],
        },
        {
          title: "Terms",
          paragraphs: [
            "We work under a consulting agreement. NDA is available if needed or according to your standard process.",
            "Payment is based on actual time spent.",
            "Evaluation is based on role criteria. Personal, random, or irrelevant factors are not part of the assessment.",
            "The final hiring decision stays with the company. I provide an independent technical assessment and explain what it is based on.",
          ],
        },
        {
          title: "Other cooperation formats",
          paragraphs: [
            "If you do not need help with a private hiring stage, but want to reach developers through substantial content, an event, or a public conversation, there is a separate page about YouTube cooperation.",
          ],
          cta: {
            href: "/youtube",
            label: "See YouTube formats",
          },
        },
        {
          title: "Next step",
          paragraphs: [
            "Write to me, and we will briefly discuss the role, hiring process, and format of work.",
          ],
          cta: {
            href: "https://calendar.app.google/gbbTfofNZ6Rie8vb7",
            label: "Schedule a meeting",
            external: true,
          },
        },
      ],
    },
    youtube: {
      metaTitle: "YouTube",
      metaDescription:
        "Cooperation formats for Serhii Babich's YouTube channel",
      title: "YouTube Cooperation",
      intro: [
        "I run the YouTube channel “Serhii Babich and the Wonderful World of Web Development.” It is a channel about development, <a href=\"/interviews\">technical interviews</a>, careers, the IT market, learning, AI, engineering thinking, and how the profession is changing.",
        "I am open to cooperation with companies, products, educational projects, events, and teams that want to do more than briefly appear in front of developers. They want to explain themselves properly through people, experience, work, hiring, and technical decisions.",
      ],
      cta: { href: "#contact", label: "Discuss cooperation" },
      sections: [
        {
          title: "About the channel",
          paragraphs: [
            "“Serhii Babich and the Wonderful World of Web Development” is a channel for developers and people who work close to software development.",
            "I am interested not only in code. I am interested in how developers go through interviews, grow professionally, change roles, work in teams, make mistakes, make decisions, and deal with change in the industry.",
            "Technical topics here are connected to real work. Frontend, the web platform, AI, hiring, careers, engineering levels, learning, and team work all become one conversation about what it means to be a developer today.",
          ],
        },
        {
          title: "Who cooperation is for",
          paragraphs: [
            "It can be useful for companies <a href=\"/proposal\">hiring engineers</a> who want to show not only vacancies, but also people, their approach to technical evaluation, team work, and how development actually works inside the company.",
            "It also fits technical products and services that need to explain themselves through developer problems instead of just walking through a feature list.",
            "Educational projects, courses, and mentors can talk here about learning, professional growth, and entering IT without promises of fast success or glossy stories about a “new life in three months.”",
            "Conferences, communities, and events can reach Ukrainian developers through a channel that already has trust around technical and professional topics.",
          ],
        },
        {
          title: "Cooperation formats",
          subsections: [
            {
              title: "Partner episode",
              paragraphs: [
                "A standalone video supported by a partner.",
                "The topic is built around a question that is genuinely interesting to the audience. It can be an interview, career topic, learning, team work, tools, the market, AI, technical decisions, or professional growth.",
                "The partner is not merely “mentioned.” They enter the conversation through a topic, expertise, product, people, or experience that can be useful to developers.",
              ],
              listIntro: "Examples:",
              links: [
                {
                  href: "https://www.youtube.com/watch?v=XCPPTNBNKB4",
                  label:
                    "Interview on stage #2 | Frontend Tech Lead | Davyd Kasumov",
                  external: true,
                },
                {
                  href: "https://www.youtube.com/watch?v=IESsvnPfPtU",
                  label:
                    "Junior, Middle, and Senior — Frontend | One question, three answers #2 | Lviv",
                  external: true,
                },
                {
                  href: "https://www.youtube.com/watch?v=UtSfAFwNl5k",
                  label: "IT against juniors? Are juniors hired today and why",
                  external: true,
                },
              ],
            },
            {
              title: "Interview with a company expert",
              paragraphs: [
                "A conversation with an engineer, technical lead, founder, mentor, or someone who really understands how development works inside the company.",
                "The focus is not on how great the company is. The focus is on experience: what you build, how you make decisions, how you hire, where you made mistakes, what you already learned, and what may be useful to others.",
              ],
              listIntro: "Examples:",
              links: [
                {
                  href: "https://www.youtube.com/watch?v=lIugEWpCzX4",
                  label:
                    "Developers and business: friends or fellow travelers? | Conversation with Ihor Zakutynskyi",
                  external: true,
                },
                {
                  href: "https://www.youtube.com/watch?v=UtSfAFwNl5k",
                  label: "IT against juniors? Are juniors hired today and why",
                  external: true,
                },
              ],
            },
            {
              title: "Public interview or technical review",
              paragraphs: [
                "This format fits companies, educational projects, and teams that care about hiring, skill evaluation, or developer preparation.",
                "We can do a mock interview, review answers, analyze common mistakes, discuss evaluation criteria, or make an episode about how technical interviews have changed.",
              ],
              listIntro: "Related pages and examples:",
              links: [
                {
                  href: "/interviews",
                  label: "How I conduct technical interviews",
                },
                {
                  href: "/proposal",
                  label: "Cooperation proposal for private interviews",
                },
                {
                  href: "https://www.youtube.com/watch?v=Fds47q02RNQ",
                  label:
                    "Trainee vibe coding: does it work? | Test task review",
                  external: true,
                },
                {
                  href: "https://www.youtube.com/watch?v=XCPPTNBNKB4",
                  label:
                    "Interview on stage #2 | Frontend Tech Lead | Davyd Kasumov",
                  external: true,
                },
              ],
            },
            {
              title: "Live podcast or offline event",
              paragraphs: [
                "A format with an audience in the room. The company can speak directly with developers, answer questions, and become part of a live professional conversation instead of only appearing in a video.",
                "This works when it is important not just to make a video, but to gather people around a topic and let them see the company live.",
              ],
              listIntro: "Example:",
              links: [
                {
                  href: "https://www.youtube.com/watch?v=XCPPTNBNKB4",
                  label:
                    "Interview on stage #2 | Frontend Tech Lead | Davyd Kasumov",
                  external: true,
                },
              ],
            },
            {
              title: "Custom format",
              paragraphs: [
                "We can build a separate idea around your goal: for example, an interview on stage, “one question, three answers,” a technical discussion, a case review, or a conversation with several people from the team.",
                "The point is not to fit into a ready-made advertising template, but to find a format where the company genuinely has something to say.",
              ],
              listIntro: "Example:",
              links: [
                {
                  href: "https://www.youtube.com/watch?v=IESsvnPfPtU",
                  label:
                    "Junior, Middle, and Senior — Frontend | One question, three answers #2 | Lviv",
                  external: true,
                },
              ],
            },
            {
              title: "Integration into a relevant episode",
              paragraphs: [
                "A short partner mention in a video where the product, event, or company is naturally connected to the topic.",
                "The text is adapted to the audience, channel tone, and specific episode. I do not read ready-made marketing paragraphs if they sound alien.",
              ],
            },
          ],
        },
        {
          title: "How I work with partner content",
          paragraphs: [
            "I take on cooperation when I see a healthy connection between the partner, the topic, and the people who watch the channel.",
            "I do not disguise advertising as a personal recommendation, take topics far from developers, or read ready-made marketing copy without edits. If an integration damages trust in the channel, I do not take it.",
            "Partner content should feel not like a banner that accidentally landed in the video, but like part of a normal conversation.",
          ],
        },
        {
          title: "What the partner gets",
          paragraphs: [
            "The partner gets access to Ukrainian developers and a format where they can explain a product, event, company, expertise, or hiring approach without press-release intonation.",
            "This content can be used beyond YouTube. It can work in social media, recruiting, communications, content marketing, or employer branding.",
            "Most importantly, the episode does not become an ad break. The editorial approach keeps audience trust and makes the partner's presence part of the conversation instead of a foreign piece in the middle of the video.",
          ],
        },
        {
          title: "When this is not a fit",
          paragraphs: [
            "This is not the right format if you need a simple ad read or approved marketing copy without meaningful edits.",
            "It also will not work if the product, event, or offer has no connection to developers, technology, education, the IT market, or professional growth.",
            "And it is definitely not a fit if I am expected to guarantee a positive review without editorial caution.",
          ],
        },
        {
          id: "contact",
          title: "Discuss cooperation",
          paragraphs: [
            "Write what you want to present: a product, vacancies, an event, an educational project, employer brand, or technical expertise.",
            "I will see whether there is a natural format for it on the channel and suggest a cooperation option.",
          ],
          cta: {
            href: "mailto:hello@babich.dev?subject=YouTube%20cooperation",
            label: "Write about YouTube cooperation",
            external: true,
          },
        },
      ],
    },
    blog: {
      metaTitle: "Blog",
      metaDescription:
        "Serhii Babich's blog about web development, interviews, teams, and technical decisions",
      title: "Blog",
      intro:
        "Here I write about web development, interviews, teams, technical decisions, and anything worth sharing before the thought disappears.",
      thanks: "Thanks for stopping by. Enjoy reading.",
      allPosts: "All posts",
      empty: "There are no published posts yet.",
      yearTitle: (year: number) => `Blog ${year}`,
      yearDescription: (year: number) => `All blog posts from ${year}`,
      yearHeading: (year: number) => `All posts from ${year}`,
      yearEmpty: (year: number) =>
        `There are no published posts from ${year} yet.`,
      monthTitle: (monthName: string, year: number) =>
        `Blog ${monthName} ${year}`,
      monthDescription: (monthName: string, year: number) =>
        `All blog posts from ${monthName} ${year}`,
      monthHeading: (monthName: string, year: number) =>
        `All posts from ${monthName} ${year}`,
      monthEmpty: (monthName: string, year: number) =>
        `There are no published posts from ${monthName} ${year} yet.`,
      dayTitle: (dateName: string) => `Blog | ${dateName}`,
      dayDescription: (dateName: string) => `All blog posts from ${dateName}`,
      dayHeading: (dateName: string) => `All posts from ${dateName}`,
    },
  },
} satisfies Record<Lang, unknown>;
