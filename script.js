document.addEventListener("DOMContentLoaded", function () {

    const carousels = document.querySelectorAll(".carousel");

    carousels.forEach(function (carousel) {

        const slides = carousel.querySelectorAll(".carousel-item");

        const currentSlide =
            carousel.querySelector(".current-slide");

        const totalSlides =
            carousel.querySelector(".total-slides");


        // Cantidad total

        totalSlides.textContent =
            String(slides.length).padStart(2, "0");


        // Slide inicial

        currentSlide.textContent = "01";


        // Cuando cambia el slide

        carousel.addEventListener(
            "slid.bs.carousel",
            function (event) {

                const index = event.to + 1;

                currentSlide.textContent =
                    String(index).padStart(2, "0");

            }
        );

    });

});