import { SxProps } from "@mui/material";
import { theGreen, theWhite } from "../../../styles/color.styles";

export const avatarContainer: SxProps = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

export const avatar: SxProps = {
  width: { xs: 100, sm: 210, md: 220 },
  height: { xs: 100, sm: 210, md: 220 },
};

const font: SxProps = { ...theGreen, fontFamily: "Poppins" };

export const categoryFont: SxProps = {
  ...font,
  fontWeight: "regular",
};

export const itemFont: SxProps = {
  ...font,
  fontWeight: "medium",
};

export const availabilityFont: SxProps = {
  ...font,
  fontWeight: "light",
  fontStyle: "italic",
};

export const buttonContainer: SxProps = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "end",
};

export const buttonContainerStart: SxProps = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "start",
};

const button = {
  textTransform: "none",
  fontFamily: "Poppins",
  fontWeight: "medium",
};

export const cancellationButton: SxProps = {
  ...theGreen,
  ...button,
  mx: 1,
};

export const backButton: SxProps = {
  textTransform: "none",
  fontFamily: "Poppins",
  fontWeight: "medium",
  ...theGreen,
  bgcolor: theWhite.color,
  "&:hover": { bgcolor: theWhite.color },
};

export const backButtonGreen: SxProps = {
  textTransform: "none",
  fontFamily: "Poppins",
  fontWeight: "medium",
  ...theWhite,
  bgcolor: theGreen.color,
  "&:hover": { bgcolor: theGreen.color },
};
