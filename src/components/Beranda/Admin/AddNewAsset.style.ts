import { SxProps } from "@mui/material";
import { primary } from "../../../styles/color.styles";

const button = {
  textTransform: "none",
  fontFamily: "Poppins",
  fontWeight: "medium",
};

export const leftButton: SxProps = {
  ...primary,
  ...button,
  mx: 1,
};

export const rightButton: SxProps = {
  ml: 1,
  textTransform: "none",
  fontFamily: "Poppins",
  fontWeight: "medium",
  bgcolor: primary.color,
  "&:hover": { bgcolor: primary.color },
};
