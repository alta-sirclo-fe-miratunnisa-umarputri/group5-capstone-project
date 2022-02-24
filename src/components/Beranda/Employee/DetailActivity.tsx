import { useParams } from "react-router-dom";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  Box,
  useMediaQuery,
  useTheme,
  Grid,
  Avatar,
  DialogActions,
} from "@mui/material";

import { DetailAndEmployeeModal } from "../../../types/direktori-aset";
import { title } from "../../DirektoriAset/DetailAndUser.style";
import { primary } from "../../../styles/color.styles";
import DetailActivityInfo from "./DetailActivityInfo";
import {
  availabilityFont,
  avatar,
  avatarContainer,
  backButton,
  buttonContainer,
  cancellationButton,
  categoryFont,
  itemFont,
} from "./DetailActivity.style";

const DetailActivity = ({ isOpen, handleClose }: DetailAndEmployeeModal) => {
  // const { id } = useParams();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleCancellation = () => {
    console.log("batalkan pengajuan");
  };

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      fullScreen={fullScreen}
      fullWidth
    >
      <DialogTitle>
        <Box>
          <Typography variant="h5" sx={title}>
            Detail Permohonan
          </Typography>
        </Box>
      </DialogTitle>

      <DialogContent>
        <Grid container>
          <Grid item xs={5} sx={avatarContainer}>
            <Avatar
              src="https://source.unsplash.com/random"
              alt="Item"
              sx={avatar}
            />
          </Grid>

          <Grid item xs={7} pl={3}>
            <Typography variant="body2" gutterBottom sx={categoryFont}>
              Kipas Angin
            </Typography>
            <Typography variant="h5" gutterBottom sx={itemFont}>
              Kipas Angin Maspion Shgasdasdhj Ssvjavadsjak
            </Typography>
            <Typography variant="caption" sx={availabilityFont}>
              16 tersedia
            </Typography>
          </Grid>
        </Grid>

        <Grid container mt={2}>
          <Grid item xs={5}>
            <DetailActivityInfo label="Pemohon" description="Ratu" />
            <DetailActivityInfo
              label="Status Pengajuan"
              description="Disetujui"
            />
          </Grid>

          <Grid item xs={7}>
            <DetailActivityInfo
              label="Waktu Pengajuan"
              description={new Date().toLocaleString()}
            />
            <DetailActivityInfo
              label="Keterangan"
              description=" Curabitur venenatis enim quis tellus feugiat blandit. Vivamus
              libero libero, fringilla vel elementum at, viverra nec ante."
            />
          </Grid>
        </Grid>

        <DialogActions>
          <Grid container mt={2}>
            <Grid item xs={4}></Grid>
            <Grid item xs={8} sx={buttonContainer}>
              <Button sx={cancellationButton} onClick={handleCancellation}>
                Batalkan Pengajuan
              </Button>
              <Button
                variant="contained"
                sx={backButton}
                onClick={() => handleClose(true)}
              >
                Kembali
              </Button>
            </Grid>
            <Grid item></Grid>
          </Grid>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default DetailActivity;
