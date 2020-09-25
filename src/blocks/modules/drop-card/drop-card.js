// modules.define('drop-card', ['i-bem-dom'], function(provide, bemDom) {

// provide(bemDom.declBlock(this.name, {
//     onSetMod: {
//         js: {
//             inited: function() {
                
//             }
//         }
//     }
// }));

// });

(function toggleDropCard() {
	const drops = document.querySelectorAll('.drop-card');

	if (drops) {

		for (let i = 0; i < drops.length; i++) {
			toggle(drops[i]);
		}
	}

	function toggle(card) {
		let header = card.querySelector('.drop-card__header');
		header.addEventListener('click', function(e) {
			e.preventDefault();
			card.classList.toggle('drop-card--open');
		})
	}
})();