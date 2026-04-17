// ===== Video Page Logic =====
let videoSortCol = null, videoSortDir = 1;

function renderVideoRatings() {
  const row = document.getElementById('video-ratings-row');
  if (!row) return;
  row.innerHTML = VIDEO_RATINGS.map(r => {
    const stars = '★'.repeat(r.score) + '☆'.repeat(5 - r.score);
    return `<div class="rating-card ${r.score === 5 ? 'top' : ''}" onclick="filterByRatingCard('vfilter-platform','${r.name}','#page-video .table-section')" style="cursor:pointer" title="点击筛选 ${r.name}">
      <div class="rc-header">
        <span class="rc-name">${r.name}</span>
        <span class="rc-stars">${stars}</span>
      </div>
      <ul class="rc-reasons">${r.reasons.map(t => `<li>${t}</li>`).join('')}</ul>
    </div>`;
  }).join('');
}

function initVideoPage() {
  renderVideoRatings();
  populateVideoFilters();
  renderVideoTable(VIDEO_PLANS);
  const countEl = document.getElementById('video-filter-count');
  if (countEl) countEl.textContent = `显示 ${VIDEO_PLANS.length} / ${VIDEO_PLANS.length} 个方案`;

  const platformFilter = document.getElementById('vfilter-platform');
  const priceFilter = document.getElementById('vfilter-price');
  if (platformFilter) platformFilter.addEventListener('change', applyVideoFilters);
  if (priceFilter) priceFilter.addEventListener('change', applyVideoFilters);

  const resetBtn = document.getElementById('video-reset-btn');
  if (resetBtn) resetBtn.addEventListener('click', resetVideoFilters);

  document.querySelectorAll('#page-video thead th[data-sort]').forEach(th => {
    th.addEventListener('click', () => {
      const col = th.dataset.sort;
      videoSortDir = videoSortCol === col ? videoSortDir * -1 : 1;
      videoSortCol = col;
      document.querySelectorAll('#page-video thead th').forEach(t => t.classList.remove('sorted-asc', 'sorted-desc'));
      th.classList.add(videoSortDir === 1 ? 'sorted-asc' : 'sorted-desc');
      applyVideoFilters();
    });
  });
}

function populateVideoFilters() {
  const platforms = [...new Set(VIDEO_PLANS.map(p => p.platform))];
  const sel = document.getElementById('vfilter-platform');
  if (!sel) return;
  platforms.forEach(v => {
    const o = document.createElement('option');
    o.value = v; o.textContent = v;
    sel.appendChild(o);
  });
}

function applyVideoFilters() {
  const fp = document.getElementById('vfilter-platform')?.value || '';
  const priceValue = document.getElementById('vfilter-price')?.value ?? '';
  const hasPrice = priceValue !== '';
  const price = hasPrice ? parseFloat(priceValue) : null;

  let data = VIDEO_PLANS.filter(p => {
    if (fp && p.platform !== fp) return false;
    if (hasPrice) {
      const effectivePrice = p.monthly !== null ? p.monthly : (p.yearly !== null ? p.yearly / 12 : null);
      if (price === 0) return effectivePrice === 0;
      if (effectivePrice === null || effectivePrice > price) return false;
    }
    return true;
  });

  if (videoSortCol) {
    data = [...data].sort((a, b) => {
      let av = videoSortCol === 'yearlyAvg'
        ? (a.yearly !== null ? Math.round(a.yearly / 12) : null)
        : a[videoSortCol];
      let bv = videoSortCol === 'yearlyAvg'
        ? (b.yearly !== null ? Math.round(b.yearly / 12) : null)
        : b[videoSortCol];
      if (av === null) av = Infinity;
      if (bv === null) bv = Infinity;
      if (typeof av === 'string') return av.localeCompare(bv) * videoSortDir;
      return (av - bv) * videoSortDir;
    });
  }

  renderVideoTable(data);
  const countEl = document.getElementById('video-filter-count');
  if (countEl) countEl.textContent = `显示 ${data.length} / ${VIDEO_PLANS.length} 个方案`;
}

function resetVideoFilters() {
  const sel = document.getElementById('vfilter-platform');
  const price = document.getElementById('vfilter-price');
  if (sel) sel.value = '';
  if (price) price.value = '';
  videoSortCol = null; videoSortDir = 1;
  document.querySelectorAll('#page-video thead th').forEach(t => t.classList.remove('sorted-asc', 'sorted-desc'));
  renderVideoTable(VIDEO_PLANS);
  const countEl = document.getElementById('video-filter-count');
  if (countEl) countEl.textContent = `显示 ${VIDEO_PLANS.length} / ${VIDEO_PLANS.length} 个方案`;
}

function vNa() { return '<span class="price-na">—</span>'; }
function vFmt(n) { return n === null ? vNa() : n.toLocaleString(); }

function renderVideoTable(plans) {
  const tbody = document.getElementById('video-plans-tbody');
  if (!tbody) return;
  if (!plans.length) {
    tbody.innerHTML = `<tr><td colspan="10" style="text-align:center;padding:40px;color:#94A3B8">没有符合条件的方案，请调整筛选条件</td></tr>`;
    return;
  }
  tbody.innerHTML = plans.map(p => {
    const features = p.features.length
      ? p.features.map(f => `<span class="benefit-tag">${f}</span>`).join('')
      : vNa();
    const monthlyPrice = p.monthly !== null
      ? (p.monthly === 0 ? '<span class="price-free">免费</span>' : `<span class="price-main">¥${p.monthly}</span>`)
      : vNa();
    const yearlyAvg = p.yearly ? Math.round(p.yearly / 12) : null;
    return `<tr>
      <td class="sticky-col platform-cell">${p.platform}</td>
      <td>${p.name}</td>
      <td><a href="${p.link}" target="_blank" class="open-btn">开通 →</a></td>
      <td class="num">${monthlyPrice}</td>
      <td class="num">${yearlyAvg ? `<span class="price-yearly">¥${yearlyAvg}</span>` : vNa()}</td>
      <td class="num">${vFmt(p.yearly)}</td>
      <td>${p.credits}</td>
      <td>${p.videoLen}</td>
      <td>${p.resolution}</td>
      <td>${features}</td>
      <td><span class="note-text">${p.note || '—'}</span></td>
    </tr>`;
  }).join('');
}
