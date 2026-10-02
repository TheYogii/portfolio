document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menuToggle");
    const nav = document.getElementById("nav");

    menuToggle.addEventListener("click", function () {

        nav.classList.toggle("active");

        const icon = menuToggle.querySelector("i");

        if (nav.classList.contains("active")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });


    // Close mobile menu after clicking a link

    const navLinks = nav.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            nav.classList.remove("active");

            const icon = menuToggle.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        });

    });


    // Current year

    document.getElementById("year").textContent =
        new Date().getFullYear();

});