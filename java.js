document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");

  // Change navbar color on scroll
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});

document.addEventListener("scroll", () => {
  const animatedElements = document.querySelectorAll(".animated-text");

  animatedElements.forEach((element) => {
    const rect = element.getBoundingClientRect();

    // Trigger animation if the element is in the viewport
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      element.classList.add("visible");
    }
  });
});

document.addEventListener("scroll", () => {
  const elements = document.querySelectorAll(".slide-in-left");

  elements.forEach((element) => {
    const rect = element.getBoundingClientRect();

    // Check if the element is in the viewport
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      element.classList.add("visible");
    }
  });
});

document.addEventListener("scroll", () => {
  const elements = document.querySelectorAll(".slide-in-right");

  elements.forEach((element) => {
    const rect = element.getBoundingClientRect();

    // Check if the element is in the viewport
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      element.classList.add("visible");
    }
  });
});



