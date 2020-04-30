(function agreebecome() {
	const button = document.querySelector('.become__form .form-submit');
	const checkbox = document.querySelector('.become__check input');

	if (button && checkbox) {
		checkbox.addEventListener('change', toggleBtn);
	}

	function toggleBtn () {
		if (checkbox.checked) {
			button.classList.remove('form-submit--disabled');
		} else {
			button.classList.add('form-submit--disabled');
		}
	}
})();