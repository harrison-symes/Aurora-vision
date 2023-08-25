// import { createSelector } from "@reduxjs/toolkit";
import { TStoreState } from "../reducers";

export const getPath = (state: TStoreState) => state.router?.location?.pathname;

export const getQueryParams = (state: TStoreState) =>
  state.router?.location?.search;