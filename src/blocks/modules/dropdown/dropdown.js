// modules.define('dropdown', ['i-bem-dom'], function(provide, bemDom) {

// 	provide(bemDom.declBlock(this.name, {
// 		onSetMod: {
// 			js: {
// 				inited: function() {

// 				}
// 			}
// 		}
// 	}));

// });

(function dropMenu() {
	const btn = document.querySelector('.header__burger');
	const block = document.querySelector('.dropdown');

	let menuOpen = false;

	if (btn && block) {
		btn.addEventListener('click', toggle);
	}

	function toggle() {
		if (menuOpen == true) {
			block.classList.remove('dropdown--open');
			menuOpen = false;
		} else {
			block.classList.add('dropdown--open');
			menuOpen = true;
		}
		
	}
	
})();
