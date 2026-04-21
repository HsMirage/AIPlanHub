// ===== Shared: Rating card click → filter + scroll =====
function filterByRatingCard(filterId, platformName, tableSelector) {
  const sel = document.getElementById(filterId);
  if (!sel) return;
  sel.value = platformName;
  sel.dispatchEvent(new Event('change'));
  const table = document.querySelector(tableSelector);
  if (table) table.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ===== Hash-based SPA Router =====
const Router = {
  pages: ['home', 'coding', 'token', 'video', 'image', 'audio'],
  current: null,

  init() {
    window.addEventListener('hashchange', () => this.navigate());
    this.navigate();
  },

  getPageFromHash() {
    const hash = location.hash.replace('#', '');
    return this.pages.includes(hash) ? hash : 'home';
  },

  navigate() {
    const page = this.getPageFromHash();
    if (page === this.current) return;
    this.current = page;

    // Toggle page visibility
    document.querySelectorAll('.page-content').forEach(el => {
      el.classList.toggle('active', el.id === `page-${page}`);
    });

    // Update nav active state (header + mobile)
    document.querySelectorAll('.nav-link').forEach(a => {
      const href = a.getAttribute('href');
      a.classList.toggle('active', href === `#${page}`);
    });

    // Scroll to top on page change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  go(page) {
    location.hash = page;
  }
};
