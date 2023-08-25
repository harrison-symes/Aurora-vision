import * as React from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

const Layout = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <NavBar />
      <div className="page-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
