import { Outlet } from "react-router-dom";
import TopAppBar from "./TopAppBar";

const Layout = () => {
  return (
    <>
      <TopAppBar />
      <Outlet />
      <h1>Footer</h1>
    </>
  );
};

export default Layout;
