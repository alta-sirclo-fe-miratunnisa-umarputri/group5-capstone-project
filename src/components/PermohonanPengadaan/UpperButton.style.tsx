import { SxProps } from "@mui/material";
import { theWhite, theGreen, theLightGreen } from "../../styles/color.styles";

export const button: SxProps = {
  fontWeight: "medium",
  outlineColor: theLightGreen.color,
  width: "20%",
  fontFamily: "Poppins",
  color: theWhite.color,
  textTransform: "none",
  borderColor: theLightGreen.color,
  backgroundColor: theLightGreen.color,
  "&:hover": {
    backgroundColor: theLightGreen.color,
  },
};

export const buttonOutlined: SxProps = {
  fontWeight: "medium",
  outlineColor: theLightGreen.color,
  width: "20%",
  fontFamily: "Poppins",
  color: theLightGreen.color,
  textTransform: "none",
  backgroundColor: theWhite.color,
  "&:hover": {
    backgroundColor: theLightGreen.color,
    color: theWhite.color,
  },
};

export const buttonStatus = [
  { id: 1, name: "Permohonan Baru", status: "toadmin" },
  { id: 2, name: "Disetujui", status: "tomanager" },
  { id: 3, name: "Ditolak", status: "indecline" },
];

export const buttonSelect: SxProps = {
  fontWeight: "medium",
  outlineColor: theLightGreen.color,
  fontFamily: "Poppins",
  color: theWhite.color,
  textTransform: "none",
  backgroundColor: theLightGreen.color,
  "&:hover": {
    backgroundColor: theLightGreen.color,
  },
};

export const buttonStatusPenggunaAset = [
  { id: 1, name: "Semua Pengguna", status: "all" },
  { id: 2, name: "Permohonan Baru", status: "toadmin" },
  { id: 3, name: "Memadai", status: "tomanager" },
  { id: 4, name: "Disetujui", status: "toaccept" },
  { id: 5, name: "Digunakan", status: "inuse" },
  { id: 6, name: "Ditolak", status: "decline" },
  { id: 7, name: "Dikembalikan", status: "toreturn" },
  { id: 8, name: "Sudah Kembali", status: "donereturn" },
];

export const buttonStatusPermohonanPersetujuan = [
  { id: 1, name: "Semua Pengguna", status: "all" },
  { id: 2, name: "Permohonan Baru", status: "tomanager" },
  { id: 3, name: "Disetujui", status: "toaccept" },
  { id: 4, name: "Ditolak", status: "decline" },
];

export const buttonStatusPermohonanPengadaan = [
  { id: 1, name: "Semua Pengguna", status: "all" },
  { id: 2, name: "Permohonan Baru", status: "toManager" },
  { id: 3, name: "Disetujui", status: "toAccept" },
  { id: 4, name: "Ditolak", status: "decline" },
];

export const buttonStatusPengadaanAset = [
  { id: 1, name: "Semua Pengguna", status: "all" },
  { id: 2, name: "Permohonan Baru", status: "toAdmin" },
  { id: 3, name: "Memadai", status: "toManager" },
  { id: 4, name: "Disetujui", status: "toAccept" },

  { id: 5, name: "Ditolak", status: "decline" },
];