// ========================================
// PORTAFOLIO - MAXIMILIANO OPAZO
// JavaScript principal
// ========================================


// ========================================
// MENÚ MÓVIL
// ========================================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        const isOpen = navLinks.classList.toggle("active");

        menuToggle.classList.toggle("active", isOpen);

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

    });


    const navigationItems =
        navLinks.querySelectorAll("a");

    navigationItems.forEach((link) => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menuToggle.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}


// ========================================
// HERO REACTIVO AL CURSOR
// ========================================

const heroVisual =
    document.getElementById("hero-visual");

const heroCore =
    document.querySelector(".hero-core");


if (heroVisual && heroCore) {

    heroVisual.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                heroVisual.getBoundingClientRect();

            const mouseX =
                event.clientX - rect.left;

            const mouseY =
                event.clientY - rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotationX =
                (mouseY - centerY) / 35;

            const rotationY =
                (centerX - mouseX) / 35;

            heroCore.style.transform =
                `rotateX(${rotationX}deg)
                 rotateY(${rotationY}deg)
                 translateZ(15px)`;

            heroVisual.style.transform =
                `translate(
                    ${rotationY * 0.15}px,
                    ${rotationX * 0.15}px
                )`;

        }
    );


    heroVisual.addEventListener(
        "mouseleave",
        () => {

            heroCore.style.transform =
                "rotateX(0deg) rotateY(0deg) translateZ(0)";

            heroVisual.style.transform =
                "translate(0, 0)";

        }
    );

}