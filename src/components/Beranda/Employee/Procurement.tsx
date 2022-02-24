import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  Box,
  useMediaQuery,
  useTheme,
  DialogActions,
  Button,
} from "@mui/material";

import { generalFont } from "../../../styles/font.style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomFormInput from "../../CustomFormInput";

const Procurement = () => {
  const [isOpen, setIsOpen] = useState(true);

  const navigate = useNavigate();

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClose = () => {
    setIsOpen(false);
    navigate("/beranda");
  };

  const handleApplication = () => {
    console.log("ajukan aset baru");
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
          <Typography variant="h5" sx={generalFont}>
            Pengajuan Aset Baru
          </Typography>
        </Box>
      </DialogTitle>

      <DialogContent>
        <CustomFormInput
          label="Spesifikasi Kebutuhan"
          type="text"
          desc="spesifikasi-kebutuhan"
          placeholder="Deskripsikan barang yang dibutuhkan"
        />
        <CustomFormInput
          label="Keterangan"
          type="text"
          desc="keterangan"
          placeholder="Deskripsikan tujuan penggunaan barang yang akan dipinjam"
        />
        <DialogActions>
          <Button onClick={handleClose}>Batal</Button>
          <Button onClick={handleApplication}>Ajukan Aset Baru</Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default Procurement;
