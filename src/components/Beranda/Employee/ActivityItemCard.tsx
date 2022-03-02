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
import { Link, useNavigate } from "react-router-dom";
import DetailActivity from "./DetailActivity";
import { EMPLOYEE_STATUS } from "../../../constants";

const displayWord = (word: string) => {
  if (word.length > 13) {
    const theWord = word.slice(0, 12);
    return `${theWord}...`;
  }

  return word;
};

const ActivityItemCard = ({ item }: any) => {
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [isOpenDetailActivity, setIsOpenDetailActivity] = useState(false);

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

  const handleCancellation = () => {
    console.log("ajukan pembatalan");
  };

  const handleReturn = () => {
    console.log("ajukan pengembalian");
  };

  const handleReapply = () => {
    console.log("ajukan peminjaman ulang");
  };

  const status = "Ditolak";

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
                {displayWord(item.itemname)}
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

                {status === EMPLOYEE_STATUS.WAITING_APROVAL && (
                  <MenuItem onClick={handleCancellation}>
                    <Typography variant="subtitle2" sx={dotMenu}>
                      Batalkan Pengajuan
                    </Typography>
                  </MenuItem>
                )}

                {status === EMPLOYEE_STATUS.APPROVED && (
                  <MenuItem onClick={handleReturn}>
                    <Typography variant="subtitle2" sx={dotMenu}>
                      Ajukan Pengembalian
                    </Typography>
                  </MenuItem>
                )}

                {status === EMPLOYEE_STATUS.REJECTED && (
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
