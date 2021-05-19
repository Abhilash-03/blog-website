burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav= document.querySelector('.rightNav')

burger.addEventListener('click', ()=>{
    rightNav.classList.toggle('v-class-responsive')
    navList.classList.toggle('v-class-responsive')
    navbar.classList.toggle('h-nav-responsive')

})