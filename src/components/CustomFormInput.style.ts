import { SxProps, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

import { theBlack } from "../styles/color.styles";

export const container: SxProps = {
  display: "flex",
  flexDirection: "column",
  marginY: 2,
};

export const formLabel: SxProps = {
  ...theBlack,
  mb: 1,
  fontFamily: "Poppins",
  fontSize: "20px",
  fontWeight: "medium",
};

export const CustomTextField = styled(TextField)({
  input: theBlack.color,
  "& label.Mui-focused": theBlack,
  "& .MuiInput-underline:after": {
    borderBottomColor: theBlack.color,
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: theBlack.color,
    },
    "&:hover fieldset": {
      borderColor: theBlack.color,
    },
    "&.Mui-focused fieldset": {
      borderColor: theBlack.color,
    },
  },
});
