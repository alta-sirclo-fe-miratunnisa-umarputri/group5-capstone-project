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

import { bgwhite } from "../../styles/color.styles";

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
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: "flex", md: "none" },
      }}
    >
      <IconButton
        size="medium"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
      >
        <MenuRoundedIcon
          fontSize="medium"
          style={{ color: bgwhite.backgroundColor }}
        />
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
        sx={{
          display: { xs: "block", md: "none" },
        }}
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
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: "none", md: "flex" },
      }}
    >
      {pages.map((page) => (
        <Button
          key={page}
          onClick={handleCloseNavMenu}
          size="small"
          sx={{ color: "white", display: "block" }}
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
