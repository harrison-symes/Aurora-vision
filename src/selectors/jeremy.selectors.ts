import { createSelector } from "@reduxjs/toolkit";
import { TStoreState } from "../reducers";

export const getJeremyLettersClicked = (state: TStoreState) =>
  state.jeremy.lettersClicked;

export const getAreAllJeremyLettersClicked = createSelector(
  getJeremyLettersClicked,
  (lettersClicked) => {
    const { j, e, r, e2, m, y } = lettersClicked;

    return j && e && r && e2 && m && y;
  }
);

export const getAreAllJerrysFound = (state: TStoreState) =>
  state.jeremy.jerrysFound;

export const getIsJeremyCodeSubmitted = (state: TStoreState) =>
  state.jeremy.jeremyCodeSubmitted;

export const getAreAllSecretsFound = createSelector(
  getAreAllJeremyLettersClicked,
  getAreAllJerrysFound,
  getIsJeremyCodeSubmitted,
  (secret1, secret2, secret3) => secret1 && secret2 && secret3
);
