import { SxProps } from "@mui/material";
import {
  primary,
  bgwhite,
  theBlack,
  theGreen,
} from "../../styles/color.styles";

export const masonry: SxProps = { mt: 2 };

export const card: SxProps = {
  height: "100%",
  display: "flex",
  flexDirection: "column",
};

export const cardContent: SxProps = {
  flexGrow: 1,
};

export const category: SxProps = {
  color: theBlack.color,
  fontWeight: "light",
  fontFamily: "Poppins",
};

export const title: SxProps = {
  color: theBlack.color,
  fontWeight: "bold",
  fontFamily: "Poppins",
};

export const description: SxProps = {
  color: theBlack.color,
  fontWeight: "regular",
  fontFamily: "Poppins",
};

export const availability: SxProps = {
  color: theBlack.color,
  fontWeight: "light",
  fontFamily: "Poppins",
  fontSize: "10px",
  fontStyle: "italic",
};

export const cardActions: SxProps = {
  display: "flex",
  justifyContent: "space-between",
};

export const button: SxProps = {
  fontWeight: "medium",
  fontFamily: "Poppins",
  color: bgwhite.backgroundColor,
  textTransform: "none",
  backgroundColor: theGreen.color,
  "&:hover": {
    backgroundColor: theGreen.color,
  },
};

export const aboveButton: SxProps = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};

export const groupAvatar: SxProps = {
  display: "flex",
  flexDirection: "row",
};

export const avatar: SxProps = { width: 25, height: 25 };

export const avatarText: SxProps = {
  ...primary,
  fontFamily: "Poppins",
  fontSize: "12px",
  display: "flex",
  justifyContent: "center",
};
