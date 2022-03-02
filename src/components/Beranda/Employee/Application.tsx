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
import { backButton, cancellationButton } from "./DetailActivity.style";
import { useMutation, useQuery } from "react-query";
import { capstoneAxios } from "../../../axios-instance";
import Loading from "../../Loading";
import Error from "../../Alert/Error";
import { AxiosError } from "axios";

const Application = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [asset, setAsset] = useState("");

  const navigate = useNavigate();

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const { isLoading, isError, error, data } = useQuery(
    "assignAssetData",
    async () => {
      const { data } = await capstoneAxios({
        method: "GET",
        url: "/assets",
        params: { status: "tersedia" },
      });

      return data;
    },
    { retry: 0 }
  );

  const { mutateAsync } = useMutation(async (newData: any) => {
    await capstoneAxios({
      method: "POST",
      url: "/applications",
      data: newData,
      headers: { Authorization: `Bearer ${localStorage.getItem("token")!}` },
    });
  });

  const handleClose = () => {
    setIsOpen(false);
    navigate("/beranda");
  };

  const handleChangeAsset = (e: any) => {
    setAsset(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const asset = data.data.assets.filter(
      (el: any) => el.name === formData.get("name")
    );
    const employeeId = localStorage.getItem("id")!;

    await mutateAsync({
      employeeid: parseInt(employeeId),
      assetid: (asset[0] as any).id,
      specification: formData.get("spec"),
      description: formData.get("description"),
      returndate: formData.get("date"),
    });

    setIsOpen(false);
    navigate("/beranda");
  };

  if (isError) {
    return <Error message={(error as AxiosError).response!.data!.message!} />;
  }

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
            Peminjaman Aset
          </Typography>
        </Box>
      </DialogTitle>

      {isLoading ? (
        <Loading />
      ) : (
        <DialogContent>
          <Box component="form" onSubmit={handleSubmit}>
            <CustomFormSelect
              label="Nama Aset"
              desc="name"
              selections={data.data.assets.map((el: any) => el.name)}
              value={asset}
              handleChange={handleChangeAsset}
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
            <CustomFormInput
              label="Tanggal Pengembalian"
              type="date"
              desc="date"
            />
            <DialogActions>
              <Button sx={cancellationButton} onClick={handleClose}>
                Batal
              </Button>
              <Button type="submit" variant="contained" sx={backButton}>
                Ajukan Peminjaman
              </Button>
            </DialogActions>
          </Box>
        </DialogContent>
      )}
    </Dialog>
  );
};

export default Application;
