// change navbar style on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 10);
})

const faqs = document.querySelectorAll('.faq')
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');
        // change icon
        const icon = faq.querySelector('.faq__icon i');
        if (icon.className === "uil uil-plus") {
            icon.className = "uil uil-minus";
        }else {
            icon.className ="uil uil-plus";
        }
    })
})
// active link

// active link

//  swiper js :
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints : {
        600: {
            slidesPerView: 3
        },
        900: {
            slidesPerView: 2
        },
        1200: {
            slidesPerView: 1
        }
    }
  }); 
//   
const menu = document.querySelector('.nav__menu');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})
// closeBtn.addEventListener('click', () => {
//     menu.style.display = "none";
//     closeBtn.style.display = "none";
//     menuBtn.style.display = "inline-block";
// })   
// another way to make function :-
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";   
}
closeBtn.addEventListener('click', closeNav)
