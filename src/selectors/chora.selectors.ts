import { TStoreState } from "../reducers";

export const getSelectedChoraWorld = (state: TStoreState) =>
  state.chora.selectedWorld;

export const getWorldEEStepsFound = (state: TStoreState) => state.chora.world_select_ee.length
export const getIsWorldEESolved = (state: TStoreState) => state.chora.world_select_ee_solved
export const getAreAllCirclesClicked = (state: TStoreState) => state.chora.circlesClicked >= 14
export const getMacleanLetters = (state: TStoreState) => state.chora.macleanLetters

export const getAreMacleanLettersClicked = (state: TStoreState) => {
  const {m, a, c, l, e, a2, n} = state.chora.macleanLetters

  return m && a && c && l && e && a2 && n 
}