import { Outlet, useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

import ContentContainer from "../components/ContentContainer";
import Header from "../components/Header";

import { theGreen } from "../styles/color.styles";
import { generalFont } from "../styles/font.style";

const UnderMaintenance = () => {
  const navigate = useNavigate();

  const handleBackToBeranda = () => {
    navigate("/beranda");
  };
  return (
    <>
      <Header
        title="Selamat Datang"
        description="Terima kasih telah mengunjungi situs kami"
      />
      <Outlet />
      <ContentContainer>
        <Typography
          variant="h4"
          sx={{ ...generalFont, mt: 10, textAlign: "center" }}
        >
          Maaf, halaman ini masih dalam proses pengembangan
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", py: 3 }}>
          <Button
            sx={{
              color: "white",
              ml: 1,
              textTransform: "none",
              fontFamily: "Poppins",
              fontWeight: "medium",
              bgcolor: theGreen.color,
              "&:hover": { bgcolor: theGreen.color },
            }}
            onClick={handleBackToBeranda}
          >
            Kembali ke Beranda
          </Button>
        </Box>
      </ContentContainer>
    </>
  );
};

export default UnderMaintenance;
