// Отримуємо всі елементи меню навігації
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
  link.addEventListener('click', () => {
      // Знаходимо відкрите меню навігації і закриваємо його
      const navbarCollapse = document.querySelector('.navbar-collapse');
      const bootstrapCollapse = new bootstrap.Collapse(navbarCollapse, {
          toggle: false
      });
      bootstrapCollapse.hide();
  });
});
