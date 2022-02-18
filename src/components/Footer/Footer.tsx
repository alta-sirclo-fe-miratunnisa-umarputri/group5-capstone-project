import { Grid } from "@mui/material";

import { tertiary } from "../../styles/color.styles";
import { wrapper } from "./Footer.style";
import Title from "./Title";
import Description from "./Description";
import UsefulLink from "./UsefulLink";
import facebook from "../../assets/facebook2.svg";
import twitter from "../../assets/twitter2.svg";
import instagram from "../../assets/instagram2.svg";
import WhereToFindUs from "./WhereToFindUs";

const Footer = () => {
  return (
    <Grid container sx={{ bgcolor: tertiary.color }}>
      <Grid item xs={12} md={6} sx={wrapper}>
        <Title label="What is Avengers?" />
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in
          libero at metus interdum tempus. Aliquam ex sapien, ultrices vitae
          venenatis in, volutpat sit amet velit. Proin non odio tellus.
          Suspendisse elementum, enim sagittis imperdiet ultricies, risus ipsum
          pellentesque tortor, a imperdiet orci turpis at metus. Integer
          condimentum nunc non diam vestibulum malesuada. Nulla et leo ut libero
          bibendum bibendum eget bibendum sapien. Fusce malesuada nisl quis
          risus varius interdum.
        </Description>
      </Grid>

      <Grid item xs={12} md={3} sx={wrapper}>
        <Title label="Useful Links" />
        <UsefulLink path="/" label="Home" />
        <UsefulLink path="profile" label="Profile" />
        <UsefulLink path="#" label="Contact" />
      </Grid>

      <Grid item xs={12} md={3} sx={wrapper}>
        <Title label="Where to Find Us:" />
        <WhereToFindUs
          link="https://www.facebook.com/avengers/"
          icon={facebook}
          label="@avengers"
        />
        <WhereToFindUs
          link="https://twitter.com/avengers"
          icon={twitter}
          label="@Avengers"
        />
        <WhereToFindUs
          link="https://www.instagram.com/avengers/?hl=en"
          icon={instagram}
          label="@avengers"
        />
      </Grid>
    </Grid>
  );
};

export default Footer;
