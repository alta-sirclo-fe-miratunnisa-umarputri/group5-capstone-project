import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

import ContentContainer from "../components/ContentContainer";
import CardAsset from "../components/DirektoriAset/CardAsset";
import SearchBar from "../components/DirektoriAset/SearchBar";
import Header from "../components/Header";
import Layout from "../components/Layout";
import { dummyAssets } from "../dummy-data";

const DirektoriAset = () => {
  return (
    <Layout>
      <Header
        title="Direktori Aset"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit."
      />
      <Outlet />

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
    </Layout>
  );
};

export default DirektoriAset;