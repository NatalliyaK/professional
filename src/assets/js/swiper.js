const curseSlider = new Swiper('.curse__swiper', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 80,
    speed: 800,

    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1.5,
            spaceBetween: 20,
        },
        // when window width is >= 480px
        600: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        // when window width is >= 640px
        1024: {
            slidesPerView: 3,
        }
    },

    navigation: {
        nextEl: '.btn-prev',
        prevEl: '.btn-next',
    },
})

const projectSlider = new Swiper('.project__swiper', {
    loop: true,
    slidesPerView: 1,
    dynamicBullets: true,
    spaceBetween: 30,
    speed: 500,

    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

    navigation: {
        nextEl: '.project-btn-prev',
        prevEl: '.project-btn-next',
    }
})

const aboutUsSlider = new Swiper('.about-us__swiper', {
    loop: true,
    slidesPerView: 1,
    dynamicBullets: true,
    spaceBetween: 30,

    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 40,
        },
        // when window width is >= 480px
        600: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        // when window width is >= 640px
        1024: {
            slidesPerView: 1,
        }
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

    navigation: {
        nextEl: '.about-us-btn-prev',
        prevEl: '.about-us-btn-next',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
})

function initSwiper(containerSelector) {
    return new Swiper(containerSelector, {
        loop: true,
            slidesPerView: 1,
            dynamicBullets: true,
            spaceBetween: 30,

            pagination: {
            el: '.swiper-pagination',
                clickable: true
            },

        navigation: {
            nextEl: `${containerSelector}-button-prev`,

            prevEl: `${containerSelector}-button-next`,
        },
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
    });

}



let gallerySlider1 = initSwiper('.gallery__swiper' );
let gallerySlider2 = initSwiper('.gallery__swiper2');
let gallerySlider3 = initSwiper('.gallery__swiper3' );





