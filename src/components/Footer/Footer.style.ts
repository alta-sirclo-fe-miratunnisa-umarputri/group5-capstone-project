import { SxProps } from "@mui/material";
import { theWhite } from "../../styles/color.styles";

export const wrapper: SxProps = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  alignItems: "start",
  px: 8,
  py: 4,
};

export const title: SxProps = {
  ...theWhite,
  fontFamily: "Poppins",
  fontWeight: "bold",
};

export const information: SxProps = {
  ...theWhite,
  fontFamily: "Poppins",
  fontWeight: "medium",
};
