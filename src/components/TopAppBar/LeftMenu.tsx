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
import { ROLE } from "../../constants";

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

  const role = localStorage.getItem("role")!;

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

  const getPages = (view: string) => {
    let pages;
    if (role === ROLE.EMPLOYEE) {
      pages = employeePages;
    } else if (role === ROLE.ADMIN) {
      pages = adminPages;
    } else {
      pages = managerPages;
    }

    if (view === "desktop") {
      return pages.map((page) => (
        <Box key={page}>
          <SecondaryButton label={page} />
        </Box>
      ));
    }

    return pages.map((page) => (
      <MenuItem key={page} onClick={() => handleClickPage(page)}>
        <Typography variant="subtitle2" sx={mobileMenu}>
          {page}
        </Typography>
      </MenuItem>
    ));
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
        {getPages("mobile")}
      </Menu>
    </Box>
  );

  const desktop = (
    <Box sx={desktopLeft}>
      <Logo />
      {getPages("desktop")}
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
