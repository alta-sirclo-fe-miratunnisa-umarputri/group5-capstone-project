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
            <Grid item xs={12} md={8} lg={9}>
              <ActivityCarousel />
            </Grid>
          </Grid>
        )}

        <Grid container sx={tableContainer}>
          <Grid item xs={12} md={8} lg={9} border="1px solid green">
            tabel
          </Grid>

          <Grid item xs={12} md={4} lg={3} sx={buttonBerandaContainer}>
            {role === ROLE.EMPLOYEE && (
              <>
                <RightButton label="Peminjaman Aset" path="#" />
                <RightButton label="Pengajuan Aset Baru" path="#" />
              </>
            )}

            {role === ROLE.ADMIN && (
              <>
                <RightButton label="Tambah Aset Baru" path="#" />
                <RightButton label="Assign Aset" path="#" />
              </>
            )}

            {role === ROLE.MANAGER && (
              <>
                <RightButtonDisable label="Peminjaman Aset" path="#" />
              </>
            )}
          </Grid>
        </Grid>
      </ContentContainer>
    </Layout>
  );
};

export default Beranda;
