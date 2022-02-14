import { SxProps } from "@mui/material";

import { secondary } from "../../styles/color.styles";

export const secondaryButton: SxProps = {
  textTransform: "none",
  marginY: 1,
  fontWeight: "medium",
  fontFamily: "Poppins",
  backgroundColor: secondary.color,
  "&:hover": {
    backgroundColor: secondary.color,
  },
};
