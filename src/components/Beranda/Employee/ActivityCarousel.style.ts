import { SxProps } from "@mui/material";
import { bgwhite, primary, quaternary } from "../../../styles/color.styles";

export const titleCarousel: SxProps = {
  fontFamily: "Poppins",
  fontWeight: "medium",
};

export const activityCarousel: SxProps = {
  ...bgwhite,
  borderRadius: "5px",
};

export const outerContItem: SxProps = {
  height: 190,
  display: "flex",
  alignItems: "center",
};

export const card: SxProps = {
  ...quaternary,
  height: 160,
  marginX: 0.5,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

export const avatarGrid: SxProps = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "end",
};

export const avatar: SxProps = { width: 56, height: 56 };

export const dateFont: SxProps = { fontFamily: "Poppins", fontWeight: "light" };

export const itemFont: SxProps = {
  fontFamily: "Poppins",
  fontWeight: "medium",
};

export const bottomCont: SxProps = { bgcolor: primary.color };

export const statusGrid: SxProps = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  px: 1,
};

export const statusBox: SxProps = { ...bgwhite, px: 1, borderRadius: "10px" };

export const statusFont: SxProps = {
  fontFamily: "Poppins",
  fontWeight: "regular",
  fontSize: "10px",
  fontStyle: "italic",
};

export const cardActions: SxProps = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
};

export const dot: SxProps = { color: bgwhite.backgroundColor };

export const dotMenu: SxProps = {
  ...primary,
  textAlign: "center",
  fontFamily: "Poppins",
  fontWeight: "medium",
};
