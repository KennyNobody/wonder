(function toggleChildrenTabs () {
	const btn = document.querySelectorAll('.children-page__nav-link');
	const tab = document.querySelectorAll('.children-page__tab');
	const select = document.querySelector('.children-page__mob-nav');

	if (btn && tab && (btn.length == tab.length)) {
		for (let i = 0; i < btn.length; i++) {
			btn[i].addEventListener('click', function(e) {
				e.preventDefault();
				changeActive(i);
			})
		}
	}

	if (select) {
		select.addEventListener('change', function(e) {
			let item = select.value;
			changeActive(item);
		})
	}

	function changeActive(n) {
		for (let i = 0; i < btn.length; i++) {
			btn[i].classList.remove('children-page__nav-link--active');
			tab[i].classList.remove('children-page__tab--active');
		}
		btn[n].classList.add('children-page__nav-link--active');
		tab[n].classList.add('children-page__tab--active');
	}

})();