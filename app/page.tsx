"use client";

import { useEffect, useState, type CSSProperties } from "react";

const tgTrial = "https://t.me/aa_infa_bot";

const advantages = [
  ["01", "Записи каждого занятия", "Можно вернуться к любой теме в течение года и спокойно пересмотреть объяснение"],
  ["02", "Своя платформа с ДЗ", "Домашки, разбор каждого задания и понятная статистика прогресса — в одном месте"],
  ["03", "Личная проверка", "Артём сам проверяет работы, отмечает ошибки и помогает разобраться в сложных задачах"],
  ["04", "Мини-группы 4–6 человек", "Достаточно динамики, чтобы не было скучно, и достаточно внимания каждому ученику"],
  ["05", "Всегда можно спросить", "Вопросы не копятся до следующего урока — помощь доступна и между занятиями"],
  ["06", "План на весь год", "Темы идут в понятном порядке, а прогресс по занятиям, ДЗ и пробникам всегда виден"],
];

const reviews = [
  { name: "Слава", score: "93 балла", text: "Уроки были очень ценными, информативными и, главное, понятными — все эти 93 балла просто так не набирают!" },
  { name: "Аня", score: "85 баллов", text: "Много практики, большая подборка домашек и оперативная проверка — все задания понятно разобраны, прогресс налицо" },
  { name: "Женя", score: "88 баллов", text: "Объяснения понятные, всегда можно уточнить — ещё один большой плюс: подробные видеоразборы домашних заданий" },
];

const faqs = [
  ["Сколько человек в группе?", "В мини-группе занимаются 4–6 учеников — так сохраняется командная атмосфера, но внимания хватает каждому"],
  ["Что будет, если пропустить занятие?", "Каждый урок записывается и остаётся у ученика — занятие можно посмотреть в удобное время и задать вопросы Артёму"],
  ["Кто проверяет домашние задания?", "Все домашние задания Артём проверяет лично — к заданиям есть разборы, а ошибки и прогресс фиксируются на платформе"],
  ["Как проходят занятия?", "Полностью онлайн в Zoom — одно занятие длится 1.5–2 часа, расписание подбирается под конкретную группу"],
];

