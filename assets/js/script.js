'use strict';



/**
 * navbar toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

/**
 * toggle the navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}


// Form handler
document
.getElementById('feedbackForm')
.addEventListener('submit', function (e) {
  e.preventDefault(); // stop normal form submit

  const form = e.target;
  const name = encodeURIComponent(form.name.value.trim());
  // const email = encodeURIComponent(form.email.value.trim());
  const comment = encodeURIComponent(form.comment.value.trim());

  // build mailto link
  const mailto = [
    'mailto:sheikhhaziq76@proton.me',
    '?subject=Feedback from ' + name,
    '&body=Name: ' + name + '%0D%0A',
    comment
  ].join('');

  // navigate to mailto: (opens default mail client)
  window.location.href = mailto;
});



/**
 * back to top & header
 */

const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});