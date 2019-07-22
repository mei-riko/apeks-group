/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _jquery2.default)(document).ready(function () {
  (0, _jquery2.default)("a.scroll").click(function () {
    (0, _jquery2.default)("html, body").animate({
      scrollTop: (0, _jquery2.default)((0, _jquery2.default)(this).attr("href")).offset().top + "px"
    }, {
      duration: 500,
      easing: "swing"
    });
    return false;
  });
  /*
  Customized layout Project
  */
  var option = {
    baseClass: "fancybox-custom-layout",
    infobar: false,
    touch: {
      vertical: false
    },
    buttons: ["close", "thumbs"],
    animationEffect: "fade",
    transitionEffect: "fade",
    preventCaptionOverlap: false,
    idleTime: false,
    gutter: 0,
    // Customize caption area
    caption: function caption(instance, item) {
      return (0, _jquery2.default)(this).find('figcaption').html();
    }
  };

  (0, _jquery2.default)('[data-fancybox="project-1"]').fancybox(option);

  // Services Demo
  (0, _jquery2.default)('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  (0, _jquery2.default)('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    arrows: false,
    dots: false,
    centerMode: true,
    focusOnSelect: true
  });

  (0, _jquery2.default)(".content_service__link").on("click", function () {
    if (!(0, _jquery2.default)(this).hasClass("content_service__link--active")) {
      (0, _jquery2.default)(".content_service__link.content_service__link--active").removeClass("content_service__link--active");
      (0, _jquery2.default)(this).addClass("content_service__link--active");
      var item = (0, _jquery2.default)(this).data("item") - 1;
      console.log(item);
      (0, _jquery2.default)(".slider-item[data-slick-index=" + item + "]").click();
    }
  });
  // Open Nav
  (0, _jquery2.default)(".header .header__navbar-toggler").on("click", function () {
    (0, _jquery2.default)("nav.navbar").slideToggle();
  });

  // Fixed Nav
  if ((0, _jquery2.default)('body').hasClass('index')) {
    (0, _jquery2.default)('.header').addClass('header_index');
  }

  if ((0, _jquery2.default)("body").scrollTop() > 400) {
    if ((0, _jquery2.default)('body').hasClass('index')) {
      (0, _jquery2.default)('.header').removeClass('header_index');
    }

    (0, _jquery2.default)('.header').addClass('header_fixed');
    (0, _jquery2.default)('.header_fixed').addClass('header_fixed--active');

    (0, _jquery2.default)('main').addClass('padding-top');
  }

  (0, _jquery2.default)(window).scroll(function () {
    (0, _jquery2.default)("nav.navbar").slideUp();

    var scroll = (0, _jquery2.default)(document).scrollTop();
    if (scroll > 200) {
      (0, _jquery2.default)('.header').addClass('header_fixed');
      if (!(0, _jquery2.default)('body').hasClass('index')) {
        (0, _jquery2.default)('main').addClass('padding-top');
      }
    } else {
      (0, _jquery2.default)('.header').removeClass('header_fixed');
      (0, _jquery2.default)('main').removeClass('padding-top');
    }

    if (scroll > 400) {
      if ((0, _jquery2.default)('body').hasClass('index')) {
        (0, _jquery2.default)('.header').removeClass('header_index');
      }
      (0, _jquery2.default)('.header_fixed').addClass('header_fixed--active');
    } else {
      if ((0, _jquery2.default)('body').hasClass('index')) {
        (0, _jquery2.default)('.header').addClass('header_index');
      }
      (0, _jquery2.default)('.header_fixed').removeClass('header_fixed--active');
    }
  });

  // YA Maps
  ymaps.ready(init);

  function init() {
    var myMap = new ymaps.Map("map", {
      center: [55.76, 37.64],
      zoom: 10
    }),


    // Создаем метку с помощью вспомогательного класса.
    myPlacemark1 = new ymaps.Placemark([55.8, 37.6], {
      // Свойства.
      // Содержимое иконки, балуна и хинта.
      iconContent: '',
      balloonContent: 'Адрес',
      hintContent: 'Стандартный значок метки',
      iconCaption: 'Офис группы Апекс'
    }, {
      // Опции.
      // Стандартная фиолетовая иконка.
      preset: 'islands#greenDotIconWithCaption',
      iconColor: '#329b48'
    });
    //myMap.controls.add('smallZoomControl');
    // Добавляем метки на карту.
    myMap.geoObjects.add(myPlacemark1);
    myMap.behaviors.disable('scrollZoom');
  }
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })
/******/ ]);