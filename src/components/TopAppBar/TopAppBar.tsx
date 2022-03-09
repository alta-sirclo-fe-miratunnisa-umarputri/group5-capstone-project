import { AppBar, Toolbar, Container } from "@mui/material";
import { theWhite } from "../../styles/color.styles";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";

const TopAppBar = () => {
  return (
    <AppBar position="sticky" color="inherit">
      <Container maxWidth="xl" sx={theWhite}>
        <Toolbar disableGutters={true} variant="regular">
          <LeftMenu />
          <RightMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default TopAppBar;
