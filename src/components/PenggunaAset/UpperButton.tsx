import { Box } from "@mui/material";
import { useState } from "react";
import { button, buttonOutlined } from "./UpperButton.style";
import { Button } from "@mui/material";

export const UpButton = () => {
  const [filter, setFilter] = useState("");
  const buttonStatus = [
    { id: 1, name: "Permohonan Baru", status: "toadmin" },
    { id: 2, name: "Disetujui", status: "tomanager" },
    { id: 3, name: "Digunakan", status: "inuse" },
    { id: 4, name: "Ditolak", status: "indecline" },
    { id: 5, name: "Dikembalikan", status: "toreturn" },
    { id: 6, name: "Sudah Kembali", status: "donereturn" },
  ];
  const handleSubmit = async (search?: any) => {};
  const fetchNav = async (data: any) => {
    console.log(data);
  };

  const handleFilter = (item: string) => {
    fetchNav(item);
    setFilter(item);
  };
  return (
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
          fetchNav(data);
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
  );
};
