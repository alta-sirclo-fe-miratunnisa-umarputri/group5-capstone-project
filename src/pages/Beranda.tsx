import { Outlet } from "react-router-dom";
import { Grid } from "@mui/material";

import Layout from "../components/Layout";
import ContentContainer from "../components/ContentContainer";
import Carousel from "../components/Beranda/Carousel";
import RightButton, {
  RightButtonDisable,
} from "../components/Beranda/RightButton";
import Statistics from "../components/Beranda/Statistics";
import ActivityCarousel from "../components/Beranda/Employee/ActivityCarousel";
import { ROLE } from "../constants";
import {
  botCarousel,
  buttonBerandaContainer,
  statisticsContainer,
  tableContainer,
  topCarousel,
} from "../components/Beranda/Beranda.style";
import BerandaTable from "../components/Beranda/BerandaTable";
import { rowsTableBeranda } from "../dummy-data";

const Beranda = () => {
  const role: string = "employee";

  return (
    <Layout>
      <ContentContainer>
        <Outlet />
        <Grid container sx={topCarousel}>
          <Grid item xs={12} md={8} lg={9}>
            <Carousel />
          </Grid>

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
            {role === ROLE.ADMIN && (
              <BerandaTable
                data={rowsTableBeranda}
                title="Permohonan Terbaru"
                role="admin"
              />
            )}
            {role === ROLE.MANAGER && (
              <BerandaTable
                data={rowsTableBeranda}
                title="Permohonan Persetujuan"
                role="manager"
              />
            )}
            {role === ROLE.EMPLOYEE && (
              <BerandaTable
                data={rowsTableBeranda}
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
