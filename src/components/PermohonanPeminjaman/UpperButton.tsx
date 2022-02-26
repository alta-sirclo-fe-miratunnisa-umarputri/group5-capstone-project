import { Box } from "@mui/material";
import { useState } from "react";
import { button, buttonOutlined } from "./UpperButton.style";
import { Button } from "@mui/material";

export const UpButton = () => {
  const [filter, setFilter] = useState("");
  const buttonStatus = [
    { id: 1, name: "Permohonan Baru" },
    { id: 2, name: "Butuh Persetujuan" },
    { id: 3, name: "Disetujui" },
    { id: 4, name: "Ditolak" },
  ];
  const handleSubmit = async (search?: any) => {};

  const handleFilter = (item: string) => {
    handleSubmit(item);
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
        onClick={() => {
          setFilter("");
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
            handleFilter(item.name);
          }}
        >
          {item.name}
        </Button>
      ))}
    </Box>
  );
};
