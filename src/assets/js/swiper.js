const curseSlider = new Swiper('.curse__swiper', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
        nextEl: '.btn-prev',
        prevEl: '.btn-next',
    },
})

const projectSlider = new Swiper('.project__swiper', {
    loop: true,
    slidesPerView: 1,
    navigation: {
        nextEl: '.project-btn-prev',
        prevEl: '.project-btn-next',
    },
})