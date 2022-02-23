import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import ListRoundedIcon from "@mui/icons-material/ListRounded";

import { ButtonRight } from "../../types/beranda";
import {
  container,
  containerDisable,
  font,
  fontDisable,
  icon,
  iconDisable,
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

export const RightButtonDisable = ({ label, path }: ButtonRight) => {
  return (
    <Box sx={containerDisable}>
      <Link to={path} style={link}>
        <Box sx={innerContainer}>
          <Typography variant="subtitle1" sx={fontDisable}>
            {label}
          </Typography>

          <ListRoundedIcon fontSize="large" sx={iconDisable} />
        </Box>
      </Link>
    </Box>
  );
};

export default RightButton;
