// import { useParams } from "react-router-dom";
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
import DetailModalInfo from "./DetailModalInfo";
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
import { generalFont } from "../../../styles/font.style";
import { EMPLOYEE_STATUS } from "../../../constants";
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

const DetailModal = () => {
  // const { id } = useParams();
  const navigate = useNavigate();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => {
    setIsOpen(false);
    navigate("/pengguna-aset");
  };
  const [status, setStatus] = useState("toadmin");

  const handleCancellation = () => {
    navigate("/pengguna-aset");
  };

  const handleReturn = () => {
    console.log("ajukan pengembalian");
  };

  const handleReapply = () => {
    console.log("ajukan peminjaman ulang");
  };
  const askApproval = () => {};

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      fullScreen={fullScreen}
      fullWidth
    >
      <DialogTitle>
        <Box>
          <Typography variant="h5" sx={generalFont}>
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
            <DetailModalInfo label="Pemohon" description="Ratu" />
            <DetailModalInfo label="Manager" description="Handri Pengestiaji" />
            <DetailModalInfo label="Divisi" description="Tech" />
            <DetailModalInfo
              label="Status Pengajuan"
              description="Menunggu Persetujuan"
            />
          </Grid>

          <Grid item xs={7}>
            <DetailModalInfo
              label="Waktu Pengajuan"
              description={new Date().toLocaleString()}
            />
            <DetailModalInfo
              label="Waktu Pengembalian"
              description={new Date().toLocaleString()}
            />
            <DetailModalInfo label="Sisa Waktu" description="3 hari" />
            <DetailModalInfo
              label="Keterangan"
              description=" Curabitur venenatis enim quis tellus feugiat blandit. Vivamus
                libero libero, fringilla vel elementum at, viverra nec ante."
            />
          </Grid>
        </Grid>
        {status === "toadmin" && (
          <Grid container mt={2} sx={{ backroundColor: "#000000 " }}>
            <Grid item xs={5}>
              <DetailModalInfo
                label="Manager"
                description="Handri Pengestiaji"
              />
            </Grid>
            <Grid item xs={7}>
              <Button onClick={askApproval}>Minta Persetujuan</Button>
            </Grid>
          </Grid>
        )}

        <DialogActions>
          <Grid container mt={2}>
            <Grid item xs={4}></Grid>
            <Grid item xs={8} sx={buttonContainer}>
              {status === "toapproval" && (
                <>
                  <Button sx={cancellationButton} onClick={handleCancellation}>
                    Tolak
                  </Button>
                  <Button variant="contained" sx={backButton}>
                    Terima Permohonan
                  </Button>
                </>
              )}

              {status === "toreturn" && (
                <>
                  <Button sx={cancellationButton}>Kembali</Button>
                  <Button
                    variant="contained"
                    sx={backButton}
                    onClick={handleReturn}
                  >
                    Ajukan Pengembalian
                  </Button>
                </>
              )}
            </Grid>
            <Grid item></Grid>
          </Grid>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default DetailModal;