const learningScreens = [
  { src: "/process-plan.png", title: "План на 38 занятий", text: "Темы, даты, посещаемость и записи всегда перед глазами", kind: "wide" },
  { src: "/process-board.png", title: "Закрытая доска группы", text: "Решения каждого ученика и личная проверка прямо во время занятия", kind: "wide" },
  { src: "/process-stats.png", title: "Контроль ДЗ и пробников", text: "Видно не ощущение прогресса, а конкретные цифры", kind: "wide" },
  { src: "/process-checklist.png", title: "Личный маршрут", text: "Чек-лист тем от базы до сложных задач уровня S", kind: "wide" },
  { src: "/process-course.png", title: "Python с нуля", text: "Бесплатный курс уже прошли более 600 учеников", kind: "wide" },
  { src: "/community-results.png", title: "Честная обратная связь", text: "Итоги года, опросы учеников и разбор того, что действительно помогает", kind: "tall" },
  { src: "/community-file.png", title: "Файлы и шпаргалки", text: "Дополнительные материалы остаются под рукой весь год", kind: "tall" },
  { src: "/community-guide.png", title: "Помощь за пределами ЕГЭ", text: "Чек-листы по поступлению и выбору направления", kind: "tall" },
  { src: "/community-tournament.png", title: "Живое сообщество", text: "Турниры, активности и общение вне расписания", kind: "tall" },
  { src: "/community-post.png", title: "Без скучного официоза", text: "Полезный контент на языке, который хочется читать", kind: "tall" },
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
        <div className="navRight"><div className="topSocials"><a href="https://t.me/AA_infa" target="_blank" rel="noreferrer" aria-label="Telegram">TG</a><a href="https://www.tiktok.com/@aa_infa" target="_blank" rel="noreferrer" aria-label="TikTok">TT</a></div><a className="navCta" href={tgTrial} target="_blank" rel="noreferrer">Бесплатная диагностика <span>↗</span></a></div>
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
          <div className="code codeOne">score = <b>98</b></div>
          <div className="code codeTwo">while not ready:<br />&nbsp;&nbsp;practice()</div>
          <img src="/artem-hero.jpg" alt="Артём Александрович — преподаватель информатики" />
          <div className="scoreCard"><small>СРЕДНИЙ БАЛЛ 2026</small><strong>83.2</strong><span>из 100</span></div>
          <div className="status"><i /> набор открыт</div>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div className="tickerTrack">
          <span>ЕГЭ ПО ИНФОРМАТИКЕ <b>✦</b> MINI GROUPS <b>✦</b> PYTHON <b>✦</b> ЛИЧНАЯ ПРОВЕРКА <b>✦</b> ЗАПИСИ ЗАНЯТИЙ <b>✦</b></span>
          <span>ЕГЭ ПО ИНФОРМАТИКЕ <b>✦</b> MINI GROUPS <b>✦</b> PYTHON <b>✦</b> ЛИЧНАЯ ПРОВЕРКА <b>✦</b> ЗАПИСИ ЗАНЯТИЙ <b>✦</b></span>
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
          <article className="priceCard anchor"><div className="priceTop"><span>01 / PERSONAL</span><b>Максимум внимания</b></div><h3>Индивидуально</h3><p>Работа один на один: программа и скорость полностью подстраиваются под тебя</p><ul><li>Персональный план</li><li>Гибкое расписание</li><li>Личная связь с Артёмом</li></ul><div className="price"><strong>5 000 ₽</strong><span>/ час</span></div><a href={tgTrial} target="_blank" rel="noreferrer">Выбрать формат <span>↗</span></a></article>
          <article className="priceCard featured"><div className="popular">ПОПУЛЯРНЫЙ ФОРМАТ</div><div className="priceTop"><span>02 / MINI GROUP</span><b>Баланс и результат</b></div><h3>Мини-группа</h3><p>Живые занятия в Zoom по 1.5–2 часа — в группе всего 4–6 человек</p><ul><li>Запись каждого урока</li><li>Своя платформа с ДЗ</li><li>Личная проверка работ</li></ul><div className="price groupPrice"><span className="oldPrice">12 500 ₽</span><strong>10 000 ₽ <small>/ месяц</small></strong><b>2 500 ₽ за одно занятие</b></div><a href={tgTrial} target="_blank" rel="noreferrer">Попробовать бесплатно <span>↗</span></a></article>
          <article className="priceCard"><div className="priceTop"><span>03 / COURSE</span><b>В своём темпе</b></div><h3>Онлайн-курс</h3><p>Последовательная программа для самостоятельной подготовки с понятной системой</p><ul><li>Структура по темам ЕГЭ</li><li>Практические задания</li><li>Материалы в одном месте</li></ul><div className="price"><strong>4 990 ₽</strong><span>/ доступ к курсу</span></div><a href={tgTrial} target="_blank" rel="noreferrer">Узнать подробнее <span>↗</span></a></article>
        </div>
      </section>

      <section className="system shell">
        <div className="sectionHead"><div><div className="sectionTag">[ SYSTEM_ADVANTAGES ]</div><h2>Не просто уроки<br /><em>Система подготовки</em></h2></div></div>
        <div className="advGrid">{advantages.map(([n,t,d]) => <article key={n}><span>{n}</span><div className="advIcon">{n === "01" ? "▶" : n === "02" ? "⌘" : n === "03" ? "✓" : n === "04" ? "👥" : n === "05" ? "?" : "▤"}</div><h3>{t}</h3><p>{d}</p></article>)}</div>
      </section>

      <section className="inside shell" id="inside">
        <div className="sectionHead"><div><div className="sectionTag">[ INSIDE_THE_SYSTEM ]</div><h2>Вот что находится<br /><em>внутри подготовки</em></h2></div><p>Не обещания на словах, а реальная рабочая система: занятия, проверка, аналитика, материалы и комьюнити</p></div>
        <div className="screenWall">{learningScreens.map((item, i) => <article className={`screenCard ${item.kind}`} key={item.src} style={{ "--delay": `${i * -0.35}s` } as CSSProperties}><div className="screenImage"><img src={item.src} alt={item.title} loading="lazy" /><span>0{i + 1}</span></div><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div>
      </section>

      <section className="about shell" id="about">
        <div className="aboutPhoto"><img src="/artem-about.jpg" alt="Артём за работой" /></div>
        <div className="aboutCopy"><div className="sectionTag">[ ABOUT // TEACHER ]</div><h2>Сам прошёл путь<br />до <em>100 баллов</em></h2><p className="aboutLead">Я Артём — преподаватель информатики и программист — в 2024 году сам сдал ЕГЭ на 100 баллов, поэтому знаю экзамен не только по методичкам</p><div className="facts"><div><span>4 +</span><p>года готовлю<br />к экзаменам</p></div><div><span>100</span><p>баллов<br />на ЕГЭ-2024</p></div></div><ul className="bio"><li>Эксперт ЕГЭ по информатике</li><li>Обучаюсь в КФУ на программной инженерии</li><li>Middle Java-разработчик</li><li>Автор бесплатного курса по программированию с нуля</li></ul><a className="textLink" href="https://t.me/AA_infa" target="_blank" rel="noreferrer">Больше обо мне в Telegram <span>↗</span></a></div>
      </section>

      <section className="reviews shell" id="reviews">
        <div className="sectionHead"><div><div className="sectionTag">[ STUDENT_FEEDBACK ]</div><h2>Результаты, которые<br /><em>говорят сами</em></h2></div><a className="button ghost" href="https://t.me/aa_otzivi" target="_blank" rel="noreferrer">Все отзывы в Telegram ↗</a></div>
        <div className="reviewGrid">{reviews.map((r,i) => <article key={r.name}><div className="reviewTop"><span>0{i+1}</span><div className="stars">★★★★★</div></div><p>«{r.text}»</p><div className="reviewPerson"><i>{r.name[0]}</i><div><strong>{r.name}</strong><small>{r.score}</small></div></div></article>)}</div>
        <div className="externalReviews"><span>Ещё больше реальных отзывов</span><span className="avitoPending">Avito — ссылка обновляется</span></div>
      </section>

      <section className="trial shell">
        <div className="trialOrb" /><div className="trialRing ringOne" /><div className="trialRing ringTwo" /><div className="trialBadge">0 ₽ · БЕЗ ОБЯЗАТЕЛЬСТВ</div><div className="sectionTag">[ FREE_TRIAL_ACCESS ]</div><h2>Начни с бесплатного<br /><em>пробного занятия</em></h2><p>Определим твой уровень, найдём пробелы и составим понятный маршрут подготовки — в подарок курс по Python и чек-листы</p><a className="button light trialButton" href={tgTrial} target="_blank" rel="noreferrer"><span>Забронировать диагностику</span><b>↗</b></a><div className="trialCode">if goal == 90+:<br />&nbsp;&nbsp;start_today()</div><div className="trialNote">15 минут, чтобы понять точку старта<br />и следующий шаг</div>
      </section>

      <section className="faq shell">
        <div className="sectionHead"><div><div className="sectionTag">[ FAQ // COMMON_QUESTIONS ]</div><h2>Частые<br /><em>вопросы</em></h2></div></div>
        <div className="faqList">{faqs.map(([q,a],i) => <article className={openFaq === i ? "open" : ""} key={q}><button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} aria-expanded={openFaq === i}><span>0{i+1}</span><strong>{q}</strong><i>{openFaq === i ? "−" : "+"}</i></button><div><p>{a}</p></div></article>)}</div>
      </section>

      <footer className="footer shell"><div className="footerTop"><div><div className="brand"><span>AA</span><b>АРТЁМ АЛЕКСАНДРОВИЧ</b></div><p>Системная подготовка к ЕГЭ по информатике<br />с личной проверкой</p></div><div className="footerLinks"><a href="https://t.me/AA_infa" target="_blank" rel="noreferrer">Telegram ↗</a><a href="https://www.tiktok.com/@aa_infa" target="_blank" rel="noreferrer">TikTok ↗</a><a href="https://t.me/aa_otzivi" target="_blank" rel="noreferrer">Отзывы ↗</a></div><a className="button primary" href={tgTrial} target="_blank" rel="noreferrer">Записаться на пробное ↗</a></div><div className="footerBottom"><span>© 2026 Артём Александрович</span><span>ЕГЭ по информатике · Онлайн</span></div></footer>
    </main>
  );
}
