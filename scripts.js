/* =====================================================
   TULIO VÍTOR — PORTFÓLIO
   scripts.js
   ===================================================== */

'use strict';

/* ───────────────────────────────
   DADOS DOS PROJETOS
   Ordem dos cards:
   [0] Stranger Things  [1] Beach 085  [2] TechStore  [3] BotFlix
   [4] Player de Música [5] Criador Mágico IA
   [6] Lumina Solar     [7] Linkador Pessoal
   [8] Feliz Aniversário Lívia (sozinha em desktop)
─────────────────────────────── */
const PROJECTS = [
    {
        name: 'Stranger Things Experience',
        images: ['assets/mockup-projeto01.webp'],
        url: 'https://tuliovitor.github.io/stranger-things',
        github: 'https://github.com/tuliovitor/stranger-things',
        tech: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
        desc: 'Landing page temática inspirada na campanha Netflix "Stranger Things: The Experience". Design cinematográfico, dark mode imersivo, tipografia editorial e seção de seleção de cidades com cards ilustrados.'
    },
    {
        name: 'Beach 085 Coast Company',
        images: ['assets/mockup-projeto02.webp'],
        url: 'https://tuliovitor.github.io/beach-085-site',
        github: 'https://github.com/tuliovitor/beach-085-site',
        tech: ['HTML', 'CSS', 'JavaScript'],
        desc: 'E-commerce de acessórios de praia com identidade visual costeira. Design vibrante com produtos em destaque, badges promocionais, seção de valores da marca e experiência de verão responsiva.'
    },
    {
        name: 'TechStore',
        images: ['assets/mockup-projeto03.webp'],
        url: 'https://tuliovitor.github.io/tech-store',
        github: 'https://github.com/tuliovitor/tech-store',
        tech: ['HTML', 'CSS', 'JavaScript'],
        desc: 'E-commerce de tecnologia com banner de Black Friday, filtragem de produtos por categoria, cards com preços e sistema de busca. Design tech com identidade visual marcante e responsividade.'
    },
    {
        name: 'BotFlix',
        images: ['assets/mockup-projeto04.webp'],
        url: 'https://tuliovitor.github.io/botflix',
        github: 'https://github.com/tuliovitor/botflix',
        tech: ['HTML', 'CSS', 'JavaScript', 'N8N', 'TMDB', 'Grok AI'],
        desc: 'Assistente de cinema com IA integrada que recebe o humor do usuário e recomenda o filme perfeito para o momento. O usuário descreve como está se sentindo — e o BotFlix usa um fluxo N8N com Grok AI para interpretar o contexto emocional, buscar o filme ideal e retornar poster, sinopse e uma explicação personalizada de por que aquele filme combina com aquela hora.'
    },
    {
        name: 'Player de Música',
        images: ['assets/mockup-projeto05.webp'],
        url: 'https://tuliovitor.github.io/player-de-musica',
        github: 'https://github.com/tuliovitor/player-de-musica',
        tech: ['HTML', 'CSS'],
        desc: 'Interface de music player com componentes em variações de tamanho. Design dark premium com arte de álbum fluida em rosa e azul, controles de reprodução e barra de progresso animada.'
    },
    {
        name: 'Criador Mágico com IA',
        images: ['assets/mockup-projeto06.webp'],
        url: 'https://tuliovitor.github.io/criador-magico-ia',
        github: 'https://github.com/tuliovitor/criador-magico-ia',
        tech: ['HTML', 'CSS', 'JavaScript', 'N8N'],
        desc: 'Aplicação web com inteligência artificial integrada que gera animações CSS a partir de descrições em texto. Editor de código ao vivo com preview em tempo real e sugestões automáticas.'
    },
    {
        name: 'Lumina Solar',
        images: ['assets/mockup-projeto07.webp'],
        url: 'https://luminasolarenergy.com.br',
        github: 'https://github.com/tuliovitor/lumina-solar',
        tech: ['HTML', 'CSS', 'JavaScript', 'GSAP', 'Lenis', 'ScrollTrigger'],
        desc: 'Site institucional para empresa de energia solar fotovoltaica no Ceará — cliente real. Desenvolvido com slider horizontal fixado por GSAP ScrollTrigger, vídeo hero otimizado com poster, mapa lazy do Google Maps, animações de contadores, preloader customizado, WhatsApp flutuante e SEO completo. Projeto responsivo com foco em conversão de leads.'
    },
    {
        name: 'Linkador Pessoal',
        images: ['assets/mockup-projeto08.webp'],
        url: 'https://tuliovitor.github.io/links-portfolio',
        github: 'https://github.com/tuliovitor/links-portfolio',
        tech: ['HTML', 'CSS'],
        desc: 'Link-in-bio page com dark/light mode toggle. Interface minimalista centralizada com navegação rápida para portfólio, serviços e contato. Alternância de tema suave entre modo escuro e claro.'
    },
    {
        name: 'Feliz Aniversário Lívia',
        images: ['assets/mockup-projeto09.webp'],
        url: 'https://tuliovitor.github.io/feliz-aniversario-livia',
        github: 'https://github.com/tuliovitor/feliz-aniversario-livia',
        tech: ['HTML', 'CSS', 'JavaScript', 'GSAP', 'Lenis'],
        desc: 'Site surpresa de aniversário para uma amiga. Experiência imersiva com slider horizontal de cards, memorial com SVG path animado e polaroids, carta interativa com animações de entrada, countdown em tempo real para o próximo aniversário e sistema de celebração com confetes e faíscas em Canvas. Uma das produções mais técnicas e emocionais do portfólio.'
    },
    {
        name: 'Tradutor IA',
        images: ['assets/mockup-projeto10.webp'],
        url: 'https://tuliovitor.github.io/tradutor-ia',
        github: 'https://github.com/tuliovitor/tradutor-ia',
        tech: ['HTML', 'CSS', 'JavaScript', 'MyMemory API', 'Web Speech API'],
        desc: 'Tradutor com integração à API MyMemory que converte texto de português para inglês, alemão e japonês em tempo real. Conta com reconhecimento de voz via Web Speech API — o usuário fala e o texto é capturado e traduzido automaticamente. O fundo com mapa-múndi reforça visualmente o conceito de comunicação sem fronteiras.'
    }
];

