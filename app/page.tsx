"use client";

import { useState } from "react";

const tgTrial = "https://t.me/aa_infa_bot";

const advantages = [
  ["01", "Записи каждого занятия", "Можно вернуться к любой теме в течение года и спокойно пересмотреть объяснение."],
  ["02", "Своя платформа с ДЗ", "Домашки, разбор каждого задания и понятная статистика прогресса — в одном месте."],
  ["03", "Личная проверка", "Артём сам проверяет работы, отмечает ошибки и помогает разобраться в сложных задачах."],
  ["04", "Мини-группы 4–6 человек", "Достаточно динамики, чтобы не было скучно, и достаточно внимания каждому ученику."],
  ["05", "Всегда можно спросить", "Вопросы не копятся до следующего урока — помощь доступна и между занятиями."],
  ["06", "План на весь год", "Темы идут в понятном порядке, а прогресс по занятиям, ДЗ и пробникам всегда виден."],
];

const reviews = [
  { name: "Слава", score: "93 балла", text: "Уроки были очень ценными, информативными и, главное, понятными. Все эти 93 балла просто так не набирают!" },
  { name: "Аня", score: "85 баллов", text: "Много практики, большая подборка домашек и оперативная проверка. Все задания понятно разобраны — прогресс налицо." },
  { name: "Женя", score: "88 баллов", text: "Объяснения понятные, всегда можно уточнить. Ещё один большой плюс — подробные видеоразборы домашних заданий." },
];

