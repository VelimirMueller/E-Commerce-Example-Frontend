import { createSelector } from 'reselect';

const selectMainMenu = state => state.mainMenu;

export const selectMainMenuSections = createSelector(
    [selectMainMenu],
    mainMenu => mainMenu.sections
);