/* ───────────────────────────────
   UTILS
─────────────────────────────── */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

/* ───────────────────────────────
   1. PRELOADER (removido — inicializa direto)
─────────────────────────────── */
function initPreloader() {
    document.body.style.overflow = '';
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        initHeroAnimations();
    } else {
        window.addEventListener('DOMContentLoaded', initHeroAnimations);
    }
}

/* ───────────────────────────────
   2. SMOOTH SCROLL (Lenis)
─────────────────────────────── */
let lenisInstance = null;

function initLenis() {
    if (typeof Lenis === 'undefined') return;

    lenisInstance = new Lenis({
        duration: 1.3,
        easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 0.9,
        touchMultiplier: 1.5,
    });

    gsap.ticker.add(time => lenisInstance.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
    lenisInstance.on('scroll', ScrollTrigger.update);

    return lenisInstance;
}

/* ───────────────────────────────
   3. HEADER — scroll state
─────────────────────────────── */
function initHeader() {
    const header = $('#header');
    const projetos = $('#projetos');
    const sobre = $('#sobre');
    if (!header) return;

    function updateHeader() {
        const projRect = projetos ? projetos.getBoundingClientRect() : null;
        const sobreRect = sobre ? sobre.getBoundingClientRect() : null;
        const ctaEl = $('#contato');
        const ctaRect = ctaEl ? ctaEl.getBoundingClientRect() : null;
        const footerEl = $('#footer');
        const footerRect = footerEl ? footerEl.getBoundingClientRect() : null;

        const isOnDark =
            (projRect && projRect.top <= 72 && sobreRect && sobreRect.top > 72) ||
            (ctaRect && ctaRect.top <= 72) ||
            (footerRect && footerRect.top <= 72);

        if (isOnDark) {
            header.className = 'header-dark header-scrolled';
        } else {
            const y = window.scrollY;
            header.className = y > 80 ? 'header-light header-scrolled' : 'header-light';
        }
    }

    window.addEventListener('scroll', updateHeader, { passive: true });
    updateHeader();

    function scrollToSection(href) {
        const target = $(href);
        if (!target) return;
        if (lenisInstance) {
            lenisInstance.scrollTo(target, { offset: -72, duration: 1.4 });
        } else {
            const top = target.getBoundingClientRect().top + window.scrollY - 72;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    }

    $$('.nav-link').forEach(link => {
        link.addEventListener('click', e => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                scrollToSection(href);
            }
        });
    });

    const mobileMenu = $('#mobile-menu');
    if (mobileMenu) {
        mobileMenu.addEventListener('click', e => {
            const link = e.target.closest('.mobile-link');
            if (!link) return;
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                closeMobileMenu();
                setTimeout(() => scrollToSection(href), 50);
            }
        });
    }

    $$('.footer-nav a').forEach(link => {
        link.addEventListener('click', e => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                scrollToSection(href);
            }
        });
    });

    $$('.btn-nav').forEach(btn => {
        btn.addEventListener('click', e => {
            const href = btn.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                closeMobileMenu();
                setTimeout(() => scrollToSection(href), 50);
            }
        });
    });
}

