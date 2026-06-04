import { TStoreState } from "../reducers";

export const getSelectedChoraWorld = (state: TStoreState) =>
  state.chora.selectedWorld;

export const getWorldEEStepsFound = (state: TStoreState) => state.chora.world_select_ee.length
export const getIsWorldEESolved = (state: TStoreState) => state.chora.world_select_ee_solved