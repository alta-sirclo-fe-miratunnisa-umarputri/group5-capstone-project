import { useState, MouseEvent } from "react";
import {
  Box,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Stack,
} from "@mui/material";
import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

import {
  desktopRight,
  mobileIcon,
  mobileMenu,
  mobileRight,
} from "./TopAppBar.style";
import { bgwhite } from "../../styles/color.styles";
import { useNavigate } from "react-router-dom";
import SecondaryButton from "./SecondaryButton";

const RightMenu = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleSignOut = () => {
    localStorage.clear();
    navigate("/");
  };

  const mobile = (
    <Box sx={mobileRight}>
      <IconButton onClick={handleOpenUserMenu}>
        <AccountBoxRoundedIcon fontSize="medium" style={mobileIcon} />
      </IconButton>

      <Menu
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem onClick={handleSignOut}>
          <Typography variant="subtitle2" sx={mobileMenu}>
            Sign Out
          </Typography>
        </MenuItem>
      </Menu>
    </Box>
  );

  const desktop = (
    <Box sx={desktopRight}>
      <Stack spacing={1} direction="row">
        <SecondaryButton label="Hi, User!" />

        <IconButton onClick={handleOpenUserMenu}>
          <AccountCircleRoundedIcon
            style={{ color: bgwhite.backgroundColor }}
          />
        </IconButton>

        <Menu
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          <MenuItem onClick={handleSignOut}>
            <Typography variant="subtitle2" sx={mobileMenu}>
              Sign Out
            </Typography>
          </MenuItem>
        </Menu>
      </Stack>
    </Box>
  );

  return (
    <>
      {mobile}
      {desktop}
    </>
  );
};

export default RightMenu;
