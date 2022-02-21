import { SxProps } from "@mui/material";
import { primary, tertiary, bgwhite } from "../../styles/color.styles";

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
  ...primary,
  fontWeight: "light",
  fontFamily: "Poppins",
};

export const title: SxProps = {
  ...primary,
  fontWeight: "bold",
  fontFamily: "Poppins",
};

export const description: SxProps = {
  ...primary,
  fontWeight: "regular",
  fontFamily: "Poppins",
};

export const availability: SxProps = {
  ...primary,
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
  fontWeight: "bold",
  fontFamily: "Poppins",
  color: bgwhite.backgroundColor,
  textTransform: "none",
  backgroundColor: tertiary.color,
  "&:hover": {
    backgroundColor: tertiary.color,
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
