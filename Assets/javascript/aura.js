document.addEventListener("DOMContentLoaded", () => {


/* =========================
   MENÚ MOBILE
========================= */

const menuButton =
document.getElementById("menuButton");

const mobileNav =
document.getElementById("mobileNav");


if(menuButton && mobileNav){

menuButton.addEventListener("click", () => {

mobileNav.classList.toggle("open");

menuButton.classList.toggle("open");

});


mobileNav
.querySelectorAll("a")
.forEach(link => {

link.addEventListener("click", () => {

mobileNav.classList.remove("open");

menuButton.classList.remove("open");

});

});

}



/* =========================
   CARRUSEL
========================= */

const slides =
document.querySelectorAll(
".campaign-slide"
);

const next =
document.getElementById("next");

const previous =
document.getElementById("previous");


let current = 0;


function showSlide(index){

if(!slides.length) return;


if(index >= slides.length){
current = 0;
}

else if(index < 0){
current = slides.length - 1;
}

else{
current = index;
}


slides.forEach((slide, i) => {

slide.classList.toggle(
"active",
i === current
);

});

}


next?.addEventListener(
"click",
() => {

showSlide(current + 1);

}
);


previous?.addEventListener(
"click",
() => {

showSlide(current - 1);

}
);


let autoplay =
setInterval(() => {

showSlide(current + 1);

}, 6000);


const slider =
document.querySelector(
".campaign-slider"
);


if(slider){

slider.addEventListener(
"mouseenter",
() => {

clearInterval(autoplay);

}
);


slider.addEventListener(
"mouseleave",
() => {

autoplay =
setInterval(() => {

showSlide(current + 1);

}, 6000);

}
);

}


showSlide(0);



/* =========================
   SCROLL REVEAL
========================= */

const elements =
document.querySelectorAll(
".intro-content, .editorial-photo, .editorial-message, .campaign-heading, .campaign-slider, .featured-product, .final-cta > div, .catalog-product, .contact-image, .contact-form-area"
);


if(
"IntersectionObserver" in window
){

const observer =
new IntersectionObserver(
(entries) => {

entries.forEach(entry => {

if(
entry.isIntersecting
){

entry.target.classList.add(
"visible"
);

observer.unobserve(
entry.target
);

}

});

},
{
threshold:.12
}
);


elements.forEach(element => {

element.classList.add(
"reveal"
);

observer.observe(element);

});

}

});
