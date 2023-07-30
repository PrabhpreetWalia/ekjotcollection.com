const carouselContainer = document.querySelector('.carousel--slide-container')
const carouselImages = document.querySelectorAll('.carousel--slide-container img')
const buttons = document.querySelector('.carousel--button-container')
const nextButton = document.querySelector('.carousel--button-container .next')
const prevButton = document.querySelector('.carousel--button-container .prev')


const textCont1 = document.querySelector('.carousel--text-container-1')
const text11 = document.querySelector('.carousel--text-container-1 .text1')
const text12 = document.querySelector('.carousel--text-container-1 .text2')

const textCont2 = document.querySelector('.carousel--text-container-2')
const text21 = document.querySelector('.carousel--text-container-2 .text1')

const textCont3 = document.querySelector('.carousel--text-container-3')
const text31 = document.querySelector('.carousel--text-container-3 .text1')
const text32 = document.querySelector('.carousel--text-container-3 .text2')


let counter = 1;


carouselContainer.style.transform = "translateX(-" + screen.width + "px)";
text11.classList.add('carousel--text-anim-1')
text12.classList.add('carousel--text-anim-2')


function nextSlide(){
    textCont1.classList.remove('text-unhide')
    textCont1.classList.add('text-hide')
    textCont2.classList.remove('text-unhide')
    textCont2.classList.add('text-hide')
    textCont3.classList.remove('text-unhide')
    textCont3.classList.add('text-hide')


    if (counter > carouselImages.length-2) return
    carouselContainer.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselContainer.style.transform = "translateX(-" + screen.width*counter + "px)";
    clearInterval(timer)
    timer = window.setInterval(nextSlide, 5000)
}

function prevSlide(){
    textCont1.classList.remove('text-unhide')
    textCont1.classList.add('text-hide')
    textCont2.classList.remove('text-unhide')
    textCont2.classList.add('text-hide')
    textCont3.classList.remove('text-unhide')
    textCont3.classList.add('text-hide')



    if (counter < 1) return
    carouselContainer.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselContainer.style.transform = "translateX(-" + screen.width*counter + "px)";
    clearInterval(timer)
    timer = window.setInterval(nextSlide, 5000)
}



nextButton.addEventListener('click', nextSlide)

prevButton.addEventListener('click', prevSlide)

carouselContainer.addEventListener('transitionend', () =>{
    if (carouselImages[counter].id == "first-clone"){
        carouselContainer.style.transition = "none"
        counter = 1;
        carouselContainer.style.transform = 'translateX(' + (-screen.width * counter) + 'px)';
    }

    if (carouselImages[counter].id == "last-clone"){
        carouselContainer.style.transition = "none"
        counter = carouselImages.length - 2
        carouselContainer.style.transform = 'translateX(' + (-screen.width * counter) + 'px)';

    }



    if (counter == 1){
        textCont1.classList.remove('text-hide')
        textCont1.classList.add('text-unhide')
        text11.classList.add('carousel--text-anim-1')
        text12.classList.add('carousel--text-anim-2')
    }

    if (counter == 3){
        textCont2.classList.remove('text-hide')
        textCont2.classList.add('text-unhide')
        text21.classList.add('carousel--text-anim-3')
    }

    if (counter == 2){
        textCont3.classList.remove('text-hide')
        textCont3.classList.add('text-unhide')
        text31.classList.add('carousel--text-anim-5')
        text32.classList.add('carousel--text-anim-6')
    }

})

timer = window.setInterval(nextSlide, 5000)