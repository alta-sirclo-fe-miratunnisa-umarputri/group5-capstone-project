import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
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