/* ───────────────────────────────
   4. HAMBURGER MENU
─────────────────────────────── */
function initHamburger() {
    const btn = $('#hamburger');
    const menu = $('#mobile-menu');
    if (!btn || !menu) return;

    btn.addEventListener('click', () => {
        const open = menu.classList.toggle('open');
        btn.classList.toggle('active', open);
        btn.setAttribute('aria-expanded', String(open));
        if (lenisInstance) open ? lenisInstance.stop() : lenisInstance.start();
    });
}

function closeMobileMenu() {
    const menu = $('#mobile-menu');
    const btn = $('#hamburger');
    if (!menu) return;
    menu.classList.remove('open');
    btn && btn.classList.remove('active');
    if (lenisInstance) lenisInstance.start();
}

/* ───────────────────────────────
   5. PARTICLES CANVAS
─────────────────────────────── */
function initParticles(canvasId, count = 80, color = 'rgba(255,255,255,0.35)') {
    const canvas = $(`#${canvasId}`);
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let W, H, particles = [];

    function resize() {
        W = canvas.width = canvas.offsetWidth;
        H = canvas.height = canvas.offsetHeight;
    }
    resize();
    window.addEventListener('resize', resize, { passive: true });

    for (let i = 0; i < count; i++) {
        particles.push({
            x: Math.random() * 1000,
            y: Math.random() * 1000,
            r: Math.random() * 1.4 + 0.3,
            dx: (Math.random() - 0.5) * 0.18,
            dy: (Math.random() - 0.5) * 0.18,
            o: Math.random() * 0.6 + 0.1
        });
    }

    function draw() {
        ctx.clearRect(0, 0, W, H);
        particles.forEach(p => {
            p.x += p.dx; p.y += p.dy;
            if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
            if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
            ctx.beginPath();
            ctx.arc(p.x % W, p.y % H, p.r, 0, Math.PI * 2);
            ctx.fillStyle = color;
            ctx.globalAlpha = p.o;
            ctx.fill();
        });
        ctx.globalAlpha = 1;
        requestAnimationFrame(draw);
    }
    draw();
}

