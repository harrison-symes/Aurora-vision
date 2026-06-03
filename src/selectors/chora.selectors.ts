import { TStoreState } from "../reducers";

export const getSelectedChoraWorld = (state: TStoreState) =>
  state.chora.selectedWorld;