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

//-------------- Scroll ----------------//
scrollUp = () => {
  const scrollUpBtn = document.getElementById("scroll-up");
  if (this.scrollY >= 250) {
    scrollUpBtn.classList.remove("-bottom-1/2");
    scrollUpBtn.classList.add("bottom-4");
  } else {
    scrollUpBtn.classList.add("-bottom-1/2");
    scrollUpBtn.classList.remove("bottom-4");
  }
};
window.addEventListener("scroll", scrollUp);
//-------------- Scroll End----------------//

//-------------- Scroll Section Active ----------------//
const activeLink = () => {
  const sectionEl = document.querySelectorAll("section");
  const navLinkEL = document.querySelectorAll(".nav-link");

  let current = "home";

  sectionEl.forEach((sections) => {
    const sectionTop = sections.offsetTop;

    if (this.scrollY >= sectionTop - 60) {
      current = sections.getAttribute("id");
    }
  });

  navLinkEL.forEach((item) => {
    item.classList.remove("text-color-secondary");
    if (item.href.includes(current)) {
      item.classList.add("text-color-secondary");
    }
  });
};

window.addEventListener("scroll", activeLink);
//-------------- Scroll Section Active End----------------//

//-------------- Change BG Header----------------//
const scrollHeader = () => {
  const headerEl = document.getElementById("header");
  if (this.scrollY >= 50) {
    headerEl.classList.add("border-b", "border-color-secondary");
  } else {
    headerEl.classList.remove("border-b", "border-color-secondary");
  }
};
window.addEventListener("scroll", scrollHeader);
//-------------- Change BG Header End----------------//
