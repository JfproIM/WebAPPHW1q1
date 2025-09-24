// 手機版：點擊漢堡鍵展開/收合
const toggleBtn = document.getElementById('navToggle');
const nav = document.getElementById('primary-navigation');

toggleBtn.addEventListener('click', () => {
  const expanded = toggleBtn.getAttribute('aria-expanded') === 'true';
  toggleBtn.setAttribute('aria-expanded', String(!expanded));
  nav.classList.toggle('show');
});
