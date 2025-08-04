import * as React from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer";
import { useSelector } from "react-redux";
import { TStoreState } from "./reducers";

const Layout = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [pathname]);

  return (
    <div>
      <NavBar />
      <div className="page-content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
