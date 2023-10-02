const curseSlider = new Swiper('.curse__swiper', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 80,
    speed: 800,
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
    },
})

const aboutUsSlider = new Swiper('.about-us__swiper', {
    loop: true,
    slidesPerView: 1,
    dynamicBullets: true,
    spaceBetween: 30,

    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

    navigation: {
        nextEl: '.about-us-btn-prev',
        prevEl: '.about-us-btn-next',
    },
})

function initSwiper(containerSelector, swiperParams) {
    return new Swiper(containerSelector, swiperParams);
}

let swiperParams = {
    loop: true,
    slidesPerView: 1,
    dynamicBullets: true,
    spaceBetween: 30,

    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

    navigation: {
        nextEl: '.gallery__swiper-button-prev',
        prevEl: '.gallery__swiper-button-next',
    },
};

let gallerySlider1 = initSwiper('.gallery__swiper', swiperParams);
let gallerySlider2 = initSwiper('.gallery__swiper2', swiperParams);
let gallerySlider3 = initSwiper('.gallery__swiper3', swiperParams);





