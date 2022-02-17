import { useState, MouseEvent } from "react";
import {
  Box,
  IconButton,
  Typography,
  Menu,
  Button,
  MenuItem,
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

import {
  desktopButton,
  desktopLeft,
  mobileIcon,
  mobileLeft,
  mobileLeftMenu,
} from "./TopAppBar.style";

const pages = ["Home", "Menu", "About", "Contact", "Search"];

const LeftMenu = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const mobile = (
    <Box sx={mobileLeft}>
      <IconButton
        size="medium"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
      >
        <MenuRoundedIcon fontSize="medium" style={mobileIcon} />
      </IconButton>

      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={mobileLeftMenu}
      >
        {pages.map((page) => (
          <MenuItem key={page} onClick={handleCloseNavMenu}>
            <Typography textAlign="center">{page}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );

  const desktop = (
    <Box sx={desktopLeft}>
      {pages.map((page) => (
        <Button
          key={page}
          onClick={handleCloseNavMenu}
          size="small"
          sx={desktopButton}
        >
          {page}
        </Button>
      ))}
    </Box>
  );

  return (
    <>
      {mobile}
      {desktop}
    </>
  );
};

export default LeftMenu;
