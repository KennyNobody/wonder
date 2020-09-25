// modules.define('team', ['i-bem-dom'], function(provide, bemDom) {

// provide(bemDom.declBlock(this.name, {
//     onSetMod: {
//         js: {
//             inited: function() {

//             }
//         }
//     }
// }));

// });

import Swiper from 'swiper';


(function initTeamSlider(){
	var teamSlider = new Swiper ('.team', {
		direction: 'horizontal',
		// loop: true,
		slidesPerView: 1,
		spaceBetween: 20,
		slideVisibleClass: 'none',
		navigation: {
			nextEl: '.slider-btn--team-next',
			prevEl: '.slider-btn--team-prev',
			disabledClass: 'slider-btn--disabled'
		},
		breakpoints: {
			480: {
				slidesPerView: 2,
				spaceBetween: 20
			},
			680: {
				slidesPerView: 3,
				spaceBetween: 20
			},
			820: {
				slidesPerView: 4,
				spaceBetween: 20
			},
		}
	});
})();