/* ───────────────────────────────
   6. HERO ANIMATIONS (on load)
─────────────────────────────── */
function initHeroAnimations() {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from('#hero-badge', { y: 20, opacity: 0, duration: 0.7 })
        .from('#hero-title', { y: 30, opacity: 0, duration: 0.8 }, '-=0.4')
        .from('#hero-subtitle', { y: 20, opacity: 0, duration: 0.6 }, '-=0.5')
        .from('#hero-text', { y: 16, opacity: 0, duration: 0.5 }, '-=0.4')
        .from('#hero-buttons', { y: 16, opacity: 0, duration: 0.5 }, '-=0.4')
        .from('.hero-astronaut', { x: -40, opacity: 0, duration: 1.0, ease: 'power2.out' }, '-=0.8')
        .from('.hero-planet', { x: 40, opacity: 0, duration: 1.0, ease: 'power2.out' }, '-=0.9')
        .from('#scroll-indicator', { opacity: 0, duration: 0.6 }, '-=0.3');

    gsap.to('.hero-astronaut', {
        y: -18, duration: 3.5, ease: 'sine.inOut', yoyo: true, repeat: -1
    });

    gsap.to('.hero-planet', {
        y: -14, rotation: 4, duration: 4.5,
        ease: 'sine.inOut', yoyo: true, repeat: -1
    });

    $$('.sparkle').forEach((el, i) => {
        gsap.to(el, {
            y: `random(-12, 12)`, x: `random(-8, 8)`,
            rotation: `random(-15, 15)`, opacity: `random(0.2, 0.7)`,
            duration: `random(2.5, 4)`, ease: 'sine.inOut',
            yoyo: true, repeat: -1, delay: i * 0.3
        });
    });

    window.addEventListener('scroll', () => {
        gsap.to('#scroll-indicator', { opacity: 0, duration: 0.4 });
    }, { once: true, passive: true });
}

/* ───────────────────────────────
   8. SCROLL ANIMATIONS (ScrollTrigger)
─────────────────────────────── */
function initScrollAnimations() {
    function fadeUp(el, opts = {}) {
        gsap.from(el, {
            y: opts.y || 36,
            opacity: 0,
            duration: opts.duration || 0.8,
            ease: opts.ease || 'power3.out',
            delay: opts.delay || 0,
            scrollTrigger: {
                trigger: el,
                start: 'top 88%',
                toggleActions: 'play none none none'
            }
        });
    }

    fadeUp('#projects-title', { y: 24 });
    gsap.fromTo('#about-title',
        { y: 24, opacity: 0 },
        {
            y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
            clearProps: 'all',
            scrollTrigger: { trigger: '#about-title', start: 'top 88%', toggleActions: 'play none none none' }
        }
    );
    fadeUp('.cta-tag', { y: 16 });
    fadeUp('.cta-title', { y: 30 });
    fadeUp('.cta-text', { delay: 0.15 });
    fadeUp('#btn-cta', { delay: 0.25 });

    ScrollTrigger.create({
        trigger: '#projects-grid',
        start: 'top 85%',
        onEnter: () => {
            gsap.from('.project-card', {
                y: 50, opacity: 0, duration: 0.7,
                stagger: 0.1, ease: 'power3.out'
            });
        }
    });

    ScrollTrigger.create({
        trigger: '.about-left',
        start: 'top 85%',
        onEnter: () => {
            gsap.fromTo('.about-left > *',
                { x: -30, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: 'power3.out', clearProps: 'all' }
            );
        }
    });

    ScrollTrigger.create({
        trigger: '.about-right',
        start: 'top 82%',
        onEnter: () => {
            gsap.from('.about-right > *', {
                x: 30, opacity: 0, duration: 0.7,
                stagger: 0.12, ease: 'power3.out'
            });
        }
    });

    $$('.cta-sparkle').forEach((el, i) => {
        gsap.from(el, {
            scale: 0, opacity: 0, duration: 0.5, delay: i * 0.15,
            ease: 'back.out(2)',
            scrollTrigger: { trigger: '#contato', start: 'top 80%' }
        });
    });
}

/* ───────────────────────────────
   9. SKILL BARS (removido — substituído por tags)
─────────────────────────────── */
function animateSkillBars() {
    // Barras removidas — função mantida para evitar erros em referências residuais
}

