import { createAction, createReducer } from "@reduxjs/toolkit";
import { ChoraWorlds } from "../components/Chora/choraData";

const key = [ChoraWorlds.Coherence, ChoraWorlds.Momentum, ChoraWorlds.GodComplex, ChoraWorlds.Octopod, ChoraWorlds.SecondGenesis]

interface IChoraReducerState {
  selectedWorld: ChoraWorlds | null;
  world_select_ee: ChoraWorlds[];
  world_select_ee_solved: boolean;
}

export const choraInitialState: IChoraReducerState = {
  selectedWorld: null,
  world_select_ee: [],
  world_select_ee_solved: false,
};

export const selectChoraWorld = createAction<ChoraWorlds>(
  "CHORA/SELECT_WORLD"
);
export const clearChoraWorld = createAction(
  "CHORA/CLEAR_WORLD"
);

const choraReducer = createReducer(choraInitialState, (thing) =>
  thing
    .addCase(selectChoraWorld, (state, { payload }) => {
      let ee = [...state.world_select_ee]
      let solved = state.world_select_ee_solved
      
      if (!state.world_select_ee_solved) {
        ee = [...state.world_select_ee, payload]
        if (ee.some((i, idx) => i !== key[idx])) {
          ee = []
        } else if (ee.length === key.length) {
          solved = true
        }
      }

      return {
        ...state,
        selectedWorld: payload,
        world_select_ee: ee,
        world_select_ee_solved: solved
      }
    })
    .addCase(clearChoraWorld, (state) => ({
      ...state,
      selectedWorld: null,
    }))
);

export default choraReducer;
