//  here we will write all the js for navbar , header and footer

    // ---------- NAVBAR SCROLL EFFECT ----------
    const navbar = document.getElementById('navbar');
    const navInner = document.getElementById('nav-inner');
    
    function updateNavbarScroll() {
      if (window.scrollY > 50) {
        navInner.classList.add('shadow-2xl', 'shadow-black/20');
        navInner.classList.remove('shadow-none');
        navbar.style.transform = 'translateZ(8px) rotateX(0.8deg)';
      } else {
        navInner.classList.remove('shadow-2xl', 'shadow-black/20');
        navbar.style.transform = 'translateZ(0) rotateX(0deg)';
      }
    }
    
    window.addEventListener('scroll', updateNavbarScroll, { passive: true });
    updateNavbarScroll();

    // ---------- MOBILE MENU TOGGLE ----------
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    let menuOpen = false;
    
    menuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      menuOpen = !menuOpen;
      
      if (menuOpen) {
        mobileMenu.classList.remove('hidden', 'opacity-0', '-translate-y-6', 'pointer-events-none');
        mobileMenu.classList.add('opacity-100', 'translate-y-0', 'pointer-events-auto');
        menuBtn.querySelector('i').className = 'fas fa-times';
        menuBtn.style.transform = 'rotate(180deg) scale(1.1)';
      } else {
        closeMobileMenu();
      }
    });
    
    function closeMobileMenu() {
      menuOpen = false;
      mobileMenu.classList.add('opacity-0', '-translate-y-6', 'pointer-events-none');
      mobileMenu.classList.remove('opacity-100', 'translate-y-0', 'pointer-events-auto');
      menuBtn.querySelector('i').className = 'fas fa-bars';
      menuBtn.style.transform = '';
      
      setTimeout(() => {
        if (!menuOpen) mobileMenu.classList.add('hidden');
      }, 400);
    }
    
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });
    
    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target) && menuOpen) {
        closeMobileMenu();
      }
    });

    // ---------- 3D MOUSE PARALLAX ----------
    document.addEventListener('mousemove', (e) => {
      const xAxis = (window.innerWidth / 2 - e.clientX) / 75;
      const yAxis = (window.innerHeight / 2 - e.clientY) / 85;
      
      if (window.scrollY > 50) {
        navbar.style.transform = `translateZ(8px) rotateX(${0.8 + yAxis * 0.12}deg) rotateY(${xAxis * 0.1}deg)`;
      } else {
        navbar.style.transform = `translateZ(0px) rotateX(${yAxis * 0.05}deg) rotateY(${xAxis * 0.04}deg)`;
      }
    });
    
    document.addEventListener('mouseleave', () => {
      if (window.scrollY > 50) {
        navbar.style.transform = 'translateZ(8px) rotateX(0.8deg)';
      } else {
        navbar.style.transform = 'translateZ(0) rotateX(0deg)';
      }
    });

    // ---------- SMOOTH SCROLL FOR ALL ANCHOR LINKS ----------
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const target = document.querySelector(targetId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    // ---------- INTERSECTION OBSERVER FOR SCROLL ANIMATIONS ----------
    const observerOptions = { threshold: 0.15, rootMargin: '0px 0px -40px 0px' };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
          entry.target.style.opacity = '1';
        }
      });
    }, observerOptions);
    
    document.querySelectorAll('.animate-fade-in-up, .animate-fade-in, .animate-slide-up').forEach(el => {
      observer.observe(el);
    });