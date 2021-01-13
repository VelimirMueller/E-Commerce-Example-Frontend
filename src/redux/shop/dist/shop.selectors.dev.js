"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectCollections = void 0;

var _reselect = require("reselect");

var selectShop = function selectShop(state) {
  return state.shop;
};

var selectCollections = (0, _reselect.createSelector)([selectShop], function (shop) {
  return shop.collections;
});
exports.selectCollections = selectCollections;