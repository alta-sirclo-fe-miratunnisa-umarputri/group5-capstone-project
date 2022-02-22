import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { makeStyles } from "@mui/styles";
import { bgwhite, primary, tertiary } from "../../styles/color.styles";

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
    field: "penggunaAset",
    headerClassName: "super-app-theme--header",
    cellClassName: "super-app-theme--cell",
    headerName: "Pengguna Aset",
    width: 180,
  },
  {
    field: "tanggalPeminjaman",
    headerClassName: "super-app-theme--header",
    cellClassName: "super-app-theme--cell",
    headerName: "Tanggal Peminjaman",
    type: "date",
    width: 180,
  },
  {
    field: "status",
    headerClassName: "super-app-theme--header",
    cellClassName: "super-app-theme--cell",
    headerName: "Status",
    width: 125,
  },
];

const rows = [
  {
    id: 1,
    nomor: 1,
    penggunaAset: "Ratu",
    tanggalPeminjaman: new Date(),
    status: "Digunakan",
  },
  {
    id: 2,
    nomor: 2,
    penggunaAset: "Jemi",
    tanggalPeminjaman: new Date(),
    status: "Dikembalikan",
  },
  {
    id: 3,
    nomor: 3,
    penggunaAset: "Najib",
    tanggalPeminjaman: new Date(),
    status: "Dikembalikan",
  },
  {
    id: 4,
    nomor: 4,
    penggunaAset: "Eldy",
    tanggalPeminjaman: new Date(),
    status: "Dikembalikan",
  },
  {
    id: 5,
    nomor: 5,
    penggunaAset: "Yoga",
    tanggalPeminjaman: new Date(),
    status: "Dikembalikan",
  },
  {
    id: 6,
    nomor: 6,
    penggunaAset: "Fakhri",
    tanggalPeminjaman: new Date(),
    status: "Dikembalikan",
  },
  {
    id: 7,
    nomor: 7,
    penggunaAset: "Ratu2",
    tanggalPeminjaman: new Date(),
    status: "Dikembalikan",
  },
  {
    id: 8,
    nomor: 8,
    penggunaAset: "Jemi2",
    tanggalPeminjaman: new Date(),
    status: "Dikembalikan",
  },
  {
    id: 9,
    nomor: 9,
    penggunaAset: "Najib2",
    tanggalPeminjaman: new Date(),
    status: "Dikembalikan",
  },
  {
    id: 10,
    nomor: 10,
    penggunaAset: "Eldy2",
    tanggalPeminjaman: new Date(),
    status: "Dikembalikan",
  },
];

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

const UserTable = () => {
  const classes = useStyles();

  return (
    <Box
      sx={{
        height: 370,
        width: "100%",
        marginTop: 3,
        marginBottom: 4,
      }}
      className={classes.root}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </Box>
  );
};

export default UserTable;
