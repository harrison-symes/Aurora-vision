// reducers.js
import { Reducer, StateFromReducersMapObject } from "redux";
import { RouterState } from "redux-first-history";
import jeremyReducer, { jeremyInitialState } from "./jeremy.reducers";

export const baseReducers = (router: Reducer<RouterState>) => ({
  router,
});

export type TBaseReducers = ReturnType<typeof baseReducers>;

interface IBaseState extends StateFromReducersMapObject<TBaseReducers> {
  router: RouterState;
}

export const baseInitialState: IBaseState = {
  router: {},
};

export const reducers = {
  jeremy: jeremyReducer,
};

export type TAppState = StateFromReducersMapObject<typeof reducers>;
export type TStoreState = TAppState & IBaseState;

export const rootInitialState: TStoreState = {
  ...baseInitialState,
  jeremy: jeremyInitialState,
};
