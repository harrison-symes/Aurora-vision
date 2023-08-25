import { baseReducers, reducers, rootInitialState } from "./reducers";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createReduxHistoryContext } from "redux-first-history";
import { createBrowserHistory } from "history";

const { createReduxHistory, routerMiddleware, routerReducer } =
  createReduxHistoryContext({
    history: createBrowserHistory(),
    reduxTravelling: true,
    showHistoryAction: true,
  });

export const store = configureStore({
  devTools: true,
  reducer: combineReducers({
    ...baseReducers(routerReducer),
    ...reducers,
  }),
  middleware: [routerMiddleware],
  preloadedState: rootInitialState,
});

export const history = createReduxHistory(store);
