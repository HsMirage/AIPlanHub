let sortCol = null, sortDir = 1;
const MAX_MODEL_TAGS = 5;

const PLATFORM_LATEST_MODELS = {
  '智谱AI': ['GLM-5.1'],
  'z.ai': ['GLM-5.1'],
  'Kimi': ['kimi-k2.6', 'kimi-k2.5'],
  'MiniMax': ['MiniMax-M2.7'],
  '字节·方舟': ['Doubao-Seed-2.0-pro'],
  '阿里·百炼': ['Qwen3.6-Plus', 'Qwen3.6plus', 'Qwen3.5-Plus'],
  '天翼云': ['GLM-5.1'],
  '蓝耘元生代云': ['GLM-5.1', 'Step-3.5-Flash', 'MiniMax-M2.5'],
  '腾讯·Coding': ['HY-2.0'],
  '讯飞星辰': ['Spark X2'],
  '阶跃星辰': ['Step-3.5-Flash-2603', 'Step-3.5-Flash'],
  '快手 StreamLake': ['KAT-Coder-Pro V2'],
};

function getCommonModelPriority(model) {
  if (model === 'GLM-5.1') return [1, 0];
  if (model === 'GLM-5') return [2, 0];
  if (model === 'GLM-5-Turbo') return [3, 0];
  if (model === 'kimi-k2.6') return [4, 0];
  if (model === 'kimi-k2.5') return [4, 1];
  if (model === 'DeepSeek-V3.2') return [5, 0];
  if (model === 'Qwen3-Coder-Next-FP8') return [6, 0];
  if (['Qwen3.6-Plus', 'Qwen3.6plus', 'Qwen3.5-Plus'].includes(model)) return [7, 0];
  if (model === 'MiniMax-M2.7') return [8, 0];
  if (model === 'MiniMax-M2.5') return [9, 0];
  if (model.startsWith('Kimi-') || model.startsWith('kimi-')) return [4, 2];
  if (model.startsWith('DeepSeek')) return [5, 1];
  if (model.startsWith('Qwen')) return [7, 1];
  if (model.startsWith('MiniMax-')) return [9, 1];
  return [99, 0];
}

