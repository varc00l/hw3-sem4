// lazyLoad.js
document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('img[data-src]');
  
    // Callback функція для IntersectionObserver
    const lazyLoad = (entries, observer) => {
      entries.forEach((entry) => {
        // Якщо зображення стає видимим
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src; // Присвоєння атрибута data-src до src
          img.onload = () => {
            img.classList.add('loaded'); // Додаємо клас для анімації
          };
          observer.unobserve(img); // Припиняємо спостереження за цим зображенням
        }
      });
    };
  
    // Створюємо новий IntersectionObserver
    const observer = new IntersectionObserver(lazyLoad, {
      root: null, // Спостерігаємо за всім viewport'ом
      threshold: 0.1, // Зображення стає видимим, якщо 10% його видимі
    });
  
    // Спостерігаємо за кожним зображенням
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
  