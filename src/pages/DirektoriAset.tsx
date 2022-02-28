import { useState } from "react";
import { useQuery } from "react-query";
import { Outlet } from "react-router-dom";
import { AxiosError } from "axios";
import { Box, Chip, Pagination, Stack, Typography } from "@mui/material";

import ContentContainer from "../components/ContentContainer";
import CardAsset from "../components/DirektoriAset/CardAsset";
import SearchBar from "../components/DirektoriAset/SearchBar";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Loading from "../components/Loading";
import Error from "../components/Alert/Error";

import { containerDir } from "../components/DirektoriAset/DirektoriAset.style";
import { capstoneAxios } from "../axios-instance";

const DirektoriAset = () => {
  const role = localStorage.getItem("role")!;

  const [page, setPage] = useState(1);
  const [items, setItems] = useState<any[]>([]);
  const [totalPage, setTotalPage] = useState(1);
  const [filterId, setFilterId] = useState(0);
  const [availStatus, setAvailStatus] = useState("");
  const [searchValue, setSearchValue] = useState("");

  let { isLoading, error, isError } = useQuery(
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
    },
    { enabled: filterId === 0 && availStatus === "" ? true : false }
  );

  ({ isLoading, error, isError } = useQuery(
    ["filterByCategory", filterId],
    async () => {
      const { data } = await capstoneAxios({
        method: "GET",
        url: "/items",
        params: {
          category: filterId,
          page,
        },
      });

      setItems(data.data.items);
      setTotalPage(data.data.totalPage);
      console.log(data);

      return data;
    },
    { enabled: filterId !== 0 ? true : false }
  ));

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

  const handleClickFilter = (id: number) => {
    setAvailStatus("");
    setSearchValue("");

    setFilterId(id);
  };

  const handleClickAvail = (status: string) => {
    setFilterId(0);
    setSearchValue("");

    setAvailStatus(status);
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
            filterId={filterId}
            setFilterId={setFilterId}
            availStatus={availStatus}
            setAvailStatus={setAvailStatus}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              marginTop: 2,
              width: "40%",
            }}
          >
            <Typography variant="caption" align="left" mr={1}>
              Filter by Category:
            </Typography>
            <Stack direction="row" spacing={2}>
              {["Laptop", "Alat Tulis", "Kendaraan", "Lainnya"].map(
                (el, idx) => (
                  <Chip
                    key={idx}
                    label={el}
                    onClick={() => handleClickFilter(idx + 1)}
                    variant={filterId === idx + 1 ? "filled" : "outlined"}
                    size="small"
                  />
                )
              )}
            </Stack>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              marginTop: 2,
              width: "40%",
            }}
          >
            <Typography align="left" mr={1} variant="caption">
              Filter by Availibility:
            </Typography>
            <Stack direction="row" spacing={2}>
              {["Tersedia", "Tidak Tersedia", "Pemeliharaan"].map((el, idx) => (
                <Chip
                  key={idx}
                  label={el}
                  onClick={() => handleClickAvail(el)}
                  variant={availStatus === el ? "filled" : "outlined"}
                  size="small"
                />
              ))}
            </Stack>
          </Box>

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
