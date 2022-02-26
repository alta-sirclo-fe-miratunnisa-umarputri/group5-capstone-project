import { SxProps } from "@mui/material";
import { primary, tertiary, bgwhite } from "../../styles/color.styles";

export const button: SxProps = {
  fontWeight: "medium",
  width: "13%",
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
  width: "13%",
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
