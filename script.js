document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('img[data-src]');
  
    const lazyLoad = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.onload = () => {
            img.classList.add('loaded'); 
          };
          observer.unobserve(img); 
        }
      });
    };
  
    const observer = new IntersectionObserver(lazyLoad, {
      root: null, 
      threshold: 0.1, 
    });
  
    images.forEach((img) => {
      observer.observe(img);
    });
});
  
document.getElementById('loadImagesBtn').addEventListener('click', function () {
    const images = document.querySelectorAll('img[data-src]');
    images.forEach((img) => {
      img.src = img.dataset.src;
      img.onload = () => img.classList.add('loaded');
    });
});
  