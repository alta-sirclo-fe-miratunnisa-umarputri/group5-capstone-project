import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
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

const CardAsset = ({ assets }: any) => {
  return (
    <Masonry columns={{ xs: 1, sm: 3, md: 5 }} spacing={2} sx={masonry}>
      {assets.map((asset: any) => (
        <Box key={asset.id}>
          <Card sx={card}>
            <CardMedia component="img" image={asset.gambar} alt="random" />

            <CardContent sx={cardContent}>
              <Typography variant="caption" sx={category}>
                {asset.kategori}
              </Typography>
              <Typography variant="h6" sx={title}>
                {asset.judul}
              </Typography>
              <Typography variant="body2" sx={description}>
                {asset.deskripsi}
              </Typography>

              <Grid container mt={2} mb={0} sx={aboveButton}>
                <Grid item xs={6} sx={groupAvatar}>
                  <Avatar
                    alt="A"
                    src="https://source.unsplash.com/random"
                    sx={avatar}
                  />
                  <Avatar
                    alt="A"
                    src="https://source.unsplash.com/random"
                    sx={avatar}
                  />
                  <Avatar alt="A" sx={avatar}>
                    <Typography variant="caption" sx={avatarText}>
                      {asset.pengguna.length - 2}+
                    </Typography>
                  </Avatar>
                </Grid>

                <Grid item xs={6} textAlign="end">
                  <Typography sx={availability}>
                    {asset.tersedia} tersedia
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>

            <CardActions sx={cardActions}>
              <Link
                to={`/direktori-aset/${asset.id}`}
                style={{ textDecoration: "none", width: "100%" }}
              >
                <Button variant="contained" size="small" fullWidth sx={button}>
                  Lihat Detail
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Box>
      ))}
    </Masonry>
  );
};

export default CardAsset;
