/* script.js */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Inicializa todos os ícones da biblioteca Lucide via CDN
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // 2. Elementos do Menu Mobile
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];

  // Toggle do menu mobile
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      mobileMenu.classList.toggle('flex');
    });
  }

  // Fecha o menu mobile ao clicar em qualquer link
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mobileMenu) {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('flex');
      }
    });
  });
});
