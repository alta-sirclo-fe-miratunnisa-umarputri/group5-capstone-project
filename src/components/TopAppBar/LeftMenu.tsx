import { useState, MouseEvent } from "react";
import { Box, IconButton, Typography, Menu, MenuItem } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

import {
  desktopLeft,
  mobileIcon,
  mobileLeft,
  mobileLeftMenu,
  mobileMenu,
} from "./TopAppBar.style";
import { useNavigate } from "react-router-dom";
import SecondaryButton from "./SecondaryButton";
import Logo from "./Logo";

const employeePages = ["Beranda", "Direktori Aset"];
const adminPages = [
  "Beranda",
  "Direktori Aset",
  "Pengguna Aset",
  "Pengadaan Aset",
];
const managerPages = [
  "Beranda",
  "Permohonan Persetujuan",
  "Permohonan Pengadaan",
];

const LeftMenu = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const role: string = "admin";

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleClickPage = (page: string) => {
    if (page === "Home") {
      navigate("/");
      return;
    }
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
        {role === "employee" &&
          employeePages.map((page) => (
            <MenuItem key={page} onClick={() => handleClickPage(page)}>
              <Typography variant="subtitle2" sx={mobileMenu}>
                {page}
              </Typography>
            </MenuItem>
          ))}

        {role === "admin" &&
          adminPages.map((page) => (
            <MenuItem key={page} onClick={() => handleClickPage(page)}>
              <Typography variant="subtitle2" sx={mobileMenu}>
                {page}
              </Typography>
            </MenuItem>
          ))}

        {role === "manager" &&
          managerPages.map((page) => (
            <MenuItem key={page} onClick={() => handleClickPage(page)}>
              <Typography variant="subtitle2" sx={mobileMenu}>
                {page}
              </Typography>
            </MenuItem>
          ))}
      </Menu>
    </Box>
  );

  const desktop = (
    <Box sx={desktopLeft}>
      <Logo />

      {role === "employee" &&
        employeePages.map((page) => (
          <Box key={page}>
            <SecondaryButton label={page} />
          </Box>
        ))}

      {role === "admin" &&
        adminPages.map((page) => (
          <Box key={page}>
            <SecondaryButton label={page} />
          </Box>
        ))}

      {role === "manager" &&
        managerPages.map((page) => (
          <Box key={page}>
            <SecondaryButton label={page} />
          </Box>
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
