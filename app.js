const navEmail = document.querySelector(".navbar-email")
const menuMobileIcon = document.querySelector(".menu")
const desktopMenu = document.querySelector(".desktop-menu")
const mobileMenu = document.querySelector(".mobile-menu")
const cartIcon = document.querySelector(".navbar-shopping-cart")
const productDetailCloseIcon = document.querySelector(".product-detail-close")
const cartAsideContainer = document.querySelector("#carritoContainer")
const productDetailAside = document.querySelector("#productosDetalles")
const cardsContainer = document.querySelector(".cards-container")
const orderContentContainer = document.querySelector(".my-order-content")
const checkoutButton = document.querySelector(".primary-button") // layout comprar, despues lo hago
const addToCartButton = document.querySelector(".add-to-cart-button") 
const backArrowIcon = document.querySelector(".title-container > img")
const body = document.querySelector("body")
const productCounterIcon = document.querySelector(".navbar-shopping-cart > div")
const shoppingCart = document.querySelector(".shopping-cart")
const ShoppingCartClose = document.getElementsByTagName("i")
let ShoppingCartCloseNode = document.querySelector("i")
const orderContentTotalPrice = document.querySelector(".order > p:last-child")

const noProductsInCartContainer = document.querySelector(".no-products")
const buttonContinueShopping = document.querySelector(".continue-shopping")
const shoppingCartContainerChildren = document.querySelector(".shopping-cart-container")
const mobileBlackBackground = document.querySelector(".mobile-black-background")


navEmail.addEventListener("click", toggleDesktopMenu)
menuMobileIcon.addEventListener("click", toggleMobileMenu)
mobileBlackBackground.addEventListener("click", toggleMobileMenu)
cartIcon.addEventListener("click", toggleCartAside)
productDetailCloseIcon.addEventListener("click", closeProductDetailAside)
backArrowIcon.addEventListener("click", closeCartAsideContainer)
buttonContinueShopping.addEventListener("click", closeCartAsideContainer)
addToCartButton.addEventListener("click", addToCartFromProductDetail) 
orderContentContainer.addEventListener("click", removeProductFromCart)


function toggleDesktopMenu () {
    desktopMenu.classList.toggle("scrolling-animation")
    if (productDetailAside.classList.contains("scrolling-animation")) productDetailAside.classList.remove("scrolling-animation")

}

function toggleMobileMenu () {
    mobileMenu.classList.toggle("scrolling-animation")
    mobileBlackBackground.classList.toggle("scrolling-animation")

    if (cartAsideContainer.classList.contains("scrolling-animation")) {
        cartAsideContainer.classList.remove("scrolling-animation")
        body.classList.add("overflow")
    } else if (!productDetailAside.classList.contains("scrolling-animation")) body.classList.toggle("overflow")

    
    if (productDetailAside.classList.contains("scrolling-animation")) {
        productDetailAside.classList.remove("scrolling-animation")
        body.classList.add("overflow")
    }
}

function toggleCartAside () {
    cartAsideContainer.classList.toggle("scrolling-animation")
    if (desktopMenu.classList.contains("scrolling-animation")) desktopMenu.classList.remove("scrolling-animation")


    if (mobileMenu.classList.contains("scrolling-animation")) {
        mobileMenu.classList.remove("scrolling-animation")
        mobileBlackBackground.classList.remove("scrolling-animation")

        body.classList.add("overflow")
    } else if (!productDetailAside.classList.contains("scrolling-animation")) body.classList.toggle("overflow")

    if (productDetailAside.classList.contains("scrolling-animation")) {
        productDetailAside.classList.remove("scrolling-animation")
        body.classList.add("overflow")
    }
}

function openProductDetailAside () {
    productDetailAside.classList.add("scrolling-animation")

    if (cartAsideContainer.classList.contains("scrolling-animation")) cartAsideContainer.classList.remove("scrolling-animation")
    if (mobileMenu.classList.contains("scrolling-animation")) mobileMenu.classList.remove("scrolling-animation")
    if (desktopMenu.classList.contains("scrolling-animation")) desktopMenu.classList.remove("scrolling-animation")

    body.classList.add("overflow")
}

function closeProductDetailAside () {
    productDetailAside.classList.remove("scrolling-animation")
    body.classList.remove("overflow")
}

function closeCartAsideContainer () {
    cartAsideContainer.classList.remove("scrolling-animation")
    body.classList.remove("overflow")

    if (desktopMenu.classList.contains("scrolling-animation")) desktopMenu.classList.remove("scrolling-animation")
}


// 
function productRendersCart (num) {
    noProductsInCartContainer.classList.add("inactive")

    shoppingCart.remove()
    orderContentContainer.classList.remove("inactive")
    productCounterIcon.classList.remove("inactive")

    if (!orderContentContainer.classList.contains("inactive")) {
        const copia = shoppingCart.cloneNode(true)
        copia.children[0].children[0].src = listaProductos[num].image
        copia.children[1].textContent = listaProductos[num].name

        copia.children[2].textContent = `$${listaProductos[num].price}`
        shoppingCartContainerChildren.prepend(copia)
        productCounterIcon.textContent++

        addPrice(num)

        arrayIcon.push(ShoppingCartClose[0])
    }
}