/* ───────────────────────────────
   10. PHOTO CAROUSEL
─────────────────────────────── */
function initPhotoCarousel() {
    const track = $('#photo-track');
    const dots = $$('#photo-dots .dot');
    const slides = $$('.photo-slide');
    if (!track || slides.length === 0) return;

    let current = 0;
    let autoTimer;

    function goTo(index) {
        current = (index + slides.length) % slides.length;
        track.style.transform = `translateX(-${current * 100}%)`;
        dots.forEach((d, i) => d.classList.toggle('active', i === current));
    }

    function startAuto() {
        autoTimer = setInterval(() => goTo(current + 1), 5000);
    }
    function stopAuto() { clearInterval(autoTimer); }

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => { stopAuto(); goTo(i); startAuto(); });
    });

    let startX = 0, isDragging = false;
    const carousel = $('#photo-carousel');

    carousel.addEventListener('mousedown', e => { isDragging = true; startX = e.clientX; stopAuto(); });
    carousel.addEventListener('touchstart', e => { isDragging = true; startX = e.touches[0].clientX; stopAuto(); }, { passive: true });

    window.addEventListener('mouseup', e => {
        if (!isDragging) return;
        isDragging = false;
        const diff = e.clientX - startX;
        if (Math.abs(diff) > 40) goTo(diff < 0 ? current + 1 : current - 1);
        startAuto();
    });
    window.addEventListener('touchend', e => {
        if (!isDragging) return;
        isDragging = false;
        const diff = e.changedTouches[0].clientX - startX;
        if (Math.abs(diff) > 40) goTo(diff < 0 ? current + 1 : current - 1);
        startAuto();
    }, { passive: true });

    startAuto();
}

/* ───────────────────────────────
   11. PROJECT MODAL
─────────────────────────────── */
let activeModalCarouselIndex = 0;
let activeModalProject = null;

function initModal() {
    const overlay = $('#modal');
    const closeBtn = $('#modal-close');
    if (!overlay) return;

    $$('.project-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.closest('.card-arrow')) return;
            if (e.target.closest('.card-info-icon')) return;

            const project = PROJECTS[parseInt(card.dataset.project)];

            if (window.innerWidth <= 768) {
                if (!card.classList.contains('touched')) {
                    $$('.project-card.touched').forEach(c => c.classList.remove('touched'));
                    card.classList.add('touched');
                } else {
                    if (project && project.url) window.open(project.url, '_blank', 'noopener,noreferrer');
                }
            } else {
                if (project && project.url) window.open(project.url, '_blank', 'noopener,noreferrer');
            }
        });

        card.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') {
                const project = PROJECTS[parseInt(card.dataset.project)];
                if (project && project.url) window.open(project.url, '_blank', 'noopener,noreferrer');
            }
        });
    });

    document.addEventListener('click', (e) => {
        if (window.innerWidth > 768) return;
        if (!e.target.closest('.project-card')) {
            $$('.project-card.touched').forEach(c => c.classList.remove('touched'));
        }
    });

    closeBtn && closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', e => {
        if (e.target === overlay) closeModal();
    });
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && overlay.classList.contains('open')) closeModal();
    });

    $('#modal-prev') && $('#modal-prev').addEventListener('click', () => setModalSlide(activeModalCarouselIndex - 1));
    $('#modal-next') && $('#modal-next').addEventListener('click', () => setModalSlide(activeModalCarouselIndex + 1));
}

