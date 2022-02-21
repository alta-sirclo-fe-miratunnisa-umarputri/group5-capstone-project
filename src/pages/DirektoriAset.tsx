import { Box } from "@mui/material";
import ContentContainer from "../components/ContentContainer";
import CardAsset from "../components/DirektoriAset/CardAsset";
import SearchBar from "../components/DirektoriAset/SearchBar";
import Header from "../components/Header";
import { dummyAssets } from "../dummy-data";

const DirektoriAset = () => {
  return (
    <>
      <Header />
      <ContentContainer>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            mt: 3,
          }}
        >
          <SearchBar />
          <CardAsset assets={dummyAssets} />
        </Box>
      </ContentContainer>
    </>
  );
};

export default DirektoriAset;
