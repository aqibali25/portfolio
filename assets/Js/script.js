document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed");

  const savedTheme = localStorage.getItem("theme");

  const themeIcon = document.getElementById("theme-icon");
  const navLinks = document.querySelector(".navlinks");
  const logo = document.querySelector(".logo img");
  const body = document.body;

  console.log("Theme Icon:", themeIcon);
  console.log("Nav Links:", navLinks);
  console.log("Logo:", logo);
  console.log("Body:", body);

  if (savedTheme) {
    console.log("Saved Theme:", savedTheme);
    if (savedTheme === "dark") {
      applyDarkTheme();
    } else {
      applyLightTheme();
    }
  } else {
    const isSystemDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    console.log("System Dark Mode:", isSystemDark);
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
    console.log("Applied Dark Theme");
  }

  function applyLightTheme() {
    body.classList.remove("dark-theme");
    themeIcon.setAttribute("src", "assets/images/dark-mode.png");
    logo.setAttribute("src", "assets/images/logo-black.png");
    localStorage.setItem("theme", "light");
    console.log("Applied Light Theme");
  }

  themeIcon.addEventListener("click", function () {
    console.log("Theme Icon Clicked");
    if (body.classList.contains("dark-theme")) {
      applyLightTheme();
    } else {
      applyDarkTheme();
    }
  });

  const toggleMenu = document.getElementById("menu-toggle");
  console.log("Toggle Menu:", toggleMenu);
  if (toggleMenu) {
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
        console.log("Menu toggled");
      } else {
        console.error("Navbar or Main Content not found");
      }
    });
  } else {
    console.error("Toggle Menu button not found");
  }
});
