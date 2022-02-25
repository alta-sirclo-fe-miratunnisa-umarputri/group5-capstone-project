import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
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
import CustomFormInput from "../../CustomFormInput";
import { leftButton, rightButton } from "./AddNewAsset.style";
import CustomFormSelect from "../../CustomFormSelect";

const AssignAsset = () => {
  // dummy
  const categories = ["kategori1", "kategori2", "kategori3"];
  const assets = ["lenovo", "asus", "acer"];
  const employees = ["ratu", "jemi", "eldy", "najib"];

  const [category, setCategory] = useState(categories[0]);
  const [asset, setAsset] = useState(assets[0]);
  const [employee, setEmployee] = useState(employees[0]);
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

  const handleChangeAsset = (e: any) => {
    setAsset(e.target.value);
  };

  const handleChangeEmployee = (e: any) => {
    setEmployee(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // log data
    const data = new FormData(e.currentTarget);
    console.log(data.get("date"));

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
            Tambah Aset Baru {employee} {asset} {category}
          </Typography>
        </Box>
      </DialogTitle>

      <DialogContent>
        <Box component="form" onSubmit={handleSubmit}>
          <CustomFormSelect
            label="Kategori Aset"
            desc="kategori-aset"
            selections={categories}
            value={category}
            handleChange={handleChangeCategory}
          />
          <CustomFormSelect
            label="Nama Aset"
            desc="nama-aset"
            selections={assets}
            value={asset}
            handleChange={handleChangeAsset}
          />
          <CustomFormSelect
            label="Karyawan"
            desc="karyawan"
            selections={employees}
            value={employee}
            handleChange={handleChangeEmployee}
          />

          <CustomFormInput
            label="Tanggal Pengembalian"
            type="date"
            desc="date"
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

export default AssignAsset;
