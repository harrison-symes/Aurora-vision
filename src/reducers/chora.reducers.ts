import { createAction, createReducer } from "@reduxjs/toolkit";
import { ChoraWorlds } from "../components/Chora/choraData";


interface IChoraReducerState {
  selectedWorld: ChoraWorlds | null;
}

export const choraInitialState: IChoraReducerState = {
  selectedWorld: null,
};

export const selectChoraWorld = createAction<ChoraWorlds>(
  "CHORA/SELECT_WORLD"
);
export const clearChoraWorld = createAction(
  "CHORA/CLEAR_WORLD"
);

const choraReducer = createReducer(choraInitialState, (thing) =>
  thing
    .addCase(selectChoraWorld, (state, { payload }) => ({
      ...state,
      selectedWorld: payload,
    }))
    .addCase(clearChoraWorld, (state) => ({
      ...state,
      selectedWorld: null,
    }))
);

export default choraReducer;
