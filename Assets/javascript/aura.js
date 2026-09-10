document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       MENÚ MOBILE
    ========================= */

    const menuButton =
        document.getElementById("menuButton");

    const mobileMenu =
        document.getElementById("mobileMenu");


    if (menuButton && mobileMenu) {

        menuButton.addEventListener("click", () => {

            mobileMenu.classList.toggle("open");

            menuButton.classList.toggle("open");

        });


        mobileMenu
            .querySelectorAll("a")
            .forEach(link => {

                link.addEventListener("click", () => {

                    mobileMenu.classList.remove("open");

                    menuButton.classList.remove("open");

                });

            });

    }


    /* =========================
       CARRUSEL
    ========================= */

    const slides =
        document.querySelectorAll(
            ".carousel-slide"
        );

    const nextButton =
        document.getElementById("nextSlide");

    const prevButton =
        document.getElementById("prevSlide");

    const progress =
        document.querySelector(
            ".progress-active"
        );

    const counter =
        document.querySelector(
            ".visual-count"
        );


    let currentSlide = 0;


    function showSlide(index) {

        if (!slides.length) {
            return;
        }


        if (index >= slides.length) {
            currentSlide = 0;
        }

        else if (index < 0) {
            currentSlide =
                slides.length - 1;
        }

        else {
            currentSlide = index;
        }


        slides.forEach((slide, i) => {

            slide.classList.toggle(
                "active",
                i === currentSlide
            );

        });


        if (progress) {

            progress.style.width =
                `${((currentSlide + 1) / slides.length) * 100}%`;

        }


        if (counter) {

            counter.textContent =
                `0${currentSlide + 1} — 0${slides.length}`;

        }

    }


    nextButton?.addEventListener(
        "click",
        () => {

            showSlide(
                currentSlide + 1
            );

        }
    );


    prevButton?.addEventListener(
        "click",
        () => {

            showSlide(
                currentSlide - 1
            );

        }
    );


    /* CAMBIO AUTOMÁTICO */

    let autoplay =
        setInterval(() => {

            showSlide(
                currentSlide + 1
            );

        }, 6000);


    const carousel =
        document.querySelector(
            ".aura-carousel"
        );


    if (carousel) {

        carousel.addEventListener(
            "mouseenter",
            () => clearInterval(autoplay)
        );


        carousel.addEventListener(
            "mouseleave",
            () => {

                autoplay =
                    setInterval(() => {

                        showSlide(
                            currentSlide + 1
                        );

                    }, 6000);

            }
        );

    }


    /* =========================
       REVEAL AL SCROLL
    ========================= */

    const revealElements =
        document.querySelectorAll(
            ".statement-copy, .editorial-copy, .editorial-image, .visual-header, .aura-carousel, .collection-header, .perfume-feature, .experience-copy, .experience-image, .cta-inner"
        );


    if (
        "IntersectionObserver" in window &&
        revealElements.length
    ) {

        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.style.opacity =
                                "1";

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


        revealElements.forEach(element => {

            element.style.opacity = "0";

            element.style.transform =
                "translateY(28px)";

            element.style.transition =
                "opacity .8s ease, transform .8s ease";

            observer.observe(element);

        });

    }


    /* =========================
       INICIO DEL CARRUSEL
    ========================= */

    showSlide(0);

});
