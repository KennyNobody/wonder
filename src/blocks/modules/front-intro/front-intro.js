import Swiper from 'swiper';

var introSlider = new Swiper ('.front-intro__slider', {
    // Optional parameters
    direction: 'horizontal',
    navigation: {
      nextEl: '.front-intro__swipe--next',
      prevEl: '.front-intro__swipe--prev',
      disabledClass: 'front-intro__swipe--disabled'
    },
  })
