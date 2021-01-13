"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectMainMenuSections = void 0;

var _reselect = require("reselect");

var selectMainMenu = function selectMainMenu(state) {
  return state.mainMenu;
};

var selectMainMenuSections = (0, _reselect.createSelector)([selectMainMenu], function (mainMenu) {
  return mainMenu.sections;
});
exports.selectMainMenuSections = selectMainMenuSections;