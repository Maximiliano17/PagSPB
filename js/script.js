let slideIndex = 0;
showSlides(slideIndex);

function moveSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    if (n >= slides.length) { slideIndex = 0 }
    if (n < 0) { slideIndex = slides.length - 1 }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

// Automáticamente mover las diapositivas
function autoMoveSlides() {
    moveSlide(1);
    setTimeout(autoMoveSlides, 5000); // Cambia de diapositiva cada 5 segundos
}

autoMoveSlides();