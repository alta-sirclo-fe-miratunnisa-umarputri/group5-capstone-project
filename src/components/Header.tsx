import { Box, Typography } from "@mui/material";

import { primary } from "../styles/color.styles";
import { TheHeader } from "../types/general";

const Header = ({ title, description }: TheHeader) => {
  return (
    <Box
      sx={{
        bgcolor: primary.color,
        py: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{ color: "white", fontFamily: "Poppins", fontWeight: "regular" }}
      >
        {title}
        {/* Direktori Aset */}
      </Typography>
      <Typography
        variant="body2"
        gutterBottom
        sx={{
          color: "white",
          fontFamily: "Poppins",
          fontWeight: "light",
          px: { xs: 3, md: 20 },
          textAlign: "center",
        }}
      >
        {description}
        {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. */}
      </Typography>
    </Box>
  );
};

export default Header;
