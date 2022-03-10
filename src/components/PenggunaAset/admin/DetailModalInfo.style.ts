import { SxProps } from "@mui/material";
import { theBlack } from "../../../styles/color.styles";

const font: SxProps = { ...theBlack, fontFamily: "Poppins" };

export const labelFont: SxProps = { ...font, fontWeight: "bold" };

export const descriptionFont: SxProps = { ...font, fontWeight: "medium" };
