import { Box, Stack, Pagination } from "@mui/material";
import { Outlet } from "react-router-dom";

import ContentContainer from "../components/ContentContainer";
import CardAsset from "../components/DirektoriAset/CardAsset";
import SearchBar from "../components/DirektoriAset/SearchBar";
import Header from "../components/Header";
import Layout from "../components/Layout";

import { dummyAssets } from "../dummy-data";
import { containerDir } from "../components/DirektoriAset/DirektoriAset.style";
import { useState } from "react";
import { capstoneAxios } from "../axios-instance";
import { useQuery } from "react-query";
import Loading from "../components/Loading";
import Error from "../components/Alert/Error";
import { AxiosError } from "axios";

const DirektoriAset = () => {
  const role = localStorage.getItem("role")!;

  const [page, setPage] = useState(1);
  const [items, setItems] = useState<any[]>([]);
  const [totalPage, setTotalPage] = useState(1);

  const { isLoading, error, isError } = useQuery(
    ["directoryAssetAdmin", page],
    async () => {
      const { data } = await capstoneAxios({
        method: "GET",
        url: "/items",
        params: {
          page,
        },
      });

      setItems(data.data.items);
      setTotalPage(data.data.totalPage);
      return data;
    }
  );

  if (isLoading) {
    return (
      <Box sx={{ marginTop: 25 }}>
        <Loading />
      </Box>
    );
  }

  if (isError) {
    return <Error message={(error as AxiosError).response!.data!.message!} />;
  }

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

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
          <SearchBar
            setItems={setItems}
            setTotalPage={setTotalPage}
            page={page}
          />
          <Pagination
            count={totalPage}
            sx={{ marginTop: 3, marginBottom: 1 }}
            onChange={handleChangePage}
            page={page}
          />
          <CardAsset assets={items} role={role} />
        </Box>
      </ContentContainer>
    </Layout>
  );
};

export default DirektoriAset;
