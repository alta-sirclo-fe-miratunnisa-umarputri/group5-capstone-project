import { SxProps } from "@mui/material";

import { theGreen } from "../../styles/color.styles";

export const secondaryButton: SxProps = {
  textTransform: "none",
  marginY: 1,
  fontWeight: "medium",
  fontFamily: "Poppins",
  backgroundColor: theGreen.color,
  "&:hover": {
    backgroundColor: theGreen.color,
  },
};
