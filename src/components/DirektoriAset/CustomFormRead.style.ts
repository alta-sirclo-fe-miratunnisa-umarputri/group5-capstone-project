import { SxProps, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

import { theBlack } from "../../styles/color.styles";

export const container: SxProps = {
  display: "flex",
  flexDirection: "column",
  marginY: 2,
};

export const formLabel: SxProps = {
  color: theBlack.color,
  mb: 1,
  fontFamily: "Poppins",
  fontSize: "14px",
  fontWeight: "medium",
};

export const CustomTextField = styled(TextField)({
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
