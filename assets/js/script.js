"use strict";

// PRELOADER
document.addEventListener("DOMContentLoaded", function () {
  gsap.fromTo(
    ".preloader",
    { opacity: 1 },
    {
      opacity: 0,
      duration: 4.5, // Adjust the duration to your preference
      onComplete: function () {
        // Remove the preloader and allow scrolling once it's hidden
        document.body.classList.remove("loading");
        // Optionally, you can remove the preloader element from the DOM
        document.querySelector(".preloader").style.display = "none";
      },
    }
  );

  gsap.fromTo(
    ".preloader-logo-name",
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 3, 
      delay: 0.5,
    }
  );
});


/**
 * navbar toggle
 */

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElemArr = [navOpenBtn, navCloseBtn];

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
  });
}

/**
 * toggle navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.remove("active");
  });
}

/**
 * header active when window scrolled down
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 50
    ? header.classList.add("active")
    : header.classList.remove("active");
});
