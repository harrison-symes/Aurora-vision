import * as React from "react";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <div className="page-content section">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
