/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/children-page/children-page.js":
/*!***********************************************************!*\
  !*** ./src/blocks/modules/children-page/children-page.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function toggleChildrenTabs() {
  var btn = document.querySelectorAll('.children-page__nav-link');
  var tab = document.querySelectorAll('.children-page__tab');
  var select = document.querySelector('.children-page__mob-nav');

  if (btn && tab && btn.length == tab.length) {
    var _loop = function _loop(i) {
      btn[i].addEventListener('click', function (e) {
        e.preventDefault();
        changeActive(i);
      });
    };

    for (var i = 0; i < btn.length; i++) {
      _loop(i);
    }
  }

  if (select) {
    select.addEventListener('change', function (e) {
      var item = select.value;
      changeActive(item);
    });
  }

  function changeActive(n) {
    for (var _i = 0; _i < btn.length; _i++) {
      btn[_i].classList.remove('children-page__nav-link--active');

      tab[_i].classList.remove('children-page__tab--active');
    }

    btn[n].classList.add('children-page__nav-link--active');
    tab[n].classList.add('children-page__tab--active');
  }
})();

/***/ }),

/***/ "./src/blocks/modules/drop-card/drop-card.js":
/*!***************************************************!*\
  !*** ./src/blocks/modules/drop-card/drop-card.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
  var drops = document.querySelectorAll('.drop-card');

  if (drops) {
    for (var i = 0; i < drops.length; i++) {
      toggle(drops[i]);
      console.log('Привет');
    }
  }

  function toggle(card) {
    var header = card.querySelector('.drop-card__header');
    header.addEventListener('click', function (e) {
      e.preventDefault();
      card.classList.toggle('drop-card--open');
    });
  }
})();

/***/ }),

/***/ "./src/blocks/modules/dropdown/dropdown.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/dropdown/dropdown.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
  var btn = document.querySelector('.header__burger');
  var block = document.querySelector('.dropdown');
  var menuOpen = false;

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

/***/ }),

/***/ "./src/blocks/modules/form/form.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/form/form.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function agreebecome() {
  var button = document.querySelector('.become__form .form-submit');
  var checkbox = document.querySelector('.become__check input');

  if (button && checkbox) {
    checkbox.addEventListener('change', toggleBtn);
  }

  function toggleBtn() {
    if (checkbox.checked) {
      button.classList.remove('form-submit--disabled');
    } else {
      button.classList.add('form-submit--disabled');
    }
  }
})();

/***/ }),

/***/ "./src/blocks/modules/friends/friends.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/friends/friends.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/js/swiper.esm.bundle.js");

var friendSlider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.friends__slider', {
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
    }
  }
});

/***/ }),

/***/ "./src/blocks/modules/front-intro/front-intro.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/front-intro/front-intro.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/js/swiper.esm.bundle.js");

var introSlider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.front-intro__slider', {
  // Optional parameters
  direction: 'horizontal',
  autoHeight: true,
  navigation: {
    nextEl: '.front-intro__swipe--next',
    prevEl: '.front-intro__swipe--prev',
    disabledClass: 'front-intro__swipe--disabled'
  }
});

/***/ }),

/***/ "./src/blocks/modules/front-programs/front-programs.js":
/*!*************************************************************!*\
  !*** ./src/blocks/modules/front-programs/front-programs.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/js/swiper.esm.bundle.js");

var programsSlider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.front-programs__slider', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 40,
  slideVisibleClass: 'none',
  navigation: {
    nextEl: '.front-programs__slider-btn--next',
    prevEl: '.front-programs__slider-btn--prev',
    disabledClass: 'front-programs__btn--disabled'
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    680: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    820: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});

/***/ }),

/***/ "./src/blocks/modules/mmenu/mmenu.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/mmenu/mmenu.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mmenu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mmenu-js */ "./node_modules/mmenu-js/src/mmenu.js");


(function () {
  new mmenu_js__WEBPACK_IMPORTED_MODULE_0__["default"]("#menu", {
    "extensions": ["pagedim-black", "position-front"],
    "navbar": {
      "title": "#ВерюВЧудо",
      "sticky": false
    },
    "navbars": [{
      "position": "bottom",
      "content": ["<a class='fa fa-envelope' href='#/'></a>", "<a class='fa fa-twitter' href='#/'></a>", "<a class='fa fa-facebook' href='#/'></a>"]
    }]
  });
})();

/***/ }),

/***/ "./src/blocks/modules/subscription/subscription.js":
/*!*********************************************************!*\
  !*** ./src/blocks/modules/subscription/subscription.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function agreeSubscription() {
  var button = document.querySelector('.subscription__form .form-submit');
  var checkbox = document.querySelector('.subscription__check input');

  if (button && checkbox) {
    checkbox.addEventListener('change', toggleBtn);
  }

  function toggleBtn() {
    if (checkbox.checked) {
      button.classList.remove('form-submit--disabled');
    } else {
      button.classList.add('form-submit--disabled');
    }
  }
})();

/***/ }),

/***/ "./src/blocks/modules/team/team.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/team/team.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/js/swiper.esm.bundle.js");
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


(function initTeamSlider() {
  var teamSlider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.team', {
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
      }
    }
  });
})();

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_children_page_children_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/children-page/children-page */ "./src/blocks/modules/children-page/children-page.js");
/* harmony import */ var _modules_children_page_children_page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_children_page_children_page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/dropdown/dropdown */ "./src/blocks/modules/dropdown/dropdown.js");
/* harmony import */ var _modules_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_drop_card_drop_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/drop-card/drop-card */ "./src/blocks/modules/drop-card/drop-card.js");
/* harmony import */ var _modules_drop_card_drop_card__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_drop_card_drop_card__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_front_intro_front_intro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/front-intro/front-intro */ "./src/blocks/modules/front-intro/front-intro.js");
/* harmony import */ var _modules_front_programs_front_programs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/front-programs/front-programs */ "./src/blocks/modules/front-programs/front-programs.js");
/* harmony import */ var _modules_friends_friends__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/friends/friends */ "./src/blocks/modules/friends/friends.js");
/* harmony import */ var _modules_form_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! %modules%/form/form */ "./src/blocks/modules/form/form.js");
/* harmony import */ var _modules_form_form__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_modules_form_form__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _modules_team_team__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! %modules%/team/team */ "./src/blocks/modules/team/team.js");
/* harmony import */ var _modules_mmenu_mmenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! %modules%/mmenu/mmenu */ "./src/blocks/modules/mmenu/mmenu.js");
/* harmony import */ var _modules_subscription_subscription__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! %modules%/subscription/subscription */ "./src/blocks/modules/subscription/subscription.js");
/* harmony import */ var _modules_subscription_subscription__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_modules_subscription_subscription__WEBPACK_IMPORTED_MODULE_10__);












/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map