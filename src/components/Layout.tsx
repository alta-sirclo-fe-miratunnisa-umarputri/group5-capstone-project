import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import TopAppBar from "./TopAppBar/TopAppBar";

const Layout = () => {
  return (
    <>
      <TopAppBar />
      <Box minHeight="100vh">
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
