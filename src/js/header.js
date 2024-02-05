const burgerButton = document.querySelector('.menu')
const burgerMenu = document.querySelector('.burger-menu')
const firstContainer = document.querySelector('.first-container')
burgerButton.addEventListener("click", handleClick)
console.log(firstContainer)

function handleClick (event) {
    burgerMenu.classList.toggle('showMenu')
    firstContainer.classList.toggle('moveContainer')
}