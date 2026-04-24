let tpSortCol = null, tpSortDir = 1;
const TP_MAX_MODEL_TAGS = 5;

const TP_PLATFORM_LATEST_MODELS = {
  'OpenCode Go': ['Qwen3.6-Plus'],
  'MiniMax': ['MiniMax-M2.7'],
  '腾讯·Token': ['HY-2.0', 'HY-2.0-Think'],
  '小米·MiMo': ['MiMo-V2-Pro'],
  '阿里·Token Plan': ['Qwen3.6-Plus'],
  'ChatGPT': ['GPT-5.4', 'GPT-Image-2'],
};

function tpGetCommonModelPriority(model) {
  if (model === 'GLM-5.1') return [1, 0];
  if (model === 'GLM-5') return [2, 0];
  if (model === 'qwen3.6-plus') return [3, 0];
  if (model === 'Qwen3.6-Plus') return [3, 1];
  if (model === 'GPT-5.4') return [4, 0];
  if (model === 'GPT-Image-2') return [5, 0];
  if (model === 'GPT-5.3-Codex') return [6, 0];
  if (model === 'GPT-5.2') return [7, 0];
  if (model === 'Kimi-K2.6') return [8, 0];
  if (model === 'kimi-k2.5') return [9, 0];
  if (model === 'DeepSeek-V3.2') return [10, 0];
  if (model === 'MiniMax-M2.7') return [11, 0];
  if (model === 'MiniMax-M2.5') return [12, 0];
  if (model.startsWith('GPT-')) return [13, 0];
  if (model.startsWith('MiniMax-')) return [12, 1];
  if (model.startsWith('MiMo')) return [14, 0];
  if (model.startsWith('HY-')) return [15, 0];
  if (model.startsWith('Hunyuan')) return [15, 1];
  return [99, 0];
}

function tpSortModelsForDisplay(platform, models) {
  const latestModels = TP_PLATFORM_LATEST_MODELS[platform] || [];
  return models
    .map((model, index) => {
      const latestIndex = latestModels.indexOf(model);
      const [commonPriority, commonSubPriority] = tpGetCommonModelPriority(model);
      return { model, index, latestIndex, commonPriority, commonSubPriority };
    })
    .sort((a, b) => {
      const aIsLatest = a.latestIndex !== -1;
      const bIsLatest = b.latestIndex !== -1;
      if (aIsLatest !== bIsLatest) return aIsLatest ? -1 : 1;
      if (aIsLatest && bIsLatest) return a.latestIndex - b.latestIndex;
      if (a.commonPriority !== b.commonPriority) return a.commonPriority - b.commonPriority;
      if (a.commonSubPriority !== b.commonSubPriority) return a.commonSubPriority - b.commonSubPriority;
      return a.index - b.index;
    })
    .map(item => item.model);
}

function tpGetCondensedModels(platform, models) {
  const sorted = tpSortModelsForDisplay(platform, models);
  return {
    visible: sorted.slice(0, TP_MAX_MODEL_TAGS),
    hiddenCount: Math.max(0, sorted.length - TP_MAX_MODEL_TAGS),
    fullList: sorted
  };
}

function tpGetPlatformScore(platform) {
  return TOKEN_RATINGS.find(r => r.name === platform)?.score ?? 0;
}

function tpSortPlansByRating(plans) {
  return [...plans].sort((a, b) => tpGetPlatformScore(b.platform) - tpGetPlatformScore(a.platform));
}

function initTokenPlanPage() {
  renderTpRatings();
  tpPopulateFilters();
  tpRenderTable(tpSortPlansByRating(TOKEN_PLANS));
  document.getElementById('tp-filter-count').textContent = `显示 ${TOKEN_PLANS.length} / ${TOKEN_PLANS.length} 个方案`;
  ['tp-filter-platform','tp-filter-model','tp-filter-price']
    .forEach(id => document.getElementById(id).addEventListener('change', tpApplyFilters));
  document.getElementById('tp-reset-btn').addEventListener('click', tpResetFilters);
  document.querySelectorAll('#page-tokenplan thead th[data-sort]').forEach(th => {
    th.addEventListener('click', () => {
      const col = th.dataset.sort;
      tpSortDir = tpSortCol === col ? tpSortDir * -1 : 1;
      tpSortCol = col;
      document.querySelectorAll('#page-tokenplan thead th').forEach(t => t.classList.remove('sorted-asc','sorted-desc'));
      th.classList.add(tpSortDir === 1 ? 'sorted-asc' : 'sorted-desc');
      tpApplyFilters();
    });
  });
}

