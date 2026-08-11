/*¨Navbar */
const navbar = document.getElementById("navbar");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});



/* Menu */

const menuButton =
    document.getElementById("menu-button");

const navMenu =
    document.querySelector(".nav-menu");


menuButton.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


/* Cerrar menú al tocar un link */

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});



/* Botones del producto */

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



/* Animación del scrolleo */

const elements =
    document.querySelectorAll(
        ".product-card, .process-item, .history-content"
    );


const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.animation =
                    "fadeUp 0.8s ease forwards";

            }

        });

    },

    {
        threshold: 0.15
    }

);


elements.forEach(element => {

    element.style.opacity = "0";

    observer.observe(element);

});