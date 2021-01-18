"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectCollection = exports.selectCollectionsForPreview = exports.selectCollections = void 0;

var _lodash = _interopRequireDefault(require("lodash.memoize"));

var _reselect = require("reselect");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var selectShop = function selectShop(state) {
  return state.shop;
};

var selectCollections = (0, _reselect.createSelector)([selectShop], function (shop) {
  return shop.collections;
});
exports.selectCollections = selectCollections;
var selectCollectionsForPreview = (0, _reselect.createSelector)([selectCollections], function (collections) {
  return Object.keys(collections).map(function (key) {
    return collections[key];
  });
});
exports.selectCollectionsForPreview = selectCollectionsForPreview;
var selectCollection = (0, _lodash["default"])(function (collectionUrlParam) {
  return (0, _reselect.createSelector)([selectCollections], function (collections) {
    return collections[collectionUrlParam];
  });
});
exports.selectCollection = selectCollection;