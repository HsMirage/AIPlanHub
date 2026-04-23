// ===== Image Page Logic =====
let imageSortCol = null, imageSortDir = 1;

function renderImageRatings() {
  const row = document.getElementById('image-ratings-row');
  if (!row) return;
  row.innerHTML = IMAGE_RATINGS.map(r => {
    const stars = '★'.repeat(r.score) + '☆'.repeat(5 - r.score);
    const adBadge = r.isAd ? `<span style="position:absolute;bottom:8px;right:8px;font-size:11px;color:rgba(148,163,184,0.7);background:rgba(15,23,42,0.3);padding:2px 6px;border-radius:4px;pointer-events:none;">广告</span>` : '';
    return `<div class="rating-card ${r.score === 5 ? 'top' : ''}" onclick="filterByRatingCard('ifilter-platform','${r.name}','#page-image .table-section')" style="cursor:pointer;position:relative;" title="点击筛选 ${r.name}">
      ${adBadge}
      <div class="rc-header">
        <span class="rc-name">${r.name}</span>
        <span class="rc-stars">${stars}</span>
      </div>
      <ul class="rc-reasons">${r.reasons.map(t => `<li>${t}</li>`).join('')}</ul>
    </div>`;
  }).join('');
}

function initImagePage() {
  renderImageRatings();
  populateImageFilters();
  renderImageTable(IMAGE_PLANS);
  const countEl = document.getElementById('image-filter-count');
  if (countEl) countEl.textContent = `显示 ${IMAGE_PLANS.length} / ${IMAGE_PLANS.length} 个方案`;

  const platformFilter = document.getElementById('ifilter-platform');
  const priceFilter = document.getElementById('ifilter-price');
  if (platformFilter) platformFilter.addEventListener('change', applyImageFilters);
  if (priceFilter) priceFilter.addEventListener('change', applyImageFilters);

  const resetBtn = document.getElementById('image-reset-btn');
  if (resetBtn) resetBtn.addEventListener('click', resetImageFilters);

  document.querySelectorAll('#page-image thead th[data-sort]').forEach(th => {
    th.addEventListener('click', () => {
      const col = th.dataset.sort;
      imageSortDir = imageSortCol === col ? imageSortDir * -1 : 1;
      imageSortCol = col;
      document.querySelectorAll('#page-image thead th').forEach(t => t.classList.remove('sorted-asc', 'sorted-desc'));
      th.classList.add(imageSortDir === 1 ? 'sorted-asc' : 'sorted-desc');
      applyImageFilters();
    });
  });
}

function populateImageFilters() {
  const platforms = [...new Set(IMAGE_PLANS.map(p => p.platform))];
  const sel = document.getElementById('ifilter-platform');
  if (!sel) return;
  platforms.forEach(v => {
    const o = document.createElement('option');
    o.value = v; o.textContent = v;
    sel.appendChild(o);
  });
}

function applyImageFilters() {
  const fp = document.getElementById('ifilter-platform')?.value || '';
  const priceValue = document.getElementById('ifilter-price')?.value ?? '';
  const hasPrice = priceValue !== '';
  const price = hasPrice ? parseFloat(priceValue) : null;

  let data = IMAGE_PLANS.filter(p => {
    if (fp && p.platform !== fp) return false;
    if (hasPrice) {
      const effectivePrice = p.monthly !== null ? p.monthly : (p.yearly !== null ? p.yearly / 12 : null);
      if (price === 0) return effectivePrice === 0;
      if (effectivePrice === null || effectivePrice > price) return false;
    }
    return true;
  });

  if (imageSortCol) {
    data = [...data].sort((a, b) => {
      let av = imageSortCol === 'yearlyAvg'
        ? (a.yearly !== null ? Math.round(a.yearly / 12) : null)
        : a[imageSortCol];
      let bv = imageSortCol === 'yearlyAvg'
        ? (b.yearly !== null ? Math.round(b.yearly / 12) : null)
        : b[imageSortCol];
      if (av === null) av = Infinity;
      if (bv === null) bv = Infinity;
      if (typeof av === 'string') return av.localeCompare(bv) * imageSortDir;
      return (av - bv) * imageSortDir;
    });
  }

  renderImageTable(data);
  const countEl = document.getElementById('image-filter-count');
  if (countEl) countEl.textContent = `显示 ${data.length} / ${IMAGE_PLANS.length} 个方案`;
}

function resetImageFilters() {
  const sel = document.getElementById('ifilter-platform');
  const price = document.getElementById('ifilter-price');
  if (sel) sel.value = '';
  if (price) price.value = '';
  imageSortCol = null; imageSortDir = 1;
  document.querySelectorAll('#page-image thead th').forEach(t => t.classList.remove('sorted-asc', 'sorted-desc'));
  renderImageTable(IMAGE_PLANS);
  const countEl = document.getElementById('image-filter-count');
  if (countEl) countEl.textContent = `显示 ${IMAGE_PLANS.length} / ${IMAGE_PLANS.length} 个方案`;
}

function iNa() { return '<span class="price-na">—</span>'; }
function iFmt(n) { return n === null ? iNa() : n.toLocaleString(); }

function renderImageTable(plans) {
  const tbody = document.getElementById('image-plans-tbody');
  if (!tbody) return;
  if (!plans.length) {
    tbody.innerHTML = `<tr><td colspan="10" style="text-align:center;padding:40px;color:#94A3B8">没有符合条件的方案，请调整筛选条件</td></tr>`;
    return;
  }
  tbody.innerHTML = plans.map(p => {
    const features = p.features.length
      ? p.features.map(f => `<span class="benefit-tag">${f}</span>`).join('')
      : iNa();
    const monthlyPrice = p.monthly !== null
      ? (p.monthly === 0 ? '<span class="price-free">免费</span>' : `<span class="price-main">¥${p.monthly}</span>`)
      : iNa();
    const yearlyAvg = p.yearly ? Math.round(p.yearly / 12) : null;
    return `<tr>
      <td class="sticky-col platform-cell">${p.platform}</td>
      <td>${p.name}</td>
      <td><a href="${p.link}" target="_blank" class="open-btn">开通 →</a></td>
      <td class="num">${monthlyPrice}</td>
      <td class="num">${yearlyAvg ? `<span class="price-yearly">¥${yearlyAvg}</span>` : iNa()}</td>
      <td class="num">${iFmt(p.yearly)}</td>
      <td>${p.credits}</td>
      <td>${p.resolution}</td>
      <td>${features}</td>
      <td><span class="note-text">${p.note || '—'}</span></td>
    </tr>`;
  }).join('');
}
