const navbarEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const body = document.querySelector("body")

navbarEmail.addEventListener("click", () => desktopMenu.classList.toggle("active"))

