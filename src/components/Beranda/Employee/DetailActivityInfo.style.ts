import { SxProps } from "@mui/material";
import { theBlack } from "../../../styles/color.styles";

const font: SxProps = { color: theBlack.color, fontFamily: "Poppins" };

export const labelFont: SxProps = { ...font, fontWeight: "regular" };

export const descriptionFont: SxProps = { ...font, fontWeight: "medium" };
