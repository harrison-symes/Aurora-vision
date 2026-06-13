import { createAction, createReducer } from "@reduxjs/toolkit";
import { ChoraWorlds } from "../components/Chora/choraData";

const key = [ChoraWorlds.Coherence, ChoraWorlds.Momentum, ChoraWorlds.GodComplex, ChoraWorlds.Octopod, ChoraWorlds.SecondGenesis]

interface IChoraReducerState {
  selectedWorld: ChoraWorlds | null;
  world_select_ee: ChoraWorlds[];
  world_select_ee_solved: boolean;
  circlesClicked: number;
  macleanLetters: {
    m: boolean;
    a: boolean;
    c: boolean;
    l: boolean;
    e: boolean;
    a2: boolean;
    n: boolean;
  }
}

export const choraInitialState: IChoraReducerState = {
  selectedWorld: null,
  world_select_ee: [],
  world_select_ee_solved: false,
  circlesClicked: 0,
  macleanLetters: {
    m: false,
    a: false,
    c: false,
    l: false,
    e: false,
    a2: false,
    n: false,
  }
};

export const selectChoraWorld = createAction<ChoraWorlds>(
  "CHORA/SELECT_WORLD"
);
export const clearChoraWorld = createAction(
  "CHORA/CLEAR_WORLD"
);
export const clickChoraCircle = createAction(
  "CHORA/CLICK_CIRCLE"
);
export const clickMacleanLetter = createAction<string>(
  "CHORA/CLICK_MACLEAN_LETTER"
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
    .addCase(clickChoraCircle, (state) => {
      const newClicked = state.circlesClicked + 1 
      if (newClicked >= 14) {
        return {
          ...state,
          selectedWorld: ChoraWorlds.EE_COSMOS,
          circlesClicked: 14
        }
      }

      return {
        ...state,
        circlesClicked: newClicked
      }
    })
    .addCase(clickMacleanLetter, (state, {payload}) => {
      console.log(payload)
      return {
      ...state,
      macleanLetters: {
        ...state.macleanLetters,
        [payload as any]: true 
      }
    }})
);

export default choraReducer;
