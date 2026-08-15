"use client";

import { useEffect, useState, type CSSProperties } from "react";

const tgTrial = "https://t.me/m/zBUY8TsdNjYy";

const advantages = [
  ["01", "Мини-группы 4–6 человек", "Достаточно динамики, чтобы не было скучно, и достаточно внимания каждому ученику", "👥"],
  ["02", "Всегда можно спросить", "Вопросы не копятся до следующего урока — я остаюсь на связи и между занятиями", "?"],
  ["03", "Личная проверка", "Я сам проверяю работы, отмечаю ошибки и помогаю разобраться в сложных задачах", "✓"],
  ["04", "План на весь год", "Темы идут в понятном порядке, а прогресс по занятиям, ДЗ и пробникам всегда виден", "▤"],
  ["05", "Своя платформа с ДЗ", "Домашки, разбор каждого задания и понятная статистика прогресса — в одном месте", "⌘"],
  ["06", "Записи каждого занятия", "Можно вернуться к любой теме в течение года и спокойно пересмотреть объяснение", "▶"],
];

const reviews = [
  { name: "Слава", score: "93 балла", text: "Уроки были очень ценными, информативными и, главное, понятными — все эти 93 балла просто так не набирают!" },
  { name: "Аня", score: "85 баллов", text: "Много практики, большая подборка домашек и оперативная проверка — все задания понятно разобраны, прогресс налицо" },
  { name: "Женя", score: "88 баллов", text: "Объяснения понятные, всегда можно уточнить — ещё один большой плюс: подробные видеоразборы домашних заданий" },
];

const faqs = [
  ["Подойдут ли занятия, если я начинаю подготовку почти с нуля?", [
    "Да. Многие ученики приходят с минимальной базой или вообще не сдавали ОГЭ по информатике",
    "На пробном занятии я определю твой текущий уровень и составлю понятный план подготовки до нужного результата. Если у тебя есть компьютер или ноутбук, мы сможем подготовиться на нужные баллы",
  ]],
  ["Как вы формируете группы?", [
    "Я учитываю текущий уровень ученика, желаемый балл и удобное расписание. Благодаря этому в одной группе занимаются ребята с примерно одинаковой подготовкой — никому не приходится постоянно догонять остальных или ждать, пока разберутся другие",
  ]],
  ["Сколько человек занимается в группе?", [
    "В мини-группе занимаются 4–6 учеников. Так сохраняется живая атмосфера и взаимодействие между ребятами, но при этом я успеваю уделить внимание каждому",
    "Для сравнения: у школьного учителя одновременно около 25 учеников, а у меня в 5–6 раз меньше — это позволяет уследить за всеми",
  ]],
  ["Как проходят занятия?", [
    "Занятия проходят онлайн в Zoom с использованием интерактивной доски. Сначала мы разбираем необходимую теорию и примеры, а затем сразу закрепляем материал на практике — я слежу за работой всех учеников и помогаю каждому",
    "Одно занятие длится примерно 1.5–2 часа. Если тема сложная и нужно закончить разбор, иногда можем немного задержаться",
  ]],
  ["Что будет, если ученик пропустит занятие?", [
    "Все занятия записываются. Ученик сможет посмотреть запись, изучить материалы с доски и выполнить домашнее задание",
    "Также остаётся ДЗ с моими авторскими видеоразборами, уровнями и личной проверкой. Если после просмотра останутся вопросы, их всегда можно задать мне лично, а при необходимости провести небольшое индивидуальное занятие",
  ]],
  ["Кто проверяет домашние задания?", [
    "Все домашние задания проверяю я лично. Я вижу ошибки каждого ученика, даю обратную связь и понимаю, каким темам нужно уделить больше внимания на следующих занятиях",
    "К заданиям также доступны мои видеоразборы, поэтому ученик может самостоятельно разобрать ошибку и повторить сложный момент",
  ]],
  ["Что делать, если ученик не понял тему?", [
    "Можно написать мне и задать вопрос вне занятия. Я помогу найти ошибку, объясню непонятный момент другим способом и при необходимости разберу его ещё раз на небольшом индивидуальном занятии",
    "Моя задача — не просто пройти программу, а добиться того, чтобы ученик действительно понял тему и смог самостоятельно решать задания",
  ]],
  ["Как родители узнают об успеваемости ребёнка?", [
    "Каждые две недели я отправляю родителям отчёт об успеваемости. В нём отражаются посещаемость, выполнение домашних заданий, результаты пробников и текущий прогресс",
    "Родителям не приходится самостоятельно контролировать каждое занятие — они регулярно видят реальную картину подготовки",
  ]],
  ["Сколько раз в неделю проходят занятия?", [
    "Обычно занятия проходят один раз в неделю по 1.5–2 часа. При необходимости и наличии подходящей группы можно заниматься два раза в неделю",
    "Точное расписание мы подбираем перед началом обучения",
  ]],
  ["Как проходит бесплатное пробное занятие?", [
    "Пробное занятие проходит индивидуально и длится около 30 минут. На нём я определю текущий уровень ученика, покажу план подготовки до желаемого балла и объясню, как устроены занятия, домашние задания и обратная связь",
    "После пробного ученик получит полезные чек-листы для подготовки и доступ к бесплатному авторскому курсу. Пробное ни к чему не обязывает — оно нужно, чтобы познакомиться и понять, подходит ли тебе мой формат",
  ]],
];

