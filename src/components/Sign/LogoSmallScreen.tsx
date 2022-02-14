import { Box } from "@mui/material";

import logo from "../../assets/logo-small.svg";
import {
  innerContainerLogo,
  outerContainerLogo,
} from "./LogoSmallScreen.style";

const LogoSmallScreen = () => {
  return (
    <>
      <Box sx={outerContainerLogo}>
        <Box sx={innerContainerLogo}>
          <img src={logo} alt="logo" />
        </Box>
      </Box>
    </>
  );
};

export default LogoSmallScreen;
