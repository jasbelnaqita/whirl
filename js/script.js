const burger = document.getElementById('burgerNav') 
const navBar = document.querySelector('.header__nav')




burger.addEventListener('click', () => {
    navBar.classList.toggle('active') 
})
