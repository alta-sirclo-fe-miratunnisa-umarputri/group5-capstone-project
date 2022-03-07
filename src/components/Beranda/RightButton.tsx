import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import ListRoundedIcon from "@mui/icons-material/ListRounded";

import { ButtonRight } from "../../types/beranda";
import {
  container,
  font,
  icon,
  innerContainer,
  link,
} from "./RightButton.style";

const RightButton = ({ label, path }: ButtonRight) => {
  return (
    <Box sx={container}>
      <Link to={path} style={link}>
        <Box sx={innerContainer}>
          <Typography variant="subtitle1" sx={font}>
            {label}
          </Typography>

          <ListRoundedIcon fontSize="large" sx={icon} />
        </Box>
      </Link>
    </Box>
  );
};

export default RightButton;
