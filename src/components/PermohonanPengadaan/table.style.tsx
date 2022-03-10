import { makeStyles } from "@mui/styles";
import { theBlack, theGreen, theWhite } from "../../styles/color.styles";

export const useStyles = makeStyles({
  root: {
    "& .super-app-theme--header": {
      backgroundColor: theGreen.color,
      color: theWhite.color,
      fontFamily: "Poppins",
      fontSize: "16px",
      fontWeight: "normal",
    },
    "& .super-app-theme--cell": {
      ...theBlack,
      fontFamily: "Poppins",
      fontSize: "14px",
      backgroundColor: theWhite.color,
    },
  },
});

export const buttonStatus = [
  { id: 1, name: "Permohonan Baru", status: "toadmin" },
  { id: 2, name: "Disetujui", status: "tomanager" },
  { id: 3, name: "Digunakan", status: "inuse" },
  { id: 4, name: "Ditolak", status: "indecline" },
  { id: 5, name: "Dikembalikan", status: "toreturn" },
  { id: 6, name: "Sudah Kembali", status: "donereturn" },
];

export const buttonStatusPenggunaAset = [
  { id: 1, name: "Permohonan Baru", status: "toadmin" },
  { id: 2, name: "Disetujui", status: "tomanager" },
  { id: 3, name: "Digunakan", status: "inuse" },
  { id: 4, name: "Ditolak", status: "indecline" },
  { id: 5, name: "Dikembalikan", status: "toreturn" },
  { id: 6, name: "Sudah Kembali", status: "donereturn" },
];
