const burgerButton = document.querySelector(".header__burger");
const menuContent = document.querySelector(".header__menu-content");
const overlay = document.querySelector(".header__overlay");
const closeButton = document.querySelector(".header__menu-close");

function closeMenu() {
  menuContent.classList.remove("header__menu-content--active");
  overlay.classList.remove("header__overlay--active");
}

burgerButton.addEventListener("click", () => {
  menuContent.classList.toggle("header__menu-content--active");
  overlay.classList.toggle("header__overlay--active");
});

closeButton.addEventListener("click", () => {
  closeMenu();
});

overlay.addEventListener("click", () => {
  closeMenu();
});
