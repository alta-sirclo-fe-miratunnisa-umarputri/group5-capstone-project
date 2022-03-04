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

const UserTable = ({ data }: any) => {
  const classes = useStyles();

  const newArr: any = [];
  data.map((data: any, idx: number) => {
    const user: any = {};
    user.id = idx;
    user.nomor = idx + 1;
    user.penggunaAset = data.assetUser;
    user.tanggalPeminjaman = data.lendingDate.toLocaleString();
    user.status =
      data.usageStatus === "donereturn" ? "Dikembalikan" : "Digunakan";
    return newArr.push(user);
  });

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
        rows={newArr}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </Box>
  );
};

export default UserTable;
