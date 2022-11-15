const navbarEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const menu = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")
const carritoIcon = document.querySelector(".navbar-shopping-cart")
const  asideCarrito = document.querySelector(".carritoContainer")
const cardsContainer = document.querySelector(".cards-container")

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



const listaProductos = [];
listaProductos.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})

listaProductos.push({
    name: "celular",
    price: 400,
    image: "https://i.imgur.com/HA2Bu.jpg",

})

listaProductos.push({
    name: "computadora",
    price: 700,
    image: "https://w0.peakpx.com/wallpaper/205/620/HD-wallpaper-messi-cute-messi-cute-argentina-messi-2021-messi-argentina-messi-2018-messi-argentina.jpg"
})
listaProductos.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})

listaProductos.push({
    name: "celular",
    price: 400,
    image: "https://i.imgur.com/HA2Bu.jpg",

})

listaProductos.push({
    name: "computadora",
    price: 700,
    image: "https://w0.peakpx.com/wallpaper/205/620/HD-wallpaper-messi-cute-messi-cute-argentina-messi-2021-messi-argentina-messi-2018-messi-argentina.jpg"
})
listaProductos.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})

listaProductos.push({
    name: "celular",
    price: 400,
    image: "https://i.imgur.com/HA2Bu.jpg",

})

listaProductos.push({
    name: "computadora",
    price: 700,
    image: "https://w0.peakpx.com/wallpaper/205/620/HD-wallpaper-messi-cute-messi-cute-argentina-messi-2021-messi-argentina-messi-2018-messi-argentina.jpg"
})






// for (producto of listaProductos) {

//     const productCard = document.createElement("div");
//     productCard.classList.add("product-card");

//     const img = document.createElement("img");
//     img.src = producto.image

//     const productInfo = document.createElement("div");
//     productInfo.classList.add("product-info");


//     const div = document.createElement("div");
//     const precioProducto = document.createElement("p");
//     precioProducto.innerText = `$${producto.price}`
//     const nombreProducto = document.createElement("p");
//     nombreProducto.innerText = producto.name

//     div.appendChild(precioProducto)
//     div.appendChild(nombreProducto)



//     const figure = document.createElement("figure");
//     const imgIconoCarrito = document.createElement("img");
//     imgIconoCarrito.setAttribute("src", "./icons/bt_add_to_cart.svg")

//     figure.appendChild(imgIconoCarrito)

//     productInfo.appendChild(div)
//     productInfo.appendChild(figure)

//     productCard.appendChild(img)
//     productCard.appendChild(productInfo)


//     cardsContainer.appendChild(productCard)
// }

listaProductos.forEach((e) => {
    const divProductCard = document.createRange().createContextualFragment(`
    <div class="product-card">
    <img src=${e.image} alt="">
        <div class="product-info">
            <div>
                <p>$${e.price}</p>
                <p>${e.name}</p>
            </div>
            <figure>
                <img src="./icons/bt_add_to_cart.svg" alt="">
            </figure>
        </div>
    </div> 
    `);

    cardsContainer.appendChild(divProductCard)
})