const navbarEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const body = document.querySelector("body")

navbarEmail.addEventListener("click", () => desktopMenu.classList.toggle("inactive"))

const menu = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")

menu.addEventListener("click", () => mobileMenu.classList.toggle("inactive"))

console.log(mobileMenu)

