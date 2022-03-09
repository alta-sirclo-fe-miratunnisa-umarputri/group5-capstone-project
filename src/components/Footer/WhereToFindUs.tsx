import { Link as LinkMUI, Typography } from "@mui/material";

import { bgwhite } from "../../styles/color.styles";
import { FooterSocialMedia } from "../../types/footer";
import { information } from "./Footer.style";

const WhereToFindUs = ({ link, icon, label }: FooterSocialMedia) => {
  return (
    <LinkMUI
      href={link}
      target="_blank"
      rel="noopener"
      underline="none"
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        pb: 1,
      }}
    >
      <img src={icon} alt="Icon" width={30} />
      <Typography
        variant="caption"
        sx={{ ...information, color: bgwhite.backgroundColor, px: 1 }}
      >
        {label}
      </Typography>
    </LinkMUI>
  );
};

export default WhereToFindUs;