function openModal(projectIndex) {
    const project = PROJECTS[projectIndex];
    if (!project) return;

    activeModalProject = project;
    activeModalCarouselIndex = 0;

    $('#modal-title').textContent = project.name;
    $('#modal-desc').textContent = project.desc;
    $('#modal-live').href = project.url;
    $('#modal-github').href = project.github;

    const tagsEl = $('#modal-tags');
    tagsEl.innerHTML = project.tech.map(t =>
        `<span class="modal-tag">${t}</span>`
    ).join('');

    const slidesEl = $('#modal-slides');
    slidesEl.innerHTML = project.images.map(src =>
        `<div class="modal-slide"><img src="${src}" alt="${project.name}" loading="lazy" /></div>`
    ).join('');
    slidesEl.style.transform = 'translateX(0)';

    const dotsEl = $('#modal-dots');
    dotsEl.innerHTML = project.images.map((_, i) =>
        `<button class="modal-dot${i === 0 ? ' active' : ''}" data-slide="${i}"></button>`
    ).join('');
    $$('.modal-dot').forEach(dot => {
        dot.addEventListener('click', () => setModalSlide(parseInt(dot.dataset.slide)));
    });

    const overlay = $('#modal');
    const container = overlay.querySelector('.modal-container');

    gsap.killTweensOf(container);
    gsap.set(container, { y: 28, opacity: 0, scale: 0.97 });

    document.body.style.overflow = 'hidden';
    if (lenisInstance) lenisInstance.stop();
    overlay.classList.add('open');

    const modalInfo = $('#modal-container').querySelector('.modal-info');
    if (modalInfo) modalInfo.scrollTop = 0;

    gsap.to(container, {
        y: 0, opacity: 1, scale: 1,
        duration: 0.45, ease: 'power3.out'
    });
}

function closeModal() {
    const overlay = $('#modal');
    const container = overlay.querySelector('.modal-container');

    gsap.killTweensOf(container);

    gsap.to(container, {
        y: 18, opacity: 0, scale: 0.97,
        duration: 0.28, ease: 'power2.in',
        onComplete: () => {
            overlay.classList.remove('open');
            document.body.style.overflow = '';
            if (lenisInstance) lenisInstance.start();
            gsap.set(container, { y: 28, opacity: 0, scale: 0.97 });
        }
    });
}

function setModalSlide(index) {
    const slides = $$('.modal-slide');
    const dots = $$('.modal-dot');
    if (slides.length === 0) return;

    activeModalCarouselIndex = (index + slides.length) % slides.length;
    $('#modal-slides').style.transform = `translateX(-${activeModalCarouselIndex * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === activeModalCarouselIndex));
}

/* ───────────────────────────────
   12. SCROLL HIGHLIGHT TEXT
─────────────────────────────── */
function initScrollHighlight() {
    $$('.section-tag').forEach(el => {
        gsap.fromTo(el,
            { opacity: 0.2 },
            {
                opacity: 1,
                scrollTrigger: {
                    trigger: el,
                    start: 'top 90%',
                    end: 'top 60%',
                    scrub: true
                }
            }
        );
    });

    const heroTitle = $('#hero-title');
    if (!heroTitle) return;

    $$('.section-title').forEach(titleEl => {
        gsap.fromTo(titleEl,
            { opacity: 0.15, filter: 'blur(4px)' },
            {
                opacity: 1,
                filter: 'blur(0px)',
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: titleEl,
                    start: 'top 88%',
                    end: 'top 65%',
                    scrub: 0.5,
                    toggleActions: 'play none none reverse'
                }
            }
        );
    });
}

/* ───────────────────────────────
   13. CTA SPARKLES FLOAT
─────────────────────────────── */
function initCtaAnimations() {
    $$('.cta-sparkle').forEach((el, i) => {
        gsap.to(el, {
            y: `random(-10, 10)`, x: `random(-6, 6)`,
            rotation: `random(-20, 20)`,
            duration: `random(2.5, 4)`,
            ease: 'sine.inOut', yoyo: true, repeat: -1, delay: i * 0.4
        });
    });
}

/* ───────────────────────────────
   INIT
─────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    initLenis();
    initPreloader();

    initParticles('particles-canvas', 60, 'rgba(13,13,13,0.07)');
    initParticles('cta-particles', 40, 'rgba(129,140,248,0.4)');

    initHeader();
    initHamburger();

    initScrollAnimations();
    initScrollHighlight();
    initCtaAnimations();

    initModal();
    initPhotoCarousel();

    document.fonts.ready.then(() => ScrollTrigger.refresh());
});