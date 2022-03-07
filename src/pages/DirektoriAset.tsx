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

  const { data: dataCategories } = useQuery("getCategories", async () => {
    const { data } = await capstoneAxios({
      method: "GET",
      url: "/categories",
    });

    return data;
  });

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
        filterId === 0 &&
        availStatus === "" &&
        role === ROLE.ADMIN &&
        searchValue === ""
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

      setAssets(data.data.assets);
      setTotalPage(data.data.totalpage);
      return data;
    },
    {
      enabled:
        filterId === 0 &&
        availStatus === "" &&
        role === ROLE.EMPLOYEE &&
        searchValue === ""
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
          status: availStatus.toLowerCase().split(" ").join(""),
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
        description="Halaman untuk melihat aset-aset yang dimiliki oleh perusahaan"
      />

      <Outlet />

      <ContentContainer>
        <Box sx={containerDir}>
          <SearchBar
            setItems={setItems}
            setAssets={setAssets}
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
                  {dataCategories &&
                    dataCategories.data.map((el: any) => (
                      <Chip
                        key={el.id}
                        label={el.name}
                        onClick={() => handleClickFilter(el.id)}
                        variant={filterId === el.id ? "filled" : "outlined"}
                        size="small"
                        sx={{ ...primary, mx: 1, my: 1 }}
                      />
                    ))}
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
                  {["Tersedia", "Tidak Tersedia", "Pemeliharaan"]
                    .filter((el) =>
                      role === ROLE.EMPLOYEE && el === "Pemeliharaan"
                        ? false
                        : true
                    )
                    .map((el, idx) => (
                      <Chip
                        key={idx}
                        label={el}
                        onClick={() => handleClickAvail(el)}
                        variant={availStatus === el ? "filled" : "outlined"}
                        size="small"
                        sx={{ ...primary, mx: 1, my: 1 }}
                      />
                    ))}
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
