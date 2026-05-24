
// ============ QUIZ ============
function checkQuiz(formId) {
  const form = document.getElementById(formId);
  if (!form) return;
  const questions = form.querySelectorAll('.quiz-q');
  let correct = 0;
  let answered = 0;
  questions.forEach(q => {
    const right = parseInt(q.dataset.correct);
    const inputs = q.querySelectorAll('input[type=radio]');
    let picked = null;
    inputs.forEach(i => { if (i.checked) picked = parseInt(i.value); });
    if (picked !== null) answered++;
    q.querySelectorAll('.quiz-option').forEach((lbl, idx) => {
      lbl.classList.remove('correct', 'incorrect');
      if (idx === right) lbl.classList.add('correct');
      if (picked === idx && picked !== right) lbl.classList.add('incorrect');
    });
    if (picked === right) correct++;
    const exp = q.querySelector('.quiz-explain');
    if (exp) exp.classList.add('show');
  });
  const total = questions.length;
  const pct = Math.round((correct / total) * 100);
  const scoreEl = document.getElementById('score-' + formId);
  if (scoreEl) {
    let emoji = '🦈';
    if (pct >= 90) emoji = '🏆';
    else if (pct >= 80) emoji = '✨';
    else if (pct >= 60) emoji = '💪';
    else emoji = '📚';
    scoreEl.innerHTML = `<div class="quiz-score">
      ${emoji} Acertaste <span class="score-big">${correct} de ${total}</span>
      <span style="font-size:1.4rem;">(${pct}%)</span>
      ${answered < total ? `<div style="font-size:0.85rem;opacity:0.85;margin-top:6px;">Quedaron ${total - answered} preguntas sin responder</div>` : ''}
    </div>`;
    scoreEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  // Guardar progreso si es un quiz de capítulo
  const chapter = form.dataset.chapter;
  if (chapter && chapter !== 'all' && !chapter.startsWith('sim') && pct >= 80) {
    saveProgress(chapter);
  }
}

function resetQuiz(formId) {
  const form = document.getElementById(formId);
  if (!form) return;
  form.querySelectorAll('input[type=radio]').forEach(i => i.checked = false);
  form.querySelectorAll('.quiz-option').forEach(o => o.classList.remove('correct', 'incorrect'));
  form.querySelectorAll('.quiz-explain').forEach(e => e.classList.remove('show'));
  const scoreEl = document.getElementById('score-' + formId);
  if (scoreEl) scoreEl.innerHTML = '';
}

// ============ FLASHCARDS BULK ============
function flipAll(showBack) {
  document.querySelectorAll('.flashcard').forEach(fc => {
    if (showBack) fc.classList.add('flipped');
    else fc.classList.remove('flipped');
  });
}

function shuffleFlashcards() {
  const grid = document.getElementById('flashcards-grid');
  if (!grid) return;
  const cards = Array.from(grid.children);
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    grid.appendChild(cards[j]);
    cards.splice(j, 1);
  }
  // los que quedan se vuelven a colocar en el orden actual
  document.querySelectorAll('.flashcard').forEach(c => c.classList.remove('flipped'));
}

// ============ PROGRESS (localStorage) ============
const PROGRESS_KEY = 'com_progress_v1';

function getProgress() {
  try { return JSON.parse(localStorage.getItem(PROGRESS_KEY) || '{}'); }
  catch (e) { return {}; }
}

function saveProgress(chapterSlug) {
  const p = getProgress();
  p[chapterSlug] = { completed: true, date: new Date().toISOString() };
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(p));
  renderProgress();
}

function renderProgress() {
  const p = getProgress();
  document.querySelectorAll('.progress-cell').forEach(cell => {
    const ch = cell.dataset.chapter;
    if (p[ch] && p[ch].completed) cell.classList.add('done');
    else cell.classList.remove('done');
  });
}

function resetProgress() {
  if (!confirm('¿Reiniciar todo tu progreso? No se puede deshacer.')) return;
  localStorage.removeItem(PROGRESS_KEY);
  renderProgress();
}

// ============ TIMER (simulacros) ============
const timers = {};
function startTimer(elId, minutes) {
  const el = document.getElementById(elId);
  if (!el) return;
  if (timers[elId]) clearInterval(timers[elId]);
  let remaining = minutes * 60;
  const update = () => {
    const m = Math.floor(remaining / 60);
    const s = remaining % 60;
    el.textContent = `⏱️ ${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
    if (remaining <= 0) {
      clearInterval(timers[elId]);
      el.textContent = '⏰ ¡Tiempo terminado!';
      el.style.color = 'var(--danger)';
      return;
    }
    if (remaining <= 60) el.style.color = 'var(--accent)';
    remaining--;
  };
  update();
  timers[elId] = setInterval(update, 1000);
}

// ============ INIT ============
document.addEventListener('DOMContentLoaded', () => {
  renderProgress();
});
