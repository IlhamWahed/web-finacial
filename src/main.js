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

// toggle btn pricing //
const toggleBtnEl = document.getElementById("toggleBtn");

const card_1_frontEL = document.querySelector("#card_1_front");
const card_1_backEL = document.querySelector("#card_1_back");

const card_2_frontEL = document.querySelector("#card_2_front");
const card_2_backEL = document.querySelector("#card_2_back");

const card_3_frontEL = document.querySelector("#card_3_front");
const card_3_backEL = document.querySelector("#card_3_back");

toggleBtnEl.addEventListener("change", () => {
  card_1_frontEL.classList.toggle("-rotate-y-180");
  card_1_backEL.classList.toggle("rotate-y-180");

  card_2_frontEL.classList.toggle("-rotate-y-180");
  card_2_backEL.classList.toggle("rotate-y-180");

  card_3_frontEL.classList.toggle("-rotate-y-180");
  card_3_backEL.classList.toggle("rotate-y-180");
});
// toggle btn pricing end//
