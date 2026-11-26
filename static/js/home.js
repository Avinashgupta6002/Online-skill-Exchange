// Initialize AOS with enhanced settings
  AOS.init({
    duration: 1000,
    once: true,
    easing: 'ease-out-cubic',
    offset: 80,
    delay: 0,
  });

  // Smooth scroll for all anchor links
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

  // Add subtle 3D tilt effect to hero section based on mouse movement
  const heroSection = document.getElementById('home');
  if (heroSection && window.innerWidth > 768) {
    heroSection.addEventListener('mousemove', (e) => {
      const rect = heroSection.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 30;
      const rotateY = (centerX - x) / 30;
      
      const content = heroSection.querySelector('.relative.z-10');
      if (content) {
        content.style.transform = `rotateX(${rotateX * 0.5}deg) rotateY(${rotateY * 0.5}deg)`;
        content.style.transition = 'transform 0.1s ease-out';
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

  console.log('🚀 SkillX - Premium 3D Experience Loaded Successfully!');
  console.log('✨ All 3D animations and interactions are active.');