import { useState, MouseEvent } from "react";
import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import { makeStyles } from "@mui/styles";

import { bgwhite, primary, tertiary } from "../../../styles/color.styles";
import { dotMenu, titleCarousel } from "../Employee/ActivityCarousel.style";

const useStyles = makeStyles({
  root: {
    "& .super-app-theme--header": {
      backgroundColor: tertiary.color,
      color: bgwhite.backgroundColor,
      fontFamily: "Poppins",
      fontSize: "16px",
      fontWeight: "normal",
    },
    "& .super-app-theme--cell": {
      ...primary,
      fontFamily: "Poppins",
      fontSize: "14px",
    },
  },
});

const AdminTable = () => {
  const classes = useStyles();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [clickedMenuId, setClickedMenuId] = useState(0);

  const handleClickAction = (e: MouseEvent<HTMLElement>, id: number) => {
    setAnchorElUser(e.currentTarget);
    setClickedMenuId(id);
  };

  const handleAcceptRequest = () => {
    console.log(clickedMenuId);
  };

  const handleRejectRequest = () => {
    console.log(clickedMenuId);
  };

  const columns: GridColDef[] = [
    {
      field: "nomor",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      headerName: "No",
      type: "number",
      width: 70,
    },
    {
      field: "tanggal",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      headerName: "Tanggal",
      width: 180,
    },
    {
      field: "jenisAktivitas",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      headerName: "Jenis Aktivitas",
      type: "date",
      width: 200,
    },
    {
      field: "kategoriAset",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      headerName: "Kategori Aset",
      width: 150,
    },
    {
      field: "barang",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      headerName: "Barang",
      width: 200,
    },
    {
      field: "aksi",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      headerName: "Aksi",
      width: 113,
      sortable: false,
      filterable: false,
      renderCell: (params: any) => {
        return (
          <>
            <IconButton onClick={(e) => handleClickAction(e, params.id)}>
              <MoreHorizRoundedIcon fontSize="medium" />
            </IconButton>
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
                <Typography variant="subtitle2" sx={dotMenu}>
                  Terima Permohonan
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleRejectRequest}>
                <Typography variant="subtitle2" sx={dotMenu}>
                  Tolak Permohonan
                </Typography>
              </MenuItem>
            </Menu>
          </>
        );
      },
    },
  ];

  const rows = [
    {
      id: 1,
      nomor: 1,
      tanggal: new Date(),
      jenisAktivitas: "Peminjaman Aset",
      kategoriAset: "Headphone",
      barang: "ini nama barang",
    },
    {
      id: 2,
      nomor: 2,
      tanggal: new Date(),
      jenisAktivitas: "Peminjaman Aset",
      kategoriAset: "Headphone",
      barang: "ini nama barang",
    },
    {
      id: 3,
      nomor: 3,
      tanggal: new Date(),
      jenisAktivitas: "Peminjaman Aset",
      kategoriAset: "Headphone",
      barang: "ini nama barang",
    },
    {
      id: 4,
      nomor: 4,
      tanggal: new Date(),
      jenisAktivitas: "Peminjaman Aset",
      kategoriAset: "Headphone",
      barang: "ini nama barang",
    },
  ];

  const formatInput = (rows: any) => {
    for (const row of rows) {
      row.tanggal = new Date().toLocaleString();
    }
    return rows;
  };

  return (
    <Box
      sx={{
        height: 370,
        width: "100%",
        marginBottom: 4,
      }}
      className={classes.root}
    >
      <Typography variant="h6" sx={titleCarousel} gutterBottom>
        Permohonan Terbaru
      </Typography>
      <DataGrid
        rows={formatInput(rows)}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        isRowSelectable={() => false}
      />
    </Box>
  );
};

export default AdminTable;
