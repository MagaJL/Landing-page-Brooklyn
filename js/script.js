// Navbar

const navbar = document.getElementById("navbar");

// Detecta cuando el usuario hace scroll en la página
window.addEventListener("scroll", () => {
// Si el usuario bajó más de 50 píxeles...
    if (window.scrollY > 50) {
        // agrega la clase "scrolled" a la navbar
        navbar.classList.add("scrolled");
    } else {
        // Si vuelve arriba, sacamos la clase
        navbar.classList.remove("scrolled");
    }

});


// Menú

const menuButton =
    document.getElementById("menu-button");

const navMenu =
    document.querySelector(".nav-menu");

menuButton.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


// Cerrar menú

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


// Botones

// Selecciona todos los botones de compra
const buyButtons =
    document.querySelectorAll(".buy-button");

// Recorre todos los botones
buyButtons.forEach(button => {
    // Detecta cuando se hace clic en un botón
    button.addEventListener("click", () => {

        // Cambia temporalmente el símbolo "+" por un ✓ para indicar que se seleccionó
        button.textContent = "✓";
        // Cambia el color del botón
        button.style.background = "#BD7028";

        // Después de 1,5 segundos vuelve al estado original
        setTimeout(() => {

            button.textContent = "+";
            button.style.background = "";

        }, 1500);

    });

});

// Formulario de pedido

const orderButton =
    document.getElementById("order-button");

const orderModal =
    document.getElementById("order-modal");

const closeOrder =
    document.getElementById("close-order");

const orderForm =
    document.getElementById("order-form");


// Abrir formulario

orderButton.addEventListener("click", () => {

    orderModal.classList.add("active");

});


// Cerrar formulario

closeOrder.addEventListener("click", () => {

    orderModal.classList.remove("active");

});


// Cerrar al hacer click fuera del formulario

orderModal.addEventListener("click", (event) => {

    if (event.target === orderModal) {

        orderModal.classList.remove("active");

    }

});


// Enviar pedido

orderForm.addEventListener("submit", (event) => {

    event.preventDefault();

    alert("¡Gracias por tu pedido! Brooklyn se pondrá en contacto con vos.");

    orderForm.reset();

    orderModal.classList.remove("active");

});

// Deslizar los productos (brookies)
const cards = document.querySelectorAll(".product-card");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let current = 0;


function updateCarousel() {

    cards.forEach(card => {
        card.classList.remove("active");
    });

    cards[current].classList.add("active");

}


// Siguiente

next.addEventListener("click", () => {

    current++;

    if (current >= cards.length) {
        current = 0;
    }

    updateCarousel();

});


// Anterior

prev.addEventListener("click", () => {

    current--;

    if (current < 0) {
        current = cards.length - 1;
    }

    updateCarousel();

});