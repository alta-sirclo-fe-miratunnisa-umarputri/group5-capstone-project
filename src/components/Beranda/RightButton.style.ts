import { SxProps } from "@mui/material";
import { bgwhite, secondary } from "../../styles/color.styles";

export const container: SxProps = {
  width: "70%",
  height: "40px",
  bgcolor: secondary.color,
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
