/* Aula CHS — aplicación de estudio y tests para la oposición de la Confederación Hidrográfica del Segura.
   Sin dependencias. El progreso se guarda en el navegador (localStorage). */
(function () {
  "use strict";

  const T = window.TEMARIO;
  const STORE_KEY = "aulachs:v1";
  const LETTERS = ["A", "B", "C", "D", "E", "F"];
  const $main = document.getElementById("app");

  // ─────────────────────────── Persistencia ───────────────────────────
  function emptyState() { return { stats: {}, history: [], custom: [] }; }
  function load() {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      if (!raw) return emptyState();
      const s = JSON.parse(raw);
      return { stats: s.stats || {}, history: s.history || [], custom: s.custom || [] };
    } catch (e) { return emptyState(); }
  }
  let state = load();
  function save() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (e) { /* almacenamiento no disponible */ }
  }

  // ─────────────────────────── Utilidades ───────────────────────────
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const shuffle = (arr) => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const pct = (a, b) => (b ? Math.round((a / b) * 100) : 0);
  const fmt1 = (n) => n.toLocaleString("es-ES", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const fmtTime = (s) => { s = Math.max(0, Math.round(s)); const m = Math.floor(s / 60); return String(m).padStart(2, "0") + ":" + String(s % 60).padStart(2, "0"); };
  const fmtDate = (ts) => new Date(ts).toLocaleString("es-ES", { day: "2-digit", month: "2-digit", year: "2-digit", hour: "2-digit", minute: "2-digit" });
  const gaugeClass = (p) => (p >= 70 ? "ok" : p >= 50 ? "mid" : "bad");

  function toast(msg) {
    const old = document.querySelector(".toast"); if (old) old.remove();
    const el = document.createElement("div"); el.className = "toast"; el.setAttribute("role", "status"); el.textContent = msg;
    document.body.appendChild(el); setTimeout(() => el.remove(), 2600);
  }

  // ─────────────────────────── Banco de preguntas ───────────────────────────
  const temaById = {}; T.temas.forEach((t, i) => { t.n = i + 1; temaById[t.id] = t; });

  function allQuestions() {
    const out = [];
    T.temas.forEach((t) => t.preguntas.forEach((q, i) => out.push({ id: t.id + "-" + (i + 1), tema: t.id, p: q[0], o: q[1], e: q[2] || "" })));
    state.custom.forEach((q) => { if (temaById[q.tema]) out.push({ id: q.id, tema: q.tema, p: q.p, o: q.o, e: q.e || "", propia: true }); });
    return out;
  }
  const questionsOf = (temaId) => allQuestions().filter((q) => q.tema === temaId);

  function temaStats(temaId) {
    const qs = questionsOf(temaId);
    let seen = 0, ok = 0, ko = 0, dominadas = 0;
    qs.forEach((q) => { const s = state.stats[q.id]; if (s) { seen++; ok += s.ok; ko += s.ko; if (s.last) dominadas++; } });
    return { total: qs.length, seen, ok, ko, dominadas, acierto: pct(ok, ok + ko), cobertura: pct(dominadas, qs.length) };
  }
  const failedQuestions = () => allQuestions().filter((q) => state.stats[q.id] && state.stats[q.id].last === false);

  // ─────────────────────────── Sesión de test ───────────────────────────
  let session = null;
  let timerId = null;

  function startTest(opts) {
    let qs = opts.questions.slice();
    if (opts.limit && qs.length > opts.limit) qs = shuffle(qs).slice(0, opts.limit); else qs = shuffle(qs);
    if (!qs.length) { toast("No hay preguntas para ese test"); return; }
    session = {
      titulo: opts.titulo, mode: opts.mode, penalty: opts.penalty || 0, back: opts.back || "temario",
      limitSecs: opts.minutes ? opts.minutes * 60 : 0, start: Date.now(), current: 0, finished: false, confirm: false,
      items: qs.map((q) => {
        const order = shuffle(q.o.map((_, i) => i));
        return { q, order, correct: order.indexOf(0), answer: null, flagged: false };
      })
    };
    go("test");
  }

  function answerCurrent(idx) {
    const it = session.items[session.current];
    if (session.mode === "estudio") {
      if (it.answer !== null) return;
      it.answer = idx;
      recordAnswer(it);
    } else {
      it.answer = it.answer === idx ? null : idx;
    }
    renderTest();
  }

  function recordAnswer(it) {
    const s = state.stats[it.q.id] || { ok: 0, ko: 0, last: null, t: 0 };
    const right = it.answer === it.correct;
    if (right) s.ok++; else s.ko++;
    s.last = right; s.t = Date.now();
    state.stats[it.q.id] = s; save();
  }

  function finishTest() {
    if (!session || session.finished) return;
    clearInterval(timerId); timerId = null;
    session.finished = true;
    session.secs = Math.round((Date.now() - session.start) / 1000);
    if (session.mode === "examen") session.items.forEach((it) => { if (it.answer !== null) recordAnswer(it); });
    const r = result(session);
    state.history.unshift({ ts: Date.now(), titulo: session.titulo, mode: session.mode, n: r.n, ok: r.ok, ko: r.ko, blank: r.blank, nota: r.nota, secs: session.secs });
    state.history = state.history.slice(0, 200);
    save();
    go("resultado");
  }

  function result(s) {
    const n = s.items.length;
    const ok = s.items.filter((it) => it.answer !== null && it.answer === it.correct).length;
    const blank = s.items.filter((it) => it.answer === null).length;
    const ko = n - ok - blank;
    const puntos = ok - ko * s.penalty;
    const nota = Math.max(0, (puntos / n) * 10);
    return { n, ok, ko, blank, puntos, nota };
  }

  // ─────────────────────────── Router ───────────────────────────
  function go(view) { if (location.hash === "#" + view) render(); else location.hash = view; }
  window.addEventListener("hashchange", render);

  function render() {
    const h = (location.hash || "#inicio").slice(1);
    if (h !== "test") { clearInterval(timerId); timerId = null; }
    if (session && !session.finished && h !== "test") { /* test abandonado: se conserva para poder volver */ }
    document.querySelectorAll(".nav a").forEach((a) => {
      const v = a.getAttribute("href").slice(1);
      a.toggleAttribute("aria-current", h === v || (v === "temario" && h.startsWith("tema-")));
      if (a.hasAttribute("aria-current")) a.setAttribute("aria-current", "page");
    });
    if (h.startsWith("tema-") && temaById[h.slice(5)]) return renderTema(h.slice(5));
    switch (h) {
      case "temario": return renderTemario();
      case "simulacro": return renderSimulacro();
      case "fallos": return renderFallos();
      case "progreso": return renderProgreso();
      case "mis-preguntas": return renderPropias();
      case "test": return session && !session.finished ? renderTest() : go("inicio");
      case "resultado": return session && session.finished ? renderResultado() : go("inicio");
      default: return renderInicio();
    }
  }

  function setView(html) { $main.innerHTML = html; window.scrollTo(0, 0); }

  // ─────────────────────────── Vistas ───────────────────────────
  function renderInicio() {
    const qs = allQuestions();
    const answered = Object.values(state.stats);
    const ok = answered.reduce((a, s) => a + s.ok, 0), ko = answered.reduce((a, s) => a + s.ko, 0);
    const dominadas = answered.filter((s) => s.last).length;
    const fallos = failedQuestions().length;
    const pending = session && !session.finished;
    const last = state.history[0];

    const weak = T.temas.map((t) => ({ t, s: temaStats(t.id) })).filter((x) => x.s.seen > 0).sort((a, b) => a.s.acierto - b.s.acierto).slice(0, 3);

    setView(`
      <section class="stack">
        <span class="eyebrow">Confederación Hidrográfica del Segura · Preparación de oposiciones</span>
        <h1>Estudia el temario y practica con tests tema a tema</h1>
        <p class="lead">${T.temas.length} temas en ${T.bloques.length} bloques y ${qs.length} preguntas con su explicación. Tu progreso se guarda en este navegador.</p>
        <div class="row">
          ${pending ? `<a class="btn btn-ochre" href="#test">Continuar test: ${esc(session.titulo)}</a>` : ""}
          <button class="btn btn-primary" id="quick">Test rápido · 10 preguntas</button>
          <a class="btn" href="#simulacro">Simulacro de examen</a>
          ${fallos ? `<a class="btn" href="#fallos">Repasar ${fallos} fallos</a>` : ""}
        </div>
      </section>

      <section class="kpis">
        <div class="kpi"><div class="value">${pct(dominadas, qs.length)}<small>%</small></div><div class="label">Temario dominado (${dominadas}/${qs.length})</div></div>
        <div class="kpi"><div class="value">${pct(ok, ok + ko)}<small>%</small></div><div class="label">Acierto global</div></div>
        <div class="kpi"><div class="value">${state.history.length}</div><div class="label">Tests realizados</div></div>
        <div class="kpi"><div class="value">${last ? fmt1(last.nota) : "—"}</div><div class="label">Nota del último test</div></div>
      </section>

      ${weak.length ? `
      <section class="stack">
        <h2>Temas a reforzar</h2>
        <div class="grid">${weak.map(({ t, s }) => `
          <a class="panel-flat" href="#tema-${t.id}" style="text-decoration:none;color:inherit;display:flex;flex-direction:column;gap:8px">
            <span class="eyebrow">Tema ${t.n}</span><strong>${esc(t.titulo)}</strong>
            <div class="gauge ${gaugeClass(s.acierto)}"><span style="width:${s.acierto}%"></span></div>
            <span class="muted" style="font-size:.88rem">${s.acierto}% de acierto en ${s.ok + s.ko} respuestas</span>
          </a>`).join("")}</div>
      </section>` : ""}

      <section class="stack">
        <div class="row" style="justify-content:space-between"><h2>Bloques del temario</h2><a href="#temario">Ver todos los temas</a></div>
        <div class="grid">${T.bloques.map((b) => {
          const temas = T.temas.filter((t) => t.bloque === b.id);
          const st = temas.map((t) => temaStats(t.id));
          const tot = st.reduce((a, s) => a + s.total, 0), dom = st.reduce((a, s) => a + s.dominadas, 0);
          return `<div class="panel-flat stack" style="gap:8px">
            <span class="eyebrow">Bloque ${b.id.slice(1)} · ${temas.length} temas</span>
            <strong>${esc(b.nombre)}</strong>
            <div class="gauge"><span style="width:${pct(dom, tot)}%"></span></div>
            <span class="muted num" style="font-size:.85rem">${dom}/${tot} preguntas dominadas</span>
          </div>`;
        }).join("")}</div>
      </section>
    `);
    document.getElementById("quick").onclick = () => startTest({ questions: qs, limit: 10, mode: "estudio", titulo: "Test rápido", back: "inicio" });
  }

  function renderTemario() {
    setView(`
      <section class="stack">
        <span class="eyebrow">Temario</span>
        <h1>Temas por bloque</h1>
        <p class="lead">Abre un tema para leer su resumen y hacer el test. La barra indica el porcentaje de preguntas del tema que respondiste bien la última vez.</p>
      </section>
      ${T.bloques.map((b) => `
        <section class="bloque">
          <div class="bloque-head"><span class="eyebrow">Bloque ${b.id.slice(1)}</span><h2>${esc(b.nombre)}</h2></div>
          ${T.temas.filter((t) => t.bloque === b.id).map((t) => {
            const s = temaStats(t.id);
            return `<a class="tema-row" href="#tema-${t.id}">
              <span class="tema-num">${String(t.n).padStart(2, "0")}</span>
              <div><h3>${esc(t.titulo)}</h3><div class="meta">${esc(t.norma)}</div>
                <div class="gauge ${s.seen ? gaugeClass(s.cobertura) : ""}"><span style="width:${s.cobertura}%"></span></div></div>
              <span class="score chip ${s.seen ? gaugeClass(s.acierto).replace("bad", "ko") : ""}">${s.seen ? s.acierto + "% acierto" : s.total + " preguntas"}</span>
            </a>`;
          }).join("")}
        </section>`).join("")}
    `);
  }

  function renderTema(id) {
    const t = temaById[id];
    const qs = questionsOf(id);
    const s = temaStats(id);
    const fallos = qs.filter((q) => state.stats[q.id] && state.stats[q.id].last === false);
    const bloque = T.bloques.find((b) => b.id === t.bloque);
    const idx = T.temas.indexOf(t);
    const prev = T.temas[idx - 1], next = T.temas[idx + 1];
    setView(`
      <section class="stack">
        <a href="#temario" class="muted" style="font-size:.92rem">← Temario</a>
        <span class="eyebrow">Tema ${t.n} · ${esc(bloque.nombre)}</span>
        <h1>${esc(t.titulo)}</h1>
        <p class="muted">${esc(t.norma)}</p>
      </section>

      <section class="panel stack">
        <div class="row" style="justify-content:space-between">
          <h2>Practicar</h2>
          <span class="chip accent num">${qs.length} preguntas</span>
        </div>
        <div class="kpis">
          <div class="kpi"><div class="value">${s.cobertura}%</div><div class="label">Dominado (${s.dominadas}/${s.total})</div></div>
          <div class="kpi"><div class="value">${s.seen ? s.acierto + "%" : "—"}</div><div class="label">Acierto histórico</div></div>
          <div class="kpi"><div class="value">${fallos.length}</div><div class="label">Pendientes de repaso</div></div>
        </div>
        <div class="row">
          <button class="btn btn-primary" id="estudio">Modo estudio</button>
          <button class="btn" id="examen">Modo examen (cronometrado)</button>
          <button class="btn" id="rfallos" ${fallos.length ? "" : "disabled"}>Solo falladas (${fallos.length})</button>
        </div>
        <p class="muted" style="font-size:.9rem">Modo estudio: ves la respuesta correcta y la explicación al momento. Modo examen: 1 minuto por pregunta, penalización de 1/3 por error y corrección al entregar.</p>
      </section>

      <section class="stack">
        <h2>Ideas clave</h2>
        <ul class="resumen">${t.resumen.map((r) => `<li>${esc(r)}</li>`).join("")}</ul>
      </section>

      <nav class="row" style="justify-content:space-between">
        ${prev ? `<a class="btn btn-ghost" href="#tema-${prev.id}">← Tema ${prev.n}</a>` : "<span></span>"}
        ${next ? `<a class="btn btn-ghost" href="#tema-${next.id}">Tema ${next.n} →</a>` : ""}
      </nav>
    `);
    const titulo = "Tema " + t.n + ": " + t.titulo;
    document.getElementById("estudio").onclick = () => startTest({ questions: qs, mode: "estudio", titulo, back: "tema-" + id });
    document.getElementById("examen").onclick = () => startTest({ questions: qs, mode: "examen", minutes: qs.length, penalty: 1 / 3, titulo, back: "tema-" + id });
    document.getElementById("rfallos").onclick = () => startTest({ questions: fallos, mode: "estudio", titulo: titulo + " (falladas)", back: "tema-" + id });
  }

  function renderSimulacro() {
    const total = allQuestions().length;
    setView(`
      <section class="stack">
        <span class="eyebrow">Simulacro</span>
        <h1>Simulacro de examen</h1>
        <p class="lead">Preguntas al azar de los temas que elijas, con tiempo límite y penalización por error, como en el ejercicio tipo test.</p>
      </section>
      <form class="panel stack" id="simform">
        <div class="form-grid">
          <div class="field"><label for="sim-n">Número de preguntas</label>
            <select id="sim-n"><option value="10">10</option><option value="25">25</option><option value="50" selected>50</option><option value="100">100</option><option value="0">Todas (${total})</option></select></div>
          <div class="field"><label for="sim-min">Tiempo</label>
            <select id="sim-min"><option value="1">1 minuto por pregunta</option><option value="0.75">45 segundos por pregunta</option><option value="0">Sin límite</option></select></div>
          <div class="field"><label for="sim-pen">Penalización por error</label>
            <select id="sim-pen"><option value="0.3333333333">Resta 1/3 de acierto</option><option value="0.25">Resta 1/4 de acierto</option><option value="0">Sin penalización</option></select></div>
        </div>
        <div class="stack" style="gap:8px">
          <div class="row" style="justify-content:space-between"><label>Temas incluidos</label>
            <span class="row"><button type="button" class="btn btn-sm btn-ghost" id="all">Todos</button><button type="button" class="btn btn-sm btn-ghost" id="none">Ninguno</button></span></div>
          ${T.bloques.map((b) => `
            <fieldset class="panel-flat stack" style="gap:6px;margin:0">
              <legend class="eyebrow" style="padding:0 6px">Bloque ${b.id.slice(1)} · ${esc(b.nombre)}</legend>
              ${T.temas.filter((t) => t.bloque === b.id).map((t) => `
                <label class="check"><input type="checkbox" id="sim-${t.id}" value="${t.id}" checked> <span>${t.n}. ${esc(t.titulo)} <span class="muted num">(${questionsOf(t.id).length})</span></span></label>`).join("")}
            </fieldset>`).join("")}
        </div>
        <div><button class="btn btn-primary" type="submit">Empezar simulacro</button></div>
      </form>
    `);
    const boxes = () => [...document.querySelectorAll('#simform input[type="checkbox"]')];
    document.getElementById("all").onclick = () => boxes().forEach((b) => (b.checked = true));
    document.getElementById("none").onclick = () => boxes().forEach((b) => (b.checked = false));
    document.getElementById("simform").addEventListener("submit", (ev) => {
      ev.preventDefault();
      const temas = boxes().filter((b) => b.checked).map((b) => b.value);
      if (!temas.length) { toast("Elige al menos un tema"); return; }
      const qs = allQuestions().filter((q) => temas.includes(q.tema));
      const n = parseInt(document.getElementById("sim-n").value, 10) || qs.length;
      const perQ = parseFloat(document.getElementById("sim-min").value);
      const real = Math.min(n, qs.length);
      startTest({ questions: qs, limit: n, mode: "examen", minutes: perQ ? Math.ceil(real * perQ) : 0, penalty: parseFloat(document.getElementById("sim-pen").value), titulo: "Simulacro (" + real + " preguntas)", back: "simulacro" });
    });
  }

  function renderTest() {
    const s = session;
    const it = s.items[s.current];
    const answeredCount = s.items.filter((x) => x.answer !== null).length;
    const revealed = s.mode === "estudio" && it.answer !== null;
    const tema = temaById[it.q.tema];
    const isLast = s.current === s.items.length - 1;

    $main.innerHTML = `
      <section class="stack">
        <div class="row" style="justify-content:space-between">
          <span class="eyebrow">${esc(s.titulo)} · ${s.mode === "estudio" ? "Modo estudio" : "Modo examen"}</span>
          <a href="#${esc(s.back)}" class="muted" style="font-size:.9rem">Salir (se guarda)</a>
        </div>
        <div class="test-head">
          <span class="num"><strong>${s.current + 1}</strong> / ${s.items.length}</span>
          <div class="gauge"><span style="width:${pct(answeredCount, s.items.length)}%"></span></div>
          ${s.limitSecs ? `<span class="timer" id="timer">--:--</span>` : ""}
        </div>
      </section>

      <section class="panel stack">
        <span class="chip wrap">Tema ${tema.n} · ${esc(tema.titulo)}${it.q.propia ? " · pregunta propia" : ""}</span>
        <p class="question">${esc(it.q.p)}</p>
        <ol class="options">
          ${it.order.map((orig, i) => {
            let cls = "";
            if (revealed) { if (i === it.correct) cls = "correct"; else if (i === it.answer) cls = "wrong"; }
            else if (it.answer === i) cls = "selected";
            return `<li><button class="option ${cls}" data-i="${i}" ${revealed ? "disabled" : ""}><span class="letter">${LETTERS[i]}</span><span>${esc(it.q.o[orig])}</span></button></li>`;
          }).join("")}
        </ol>
        ${revealed ? `<div class="explain"><strong>${it.answer === it.correct ? "Correcto" : "Incorrecto · la respuesta es la " + LETTERS[it.correct]}</strong>${esc(it.q.e || "Sin explicación adicional.")}</div>` : ""}
        <div class="row" style="justify-content:space-between">
          <div class="row">
            ${s.mode === "examen" ? `<button class="btn btn-ghost btn-sm" id="prev" ${s.current === 0 ? "disabled" : ""}>← Anterior</button>
              <button class="btn btn-ghost btn-sm" id="flag">${it.flagged ? "Quitar marca" : "Marcar para revisar"}</button>` : ""}
          </div>
          <div class="row">
            ${s.mode === "examen"
              ? (isLast ? `<button class="btn btn-primary" id="finish">Entregar</button>` : `<button class="btn btn-primary" id="next">Siguiente →</button>`)
              : (revealed ? (isLast ? `<button class="btn btn-primary" id="finish">Ver resultado</button>` : `<button class="btn btn-primary" id="next">Siguiente →</button>`) : `<button class="btn btn-ghost btn-sm" id="skip">${isLast ? "Terminar" : "Saltar"}</button>`)}
          </div>
        </div>
      </section>

      ${s.mode === "examen" ? `
      <section class="stack">
        <div class="row" style="justify-content:space-between">
          <h3>Hoja de respuestas</h3>
          <span class="muted num" style="font-size:.9rem">${answeredCount} respondidas · ${s.items.length - answeredCount} en blanco</span>
        </div>
        <div class="qnav">${s.items.map((x, i) => `<button data-go="${i}" class="${x.answer !== null ? "answered" : ""} ${x.flagged ? "flagged" : ""} ${i === s.current ? "current" : ""}" aria-label="Pregunta ${i + 1}">${i + 1}</button>`).join("")}</div>
        ${s.confirm ? `
          <div class="panel-flat stack" style="border-color:var(--ochre)">
            <strong>${s.items.length - answeredCount ? "Tienes " + (s.items.length - answeredCount) + " preguntas en blanco." : "Has respondido todas las preguntas."} ¿Entregar el examen?</strong>
            <div class="row"><button class="btn btn-primary" id="confirm-yes">Entregar y corregir</button><button class="btn" id="confirm-no">Seguir revisando</button></div>
          </div>` : `<div><button class="btn" id="finish2">Entregar examen</button></div>`}
      </section>` : ""}
    `;

    $main.querySelectorAll(".option").forEach((b) => (b.onclick = () => answerCurrent(parseInt(b.dataset.i, 10))));
    const on = (id, fn) => { const el = document.getElementById(id); if (el) el.onclick = fn; };
    on("next", () => { s.current++; renderTest(); window.scrollTo(0, 0); });
    on("prev", () => { s.current--; renderTest(); });
    on("skip", () => { if (isLast) finishTest(); else { s.current++; renderTest(); } });
    on("flag", () => { it.flagged = !it.flagged; renderTest(); });
    on("finish", () => { if (s.mode === "examen") { s.confirm = true; renderTest(); } else finishTest(); });
    on("finish2", () => { s.confirm = true; renderTest(); });
    on("confirm-yes", finishTest);
    on("confirm-no", () => { s.confirm = false; renderTest(); });
    $main.querySelectorAll("[data-go]").forEach((b) => (b.onclick = () => { s.current = parseInt(b.dataset.go, 10); renderTest(); }));

    if (s.limitSecs && !timerId) timerId = setInterval(tick, 500);
    tick();
  }

  function tick() {
    if (!session || !session.limitSecs || session.finished) return;
    const left = session.limitSecs - (Date.now() - session.start) / 1000;
    const el = document.getElementById("timer");
    if (el) { el.textContent = fmtTime(left); el.classList.toggle("warn", left < 60); }
    if (left <= 0) { toast("Tiempo agotado"); finishTest(); }
  }

  document.addEventListener("keydown", (ev) => {
    if (location.hash !== "#test" || !session || session.finished) return;
    if (ev.target.matches("input, textarea, select")) return;
    const k = ev.key.toUpperCase();
    const i = "ABCD".indexOf(k) >= 0 ? "ABCD".indexOf(k) : "1234".indexOf(k);
    if (i >= 0 && i < session.items[session.current].order.length) { answerCurrent(i); ev.preventDefault(); }
    else if (ev.key === "Enter" || ev.key === "ArrowRight") { const b = document.getElementById("next") || document.getElementById("finish"); if (b) { b.click(); ev.preventDefault(); } }
    else if (ev.key === "ArrowLeft") { const b = document.getElementById("prev"); if (b && !b.disabled) b.click(); }
  });

  let reviewFilter = "todas";
  function renderResultado() {
    const s = session;
    const r = result(s);
    const aprobado = r.nota >= 5;
    const fails = s.items.filter((it) => it.answer !== null && it.answer !== it.correct);
    const list = s.items.map((it, i) => ({ it, i })).filter(({ it }) =>
      reviewFilter === "todas" ? true : reviewFilter === "falladas" ? it.answer !== null && it.answer !== it.correct : it.answer === null);

    setView(`
      <section class="stack">
        <span class="eyebrow">Resultado · ${esc(s.titulo)}</span>
        <div class="row" style="align-items:flex-end;gap:18px">
          <div class="score-big" style="color:var(--${aprobado ? "ok" : "ko"})">${fmt1(r.nota)}</div>
          <div class="stack" style="gap:4px">
            <span class="chip ${aprobado ? "ok" : "ko"}">${aprobado ? "Aprobado" : "Por debajo de 5"}</span>
            <span class="muted" style="font-size:.9rem">Nota sobre 10 · ${fmtTime(s.secs)} empleados</span>
          </div>
        </div>
      </section>
      <section class="kpis">
        <div class="kpi"><div class="value" style="color:var(--ok)">${r.ok}</div><div class="label">Aciertos</div></div>
        <div class="kpi"><div class="value" style="color:var(--ko)">${r.ko}</div><div class="label">Errores</div></div>
        <div class="kpi"><div class="value">${r.blank}</div><div class="label">En blanco</div></div>
        <div class="kpi"><div class="value">${fmt1(r.puntos)}</div><div class="label">Puntos netos${s.penalty ? " (−" + (Math.abs(s.penalty - 1 / 3) < 0.001 ? "1/3" : s.penalty === 0.25 ? "1/4" : fmt1(s.penalty)) + " por error)" : ""}</div></div>
      </section>
      <div class="row">
        ${fails.length ? `<button class="btn btn-primary" id="retry-fails">Repetir las ${fails.length} falladas</button>` : ""}
        <button class="btn" id="retry-all">Repetir test</button>
        <a class="btn btn-ghost" href="#${esc(s.back)}">Volver</a>
      </div>
      <section class="stack">
        <div class="row" style="justify-content:space-between">
          <h2>Revisión</h2>
          <div class="row" role="group" aria-label="Filtrar revisión">
            ${["todas", "falladas", "en blanco"].map((f) => `<button class="btn btn-sm ${reviewFilter === f ? "btn-primary" : "btn-ghost"}" data-f="${f}">${f[0].toUpperCase() + f.slice(1)}</button>`).join("")}
          </div>
        </div>
        ${list.length ? list.map(({ it, i }) => {
          const okA = it.answer === it.correct;
          return `<article class="review-item">
            <span class="eyebrow">Pregunta ${i + 1} · Tema ${temaById[it.q.tema].n}</span>
            <strong>${esc(it.q.p)}</strong>
            ${it.answer === null ? `<span class="ans muted">En blanco</span>` : `<span class="ans ${okA ? "ok" : "ko"}">Tu respuesta: ${esc(it.q.o[it.order[it.answer]])}</span>`}
            ${okA ? "" : `<span class="ans ok">Correcta: ${esc(it.q.o[0])}</span>`}
            ${it.q.e ? `<p class="muted" style="font-size:.93rem">${esc(it.q.e)}</p>` : ""}
          </article>`;
        }).join("") : `<p class="empty">No hay preguntas en este filtro.</p>`}
      </section>
    `);
    const retry = (items, titulo) => startTest({ questions: items.map((it) => it.q), mode: s.mode, minutes: s.limitSecs ? Math.ceil(items.length * (s.limitSecs / 60 / s.items.length)) : 0, penalty: s.penalty, titulo, back: s.back });
    const rf = document.getElementById("retry-fails"); if (rf) rf.onclick = () => retry(fails, s.titulo.replace(/ \(falladas\)$/, "") + " (falladas)");
    document.getElementById("retry-all").onclick = () => retry(s.items, s.titulo);
    $main.querySelectorAll("[data-f]").forEach((b) => (b.onclick = () => { reviewFilter = b.dataset.f; renderResultado(); }));
  }

  function renderFallos() {
    const fails = failedQuestions();
    const byTema = {};
    fails.forEach((q) => (byTema[q.tema] = byTema[q.tema] || []).push(q));
    setView(`
      <section class="stack">
        <span class="eyebrow">Repaso</span>
        <h1>Preguntas falladas</h1>
        <p class="lead">Aquí aparecen las preguntas cuya última respuesta fue incorrecta. Al acertarlas en un test posterior salen de esta lista.</p>
        <div><button class="btn btn-primary" id="practice" ${fails.length ? "" : "disabled"}>Practicar ${fails.length} falladas</button></div>
      </section>
      ${fails.length ? Object.keys(byTema).sort().map((tid) => {
        const t = temaById[tid];
        return `<section class="stack">
          <div class="row" style="justify-content:space-between"><h3>Tema ${t.n}. ${esc(t.titulo)}</h3>
            <button class="btn btn-sm" data-tema="${tid}">Practicar (${byTema[tid].length})</button></div>
          ${byTema[tid].map((q) => `<div class="panel-flat stack" style="gap:6px">
            <strong>${esc(q.p)}</strong>
            <span style="color:var(--ok)">Correcta: ${esc(q.o[0])}</span>
            ${q.e ? `<span class="muted" style="font-size:.92rem">${esc(q.e)}</span>` : ""}
            <span class="muted num" style="font-size:.8rem">Fallada ${state.stats[q.id].ko} ${state.stats[q.id].ko === 1 ? "vez" : "veces"} · acertada ${state.stats[q.id].ok}</span>
          </div>`).join("")}
        </section>`;
      }).join("") : `<div class="panel empty">No tienes preguntas falladas pendientes. Haz un test para empezar a registrar tu progreso.</div>`}
    `);
    const p = document.getElementById("practice"); if (p) p.onclick = () => startTest({ questions: fails, mode: "estudio", titulo: "Repaso de fallos", back: "fallos" });
    $main.querySelectorAll("[data-tema]").forEach((b) => (b.onclick = () => startTest({ questions: byTema[b.dataset.tema], mode: "estudio", titulo: "Repaso de fallos · Tema " + temaById[b.dataset.tema].n, back: "fallos" })));
  }

  let confirmReset = false;
  function renderProgreso() {
    const h = state.history;
    const media = h.length ? h.slice(0, 10).reduce((a, x) => a + x.nota, 0) / Math.min(10, h.length) : 0;
    setView(`
      <section class="stack">
        <span class="eyebrow">Progreso</span>
        <h1>Tu evolución</h1>
      </section>
      <section class="kpis">
        <div class="kpi"><div class="value">${h.length}</div><div class="label">Tests realizados</div></div>
        <div class="kpi"><div class="value">${h.length ? fmt1(media) : "—"}</div><div class="label">Nota media (últimos 10)</div></div>
        <div class="kpi"><div class="value">${h.reduce((a, x) => a + x.n, 0)}</div><div class="label">Preguntas contestadas</div></div>
        <div class="kpi"><div class="value">${fmtTime(h.reduce((a, x) => a + (x.secs || 0), 0) / 60).replace(":", "h ")}m</div><div class="label">Tiempo de práctica</div></div>
      </section>
      ${h.length > 1 ? `<section class="panel stack"><h3>Notas de los últimos tests</h3>${chart(h.slice(0, 20).reverse())}</section>` : ""}
      <section class="stack">
        <h2>Por tema</h2>
        <div class="panel-flat table-wrap"><table>
          <thead><tr><th>Tema</th><th class="num">Preguntas</th><th class="num">Vistas</th><th class="num">Dominadas</th><th class="num">Acierto</th></tr></thead>
          <tbody>${T.temas.map((t) => { const s = temaStats(t.id); return `<tr>
            <td><a href="#tema-${t.id}">${t.n}. ${esc(t.titulo)}</a></td>
            <td class="num">${s.total}</td><td class="num">${s.seen}</td><td class="num">${s.dominadas}</td>
            <td class="num">${s.seen ? `<span class="chip ${gaugeClass(s.acierto).replace("bad", "ko")}">${s.acierto}%</span>` : "—"}</td></tr>`; }).join("")}</tbody>
        </table></div>
      </section>
      <section class="stack">
        <h2>Historial</h2>
        ${h.length ? `<div class="panel-flat table-wrap"><table>
          <thead><tr><th>Fecha</th><th>Test</th><th class="num">Aciertos</th><th class="num">Errores</th><th class="num">Blanco</th><th class="num">Nota</th></tr></thead>
          <tbody>${h.slice(0, 50).map((x) => `<tr><td class="num">${fmtDate(x.ts)}</td><td>${esc(x.titulo)} <span class="muted">· ${x.mode}</span></td>
            <td class="num">${x.ok}</td><td class="num">${x.ko}</td><td class="num">${x.blank}</td>
            <td class="num"><span class="chip ${x.nota >= 5 ? "ok" : "ko"}">${fmt1(x.nota)}</span></td></tr>`).join("")}</tbody>
        </table></div>` : `<div class="panel empty">Aún no has hecho ningún test.</div>`}
      </section>
      <section class="stack">
        <h2>Copia de seguridad</h2>
        <p class="muted">El progreso y tus preguntas propias se guardan solo en este navegador. Exporta una copia para pasarla a otro dispositivo.</p>
        ${backupControls()}
        <div class="row">
          ${confirmReset
            ? `<strong style="color:var(--ko)">Se borrarán el historial y las estadísticas (no tus preguntas propias).</strong><button class="btn btn-danger" id="reset-yes">Borrar progreso</button><button class="btn" id="reset-no">Cancelar</button>`
            : `<button class="btn btn-danger" id="reset">Borrar progreso…</button>`}
        </div>
      </section>
    `);
    bindBackup();
    const on = (id, fn) => { const el = document.getElementById(id); if (el) el.onclick = fn; };
    on("reset", () => { confirmReset = true; renderProgreso(); });
    on("reset-no", () => { confirmReset = false; renderProgreso(); });
    on("reset-yes", () => { state.stats = {}; state.history = []; save(); confirmReset = false; toast("Progreso borrado"); renderProgreso(); });
  }

  function chart(items) {
    const W = 600, H = 180, P = { l: 30, r: 10, t: 10, b: 22 };
    const iw = W - P.l - P.r, ih = H - P.t - P.b;
    const x = (i) => P.l + (items.length === 1 ? iw / 2 : (i * iw) / (items.length - 1));
    const y = (v) => P.t + ih - (v / 10) * ih;
    const pts = items.map((it, i) => x(i) + "," + y(it.nota)).join(" ");
    return `<div class="table-wrap"><svg viewBox="0 0 ${W} ${H}" width="100%" style="min-width:320px;display:block" role="img" aria-label="Evolución de la nota">
      ${[0, 5, 10].map((v) => `<line x1="${P.l}" x2="${W - P.r}" y1="${y(v)}" y2="${y(v)}" stroke="var(--line)" ${v === 5 ? 'stroke-dasharray="4 4"' : ""}/><text x="${P.l - 8}" y="${y(v) + 4}" text-anchor="end" font-size="11" fill="var(--muted)" font-family="IBM Plex Mono, monospace">${v}</text>`).join("")}
      <polygon points="${P.l},${y(0)} ${pts} ${x(items.length - 1)},${y(0)}" fill="var(--accent)" opacity=".12"/>
      <polyline points="${pts}" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-linejoin="round"/>
      ${items.map((it, i) => `<circle cx="${x(i)}" cy="${y(it.nota)}" r="${i === items.length - 1 ? 5 : 3}" fill="${it.nota >= 5 ? "var(--ok)" : "var(--ko)"}"><title>${fmt1(it.nota)} · ${esc(it.titulo)}</title></circle>`).join("")}
    </svg></div>`;
  }

  // ─────────────────────────── Copia de seguridad ───────────────────────────
  function backupControls() {
    return `<div class="panel-flat stack">
      <div class="row">
        <button class="btn btn-sm" id="exp">Exportar copia</button>
        <button class="btn btn-sm" id="exp-copy" hidden>Copiar al portapapeles</button>
        <button class="btn btn-sm" id="exp-dl" hidden>Descargar .json</button>
        <label class="btn btn-sm" for="imp-file" style="font-weight:600">Importar archivo .json</label>
        <input type="file" id="imp-file" accept="application/json,.json" hidden>
      </div>
      <div class="field"><label for="backup-text">Datos (pega aquí una copia para importarla)</label>
        <textarea id="backup-text" class="num" style="font-size:.8rem" placeholder='{"stats":{…},"history":[…],"custom":[…]}'></textarea></div>
      <div><button class="btn btn-sm" id="imp-text">Importar texto pegado</button></div>
    </div>`;
  }
  function bindBackup() {
    const ta = document.getElementById("backup-text");
    document.getElementById("exp").onclick = () => {
      ta.value = JSON.stringify({ app: "aulachs", version: 1, ...state });
      document.getElementById("exp-copy").hidden = false; document.getElementById("exp-dl").hidden = false;
      ta.select();
    };
    document.getElementById("exp-copy").onclick = () => {
      navigator.clipboard.writeText(ta.value).then(() => toast("Copia en el portapapeles"), () => { ta.select(); toast("Selecciona el texto y cópialo"); });
    };
    document.getElementById("exp-dl").onclick = () => {
      try {
        const a = document.createElement("a");
        a.href = URL.createObjectURL(new Blob([ta.value], { type: "application/json" }));
        a.download = "aula-chs-copia-" + new Date().toISOString().slice(0, 10) + ".json";
        document.body.appendChild(a); a.click(); a.remove();
      } catch (e) { toast("No se pudo descargar; usa Copiar"); }
    };
    const doImport = (txt) => {
      try {
        const d = JSON.parse(txt);
        if (!d || typeof d !== "object" || (!d.stats && !d.custom && !d.history)) throw new Error();
        const custom = (d.custom || []).filter(validCustom).map((q, i) => ({ id: q.id || "u-" + Date.now().toString(36) + i, tema: q.tema, p: q.p, o: q.o, e: q.e || "" }));
        if (d.stats || d.history) {
          state = { stats: d.stats || {}, history: d.history || [], custom };
          save(); toast("Copia importada");
        } else {
          const ids = new Set(state.custom.map((q) => q.id));
          custom.forEach((q) => { if (!ids.has(q.id)) state.custom.push(q); });
          save(); toast(custom.length + " preguntas añadidas");
        }
        render();
      } catch (e) { toast("El texto no es una copia válida de Aula CHS"); }
    };
    document.getElementById("imp-text").onclick = () => doImport(ta.value);
    document.getElementById("imp-file").onchange = (ev) => {
      const f = ev.target.files[0]; if (!f) return;
      const r = new FileReader(); r.onload = () => doImport(r.result); r.readAsText(f);
    };
  }
  const validCustom = (q) => q && typeof q.p === "string" && Array.isArray(q.o) && q.o.length >= 2 && q.o.every((x) => typeof x === "string") && temaById[q.tema];

  // ─────────────────────────── Preguntas propias ───────────────────────────
  function renderPropias() {
    const mine = state.custom;
    setView(`
      <section class="stack">
        <span class="eyebrow">Mis preguntas</span>
        <h1>Añade tus propias preguntas</h1>
        <p class="lead">Incorpora preguntas de exámenes anteriores o de tus apuntes. Se mezclan con las del tema en los tests y simulacros.</p>
      </section>
      <form class="panel stack" id="qform">
        <div class="field"><label for="q-tema">Tema</label>
          <select id="q-tema">${T.temas.map((t) => `<option value="${t.id}">${t.n}. ${esc(t.titulo)}</option>`).join("")}</select></div>
        <div class="field"><label for="q-p">Enunciado</label><textarea id="q-p" required></textarea></div>
        <div class="field"><label for="q-ok" style="color:var(--ok)">Respuesta correcta</label><input type="text" id="q-ok" required></div>
        <div class="form-grid">
          ${[1, 2, 3].map((i) => `<div class="field"><label for="q-ko${i}">Incorrecta ${i}</label><input type="text" id="q-ko${i}" ${i === 1 ? "required" : ""}></div>`).join("")}
        </div>
        <div class="field"><label for="q-e">Explicación o artículo (opcional)</label><input type="text" id="q-e"></div>
        <div><button class="btn btn-primary" type="submit">Guardar pregunta</button></div>
      </form>
      <section class="stack">
        <h2>Guardadas (${mine.length})</h2>
        ${mine.length ? mine.map((q) => `<div class="panel-flat stack" style="gap:6px">
          <span class="eyebrow">Tema ${temaById[q.tema] ? temaById[q.tema].n : "?"}</span>
          <strong>${esc(q.p)}</strong>
          <span style="color:var(--ok)">${esc(q.o[0])}</span>
          <span class="muted" style="font-size:.92rem">${q.o.slice(1).map(esc).join(" · ")}</span>
          <div><button class="btn btn-sm btn-danger" data-del="${esc(q.id)}">Eliminar</button></div>
        </div>`).join("") : `<div class="panel empty">Todavía no has añadido preguntas.</div>`}
      </section>
      <section class="stack">
        <h2>Importar o exportar</h2>
        <p class="muted">La copia incluye tus preguntas y tu progreso. También puedes pegar un JSON con una lista de preguntas con el formato <code>{"custom":[{"tema":"t08","p":"…","o":["correcta","incorrecta",…],"e":"…"}]}</code>.</p>
        ${backupControls()}
      </section>
    `);
    bindBackup();
    document.getElementById("qform").addEventListener("submit", (ev) => {
      ev.preventDefault();
      const v = (id) => document.getElementById(id).value.trim();
      const o = [v("q-ok"), v("q-ko1"), v("q-ko2"), v("q-ko3")].filter(Boolean);
      if (!v("q-p") || o.length < 2) { toast("Escribe el enunciado, la correcta y al menos una incorrecta"); return; }
      state.custom.push({ id: "u-" + Date.now().toString(36), tema: v("q-tema"), p: v("q-p"), o, e: v("q-e") });
      save(); toast("Pregunta guardada"); renderPropias();
    });
    $main.querySelectorAll("[data-del]").forEach((b) => (b.onclick = () => {
      state.custom = state.custom.filter((q) => q.id !== b.dataset.del);
      delete state.stats[b.dataset.del]; save(); renderPropias();
    }));
  }

  render();
})();
