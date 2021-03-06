import { SxProps } from "@mui/material";
import { bgwhite, theGreen } from "../../styles/color.styles";

export const container: SxProps = {
  width: { xs: "80%", sm: "60%", md: "80%", lg: "80%" },
  height: "40px",
  bgcolor: theGreen.color,
  mb: 2,
  borderRadius: "5px",
  px: 2,
};

export const link = { textDecoration: "none" };

export const innerContainer: SxProps = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
};

export const font: SxProps = {
  color: bgwhite.backgroundColor,
  fontFamily: "Poppins",
  fontWeight: "regular",
  fontSize: { xs: "13px", sm: "14px", lg: "18px" },
};

export const icon: SxProps = { color: bgwhite.backgroundColor };
