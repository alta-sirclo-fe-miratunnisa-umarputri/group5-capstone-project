import { Box } from "@mui/material";

import fullLogo from "../assets/full-logo.png";
import { primary } from "../styles/color.styles";

const Header = () => {
  return (
    <Box
      sx={{
        bgcolor: primary.color,
        py: 1,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <img src={fullLogo} width="25%" height="auto" />
    </Box>
  );
};

export default Header;
