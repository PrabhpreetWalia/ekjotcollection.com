const menu = document.querySelector('.navbar--button');
const rightSide = document.querySelector('.navbar .right-side')
const nav = document.querySelector('.navbar');


menu.addEventListener('click', ()=>{
    if (menu.classList.contains('close')){
        menu.classList.remove('close');
        menu.classList.add('open');
        rightSide.classList.remove('display-flex');
        nav.classList.remove('shadow-none')

    } else {
        menu.classList.remove('open');
        menu.classList.add('close');
        rightSide.classList.add('display-flex');
        nav.classList.add('shadow-none')
    }
});