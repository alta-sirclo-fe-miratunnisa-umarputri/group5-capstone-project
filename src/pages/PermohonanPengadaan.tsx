import React from "react";
import {
  button,
  buttonOutlined,
  buttonStatus,
} from "../components/PermohonanPengadaan/UpperButton.style";
import Layout from "../components/Layout";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { makeStyles } from "@mui/styles";
import { bgwhite, primary, quaternary, tertiary } from "../styles/color.styles";
import { useState, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useStyles } from "../components/PermohonanPengadaan/table.style";
import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";

import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const PermohonanPengadaan = () => {
  const [filter, setFilter] = useState("");
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [clickedMenuId, setClickedMenuId] = useState(0);
  const classes = useStyles();
  const [isOpenDetail, setIsOpenDetail] = useState(false);
  const [isOpenUser, setIsOpenUser] = useState(false);
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const handleClickAction = (e: MouseEvent<HTMLElement>, id: number) => {
    setStatus("toadmin");
    setAnchorElUser(e.currentTarget);
    setClickedMenuId(id);
  };

  const handleCloseDetail = () => {
    setIsOpenDetail(false);
    navigate("/permohonan-pengadaan");
  };

  const handleOpenDetail = () => {
    setIsOpenDetail(true);
  };

  const handleOpenUser = () => {
    setIsOpenUser(true);
  };

  const handleCloseUser = () => {
    setIsOpenUser(false);
    navigate("/permohonan-pengadaan");
  };

  const handleAcceptRequest = () => {
    console.log(clickedMenuId);
  };

  const handleRejectRequest = () => {
    navigate(`/permohonan-pengadaan/` + clickedMenuId);
  };

  const columns: GridColDef[] = [
    {
      field: "nomor",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      headerName: "No",
      type: "number",
      width: 50,
    },
    {
      field: "tanggalPeminjaman",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      headerName: "Tanggal",
      width: 190,
    },
    {
      field: "pemohonPeminjaman",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      headerName: "Pemohon",
      type: "date",
      width: 200,
    },
    {
      field: "kategori",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      headerName: "Kategori Aset",
      width: 180,
    },
    {
      field: "namaAset",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      headerName: "Barang",
      width: 250,
    },

    {
      field: "detailButton",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      headerName: "Detail",
      width: 125,
      sortable: false,
      filterable: false,
      renderCell: (params: any) => {
        return (
          <>
            <IconButton onClick={e => handleClickAction(e, params.id)}>
              <MoreHorizRoundedIcon fontSize="medium" />
            </IconButton>
            {status === "toadmin" && (
              <Menu
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={() => setAnchorElUser(null)}
              >
                <Link
                  to={`/permohonan-pengadaan/` + 2}
                  style={{ textDecoration: "none", width: "100%" }}
                >
                  <MenuItem onClick={handleAcceptRequest}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        ...primary,
                        textAlign: "center",
                        fontFamily: "Poppins",
                        fontWeight: "medium",
                      }}
                    >
                      Terima Permohonan
                    </Typography>
                  </MenuItem>
                </Link>

                <MenuItem onClick={handleRejectRequest}>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      ...primary,
                      textAlign: "center",
                      fontFamily: "Poppins",
                      fontWeight: "medium",
                    }}
                  >
                    Tolak Permohonan
                  </Typography>
                </MenuItem>
              </Menu>
            )}
          </>
        );
      },
    },
  ];

  const rows = [
    {
      id: 1,
      nomor: 1,
      tanggalPeminjaman: new Date(),
      pemohonPeminjaman: "Jemi",
      kategori: "Laptop",
      namaAset: "Lenovo Think Pad Yoga",
      status: "Digunakan",
    },
    {
      id: 2,
      nomor: 2,
      tanggalPeminjaman: new Date(),
      pemohonPeminjaman: "Ratu",
      kategori: "Laptop",
      namaAset: "Lenovo Think Pad Yoga",
      status: "Digunakan",
    },
    {
      id: 3,
      nomor: 3,
      tanggalPeminjaman: new Date(),
      pemohonPeminjaman: "Eldy",
      kategori: "Laptop",
      namaAset: "Lenovo Think Pad Yoga",
      status: "Digunakan",
    },
    {
      id: 4,
      nomor: 4,
      tanggalPeminjaman: new Date(),
      pemohonPeminjaman: "Najib",
      kategori: "Laptop",
      namaAset: "Lenovo Think Pad Yoga",
      status: "Digunakan",
    },
    {
      id: 5,
      nomor: 5,
      tanggalPeminjaman: new Date(),
      pemohonPeminjaman: "Jemi",
      kategori: "Laptop",
      namaAset: "Lenovo Think Pad Yoga",
      status: "Digunakan",
    },
    {
      id: 6,
      nomor: 6,
      tanggalPeminjaman: new Date(),
      pemohonPeminjaman: "Ratu",
      kategori: "Laptop",
      namaAset: "Lenovo Think Pad Yoga",
      status: "Digunakan",
    },
    {
      id: 7,
      nomor: 7,
      tanggalPeminjaman: new Date(),
      pemohonPeminjaman: "Eldy",
      kategori: "Laptop",
      namaAset: "Lenovo Think Pad Yoga",
      status: "Digunakan",
    },
    {
      id: 8,
      nomor: 8,
      tanggalPeminjaman: new Date(),
      pemohonPeminjaman: "Najib",
      kategori: "Laptop",
      namaAset: "Lenovo Think Pad Yoga",
      status: "Digunakan",
    },
  ];
  const fetchNav = async (data: any) => {
    console.log(data);
  };
  const fetchData = async () => {
    console.log("all");
  };

  const handleFilter = (item: string) => {
    fetchNav(item);
    setFilter(item);
  };
  return (
    <Layout>
      <Header
        title="Pengadaan Aset"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit."
      />

      <Box
        sx={{
          textAlign: "center",
          marginTop: "2%",
          display: { xs: "none", sm: "none", md: "block" },
        }}
      >
        <Button
          variant="contained"
          sx={filter === "" ? button : buttonOutlined}
          size="small"
          onClick={data => {
            setFilter("");
            fetchData();
          }}
        >
          Semua Pengguna
        </Button>
        {buttonStatus.map(item => (
          <Button
            key={item.id}
            variant="contained"
            size="small"
            sx={filter === item.name ? button : buttonOutlined}
            onClick={() => {
              setFilter(item.name);
              handleFilter(item.status);
            }}
          >
            {item.name}
          </Button>
        ))}
      </Box>

      <Outlet />
      <Box sx={{ textAlign: "center" }}>
        <Box
          sx={{
            height: 600,
            width: "100%",
            marginTop: 3,
            marginBottom: 4,
            marginLeft: { sx: 0, sm: 0, md: "10%" },
            marginRight: { sx: 0, sm: 0, md: "10%" },
            textAlign: "center",
            alignItems: "center",
          }}
          className={classes.root}
        >
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
          />
        </Box>
      </Box>
    </Layout>
  );
};

export default PermohonanPengadaan;
