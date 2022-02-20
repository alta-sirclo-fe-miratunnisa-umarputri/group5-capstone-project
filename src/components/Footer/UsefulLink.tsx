import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { FooterLink } from "../../types/footer";

import { information } from "./Footer.style";

const UsefulLink = ({ path, label }: FooterLink) => {
  return (
    <Link to={path} style={{ color: "white", textDecoration: "none" }}>
      <Typography variant="caption" sx={information}>
        • {label}
      </Typography>
    </Link>
  );
};

export default UsefulLink;
