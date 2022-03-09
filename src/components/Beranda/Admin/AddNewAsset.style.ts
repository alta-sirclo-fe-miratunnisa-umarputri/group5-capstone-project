import { SxProps } from "@mui/material";
import { theGreen, theLightGreen } from "../../../styles/color.styles";

const button = {
  textTransform: "none",
  fontFamily: "Poppins",
  fontWeight: "medium",
};

export const leftButton: SxProps = {
  color: theLightGreen.color,
  ...button,
  mx: 1,
};

export const rightButton: SxProps = {
  ml: 1,
  textTransform: "none",
  fontFamily: "Poppins",
  fontWeight: "medium",
  bgcolor: theGreen.color,
  "&:hover": { bgcolor: theGreen.color },
};
