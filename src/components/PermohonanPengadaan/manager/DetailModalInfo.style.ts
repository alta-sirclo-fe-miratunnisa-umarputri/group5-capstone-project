import { SxProps } from "@mui/material";
import { primary } from "../../../styles/color.styles";

const font: SxProps = { ...primary, fontFamily: "Poppins" };

export const labelFont: SxProps = { ...font, fontWeight: "regular" };

export const descriptionFont: SxProps = { ...font, fontWeight: "medium" };
