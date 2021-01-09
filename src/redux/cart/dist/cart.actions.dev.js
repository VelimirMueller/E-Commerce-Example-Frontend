"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeItem = exports.clearItemFromCart = exports.addItem = exports.toggleCartHidden = void 0;

var _cart = _interopRequireDefault(require("./cart.types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var toggleCartHidden = function toggleCartHidden() {
  return {
    type: _cart["default"].TOGGLE_CART_HIDDEN
  };
};

exports.toggleCartHidden = toggleCartHidden;

var addItem = function addItem(item) {
  return {
    type: _cart["default"].ADD_ITEM,
    payload: item
  };
};

exports.addItem = addItem;

var clearItemFromCart = function clearItemFromCart(item) {
  return {
    type: _cart["default"].REMOVE_ITEM,
    payload: item
  };
};

exports.clearItemFromCart = clearItemFromCart;

var removeItem = function removeItem(item) {
  return {
    type: _cart["default"].CLEAR_ITEM_FROM_CART,
    payload: item
  };
};

exports.removeItem = removeItem;