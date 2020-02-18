(function dropMenu() {
	const btn = document.querySelector('.header__burger');
	const block = document.querySelector('.header__line--2');

	if (btn && block) {
		btn.addEventListener('click', toggle)
	}

	function toggle() {
		block.classList.toggle('header__line--drop');
	}
})();