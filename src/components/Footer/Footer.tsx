import { Grid } from "@mui/material";

import { tertiary } from "../../styles/color.styles";
import { wrapper } from "./Footer.style";
import Title from "./Title";
import Description from "./Description";
import UsefulLink from "./UsefulLink";
import facebook from "../../assets/facebook2.svg";
import twitter from "../../assets/twitter2.svg";
import instagram from "../../assets/instagram2.svg";
import WhereToFindUs from "./WhereToFindUs";
import { ROLE } from "../../constants";

const Footer = () => {
  const role = localStorage.getItem("role");

  return (
    <Grid container sx={{ bgcolor: tertiary.color }}>
      <Grid item xs={12} md={6} sx={wrapper}>
        <Title label="Apa itu Avengers?" />
        <Description>
          Avengers merupakan aplikasi manajemen aset perusahaan Avengers.Corp.
          Bertujuan untuk memudahkan alur peminjaman aset kepada pegawai demi
          menunjang kinerja mereka. Dengan Avengers, tidak perlu surat, tidak
          perlu tatap muka, cukup ajukan saja. Sekali klik, maka aset sudah
          dapat digunakan.
        </Description>
      </Grid>

      <Grid item xs={12} md={3} sx={wrapper}>
        <Title label="Akses Cepat" />
        {role === ROLE.EMPLOYEE && (
          <>
            <UsefulLink path="/beranda" label="Beranda" />
            <UsefulLink path="/direktori-aset" label="Direktori Aset" />
          </>
        )}
        {role === ROLE.ADMIN && (
          <>
            <UsefulLink path="/beranda" label="Beranda" />
            <UsefulLink path="/direktori-aset" label="Direktori Aset" />
            <UsefulLink path="/pengguna-aset" label="Pengguna Aset" />
            <UsefulLink path="/pengadaan-aset" label="Pengadaan Aset" />
          </>
        )}
        {role === ROLE.MANAGER && (
          <>
            <UsefulLink path="/beranda" label="Beranda" />
            <UsefulLink
              path="/permohonan-persetujuan"
              label="Permohonan Persetujuan"
            />
            <UsefulLink
              path="/permohonan-pengadaan"
              label="Permohonan Pengadaan"
            />
          </>
        )}
      </Grid>

      <Grid item xs={12} md={3} sx={wrapper}>
        <Title label="Temukan Kami :" />
        <WhereToFindUs
          link="https://www.facebook.com/avengers/"
          icon={facebook}
          label="@avengers"
        />
        <WhereToFindUs
          link="https://twitter.com/avengers"
          icon={twitter}
          label="@Avengers"
        />
        <WhereToFindUs
          link="https://www.instagram.com/avengers/?hl=en"
          icon={instagram}
          label="@avengers"
        />
      </Grid>
    </Grid>
  );
};

export default Footer;
