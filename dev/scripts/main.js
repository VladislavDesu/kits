const headerNavToggle = document.querySelector(`.header .navbar-toggler`);
const headerNavbar = document.querySelector(`.header .navbar`);

headerNavToggle.addEventListener(`click`, () => {
  headerNavbar.classList.toggle(`navbar--open`);
  headerNavbar.classList.toggle(`jello`);
});
