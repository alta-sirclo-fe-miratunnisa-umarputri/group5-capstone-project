import { SxProps } from "@mui/material";

import { primary } from "../../styles/color.styles";

export const title: SxProps = {
  fontFamily: "Poppins",
  fontWeight: "medium",
  ...primary,
};

export const detailImg = {
  borderRadius: "5px",
  width: "50%",
  height: "auto",
};

export const containerActions: SxProps = {
  display: "flex",
  justifyContent: "space-between",
};

export const buttonActions: SxProps = {
  textTransform: "none",
  fontWeight: "medium",
  fontFamily: "Poppins",
  backgroundColor: primary.color,
  "&:hover": {
    backgroundColor: primary.color,
  },
};
