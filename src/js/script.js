
const icons = document.querySelectorAll('.menu__icon');
icons.forEach (icon => {
    icon.addEventListener('click', (event) => {
        icon.classList.toggle("open");
    });
});



// Слайдер
const swiperZoo = new Swiper('.zoo__slider', {
    // direction: 'vertical',
    // loop: true,
    // spaceBetween: 30,

    slidesPerView: 3,
    grid: { rows: 2, },

    // breakpoints: {
    //     320: {
    //         slidesPerView: 2
    //     },
    //     1040: {
    //         slidesPerView: 3,
    //         grid: { rows: 2, },
    //     },
    //     1240: {
    //         slidesPerView: 3,
    //         grid: { rows: 2, },
    //     },
    // },


    // pagination: {
    //     el: '.hero__pagination',
    // },

    navigation: {
        nextEl: '.zoo__arrow-next',
        prevEl: '.zoo__arrow-prev',
    },

});

// Слайдер отзывы
const swiperTestimonials = new Swiper('.testimonials__slider', {
    // direction: 'vertical',
    loop: false,
    spaceBetween: 30,


    breakpoints: {
        320: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 3
        },
        1200: {
            slidesPerView: 4
        }

    },


    scrollbar: {
        el: '.testimonials__swiper-scrollbar',
        draggable: true,
    },

});