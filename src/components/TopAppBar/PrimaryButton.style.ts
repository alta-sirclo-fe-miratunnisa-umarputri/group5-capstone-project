import { SxProps } from "@mui/material";

import { primary } from "../../styles/color.styles";

export const primaryButton: SxProps = {
  textTransform: "none",
  marginY: 1,
  fontWeight: "light",
  fontFamily: "Poppins",
  backgroundColor: primary.color,
  "&:hover": {
    backgroundColor: primary.color,
  },
};
