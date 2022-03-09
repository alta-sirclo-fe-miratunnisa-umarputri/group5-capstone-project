import { Grid } from "@mui/material";

import Title from "./Title";
import Description from "./Description";
import UsefulLink from "./UsefulLink";
import WhereToFindUs from "./WhereToFindUs";

import { ROLE } from "../../constants";
import { theGreen } from "../../styles/color.styles";
import { wrapper } from "./Footer.style";
import facebook from "../../assets/icons8-facebook-circled.svg";
import twitter from "../../assets/icons8-twitter-circled.svg";

const Footer = () => {
  const role = localStorage.getItem("role");

  return (
    <Grid container sx={{ bgcolor: theGreen.color, mt: 3 }}>
      <Grid item xs={12} md={6} sx={wrapper}>
        <Title label="Apa itu Sipangseet?" />
        <Description>
          Sipangseet merupakan aplikasi manajemen aset perusahaan Avengers.Corp.
          Bertujuan untuk memudahkan alur peminjaman aset kepada pegawai demi
          kualitas kinerja yang lebih baik. Dengan Sipangseet, tidak perlu
          surat, tidak perlu tatap muka, cukup ajukan saja. Sekali klik, maka
          aset sudah dapat digunakan.
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
          label="@sipangseet"
        />
        <WhereToFindUs
          link="https://twitter.com/avengers"
          icon={twitter}
          label="@Sipangseet"
        />
      </Grid>
    </Grid>
  );
};

export default Footer;
