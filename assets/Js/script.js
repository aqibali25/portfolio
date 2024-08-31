document.addEventListener("DOMContentLoaded", function () {
  const savedTheme = localStorage.getItem("theme");

  const themeIcon = document.getElementById("theme-icon");
  const navLinks = document.querySelector(".navlinks");
  const logo = document.querySelector(".logo img");
  const body = document.body;

  if (savedTheme) {
    if (savedTheme === "dark") {
      applyDarkTheme();
    } else {
      applyLightTheme();
    }
  } else {
    const isSystemDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (isSystemDark) {
      applyDarkTheme();
    } else {
      applyLightTheme();
    }
  }

  function applyDarkTheme() {
    body.classList.add("dark-theme");
    themeIcon.setAttribute("src", "assets/images/light-mode.png");
    logo.setAttribute("src", "assets/images/logo-white.png");
    localStorage.setItem("theme", "dark");
  }

  function applyLightTheme() {
    body.classList.remove("dark-theme");
    themeIcon.setAttribute("src", "assets/images/dark-mode.png");
    logo.setAttribute("src", "assets/images/logo-black.png");
    localStorage.setItem("theme", "light");
  }

  themeIcon.addEventListener("click", function () {
    if (body.classList.contains("dark-theme")) {
      applyLightTheme();
    } else {
      applyDarkTheme();
    }
  });

  const toggleMenu = document.getElementById("menu-toggle");
  toggleMenu.addEventListener("click", function () {
    const navbar = document.querySelector(".navbar");
    const mainContent = document.querySelector(".content");

    if (navbar && mainContent) {
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
        mainContent.style.marginTop = "0px";
      }
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 1500,
    once: true,
  });
});
