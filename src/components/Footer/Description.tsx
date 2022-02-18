import { Typography } from "@mui/material";
import { FooterDescription } from "../../types/footer";
import { information } from "./Footer.style";

const Description = ({ children }: FooterDescription) => {
  return (
    <Typography variant="caption" sx={information}>
      {children}
    </Typography>
  );
};

export default Description;
