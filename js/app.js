/* Aula CHS — aplicación de estudio y tests para la oposición de la Confederación Hidrográfica del Segura.
   Sin dependencias. El progreso se guarda en el navegador (localStorage). */
(function () {
  "use strict";

  const T = window.TEMARIO;
  const STORE_KEY = "aulachs:v2"; // v2: temario de M2 Química (los identificadores de tema cambiaron)
  const LETTERS = ["A", "B", "C", "D", "E", "F"];
  const $main = document.getElementById("app");

  // ─────────────────────────── Persistencia ───────────────────────────
  function emptyState() { return { stats: {}, history: [], custom: [], temas: {} }; }
  function load() {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      if (!raw) return emptyState();
      const s = JSON.parse(raw);
      return { stats: s.stats || {}, history: s.history || [], custom: s.custom || [], temas: s.temas || {} };
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
  const temaById = {};
  const PREFIJO = { C: "Común", Q: "Química", X: "Compl." };
  T.bloques.forEach((b) => T.temas.filter((t) => t.bloque === b.id).forEach((t, i) => { t.n = i + 1; t.label = (PREFIJO[b.id] || b.id) + " " + t.n; }));
  T.temas.forEach((t) => { temaById[t.id] = t; });
  const bloqueById = {}; T.bloques.forEach((b) => (bloqueById[b.id] = b));
  const oficialIds = () => T.temas.filter((t) => bloqueById[t.bloque].oficial).map((t) => t.id);

  // Temas importados por la persona usuaria: sustituyen título (si lo traen), ideas clave (si las traen)
  // y TODAS las preguntas de ejemplo de ese tema.
  const ORIG = {};
  T.temas.forEach((t) => { ORIG[t.id] = { titulo: t.titulo, resumen: t.resumen, preguntas: t.preguntas }; });
  function applyImports() {
    T.temas.forEach((t) => {
      const o = ORIG[t.id], imp = state.temas[t.id];
      t.titulo = o.titulo; t.resumen = o.resumen; t.preguntas = o.preguntas; t.mio = false;
      if (imp && imp.preguntas && imp.preguntas.length) {
        t.mio = true;
        t.preguntas = imp.preguntas;
        if (imp.titulo) t.titulo = imp.titulo;
        if (imp.resumen && imp.resumen.length) t.resumen = imp.resumen;
      }
    });
  }
  const hash = (str) => { let h = 5381; for (const ch of String(str).trim().toLowerCase()) h = ((h << 5) + h + ch.codePointAt(0)) | 0; return (h >>> 0).toString(36); };
  applyImports();

  function allQuestions() {
    const out = [];
    T.temas.forEach((t) => t.preguntas.forEach((q, i) => out.push({ id: t.mio ? t.id + "-h" + hash(q[0]) : t.id + "-" + (i + 1), tema: t.id, p: q[0], o: q[1], e: q[2] || "", mia: t.mio })));
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
    // opts.partes: [{ nombre, questions, n, max }] para exámenes con partes que puntúan por separado
    const partes = opts.partes || [{ nombre: null, questions: opts.questions, n: opts.limit }];
    const items = [];
    partes.forEach((p, pi) => {
      let qs = shuffle(p.questions);
      if (p.n && qs.length > p.n) qs = qs.slice(0, p.n);
      qs.forEach((q) => {
        const order = shuffle(q.o.map((_, i) => i));
        items.push({ q, order, correct: order.indexOf(0), answer: null, flagged: false, parte: pi });
      });
    });
    if (!items.length) { toast("No hay preguntas para ese test"); return; }
    session = {
      titulo: opts.titulo, mode: opts.mode, penalty: opts.penalty || 0, back: opts.back || "temario",
      partes: opts.partes ? opts.partes.map((p) => ({ nombre: p.nombre, max: p.max || 20 })) : null,
      oficial: !!opts.oficial,
      limitSecs: opts.minutes ? opts.minutes * 60 : 0, start: Date.now(), current: 0, finished: false, confirm: false,
      items
    };
    go("test");
  }

  // Primer ejercicio M2: 45 preguntas del temario común + 45 del específico, 90 min, −1/3, 20 + 20 puntos
  function startOficial() {
    const cfg = T.convocatoria.simulacro;
    const parte = (pid) => allQuestions().filter((q) => bloqueById[temaById[q.tema].bloque].parte === pid);
    startTest({
      titulo: "Simulacro oficial · primer ejercicio", mode: "examen", oficial: true,
      minutes: cfg.minutos, penalty: cfg.penalizacion, back: "simulacro",
      partes: [
        { nombre: "Parte común", questions: parte("comun"), n: cfg.comun, max: cfg.maxParte },
        { nombre: "Parte específica", questions: parte("especifico"), n: cfg.especifico, max: cfg.maxParte }
      ]
    });
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
    state.history.unshift({ ts: Date.now(), titulo: session.titulo, mode: session.mode, n: r.n, ok: r.ok, ko: r.ko, blank: r.blank, nota: r.nota, secs: session.secs, total40: r.partes ? r.total : undefined });
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
    let partes = null, total = 0;
    if (s.partes) {
      partes = s.partes.map((p, pi) => {
        const its = s.items.filter((it) => it.parte === pi);
        const pok = its.filter((it) => it.answer !== null && it.answer === it.correct).length;
        const pblank = its.filter((it) => it.answer === null).length;
        const pko = its.length - pok - pblank;
        const pts = Math.max(0, ((pok - pko * s.penalty) / its.length) * p.max);
        total += pts;
        return { nombre: p.nombre, n: its.length, ok: pok, ko: pko, blank: pblank, pts, max: p.max };
      });
    }
    return { n, ok, ko, blank, puntos, nota, partes, total };
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
      case "importar": case "mis-preguntas": return renderImportar();
      case "convocatoria": return renderConvocatoria();
      case "test": return session && !session.finished ? renderTest() : go("inicio");
      case "resultado": return session && session.finished ? renderResultado() : go("inicio");
      default: return renderInicio();
    }
  }

  function setView(html) { $main.innerHTML = html; window.scrollTo(0, 0); }

  // ─────────────────────────── Vistas ───────────────────────────
  function renderInicio() {
    const qs = allQuestions();
    const answered = qs.map((q) => state.stats[q.id]).filter(Boolean);
    const ok = answered.reduce((a, s) => a + s.ok, 0), ko = answered.reduce((a, s) => a + s.ko, 0);
    const dominadas = answered.filter((s) => s.last).length;
    const fallos = failedQuestions().length;
    const pending = session && !session.finished;
    const last = state.history[0];

    const weak = T.temas.map((t) => ({ t, s: temaStats(t.id) })).filter((x) => x.s.seen > 0).sort((a, b) => a.s.acierto - b.s.acierto).slice(0, 3);

    setView(`
      <section class="stack">
        <span class="eyebrow">${esc(T.convocatoria.plaza)} · ${esc(T.convocatoria.organismo)}</span>
        <h1>Prepara el examen de M2 Química de la Confederación Hidrográfica del Segura</h1>
        <p class="lead">Temario oficial de la convocatoria (15 temas comunes y 32 específicos de Química), más un bloque complementario sobre aguas y laboratorio. ${qs.length} preguntas con explicación. Tu progreso se guarda en este navegador.</p>
        <div class="row">
          ${pending ? `<a class="btn btn-ochre" href="#test">Continuar test: ${esc(session.titulo)}</a>` : ""}
          <button class="btn btn-primary" id="oficial">Simulacro oficial · 90 preguntas</button>
          <button class="btn" id="quick">Test rápido · 10 preguntas</button>
          ${fallos ? `<a class="btn" href="#fallos">Repasar ${fallos} fallos</a>` : ""}
        </div>
      </section>

      <section class="kpis">
        <div class="kpi"><div class="value">${pct(dominadas, qs.length)}<small>%</small></div><div class="label">Temario dominado (${dominadas}/${qs.length})</div></div>
        <div class="kpi"><div class="value">${pct(ok, ok + ko)}<small>%</small></div><div class="label">Acierto global</div></div>
        <div class="kpi"><div class="value">${state.history.length}</div><div class="label">Tests realizados</div></div>
        <div class="kpi"><div class="value">${last ? fmt1(last.nota) : "—"}</div><div class="label">Nota del último test (sobre 10)</div></div>
      </section>

      ${examCard()}

      ${weak.length ? `
      <section class="stack">
        <h2>Temas a reforzar</h2>
        <div class="grid">${weak.map(({ t, s }) => `
          <a class="panel-flat" href="#tema-${t.id}" style="text-decoration:none;color:inherit;display:flex;flex-direction:column;gap:8px">
            <span class="eyebrow">${t.label}</span><strong>${esc(t.titulo)}</strong>
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
            <span class="eyebrow">${b.oficial ? "Entra en el examen" : "No entra en el examen"} · ${temas.length} temas</span>
            <strong>${esc(b.nombre)}</strong>
            <div class="gauge"><span style="width:${pct(dom, tot)}%"></span></div>
            <span class="muted num" style="font-size:.85rem">${dom}/${tot} preguntas dominadas</span>
          </div>`;
        }).join("")}</div>
      </section>
    `);
    const ofi = oficialIds();
    document.getElementById("quick").onclick = () => startTest({ questions: qs.filter((q) => ofi.includes(q.tema)), limit: 10, mode: "estudio", titulo: "Test rápido", back: "inicio" });
    document.getElementById("oficial").onclick = startOficial;
    bindExamCard();
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
          <div class="bloque-head"><span class="eyebrow">${b.oficial ? "Temario oficial" : "No entra en el examen"}</span><h2>${esc(b.nombre)}</h2></div>
          ${T.temas.filter((t) => t.bloque === b.id).map((t) => {
            const s = temaStats(t.id);
            return `<a class="tema-row" href="#tema-${t.id}">
              <span class="tema-num">${String(t.n).padStart(2, "0")}</span>
              <div><h3>${esc(t.titulo)}</h3><div class="meta">${t.mio ? '<span style="color:var(--ok);font-weight:600">Tus preguntas</span> · ' : ""}${esc(t.norma)}</div>
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
        <span class="eyebrow">${t.label} · ${esc(bloque.nombre)}</span>
        <h1>${esc(t.titulo)}</h1>
        <p class="muted">${esc(t.norma)}</p>
      </section>

      <section class="panel stack">
        <div class="row" style="justify-content:space-between">
          <h2>Practicar</h2>
          <span class="row" style="gap:6px">${t.mio ? '<span class="chip ok">Tus preguntas</span>' : '<a class="chip mid" href="#importar" style="text-decoration:none">Preguntas de ejemplo · importar las tuyas</a>'}<span class="chip accent num">${qs.length} preguntas</span></span>
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
        <h2>Ideas clave${t.mio && state.temas[t.id].resumen && state.temas[t.id].resumen.length ? "" : ' <span class="chip">de ejemplo</span>'}</h2>
        <ul class="resumen">${t.resumen.map((r) => `<li>${esc(r)}</li>`).join("")}</ul>
      </section>

      <nav class="row" style="justify-content:space-between">
        ${prev ? `<a class="btn btn-ghost" href="#tema-${prev.id}">← ${prev.label}</a>` : "<span></span>"}
        ${next ? `<a class="btn btn-ghost" href="#tema-${next.id}">${next.label} →</a>` : ""}
      </nav>
    `);
    const titulo = t.label + ": " + t.titulo;
    document.getElementById("estudio").onclick = () => startTest({ questions: qs, mode: "estudio", titulo, back: "tema-" + id });
    document.getElementById("examen").onclick = () => startTest({ questions: qs, mode: "examen", minutes: qs.length, penalty: 1 / 3, titulo, back: "tema-" + id });
    document.getElementById("rfallos").onclick = () => startTest({ questions: fallos, mode: "estudio", titulo: titulo + " (falladas)", back: "tema-" + id });
  }

  function examCard() {
    const c = T.convocatoria, cfg = c.simulacro;
    const n = (pid) => allQuestions().filter((q) => bloqueById[temaById[q.tema].bloque].parte === pid).length;
    return `<section class="panel stack">
      <div class="row" style="justify-content:space-between">
        <div class="stack" style="gap:4px"><span class="eyebrow">Primer ejercicio · ${esc(c.plaza)}</span>
          <h2>Simulacro oficial</h2></div>
        <a href="#convocatoria" style="font-size:.92rem">Ver la convocatoria</a>
      </div>
      <div class="kpis">
        <div class="kpi"><div class="value">${cfg.comun}</div><div class="label">Preguntas del temario común (banco: ${n("comun")})</div></div>
        <div class="kpi"><div class="value">${cfg.especifico}</div><div class="label">Preguntas de Química (banco: ${n("especifico")})</div></div>
        <div class="kpi"><div class="value">${cfg.minutos}′</div><div class="label">Tiempo máximo</div></div>
        <div class="kpi"><div class="value">−1/3</div><div class="label">Por error · en blanco no penaliza</div></div>
      </div>
      <p class="muted" style="font-size:.92rem">Cada parte se puntúa sobre ${cfg.maxParte}; hacen falta ${cfg.minimo} de ${cfg.maxParte * 2} puntos para superar el ejercicio.</p>
      <div><button class="btn btn-primary" data-oficial>Empezar simulacro oficial</button></div>
    </section>`;
  }
  function bindExamCard() { $main.querySelectorAll("[data-oficial]").forEach((b) => (b.onclick = startOficial)); }

  function renderConvocatoria() {
    const c = T.convocatoria;
    setView(`
      <section class="stack">
        <span class="eyebrow">Convocatoria</span>
        <h1>${esc(c.plaza)} · ${esc(c.organismo)}</h1>
        <p class="lead">${esc(c.titulo)}. ${esc(c.resolucion)}.</p>
      </section>
      <section class="stack">
        <h2>Tu plaza</h2>
        <div class="panel-flat table-wrap"><table>
          <thead><tr><th>N.º</th><th>Puesto</th><th>Destino</th><th class="num">Ámbito</th></tr></thead>
          <tbody>${c.puestos.map((p) => `<tr><td class="num">${p.orden}</td><td class="num">${esc(p.id)}</td><td>${esc(p.localidad)} (${esc(p.provincia)})</td><td class="num">${p.ambito}</td></tr>`).join("")}</tbody>
        </table></div>
        <ul class="resumen">
          <li>${esc(c.plazasEspecialidad)}</li>
          <li>${esc(c.ambito)}</li>
          <li><strong>Requisito:</strong> ${esc(c.requisito)}</li>
          <li><strong>Solicitud:</strong> ${esc(c.solicitud)}</li>
        </ul>
      </section>
      <section class="stack">
        <h2>Fase de oposición</h2>
        <div class="grid">${c.ejercicios.map((e) => `
          <div class="panel-flat stack" style="gap:8px"><h3>${esc(e.nombre)}</h3><p>${esc(e.detalle)}</p><p class="muted">${esc(e.puntos)}</p></div>`).join("")}</div>
        <p>${esc(c.final)}</p>
      </section>
      ${examCard()}
      <p class="notice">Resumen elaborado a partir de las bases. Ante cualquier duda, prevalece el texto oficial publicado en la web del MITECO y en el BOE.</p>
    `);
    bindExamCard();
  }

  function renderSimulacro() {
    const total = allQuestions().length;
    setView(`
      <section class="stack">
        <span class="eyebrow">Simulacro</span>
        <h1>Simulacro de examen</h1>
        <p class="lead">Reproduce el primer ejercicio oficial o configura un simulacro a tu medida.</p>
      </section>
      ${examCard()}
      <h2>Simulacro personalizado</h2>
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
              <legend class="eyebrow" style="padding:0 6px">${b.oficial ? "Entra en el examen" : "No entra en el examen"} · ${esc(b.nombre)}</legend>
              ${T.temas.filter((t) => t.bloque === b.id).map((t) => `
                <label class="check"><input type="checkbox" id="sim-${t.id}" value="${t.id}" ${b.oficial ? "checked" : ""}> <span>${t.label}. ${esc(t.titulo)} <span class="muted num">(${questionsOf(t.id).length})</span></span></label>`).join("")}
            </fieldset>`).join("")}
        </div>
        <div><button class="btn btn-primary" type="submit">Empezar simulacro</button></div>
      </form>
    `);
    bindExamCard();
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
        ${s.partes ? `<span class="eyebrow">${esc(s.partes[it.parte].nombre)}</span>` : ""}
        <span class="chip wrap">${tema.label} · ${esc(tema.titulo)}${it.q.propia ? " · pregunta propia" : ""}</span>
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
        <div class="qnav">${s.items.map((x, i) => `${s.partes && (i === 0 || s.items[i - 1].parte !== x.parte) ? `<span class="eyebrow" style="flex-basis:100%">${esc(s.partes[x.parte].nombre)}</span>` : ""}<button data-go="${i}" class="${x.answer !== null ? "answered" : ""} ${x.flagged ? "flagged" : ""} ${i === s.current ? "current" : ""}" aria-label="Pregunta ${i + 1}">${i + 1}</button>`).join("")}</div>
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
    const cfg = T.convocatoria.simulacro;
    const aprobado = r.partes ? r.total >= cfg.minimo : r.nota >= 5;
    const fails = s.items.filter((it) => it.answer !== null && it.answer !== it.correct);
    const list = s.items.map((it, i) => ({ it, i })).filter(({ it }) =>
      reviewFilter === "todas" ? true : reviewFilter === "falladas" ? it.answer !== null && it.answer !== it.correct : it.answer === null);

    setView(`
      <section class="stack">
        <span class="eyebrow">Resultado · ${esc(s.titulo)}</span>
        <div class="row" style="align-items:flex-end;gap:18px">
          <div class="score-big" style="color:var(--${aprobado ? "ok" : "ko"})">${fmt1(r.partes ? r.total : r.nota)}</div>
          <div class="stack" style="gap:4px">
            ${r.partes
              ? `<span class="chip ${aprobado ? "ok" : "ko"}">${aprobado ? "Superarías el mínimo de " + cfg.minimo : "Por debajo de " + cfg.minimo + " puntos"}</span>
                 <span class="muted" style="font-size:.9rem">Puntos sobre ${cfg.maxParte * 2} · ${fmtTime(s.secs)} empleados</span>`
              : `<span class="chip ${aprobado ? "ok" : "ko"}">${aprobado ? "Aprobado" : "Por debajo de 5"}</span>
                 <span class="muted" style="font-size:.9rem">Nota sobre 10 · ${fmtTime(s.secs)} empleados</span>`}
          </div>
        </div>
      </section>
      ${r.partes ? `
      <section class="grid">${r.partes.map((p) => `
        <div class="panel-flat stack" style="gap:8px">
          <span class="eyebrow">${esc(p.nombre)}</span>
          <div class="row" style="justify-content:space-between;align-items:baseline"><strong class="num" style="font-size:1.5rem">${fmt1(p.pts)} <small class="muted">/ ${p.max}</small></strong>
            <span class="muted num" style="font-size:.88rem">${p.ok} aciertos · ${p.ko} errores · ${p.blank} en blanco</span></div>
          <div class="gauge ${gaugeClass(pct(p.pts, p.max))}"><span style="width:${pct(p.pts, p.max)}%"></span></div>
        </div>`).join("")}
      </section>
      <p class="notice">Estimación lineal: cada parte vale 20 puntos y cada error resta 1/3 de acierto. En el examen real, el órgano de selección fija la puntuación directa mínima equivalente a los 20 puntos, así que el corte puede ser distinto.</p>` : ""}
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
            <span class="eyebrow">Pregunta ${i + 1} · ${temaById[it.q.tema].label}</span>
            <strong>${esc(it.q.p)}</strong>
            ${it.answer === null ? `<span class="ans muted">En blanco</span>` : `<span class="ans ${okA ? "ok" : "ko"}">Tu respuesta: ${esc(it.q.o[it.order[it.answer]])}</span>`}
            ${okA ? "" : `<span class="ans ok">Correcta: ${esc(it.q.o[0])}</span>`}
            ${it.q.e ? `<p class="muted" style="font-size:.93rem">${esc(it.q.e)}</p>` : ""}
          </article>`;
        }).join("") : `<p class="empty">No hay preguntas en este filtro.</p>`}
      </section>
    `);
    const retry = (items, titulo) => s.oficial && items === s.items ? startOficial() : startTest({ questions: items.map((it) => it.q), mode: s.mode, minutes: s.limitSecs ? Math.ceil(items.length * (s.limitSecs / 60 / s.items.length)) : 0, penalty: s.penalty, titulo, back: s.back });
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
          <div class="row" style="justify-content:space-between"><h3>${t.label}. ${esc(t.titulo)}</h3>
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
    $main.querySelectorAll("[data-tema]").forEach((b) => (b.onclick = () => startTest({ questions: byTema[b.dataset.tema], mode: "estudio", titulo: "Repaso de fallos · " + temaById[b.dataset.tema].label, back: "fallos" })));
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
            <td><a href="#tema-${t.id}">${t.label}. ${esc(t.titulo)}</a></td>
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
        if (!d || typeof d !== "object" || (!d.stats && !d.custom && !d.history && !d.temas)) throw new Error();
        const custom = (d.custom || []).filter(validCustom).map((q, i) => ({ id: q.id || "u-" + Date.now().toString(36) + i, tema: q.tema, p: q.p, o: q.o, e: q.e || "" }));
        if (d.stats || d.history || d.temas) {
          state = { stats: d.stats || {}, history: d.history || [], custom, temas: d.temas || {} };
          applyImports(); save(); toast("Copia importada");
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

  // ─────────────────────────── Importar temas ───────────────────────────
  // Acepta JSON (uno o varios bloques pegados seguidos, con o sin ```json) con temas completos:
  // { "tema": "q21", "titulo": "…", "resumen": ["…"], "preguntas": [ { "p": "…", "correcta": "…", "incorrectas": ["…"], "e": "…" } ] }
  // También admite { "temas": [ … ] }, una lista de temas y variantes habituales de nombres de campo.

  function extractJsonValues(text) {
    const clean = String(text).replace(/^\s*```[a-zA-Z]*\s*$/gm, "").trim();
    if (!clean) return [];
    try { return [JSON.parse(clean)]; } catch (e) { /* puede haber varios bloques */ }
    const out = [];
    let depth = 0, start = -1, inStr = false, escNext = false;
    for (let i = 0; i < clean.length; i++) {
      const c = clean[i];
      if (inStr) { if (escNext) escNext = false; else if (c === "\\") escNext = true; else if (c === '"') inStr = false; continue; }
      if (c === '"') { if (depth > 0) inStr = true; continue; }
      if (c === "{" || c === "[") { if (depth === 0) start = i; depth++; }
      else if ((c === "}" || c === "]") && depth > 0) {
        depth--;
        if (depth === 0 && start >= 0) {
          const chunk = clean.slice(start, i + 1);
          try { out.push(JSON.parse(chunk)); } catch (e) { out.push({ __error: "Hay un bloque con JSON mal formado (empieza por: " + chunk.slice(0, 60) + "…)" }); }
          start = -1;
        }
      }
    }
    return out;
  }

  function normTemaId(o) {
    const raw = [o.tema, o.id, o.codigo, o.código].find((x) => x !== undefined && x !== null && x !== "");
    const extra = String(o.parte || o.bloque || "");
    const txt = (String(raw === undefined ? "" : raw) + " " + extra).trim().toLowerCase();
    let m = txt.match(/^([cqa])\s*[-_ ]?\s*0*(\d{1,2})\b/);
    if (m) return m[1] + String(m[2]).padStart(2, "0");
    m = txt.match(/(com[uú]n|qu[ií]mica|espec[ií]fic[oa]|complementari[oa])\D{0,12}0*(\d{1,2})/) || txt.replace(/^(\d{1,2})\s+(.*)$/, "$2 $1").match(/(com[uú]n|qu[ií]mica|espec[ií]fic[oa]|complementari[oa])\D{0,12}0*(\d{1,2})/);
    if (m) { const L = /^com/.test(m[1]) ? "c" : /^compl/.test(m[1]) ? "a" : "q"; return L + String(m[2]).padStart(2, "0"); }
    return null;
  }

  const firstDef = (...xs) => xs.find((x) => x !== undefined && x !== null && x !== "");
  const LETTER_PREFIX = /^\s*[A-Fa-f]\s*[\)\.\-:]\s+/;

  // Devuelve { q: [enunciado, [correcta, ...incorrectas], explicación] } o { error }
  function normQuestion(q, numBase) {
    let p, opts, correct, inc, e;
    if (Array.isArray(q)) { p = q[0]; opts = Array.isArray(q[1]) ? q[1] : null; correct = 0; e = q[2]; }
    else if (q && typeof q === "object") {
      p = firstDef(q.p, q.pregunta, q.enunciado, q.texto);
      e = firstDef(q.e, q.explicacion, q.explicación, q.justificacion, q.justificación, q.comentario, "");
      opts = firstDef(q.o, q.opciones, q.respuestas, q.alternativas);
      correct = firstDef(q.correcta, q.respuesta_correcta, q.respuestaCorrecta, q.solucion, q.solución, q.respuesta);
      inc = firstDef(q.incorrectas, q.distractores, q.erroneas, q.erróneas);
      if (opts && !Array.isArray(opts) && typeof opts === "object") {
        // Opciones como objeto {"A": "…", "B": "…"}: si la correcta es una clave, se sustituye por su texto
        const keys = Object.keys(opts);
        const ki = typeof correct === "string" ? keys.findIndex((k) => k.trim().toUpperCase() === correct.trim().replace(/[\)\.]$/, "").toUpperCase()) : -1;
        const vals = keys.map((k) => String(opts[k]));
        if (ki >= 0) correct = vals[ki];
        opts = vals;
      }
    } else return { error: "pregunta vacía o con formato desconocido" };

    if (!p || typeof p !== "string" || !p.trim()) return { error: "falta el enunciado" };
    p = p.trim(); e = e ? String(e).trim() : "";

    if (!opts) {
      if (correct === undefined || !Array.isArray(inc)) return { error: "faltan las opciones (correcta e incorrectas): «" + p.slice(0, 50) + "…»" };
      opts = [String(correct), ...inc.map(String)]; correct = 0;
    } else {
      opts = opts.map((x) => String(x).trim());
      if (opts.length && opts.every((x) => LETTER_PREFIX.test(x))) opts = opts.map((x) => x.replace(LETTER_PREFIX, ""));
      let idx = -1;
      if (typeof correct === "number") idx = correct - numBase;
      else if (typeof correct === "string") {
        const c = correct.trim();
        const lm = c.match(/^\(?([A-Fa-f])[\)\.]?$/);
        if (lm) idx = lm[1].toUpperCase().charCodeAt(0) - 65;
        else if (/^\d+$/.test(c)) idx = parseInt(c, 10) - numBase;
        else {
          const cc = c.replace(LETTER_PREFIX, "").toLowerCase();
          idx = opts.findIndex((x) => x.toLowerCase() === cc);
        }
      }
      if (idx < 0 || idx >= opts.length) return { error: "no se identifica la respuesta correcta: «" + p.slice(0, 50) + "…»" };
      opts = [opts[idx], ...opts.filter((_, i) => i !== idx)];
    }
    opts = opts.map((x) => String(x).trim()).filter(Boolean);
    if (opts.length < 2) return { error: "necesita al menos dos opciones: «" + p.slice(0, 50) + "…»" };
    if (new Set(opts.map((x) => x.toLowerCase())).size !== opts.length) return { error: "tiene opciones repetidas: «" + p.slice(0, 50) + "…»" };
    return { q: [p, opts, e] };
  }

  function parseImport(text) {
    const values = extractJsonValues(text);
    const errores = [], avisos = [], temas = {};
    if (!values.length) return { temas, errores: ["No se ha encontrado ningún bloque JSON en el texto."], avisos };
    const temaObjs = [];
    const collect = (v) => {
      if (!v) return;
      if (v.__error) { errores.push(v.__error); return; }
      if (Array.isArray(v)) { v.forEach(collect); return; }
      if (typeof v !== "object") return;
      if (v.app === "aulachs") { errores.push("Eso es una copia de seguridad completa: impórtala en la sección «Copia de seguridad» de más abajo."); return; }
      if (Array.isArray(v.temas)) { v.temas.forEach(collect); return; }
      if (Array.isArray(v.preguntas)) { temaObjs.push(v); return; }
      errores.push("Un bloque no tiene la lista «preguntas».");
    };
    values.forEach(collect);

    temaObjs.forEach((o) => {
      const id = normTemaId(o);
      const nombre = String(firstDef(o.tema, o.id, o.titulo, "(sin código)"));
      if (!id || !temaById[id]) { errores.push("Tema «" + nombre + "»: no reconozco el código. Usa c01–c15 (común), q01–q32 (Química) o a01–a11 (complementario)."); return; }
      // Números de respuesta correcta: si alguna pregunta usa 0, se interpretan empezando en 0; si no, empezando en 1.
      // Solo cuentan las preguntas con lista de opciones (con "correcta" + "incorrectas", un número es texto de respuesta)
      const nums = o.preguntas.map((q) => (q && typeof q === "object" && !Array.isArray(q) && Array.isArray(firstDef(q.o, q.opciones, q.respuestas, q.alternativas)) ? firstDef(q.correcta, q.respuesta_correcta, q.respuestaCorrecta, q.solucion, q.respuesta) : undefined)).filter((x) => typeof x === "number" || (typeof x === "string" && /^\d+$/.test(x.trim())));
      const numBase = nums.some((x) => Number(x) === 0) ? 0 : 1;
      if (nums.length) avisos.push(temaById[id].label + ": la respuesta correcta viene como número; se ha interpretado empezando en " + numBase + " (" + (numBase ? "1 = A" : "0 = A") + "). Revisa la muestra.");
      const t = temas[id] || (temas[id] = { titulo: "", resumen: [], preguntas: [] });
      const tit = firstDef(o.titulo, o.título, o.nombre);
      if (tit) t.titulo = String(tit).trim();
      const res = firstDef(o.resumen, o.ideas_clave, o.ideasClave, o.ideas);
      if (Array.isArray(res)) t.resumen = t.resumen.concat(res.map(String).map((x) => x.trim()).filter(Boolean));
      else if (typeof res === "string" && res.trim()) t.resumen = t.resumen.concat(res.split(/\n+/).map((x) => x.replace(/^[-•*]\s*/, "").trim()).filter(Boolean));
      o.preguntas.forEach((q, i) => {
        const r = normQuestion(q, numBase);
        if (r.error) errores.push(temaById[id].label + ", pregunta " + (i + 1) + ": " + r.error);
        else t.preguntas.push(r.q);
      });
    });
    Object.keys(temas).forEach((id) => { if (!temas[id].preguntas.length) delete temas[id]; });
    return { temas, errores, avisos };
  }

  // Fusiona con lo ya cargado: una pregunta con el mismo enunciado se actualiza; las nuevas se añaden.
  function mergeImport(parsed) {
    const resumen = [];
    Object.keys(parsed.temas).forEach((id) => {
      const nuevo = parsed.temas[id];
      const prev = state.temas[id] || { titulo: "", resumen: [], preguntas: [] };
      const byHash = new Map(prev.preguntas.map((q, i) => [hash(q[0]), i]));
      const preguntas = prev.preguntas.slice();
      let add = 0, upd = 0;
      nuevo.preguntas.forEach((q) => {
        const h = hash(q[0]);
        if (byHash.has(h)) { preguntas[byHash.get(h)] = q; upd++; }
        else { byHash.set(h, preguntas.length); preguntas.push(q); add++; }
      });
      state.temas[id] = {
        titulo: nuevo.titulo || prev.titulo || "",
        resumen: nuevo.resumen.length ? nuevo.resumen : prev.resumen || [],
        preguntas, ts: Date.now()
      };
      resumen.push({ id, add, upd, total: preguntas.length });
    });
    applyImports(); save();
    return resumen;
  }

  const PROMPT_FORMATO = `Cuando termines cada tema, entrégamelo en un bloque JSON con este formato exacto, para importarlo en mi plataforma de estudio (Aula CHS):

{
  "tema": "q21",
  "titulo": "Título del tema",
  "resumen": ["Idea clave 1", "Idea clave 2"],
  "preguntas": [
    {
      "p": "Enunciado de la pregunta",
      "correcta": "Texto de la respuesta correcta",
      "incorrectas": ["Incorrecta 1", "Incorrecta 2", "Incorrecta 3"],
      "e": "Explicación breve y artículo o fuente"
    }
  ]
}

Códigos de tema: c01 a c15 para el temario común del grupo M2 (Anexo VI) y q01 a q32 para el temario específico de Química (Anexo VII), en el orden de la convocatoria. Pon siempre el texto completo de la respuesta correcta en "correcta" (no una letra) y no repitas opciones.`;

  let importPreview = null;
  function renderImportar() {
    const cargados = T.temas.filter((t) => t.mio);
    const oficiales = T.temas.filter((t) => bloqueById[t.bloque].oficial);
    const nOfMios = oficiales.filter((t) => t.mio).length;
    const mine = state.custom;
    setView(`
      <section class="stack">
        <span class="eyebrow">Importar</span>
        <h1>Carga tus temas y preguntas</h1>
        <p class="lead">Pega aquí los temas que elaboras en otra conversación. Al cargar un tema, sus preguntas de ejemplo desaparecen y se usan solo las tuyas.</p>
      </section>

      <section class="kpis">
        <div class="kpi"><div class="value">${nOfMios}<small class="muted"> / ${oficiales.length}</small></div><div class="label">Temas oficiales con tus preguntas</div></div>
        <div class="kpi"><div class="value">${cargados.reduce((a, t) => a + t.preguntas.length, 0)}</div><div class="label">Preguntas tuyas cargadas</div></div>
      </section>

      <section class="panel stack">
        <h2>Pegar o subir temas</h2>
        <div class="field"><label for="imp-temas">JSON de uno o varios temas</label>
          <textarea id="imp-temas" class="num" style="min-height:180px;font-size:.82rem" placeholder='{"tema":"q21","titulo":"…","resumen":["…"],"preguntas":[{"p":"…","correcta":"…","incorrectas":["…","…","…"],"e":"…"}]}'></textarea></div>
        <div class="row">
          <button class="btn btn-primary" id="imp-check">Comprobar</button>
          <label class="btn" for="imp-temas-file" style="font-weight:600">Subir archivos .json o .txt</label>
          <input type="file" id="imp-temas-file" accept=".json,.txt,application/json,text/plain" multiple hidden>
          <button class="btn btn-ghost" id="imp-clear">Vaciar</button>
        </div>
        <p class="muted" style="font-size:.9rem">Puedes pegar varios bloques seguidos, tal como te los da la otra conversación (con o sin <code>\`\`\`json</code>). Si vuelves a cargar un tema, las preguntas con el mismo enunciado se actualizan y las nuevas se añaden.</p>
        <div id="imp-preview"></div>
      </section>

      <section class="stack">
        <h2>Temas cargados (${cargados.length})</h2>
        ${cargados.length ? `<div class="panel-flat table-wrap"><table>
          <thead><tr><th>Tema</th><th class="num">Preguntas</th><th class="num">Ideas clave</th><th></th></tr></thead>
          <tbody>${cargados.map((t) => `<tr>
            <td><a href="#tema-${t.id}">${t.label}. ${esc(t.titulo)}</a></td>
            <td class="num">${t.preguntas.length}</td><td class="num">${(state.temas[t.id].resumen || []).length || "—"}</td>
            <td class="num">${importPreview && importPreview.quitar === t.id
              ? `<button class="btn btn-sm btn-danger" data-quitar-ok="${t.id}">Confirmar</button> <button class="btn btn-sm" data-quitar-no>Cancelar</button>`
              : `<button class="btn btn-sm btn-ghost" data-quitar="${t.id}">Quitar</button>`}</td></tr>`).join("")}</tbody>
        </table></div>
        <p class="muted" style="font-size:.9rem">Quitar un tema borra tus preguntas de ese tema en este navegador y vuelve a mostrar las de ejemplo.</p>`
        : `<div class="panel empty">Aún no has cargado ningún tema. Mientras tanto, cada tema muestra preguntas de ejemplo.</div>`}
      </section>

      <section class="stack">
        <h2>Formato para la otra conversación</h2>
        <p class="muted">Copia este texto y pégalo en la conversación donde elaboras los temas, para que te los entregue listos para importar.</p>
        <pre class="panel-flat num" style="white-space:pre-wrap;font-size:.8rem;margin:0" id="prompt-formato">${esc(PROMPT_FORMATO)}</pre>
        <div><button class="btn btn-sm" id="copy-prompt">Copiar instrucciones</button></div>
        <details class="panel-flat"><summary style="cursor:pointer;font-weight:600">Lista de códigos de tema</summary>
          <div class="table-wrap" style="margin-top:10px"><table><tbody>
            ${T.temas.map((t) => `<tr><td class="num">${t.id}</td><td>${t.label}. ${esc(ORIG[t.id].titulo)}</td></tr>`).join("")}
          </tbody></table></div>
        </details>
      </section>

      <details class="panel-flat stack">
        <summary style="cursor:pointer;font-weight:600">Añadir una pregunta suelta (${mine.length} guardadas)</summary>
        <form class="stack" id="qform" style="margin-top:12px">
          <div class="field"><label for="q-tema">Tema</label>
            <select id="q-tema">${T.temas.map((t) => `<option value="${t.id}">${t.label}. ${esc(t.titulo)}</option>`).join("")}</select></div>
          <div class="field"><label for="q-p">Enunciado</label><textarea id="q-p" required></textarea></div>
          <div class="field"><label for="q-ok" style="color:var(--ok)">Respuesta correcta</label><input type="text" id="q-ok" required></div>
          <div class="form-grid">
            ${[1, 2, 3].map((i) => `<div class="field"><label for="q-ko${i}">Incorrecta ${i}</label><input type="text" id="q-ko${i}" ${i === 1 ? "required" : ""}></div>`).join("")}
          </div>
          <div class="field"><label for="q-e">Explicación o artículo (opcional)</label><input type="text" id="q-e"></div>
          <div><button class="btn btn-primary" type="submit">Guardar pregunta</button></div>
        </form>
        ${mine.map((q) => `<div class="stack" style="gap:4px;border-top:1px solid var(--line);padding-top:10px;margin-top:10px">
          <span class="eyebrow">${temaById[q.tema] ? temaById[q.tema].label : "?"}</span>
          <strong>${esc(q.p)}</strong>
          <span style="color:var(--ok)">${esc(q.o[0])}</span>
          <div><button class="btn btn-sm btn-danger" data-del="${esc(q.id)}">Eliminar</button></div>
        </div>`).join("")}
      </details>

      <section class="stack">
        <h2>Copia de seguridad</h2>
        <p class="muted">Tus temas cargados, tus preguntas y tu progreso se guardan solo en este navegador. Exporta una copia de vez en cuando para no perderlos o para pasarlos a otro dispositivo.</p>
        ${backupControls()}
      </section>
    `);
    bindBackup();

    const ta = document.getElementById("imp-temas");
    const box = document.getElementById("imp-preview");
    const showPreview = () => {
      const parsed = parseImport(ta.value);
      const ids = Object.keys(parsed.temas);
      const nq = ids.reduce((a, id) => a + parsed.temas[id].preguntas.length, 0);
      box.innerHTML = `<div class="stack" style="gap:10px">
        ${ids.map((id) => { const t = parsed.temas[id], q = t.preguntas[0]; return `<div class="panel-flat stack" style="gap:6px">
          <div class="row" style="justify-content:space-between"><strong>${temaById[id].label}${t.titulo ? ". " + esc(t.titulo) : ""}</strong><span class="chip accent num">${t.preguntas.length} preguntas</span></div>
          ${temaById[id].mio ? '<span class="chip accent">Ya cargado: se fusiona con tus preguntas</span>' : '<span class="chip mid">Sustituye a las preguntas de ejemplo</span>'}
          <span class="muted" style="font-size:.9rem">Muestra: ${esc(q[0])}</span>
          <span style="color:var(--ok);font-size:.9rem">✓ ${esc(q[1][0])}</span>
        </div>`; }).join("")}
        ${parsed.avisos.map((a) => `<p class="explain">${esc(a)}</p>`).join("")}
        ${parsed.errores.length ? `<div class="panel-flat stack" style="gap:4px;border-color:var(--ko)"><strong style="color:var(--ko)">${parsed.errores.length} ${parsed.errores.length === 1 ? "problema" : "problemas"} (esas preguntas no se cargarán)</strong>
          ${parsed.errores.slice(0, 30).map((e) => `<span style="font-size:.9rem">· ${esc(e)}</span>`).join("")}${parsed.errores.length > 30 ? `<span class="muted">… y ${parsed.errores.length - 30} más</span>` : ""}</div>` : ""}
        ${nq ? `<div><button class="btn btn-primary" id="imp-load">Cargar ${nq} preguntas en ${ids.length} ${ids.length === 1 ? "tema" : "temas"}</button></div>` : ""}
      </div>`;
      const btn = document.getElementById("imp-load");
      if (btn) btn.onclick = () => {
        const r = mergeImport(parsed);
        const add = r.reduce((a, x) => a + x.add, 0), upd = r.reduce((a, x) => a + x.upd, 0);
        toast(add + " preguntas nuevas" + (upd ? " y " + upd + " actualizadas" : "") + " en " + r.length + (r.length === 1 ? " tema" : " temas"));
        importPreview = null; renderImportar();
      };
    };
    document.getElementById("imp-check").onclick = showPreview;
    document.getElementById("imp-clear").onclick = () => { ta.value = ""; box.innerHTML = ""; };
    document.getElementById("imp-temas-file").onchange = (ev) => {
      const files = [...ev.target.files]; if (!files.length) return;
      Promise.all(files.map((f) => f.text())).then((txts) => { ta.value = txts.join("\n\n"); showPreview(); });
    };
    document.getElementById("copy-prompt").onclick = () => {
      navigator.clipboard.writeText(PROMPT_FORMATO).then(() => toast("Instrucciones copiadas"), () => {
        const r = document.createRange(); r.selectNodeContents(document.getElementById("prompt-formato"));
        const sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(r); toast("Texto seleccionado: cópialo");
      });
    };
    $main.querySelectorAll("[data-quitar]").forEach((b) => (b.onclick = () => { importPreview = { quitar: b.dataset.quitar }; renderImportar(); }));
    $main.querySelectorAll("[data-quitar-no]").forEach((b) => (b.onclick = () => { importPreview = null; renderImportar(); }));
    $main.querySelectorAll("[data-quitar-ok]").forEach((b) => (b.onclick = () => {
      delete state.temas[b.dataset.quitarOk]; applyImports(); save(); importPreview = null; toast("Tema restaurado a las preguntas de ejemplo"); renderImportar();
    }));

    document.getElementById("qform").addEventListener("submit", (ev) => {
      ev.preventDefault();
      const v = (id) => document.getElementById(id).value.trim();
      const o = [v("q-ok"), v("q-ko1"), v("q-ko2"), v("q-ko3")].filter(Boolean);
      if (!v("q-p") || o.length < 2) { toast("Escribe el enunciado, la correcta y al menos una incorrecta"); return; }
      state.custom.push({ id: "u-" + Date.now().toString(36), tema: v("q-tema"), p: v("q-p"), o, e: v("q-e") });
      save(); toast("Pregunta guardada"); renderImportar();
    });
    $main.querySelectorAll("[data-del]").forEach((b) => (b.onclick = () => {
      state.custom = state.custom.filter((q) => q.id !== b.dataset.del);
      delete state.stats[b.dataset.del]; save(); renderImportar();
    }));
  }

  render();
})();
