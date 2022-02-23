import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import ListRoundedIcon from "@mui/icons-material/ListRounded";

import { bgwhite, secondary } from "../../styles/color.styles";
import { ButtonRight } from "../../types/beranda";

const RightButton = ({ label, path }: ButtonRight) => {
  return (
    <Box
      sx={{
        width: "70%",
        height: "40px",
        bgcolor: secondary.color,
        mb: 2,
        borderRadius: "5px",
        px: 2,
      }}
    >
      <Link to={path} style={{ textDecoration: "none" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              color: bgwhite.backgroundColor,
              fontFamily: "Poppins",
              fontWeight: "regular",
              fontSize: { xs: "13px", sm: "14px", lg: "18px" },
            }}
          >
            {label}
          </Typography>
          <ListRoundedIcon fontSize="large" sx={{ color: "white" }} />
        </Box>
      </Link>
    </Box>
  );
};

export default RightButton;
