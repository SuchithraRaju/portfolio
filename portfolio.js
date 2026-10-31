// ================= MENU =================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function () {

    navMenu.classList.toggle("open");

});


// Close mobile menu after clicking a link

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("open");

    });

});


// ================= ACTIVE NAVIGATION =================

const sections = document.querySelectorAll("main section");


function updateActiveNavigation() {

    let currentSection = "home";

    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 130;

        if (window.scrollY >= sectionTop) {

            currentSection = section.id;

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);

updateActiveNavigation();


// ================= FOOTER YEAR =================

document.getElementById("year").textContent =
    new Date().getFullYear();