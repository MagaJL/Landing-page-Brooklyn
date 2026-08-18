/* NAVBAR */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* MENU */

const menuButton =
    document.getElementById("menu-button");

const navMenu =
    document.querySelector(".nav-menu");

menuButton.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


/* CERRAR MENU */

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


/* BOTONES */

const buyButtons =
    document.querySelectorAll(".buy-button");

buyButtons.forEach(button => {

    button.addEventListener("click", () => {

        button.textContent = "✓";

        button.style.background = "#BD7028";

        setTimeout(() => {

            button.textContent = "+";
            button.style.background = "";

        }, 1500);

    });

});

/* Formulario de pedido */

const orderButton =
    document.getElementById("order-button");

const orderModal =
    document.getElementById("order-modal");

const closeOrder =
    document.getElementById("close-order");

const orderForm =
    document.getElementById("order-form");


/* Abrir formulario */

orderButton.addEventListener("click", () => {

    orderModal.classList.add("active");

});


/* Cerrar formulario */

closeOrder.addEventListener("click", () => {

    orderModal.classList.remove("active");

});


/* Cerrar al hacer click fuera del formulario */

orderModal.addEventListener("click", (event) => {

    if (event.target === orderModal) {

        orderModal.classList.remove("active");

    }

});


/* Enviar pedido */

orderForm.addEventListener("submit", (event) => {

    event.preventDefault();

    alert("¡Gracias por tu pedido! Brooklyn se pondrá en contacto con vos.");

    orderForm.reset();

    orderModal.classList.remove("active");

});