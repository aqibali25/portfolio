const themeIcon = document.getElementById("theme-icon");
const navLinks = document.querySelector(".navlinks");
const logo = document.querySelector(".logo img");
const body = document.body;

// Check the stored theme preference on page load
document.addEventListener("DOMContentLoaded", function () {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    body.classList.add("dark-theme");
    themeIcon.setAttribute("src", "assets/images/light-mode.png");
    logo.setAttribute("src", "assets/images/logo-white.png");
  } else {
    body.classList.remove("dark-theme");
    themeIcon.setAttribute("src", "assets/images/dark-mode.png");
    logo.setAttribute("src", "assets/images/logo-black.png");
  }
});

themeIcon.addEventListener("click", function () {
  // Toggle dark theme class on the body
  body.classList.toggle("dark-theme");

  if (body.classList.contains("dark-theme")) {
    // If dark theme is activated, change the icon and logo to light mode
    themeIcon.setAttribute("src", "assets/images/light-mode.png");
    logo.setAttribute("src", "assets/images/logo-white.png");

    // Save the theme preference in localStorage
    localStorage.setItem("theme", "dark");
  } else {
    // If light theme is activated, change the icon and logo to dark mode
    themeIcon.setAttribute("src", "assets/images/dark-mode.png");
    logo.setAttribute("src", "assets/images/logo-black.png");

    // Save the theme preference in localStorage
    localStorage.setItem("theme", "light");
  }
});
const toggleMenu = document.getElementById("menu-toggle");
toggleMenu.addEventListener("click", function () {
  const navbar = document.querySelector(".navbar");
  const mainContent = document.querySelector(".content");

  navbar.classList.toggle("active");
  this.classList.toggle("fa-x");
  if (toggleMenu.classList.contains("fa-x")) {
    toggleMenu.style.fontSize = "20px";
  } else {
    toggleMenu.style.fontSize = "35px";
  }
  if (navbar.classList.contains("active")) {
    mainContent.style.marginTop = navLinks.offsetHeight + 5 + "px";
  } else {
    mainContent.style.marginTop = "0";
  }
});
