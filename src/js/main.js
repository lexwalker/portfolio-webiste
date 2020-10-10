// Menu show
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId)
    nav = document.getElementById(navId)

    if(toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

// Active menu
const navLink = document.querySelectorAll('.nav__link')

// function linkAction() {
//     // active link
//     navLink.forEach(n => n.classList.remove('active'))
//     this.classList.add('active')

//     // remove menu mobile
//     const navMenu = document.getElementById('nav-menu')
//     navMenu.classList.remove('show')
// }

// navLink.forEach(n => n.addEventListener('click', linkAction))

// Scroll Reveal Animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

sr.reveal('.section-title', {delay: 200})

sr.reveal('.home__title',{})
sr.reveal('.button',{delay: 200})
sr.reveal('.home__img',{delay: 400})
sr.reveal('.home__social-icon',{interval: 200})

sr.reveal('.about__img',{})
sr.reveal('.about__subtitle',{delay: 200})
sr.reveal('.about__text',{delay: 400})

sr.reveal('.skills__subtitle',{})
sr.reveal('.skills__text',{delay:200})
sr.reveal('.skills__data',{interval:200})
sr.reveal('.skills__img',{delay:200})

sr.reveal('.work__item', {interval: 200})

sr.reveal('.contact__input', {interval: 200})

let typed = new Typed('.animatedText', {
    strings: ['Alexander', 'Developer', 'Freelancer'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
    startDelay: 100
});