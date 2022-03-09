import { SxProps } from "@mui/material";

import { primary, theBlack, theLightGreen } from "../../styles/color.styles";

export const complimentContent: SxProps = {
  backgroundColor: primary.color,
  display: { xs: "none", md: "flex" },
  justifyContent: "center",
};

export const mainContent: SxProps = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const help: SxProps = {
  ...theBlack,
  textAlign: "end",
  fontFamily: "Poppins",
  fontWeight: "medium",
  mt: 1,
};

export const link = {
  textDecoration: "underline",
  textDecorationColor: theLightGreen.color,
};
