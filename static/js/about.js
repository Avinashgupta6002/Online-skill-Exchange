// Initialize AOS
  AOS.init({
    duration: 1000,
    once: true,
    easing: 'ease-out-cubic',
    offset: 80,
  });

  // Smooth scroll
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

  // 3D mouse parallax on hero
  const heroSection = document.querySelector('section');
  if (heroSection && window.innerWidth > 768) {
    heroSection.addEventListener('mousemove', (e) => {
      const rect = heroSection.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const rotateX = ((y - rect.height / 2) / 40).toFixed(2);
      const rotateY = ((rect.width / 2 - x) / 40).toFixed(2);
      
      const content = heroSection.querySelector('.relative.z-10');
      if (content) {
        content.style.transform = `rotateX(${rotateX * 0.3}deg) rotateY(${rotateY * 0.3}deg)`;
        content.style.transition = 'transform 0.15s ease-out';
      }
    });
    
    heroSection.addEventListener('mouseleave', () => {
      const content = heroSection.querySelector('.relative.z-10');
      if (content) {
        content.style.transform = 'rotateX(0deg) rotateY(0deg)';
        content.style.transition = 'transform 0.8s cubic-bezier(0.23, 1, 0.32, 1)';
      }
    });
  }

  console.log('⚡ SkillXwist - Next-Level 3D About Page Loaded!');