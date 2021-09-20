const burger = document.querySelector('.burger');
const burgerSpan = burger.querySelector('span');
const navList = document.querySelector('.nav-list');
const navItems = navList.querySelectorAll('.nav-item');

burger.addEventListener('click', toggleBurger);

navItems.forEach(link => {

  link.addEventListener('click', () => {
    if (navList.classList.contains('active')) {
      toggleBurger();
    }
  });

});

function toggleBurger() {
  burgerSpan.classList.toggle('active');
  navList.classList.toggle('active');
}
