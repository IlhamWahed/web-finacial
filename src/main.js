// navbar //
const humbergerEl = document.getElementById("humberger-menu");
const navbarEL = document.getElementById("navbar-ul");
const btnClose = document.getElementById("btn-close");
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    navbarEL.classList.add("hidden");
  });
});

humbergerEl.addEventListener("click", () => {
  navbarEL.classList.remove("hidden");
});

btnClose.addEventListener("click", () => {
  navbarEL.classList.add("hidden");
});
// navbar end//
