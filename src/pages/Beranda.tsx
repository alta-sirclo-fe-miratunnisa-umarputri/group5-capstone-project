import { Grid } from "@mui/material";

import Layout from "../components/Layout";
import ContentContainer from "../components/ContentContainer";
import Carousel from "../components/Beranda/Carousel";
import RightButton, {
  RightButtonDisable,
} from "../components/Beranda/RightButton";
import Statistics from "../components/Beranda/Statistics";
import { ROLE } from "../constants";
import ActivityCarousel from "../components/Beranda/Employee/ActivityCarousel";

const Beranda = () => {
  const role: string = "employee";

  return (
    <Layout>
      <ContentContainer>
        {/* row pertama (jumbotron & statistik) */}
        <Grid container sx={{ mt: 3 }}>
          <Grid item xs={12} md={8} lg={9} border="1px solid green">
            <Carousel />
          </Grid>

          <Grid
            item
            xs={12}
            md={4}
            lg={3}
            border="1px solid blue"
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: { xs: "center", md: "center", lg: "center" },
              // alignItems:
              pl: { md: 3, lg: 3 },
            }}
          >
            <Statistics />
          </Grid>
        </Grid>

        {/* row kedua, khusus utk employee (aktivitasku) */}
        {role === ROLE.EMPLOYEE && (
          <Grid
            container
            sx={{
              mt: 3,
              display: { xs: "none", lg: "block" },
            }}
          >
            <Grid item xs={12} md={8} lg={9} border="1px solid green">
              <ActivityCarousel />
            </Grid>
          </Grid>
        )}

        {/* row ketiga (tabel & tombol2) */}
        <Grid container sx={{ mt: 3 }}>
          {/* tabel */}
          <Grid item xs={12} md={8} lg={9} border="1px solid green">
            tabel
          </Grid>

          {/* tombol */}
          <Grid
            item
            xs={12}
            md={4}
            lg={3}
            border="1px solid blue"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", lg: "end" },
              justifyContent: "start",
            }}
          >
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
