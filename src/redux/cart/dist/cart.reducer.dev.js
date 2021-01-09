"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _cart = _interopRequireDefault(require("./cart.types"));

var _cart2 = require("./cart.utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

var cartReducer = function cartReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _cart["default"].TOGGLE_CART_HIDDEN:
      return _objectSpread({}, state, {
        hidden: !state.hidden
      });

    case _cart["default"].ADD_ITEM:
      return _objectSpread({}, state, {
        cartItems: (0, _cart2.addItemToCart)(state.cartItems, action.payload)
      });

    case _cart["default"].CLEAR_ITEM_FROM_CART:
      return _objectSpread({}, state, {
        cartItems: (0, _cart2.removeItemFromCart)(state.cartItems, action.payload)
      });

    case _cart["default"].REMOVE_ITEM:
      return _objectSpread({}, state, {
        cartItems: state.cartItems.filter(function (cartItem) {
          return cartItem.id !== action.payload.id;
        })
      });

    default:
      return state;
  }
};

var _default = cartReducer;
exports["default"] = _default;