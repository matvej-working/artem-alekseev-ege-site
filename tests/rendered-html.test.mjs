import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders the Artem Alexandrovich landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Артём Александрович/);
  assert.match(html, /83\.2/);
  assert.match(html, /10 000 ₽/);
  assert.match(html, /12 500 ₽/);
  assert.match(html, /2 500 ₽ за одно занятие/);
  assert.match(html, /Вот что находится/);
  assert.match(html, /process-plan\.png/);
  assert.match(html, /process-board\.png/);
  assert.match(html, /process-stats-redacted\.png/);
  assert.match(html, /process-course\.png/);
  assert.match(html, /og\.png/);
  assert.doesNotMatch(html, /Артём Алексеев/);
  assert.doesNotMatch(html, /83,2/);
  assert.doesNotMatch(html, /1,5–2/);
  assert.match(html, /score = <b>100/);
  assert.match(html, /Мгновенная обратная связь/);
  assert.match(html, /Личное внимание каждому ученику/);
  assert.match(html, /Авторская проверка работ/);
  assert.match(html, /СКОРО/);
  assert.match(html, /30 минут/);
  assert.doesNotMatch(html, /Личная связь с Артёмом/);
  assert.doesNotMatch(html, /Артём сам проверяет/);
});

test("keeps core conversion links available", async () => {
  const html = await (await render()).text();
  assert.match(html, /https:\/\/t\.me\/m\/zBUY8TsdNjYy/);
  assert.match(html, /https:\/\/t\.me\/AA_infa/);
  assert.match(html, /https:\/\/www\.tiktok\.com\/@aa_infa/);
  assert.match(html, /https:\/\/t\.me\/aa_otzivi/);
  assert.match(html, /https:\/\/www\.avito\.ru\/brands\/aainfa/);
  assert.match(html, />Telegram</);
  assert.match(html, />TikTok</);
  assert.match(html, /Бесплатное пробное занятие/);
});
