(function agreeSubscription() {
	const button = document.querySelector('.subscription__form .form-submit');
	const checkbox = document.querySelector('.subscription__check input');

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