// ===== Audio Page Logic =====
let audioSortCol = null, audioSortDir = 1;

function renderAudioRatings() {
  const row = document.getElementById('audio-ratings-row');
  if (!row) return;
  row.innerHTML = AUDIO_RATINGS.map(r => {
    const stars = '★'.repeat(r.score) + '☆'.repeat(5 - r.score);
    return `<div class="rating-card ${r.score === 5 ? 'top' : ''}" onclick="filterByRatingCard('afilter-platform','${r.name}','#page-audio .table-section')" style="cursor:pointer" title="点击筛选 ${r.name}">
      <div class="rc-header">
        <span class="rc-name">${r.name}</span>
        <span class="rc-stars">${stars}</span>
      </div>
      <ul class="rc-reasons">${r.reasons.map(t => `<li>${t}</li>`).join('')}</ul>
    </div>`;
  }).join('');
}

function initAudioPage() {
  renderAudioRatings();
  populateAudioFilters();
  renderAudioTable(AUDIO_PLANS);
  const countEl = document.getElementById('audio-filter-count');
  if (countEl) countEl.textContent = `显示 ${AUDIO_PLANS.length} / ${AUDIO_PLANS.length} 个方案`;

  const platformFilter = document.getElementById('afilter-platform');
  const priceFilter = document.getElementById('afilter-price');
  if (platformFilter) platformFilter.addEventListener('change', applyAudioFilters);
  if (priceFilter) priceFilter.addEventListener('change', applyAudioFilters);

  const resetBtn = document.getElementById('audio-reset-btn');
  if (resetBtn) resetBtn.addEventListener('click', resetAudioFilters);

  document.querySelectorAll('#page-audio thead th[data-sort]').forEach(th => {
    th.addEventListener('click', () => {
      const col = th.dataset.sort;
      audioSortDir = audioSortCol === col ? audioSortDir * -1 : 1;
      audioSortCol = col;
      document.querySelectorAll('#page-audio thead th').forEach(t => t.classList.remove('sorted-asc', 'sorted-desc'));
      th.classList.add(audioSortDir === 1 ? 'sorted-asc' : 'sorted-desc');
      applyAudioFilters();
    });
  });
}

function populateAudioFilters() {
  const platforms = [...new Set(AUDIO_PLANS.map(p => p.platform))];
  const sel = document.getElementById('afilter-platform');
  if (!sel) return;
  platforms.forEach(v => {
    const o = document.createElement('option');
    o.value = v; o.textContent = v;
    sel.appendChild(o);
  });
}

function applyAudioFilters() {
  const fp = document.getElementById('afilter-platform')?.value || '';
  const priceValue = document.getElementById('afilter-price')?.value ?? '';
  const hasPrice = priceValue !== '';
  const price = hasPrice ? parseFloat(priceValue) : null;

  let data = AUDIO_PLANS.filter(p => {
    if (fp && p.platform !== fp) return false;
    if (hasPrice) {
      const effectivePrice = p.monthly !== null ? p.monthly : (p.yearly !== null ? p.yearly / 12 : null);
      if (price === 0) return effectivePrice === 0;
      if (effectivePrice === null || effectivePrice > price) return false;
    }
    return true;
  });

  if (audioSortCol) {
    data = [...data].sort((a, b) => {
      let av = audioSortCol === 'yearlyAvg'
        ? (a.yearly !== null ? Math.round(a.yearly / 12) : null)
        : a[audioSortCol];
      let bv = audioSortCol === 'yearlyAvg'
        ? (b.yearly !== null ? Math.round(b.yearly / 12) : null)
        : b[audioSortCol];
      if (av === null) av = Infinity;
      if (bv === null) bv = Infinity;
      if (typeof av === 'string') return av.localeCompare(bv) * audioSortDir;
      return (av - bv) * audioSortDir;
    });
  }

  renderAudioTable(data);
  const countEl = document.getElementById('audio-filter-count');
  if (countEl) countEl.textContent = `显示 ${data.length} / ${AUDIO_PLANS.length} 个方案`;
}

function resetAudioFilters() {
  const sel = document.getElementById('afilter-platform');
  const price = document.getElementById('afilter-price');
  if (sel) sel.value = '';
  if (price) price.value = '';
  audioSortCol = null; audioSortDir = 1;
  document.querySelectorAll('#page-audio thead th').forEach(t => t.classList.remove('sorted-asc', 'sorted-desc'));
  renderAudioTable(AUDIO_PLANS);
  const countEl = document.getElementById('audio-filter-count');
  if (countEl) countEl.textContent = `显示 ${AUDIO_PLANS.length} / ${AUDIO_PLANS.length} 个方案`;
}

function aNa() { return '<span class="price-na">—</span>'; }
function aFmt(n) { return n === null ? aNa() : n.toLocaleString(); }

function renderAudioTable(plans) {
  const tbody = document.getElementById('audio-plans-tbody');
  if (!tbody) return;
  if (!plans.length) {
    tbody.innerHTML = `<tr><td colspan="10" style="text-align:center;padding:40px;color:#94A3B8">没有符合条件的方案，请调整筛选条件</td></tr>`;
    return;
  }
  tbody.innerHTML = plans.map(p => {
    const features = p.features.length
      ? p.features.map(f => `<span class="benefit-tag">${f}</span>`).join('')
      : aNa();
    const monthlyPrice = p.monthly !== null
      ? (p.monthly === 0 ? '<span class="price-free">免费</span>' : `<span class="price-main">¥${p.monthly}</span>`)
      : aNa();
    const yearlyAvg = p.yearly ? Math.round(p.yearly / 12) : null;
    return `<tr>
      <td class="sticky-col platform-cell">${p.platform}</td>
      <td>${p.name}</td>
      <td><a href="${p.link}" target="_blank" class="open-btn">开通 →</a></td>
      <td class="num">${monthlyPrice}</td>
      <td class="num">${yearlyAvg ? `<span class="price-yearly">¥${yearlyAvg}</span>` : aNa()}</td>
      <td class="num">${aFmt(p.yearly)}</td>
      <td>${p.credits}</td>
      <td>${p.audioLen}</td>
      <td>${features}</td>
      <td><span class="note-text">${p.note || '—'}</span></td>
    </tr>`;
  }).join('');
}
