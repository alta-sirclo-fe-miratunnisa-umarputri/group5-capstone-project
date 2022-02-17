import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import TopAppBar from "./TopAppBar/TopAppBar";

const Layout = () => {
  return (
    <>
      <TopAppBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
