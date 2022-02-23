import { SxProps } from "@mui/material";

export const outerContainer: SxProps = {
  width: "250px",
  height: "200px",
  display: "flex",
  flexDirection: "column",
};

const innerContainer = {
  width: "250px",
  height: "100px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
};

export const topInnContainer = { ...innerContainer, alignItems: "start" };

export const botInnContainer = { ...innerContainer, alignItems: "end" };
