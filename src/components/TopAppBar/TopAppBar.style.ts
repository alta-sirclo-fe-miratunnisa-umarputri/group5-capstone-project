import { SxProps } from "@mui/material";
import { bgwhite, primary } from "../../styles/color.styles";

const mobile = {
  display: {
    xs: "flex",
    md: "none",
  },
};

export const mobileLeft: SxProps = { ...mobile, flexGrow: 1 };

export const mobileRight: SxProps = { ...mobile, flexGrow: 0 };

export const mobileIcon = { color: bgwhite.backgroundColor };

export const mobileLeftMenu: SxProps = {
  display: { xs: "block", md: "none" },
};

export const mobileMenu: SxProps = {
  ...primary,
  textAlign: "center",
  fontFamily: "Poppins",
  fontWeight: "medium",
};

const desktop = { display: { xs: "none", md: "flex" } };

export const desktopLeft: SxProps = { ...desktop, flexGrow: 1 };

export const desktopRight: SxProps = { ...desktop, flexGrow: 0 };
