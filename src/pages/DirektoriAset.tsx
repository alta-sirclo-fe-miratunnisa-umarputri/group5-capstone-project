import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

import ContentContainer from "../components/ContentContainer";
import CardAsset from "../components/DirektoriAset/CardAsset";
import { containerDir } from "../components/DirektoriAset/DirektoriAset.style";
import SearchBar from "../components/DirektoriAset/SearchBar";
import Header from "../components/Header";
import Layout from "../components/Layout";
import { dummyAssets } from "../dummy-data";

const DirektoriAset = () => {
  // cek if employee or admin here
  // if role === employee fetch data assets
  // if role === admin fetch data items
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
        <Box sx={containerDir}>
          <SearchBar />
          <CardAsset assets={dummyAssets} role="employee" />
        </Box>
      </ContentContainer>
    </Layout>
  );
};

export default DirektoriAset;
