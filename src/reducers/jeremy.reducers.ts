import { createReducer } from "@reduxjs/toolkit";
import {
  allJerrysFound,
  clickJeremyLetter,
  jeremyCodeSubmitted,
} from "../actions/jeremy.actions";

export type TJeremyLetter = "j" | "e" | "r" | "e2" | "m" | "y";

interface IJeremyReducerState {
  lettersClicked: Record<TJeremyLetter, boolean>;
  jerrysFound: boolean;
  jeremyCodeSubmitted: boolean;
}

export const jeremyInitialState: IJeremyReducerState = {
  lettersClicked: {
    j: false,
    e: false,
    r: false,
    e2: false,
    m: false,
    y: false,
  },
  jerrysFound: false,
  jeremyCodeSubmitted: false,
};

const jeremyReducer = createReducer(jeremyInitialState, (thing) =>
  thing
    .addCase(clickJeremyLetter, (state, { payload }) => ({
      ...state,
      lettersClicked: {
        ...state.lettersClicked,
        [payload]: true,
      },
    }))
    .addCase(allJerrysFound, (state) => ({
      ...state,
      jerrysFound: true,
    }))
    .addCase(jeremyCodeSubmitted, (state) => ({
      ...state,
      jeremyCodeSubmitted: true,
    }))
);

export default jeremyReducer;
