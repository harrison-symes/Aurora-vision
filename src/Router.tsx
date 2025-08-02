import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { HistoryRouter } from "redux-first-history/rr6";

import Layout from "./Layout";
import { ROUTES_INTERNAL } from "./constants/router.constants";
import { history } from "./configureStore";
import JerryMe from "./pages/JerryMe";

const Loading = React.lazy(() => import("./components/Loading"));
const Home = React.lazy(() => import("./pages/Home"));
const AboutUs = React.lazy(() => import("./pages/AboutUs"));
const OurWork = React.lazy(() => import("./pages/OurWork"));
const Contact = React.lazy(() => import("./pages/Contact"));

const Router = () => {
  return (
    <HistoryRouter history={history}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <React.Suspense fallback={<Loading />}>
                <Home />
              </React.Suspense>
            }
          />
        </Route>
        <Route path={ROUTES_INTERNAL.ABOUT_US} element={<Layout />}>
          <Route
            index
            element={
              <React.Suspense fallback={<Loading />}>
                <AboutUs />
              </React.Suspense>
            }
          />
        </Route>
        <Route path={ROUTES_INTERNAL.OUR_WORK} element={<Layout />}>
          <Route
            index
            element={
              <React.Suspense fallback={<Loading />}>
                <OurWork />
              </React.Suspense>
            }
          />
        </Route>
        <Route path={ROUTES_INTERNAL.CONTACT} element={<Layout />}>
          <Route
            index
            element={
              <React.Suspense fallback={<Loading />}>
                <Contact />
              </React.Suspense>
            }
          />
        </Route>
        <Route path={ROUTES_INTERNAL.JERRYME} element={<Layout />}>
          <Route
            index
            element={
              <React.Suspense fallback={<Loading />}>
                <JerryMe />
              </React.Suspense>
            }
          />
        </Route>
      </Routes>
    </HistoryRouter>
  );
};

export default Router;
