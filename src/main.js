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

// testimoni //
const userTextEl = document.getElementsByClassName("user-text");
const userPictEl = document.getElementsByClassName("user-pict");

function showReview() {
  for (userPic of userPictEl) {
    userPic.classList.remove("active");
  }
  for (userText of userTextEl) {
    userText.classList.remove("active-text");
  }

  let i = Array.from(userPictEl).indexOf(event.target);

  userPictEl[i].classList.add("active");
  userTextEl[i].classList.add("active-text");
}

// testimoni end //
