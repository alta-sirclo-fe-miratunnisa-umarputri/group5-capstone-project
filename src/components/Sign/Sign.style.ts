import { SxProps } from "@mui/material";

import { primary, tertiary } from "../../styles/color.styles";

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

export const titleAndSubtitle: SxProps = {
  ...primary,
  fontFamily: "Poppins",
  fontWeight: "medium",
};

export const help: SxProps = {
  ...tertiary,
  textAlign: "end",
  fontFamily: "Poppins",
  fontWeight: "medium",
  mt: 1,
};

export const link = {
  textDecoration: "underline",
  textDecorationColor: primary.color,
};
