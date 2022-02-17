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
  desktopRight,
  mobileIcon,
  mobileRight,
} from "./TopAppBar.style";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "./PrimaryButton";

const settings = ["Profile", "Sign Out"];

const RightMenu = () => {
  const [isAuth, setIsAuth] = useState(true);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleClickProfile = () => {
    navigate("profile");
  };

  const handleClickSignOut = () => {
    console.log("sign out desktop");
  };

  const handleClickSetting = (setting: string) => {
    if (setting === "Profile") {
      handleClickProfile();
      return;
    }

    if (setting === "Sign Out") {
      handleClickSignOut();
      return;
    }
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
          <MenuItem key={setting} onClick={() => handleClickSetting(setting)}>
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );

  const desktop = (
    <Box sx={desktopRight}>
      <Stack spacing={1} direction="row">
        <Button
          size="small"
          sx={desktopButtonRight}
          onClick={handleClickProfile}
        >
          Profile
        </Button>

        {isAuth ? (
          <PrimaryButton label="Sign Out" loading={false} />
        ) : (
          <PrimaryButton label="Sign In" loading={false} />
        )}
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
