const toggleBtn = document.getElementById('navToggle');
const nav = document.getElementById('primary-navigation');
const navbar = document.getElementById('navbar');

toggleBtn.addEventListener('click', () => {
  const expanded = toggleBtn.getAttribute('aria-expanded') === 'true';
  toggleBtn.setAttribute('aria-expanded', String(!expanded));

  // 不再用 .show 控制定位，純粹用 .open 切換整體佈局
  navbar.classList.toggle('open');
});

