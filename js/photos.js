var slideIndex = 1;
showSlides(slideIndex, true);

function plusSlides(n, auto) {
    showSlides(slideIndex += n, auto);
}

function currentSlide(n, autoplay) {
    showSlides(slideIndex = n, autoplay);
}
 
function showSlides(n, autoplay) {
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
