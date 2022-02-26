import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import ContentContainer from "../components/ContentContainer";
import SearchBar from "../components/DirektoriAset/SearchBar";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Button } from "@mui/material";
import { UpButton } from "../components/PermohonanPeminjaman/UpperButton";
import PermohonanPeminjamanTable from "../components/PermohonanPeminjaman/PermohonanPeminjamanTable";

const PermohonanPersetujuan = () => {
  return (
    <Layout>
      <Header
        title="Pengguna Aset"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit."
      />
      <Box>
        <UpButton />
      </Box>
      <Outlet />
      <Box sx={{ textAlign: "center" }}>
        <PermohonanPeminjamanTable />
      </Box>
    </Layout>
  );
};

export default PermohonanPersetujuan;
