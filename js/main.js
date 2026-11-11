/* Floreamus Una — shared site script. Plant data lives in plants.js. */

/* ---------- Plant illustrations (inserted once per page) ---------- */
document.body.insertAdjacentHTML('afterbegin', `
<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
  <symbol id="pot" viewBox="0 0 200 220"><path d="M58 150h84l-10 66H68z" fill="#6B4E3D"/><rect x="52" y="140" width="96" height="16" rx="4" fill="#523B2E"/></symbol>
  <symbol id="upright" viewBox="0 0 200 220"><path d="M100 145 C92 100 88 60 96 18 C104 60 108 100 104 145Z" fill="#1B3022"/><path d="M90 145 C70 110 60 75 62 40 C80 75 92 110 96 145Z" fill="#8DAA91"/><path d="M110 145 C128 112 140 80 142 48 C122 80 112 112 104 145Z" fill="#4E6B55"/><use href="#pot"/></symbol>
  <symbol id="broad" viewBox="0 0 200 220"><path d="M100 145 C60 120 30 90 40 55 C70 50 95 80 100 145Z" fill="#4E6B55"/><path d="M100 145 C140 115 170 90 162 50 C130 48 106 80 100 145Z" fill="#1B3022"/><path d="M100 145 C92 100 90 60 100 25 C112 60 110 100 100 145Z" fill="#8DAA91"/><use href="#pot"/></symbol>
  <symbol id="trailing" viewBox="0 0 200 220"><path d="M100 140 C80 110 50 120 40 175" stroke="#1B3022" stroke-width="4" fill="none"/><path d="M100 140 C125 105 158 120 165 182" stroke="#1B3022" stroke-width="4" fill="none"/><g fill="#8DAA91"><ellipse cx="48" cy="150" rx="12" ry="7"/><ellipse cx="42" cy="172" rx="11" ry="6"/><ellipse cx="70" cy="122" rx="13" ry="7"/><ellipse cx="150" cy="128" rx="13" ry="7"/><ellipse cx="162" cy="155" rx="12" ry="6"/><ellipse cx="166" cy="178" rx="11" ry="6"/><ellipse cx="100" cy="115" rx="14" ry="8"/></g><use href="#pot"/></symbol>
  <symbol id="tall" viewBox="0 0 200 220"><rect x="97" y="40" width="6" height="105" fill="#1B3022"/><g fill="#4E6B55"><ellipse cx="80" cy="60" rx="22" ry="15"/><ellipse cx="122" cy="48" rx="22" ry="15"/><ellipse cx="78" cy="98" rx="22" ry="15"/><ellipse cx="124" cy="88" rx="22" ry="15"/><ellipse cx="100" cy="28" rx="18" ry="13"/></g><use href="#pot"/></symbol>
  <symbol id="fern" viewBox="0 0 200 220"><g stroke="#4E6B55" stroke-width="5" fill="none" stroke-linecap="round"><path d="M100 142 C80 110 55 95 30 100"/><path d="M100 142 C120 110 145 95 170 100"/><path d="M100 142 C90 100 80 70 70 45"/><path d="M100 142 C110 100 120 70 130 45"/><path d="M100 142 V35"/></g><g stroke="#8DAA91" stroke-width="3" stroke-dasharray="2 6" fill="none"><path d="M100 142 C80 110 55 95 30 100"/><path d="M100 142 C120 110 145 95 170 100"/><path d="M100 142 C90 100 80 70 70 45"/><path d="M100 142 C110 100 120 70 130 45"/></g><use href="#pot"/></symbol>
  <symbol id="palm" viewBox="0 0 200 220"><rect x="97" y="70" width="6" height="75" fill="#6B4E3D"/><g stroke="#4E6B55" stroke-width="6" fill="none" stroke-linecap="round"><path d="M100 72 C80 50 55 50 35 70"/><path d="M100 72 C120 50 145 50 165 70"/><path d="M100 72 C88 45 80 30 70 20"/><path d="M100 72 C112 45 120 30 130 20"/></g><use href="#pot"/></symbol>
  <symbol id="succulent" viewBox="0 0 200 220"><g fill="#4E6B55"><path d="M100 140 L80 85 L100 120 Z"/><path d="M100 140 L120 85 L100 120 Z"/><path d="M100 140 L60 100 L95 130 Z"/><path d="M100 140 L140 100 L105 130 Z"/><path d="M100 140 L100 70 L108 125 Z"/></g><use href="#pot"/></symbol>
  <symbol id="round" viewBox="0 0 200 220"><g fill="#4E6B55"><circle cx="75" cy="110" r="20"/><circle cx="125" cy="108" r="20"/><circle cx="100" cy="85" r="21"/><circle cx="60" cy="130" r="14"/><circle cx="140" cy="130" r="14"/></g><g fill="#8DAA91"><circle cx="100" cy="85" r="8"/></g><use href="#pot"/></symbol>
</defs></svg>`);

