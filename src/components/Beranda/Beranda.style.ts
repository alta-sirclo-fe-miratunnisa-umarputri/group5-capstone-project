import { SxProps } from "@mui/material";
import { generalFont } from "../../styles/font.style";

export const topCarousel: SxProps = { mt: 3 };

export const statisticsContainer: SxProps = {
  display: "flex",
  flexDirection: "row",
  justifyContent: { xs: "center", md: "center", lg: "center" },
  pl: { md: 3, lg: 3 },
};

export const botCarousel: SxProps = {
  mt: 3,
};

export const tableContainer: SxProps = { mt: 3 };

export const buttonBerandaContainer: SxProps = {
  display: "flex",
  flexDirection: "column",
  alignItems: { xs: "center", lg: "end" },
  justifyContent: "start",
  mt: { xs: 3, md: 0 },
};

export const mobileHeader: SxProps = {
  ...generalFont,
  textAlign: "center",
  mb: 2,
  fontWeight: "medium",
};
