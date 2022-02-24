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
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import CustomFormInput from "../../CustomFormInput";
import CustomFormSelect from "../../CustomFormSelect";

const Application = () => {
  // dummy
  const categories = ["kategori1", "kategori2", "kategori3"];

  const [isOpen, setIsOpen] = useState(true);
  const [category, setCategory] = useState(categories[0]);

  const navigate = useNavigate();

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClose = () => {
    setIsOpen(false);
    navigate("/beranda");
  };

  const handleChangeCategory = (e: any) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("tersubmit");

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
            Peminjaman Aset {category}
          </Typography>
        </Box>
      </DialogTitle>

      <DialogContent>
        <Box component="form" onSubmit={handleSubmit}>
          <CustomFormSelect
            label="Kategori"
            desc="kategori"
            selections={categories}
            value={category}
            handleChange={handleChangeCategory}
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
            <Button onClick={handleClose}>Batal</Button>
            <Button type="submit">Ajukan Peminjaman</Button>
          </DialogActions>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default Application;
