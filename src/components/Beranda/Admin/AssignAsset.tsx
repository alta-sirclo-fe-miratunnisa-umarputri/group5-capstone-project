import { FormEvent, useState } from "react";
import { useMutation, useQuery } from "react-query";
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
import { AxiosError } from "axios";

import CustomFormInput from "../../CustomFormInput";
import CustomFormSelect from "../../CustomFormSelect";
import Error from "../../Alert/Error";

import { generalFont } from "../../../styles/font.style";
import { leftButton, rightButton } from "./AddNewAsset.style";
import { capstoneAxios } from "../../../axios-instance";
import Loading from "../../Loading";

const AssignAsset = () => {
  const [asset, setAsset] = useState("");
  const [employee, setEmployee] = useState("");
  const [assets, setAssets] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [isOpen, setIsOpen] = useState(true);

  const navigate = useNavigate();

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const { isLoading, isError, error } = useQuery(
    "assignAssetData",
    async () => {
      const { data: employees } = await capstoneAxios({
        method: "GET",
        url: "/employees",
      });

      const { data: assets } = await capstoneAxios({
        method: "GET",
        url: "/assets",
        params: { status: "tersedia" },
      });

      setEmployees(employees.data);
      setAssets(assets.data.assets);
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

  const handleChangeEmployee = (e: any) => {
    setEmployee(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const asset = assets.filter((el: any) => el.name === data.get("nama-aset"));
    const employee = employees.filter(
      (el: any) => el.name === data.get("karyawan")
    );

    await mutateAsync({
      employeeid: (employee[0] as any).id,
      assetid: (asset[0] as any).id,
      specification: data.get("spec"),
      description: data.get("description"),
      returndate: data.get("date"),
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
            Assign Asset
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
              desc="nama-aset"
              selections={assets.map((asset: any) => asset.name)}
              value={asset}
              handleChange={handleChangeAsset}
            />
            <CustomFormSelect
              label="Karyawan"
              desc="karyawan"
              selections={employees.map((employee: any) => employee.name)}
              value={employee}
              handleChange={handleChangeEmployee}
            />

            <CustomFormInput
              label="Tanggal Pengembalian"
              type="date"
              desc="date"
            />

            <CustomFormInput label="Deskripsi" type="text" desc="description" />

            <CustomFormInput label="Spesifikasi" type="text" desc="spec" />

            <DialogActions>
              <Button sx={leftButton} onClick={handleClose}>
                Kembali
              </Button>
              <Button type="submit" variant="contained" sx={rightButton}>
                Assign
              </Button>
            </DialogActions>
          </Box>
        </DialogContent>
      )}
    </Dialog>
  );
};

export default AssignAsset;
