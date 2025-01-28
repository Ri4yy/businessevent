const swiperPlace = new Swiper('.swiper-place', {
    // Optional parameters
    spaceBetween: 20,
    enabled: true,

    breakpoints: {
        320: {
            allowTouchMove: true,
            slidesPerView: 1
        },
        600: {
            allowTouchMove: true,
            slidesPerView: 2
        },
        850: {
            allowTouchMove: true,
            slidesPerView: 3
        },
        1280: {
            allowTouchMove: true,
            slidesPerView: 3,
        },
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-place-btn--next',
      prevEl: '.swiper-place-btn--prev',
    },
});

const swiperSpeaker = new Swiper('.swiper-speaker', {
    // Optional parameters
    spaceBetween: 20,
    enabled: true,

    breakpoints: {
        320: {
            allowTouchMove: true,
            slidesPerView: 1
        },
        850: {
            allowTouchMove: true,
            slidesPerView: 2
        },
        1480: {
            allowTouchMove: true,
            slidesPerView: 3,
        },
    },

    // Navigation arrows
    navigation: {
      nextEl: '.speakers__btn--next',
      prevEl: '.speakers__btn--prev',
    },
});