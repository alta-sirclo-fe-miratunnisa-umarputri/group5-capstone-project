import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { makeStyles } from "@mui/styles";
import {
  bgwhite,
  primary,
  quaternary,
  tertiary,
} from "../../styles/color.styles";
import { button } from "./UpperButton.style";
import { useState, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";

import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    "& .super-app-theme--header": {
      backgroundColor: primary.color,
      color: bgwhite.backgroundColor,
      fontFamily: "Poppins",
      fontSize: "16px",
      fontWeight: "normal",
    },
    "& .super-app-theme--cell": {
      ...primary,
      fontFamily: "Poppins",
      fontSize: "14px",
      backgroundColor: quaternary.backgroundColor,
    },
  },
});

const PermohonanPeminjamanTable = () => {
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
    navigate("/permohonan-persetujuan");
  };

  const handleOpenDetail = () => {
    setIsOpenDetail(true);
  };

  const handleOpenUser = () => {
    setIsOpenUser(true);
  };

  const handleCloseUser = () => {
    setIsOpenUser(false);
    navigate("/permohonan-persetujuan");
  };

  const handleAcceptRequest = () => {
    console.log(clickedMenuId);
  };

  const handleRejectRequest = () => {
    navigate(`/permohonan-persetujuan/` + clickedMenuId);
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
      field: "sisaWaktu",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      headerName: "Sisa Waktu",
      width: 200,
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
                  to={`/permohonan-persetujuan/` + 2}
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

            {status === "toreturn" && (
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
                    Ajukan Pengembalian
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
      sisaWaktu: "3 hari",
      status: "Digunakan",
    },
    {
      id: 2,
      nomor: 2,
      tanggalPeminjaman: new Date(),
      pemohonPeminjaman: "Ratu",
      kategori: "Laptop",
      namaAset: "Lenovo Think Pad Yoga",
      sisaWaktu: "3 hari",
      status: "Digunakan",
    },
    {
      id: 3,
      nomor: 3,
      tanggalPeminjaman: new Date(),
      pemohonPeminjaman: "Eldy",
      kategori: "Laptop",
      namaAset: "Lenovo Think Pad Yoga",
      sisaWaktu: "3 hari",
      status: "Digunakan",
    },
    {
      id: 4,
      nomor: 4,
      tanggalPeminjaman: new Date(),
      pemohonPeminjaman: "Najib",
      kategori: "Laptop",
      namaAset: "Lenovo Think Pad Yoga",
      sisaWaktu: "3 hari",
      status: "Digunakan",
    },
    {
      id: 5,
      nomor: 5,
      tanggalPeminjaman: new Date(),
      pemohonPeminjaman: "Jemi",
      kategori: "Laptop",
      namaAset: "Lenovo Think Pad Yoga",
      sisaWaktu: "3 hari",
      status: "Digunakan",
    },
    {
      id: 6,
      nomor: 6,
      tanggalPeminjaman: new Date(),
      pemohonPeminjaman: "Ratu",
      kategori: "Laptop",
      namaAset: "Lenovo Think Pad Yoga",
      sisaWaktu: "3 hari",
      status: "Digunakan",
    },
    {
      id: 7,
      nomor: 7,
      tanggalPeminjaman: new Date(),
      pemohonPeminjaman: "Eldy",
      kategori: "Laptop",
      namaAset: "Lenovo Think Pad Yoga",
      sisaWaktu: "3 hari",
      status: "Digunakan",
    },
    {
      id: 8,
      nomor: 8,
      tanggalPeminjaman: new Date(),
      pemohonPeminjaman: "Najib",
      kategori: "Laptop",
      namaAset: "Lenovo Think Pad Yoga",
      sisaWaktu: "3 hari",
      status: "Digunakan",
    },
  ];

  return (
    <Box
      sx={{
        height: 600,
        width: "100%",
        marginTop: 3,
        marginBottom: 4,
        marginLeft: { sx: 0, sm: 0, md: 4 },
        marginRight: { sx: 0, sm: 0, md: 4 },
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
  );
};

export default PermohonanPeminjamanTable;
