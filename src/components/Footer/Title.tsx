import { Typography } from "@mui/material";

import { FooterTitle } from "../../types/footer";
import { title } from "./Footer.style";

const Title = ({ label }: FooterTitle) => {
  return (
    <Typography variant="subtitle1" gutterBottom sx={title}>
      {label}
    </Typography>
  );
};

export default Title;
