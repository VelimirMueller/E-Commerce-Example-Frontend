"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeItemFromCart = exports.addItemToCart = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var addItemToCart = function addItemToCart(cartItems, cartItemToAdd) {
  var existingCartItem = cartItems.find(function (cartItem) {
    return cartItem.id === cartItemToAdd.id;
  });

  if (existingCartItem) {
    return cartItems.map(function (cartItem) {
      return cartItem.id === cartItemToAdd.id ? _objectSpread({}, cartItem, {
        quantity: cartItem.quantity + 1
      }) : cartItem;
    });
  }

  return [].concat(_toConsumableArray(cartItems), [_objectSpread({}, cartItemToAdd, {
    quantity: 1
  })]);
};

exports.addItemToCart = addItemToCart;

var removeItemFromCart = function removeItemFromCart(cartItems, cartItemToRemove) {
  var exitstingCartItem = cartItems.find(function (cartItem) {
    return cartItem.id === cartItemToRemove.id;
  });

  if (exitstingCartItem.quantity === 1) {
    return cartItems.filter(function (cartItem) {
      return cartItem.id !== cartItemToRemove.id;
    });
  }

  return cartItems.map(function (cartItem) {
    return cartItem.id === cartItemToRemove.id ? _objectSpread({}, cartItem, {
      quantity: cartItem.quantity - 1
    }) : cartItem;
  });
};

exports.removeItemFromCart = removeItemFromCart;