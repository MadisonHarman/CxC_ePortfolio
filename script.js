// Mobile nav toggle + current-page highlight
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const list = document.querySelector('nav ul');
  if (toggle && list) {
    toggle.addEventListener('click', () => {
      const open = list.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  const here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(a => {
    const target = a.getAttribute('href').split('/').pop();
    if (target === here) a.setAttribute('aria-current', 'page');
  });

  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
