/* ==========================================================================
   CAMP21 MAIN LOGIC CONTROLLER
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Activate lightweight scroll reveal animations
  const revealElements = document.querySelectorAll('.reveal');
  const revealOptions = { threshold: 0.08, rootMargin: "0px 0px -40px 0px" };
  
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    });
  }, revealOptions);
  
  revealElements.forEach(el => revealObserver.observe(el));
});