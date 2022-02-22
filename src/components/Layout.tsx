import { Box } from "@mui/material";

import { TheLayout } from "../types/general";
import Footer from "./Footer/Footer";
import TopAppBar from "./TopAppBar/TopAppBar";

const Layout = ({ children }: TheLayout) => {
  return (
    <>
      <TopAppBar />
      <Box minHeight="100vh">{children}</Box>
      <Footer />
    </>
  );
};

export default Layout;
