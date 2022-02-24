import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Grid,
  IconButton,
  Box,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";

import {
  avatar,
  avatarGrid,
  bottomCont,
  card,
  cardActions,
  dateFont,
  dot,
  dotMenu,
  itemFont,
  statusBox,
  statusFont,
  statusGrid,
} from "./ActivityCarousel.style";
import { MouseEvent, useState } from "react";

const displayWord = (word: string) => {
  if (word.length > 13) {
    const theWord = word.slice(0, 12);
    return `${theWord}...`;
  }

  return word;
};

const activityMenus = ["Lihat Detail", "Batalkan Pengajuan"];

const ActivityItemCard = ({ item }: any) => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenActivityMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseActivityMenu = () => {
    setAnchorElUser(null);
  };

  const handleClickMenu = (menu: string) => {
    if (menu === "Lihat Detail") {
      console.log("mau lihat detail");
    } else {
      console.log("ajukan pengembalian");
    }
  };

  return (
    <Card sx={card}>
      <Grid container>
        <Grid item xs={3} sx={avatarGrid}>
          <Avatar
            src="https://source.unsplash.com/random"
            alt="Item"
            sx={avatar}
          />
        </Grid>

        <Grid item xs={9}>
          <CardContent>
            <Typography variant="body2" sx={dateFont}>
              {item.date.toLocaleString()}
            </Typography>
            <Typography variant="h6" sx={itemFont}>
              {displayWord(item.item)}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>

      <Grid container sx={bottomCont}>
        <Grid item xs={9} sx={statusGrid}>
          <Box sx={statusBox}>
            <Typography sx={statusFont}>{item.status}</Typography>
          </Box>
        </Grid>

        <Grid item xs={3} sx={statusGrid}>
          <CardActions sx={cardActions}>
            <IconButton edge="end" onClick={handleOpenActivityMenu}>
              <MoreHorizRoundedIcon fontSize="medium" sx={dot} />
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
              onClose={handleCloseActivityMenu}
            >
              {activityMenus.map((menu) => (
                <MenuItem key={menu} onClick={() => handleClickMenu(menu)}>
                  <Typography variant="subtitle2" sx={dotMenu}>
                    {menu}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ActivityItemCard;
