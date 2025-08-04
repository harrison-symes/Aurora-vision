import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { HistoryRouter } from "redux-first-history/rr6";

import Layout from "./Layout";
import { ROUTES_INTERNAL } from "./constants/router.constants";
import { history } from "./configureStore";
import JerryMe from "./pages/JerryMe";

const Loading = React.lazy(() => import("./components/Loading"));
const Home = React.lazy(
  () => import(/* webpackChunkName: "home" */ "./pages/Home")
);
const AboutUs = React.lazy(
  () => import(/* webpackChunkName: "about-us" */ "./pages/AboutUs")
);
const OurWork = React.lazy(
  () => import(/* webpackChunkName: "our-work" */ "./pages/OurWork")
);
const Contact = React.lazy(
  () => import(/* webpackChunkName: "contact" */ "./pages/Contact")
);

const DelayedSuspense = ({
  children,
  fallback,
  delay = 1000, // minimum delay in ms
}: {
  children: React.ReactNode;
  fallback: React.ReactNode;
  delay?: number;
}) => {
  const [showFallback, setShowFallback] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowFallback(false);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <React.Suspense fallback={fallback}>
      {showFallback ? fallback : children}
    </React.Suspense>
  );
};

const Router = () => {
  return (
    <HistoryRouter history={history}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <DelayedSuspense fallback={<Loading />}>
                <Home />
              </DelayedSuspense>
            }
          />
        </Route>
        <Route path={ROUTES_INTERNAL.ABOUT_US} element={<Layout />}>
          <Route
            index
            element={
              <DelayedSuspense fallback={<Loading />}>
                <AboutUs />
              </DelayedSuspense>
            }
          />
        </Route>
        <Route path={ROUTES_INTERNAL.OUR_WORK} element={<Layout />}>
          <Route
            index
            element={
              <DelayedSuspense fallback={<Loading />}>
                <OurWork />
              </DelayedSuspense>
            }
          />
        </Route>
        <Route path={ROUTES_INTERNAL.CONTACT} element={<Layout />}>
          <Route
            index
            element={
              <DelayedSuspense fallback={<Loading />}>
                <Contact />
              </DelayedSuspense>
            }
          />
        </Route>
        <Route path={ROUTES_INTERNAL.JERRYME} element={<Layout />}>
          <Route
            index
            element={
              <DelayedSuspense fallback={<Loading />}>
                <JerryMe />
              </DelayedSuspense>
            }
          />
        </Route>
      </Routes>
    </HistoryRouter>
  );
};

export default Router;
