import { Box, Typography } from "@mui/material";

import { theBlack } from "../styles/color.styles";
import { TheHeader } from "../types/general";

const Header = ({ title, description }: TheHeader) => {
  return (
    <Box
      sx={{
        pt: 3,
        pb: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          color: theBlack.color,
          fontFamily: "Poppins",
          fontWeight: "regular",
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body2"
        gutterBottom
        sx={{
          color: theBlack.color,
          fontFamily: "Poppins",
          fontWeight: "light",
          px: { xs: 3, md: 20 },
          textAlign: "center",
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default Header;
