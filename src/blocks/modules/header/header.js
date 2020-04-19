import Mmenu from 'mmenu-js';

(function dropMenu() {
	const btn = document.querySelector('.header__burger');
	const block = document.querySelector('.dropdown');
	const links = document.querySelectorAll('.dropdown a');
	setTabindex(-1);

	let menuOpen = false;

	if (btn && block) {
		btn.addEventListener('click', toggle);
	}

	function toggle() {
		if (menuOpen == true) {
			block.classList.remove('dropdown--open');
			menuOpen = false;
			setTabindex(-1);
		} else {
			block.classList.add('dropdown--open');
			menuOpen = true;
			setTabindex('');
		}
		
	}


	function setTabindex(tabindex) {

		for (let i = 0; i < links.length; i++) {
			links[i].setAttribute("tabindex", tabindex);
		}
	}

	document.addEventListener(
		"DOMContentLoaded", () => {
			new Mmenu( "#menu", {
				"extensions": [
				"pagedim-black",
				"position-front"
				],
				"navbar": {
					"title": "#ВерюВЧудо",
					"sticky": false
				},
				"navbars": [
				{
					"position": "bottom",
					"content": [
					"<a class='fa fa-envelope' href='#/'></a>",
					"<a class='fa fa-twitter' href='#/'></a>",
					"<a class='fa fa-facebook' href='#/'></a>"
					]
				}
				]
			});
		}
		);
})();