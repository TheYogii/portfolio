document.addEventListener("DOMContentLoaded", function () {

    /* =====================================
       ELEMENTS
    ===================================== */

    const header = document.getElementById("header");
    const menuToggle = document.getElementById("menuToggle");
    const nav = document.getElementById("nav");
    const navLinks = document.querySelectorAll(".nav-link");
    const backToTop = document.getElementById("backToTop");
    const year = document.getElementById("year");


    /* =====================================
       CURRENT YEAR
    ===================================== */

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    /* =====================================
       MOBILE MENU
    ===================================== */

    if (menuToggle) {

        menuToggle.addEventListener("click", function () {

            const isOpen = nav.classList.toggle("open");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen
            );

        });

    }


    /* =====================================
       CLOSE MOBILE MENU
    ===================================== */

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            nav.classList.remove("open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });


    /* =====================================
       HEADER ON SCROLL
    ===================================== */

    function handleScroll() {

        if (window.scrollY > 40) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }


        /* Back to top */

        if (window.scrollY > 600) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    }

    window.addEventListener("scroll", handleScroll);

    handleScroll();


    /* =====================================
       BACK TO TOP
    ===================================== */

    if (backToTop) {

        backToTop.addEventListener("click", function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /* =====================================
       ACTIVE NAVIGATION
    ===================================== */

    const sections = document.querySelectorAll(
        "main section[id]"
    );


    function updateActiveNav() {

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop =
                section.offsetTop - 150;

            const sectionHeight =
                section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {

                currentSection = section.getAttribute("id");

            }

        });


        navLinks.forEach(function (link) {

            link.classList.remove("active");

            const href =
                link.getAttribute("href");

            if (href === "#" + currentSection) {

                link.classList.add("active");

            }

        });

    }

    window.addEventListener(
        "scroll",
        updateActiveNav
    );

    updateActiveNav();


    /* =====================================
       REVEAL ANIMATION
    ===================================== */

    const revealElements = document.querySelectorAll(
        ".service-card, .project-card, .timeline-item, .about-content, .about-image"
    );


    revealElements.forEach(function (element) {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(25px)";

        element.style.transition =
            "opacity 0.7s ease, transform 0.7s ease";

    });


    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach(function (element) {

        observer.observe(element);

    });

});