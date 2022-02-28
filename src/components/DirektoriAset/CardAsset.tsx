import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import { Masonry } from "@mui/lab";

import {
  aboveButton,
  availability,
  avatar,
  avatarText,
  button,
  card,
  cardActions,
  cardContent,
  category,
  description,
  groupAvatar,
  masonry,
  title,
} from "./CardAsset.style";
import { ROLE } from "../../constants";
import DetailAssetEmployee from "./DetailAssetEmployee";
import UserList from "./UserList";
import DetailItemAdmin from "./DetailItemAdmin";

const CardAsset = ({ assets, role }: any) => {
  const [isOpenDetailItem, setIsOpenDetailItem] = useState(false);
  const [isOpenDetailAsset, setIsOpenDetailAsset] = useState(false);
  const [isOpenUser, setIsOpenUser] = useState(false);
  const [itemId, setItemId] = useState(0);
  const navigate = useNavigate();

  const handleCloseDetailItem = () => {
    setIsOpenDetailItem(false);
    navigate("/direktori-aset");
  };

  const handleOpenDetailItem = () => {
    setIsOpenDetailItem(true);
  };

  const handleCloseDetailAsset = () => {
    setIsOpenDetailAsset(false);
    navigate("/direktori-aset");
  };

  const handleOpenDetailAsset = () => {
    setIsOpenDetailAsset(true);
  };

  const handleOpenUser = (id: number) => {
    setItemId(id);
    setIsOpenUser(true);
  };

  const handleCloseUser = () => {
    setIsOpenUser(false);
    navigate("/direktori-aset");
  };

  return (
    <>
      {!assets && <Typography variant="subtitle1">Tidak ditemukan</Typography>}
      {assets && (
        <>
          <Masonry columns={{ xs: 1, sm: 3, md: 5 }} spacing={2} sx={masonry}>
            {assets &&
              assets.map((asset: any) => (
                <Box key={asset.id}>
                  <Card sx={card}>
                    <CardMedia
                      component="img"
                      image={asset.picture}
                      alt="random"
                    />

                    <CardContent sx={cardContent}>
                      <Typography variant="caption" sx={category}>
                        {asset.category}
                      </Typography>
                      <Typography variant="h6" sx={title}>
                        {asset.name}
                      </Typography>
                      {/* <Typography variant="body2" sx={description}>
                  {asset.deskripsi}
                </Typography> */}
                      <Typography sx={availability} textAlign="end">
                        {asset.availableStatus}
                      </Typography>
                    </CardContent>

                    <CardActions sx={cardActions}>
                      {role === ROLE.ADMIN && (
                        <Grid container spacing={1}>
                          <Grid item xs={12} lg={6}>
                            <Link
                              to={`/direktori-aset/pengguna`}
                              style={{ textDecoration: "none", width: "100%" }}
                            >
                              <Button
                                variant="contained"
                                size="small"
                                fullWidth
                                sx={button}
                                onClick={() => handleOpenUser(asset.id)}
                              >
                                Pengguna
                              </Button>
                            </Link>
                          </Grid>

                          <Grid item xs={12} lg={6}>
                            <Link
                              to={`/direktori-aset/admin/${asset.id}`}
                              style={{ textDecoration: "none", width: "100%" }}
                            >
                              <Button
                                variant="contained"
                                size="small"
                                fullWidth
                                sx={button}
                                onClick={handleOpenDetailItem}
                              >
                                Detail
                              </Button>
                            </Link>
                          </Grid>
                        </Grid>
                      )}

                      {role === ROLE.EMPLOYEE && (
                        <Link
                          to={`/direktori-aset/employee/${asset.id}`}
                          style={{ textDecoration: "none", width: "100%" }}
                        >
                          <Button
                            variant="contained"
                            size="small"
                            fullWidth
                            sx={button}
                            onClick={handleOpenDetailAsset}
                          >
                            Detail
                          </Button>
                        </Link>
                      )}
                    </CardActions>
                  </Card>
                </Box>
              ))}
          </Masonry>

          <DetailItemAdmin
            isOpen={isOpenDetailItem}
            handleClose={handleCloseDetailItem}
          />
          <DetailAssetEmployee
            isOpen={isOpenDetailAsset}
            handleClose={handleCloseDetailAsset}
          />
          <UserList
            isOpen={isOpenUser}
            handleClose={handleCloseUser}
            id={itemId}
          />
        </>
      )}
    </>
  );
};

export default CardAsset;
