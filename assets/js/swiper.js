const swiperPlace = new Swiper('.swiper-place', {
    // Optional parameters
    spaceBetween: 20,
    enabled: true,

    breakpoints: {
        320: {
            allowTouchMove: true,
            slidesPerView: 1,
            grid: {
                rows: 1,
                fill: "row",
            }
        },
        480: {
            allowTouchMove: true,
            slidesPerView: 2,
            grid: {
                rows: 1,
                fill: "row",
            }
        },
        768: {
            allowTouchMove: true,
            slidesPerView: 3,
            grid: {
                rows: 1,
                fill: "row",
            }
        },
        1024: {
            allowTouchMove: true,
            slidesPerView: 2,
            grid: {
                rows: 2,
                fill: "row",
            }
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
            slidesPerView: 1,
            grid: {
                rows: 1,
                fill: "row",
            }
        },
        480: {
            allowTouchMove: true,
            slidesPerView: 2,
            grid: {
                rows: 1,
                fill: "row",
            }
        },
        768: {
            allowTouchMove: true,
            slidesPerView: 3,
            grid: {
                rows: 1,
                fill: "row",
            }
        },
        1024: {
            allowTouchMove: true,
            slidesPerView: 2,
            grid: {
                rows: 2,
                fill: "row",
            }
        },
        1280: {
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