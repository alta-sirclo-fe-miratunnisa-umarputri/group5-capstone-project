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
import { useNavigate, useOutletContext } from "react-router-dom";
import CustomFormInput from "../../CustomFormInput";
import { backButton, cancellationButton } from "./DetailActivity.style";
import { useMutation } from "react-query";
import { capstoneAxios } from "../../../axios-instance";

const Procurement = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { setIsSuccess, setSuccessMessage } = useOutletContext<any>();

  const navigate = useNavigate();

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const { mutateAsync } = useMutation(async (newData: any) => {
    await capstoneAxios({
      method: "POST",
      url: "/procurements",
      data: newData,
      headers: { Authorization: `Bearer ${localStorage.getItem("token")!}` },
    });
  });

  const handleClose = () => {
    setIsOpen(false);
    navigate("/beranda");
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const employeeId = localStorage.getItem("id")!;

    setIsSuccess(false);

    await mutateAsync({
      employeeid: parseInt(employeeId),
      spesification: data.get("spec"),
      description: data.get("description"),
      assetName: data.get("name"),
    });

    setSuccessMessage("Berhasil mengajukan permohonan pengajuan aset baru");
    setIsSuccess(true);
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
            desc="name"
            placeholder="Laptop Asus"
          />
          <CustomFormInput
            label="Spesifikasi Kebutuhan"
            type="text"
            desc="spec"
            placeholder="Deskripsikan barang yang dibutuhkan"
          />
          <CustomFormInput
            label="Deskripsi"
            type="text"
            desc="description"
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