const slug = s => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
const art = id => `<svg width="70%" viewBox="0 0 200 220" aria-hidden="true"><use href="#${id}"/></svg>`;
const $ = id => document.getElementById(id);

/* ---------- Mobile menu & year ---------- */
document.querySelector('.menu-btn')?.addEventListener('click', () => $('menu').classList.toggle('open'));
if ($('yr')) $('yr').textContent = new Date().getFullYear();

/* ---------- The Sill: plant grid with filters ---------- */
function renderPlants(filter) {
  const grid = $('plant-grid'); if (!grid) return;
  const list = PLANTS.filter(p => filter === 'all' || (filter === 'pet' && p.pet) || (filter === 'easy' && p.easy) || (filter === 'low' && p.light.includes('low')));
  grid.innerHTML = list.map(p => `
    <div class="card">
      <div class="card-img">${art(p.art)}</div>
      <div class="card-body">
        <h3>${p.name}</h3><p class="latin">${p.latin}</p>
        <div class="tags">
          ${p.pet ? '<span class="tag">Pet-friendly</span>' : '<span class="tag warn">Keep away from pets</span>'}
          ${p.easy ? '<span class="tag">Easy-care</span>' : ''}
          ${p.light.includes('low') ? '<span class="tag">Low light OK</span>' : ''}
        </div>
        <a class="care-link" href="the-greenroom.html#${slug(p.name)}">Read the care guide →</a>
        <div class="card-foot">
          <span class="price">${p.price ? '£' + p.price : 'Coming soon'}</span>
          ${p.buyUrl ? `<a class="btn btn-primary btn-sm" href="${p.buyUrl}" target="_blank" rel="noopener">Buy</a>` : `<a class="btn btn-ghost btn-sm" href="#newsletter">Notify me</a>`}
        </div>
      </div>
    </div>`).join('');
  if ($('plant-count')) $('plant-count').textContent = `${list.length} plant${list.length === 1 ? '' : 's'}`;
}
document.querySelectorAll('.chip').forEach(c => c.addEventListener('click', () => {
  document.querySelectorAll('.chip').forEach(x => x.classList.remove('active'));
  c.classList.add('active'); renderPlants(c.dataset.filter);
}));
renderPlants('all');

/* ---------- Plant finder ---------- */
const answers = {};
document.querySelectorAll('.q').forEach(q => q.querySelectorAll('.opt').forEach(o => o.addEventListener('click', () => {
  q.querySelectorAll('.opt').forEach(x => x.classList.remove('sel'));
  o.classList.add('sel'); answers[q.dataset.q] = o.dataset.v;
})));
$('finder-go')?.addEventListener('click', () => {
  const box = $('finder-result'); box.style.display = 'block';
  if (!answers.light || !answers.pets || !answers.time) { box.innerHTML = '<p>Please answer all three questions first.</p>'; return; }
  const rank = { little: 0, some: 1, lots: 2 };
  let matches = PLANTS.filter(p => p.light.includes(answers.light))
    .filter(p => answers.pets === 'no' || p.pet)
    .filter(p => rank[p.care] <= rank[answers.time]);
  if (answers.time === 'lots') matches.sort((a, b) => rank[b.care] - rank[a.care]);
  if (!matches.length) matches = PLANTS.filter(p => (answers.pets === 'no' || p.pet) && p.easy);
  box.innerHTML = `<h3>Your matches</h3><ul>${matches.slice(0, 5).map(p => `<li><a href="the-greenroom.html#${slug(p.name)}" style="color:inherit"><strong>${p.name}</strong></a> <em>(${p.latin})</em>${p.pet ? ' · pet-friendly' : ''}</li>`).join('')}</ul>`;
});

