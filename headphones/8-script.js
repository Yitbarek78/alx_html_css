const openMenu = document.querySelector(".holberton_school-icon-menu");
const closeMenu = document.querySelector(".x");
const mobileNav = document.querySelector(".mobile_nav");

let isOpen = false;

openMenu.addEventListener("click", function (e) {
  mobileNav.classList.toggle("hidden");
  openMenu.classList.add("hidden");
  closeMenu.classList.remove("hidden");
});

closeMenu.addEventListener("click", function (e) {
  mobileNav.classList.toggle("hidden");
  openMenu.classList.remove("hidden");
  closeMenu.classList.add("hidden");
});
