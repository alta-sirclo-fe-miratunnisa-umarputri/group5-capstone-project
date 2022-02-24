import { SxProps } from "@mui/material";
import { quaternary } from "../../styles/color.styles";

export const miniBox: SxProps = {
  width: "115px",
  height: "90px",
  bgcolor: quaternary.backgroundColor,
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "end",
};

export const totalFont: SxProps = { px: 1, fontFamily: "Poppins" };

export const labelFont: SxProps = {
  px: 1,
  pb: 1,
  fontFamily: "Poppins",
  fontWeight: "regular",
};