/* ---------- The Greenroom: A–Z care guides with search ---------- */
function renderGuides(q = '') {
  const box = $('care-guides'); if (!box) return;
  const list = [...PLANTS].sort((a, b) => a.name.localeCompare(b.name))
    .filter(p => (p.name + ' ' + p.latin).toLowerCase().includes(q.toLowerCase()));
  box.innerHTML = list.length ? list.map(p => `
    <details id="${slug(p.name)}"><summary>${p.name}</summary>
      <p style="color:var(--muted);font-size:.93rem;margin-top:.6rem"><em>${p.latin}</em> · ${p.intro}</p>
      <div class="tags" style="margin-top:.4rem">${p.pet ? '<span class="tag">Pet-friendly</span>' : '<span class="tag warn">Keep away from pets</span>'}${p.easy ? '<span class="tag">Easy-care</span>' : '<span class="tag">Needs some experience</span>'}</div>
      <dl>${Object.entries(p.guide).map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join('')}</dl>
    </details>`).join('') : '<p style="color:var(--muted);padding:16px 0">No plants match that search.</p>';
}
renderGuides();
$('guide-search')?.addEventListener('input', e => renderGuides(e.target.value));
function openFromHash() {
  const id = location.hash.slice(1); const d = id && document.getElementById(id);
  if (d && d.tagName === 'DETAILS') { d.open = true; d.classList.add('flash'); setTimeout(() => d.scrollIntoView({ block: 'center' }), 50); }
}
openFromHash(); window.addEventListener('hashchange', openFromHash);

/* ---------- Seasonal tips (picks the current season) ---------- */
if ($('seasonal')) {
  const m = new Date().getMonth();
  const season = m < 2 || m === 11 ? 'Winter' : m < 5 ? 'Spring' : m < 8 ? 'Summer' : 'Autumn';
  $('season-name').textContent = season;
  $('season-tips').innerHTML = SEASONS[season].map(t => `<li>${t}</li>`).join('');
}

/* ---------- Bookshelf reviews ---------- */
if ($('reviews')) {
  $('reviews').innerHTML = REVIEWS.length
    ? REVIEWS.map(v => `<div class="review"><h3>${v.title}</h3><p class="by">by ${v.author} · reviewed by ${v.reviewer}</p><div class="leaves">${'🌿'.repeat(v.leaves)}</div><p>${v.text}</p></div>`).join('')
    : `<div class="review" style="grid-column:1/-1;text-align:center"><p>No reviews yet. Be the first to share what you're reading in the discussion below.</p></div>`;
}

/* ---------- Forms: friendly message until a real service is connected ---------- */
[['nl-form', 'nl-msg', 'Thank you! Sign-ups open soon.'], ['contact-form', 'contact-msg', "Thank you! Our contact form isn't connected yet, so please check back soon."]]
  .forEach(([f, m, text]) => $(f)?.addEventListener('submit', e => {
    if (!e.target.getAttribute('action')) { e.preventDefault(); $(m).textContent = text; e.target.reset(); }
  }));

/* ---------- Field Guide carousels ---------- */
document.querySelectorAll('.carousel').forEach(c => {
  const track = c.querySelector('.track'), slides = track.children, dots = c.querySelector('.dots');
  const prev = c.querySelector('.prev'), next = c.querySelector('.next');
  dots.innerHTML = [...slides].map((_, i) => `<button type="button" aria-label="Slide ${i + 1}"></button>`).join('');
  const go = i => track.scrollTo({ left: i * track.clientWidth, behavior: 'smooth' });
  const cur = () => Math.round(track.scrollLeft / track.clientWidth);
  const update = () => {
    const i = cur();
    dots.querySelectorAll('button').forEach((d, j) => d.classList.toggle('on', j === i));
    prev.disabled = i === 0; next.disabled = i === slides.length - 1;
  };
  prev.onclick = () => go(cur() - 1); next.onclick = () => go(cur() + 1);
  dots.querySelectorAll('button').forEach((d, j) => d.onclick = () => go(j));
  track.addEventListener('scroll', () => requestAnimationFrame(update));
  update();
});
