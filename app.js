const navbarEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const menu = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")
const carritoIcon = document.querySelector(".navbar-shopping-cart")
const  asideCarrito= document.querySelector(".product-detail")

navbarEmail.addEventListener("click", () => {
    desktopMenu.classList.toggle("inactive")
    if (!asideCarrito.classList.contains("inactive")) asideCarrito.classList.add("inactive")

})

menu.addEventListener("click", () => {
    mobileMenu.classList.toggle("inactive")
    asideCarrito.classList.add("inactive")

})

carritoIcon.addEventListener("click", () => {
    asideCarrito.classList.toggle("inactive")
    mobileMenu.classList.add("inactive")
    desktopMenu.classList.add("inactive")
})

