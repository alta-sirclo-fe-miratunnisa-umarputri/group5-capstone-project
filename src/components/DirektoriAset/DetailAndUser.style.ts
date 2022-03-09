import { SxProps } from "@mui/material";

import { theBlack, theGreen } from "../../styles/color.styles";

export const title: SxProps = {
  fontFamily: "Poppins",
  fontWeight: "medium",
  color: theBlack.color,
};

export const detailImg = {
  borderRadius: "5px",
  width: "50%",
  height: "auto",
};

export const containerActionsDetail: SxProps = {
  display: "flex",
  justifyContent: "space-between",
};

export const detailAsetButton: SxProps = {
  display: "flex",
  justifyContent: "end",
};

export const buttonActions: SxProps = {
  textTransform: "none",
  fontWeight: "medium",
  fontFamily: "Poppins",
  backgroundColor: theGreen.color,
  "&:hover": {
    backgroundColor: theGreen.color,
  },
};

export const containerActionsUser: SxProps = {
  display: "flex",
  justifyContent: "end",
};

export const userImg = {
  borderRadius: "5px",
  width: "100%",
  height: "auto",
};
