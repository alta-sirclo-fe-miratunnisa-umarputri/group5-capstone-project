import { SxProps } from "@mui/material";

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
};
