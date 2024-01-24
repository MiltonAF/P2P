/*let slider = document.querySelector(".slider-contenedor")
let sliderIndividual = document.querySelectorAll(".contenido-slider")
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 5000;

window.addEventListener("resize", function(){
    width = sliderIndividual[0].clientWidth;
})

setInterval(function(){
    slides();
},intervalo);



function slides(){
    slider.style.transform = "translate("+(-width*contador)+"px)";
    slider.style.transition = "transform .8s";
    contador++;

    if(contador == sliderIndividual.length){
        setTimeout(function(){
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform 0s";
            contador=1;
        },1500)
    }
}*/

document.addEventListener('DOMContentLoaded', function () {
    const sliderContenedor = document.querySelector('.slider-contenedor');
    let slideIndex = 0;

    function mostrarSlide(index) {
        const cantidadSlides = document.querySelectorAll('.contenido-slider').length;
        if (index >= cantidadSlides) {
            slideIndex = 0;
        } else if (index < 0) {
            slideIndex = cantidadSlides - 1;
        }
        const translationValue = -slideIndex * 100;
        sliderContenedor.style.transform = `translateX(${translationValue}%)`;
    }

    function nextSlide() {
        slideIndex++;
        mostrarSlide(slideIndex);
    }

    function prevSlide() {
        slideIndex--;
        mostrarSlide(slideIndex);
    }

    // Agregar eventos a los botones de siguiente y anterior
    document.querySelector('.slider-controls button:nth-child(1)').addEventListener('click', prevSlide);
    document.querySelector('.slider-controls button:nth-child(2)').addEventListener('click', nextSlide);

    // Mostrar el primer slide al cargar la página
    mostrarSlide(slideIndex);
});
