"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var INITIAL_STATE = {
  sections: [{
    title: 'FRACTAL',
    imageUrl: 'https://images.unsplash.com/photo-1608501857571-31a43311e342?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    id: 1,
    linkUrl: 'shop/fractals'
  }, {
    title: 'CLASSIC',
    imageUrl: 'https://images.unsplash.com/photo-1576503918360-4f474bde662a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=918&q=80',
    id: 2,
    linkUrl: 'shop/classics'
  }, {
    title: 'MODERN',
    imageUrl: 'https://images.unsplash.com/photo-1526304760382-3591d3840148?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    id: 3,
    linkUrl: 'shop/moderns'
  }, {
    title: 'LANDSCAPE',
    imageUrl: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    size: 'large',
    id: 4,
    linkUrl: 'shop/landscapes'
  }, {
    title: 'SKYLINE',
    imageUrl: 'https://images.unsplash.com/photo-1524836613456-ddf4af23321c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80',
    size: 'large',
    id: 5,
    linkUrl: 'shop/skylines'
  }]
};

var mainMenuReducer = function mainMenuReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    default:
      return state;
  }
};

var _default = mainMenuReducer;
exports["default"] = _default;