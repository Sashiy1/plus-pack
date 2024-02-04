const burgerButton = document.querySelector('.menu')
const burgerMenu = document.querySelector('.burger-menu')

burgerButton.addEventListener("click", handleClick)


function handleClick (event) {
    burgerMenu.classList.toggle('showMenu')
    
}