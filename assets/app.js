/* ============================================================
   Redes y Comunicaciones — motor compartido
   Progreso (localStorage), barra de lectura, flashcards, quiz.
   Depende de assets/data.js (RC_DATA) cuando se usan mazos/quizzes.
   ============================================================ */
(function (global) {
  'use strict';
  const NS = 'rc:'; // namespace localStorage

  const store = {
    get(key, fallback) {
      try { const v = localStorage.getItem(NS + key); return v == null ? fallback : JSON.parse(v); }
      catch (e) { return fallback; }
    },
    set(key, val) {
      try { localStorage.setItem(NS + key, JSON.stringify(val)); } catch (e) {}
    }
  };

  // ---------- Progreso por capítulo ----------
  // estructura: rc:progress = { "01": {visited:true, quiz:80, flashed:true}, ... }
  function getProgress() { return store.get('progress', {}); }
  function setChapter(ch, patch) {
    const p = getProgress();
    p[ch] = Object.assign({}, p[ch], patch);
    store.set('progress', p);
    return p[ch];
  }
  // % completado de un capítulo: lectura 40 + flashcards 20 + quiz 40
  function chapterPct(ch) {
    const c = (getProgress())[ch] || {};
    let pct = 0;
    if (c.visited) pct += 40;
    if (c.flashed) pct += 20;
    if (typeof c.quiz === 'number') pct += Math.round((c.quiz / 100) * 40);
    return Math.min(100, pct);
  }
  function overallPct(chapterIds) {
    if (!chapterIds || !chapterIds.length) return 0;
    const sum = chapterIds.reduce((a, id) => a + chapterPct(id), 0);
    return Math.round(sum / chapterIds.length);
  }

  // ---------- Barra de progreso de lectura ----------
  function initReadingBar() {
    let bar = document.getElementById('reading-bar');
    if (!bar) { bar = document.createElement('div'); bar.id = 'reading-bar'; document.body.prepend(bar); }
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const pct = h > 0 ? (window.scrollY / h) * 100 : 0;
      bar.style.width = pct + '%';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll();
  }

  // ---------- Marcar capítulo como visitado ----------
  function markVisited(ch) {
    if (!ch) return;
    setChapter(ch, { visited: true });
  }

  // ---------- Resaltar nav activo ----------
  function highlightNav() {
    const here = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav a').forEach(a => {
      const href = a.getAttribute('href');
      if (href === here) a.classList.add('active');
    });
  }

  // ---------- Flashcards ----------
  function escapeHTML(s) { const d = document.createElement('div'); d.textContent = s == null ? '' : s; return d.innerHTML; }

  function mountFlashcards(container, cards, opts) {
    opts = opts || {};
    const el = typeof container === 'string' ? document.getElementById(container) : container;
    if (!el || !cards || !cards.length) return;
    let order = cards.map((_, i) => i);
    if (opts.shuffle) order = shuffle(order);
    let idx = 0;

    el.innerHTML = `
      <div class="flash-controls">
        <button class="btn btn-ghost btn-sm" data-act="prev">‹ Anterior</button>
        <span class="flash-counter"></span>
        <button class="btn btn-ghost btn-sm" data-act="next">Siguiente ›</button>
        <button class="btn btn-ghost btn-sm" data-act="shuffle">⤮ Mezclar</button>
      </div>
      <div class="flashcard" data-fc>
        <div class="inner">
          <div class="face front"><div class="q"></div><div class="hint">clic para ver respuesta</div></div>
          <div class="face back"><div class="a"></div><div class="hint">clic para volver</div></div>
        </div>
      </div>`;

    const fc = el.querySelector('[data-fc]');
    const qEl = el.querySelector('.front .q');
    const aEl = el.querySelector('.back .a');
    const counter = el.querySelector('.flash-counter');

    function render() {
      const c = cards[order[idx]];
      fc.classList.remove('flipped');
      qEl.innerHTML = escapeHTML(c.q);
      aEl.innerHTML = c.a; // permite formato simple en respuestas de data.js
      counter.textContent = `${idx + 1} / ${cards.length}`;
    }
    fc.addEventListener('click', () => fc.classList.toggle('flipped'));
    el.querySelector('[data-act="next"]').addEventListener('click', () => { idx = (idx + 1) % cards.length; render(); if (idx === 0 && opts.chapter) setChapter(opts.chapter, { flashed: true }); });
    el.querySelector('[data-act="prev"]').addEventListener('click', () => { idx = (idx - 1 + cards.length) % cards.length; render(); });
    el.querySelector('[data-act="shuffle"]').addEventListener('click', () => { order = shuffle(order); idx = 0; render(); });
    if (opts.chapter) setChapter(opts.chapter, { flashed: true });
    render();
  }

  // ---------- Quiz ----------
  // questions: [{q, options:[...], answer:Index, explain}]
  function mountQuiz(container, questions, opts) {
    opts = opts || {};
    const el = typeof container === 'string' ? document.getElementById(container) : container;
    if (!el || !questions || !questions.length) return;
    let qs = opts.shuffle ? shuffle(questions.slice()) : questions.slice();
    if (opts.limit) qs = qs.slice(0, opts.limit);

    el.innerHTML = '';
    const frag = document.createDocumentFragment();
    qs.forEach((q, i) => {
      const block = document.createElement('div');
      block.className = 'q-block';
      block.innerHTML = `<div class="q-text"><span class="qn">${i + 1}.</span>${escapeHTML(q.q)}</div>`;
      q.options.forEach((opt, oi) => {
        const lab = document.createElement('label');
        lab.className = 'opt';
        lab.innerHTML = `<input type="radio" name="q${i}" value="${oi}"><span>${escapeHTML(opt)}</span>`;
        block.appendChild(lab);
      });
      const ex = document.createElement('div');
      ex.className = 'q-explain';
      ex.innerHTML = '<strong>Explicación:</strong> ' + (q.explain || '');
      block.appendChild(ex);
      frag.appendChild(block);
    });
    el.appendChild(frag);

    const actions = document.createElement('div');
    actions.className = 'row';
    actions.style.marginTop = '8px';
    actions.innerHTML = `<button class="btn btn-primary" data-act="check">Corregir</button>
      <button class="btn btn-ghost" data-act="reset">Reintentar</button>`;
    el.appendChild(actions);

    const result = document.createElement('div');
    result.className = 'quiz-result';
    el.appendChild(result);

    actions.querySelector('[data-act="check"]').addEventListener('click', () => {
      let correct = 0;
      const blocks = el.querySelectorAll('.q-block');
      blocks.forEach((b, i) => {
        const chosen = b.querySelector('input:checked');
        const q = qs[i];
        b.querySelectorAll('.opt').forEach((o, oi) => {
          o.classList.add('disabled');
          if (oi === q.answer) o.classList.add('correct');
        });
        if (chosen) {
          const ci = parseInt(chosen.value, 10);
          if (ci === q.answer) correct++;
          else b.querySelectorAll('.opt')[ci].classList.add('wrong');
        }
        b.querySelector('.q-explain').classList.add('show');
      });
      const pct = Math.round((correct / qs.length) * 100);
      result.className = 'quiz-result show ' + (pct >= 60 ? 'pass' : 'fail');
      result.textContent = `${correct}/${qs.length} correctas · ${pct}%  ${pct >= 60 ? '✓ Aprobado' : '✗ A repasar'}`;
      if (opts.chapter) {
        const prev = (getProgress())[opts.chapter] || {};
        if (typeof prev.quiz !== 'number' || pct > prev.quiz) setChapter(opts.chapter, { quiz: pct });
      }
      if (typeof opts.onDone === 'function') opts.onDone(pct, correct, qs.length);
      result.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });

    actions.querySelector('[data-act="reset"]').addEventListener('click', () => mountQuiz(el, questions, opts));
  }

  // ---------- Utilidades ----------
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function fmtTime(sec) {
    const m = Math.floor(sec / 60), s = sec % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  }

  // ---------- Tema claro / oscuro ----------
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const btn = document.querySelector('.theme-toggle');
    if (btn) {
      btn.textContent = theme === 'dark' ? '☀️' : '🌙';
      btn.setAttribute('aria-label', theme === 'dark' ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro');
      btn.title = theme === 'dark' ? 'Tema claro' : 'Tema oscuro';
    }
  }
  function initTheme() {
    const saved = store.get('theme', 'light');
    const nav = document.querySelector('.nav');
    if (nav && !document.querySelector('.theme-toggle')) {
      const btn = document.createElement('button');
      btn.className = 'theme-toggle';
      btn.type = 'button';
      btn.addEventListener('click', () => {
        const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        store.set('theme', next);
        applyTheme(next);
      });
      nav.appendChild(btn);
    }
    applyTheme(saved);
  }

  // ---------- Auto-init ----------
  function init() {
    initTheme();
    initReadingBar();
    highlightNav();
    const ch = document.body.getAttribute('data-chapter');
    if (ch) markVisited(ch);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();

  global.RC = {
    store, getProgress, setChapter, chapterPct, overallPct,
    mountFlashcards, mountQuiz, shuffle, fmtTime, markVisited
  };
})(window);
