import { SxProps } from "@mui/material";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

import { primary, tertiary } from "../../styles/color.styles";

const theme = createTheme();
export const responsiveFontSize = responsiveFontSizes(theme);

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
