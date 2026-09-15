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

/* Lluvia de chips de chocolate */

// Contenedor donde se van a crear los chips
const chocolateRain =
    document.querySelector(".chocolate-rain");

// Crea un chip de chocolate
function createChocolate() {

    const chocolate =
        document.createElement("span");

    chocolate.classList.add("chocolate-chip");

    // Posición horizontal aleatoria
    chocolate.style.left =
        Math.random() * 100 + "%";

    // Elegimos un tamaño aleatorio
    const size = 8 + Math.random() * 12;
    
    chip.style.width = size + "px";
    chip.style.height = size * 0.7 + "px";
    
    // Cada chip tiene una forma ligeramente diferente
    const rotation = Math.random() * 360;
    
    chip.style.transform =
    `rotate(${rotation}deg)`;

    const chocolateColors = [
        "#4B291D",
        "#5A3020",
        "#713501"
    ];
    
    chip.style.background =
        chocolateColors[
            Math.floor(Math.random() * chocolateColors.length)
        ];
    // Velocidad aleatoria
    chocolate.style.animationDuration =
        2 + Math.random() * 3 + "s";

    chocolateRain.appendChild(chocolate);

    // Elimina el chip después de caer para no acumular elementos en la página
    setTimeout(() => {

        chocolate.remove();

    }, 5000);
}


/* Crea chocolate cuando el usuario hace scroll */

let lastScroll = 0;

window.addEventListener("scroll", () => {

    const currentScroll = window.scrollY;

    // Solo crea chips cuando realmente hubo movimiento de scroll
    if (currentScroll !== lastScroll) {

        createChocolate();

        // Si el usuario scrollea rápido, aparecen algunos chips adicionales
        if (Math.abs(currentScroll - lastScroll) > 20) {
            createChocolate();
        }

    }

    lastScroll = currentScroll;

});