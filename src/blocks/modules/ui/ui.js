(function() {
	const drops = document.querySelectorAll('.drop-card');

	if (drops) {

		for (let i = 0; i < drops.length; i++) {
			let card = drops[i]
			toggle(card)
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