function calcular (index) {
    if (ShoppingCartClose.length < arrayIcon.length) {
        productCounterIcon.textContent--
        arrayIcon.pop()
    }  
    if (productCounterIcon.textContent == 0) {
        productCounterIcon.textContent = ""
        orderContentContainer.classList.add("inactive")
        productCounterIcon.classList.add("inactive")
    }
}

function addToCartFromProductDetail () {
    console.log(indiceProducDetail)
    productRendersCart(indiceProducDetail[0])
    // indiceProducDetail.pop()
}

function addPrice (precio) {
    addTotalPrice += listaProductos[precio].price
    orderContentTotalPrice.textContent = `$${addTotalPrice}`
}

function subtractPrice (precio) {
    addTotalPrice -= precio
    orderContentTotalPrice.textContent = `$${addTotalPrice}`

    if (orderContentTotalPrice.textContent === "$0") noProductsInCartContainer.classList.remove("inactive")

}

function removeProductFromCart (e) {
    if (e.target && e.target.tagName === "I") {
        let numero = e.target.parentElement.children[2].textContent
        let precioRestar = Number(numero.slice(1, numero.length))
        subtractPrice(precioRestar)
        e.target.parentElement.remove()
        calcular()
    }
}



const listaProductos = [];
listaProductos.push({
    name: "Diego",
    price: 120,
    image: "https://static01.nyt.com/images/2020/11/03/obituaries/25maradona-ES-1/00Maradona-mediumSquareAt3X.jpg",
    imageCloseIcon: "./icons/icon_close.png",
    close: "fa-solid fa-xmark"
})
listaProductos.push({
    name: "La Bombonera de Noche",
    price: 400,
    image: "https://i.imgur.com/HA2Bu.jpg",
    imageCloseIcon: "./icons/icon_close.png",
    close: "fa-solid fa-xmark"
})
listaProductos.push({
    name: "Riquelme",
    price: 700,
    image: "https://wallpaperaccess.com/full/2760068.jpg",
    imageCloseIcon: "./icons/icon_close.png",
    close: "fa-solid fa-xmark"
})
listaProductos.push({
    name: "Maradona",
    price: 120,
    image: "https://i.pinimg.com/originals/d3/f7/8b/d3f78b9a5c73ebaa5159c33c5e58b3c5.jpg",
    imageCloseIcon: "./icons/icon_close.png",
    close: "fa-solid fa-xmark"
})
listaProductos.push({
    name: "Messi Argentina",
    price: 400,
    image: "https://wallpapercave.com/wp/wp3107785.jpg",
    imageCloseIcon: "./icons/icon_close.png",
    close: "fa-solid fa-xmark"
})
listaProductos.push({
    name: "Messi barcelona",
    price: 700,
    image: "https://wallup.net/wp-content/uploads/2019/09/633066-leo-messi-hombre-futbolista-f-c-barcelona-argentina-748x496.jpg",
    imageCloseIcon: "./icons/icon_close.png",
    close: "fa-solid fa-xmark"
})
listaProductos.push({
    name: "Argentina",
    price: 120,
    image: "https://w0.peakpx.com/wallpaper/195/560/HD-wallpaper-argentina-campeon-copa-america-messi.jpg",
    imageCloseIcon: "./icons/icon_close.png",
    close: "fa-solid fa-xmark"
})
listaProductos.push({
    name: "Tevez",
    price: 400,
    image: "https://github.com/zrCristian/prueba/blob/main/fotos/tevez.jpg?raw=true",
    imageCloseIcon: "./icons/icon_close.png",
    close: "fa-solid fa-xmark"
})
listaProductos.push({
    name: "Messi y Maradona",
    price: 700,
    image: "https://resize.indiatvnews.com/en/resize/newbucket/730_-/2020/11/lionel-messi-diego-maradona-1604507732.jpg",
    imageCloseIcon: "./icons/icon_close.png",
    close: "fa-solid fa-xmark"
})
listaProductos.push({
    name: "La Bombonera",
    price: 700,
    image: "https://media.tycsports.com/files/2020/01/26/85005/bombonera.jpg",
    imageCloseIcon: "./icons/icon_close.png",
    close: "fa-solid fa-xmark"
})

// 
// 

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
    


// product Detail
const productDetailIMG = document.querySelector("#productosDetalles > img")
const productDetailInfo =  document.querySelectorAll("#productosDetalles > .product-info > p")

const productImg = document.querySelectorAll(".product-card > img") 
let indiceProducDetail = []


productImg.forEach( (productos, indice) => {
    productos.addEventListener("click", () => {
        productDetailIMG.src = listaProductos[indice].image
        productDetailInfo[0].textContent = `$${listaProductos[indice].price}`
        productDetailInfo[1].textContent = listaProductos[indice].name

        openProductDetailAside()

        indiceProducDetail.push(indice)
        if (indiceProducDetail.length >= 2) {
            indiceProducDetail.pop()
            indiceProducDetail.pop()
            indiceProducDetail.push(indice)
        }
        console.log(indiceProducDetail)
    })
})

const addToCart = document.querySelectorAll(".product-info figure > img")
let arrayIcon = [] 
let addTotalPrice = 0;

addToCart.forEach ( (e, index) => {
    e.addEventListener("click", () => productRendersCart(index))
})
