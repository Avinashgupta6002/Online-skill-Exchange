(function() {
      const navbar = document.getElementById('navbar');
      const menuBtn = document.getElementById('menu-btn');
      const mobileMenu = document.getElementById('mobile-menu');

      // Scroll effect: add shadow and depth (scrolled class)
      function handleScroll() {
        if (window.scrollY > 45) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }

      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();

      // Mobile menu toggle with 3D rotation
      if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          mobileMenu.classList.toggle('show');
          const icon = menuBtn.querySelector('i');
          if (icon) {
            if (mobileMenu.classList.contains('show')) {
              icon.className = 'fas fa-times';
              menuBtn.style.transform = 'rotate(0deg) translateZ(8px)';
            } else {
              icon.className = 'fas fa-bars';
              menuBtn.style.transform = '';
            }
          }
        });

        // Close menu when a link is clicked
        mobileMenu.querySelectorAll('a').forEach(link => {
          link.addEventListener('click', () => {
            mobileMenu.classList.remove('show');
            const icon = menuBtn.querySelector('i');
            if (icon) {
              icon.className = 'fas fa-bars';
              menuBtn.style.transform = '';
            }
          });
        });

        // Close when clicking outside navbar
        document.addEventListener('click', (event) => {
          if (!navbar.contains(event.target) && mobileMenu.classList.contains('show')) {
            mobileMenu.classList.remove('show');
            const icon = menuBtn.querySelector('i');
            if (icon) {
              icon.className = 'fas fa-bars';
              menuBtn.style.transform = '';
            }
          }
        });
      }

      // Subtle 3D mouse parallax (desktop) – works with primary blue depth
      if (window.innerWidth > 880) {
        document.addEventListener('mousemove', (e) => {
          const nav = document.getElementById('navbar');
          if (!nav) return;
          const xAxis = (window.innerWidth / 2 - e.clientX) / 85;
          const yAxis = (window.innerHeight / 2 - e.clientY) / 95;
          
          if (nav.classList.contains('scrolled')) {
            nav.style.transform = `translateZ(6px) rotateX(${1 + yAxis * 0.2}deg) rotateY(${xAxis * 0.15}deg)`;
          } else {
            nav.style.transform = `translateZ(0px) rotateX(${yAxis * 0.1}deg) rotateY(${xAxis * 0.08}deg)`;
          }
        });

        document.addEventListener('mouseleave', () => {
          if (navbar) {
            if (navbar.classList.contains('scrolled')) {
              navbar.style.transform = 'translateZ(6px) rotateX(1deg)';
            } else {
              navbar.style.transform = '';
            }
          }
        });
      }

      // Reset inline transforms on mobile resize
      window.addEventListener('resize', () => {
        if (window.innerWidth <= 880 && navbar) {
          navbar.style.transform = '';
        }
      });

    })();