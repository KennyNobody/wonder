import Swiper from 'swiper';

var friendSlider = new Swiper ('.friends__slider', {
	direction: 'horizontal',
	loop: true,
	slidesPerView: 3,
	spaceBetween: 40,
	slideVisibleClass: 'none',
	navigation: {
		nextEl: '.friends__slider-btn--next',
		prevEl: '.friends__slider-btn--prev',
		disabledClass: 'friend__slider-btn--disabled'
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
			spaceBetween: 20
		},
		480: {
			slidesPerView: 2,
			spaceBetween: 30
		},
		900: {
			slidesPerView: 3,
			spaceBetween: 30
		},
	}
});