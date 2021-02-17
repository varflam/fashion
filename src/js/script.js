const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.nav__menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('nav__menu_active');
});