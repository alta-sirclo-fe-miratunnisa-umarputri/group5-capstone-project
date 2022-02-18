import { AppBar, Toolbar, Container } from "@mui/material";
import { secondary } from "../../styles/color.styles";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";

const TopAppBar = () => {
  return (
    <AppBar position="sticky" color="transparent">
      <Container maxWidth="xl" sx={{ bgcolor: secondary.color }}>
        <Toolbar disableGutters={true} variant="dense">
          <LeftMenu />
          <RightMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default TopAppBar;