function tpFilterByRatingCard(platformName) {
  const sel = document.getElementById('tp-filter-platform');
  if (!sel) return;
  sel.value = platformName;
  sel.dispatchEvent(new Event('change'));
  const table = document.querySelector('#page-tokenplan .table-section');
  if (table) table.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function renderTpRatings() {
  const row = document.getElementById('tp-ratings-row');
  if (!row) return;
  const ratings = [...TOKEN_RATINGS].sort((a, b) => b.score - a.score);
  row.innerHTML = ratings.map(r => {
    const stars = '★'.repeat(r.score) + '☆'.repeat(5 - r.score);
    const adBadge = r.isAd ? `<span style="position:absolute;bottom:4px;right:6px;font-size:9px;color:rgba(148,163,184,0.35);background:transparent;padding:0 2px;border-radius:2px;pointer-events:none;">广告</span>` : '';
    return `<div class="rating-card ${r.score === 5 ? 'top' : ''}" onclick="tpFilterByRatingCard('${r.name}')" style="cursor:pointer;position:relative;" title="点击筛选 ${r.name}">
      ${adBadge}
      <div class="rc-header">
        <span class="rc-name">${r.name}</span>
        <span class="rc-stars">${stars}</span>
      </div>
      <ul class="rc-reasons">${r.reasons.map(t => `<li>${t}</li>`).join('')}</ul>
    </div>`;
  }).join('');
}

function tpPopulateFilters() {
  const platforms = [...new Set(TOKEN_PLANS.map(p => p.platform))];
  const pSel = document.getElementById('tp-filter-platform');
  if (!pSel) return;
  platforms.forEach(v => {
    const o = document.createElement('option');
    o.value = v; o.textContent = v;
    pSel.appendChild(o);
  });

  const models = [...new Set(TOKEN_PLANS.flatMap(p => p.models))].sort();
  const mSel = document.getElementById('tp-filter-model');
  if (!mSel) return;
  models.forEach(v => {
    const o = document.createElement('option');
    o.value = v; o.textContent = v;
    mSel.appendChild(o);
  });
}

function tpGetFilterVal(id) {
  return parseFloat(document.getElementById(id)?.value) || 0;
}

function tpApplyFilters() {
  const fp = document.getElementById('tp-filter-platform')?.value || '';
  const fm = document.getElementById('tp-filter-model')?.value || '';
  const price = tpGetFilterVal('tp-filter-price');

  let data = TOKEN_PLANS.filter(p => {
    if (fp && p.platform !== fp) return false;
    if (fm && !p.models.includes(fm)) return false;
    if (price && p.monthly > price) return false;
    return true;
  });

  if (tpSortCol) {
    data = [...data].sort((a, b) => {
      let av = tpColVal(a, tpSortCol);
      let bv = tpColVal(b, tpSortCol);
      if (av == null) av = Infinity;
      if (bv == null) bv = Infinity;
      if (typeof av === 'string') return av.localeCompare(bv) * tpSortDir;
      return (av - bv) * tpSortDir;
    });
  } else {
    data = tpSortPlansByRating(data);
  }

  tpRenderTable(data);
  document.getElementById('tp-filter-count').textContent = `显示 ${data.length} / ${TOKEN_PLANS.length} 个方案`;
}

function tpColVal(p, col) {
  if (col === 'creditsMonth') return p.creditsMonth || 0;
  if (col === 'creditsDaily') return p.creditsDaily || 0;
  return p[col];
}

function tpResetFilters() {
  ['tp-filter-platform', 'tp-filter-model', 'tp-filter-price']
    .forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
  tpSortCol = null;
  tpSortDir = 1;
  document.querySelectorAll('#page-tokenplan thead th').forEach(t => t.classList.remove('sorted-asc', 'sorted-desc'));
  tpRenderTable(tpSortPlansByRating(TOKEN_PLANS));
  document.getElementById('tp-filter-count').textContent = `显示 ${TOKEN_PLANS.length} / ${TOKEN_PLANS.length} 个方案`;
}

function tpNa() { return '<span class="price-na">—</span>'; }
function tpFmt(n) { return n == null ? tpNa() : n.toLocaleString(); }
function tpFmtCredits(n) {
  if (n == null) return tpNa();
  return n.toLocaleString();
}

function tpRenderCreditsCol(p) {
  // MiniMax 有 reqWeek/reqMonth，无 creditsMonth
  if (p.platform === 'MiniMax') {
    const unit = p.tokenUnit || '';
    return `<span class="credits-tag">${tpFmt(p.reqWeek)}/周</span><br/><span class="credits-sub">${tpFmt(p.reqMonth)}/月</span>`;
  }
  // OpenCode Go 有滚动预算
  if (p.creditsBudget) {
    return `<span class="credits-tag">${p.creditsBudget}</span>`;
  }
  // 有月Credits
  if (p.creditsMonth) {
    const unit = p.creditsUnit || ' Credits';
    return `<span class="credits-tag">${tpFmtCredits(p.creditsMonth)}${unit}/月</span>`;
  }
  // 腾讯Token有tokenMonth
  if (p.tokenMonth) {
    const unit = p.tokenUnit || ' Tokens';
    const display = p.tokenMonth >= 10000
      ? (p.tokenMonth / 10000).toLocaleString('en-US', { maximumFractionDigits: 0 }) + '亿'
      : p.tokenMonth.toLocaleString();
    return `<span class="credits-tag">${display}${unit}/月</span>`;
  }
  return tpNa();
}

function tpRenderTable(plans) {
  const tbody = document.getElementById('tp-plans-tbody');
  if (!tbody) return;
  if (!plans.length) {
    tbody.innerHTML = `<tr><td colspan="12" style="text-align:center;padding:40px;color:#94A3B8">没有符合条件的方案，请调整筛选条件</td></tr>`;
    return;
  }
  tbody.innerHTML = plans.map(p => {
    const cur = p.currency || (p.platform === 'z.ai' ? '$' : '¥');
    const qAvg = p.quarterly ? Math.round(p.quarterly / 3) : null;
    const yAvg = p.yearly ? Math.round(p.yearly / 12) : null;
    const firstBadge = p.firstMonth ? `<span class="badge-first">首月${cur}${p.firstMonth}</span>` : '';
    const modelInfo = tpGetCondensedModels(p.platform, p.models);
    const models = modelInfo.visible
      .map(m => `<span class="model-tag">${m}</span>`).join('')
      + (modelInfo.hiddenCount ? `<span class="model-tag model-tag-more" title="${modelInfo.fullList.join(' / ')}">+${modelInfo.hiddenCount}</span>` : '');
    const benefits = p.benefits.length
      ? p.benefits.map(b => `<span class="benefit-tag">${b}</span>`).join('')
      : tpNa();
    return `<tr>
      <td class="sticky-col platform-cell">${p.platform}</td>
      <td>${p.name}${firstBadge}</td>
      <td><a href="${p.link}" target="_blank" class="open-btn">开通 →</a></td>
      <td class="num"><span class="price-main">${cur}${p.monthly}</span></td>
      <td class="num">${qAvg ? `<span class="price-yearly">${cur}${qAvg}</span>` : tpNa()}</td>
      <td class="num">${yAvg ? `<span class="price-yearly">${cur}${yAvg}</span>` : tpNa()}</td>
      <td class="num credits-cell">${tpRenderCreditsCol(p)}</td>
      <td>${models}</td>
      <td>${benefits}</td>
      <td><span class="note-text">${p.note || '—'}</span></td>
    </tr>`;
  }).join('');
}
