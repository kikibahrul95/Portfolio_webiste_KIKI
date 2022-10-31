/*=============== SHOW MENU ===============*/
const navMenu= document.getElementById('nav-menu'),
      navToogle= document.getElementById('nav-toogle'),
      navClose= document.getElementById('nav-close')


if(navToogle){
    navToogle.addEventListener('click',() =>{
        navMenu.classList.add('show-menu')
    })
}
/*Menu Hideen  */
if(navClose){

    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')

    })
}
/*=============== remove menu mobile ===============*/
const navlink = document.querySelectorAll('nav__link')

const linkAction=()=>{
const navMenu= document.getElementById('nav-menu')

navMenu.classList.remove('show-menu')
}
 navlink.forEach(n=>n.addEventListener('click',linkAction))  
/*=============== SWIPER PROJECTS ===============*/
let swiperProjects = new Swiper(".projects__container", {
       loop:true,
       spaceBetween:24,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
        1200: {
          slidesPerView: 2,
          spaceBetween: -56,
        },
        
        
      },




    /*mousewheel: true,
    keyboard: true,*/
  });




/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
      const scrollY = window.pageYOffset

sections.forEach(current =>{
const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop -58,
      sectionId = current.getAttribute('id'),
      sectionsClass = document.querySelector('.nav__menu a[href*='+  sectionId  +']')


      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
        sectionsClass.classList.add('active-link')
      }else{
        sectionsClass.classList.remove('active-link')

      }

}

)


}

window.addEventListener('scroll', scrollActive) 




/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp=() =>{
const scrollUp =document.getElementById('scroll-up')

this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                     :scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)


/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darktheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme =localStorage.getItem('theme-button')
const selectedIcon =localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darktheme) ? 'dark' :'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' :'ri-sun-line'


if(selectedTheme)
document.body.classList.toggle[selectedTheme === 'dark' ? 'add' : 'remove'] (darktheme)
themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'] (iconTheme)


themeButton.addEventListener('click',() =>{
  document.body.classList.toggle(darktheme)
  themeButton.classList.toggle(iconTheme)
  localStorage.setItem('selected-Theme',getCurrentTheme())
  localStorage.setItem('selected-Icon', getCurrentIcon())
}

)

/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/

