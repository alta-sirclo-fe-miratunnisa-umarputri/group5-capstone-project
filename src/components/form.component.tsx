import { SxProps, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { primary, secondary, tertiary } from "../styles/colorStyle.styles";

export const labelForm: SxProps = { ...primary, fontWeight: "bold" };

export const button: SxProps = {
  marginY: 2,
  fontWeight: "bold",
  background: "#D35E35",
  "&:hover": {
    backgroundColor: "#D35E35",
  },
};

export const CustomTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: `${tertiary}`,
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: `${tertiary}`,
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: `${primary}`,
    },
    "&:hover fieldset": {
      borderColor: `${tertiary}`,
    },
    "&.Mui-focused fieldset": {
      borderColor: `${tertiary}`,
    },
  },
});
