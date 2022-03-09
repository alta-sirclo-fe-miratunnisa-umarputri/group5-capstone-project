import { Box } from "@mui/material";

import logo from "../../assets/new-logo.svg";

const Logo = () => {
  return (
    <Box sx={{ width: 42, height: 42, mr: 1 }}>
      <img src={logo} alt="Logo" style={{ width: "100%", height: "100%" }} />
    </Box>
  );
};

export default Logo;
