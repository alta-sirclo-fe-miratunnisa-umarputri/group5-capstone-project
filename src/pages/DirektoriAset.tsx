import { useState } from "react";
import { useQuery } from "react-query";
import { Outlet } from "react-router-dom";
import { AxiosError } from "axios";
import { Box, Chip, Grid, Pagination, Stack, Typography } from "@mui/material";

import ContentContainer from "../components/ContentContainer";
import CardAsset from "../components/DirektoriAset/CardAsset";
import SearchBar from "../components/DirektoriAset/SearchBar";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Loading from "../components/Loading";
import Error from "../components/Alert/Error";

import { containerDir } from "../components/DirektoriAset/DirektoriAset.style";
import { capstoneAxios } from "../axios-instance";
import { primary } from "../styles/color.styles";
import { ROLE } from "../constants";

const DirektoriAset = () => {
  const role = localStorage.getItem("role")!;

  const [page, setPage] = useState(1);
  const [items, setItems] = useState<any[]>([]);
  const [totalPage, setTotalPage] = useState(1);
  const [filterId, setFilterId] = useState(0);
  const [availStatus, setAvailStatus] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const [assets, setAssets] = useState<any[]>([]);
  // const [pageEmp, setPageEmp] = useState(1);
  // const [totalPageEmp, setTotalPageEmp] = useState(1);
  // const [filterIdEmp, setFilterIdEmp] = useState(0);
  // const [availStatusEmp, setAvailStatusEmp] = useState("");
  // const [searchValueEmp, setSearchValueEmp] = useState("");

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
    {
      enabled:
        filterId === 0 && availStatus === "" && role === ROLE.ADMIN
          ? true
          : false,
    }
  );

  ({ isLoading, error, isError } = useQuery(
    ["filterItemsByCategory", filterId, page],
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

      return data;
    },
    { enabled: filterId !== 0 && role === ROLE.ADMIN ? true : false }
  ));

  ({ isLoading, error, isError } = useQuery(
    ["filterItemsByAvail", availStatus, page],
    async () => {
      const { data } = await capstoneAxios({
        method: "GET",
        url: "/items",
        params: {
          availableStatus: availStatus.toLowerCase(),
          page,
        },
      });

      setItems(data.data.items);
      setTotalPage(data.data.totalPage);

      return data;
    },
    { enabled: availStatus !== "" && role === ROLE.ADMIN ? true : false }
  ));

  // EMPLOYEE
  ({ isLoading, error, isError } = useQuery(
    ["directoryAssetEmployee", page],
    async () => {
      const { data } = await capstoneAxios({
        method: "GET",
        url: "/assets",
        params: {
          page,
        },
      });

      console.log(data.data.assets);

      setAssets(data.data.assets);
      setTotalPage(data.data.totalpage);
      return data;
    },
    {
      enabled:
        filterId === 0 && availStatus === "" && role === ROLE.EMPLOYEE
          ? true
          : false,
    }
  ));

  ({ isLoading, error, isError } = useQuery(
    ["filterAssetsByCategory", filterId, page],
    async () => {
      const { data } = await capstoneAxios({
        method: "GET",
        url: "/assets",
        params: {
          category: filterId,
          page,
        },
      });

      setAssets(data.data.assets);
      setTotalPage(data.data.totalPage);

      return data;
    },
    { enabled: filterId !== 0 && role === ROLE.EMPLOYEE ? true : false }
  ));

  ({ isLoading, error, isError } = useQuery(
    ["filterAssetsByAvail", availStatus, page],
    async () => {
      const { data } = await capstoneAxios({
        method: "GET",
        url: "/assets",
        params: {
          status: availStatus.toLowerCase(),
          page,
        },
      });

      setAssets(data.data.assets);
      setTotalPage(data.data.totalPage);

      return data;
    },
    { enabled: availStatus !== "" && role === ROLE.EMPLOYEE ? true : false }
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
    console.log(value);

    setPage(value);
  };

  const handleClickFilter = (id: number) => {
    setAvailStatus("");
    setSearchValue("");
    setPage(1);

    setFilterId(id);
  };

  const handleClickAvail = (status: string) => {
    setFilterId(0);
    setSearchValue("");
    setPage(1);

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
              marginTop: 1,
              width: "40%",
            }}
          >
            <Grid
              container
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
              }}
            >
              <Grid
                item
                xs={12}
                lg={3}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Typography variant="body2" align="left" mx={1} my={1}>
                  Kategori:
                </Typography>
              </Grid>
              <Grid item xs={12} lg={9}>
                <Stack sx={{ flexDirection: { xs: "column", md: "row" } }}>
                  {["Laptop", "Alat Tulis", "Kendaraan", "Lainnya"].map(
                    (el, idx) => (
                      <Chip
                        key={idx}
                        label={el}
                        onClick={() => handleClickFilter(idx + 1)}
                        variant={filterId === idx + 1 ? "filled" : "outlined"}
                        size="small"
                        sx={{ ...primary, mx: 1, my: 1 }}
                      />
                    )
                  )}
                </Stack>
              </Grid>
            </Grid>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              width: "40%",
            }}
          >
            <Grid
              container
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
              }}
            >
              <Grid
                item
                xs={12}
                lg={3}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Typography variant="body2" align="left" mx={1} my={1}>
                  Ketersediaan:
                </Typography>
              </Grid>
              <Grid item xs={12} lg={9}>
                <Stack sx={{ flexDirection: { xs: "column", md: "row" } }}>
                  {["Tersedia", "Tidak Tersedia", "Pemeliharaan"].map(
                    (el, idx) => (
                      <Chip
                        key={idx}
                        label={el}
                        onClick={() => handleClickAvail(el)}
                        variant={availStatus === el ? "filled" : "outlined"}
                        size="small"
                        sx={{ ...primary, mx: 1, my: 1 }}
                      />
                    )
                  )}
                </Stack>
              </Grid>
            </Grid>
          </Box>

          <Pagination
            count={totalPage}
            sx={{ marginTop: 3, marginBottom: 1 }}
            onChange={handleChangePage}
            page={page}
          />
          <CardAsset
            assets={role === ROLE.ADMIN ? items : assets}
            role={role}
          />
        </Box>
      </ContentContainer>
    </Layout>
  );
};

export default DirektoriAset;
