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
import { leftButton, rightButton } from "./AddNewAsset.style";
import CustomFormSelect from "../../CustomFormSelect";

const AddNewAsset = () => {
  // dummy
  const categories = ["kategori1", "kategori2", "kategori3"];
  const [category, setCategory] = useState(categories[0]);
  const [isOpen, setIsOpen] = useState(true);

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
    console.log("tambahkan aset baru");

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
            Tambah Aset Baru
          </Typography>
        </Box>
      </DialogTitle>

      <DialogContent>
        <Box component="form" onSubmit={handleSubmit}>
          <CustomFormInput label="Gambar " type="file" desc="gambar" />
          <CustomFormSelect
            label="Kategori"
            desc="kategori"
            selections={categories}
            value={category}
            handleChange={handleChangeCategory}
          />
          <CustomFormInput
            label="Nama"
            type="text"
            desc="nama"
            placeholder="Laptop Asus"
          />
          <CustomFormInput
            label="Deskripsi"
            type="text"
            desc="deskripsi"
            placeholder="Deskripsikan barang yang akan ditambahkan"
          />
          <CustomFormInput
            label="Total"
            type="number"
            desc="total"
            placeholder="4"
          />
          <DialogActions>
            <Button sx={leftButton} onClick={handleClose}>
              Kembali
            </Button>
            <Button type="submit" variant="contained" sx={rightButton}>
              Tambahkan Aset
            </Button>
          </DialogActions>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default AddNewAsset;
