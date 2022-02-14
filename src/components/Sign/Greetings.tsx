import { Typography } from "@mui/material";

import { SignGreetings } from "../../types/sign";
import { titleAndSubtitle } from "./Sign.style";

const Greetings = ({ title, subtitle }: SignGreetings) => {
  return (
    <>
      <Typography variant="h3" sx={titleAndSubtitle}>
        {title}
      </Typography>
      <Typography variant="h6" sx={titleAndSubtitle}>
        {subtitle}
      </Typography>
    </>
  );
};

export default Greetings;
