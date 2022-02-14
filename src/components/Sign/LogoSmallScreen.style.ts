import { SxProps } from "@mui/material";

import { primary } from "../../styles/color.styles";

const center: SxProps = {
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

export const outerContainerLogo: SxProps = {
  marginY: 4,
  display: { xs: "flex", md: "none" },
  ...center,
};

export const innerContainerLogo: SxProps = {
  backgroundColor: primary.color,
  width: "10rem",
  height: "10rem",
  borderRadius: 100,
  display: "flex",
  ...center,
};
