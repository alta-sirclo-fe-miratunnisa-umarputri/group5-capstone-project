import { Box, Grid } from "@mui/material";

import Layout from "../components/Layout";
import ContentContainer from "../components/ContentContainer";
import Carousel from "../components/Beranda/Carousel";
import RightButton from "../components/Beranda/RightButton";

const Beranda = () => {
  return (
    <Layout>
      <ContentContainer>
        {/* row pertama (jumbotron & statistik) */}
        <Grid container sx={{ mt: 3 }}>
          <Grid item xs={12} md={8} border="1px solid green">
            <Carousel />
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            border="1px solid blue"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box
              sx={{ width: "70%", height: "200px", bgcolor: "green", px: 2 }}
            >
              <Box border="1px solid blue" height="20px"></Box>
            </Box>
          </Grid>
        </Grid>

        {/* row kedua, khusus utk employee (aktivitasku) */}
        <Grid container sx={{ mt: 3 }}>
          <Grid item xs={12} md={8} border="1px solid green">
            aktivitasku jika rolenya employee
          </Grid>
        </Grid>

        {/* row ketiga (tabel & tombol2) */}
        <Grid container sx={{ mt: 3 }}>
          {/* tabel */}
          <Grid item xs={12} md={8} border="1px solid green">
            tabel
          </Grid>

          {/* tombol */}
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "start",
            }}
          >
            <RightButton label="Tambah Aset Baru" path="#" />
            <RightButton label="Assign Aset" path="#" />
          </Grid>
        </Grid>
      </ContentContainer>
    </Layout>
  );
};

export default Beranda;
