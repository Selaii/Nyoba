window.onload = function() {
  const image = document.querySelector('.recipe-hero-img');

  gsap.from(image, {
    duration: 2,
    opacity: 0,
    x: -200,
    ease: 'power3.out', 
  });

  const recipeItems = document.querySelectorAll('.recipe');

  recipeItems.forEach((item, index) => {
    gsap.from(item, {
      duration: 1,
      opacity: 0,
      y: -30,
      delay: index * 0.3,
      ease: 'power2.out',
    });
  });
};
