"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var swiper = new Swiper('.blog-slider', {
  spaceBetween: 30,
  effect: 'fade',
  loop: true,
  mousewheel: {
    invert: false
  },
  // autoHeight: true,
  pagination: {
    el: '.blog-slider__pagination',
    clickable: true
  }
});
var _default = swiper;
exports["default"] = _default;