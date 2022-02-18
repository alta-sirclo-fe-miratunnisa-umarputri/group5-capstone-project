import { SxProps } from "@mui/material";

import { bgwhite } from "../../styles/color.styles";

export const wrapper: SxProps = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  alignItems: "start",
  px: 5,
  py: 2,
};

export const title: SxProps = {
  fontFamily: "Poppins",
  fontWeight: "medium",
  color: bgwhite.backgroundColor,
};

export const information: SxProps = {
  fontFamily: "Poppins",
  fontWeight: "light",
  color: bgwhite.backgroundColor,
};
