document.addEventListener("DOMContentLoaded", function () {
  const burgerBtn = document.querySelector(".burger-btn");
  const navLinks = document.querySelector(".nav__link");

  // При клике на кнопку бургера переключаем класс active для меню навигации
  burgerBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });
});
