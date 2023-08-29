
// Initialize Swiper About
const reviewsSwiper = document.querySelector('.reviewsSwiper')
if (reviewsSwiper) {
    var swiper = new Swiper(".reviewsSwiper", {
        slidesPerView: 2,
        spaceBetween: 40,
        initialSlide: 0,
        navigation: {
          nextEl: ".reviews-button-next",
          prevEl: ".reviews-button-prev",
        },
        pagination: {
            el: ".reviews-pagination",
            clickable: true,
            dynamicBullets: true,
            dynamicMainBullets: 5,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            }
        }
    });
}


const certSwiper = document.querySelector('.certSwiper')
if (certSwiper) {
    var swiper = new Swiper(".certSwiper", {
        slidesPerView: 2,
        spaceBetween: 40,
        initialSlide: 0,
        navigation: {
          nextEl: ".cert-button-next",
          prevEl: ".cert-button-prev",
        },
        pagination: {
            el: ".cert-pagination",
            clickable: true,
            dynamicBullets: true,
            dynamicMainBullets: 5,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            }
        }
    });
}

// Hidden menu

const body = document.querySelector('body')
const hidden = document.querySelector('.hidden')
const burgerMenu = document.querySelector('.navbar_mobile_menu')
const burgerClose = document.querySelector('.hidden_close')
const hiddenMenuLink = document.querySelectorAll('.hidden_menu_link')

if (burgerMenu) {
    burgerMenu.addEventListener('click', function() {
        hidden.classList.add('show')
        body.classList.add('noscroll')
    })
    
    burgerClose.addEventListener('click', function() {
        hidden.classList.remove('show')
        body.classList.remove('noscroll')
    })

    hiddenMenuLink.forEach(link => {
        link.addEventListener('click', function() {
            hidden.classList.remove('show')
            body.classList.remove('noscroll')
        })
    })
}