import Swiper from 'swiper';

var programsSlider = new Swiper ('.front-programs__slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 40,
    slideVisibleClass: 'none',
    navigation: {
      nextEl: '.front-programs__btn--next',
      prevEl: '.front-programs__btn--prev',
      disabledClass: 'front-programs__btn--disabled'
  },
})
