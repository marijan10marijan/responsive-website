const hamburgerMenu = document.querySelector('.hamburger')
const navList = document.querySelector('.nav__list')
const header = document.querySelector('.header')
const links = document.querySelectorAll('.nav__link')

const showMenu = ()=>{
    hamburgerMenu.classList.toggle('active')
    navList.classList.toggle('active')
    header.classList.toggle('active')
}

links.forEach(link => {
    link.addEventListener('click', showMenu)
})


hamburgerMenu.addEventListener('click', showMenu)



const servicesTitles = document.querySelectorAll('.services__data-title')
const allContent = document.querySelectorAll('.services__data-content')
const index = servicesTitles.length

const showContent = (e)=>{
    for(let i=0; i < index; i++){
        if(e.target.textContent === allContent[i].dataset.visibility){
            allContent.forEach(content => {
                content.classList.remove('active')
            }
        ),
        servicesTitles.forEach(servicesTitle => {
            servicesTitle.classList.remove('active')
        }
        )
            allContent[i].classList.toggle('active')
            e.target.classList.add('active')
        }
    }   
}

servicesTitles.forEach(servicesTitle => {
    servicesTitle.addEventListener('click',showContent)
})