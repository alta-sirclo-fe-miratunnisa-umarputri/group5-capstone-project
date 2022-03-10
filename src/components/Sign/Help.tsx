import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { theGreen } from "../../styles/color.styles";
import { SignHelp } from "../../types/sign";
import { help, link } from "./Sign.style";

const Help = ({ tag, instruction, path }: SignHelp) => {
  return (
    <Typography variant="caption" sx={help}>
      <Box>
        {tag}
        <Link to={path} style={link}>
          {" "}
          <span style={theGreen}>{instruction}</span>
        </Link>
      </Box>
    </Typography>
  );
};

export default Help;