const faqs = [
  ["Сколько человек в группе?", "В мини-группе занимаются 4–6 учеников. Так сохраняется командная атмосфера, но внимания хватает каждому."],
  ["Что будет, если пропустить занятие?", "Каждый урок записывается. Запись остаётся у ученика, поэтому занятие можно посмотреть в удобное время и задать вопросы Артёму."],
  ["Кто проверяет домашние задания?", "Все домашние задания Артём проверяет лично. К заданиям есть разборы, а ошибки и прогресс фиксируются на платформе."],
  ["Как проходят занятия?", "Полностью онлайн в Zoom. Одно занятие длится 1,5–2 часа, расписание подбирается под конкретную группу."],
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main>
      <div className="noise" aria-hidden="true" />
      <header className="nav shell">
        <a className="brand" href="#top" aria-label="Артём Алексеев — наверх"><span>AA</span><b>АРТЁМ АЛЕКСЕЕВ</b></a>
        <nav aria-label="Основная навигация">
          <a href="#format">Форматы</a><a href="#results">Результаты</a><a href="#about">Обо мне</a><a href="#reviews">Отзывы</a>
        </nav>
        <a className="navCta" href={tgTrial} target="_blank" rel="noreferrer">Записаться бесплатно <span>↗</span></a>
      </header>

      <section className="heroCentered shell" id="top">
        <div className="heroCenterGlow" aria-hidden="true" />
        <div className="heroCenterEyebrow"><i /> Подготовка к ЕГЭ по информатике · онлайн</div>

        <h1 className="heroCenterTitle">
          <span className="titleLeft">ЕГЭ БЕЗ</span>
          <span className="titleRight">ПАНИКИ.</span>
          <em>НА ПОНЯТНОМ.</em>
        </h1>

        <div className="heroPortrait">
          <div className="portraitHalo" aria-hidden="true" />
          <img src="/artem-about.jpg" alt="Артём Алексеев — преподаватель информатики" />
        </div>

        <div className="heroFloat heroFloatScore">
          <small>СРЕДНИЙ БАЛЛ 2026</small>
          <strong>83,2</strong><span> / 100</span>
        </div>
        <div className="heroFloat heroFloatStatus"><i /> НАБОР ОТКРЫТ</div>
        <div className="heroFloat heroFloatCode">score = <b>98</b><br />while not ready:<br />&nbsp;&nbsp;practice()</div>
        <div className="heroFloat heroFloatMini">
          <span>4–6</span>
          <small>человек<br />в группе</small>
        </div>

        <p className="heroCenterLead">Разберём информатику с нуля, выстроим систему и доведём до результата — без безликих вебинаров.</p>
        <div className="heroCenterActions">
          <a className="button primary" href={tgTrial} target="_blank" rel="noreferrer">Записаться на бесплатный урок <span>↗</span></a>
          <a className="heroScroll" href="#results">листай вниз <span>↓</span></a>
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
          <div><strong>83,2</strong><p>средний балл<br />выпускников</p></div>
          <div><strong>98</strong><p>максимальный<br />балл в 2026</p></div>
          <div><strong>400<span>+</span></strong><p>учеников прошли<br />подготовку</p></div>
          <div><strong>600<span>+</span></strong><p>человек прошли<br />курс по Python</p></div>
        </div>
      </section>

      <section className="formats shell" id="format">
        <div className="sectionHead"><div><div className="sectionTag">[ FORMAT_SELECTION ]</div><h2>Выбери свой<br /><em>формат подготовки</em></h2></div><p>Можно начать с бесплатного пробного: определим уровень, обозначим цель и подберём подходящий темп.</p></div>
        <div className="priceGrid">
          <article className="priceCard anchor"><div className="priceTop"><span>01 / PERSONAL</span><b>Максимум внимания</b></div><h3>Индивидуально</h3><p>Работа один на один: программа и скорость полностью подстраиваются под тебя.</p><ul><li>Персональный план</li><li>Гибкое расписание</li><li>Личная связь с Артёмом</li></ul><div className="price"><strong>5 000 ₽</strong><span>/ час</span></div><a href={tgTrial} target="_blank" rel="noreferrer">Выбрать формат <span>↗</span></a></article>
          <article className="priceCard featured"><div className="popular">ПОПУЛЯРНЫЙ ФОРМАТ</div><div className="priceTop"><span>02 / MINI GROUP</span><b>Баланс и результат</b></div><h3>Мини-группа</h3><p>Живые занятия в Zoom по 1,5–2 часа. В группе всего 4–6 человек.</p><ul><li>Запись каждого урока</li><li>Своя платформа с ДЗ</li><li>Личная проверка работ</li></ul><div className="price"><strong>Стоимость</strong><span>подберём после диагностики</span></div><a href={tgTrial} target="_blank" rel="noreferrer">На бесплатный урок <span>↗</span></a></article>
          <article className="priceCard"><div className="priceTop"><span>03 / COURSE</span><b>В своём темпе</b></div><h3>Онлайн-курс</h3><p>Последовательная программа для самостоятельной подготовки с понятной системой.</p><ul><li>Структура по темам ЕГЭ</li><li>Практические задания</li><li>Материалы в одном месте</li></ul><div className="price"><strong>4 990 ₽</strong><span>/ доступ к курсу</span></div><a href={tgTrial} target="_blank" rel="noreferrer">Узнать подробнее <span>↗</span></a></article>
        </div>
      </section>

      <section className="system shell">
        <div className="sectionHead"><div><div className="sectionTag">[ SYSTEM_ADVANTAGES ]</div><h2>Не просто уроки.<br /><em>Система подготовки.</em></h2></div></div>
        <div className="advGrid">{advantages.map(([n,t,d]) => <article key={n}><span>{n}</span><div className="advIcon">{n === "01" ? "▶" : n === "02" ? "⌘" : n === "03" ? "✓" : n === "04" ? "••" : n === "05" ? "↗" : "◎"}</div><h3>{t}</h3><p>{d}</p></article>)}</div>
      </section>

      <section className="about shell" id="about">
        <div className="aboutPhoto"><img src="/artem-about.jpg" alt="Артём за работой" /><div className="photoLabel">ARTEM_ALEKSEEV.JPG</div></div>
        <div className="aboutCopy"><div className="sectionTag">[ ABOUT // TEACHER ]</div><h2>Сам прошёл путь<br />до <em>100 баллов</em></h2><p className="aboutLead">Я Артём — преподаватель информатики и программист. В 2024 году сам сдал ЕГЭ на 100 баллов, поэтому знаю экзамен не только по методичкам.</p><div className="facts"><div><span>04+</span><p>года готовлю<br />к экзаменам</p></div><div><span>100</span><p>баллов<br />на ЕГЭ-2024</p></div></div><ul className="bio"><li>Эксперт ЕГЭ по информатике</li><li>Обучаюсь в КФУ на программной инженерии</li><li>Middle Java-разработчик</li><li>Автор бесплатного курса по программированию с нуля</li></ul><a className="textLink" href="https://t.me/AA_infa" target="_blank" rel="noreferrer">Больше обо мне в Telegram <span>↗</span></a></div>
      </section>

      <section className="reviews shell" id="reviews">
        <div className="sectionHead"><div><div className="sectionTag">[ STUDENT_FEEDBACK ]</div><h2>Результаты, которые<br /><em>говорят сами</em></h2></div><a className="button ghost" href="https://t.me/aa_otzivi" target="_blank" rel="noreferrer">Все отзывы в Telegram ↗</a></div>
        <div className="reviewGrid">{reviews.map((r,i) => <article key={r.name}><div className="reviewTop"><span>0{i+1}</span><div className="stars">★★★★★</div></div><p>«{r.text}»</p><div className="reviewPerson"><i>{r.name[0]}</i><div><strong>{r.name}</strong><small>{r.score}</small></div></div></article>)}</div>
        <div className="externalReviews"><span>Ещё больше реальных отзывов</span><a href="https://www.avito.ru/brands/36d672809caf25a5ca7ab5d00905abcf" target="_blank" rel="noreferrer">Отзывы на Avito ↗</a></div>
      </section>

      <section className="trial shell">
        <div className="trialOrb" /><div className="sectionTag">[ FREE_TRIAL_ACCESS ]</div><h2>Начни с бесплатного<br /><em>пробного занятия</em></h2><p>Определим твой уровень, найдём пробелы и составим понятный маршрут подготовки. В подарок — курс по Python и чек-листы.</p><a className="button light" href={tgTrial} target="_blank" rel="noreferrer">Записаться бесплатно <span>↗</span></a><div className="trialCode">if goal == 90+:<br />&nbsp;&nbsp;start_today()</div>
      </section>

      <section className="faq shell">
        <div className="sectionHead"><div><div className="sectionTag">[ FAQ // COMMON_QUESTIONS ]</div><h2>Частые<br /><em>вопросы</em></h2></div></div>
        <div className="faqList">{faqs.map(([q,a],i) => <article className={openFaq === i ? "open" : ""} key={q}><button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} aria-expanded={openFaq === i}><span>0{i+1}</span><strong>{q}</strong><i>{openFaq === i ? "−" : "+"}</i></button><div><p>{a}</p></div></article>)}</div>
      </section>

      <footer className="footer shell"><div className="footerTop"><div><div className="brand"><span>AA</span><b>АРТЁМ АЛЕКСЕЕВ</b></div><p>Подготовка к ЕГЭ по информатике<br />на понятном языке.</p></div><div className="footerLinks"><a href="https://t.me/AA_infa" target="_blank" rel="noreferrer">Telegram ↗</a><a href="https://www.tiktok.com/@aa_infa" target="_blank" rel="noreferrer">TikTok ↗</a><a href="https://t.me/aa_otzivi" target="_blank" rel="noreferrer">Отзывы ↗</a></div><a className="button primary" href={tgTrial} target="_blank" rel="noreferrer">Записаться на пробное ↗</a></div><div className="footerBottom"><span>© 2026 Артём Алексеев</span><span>ЕГЭ по информатике · Онлайн</span></div></footer>
    </main>
  );
}
