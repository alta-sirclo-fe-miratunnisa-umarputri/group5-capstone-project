import { SxProps } from "@mui/material";

export const carousel: SxProps = {
  borderRadius: "5px",
  bgcolor: "rgba(202, 203, 213, 0.3)",
  display: { xs: "none", md: "block" },
};

export const carouselItem: SxProps = {
  height: 175,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  borderRadius: "5px, 5px, 0px, 0px",
};
