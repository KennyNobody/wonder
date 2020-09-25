import Swiper from 'swiper';

var programsSlider = new Swiper ('.front-programs__slider', {
	direction: 'horizontal',
	loop: true,
	slidesPerView: 3,
	spaceBetween: 40,
	slideVisibleClass: 'none',
	navigation: {
		nextEl: '.front-programs__slider-btn--next',
		prevEl: '.front-programs__slider-btn--prev',
		disabledClass: 'front-programs__btn--disabled'
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
			spaceBetween: 20
		},
		680: {
			slidesPerView: 2,
			spaceBetween: 30
		},
		820: {
			slidesPerView: 3,
			spaceBetween: 30
		},
	}
});
