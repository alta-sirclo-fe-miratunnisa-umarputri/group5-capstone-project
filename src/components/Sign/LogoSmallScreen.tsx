import { Box } from "@mui/material";

import logo from "../../assets/new-logo.svg";
import {
  innerContainerLogo,
  outerContainerLogo,
} from "./LogoSmallScreen.style";

const LogoSmallScreen = () => {
  return (
    <>
      <Box sx={outerContainerLogo}>
        <Box sx={innerContainerLogo}>
          <img src={logo} alt="logo" width="50%" />
        </Box>
      </Box>
    </>
  );
};

export default LogoSmallScreen;
