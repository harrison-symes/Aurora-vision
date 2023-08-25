import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { HistoryRouter } from "redux-first-history/rr6";

import Layout from "./Layout";
// import { ROUTES_INTERNAL } from "./constants/router.constants";
import { history } from "./configureStore";
import Loader from "./components/Loader";

const Home = React.lazy(() => import("./pages/Home"));

const Router = () => {
  return (
    <HistoryRouter history={history}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <React.Suspense fallback={<Loader />}>
                <Home />
              </React.Suspense>
            }
          />
        </Route>
      </Routes>
    </HistoryRouter>
  );
};

export default Router;
