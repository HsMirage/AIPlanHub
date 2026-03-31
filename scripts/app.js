let sortCol = null, sortDir = 1;

function renderRatings() {
  const row = document.getElementById('ratings-row');
  row.innerHTML = RATINGS.map(r => {
    const stars = '★'.repeat(r.score) + '☆'.repeat(5 - r.score);
    return `<div class="rating-card ${r.score === 5 ? 'top' : ''}">
      <div class="rc-header">
        <span class="rc-name">${r.name}</span>
        <span class="rc-stars">${stars}</span>
      </div>
      <ul class="rc-reasons">${r.reasons.map(t => `<li>${t}</li>`).join('')}</ul>
    </div>`;
  }).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  renderRatings();
  populateFilters();
  renderTable(PLANS);
  document.getElementById('filter-count').textContent = `显示 ${PLANS.length} / ${PLANS.length} 个方案`;

  ['filter-platform','filter-model','filter-price','filter-quarterly','filter-yearly']
    .forEach(id => document.getElementById(id).addEventListener('change', applyFilters));
  document.getElementById('reset-btn').addEventListener('click', resetFilters);

  document.querySelectorAll('thead th[data-sort]').forEach(th => {
    th.addEventListener('click', () => {
      const col = th.dataset.sort;
      sortDir = sortCol === col ? sortDir * -1 : 1;
      sortCol = col;
      document.querySelectorAll('thead th').forEach(t => t.classList.remove('sorted-asc','sorted-desc'));
      th.classList.add(sortDir === 1 ? 'sorted-asc' : 'sorted-desc');
      applyFilters();
    });
  });
});

function populateFilters() {
  const platforms = [...new Set(PLANS.map(p => p.platform))];
  const pSel = document.getElementById('filter-platform');
  platforms.forEach(v => {
    const o = document.createElement('option');
    o.value = v; o.textContent = v;
    pSel.appendChild(o);
  });

  const models = [...new Set(PLANS.flatMap(p => p.models))].sort();
  const mSel = document.getElementById('filter-model');
  models.forEach(v => {
    const o = document.createElement('option');
    o.value = v; o.textContent = v;
    mSel.appendChild(o);
  });
}

function getFilterVal(id) {
  return parseFloat(document.getElementById(id).value) || 0;
}

function applyFilters() {
  const fp = document.getElementById('filter-platform').value;
  const fm = document.getElementById('filter-model').value;
  const price    = getFilterVal('filter-price');
  const quarterly = getFilterVal('filter-quarterly');
  const yearly   = getFilterVal('filter-yearly');

  let data = PLANS.filter(p => {
    if (fp && p.platform !== fp) return false;
    if (fm && !p.models.includes(fm)) return false;
    if (price    && p.monthly > price) return false;
    if (quarterly && (p.quarterly === null || p.quarterly / 3 > quarterly)) return false;
    if (yearly   && (p.yearly   === null || p.yearly   / 12 > yearly))    return false;
    return true;
  });

  if (sortCol) {
    data = [...data].sort((a, b) => {
      let av = sortCol === 'quarterlyAvg' ? (a.quarterly ? a.quarterly/3 : null)
             : sortCol === 'yearlyAvg'    ? (a.yearly   ? a.yearly/12   : null)
             : a[sortCol];
      let bv = sortCol === 'quarterlyAvg' ? (b.quarterly ? b.quarterly/3 : null)
             : sortCol === 'yearlyAvg'    ? (b.yearly   ? b.yearly/12   : null)
             : b[sortCol];
      if (av === null) av = Infinity;
      if (bv === null) bv = Infinity;
      if (typeof av === 'string') return av.localeCompare(bv) * sortDir;
      return (av - bv) * sortDir;
    });
  }

  renderTable(data);
  document.getElementById('filter-count').textContent = `显示 ${data.length} / ${PLANS.length} 个方案`;
}

function resetFilters() {
  ['filter-platform','filter-model','filter-price','filter-quarterly','filter-yearly']
    .forEach(id => { document.getElementById(id).value = ''; });
  sortCol = null; sortDir = 1;
  document.querySelectorAll('thead th').forEach(t => t.classList.remove('sorted-asc','sorted-desc'));
  renderTable(PLANS);
  document.getElementById('filter-count').textContent = `显示 ${PLANS.length} / ${PLANS.length} 个方案`;
}

function na() { return '<span class="price-na">—</span>'; }
function fmt(n) { return n === null ? na() : n.toLocaleString(); }

function renderTable(plans) {
  const tbody = document.getElementById('plans-tbody');
  if (!plans.length) {
    tbody.innerHTML = `<tr><td colspan="12" style="text-align:center;padding:40px;color:#94A3B8">没有符合条件的方案，请调整筛选条件</td></tr>`;
    return;
  }
  tbody.innerHTML = plans.map(p => {
    const qAvg = p.quarterly ? Math.round(p.quarterly / 3) : null;
    const yAvg = p.yearly    ? Math.round(p.yearly    / 12) : null;
    const firstBadge = p.firstMonth ? `<span class="badge-first">首月¥${p.firstMonth}</span>` : '';
    const models   = p.models.map(m => `<span class="model-tag">${m}</span>`).join('');
    const benefits = p.benefits.length
      ? p.benefits.map(b => `<span class="benefit-tag">${b}</span>`).join('')
      : na();
    return `<tr>
      <td class="sticky-col platform-cell">${p.platform}</td>
      <td>${p.name}${firstBadge}</td>
      <td><a href="${p.link}" target="_blank" class="open-btn">开通 →</a></td>
      <td class="num"><span class="price-main">¥${p.monthly}</span></td>
      <td class="num">${qAvg ? `<span class="price-yearly">¥${qAvg}</span>` : na()}</td>
      <td class="num">${yAvg ? `<span class="price-yearly">¥${yAvg}</span>` : na()}</td>
      <td class="num">${p.firstMonth ? `¥${p.firstMonth}` : na()}</td>
      <td class="num">${fmt(p.req5h)}</td>
      <td class="num">${fmt(p.reqMonth)}</td>
      <td>${models}</td>
      <td>${benefits}</td>
      <td><span class="note-text">${p.note || '—'}</span></td>
    </tr>`;
  }).join('');
}
