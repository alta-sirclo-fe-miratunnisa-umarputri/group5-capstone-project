import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { Outlet } from "react-router-dom";
import { Grid, Typography } from "@mui/material";

import Layout from "../components/Layout";
import ContentContainer from "../components/ContentContainer";
import RightButton from "../components/Beranda/RightButton";
import Statistics from "../components/Beranda/Statistics";
import ActivityCarousel from "../components/Beranda/Employee/ActivityCarousel";
import BerandaTable from "../components/Beranda/BerandaTable";
import Loading from "../components/Loading";
import Error from "../components/Alert/Error";
import Success from "../components/Alert/Success";

import banner from "../assets/sipangseet3.jpg";
import { ROLE } from "../constants";
import {
  botCarousel,
  buttonBerandaContainer,
  mobileHeader,
  statisticsContainer,
  tableContainer,
  topCarousel,
} from "../components/Beranda/Beranda.style";
import { capstoneAxios } from "../axios-instance";
import { useState } from "react";

const Beranda = () => {
  const role = localStorage.getItem("role")!;
  const employeeId = parseInt(localStorage.getItem("id")!);
  const higherRoles = [ROLE.ADMIN, ROLE.MANAGER];
  const [isSuccess, setIsSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const { data: dataEmployee } = useQuery(
    "tableBerandaEmployee",
    async () => {
      const { data } = await capstoneAxios({
        method: "GET",
        url: `/users/${employeeId}/applications/history`,
      });

      return data;
    },
    { enabled: role === ROLE.EMPLOYEE ? true : false }
  );

  const { isLoading, isError, error, data } = useQuery(
    "tableBeranda",
    async () => {
      let status = "tomanager";
      if (role === ROLE.ADMIN) {
        status = "toadmin";
      }

      const { data } = await capstoneAxios({
        method: "GET",
        url: "/applications",
        params: {
          status,
        },
      });

      return data;
    },
    { enabled: higherRoles.includes(role) ? true : false }
  );

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error message={(error as AxiosError).response!.data!.message!} />;
  }

  return (
    <Layout>
      <ContentContainer>
        <Outlet context={{ setIsSuccess, setSuccessMessage }} />
        {isSuccess && <Success message={successMessage} />}

        <Grid container sx={topCarousel}>
          <Grid item xs={12} sx={{ display: { xs: "block", md: "none" } }}>
            <Typography variant="h4" sx={mobileHeader}>
              Beranda
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            md={8}
            lg={9}
            display="flex"
            justifyContent="center"
            alignItems="center"
            borderRadius={5}
            sx={{ backgroundImage: `url(${banner})`, backgroundSize: "cover" }}
          />

          <Grid item xs={12} md={4} lg={3} sx={statisticsContainer}>
            <Statistics />
          </Grid>
        </Grid>

        {role === ROLE.EMPLOYEE && (
          <Grid container sx={botCarousel}>
            <Grid item xs={12} sm={12} md={12} lg={9}>
              <ActivityCarousel />
            </Grid>
          </Grid>
        )}

        <Grid container sx={tableContainer}>
          <Grid item xs={12} md={8} lg={9}>
            {role === ROLE.ADMIN && data && (
              <BerandaTable
                data={data.data.applications}
                title="Permohonan Peminjaman Aset"
                role="admin"
              />
            )}
            {role === ROLE.MANAGER && data && (
              <BerandaTable
                data={data.data.applications}
                title="Permohonan Persetujuan Peminjaman Aset"
                role="manager"
              />
            )}
            {role === ROLE.EMPLOYEE && dataEmployee && (
              <BerandaTable
                data={dataEmployee.data}
                title="Riwayat Penggunaan Aset"
                role="employee"
              />
            )}
          </Grid>

          <Grid item xs={12} md={4} lg={3} sx={buttonBerandaContainer}>
            {role === ROLE.EMPLOYEE && (
              <>
                <RightButton
                  label="Peminjaman Aset"
                  path="/beranda/peminjaman-aset"
                />
                <RightButton
                  label="Pengajuan Aset Baru"
                  path="/beranda/pengajuan-aset-baru"
                />
              </>
            )}

            {role === ROLE.ADMIN && (
              <>
                <RightButton
                  label="Tambah Aset Baru"
                  path="/beranda/tambah-aset-baru"
                />
                <RightButton label="Assign Aset" path="/beranda/assign-aset" />
              </>
            )}

            {role === ROLE.MANAGER && (
              <RightButton label="Peminjaman Aset" path="/pemeliharaan" />
            )}
          </Grid>
        </Grid>
      </ContentContainer>
    </Layout>
  );
};

export default Beranda;
