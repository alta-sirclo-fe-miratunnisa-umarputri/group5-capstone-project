import { makeStyles } from "@mui/styles";
import { bgwhite, primary, quaternary } from "../../styles/color.styles";

export const useStyles = makeStyles({
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
