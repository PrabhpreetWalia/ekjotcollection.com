const dropdown = document.querySelectorAll('.dropdown--heading')
const dropdownDescription = document.querySelectorAll('.dropdown--description')
const dropdownArrow = document.querySelectorAll('.dropdown-arrow')




dropdown.forEach((element, index)=>{
    element.addEventListener('click',()=>{
    dropdownDescription[index].classList.toggle('dropdown--hide');
    dropdownArrow[index].classList.toggle('rotate-180');
    } )
})

const frame = document.querySelector('#TL')

console.log(frame.getTotalLength());