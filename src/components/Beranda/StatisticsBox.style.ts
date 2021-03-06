import { SxProps } from "@mui/material";
import { theBlack, theWhite } from "../../styles/color.styles";

export const miniBox: SxProps = {
  width: "115px",
  height: "90px",
  bgcolor: theWhite.color,
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "end",
  border: "1px solid black",
};

export const totalFont: SxProps = { ...theBlack, px: 1, fontFamily: "Poppins" };

export const labelFont: SxProps = {
  ...theBlack,
  px: 1,
  pb: 1,
  fontFamily: "Poppins",
  fontWeight: "regular",
};
