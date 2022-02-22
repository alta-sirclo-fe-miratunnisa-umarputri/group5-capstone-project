import { SxProps, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

import { primary, tertiary } from "../../styles/color.styles";

export const container: SxProps = {
  display: "flex",
  flexDirection: "column",
  marginY: 2,
};

export const formLabel: SxProps = {
  ...primary,
  mb: 1,
  fontFamily: "Poppins",
  fontSize: "14px",
  fontWeight: "medium",
};

export const CustomTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: tertiary.color,
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: tertiary.color,
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: tertiary.color,
    },
    "&:hover fieldset": {
      borderColor: tertiary.color,
    },
    "&.Mui-focused fieldset": {
      borderColor: tertiary.color,
    },
  },
});
