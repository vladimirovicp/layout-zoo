
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
    //     768: {
    //         slidesPerView: 3
    //     }
    // },


    // pagination: {
    //     el: '.hero__pagination',
    // },

    navigation: {
        nextEl: '.zoo__arrow-next',
        prevEl: '.zoo__arrow-prev',
    },

});