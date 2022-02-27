import { FormEvent, useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
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
import { LoadingButton } from "@mui/lab";

import CustomFormInput from "../../CustomFormInput";
import CustomFormSelect from "../../CustomFormSelect";
import Error from "../../Alert/Error";

import { generalFont } from "../../../styles/font.style";
import { leftButton, rightButton } from "./AddNewAsset.style";
import { ASSET_CATEGORIES } from "../../../constants";
import { capstoneAxios } from "../../../axios-instance";
import Success from "../../Alert/Success";

const AddNewAsset = () => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [category, setCategory] = useState(ASSET_CATEGORIES[0]);
  const [isOpen, setIsOpen] = useState(true);

  const navigate = useNavigate();

  const { isLoading, isError, error, mutateAsync, isSuccess } = useMutation(
    async (newAsset: any) => {
      const { data } = await capstoneAxios({
        method: "POST",
        data: newAsset,
        url: "/assets",
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return data;
    }
  );

  const handleClose = () => {
    setIsOpen(false);
    navigate("/beranda");
  };

  const handleChangeCategory = (e: any) => {
    setCategory(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const categoryId = ASSET_CATEGORIES.indexOf(category) + 1;
    const data = new FormData(e.currentTarget);

    data.delete("kategori");
    data.append("categoryid", String(categoryId));

    await mutateAsync(data);

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
      {isError && (
        <Error message={(error as AxiosError).response!.data!.message!} />
      )}

      {isSuccess && <Success message="Berhasil menambahkan aset baru" />}

      <DialogTitle>
        <Box>
          <Typography variant="h5" sx={generalFont}>
            Tambah Aset Baru
          </Typography>
        </Box>
      </DialogTitle>

      <DialogContent>
        <Box component="form" onSubmit={handleSubmit}>
          <CustomFormInput label="Gambar " type="file" desc="picture" />
          <CustomFormSelect
            label="Kategori"
            desc="kategori"
            selections={ASSET_CATEGORIES}
            value={category}
            handleChange={handleChangeCategory}
          />
          <CustomFormInput
            label="Nama"
            type="text"
            desc="name"
            placeholder="Laptop Asus"
          />
          <CustomFormInput
            label="Deskripsi"
            type="text"
            desc="description"
            placeholder="Deskripsikan barang yang akan ditambahkan"
          />
          <CustomFormInput
            label="Total"
            type="number"
            desc="quantity"
            placeholder="4"
          />
          <DialogActions>
            <Button sx={leftButton} onClick={handleClose}>
              Kembali
            </Button>
            <LoadingButton
              loading={isLoading}
              loadingIndicator="Loading..."
              variant="contained"
              type="submit"
              size="medium"
              sx={rightButton}
            >
              Tambahkan Aset
            </LoadingButton>
          </DialogActions>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default AddNewAsset;