// 支持模型按“平台独家最新模型优先 + 通用重点模型优先级”展示。
function sortModelsForDisplay(platform, models) {
  const latestModels = PLATFORM_LATEST_MODELS[platform] || [];
  return models
    .map((model, index) => {
      const latestIndex = latestModels.indexOf(model);
      const [commonPriority, commonSubPriority] = getCommonModelPriority(model);
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

function getCondensedModels(platform, models) {
  const sorted = sortModelsForDisplay(platform, models);
  return {
    visible: sorted.slice(0, MAX_MODEL_TAGS),
    hiddenCount: Math.max(0, sorted.length - MAX_MODEL_TAGS),
    fullList: sorted
  };
}

function getPlatformScore(platform) {
  return RATINGS.find(r => r.name === platform)?.score ?? 0;
}

function sortPlansByRating(plans) {
  return [...plans].sort((a, b) => getPlatformScore(b.platform) - getPlatformScore(a.platform));
}

function renderRatings() {
  const row = document.getElementById('ratings-row');
  const ratings = [...RATINGS].sort((a, b) => b.score - a.score);
  row.innerHTML = ratings.map(r => {
    const stars = '★'.repeat(r.score) + '☆'.repeat(5 - r.score);
    return `<div class="rating-card ${r.score === 5 ? 'top' : ''}" onclick="filterByRatingCard('filter-platform','${r.name}','#page-coding .table-section')" style="cursor:pointer" title="点击筛选 ${r.name}">
      <div class="rc-header">
        <span class="rc-name">${r.name}</span>
        <span class="rc-stars">${stars}</span>
      </div>
      <ul class="rc-reasons">${r.reasons.map(t => `<li>${t}</li>`).join('')}</ul>
    </div>`;
  }).join('');
}

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
  const price = getFilterVal('filter-price');
  const quarterly = getFilterVal('filter-quarterly');
  const yearly = getFilterVal('filter-yearly');

  let data = PLANS.filter(p => {
    if (fp && p.platform !== fp) return false;
    if (fm && !p.models.includes(fm)) return false;
    if (price && p.monthly > price) return false;
    if (quarterly && (p.quarterly === null || p.quarterly / 3 > quarterly)) return false;
    if (yearly && (p.yearly === null || p.yearly / 12 > yearly)) return false;
    return true;
  });

  if (sortCol) {
    data = [...data].sort((a, b) => {
      let av = sortCol === 'quarterlyAvg' ? (a.quarterly ? a.quarterly / 3 : null)
             : sortCol === 'yearlyAvg' ? (a.yearly ? a.yearly / 12 : null)
             : a[sortCol];
      let bv = sortCol === 'quarterlyAvg' ? (b.quarterly ? b.quarterly / 3 : null)
             : sortCol === 'yearlyAvg' ? (b.yearly ? b.yearly / 12 : null)
             : b[sortCol];
      if (av == null) av = Infinity;
      if (bv == null) bv = Infinity;
      if (typeof av === 'string') return av.localeCompare(bv) * sortDir;
      return (av - bv) * sortDir;
    });
  } else {
    data = sortPlansByRating(data);
  }

  renderTable(data);
  document.getElementById('filter-count').textContent = `显示 ${data.length} / ${PLANS.length} 个方案`;
}

function resetFilters() {
  ['filter-platform', 'filter-model', 'filter-price', 'filter-quarterly', 'filter-yearly']
    .forEach(id => { document.getElementById(id).value = ''; });
  sortCol = null;
  sortDir = 1;
  document.querySelectorAll('#page-coding thead th').forEach(t => t.classList.remove('sorted-asc', 'sorted-desc'));
  renderTable(sortPlansByRating(PLANS));
  document.getElementById('filter-count').textContent = `显示 ${PLANS.length} / ${PLANS.length} 个方案`;
}

function na() { return '<span class="price-na">—</span>'; }
function fmt(n) { return n == null ? na() : n.toLocaleString(); }
function fmtM(n) {
  var m = n / 100;
  if (m >= 1000) return m.toLocaleString('en-US', { maximumFractionDigits: 0 });
  return m % 1 === 0 ? m.toFixed(0) : m.toFixed(1);
}
function renderTokenCol(p) {
  var unit = p.tokenUnit || '';
  if (p.tokenMonth) {
    return '<span class="token-quota">月 ' + fmtM(p.tokenMonth) + 'M' + unit + '</span>';
  }
  if (p.tokenDaily) {
    return '<span class="token-quota">日 ' + fmtM(p.tokenDaily) + 'M' + unit + '</span>';
  }
  return na();
}

function renderTable(plans) {
  const tbody = document.getElementById('plans-tbody');
  if (!plans.length) {
    tbody.innerHTML = `<tr><td colspan="14" style="text-align:center;padding:40px;color:#94A3B8">没有符合条件的方案，请调整筛选条件</td></tr>`;
    return;
  }
  tbody.innerHTML = plans.map(p => {
    const cur = p.currency || (p.platform === 'z.ai' ? '$' : '¥');
    const qAvg = p.quarterly ? Math.round(p.quarterly / 3) : null;
    const yAvg = p.yearly ? Math.round(p.yearly / 12) : null;
    const firstBadge = p.firstMonth ? `<span class="badge-first">首月${cur}${p.firstMonth}</span>` : '';
    const modelInfo = getCondensedModels(p.platform, p.models);
    const models = modelInfo.visible
      .map(m => `<span class="model-tag">${m}</span>`).join('')
      + (modelInfo.hiddenCount ? `<span class="model-tag model-tag-more" title="${modelInfo.fullList.join(' / ')}">+${modelInfo.hiddenCount}</span>` : '');
    const benefits = p.benefits.length
      ? p.benefits.map(b => `<span class="benefit-tag">${b}</span>`).join('')
      : na();
    return `<tr>
      <td class="sticky-col platform-cell">${p.platform}</td>
      <td>${p.name}${firstBadge}</td>
      <td><a href="${p.link}" target="_blank" class="open-btn">开通 →</a></td>
      <td class="num"><span class="price-main">${cur}${p.monthly}</span></td>
      <td class="num">${qAvg ? `<span class="price-yearly">${cur}${qAvg}</span>` : na()}</td>
      <td class="num">${yAvg ? `<span class="price-yearly">${cur}${yAvg}</span>` : na()}</td>
      <td class="num">${fmt(p.req5h)}</td>
      <td class="num">${fmt(p.reqWeek)}</td>
      <td class="num">${fmt(p.reqMonth)}</td>
      <td>${models}</td>
      <td>${benefits}</td>
      <td><span class="note-text">${p.note || '—'}</span></td>
    </tr>`;
  }).join('');
}
