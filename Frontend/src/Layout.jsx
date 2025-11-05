import React from "react";
import SearchPage from "./Component/SearchPage";
import Footer from "./Component/Footer";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <div>
      <SearchPage/>
      <Outlet />
      <Footer/>
    </div>
  );
}

export default Layout;
