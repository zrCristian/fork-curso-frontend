const navEmail = document.querySelector(".navbar-email")
const menuMobileIcon = document.querySelector(".menu")
const desktopMenu = document.querySelector(".desktop-menu")
const mobileMenu = document.querySelector(".mobile-menu")
const cartIcon = document.querySelector(".navbar-shopping-cart")
const productDetailCloseIcon = document.querySelector(".product-detail-close")
const cartAsideContainer = document.querySelector("#carritoContainer")
const productDetailAside = document.querySelector("#productosDetalles")
const cardsContainer = document.querySelector(".cards-container")


navEmail.addEventListener("click", toggleDesktopMenu)
menuMobileIcon.addEventListener("click", toggleMobileMenu)
cartIcon.addEventListener("click", toggleCartAside)
productDetailCloseIcon.addEventListener("click", closeProductDetailAside)


function toggleDesktopMenu () {
    desktopMenu.classList.toggle("inactive")
    if (!cartAsideContainer.classList.contains("inactive")) cartAsideContainer.classList.add("inactive")
    if (!productDetailAside.classList.contains("inactive")) productDetailAside.classList.add("inactive")

}

function toggleMobileMenu () {
    mobileMenu.classList.toggle("inactive")
    if (!cartAsideContainer.classList.contains("inactive")) cartAsideContainer.classList.add("inactive")
    if (!productDetailAside.classList.contains("inactive")) productDetailAside.classList.add("inactive")
}

function toggleCartAside () {
    cartAsideContainer.classList.toggle("inactive")
    if (!desktopMenu.classList.contains("inactive")) desktopMenu.classList.add("inactive")
    if (!mobileMenu.classList.contains("inactive")) mobileMenu.classList.add("inactive")
    if (!productDetailAside.classList.contains("inactive")) productDetailAside.classList.add("inactive")
}

function openProductDetailAside () {
    productDetailAside.classList.remove("inactive")
    if (!cartAsideContainer.classList.contains("inactive")) cartAsideContainer.classList.add("inactive")
    if (!mobileMenu.classList.contains("inactive")) mobileMenu.classList.add("inactive")
    if (!desktopMenu.classList.contains("inactive")) desktopMenu.classList.add("inactive")
}

function closeProductDetailAside () {
    productDetailAside.classList.add("inactive")
}


const listaProductos = [];
listaProductos.push({
    name: "Bike",
    price: 120,
    image: "https://static01.nyt.com/images/2020/11/03/obituaries/25maradona-ES-1/00Maradona-mediumSquareAt3X.jpg",
})
listaProductos.push({
    name: "celular",
    price: 400,
    image: "https://i.imgur.com/HA2Bu.jpg",

})
listaProductos.push({
    name: "computadora",
    price: 700,
    image: "https://wallpaperaccess.com/full/2760068.jpg"
})
listaProductos.push({
    name: "Bike",
    price: 120,
    image: "https://i.pinimg.com/originals/d3/f7/8b/d3f78b9a5c73ebaa5159c33c5e58b3c5.jpg",
})
listaProductos.push({
    name: "celular",
    price: 400,
    image: "https://wallpapercave.com/wp/wp3107785.jpg",

})
listaProductos.push({
    name: "computadora",
    price: 700,
    image: "https://wallup.net/wp-content/uploads/2019/09/633066-leo-messi-hombre-futbolista-f-c-barcelona-argentina-748x496.jpg"
})
listaProductos.push({
    name: "Bike",
    price: 120,
    image: "https://w0.peakpx.com/wallpaper/195/560/HD-wallpaper-argentina-campeon-copa-america-messi.jpg",
})
listaProductos.push({
    name: "celular",
    price: 400,
    image: "https://github.com/zrCristian/prueba/blob/main/fotos/tevez.jpg?raw=true",

})
listaProductos.push({
    name: "computadora",
    price: 700,
    image: "https://resize.indiatvnews.com/en/resize/newbucket/730_-/2020/11/lionel-messi-diego-maradona-1604507732.jpg"
})
listaProductos.push({
    name: "computadora",
    price: 700,
    image: "https://media.tycsports.com/files/2020/01/26/85005/bombonera.jpg"
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
    
const productDetailIMG = document.querySelector("#productosDetalles > img")
const productImg = document.querySelectorAll(".product-card > img") 

productImg.forEach( (productos, indice) => {
    productos.addEventListener("click", () => {
            productDetailIMG.src = listaProductos[indice].image
        })
    productos.addEventListener("click", openProductDetailAside)
})
