import { MouseEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import DetailActivity from "./DetailActivity";

const displayWord = (word: string) => {
  if (word.length > 13) {
    const theWord = word.slice(0, 12);
    return `${theWord}...`;
  }

  return word;
};

const ActivityItemCard = ({ item }: any) => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [isOpenDetailActivity, setIsOpenDetailActivity] = useState(false);
  const navigate = useNavigate();

  const handleCloseDetailActivity = () => {
    setIsOpenDetailActivity(false);
    navigate("/beranda");
  };

  const handleOpenDetailActivity = () => {
    setAnchorElUser(null);
    setIsOpenDetailActivity(true);
  };

  const handleOpenActivityMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseActivityMenu = () => {
    setAnchorElUser(null);
  };

  const handleReturn = () => {
    console.log("ajukan pengembalian");
  };

  const handleReapply = () => {
    navigate("/pemeliharaan");
  };

  return (
    <>
      <Card sx={card}>
        <Grid container>
          <Grid item xs={3} sx={avatarGrid}>
            <Avatar src={item.photo} alt="Item" sx={avatar} />
          </Grid>

          <Grid item xs={9}>
            <CardContent>
              <Typography variant="body2" sx={dateFont}>
                {new Date(item.requestdate).toLocaleString()}
              </Typography>
              <Typography variant="h6" sx={itemFont}>
                {displayWord(item.assetname)}
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
                {/* TODO: SEHARUSNYA BEGINI */}
                {/* <Link
                  to={`/beranda/detail-aktivitas/${item.applicationid}`}
                  style={{ textDecoration: "none" }}
                ></Link> */}
                <Link
                  to={`/beranda/detail-aktivitas/2`}
                  style={{ textDecoration: "none" }}
                >
                  <MenuItem onClick={handleOpenDetailActivity}>
                    <Typography variant="subtitle2" sx={dotMenu}>
                      Lihat Detail
                    </Typography>
                  </MenuItem>
                </Link>

                {item.status === "inuse" && (
                  <MenuItem onClick={handleReturn}>
                    <Typography variant="subtitle2" sx={dotMenu}>
                      Ajukan Pengembalian
                    </Typography>
                  </MenuItem>
                )}

                {item.status === "decline" && (
                  <MenuItem onClick={handleReapply}>
                    <Typography variant="subtitle2" sx={dotMenu}>
                      Ajukan Peminjaman Ulang
                    </Typography>
                  </MenuItem>
                )}
              </Menu>
            </CardActions>
          </Grid>
        </Grid>
      </Card>

      <DetailActivity
        isOpen={isOpenDetailActivity}
        handleClose={handleCloseDetailActivity}
      />
    </>
  );
};

export default ActivityItemCard;
