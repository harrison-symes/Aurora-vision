import { createAction } from "@reduxjs/toolkit";
import { TJeremyLetter } from "../reducers/jeremy.reducers";

export const clickJeremyLetter = createAction<TJeremyLetter>(
  "JEREMY/CLICK_LETTER"
);

export const allJerrysFound = createAction("JEREMY/ALL_JERRYS_FOUND");
export const jeremyCodeSubmitted = createAction("JEREMY/CODE_SUBMITTED");
