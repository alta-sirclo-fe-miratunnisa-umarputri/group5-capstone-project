import { SxProps } from "@mui/material";
import { primary, tertiary, bgwhite } from "../../styles/color.styles";

export const button: SxProps = {
  fontWeight: "medium",
  outlineColor: tertiary.color,
  width: "20%",
  fontFamily: "Poppins",
  color: bgwhite.backgroundColor,
  textTransform: "none",
  backgroundColor: tertiary.color,
  "&:hover": {
    backgroundColor: tertiary.color,
  },
};

export const buttonOutlined: SxProps = {
  fontWeight: "medium",
  width: "20%",
  fontFamily: "Poppins",
  color: primary.color,
  textTransform: "none",
  backgroundColor: bgwhite.backgroundColor,
  "&:hover": {
    backgroundColor: tertiary.color,
    color: bgwhite.backgroundColor,
  },
};

export const buttonStatus = [
  { id: 1, name: "Permohonan Baru", status: "toadmin" },
  { id: 2, name: "Disetujui", status: "tomanager" },
  { id: 3, name: "Ditolak", status: "indecline" },
];

export const buttonSelect: SxProps = {
  fontWeight: "medium",
  outlineColor: tertiary.color,
  fontFamily: "Poppins",
  color: bgwhite.backgroundColor,
  textTransform: "none",
  backgroundColor: tertiary.color,
  "&:hover": {
    backgroundColor: tertiary.color,
  },
};

export const buttonStatusPenggunaAset = [
  { id: 1, name: "Semua Pengguna", status: "all" },
  { id: 2, name: "Permohonan Baru", status: "toadmin" },
  { id: 3, name: "Disetujui", status: "tomanager" },
  { id: 4, name: "Digunakan", status: "inuse" },
  { id: 5, name: "Ditolak", status: "indecline" },
  { id: 6, name: "Dikembalikan", status: "toreturn" },
  { id: 7, name: "Sudah Kembali", status: "donereturn" },
];
