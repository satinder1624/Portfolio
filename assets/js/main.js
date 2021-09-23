/* ============= Type Effect ================== */
const text = ["Web", " ", "App", " ", "Full-Stack", " "];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

const type = () => {
  if (count === text.length) {
    count = 0;
  }
  currentText = text[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".typing").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }
  if (currentText === " ") {
  }

  setTimeout(type, 300);
};

setTimeout(type, 2100);

/* ============= SHOW MENU ================== */
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
    });
  }
};

showMenu("nav-toggle", "nav-menu");

/* ============= REMOVE MENU MOBILE ================== */
const navLinks = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}

navLinks.forEach((n) => n.addEventListener("click", linkAction));

/* ============= SCROLL SECTIONS ACTIVE LINK ================== */
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);

/* ============= CHANGE BACKGROUND HEADER ================== */
function scrollHeader() {
  const header = document.getElementById("header");
  if (this.scrollY >= 200) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
}

window.addEventListener("scroll", scrollHeader);

/* ============= SHOW SCROLL TOP ================== */
function scrollTop() {
  const scrollTop = document.getElementById("scroll-top");
  if (this.scrollY >= 560) {
    scrollTop.classList.add("show-scroll");
  } else {
    scrollTop.classList.remove("show-scroll");
  }
}

window.addEventListener("scroll", scrollTop);

/* ============= MIXITUP FILTER PORTFOLIO ================== */
const mixer = mixitup(".portfolio__container", {
  selectors: {
    target: ".portfolio__content",
  },
  animation: {
    duration: 300,
  },
});

/* ============= LINK ACTIVE PORTFOLIO ================== */
const linkPortfolio = document.querySelectorAll(".portfolio__item");

function activePortfolio() {
  if (linkPortfolio) {
    linkPortfolio.forEach((l) => l.classList.remove("active-portfolio"));
    this.classList.add("active-portfolio");
  }
}

linkPortfolio.forEach((l) => l.addEventListener("click", activePortfolio));

/* ============= SWIPER CAROUSEL ================== */
const swiper = new Swiper(".testimonial__container", {
  // Optional parameters
  spaceBetween: 16,
  loop: true,
  grabCursor: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },

  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

const send = (name, email, project, number, message) => {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "satinder1624@gmail.com",
    Password: "osnuxzdtvhedkbib",
    To: "satinder1624@gmail.com",
    From: "satinder1624@gmail.com",
    Subject: `${name} sent you a new message`,
    Body: `Name : ${name} <br/> Email: ${email} <br/> Project: ${project} <br/> Number: ${number} <br/> Message: ${message} <br/>`,
  }).then(() => alert("mail sent successfully"));
};

const submitForm = (e) => {
  e.preventDefault();
  // input values
  let name = document.querySelector(".name");
  let email = document.querySelector(".email");
  let project = document.querySelector(".projectBox");
  let number = document.querySelector(".number");
  let message = document.querySelector(".message");

  send(name.value, email.value, project.value, number.value, message.value);

  document.querySelector("form").reset();
};

document.querySelector(".contact__button").onclick = submitForm;

/* ============= GSAP ANIMATION ================== */
gsap.from(".home__img", { opacity: 0, duration: 2, delay: 0.5, x: 60 });
gsap.from(".home__data", { opacity: 0, duration: 2, delay: 0.8, y: 25 });
gsap.from(".home__greeting, .home__name, .home__profession, .home__button", {
  opacity: 0,
  duration: 2,
  delay: 1,
  y: 25,
  ease: "expo.out",
  stagger: 0.2,
});
gsap.from(".nav__logo, .nav__toggle", {
  opacity: 0,
  duration: 2,
  delay: 1.5,
  y: 25,
  ease: "expo.out",
  stagger: 0.2,
});
gsap.from(".nav__item", {
  opacity: 0,
  duration: 2,
  delay: 1.8,
  y: 25,
  ease: "expo.out",
  stagger: 0.2,
});
gsap.from(".home__social-icon", {
  opacity: 0,
  duration: 2,
  delay: 2.3,
  y: 25,
  ease: "expo.out",
  stagger: 0.2,
});