const learningScreens = [
  { src: "/process-plan.png", title: "Весь год разложен по шагам", text: "Темы, даты, посещаемость и ссылки на записи собраны в одном понятном плане", label: "ПЛАН ОБУЧЕНИЯ" },
  { src: "/process-board.png", title: "Каждый работает на своей доске", text: "Я вижу решения всех учеников, отмечаю ошибки и разбираю их прямо во время занятия", label: "ЗАКРЫТАЯ ДОСКА" },
  { src: "/process-stats-redacted.png", title: "Прогресс нельзя потерять из виду", text: "Домашние задания и пробники превращаются в понятную статистику, а не остаются ощущением", label: "КОНТРОЛЬ РЕЗУЛЬТАТА" },
  { src: "/process-course.png", title: "Python с нуля уже внутри", text: "Бесплатный курс прошли более 600 учеников — база по программированию всегда доступна для повторения", label: "БОНУСНЫЙ КУРС" },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <main>
      <div className="noise" aria-hidden="true" />
      <div className="scrollProgress" aria-hidden="true"><i style={{ width: `${progress}%` }} /></div>
      <header className="nav shell">
        <a className="brand" href="#top" aria-label="Артём Александрович — наверх"><span>AA</span><b>АРТЁМ АЛЕКСАНДРОВИЧ</b></a>
        <nav aria-label="Основная навигация">
          <a href="#format">Форматы</a><a href="#results">Результаты</a><a href="#about">Обо мне</a><a href="#reviews">Отзывы</a>
        </nav>
        <div className="navRight"><div className="topSocials"><a href="https://t.me/AA_infa" target="_blank" rel="noreferrer">Telegram</a><a href="https://www.tiktok.com/@aa_infa" target="_blank" rel="noreferrer">TikTok</a></div><a className="navCta" href={tgTrial} target="_blank" rel="noreferrer">Бесплатная диагностика <span>↗</span></a></div>
      </header>

      <section className="hero shell" id="top">
        <div className="heroGlow" />
        <div className="heroCopy">
          <div className="eyebrow"><i /> Подготовка к ЕГЭ по информатике · онлайн</div>
          <h1>Система вместо паники<br /><em>Баллы вместо догадок</em></h1>
          <p className="lead">Живые занятия, личная проверка и понятный маршрут от текущего уровня до уверенной сдачи ЕГЭ</p>
          <div className="heroActions">
            <a className="button primary heroCta" href={tgTrial} target="_blank" rel="noreferrer"><span><small>НАЧАТЬ С ДИАГНОСТИКИ</small>Бесплатное пробное занятие</span><b>↗</b></a>
            <a className="button ghost" href="#format">Посмотреть форматы <span>↓</span></a>
          </div>
          <div className="heroMeta"><span>Диагностика знаний</span><span>Курс по Python в подарок</span><span>Чек-листы подготовки</span></div>
        </div>
        <div className="heroVisual">
          <div className="code codeOne">score = <b>100</b></div>
          <div className="code codeTwo">while not ready:<br />&nbsp;&nbsp;practice()</div>
          <img src="/artem-hero.jpg" alt="Артём Александрович — преподаватель информатики" />
          <div className="scoreCard"><small>СРЕДНИЙ БАЛЛ 2026</small><strong>83.2</strong><span>из 100</span></div>
          <div className="status"><i /> набор открыт</div>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div className="tickerTrack">
          {[0, 1, 2, 3].map((item) => <span key={item}>БЕЗ ЗУБРЁЖКИ <b>✦</b> БЕЗ ЛИШНЕЙ ВОДЫ <b>✦</b> ОТ ТЕОРИИ К ПРАКТИКЕ <b>✦</b> ПОНЯТНЫЕ АЛГОРИТМЫ <b>✦</b> РЕШАЕМ САМИ <b>✦</b> РАЗБИРАЕМ ОШИБКИ <b>✦</b> ДВИГАЕМСЯ К 80+ <b>✦</b></span>)}
        </div>
      </div>

      <section className="stats shell" id="results">
        <div className="sectionTag">[ РЕЗУЛЬТАТЫ // 2026 ]</div>
        <div className="statsGrid">
          <div><strong>83.2</strong><p>средний балл<br />выпускников</p></div>
          <div><strong>98</strong><p>максимальный<br />балл в 2026</p></div>
          <div><strong>400<span>+</span></strong><p>учеников прошли<br />подготовку</p></div>
          <div><strong>600<span>+</span></strong><p>человек прошли<br />курс по Python</p></div>
        </div>
      </section>

      <section className="formats shell" id="format">
        <div className="sectionHead"><div><div className="sectionTag">[ FORMAT_SELECTION ]</div><h2>Выбери свой<br /><em>формат подготовки</em></h2></div><p>Можно начать с бесплатного пробного: определим уровень, обозначим цель и подберём подходящий темп</p></div>
        <div className="priceGrid">
          <article className="priceCard anchor"><div className="priceTop"><span>01 / PERSONAL</span><b>Максимум внимания</b></div><h3>Индивидуально</h3><p>Работа один на один: программа и скорость полностью подстраиваются под тебя</p><ul><li>Персональный план</li><li>Гибкое расписание</li><li>Мгновенная обратная связь</li></ul><div className="price"><strong>5 000 ₽</strong><span>/ час</span></div><a href={tgTrial} target="_blank" rel="noreferrer">Узнать подробнее <span>↗</span></a></article>
          <article className="priceCard featured"><div className="popular">ПОПУЛЯРНЫЙ ФОРМАТ</div><div className="priceTop"><span>02 / MINI GROUP</span><b>Баланс и результат</b></div><h3>Мини-группа</h3><p>Живые занятия в Zoom по 1.5–2 часа — в группе всего 4–6 человек</p><ul><li>Личное внимание каждому ученику</li><li>Своя платформа с ДЗ</li><li>Авторская проверка работ</li></ul><div className="price groupPrice"><span className="oldPrice">12 500 ₽</span><strong>10 000 ₽ <small>/ месяц</small></strong><b>2 500 ₽ за одно занятие</b></div><a href={tgTrial} target="_blank" rel="noreferrer">Узнать подробнее <span>↗</span></a></article>
          <article className="priceCard"><div className="priceTop"><span>03 / COURSE</span><b>В своём темпе</b></div><h3>Онлайн-курс</h3><p>Последовательная программа для самостоятельной подготовки с понятной системой</p><ul><li>Структура по темам ЕГЭ</li><li>Практические задания</li><li>Материалы в одном месте</li></ul><div className="price"><strong>СКОРО</strong></div><a href={tgTrial} target="_blank" rel="noreferrer">Узнать подробнее <span>↗</span></a></article>
        </div>
      </section>

      <section className="system shell">
        <div className="sectionHead"><div><div className="sectionTag">[ SYSTEM_ADVANTAGES ]</div><h2>Не просто уроки<br /><em>Система подготовки</em></h2></div></div>
        <div className="advGrid">{advantages.map(([n,t,d,icon]) => <article key={n}><span>{n}</span><div className="advIcon">{icon}</div><h3>{t}</h3><p>{d}</p></article>)}</div>
      </section>

      <section className="inside shell" id="inside">
        <div className="sectionHead"><div><div className="sectionTag">[ INSIDE_THE_SYSTEM ]</div><h2>Вот что находится<br /><em>внутри подготовки</em></h2></div><p>Не обещания на словах, а реальная рабочая система: занятия, проверка, аналитика, материалы и комьюнити</p></div>
        <div className="screenWall">{learningScreens.map((item, i) => <article className="screenCard" key={item.src} style={{ "--delay": `${i * -0.35}s` } as CSSProperties}><div className="screenImage"><img src={item.src} alt={item.title} loading="lazy" /><span>0{i + 1}</span></div><div className="screenCopy"><small>{item.label}</small><h3>{item.title}</h3><p>{item.text}</p><b>РЕАЛЬНЫЙ МАТЕРИАЛ УЧЕНИКОВ ↗</b></div></article>)}</div>
      </section>

      <section className="about shell" id="about">
        <div className="aboutPhoto"><img src="/artem-about.jpg" alt="Артём за работой" /></div>
        <div className="aboutCopy"><div className="sectionTag">[ ABOUT // TEACHER ]</div><h2>Сам прошёл путь<br />до <em>100 баллов</em></h2><p className="aboutLead">Я Артём — преподаватель информатики и программист — в 2024 году сам сдал ЕГЭ на 100 баллов, поэтому знаю экзамен не только по методичкам</p><div className="facts"><div><span>4 +</span><p>года готовлю<br />к экзаменам</p></div><div><span>100</span><p>баллов<br />на ЕГЭ-2024</p></div></div><ul className="bio"><li>Эксперт ЕГЭ по информатике</li><li>Обучаюсь в КФУ на программной инженерии</li><li>Middle Java-разработчик</li><li>Автор бесплатного курса по программированию с нуля</li></ul><a className="textLink" href="https://t.me/AA_infa" target="_blank" rel="noreferrer">Больше обо мне в Telegram <span>↗</span></a></div>
      </section>

      <section className="reviews shell" id="reviews">
        <div className="sectionHead"><div><div className="sectionTag">[ STUDENT_FEEDBACK ]</div><h2>Результаты, которые<br /><em>говорят сами</em></h2></div><a className="button ghost" href="https://t.me/aa_otzivi" target="_blank" rel="noreferrer">Все отзывы в Telegram ↗</a></div>
        <div className="reviewGrid">{reviews.map((r,i) => <article key={r.name}><div className="reviewTop"><span>0{i+1}</span><div className="stars">★★★★★</div></div><p>«{r.text}»</p><div className="reviewPerson"><i>{r.name[0]}</i><div><strong>{r.name}</strong><small>{r.score}</small></div></div></article>)}</div>
        <div className="externalReviews"><span>Ещё больше реальных отзывов</span><a href="https://www.avito.ru/brands/aainfa" target="_blank" rel="noreferrer">Отзывы на Avito ↗</a></div>
      </section>

      <section className="trial shell">
        <div className="trialOrb" /><div className="trialRing ringOne" /><div className="trialRing ringTwo" /><div className="trialBadge">0 ₽ · БЕЗ ОБЯЗАТЕЛЬСТВ</div><div className="sectionTag">[ FREE_TRIAL_ACCESS ]</div><h2>Начни с бесплатного<br /><em>пробного занятия</em></h2><p>Определим твой уровень, найдём пробелы и составим понятный маршрут подготовки — в подарок курс по Python и чек-листы</p><a className="button light trialButton" href={tgTrial} target="_blank" rel="noreferrer"><span>Забронировать диагностику</span><b>↗</b></a><div className="trialCode">if goal == 90+:<br />&nbsp;&nbsp;start_today()</div><div className="trialNote">30 минут, чтобы понять точку старта<br />и следующий шаг</div>
      </section>

      <section className="faq shell">
        <div className="sectionHead"><div><div className="sectionTag">[ FAQ // COMMON_QUESTIONS ]</div><h2>Частые<br /><em>вопросы</em></h2></div></div>
        <div className="faqList">{faqs.map(([q,a],i) => <article className={openFaq === i ? "open" : ""} key={q}><button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} aria-expanded={openFaq === i}><span>{String(i + 1).padStart(2, "0")}</span><strong>{q}</strong><i>{openFaq === i ? "−" : "+"}</i></button><div><div className="faqAnswer">{a.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></div></article>)}</div>
      </section>

      <footer className="footer shell"><div className="footerTop"><div><div className="brand"><span>AA</span><b>АРТЁМ АЛЕКСАНДРОВИЧ</b></div><p>Системная подготовка к ЕГЭ по информатике<br />с личной проверкой</p></div><div className="footerLinks"><a href="https://t.me/AA_infa" target="_blank" rel="noreferrer">Telegram ↗</a><a href="https://www.tiktok.com/@aa_infa" target="_blank" rel="noreferrer">TikTok ↗</a><a href="https://t.me/aa_otzivi" target="_blank" rel="noreferrer">Отзывы ↗</a></div><a className="button primary" href={tgTrial} target="_blank" rel="noreferrer">Записаться на пробное ↗</a></div><div className="footerBottom"><span>© 2026 Артём Александрович</span><span>ЕГЭ по информатике · Онлайн</span></div></footer>
    </main>
  );
}
