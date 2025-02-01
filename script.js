let menuIcon= document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = ()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = decument.querySelectorAll('section');
let navLinks = decument.querySelectorAll('header nav a');

window.onscroll= ()=>{
    sections.array.forEach(sec => {
        let top=window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top>= offset && top < offset + height){
        navLinks.forEach(links=>{
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' +id +']').classList
        });
        };
    });
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.sceollY>100);


    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');


};

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .box-container, .portfolio-box, .contact form', { origin: 'bottom' });



const typed = new Typed('.multiple-text',{
    strings:['informaticien en developpement web et mobiles'],
    typeSpeed: 100,
    backSpeed:100,
    backDelay: 1000,
    loop: true
});
