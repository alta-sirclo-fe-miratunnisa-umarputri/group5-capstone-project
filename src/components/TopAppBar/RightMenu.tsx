import { useState, MouseEvent } from "react";
import {
  Box,
  IconButton,
  Typography,
  Menu,
  Button,
  MenuItem,
  Stack,
} from "@mui/material";
import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded";

import {
  desktopButtonRight,
  desktopButtonRightPrimary,
  desktopRight,
  mobileIcon,
  mobileRight,
} from "./TopAppBar.style";

const settings = ["Profile", "Sign Out"];

const RightMenu = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
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
        {settings.map((setting) => (
          <MenuItem key={setting} onClick={handleCloseUserMenu}>
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );

  const desktop = (
    <Box sx={desktopRight}>
      <Stack spacing={1} direction="row">
        <Button size="small" sx={desktopButtonRight}>
          Profile
        </Button>
        <Button size="small" variant="contained" sx={desktopButtonRightPrimary}>
          Sign Out
        </Button>
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
