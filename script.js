/* script.js */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Inicializa todos os ícones da biblioteca Lucide via CDN
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Rolagem suave customizada para âncoras locais (como #top-rush)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      // Ignora âncoras vazias ou com ações especiais (detalhes ou termos de outra aba)
      if (targetId === '#' || targetId === '#detalhes-plantei' || targetId.startsWith('#termos-legais')) {
        return;
      }
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        // Atualiza o hash sem quebrar a rolagem suave
        history.pushState(null, null, targetId);
      }
    });
  });

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

  // ==========================================
  // LÓGICA DE DETALHES - PLANTEI ATIVOS (SPA OVERLAY)
  // ==========================================
  const detalhesPlanteiView = document.getElementById('detalhes-plantei');
  const btnVoltarDetalhes = document.getElementById('btn-voltar-detalhes');
  const btnGoToTerms = document.getElementById('btn-go-to-terms');

  // Seletores do Carrossel do Celular
  const phoneSlides = document.querySelectorAll('.phone-slide');
  const phoneDots = document.querySelectorAll('.phone-dot');
  const phonePrevBtn = document.getElementById('phone-prev-btn');
  const phoneNextBtn = document.getElementById('phone-next-btn');
  let currentPhoneSlide = 0;
  let phoneSlideInterval = null;

  // Atualiza as classes visuais dos slides e indicadores do carrossel
  function showPhoneSlide(index) {
    if (!phoneSlides.length) return;
    
    // Trata estouro e retrocesso de limites do índice circularmente
    if (index >= phoneSlides.length) currentPhoneSlide = 0;
    else if (index < 0) currentPhoneSlide = phoneSlides.length - 1;
    else currentPhoneSlide = index;

    // Faz a transição de fade-in modificando opacidade e o empilhamento z-index
    phoneSlides.forEach((slide, i) => {
      if (i === currentPhoneSlide) {
        slide.classList.remove('opacity-0', 'z-0');
        slide.classList.add('opacity-100', 'z-10');
      } else {
        slide.classList.remove('opacity-100', 'z-10');
        slide.classList.add('opacity-0', 'z-0');
      }
    });

    // Sincroniza a estilização do indicador circular ativo
    phoneDots.forEach((dot, i) => {
      if (i === currentPhoneSlide) {
        dot.classList.remove('bg-neutral-600', 'hover:bg-neutral-450');
        dot.classList.add('bg-orange-500');
      } else {
        dot.classList.remove('bg-orange-500');
        dot.classList.add('bg-neutral-600', 'hover:bg-neutral-450');
      }
    });
  }

  function nextPhoneSlide() {
    showPhoneSlide(currentPhoneSlide + 1);
  }

  function prevPhoneSlide() {
    showPhoneSlide(currentPhoneSlide - 1);
  }

  // Inicializa o temporizador automático do carrossel (a cada 4s)
  function startPhoneAutoplay() {
    stopPhoneAutoplay();
    phoneSlideInterval = setInterval(nextPhoneSlide, 4000);
  }

  // Para o temporizador para economizar processamento
  function stopPhoneAutoplay() {
    if (phoneSlideInterval) {
      clearInterval(phoneSlideInterval);
      phoneSlideInterval = null;
    }
  }

  // Registra eventos para cliques manuais nas setas de navegação
  if (phonePrevBtn) {
    phonePrevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      prevPhoneSlide();
      startPhoneAutoplay(); // Reseta o relógio após interação ativa
    });
  }

  if (phoneNextBtn) {
    phoneNextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      nextPhoneSlide();
      startPhoneAutoplay(); // Reseta o relógio após interação ativa
    });
  }

  // Registra eventos para cliques nos dots inferiores
  phoneDots.forEach((dot, i) => {
    dot.addEventListener('click', (e) => {
      e.preventDefault();
      showPhoneSlide(i);
      startPhoneAutoplay(); // Reseta o relógio após interação ativa
    });
  });

  // Pausa a transição automática ao passar o mouse sobre o celular (foco de leitura)
  const phoneMockup = document.querySelector('.group\\/phone');
  if (phoneMockup) {
    phoneMockup.addEventListener('mouseenter', stopPhoneAutoplay);
    phoneMockup.addEventListener('mouseleave', startPhoneAutoplay);
  }

  // Abre a seção de detalhes com animação suave de transição (slide up)
  function abrirDetalhes() {
    if (!detalhesPlanteiView) return;
    detalhesPlanteiView.classList.remove('hidden');
    // Forçar um reflow para garantir que a animação ocorra
    detalhesPlanteiView.offsetHeight; 
    detalhesPlanteiView.classList.remove('translate-y-full');
    detalhesPlanteiView.classList.add('translate-y-0');
    document.body.classList.add('overflow-hidden'); // Trava rolagem de fundo

    // Recria os ícones Lucide inseridos dinamicamente na página
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }

    // Sempre reseta para a primeira tela e liga o autoplay quando aberto
    showPhoneSlide(0);
    startPhoneAutoplay();
  }

  // Fecha a seção de detalhes e volta para o portfólio
  function fecharDetalhes() {
    if (!detalhesPlanteiView) return;
    detalhesPlanteiView.classList.remove('translate-y-0');
    detalhesPlanteiView.classList.add('translate-y-full');
    document.body.classList.remove('overflow-hidden'); // Restaura rolagem
    
    // Desativa timers para evitar processamento em segundo plano desnecessário
    stopPhoneAutoplay();

    // Remove o hash da URL de forma elegante sem fazer refresh
    history.pushState("", document.title, window.location.pathname + window.location.search);

    // Espera a animação de slide-out terminar antes de ocultar
    setTimeout(() => {
      detalhesPlanteiView.classList.add('hidden');
    }, 500);
  }

  // Monitora alterações de hash da URL para navegação direta/compartilhamento
  function checkHash() {
    if (window.location.hash === '#detalhes-plantei' || window.location.hash.startsWith('#termos-legais')) {
      abrirDetalhes();
      if (window.location.hash.startsWith('#termos-legais')) {
        setTimeout(() => {
          const el = document.getElementById('termos-legais');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    } else {
      if (detalhesPlanteiView && !detalhesPlanteiView.classList.contains('hidden')) {
        fecharDetalhes();
      }
    }
  }

  // Adiciona listeners para os gatilhos de abrir/fechar
  if (btnVoltarDetalhes) {
    btnVoltarDetalhes.addEventListener('click', (e) => {
      e.preventDefault();
      fecharDetalhes();
    });
  }

  // Botões de âncora interna dentro do detalhes
  if (btnGoToTerms) {
    btnGoToTerms.addEventListener('click', (e) => {
      e.preventDefault();
      const el = document.getElementById('termos-legais');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Verifica o hash ao carregar a página e ao alterar o hash
  window.addEventListener('hashchange', checkHash);
  checkHash(); // Executa no carregamento inicial

  // ==========================================
  // LÓGICA DE ABAS DE DOCUMENTOS (TERMOS / PRIVACIDADE)
  // ==========================================
  const tabBtnTermos = document.getElementById('tab-btn-termos');
  const tabBtnPrivacidade = document.getElementById('tab-btn-privacidade');
  const documentoTermos = document.getElementById('documento-termos');
  const documentoPrivacidade = document.getElementById('documento-privacidade');
  const copyText = document.getElementById('copy-text');

  if (tabBtnTermos && tabBtnPrivacidade && documentoTermos && documentoPrivacidade) {
    tabBtnTermos.addEventListener('click', () => {
      // Ativa aba de Termos
      tabBtnTermos.classList.add('border-orange-500', 'text-white');
      tabBtnTermos.classList.remove('border-transparent', 'text-neutral-400');
      documentoTermos.classList.remove('hidden');

      // Desativa aba de Privacidade
      tabBtnPrivacidade.classList.remove('border-orange-500', 'text-white');
      tabBtnPrivacidade.classList.add('border-transparent', 'text-neutral-400');
      documentoPrivacidade.classList.add('hidden');

      if (copyText) copyText.innerText = "Copiar termos";
    });

    tabBtnPrivacidade.addEventListener('click', () => {
      // Ativa aba de Privacidade
      tabBtnPrivacidade.classList.add('border-orange-500', 'text-white');
      tabBtnPrivacidade.classList.remove('border-transparent', 'text-neutral-400');
      documentoPrivacidade.classList.remove('hidden');

      // Desativa aba de Termos
      tabBtnTermos.classList.remove('border-orange-500', 'text-white');
      tabBtnTermos.classList.add('border-transparent', 'text-neutral-400');
      documentoTermos.classList.add('hidden');

      if (copyText) copyText.innerText = "Copiar política";
    });
  }

  // ==========================================
  // LÓGICA DE COPIAR TEXTO DOS DOCUMENTOS
  // ==========================================
  const btnCopiarDoc = document.getElementById('btn-copiar-documento');
  if (btnCopiarDoc) {
    btnCopiarDoc.addEventListener('click', () => {
      let textoParaCopiar = "";
      const isTermosAtivo = !documentoTermos.classList.contains('hidden');

      if (isTermosAtivo) {
        textoParaCopiar = documentoTermos.innerText;
      } else {
        textoParaCopiar = documentoPrivacidade.innerText;
      }

      navigator.clipboard.writeText(textoParaCopiar).then(() => {
        // Altera temporariamente o visual do botão para indicar sucesso
        const originalText = copyText ? copyText.innerText : "Copiar";
        const copyIcon = document.getElementById('copy-icon');

        if (copyText) copyText.innerText = "Copiado!";
        if (copyIcon) {
          copyIcon.setAttribute('data-lucide', 'check');
          lucide.createIcons();
        }

        setTimeout(() => {
          if (copyText) copyText.innerText = originalText;
          if (copyIcon) {
            copyIcon.setAttribute('data-lucide', 'copy');
            lucide.createIcons();
          }
        }, 2000);
      }).catch(err => {
        console.error("Erro ao copiar documento: ", err);
      });
    });
  }

  // ==========================================
  // LÓGICA DO LIGHTBOX DE SCREENSHOTS
  // ==========================================
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxDesc = document.getElementById('lightbox-desc');
  const btnCloseLightbox = document.getElementById('btn-close-lightbox');
  const screenshotTriggers = document.querySelectorAll('.zoom-screenshot-trigger');

  screenshotTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const imgSrc = trigger.getAttribute('data-img');
      const title = trigger.getAttribute('data-title');
      const desc = trigger.getAttribute('data-desc');

      if (lightboxModal && lightboxImg && lightboxCaption) {
        lightboxImg.src = imgSrc;
        lightboxCaption.innerText = title || "";
        if (lightboxDesc) lightboxDesc.innerText = desc || "";

        // Mostra o modal com animação suave de fade-in
        lightboxModal.classList.remove('hidden');
        lightboxModal.offsetHeight; // force reflow
        lightboxModal.classList.remove('opacity-0');
        lightboxModal.classList.add('opacity-100');
      }
    });
  });

  function fecharLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('opacity-100');
    lightboxModal.classList.add('opacity-0');
    setTimeout(() => {
      lightboxModal.classList.add('hidden');
    }, 300);
  }

  if (btnCloseLightbox) {
    btnCloseLightbox.addEventListener('click', fecharLightbox);
  }

  // Fecha o lightbox também ao clicar na área de fundo escura
  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) {
        fecharLightbox();
      }
    });
  }

  // ==========================================
  // LÓGICA DE JOGO INLINE (TOP RUSH CAR)
  // ==========================================
  const cardTopRush = document.getElementById('top-rush');
  const btnJogarAqui = document.getElementById('btn-jogar-aqui');
  const btnAbrirNovaGuia = document.getElementById('btn-abrir-nova-guia');
  const overlayJogar = document.getElementById('overlay-jogar');
  const gameIframe = document.getElementById('game-iframe');
  const gameLoader = document.getElementById('game-loader');
  const btnFecharJogo = document.getElementById('btn-fechar-jogo');
  
  // URL oficial do jogo
  const JOGO_URL = "https://top-rush-car.vercel.app/";

  function abrirJogo() {
    if (!overlayJogar || !gameIframe || !gameLoader) return;

    // Trava rolagem do portfólio
    document.body.classList.add('overflow-hidden');

    // Mostra o loader
    gameLoader.classList.remove('hidden');
    gameLoader.classList.add('opacity-100');

    // Abre o overlay com animação de slide-up
    overlayJogar.classList.remove('hidden');
    overlayJogar.offsetHeight; // force reflow
    overlayJogar.classList.remove('translate-y-full');
    overlayJogar.classList.add('translate-y-0');

    // Define a URL do jogo para iniciar o carregamento apenas sob demanda
    gameIframe.src = JOGO_URL;

    // Quando o iframe terminar de carregar, ocultamos o spinner de carregamento
    gameIframe.onload = function() {
      gameLoader.classList.remove('opacity-100');
      gameLoader.classList.add('opacity-0');
      setTimeout(() => {
        gameLoader.classList.add('hidden');
      }, 500); // tempo correspondente à transição de fade-out
    };

    // Recria os ícones Lucide no cabeçalho do jogo
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  }

  function fecharJogo() {
    if (!overlayJogar || !gameIframe) return;

    // Destrava rolagem do fundo
    document.body.classList.remove('overflow-hidden');

    // Animação de slide-down
    overlayJogar.classList.remove('translate-y-0');
    overlayJogar.classList.add('translate-y-full');

    // Descarrega o iframe para interromper música e economizar memória/processamento
    setTimeout(() => {
      gameIframe.src = "";
      overlayJogar.classList.add('hidden');
    }, 500); // tempo da animação de saída
  }

  // Permite que clicar no card inteiro abra o jogo (exceto se clicar no botão de nova guia)
  if (cardTopRush) {
    cardTopRush.addEventListener('click', (e) => {
      // Se clicou no link de abrir nova guia, não abre o jogo aqui
      if (btnAbrirNovaGuia && (btnAbrirNovaGuia.contains(e.target) || btnAbrirNovaGuia === e.target)) {
        return; 
      }
      e.preventDefault();
      abrirJogo();
    });
  }

  // Previne bolha de cliques no botão de jogar aqui (já tratado pelo card, mas garante)
  if (btnJogarAqui) {
    btnJogarAqui.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
      abrirJogo();
    });
  }

  // Previne bolha no link de nova guia para não ativar o abrirJogo do card
  if (btnAbrirNovaGuia) {
    btnAbrirNovaGuia.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  }

  // Fecha o jogo ao clicar no botão Voltar
  if (btnFecharJogo) {
    btnFecharJogo.addEventListener('click', (e) => {
      e.preventDefault();
      fecharJogo();
    });
  }

  // Trata tecla Escape para fechar o jogo
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (overlayJogar && !overlayJogar.classList.contains('hidden')) {
        fecharJogo();
      }
    }
  });
});

