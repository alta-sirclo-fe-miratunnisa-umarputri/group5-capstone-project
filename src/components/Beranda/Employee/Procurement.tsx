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
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomFormInput from "../../CustomFormInput";
import { backButton, cancellationButton } from "./DetailActivity.style";

const Procurement = () => {
  const [isOpen, setIsOpen] = useState(true);

  const navigate = useNavigate();

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClose = () => {
    setIsOpen(false);
    navigate("/beranda");
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("tersubmit procurement");

    setIsOpen(false);
    navigate("/beranda");
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
        <Box component="form" onSubmit={handleSubmit}>
          <CustomFormInput
            label="Nama Aset"
            type="text"
            desc="nama-aset"
            placeholder="Laptop Asus"
          />
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
            <Button sx={cancellationButton} onClick={handleClose}>
              Batal
            </Button>
            <Button type="submit" variant="contained" sx={backButton}>
              Ajukan Aset Baru
            </Button>
          </DialogActions>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default Procurement;
