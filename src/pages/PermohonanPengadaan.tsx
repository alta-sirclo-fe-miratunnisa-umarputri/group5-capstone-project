import {
  button,
  buttonOutlined,
  buttonSelect,
  buttonStatus,
} from "../components/PermohonanPengadaan/UpperButton.style";
import React from "react";
import { useState, MouseEvent } from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { makeStyles } from "@mui/styles";
import { bgwhite, primary, quaternary, tertiary } from "../styles/color.styles";
import { useStyles } from "../components/PermohonanPengadaan/table.style";
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Button,
  ButtonGroup,
} from "@mui/material";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuList from "@mui/material/MenuList";

const PermohonanPengadaan = () => {
  const [filter, setFilter] = useState("");
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [clickedMenuId, setClickedMenuId] = useState(0);
  const classes = useStyles();
  const [isOpenDetail, setIsOpenDetail] = useState(false);
  const [isOpenUser, setIsOpenUser] = useState(false);
  const [status, setStatus] = useState("");
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [mbDdown, setMbDdown] = useState("5%");

  const handleClickAction = (e: MouseEvent<HTMLElement>, id: number) => {
    setStatus("toadmin");
    setAnchorElUser(e.currentTarget);
    setClickedMenuId(id);
  };

  const handleCloseDetail = () => {
    setIsOpenDetail(false);
    navigate("/permohonan-pengadaan");
  };

  const handleOpenDetail = () => {
    setIsOpenDetail(true);
  };

  const handleOpenUser = () => {
    setIsOpenUser(true);
  };

  const handleCloseUser = () => {
    setIsOpenUser(false);
    navigate("/permohonan-pengadaan");
  };

  const handleAcceptRequest = () => {
    console.log(clickedMenuId);
  };

  const handleRejectRequest = () => {
    console.log(clickedMenuId);
  };

  const handleModal = () => {
    navigate(`/permohonan-pengadaan/` + clickedMenuId);
  };

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
      field: "tanggalPeminjaman",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      headerName: "Tanggal",
      width: 190,
    },
    {
      field: "pemohonPeminjaman",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      headerName: "Pemohon",
      type: "date",
      width: 200,
    },
    {
      field: "kategori",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      headerName: "Kategori Aset",
      width: 180,
    },
    {
      field: "namaAset",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      headerName: "Barang",
      width: 250,
    },
    {
      field: "detailButton",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      headerName: "Aksi",
      width: 125,
      sortable: false,
      filterable: false,
      renderCell: (params: any) => {
        return (
          <>
            <IconButton onClick={e => handleClickAction(e, params.id)}>
              <MoreHorizRoundedIcon fontSize="medium" />
            </IconButton>
            {status === "toadmin" && (
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
                  <Typography
                    variant="subtitle2"
                    sx={{
                      ...primary,
                      textAlign: "center",
                      fontFamily: "Poppins",
                      fontWeight: "medium",
                    }}
                  >
                    Terima Permohonan
                  </Typography>
                </MenuItem>

                <MenuItem onClick={handleRejectRequest}>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      ...primary,
                      textAlign: "center",
                      fontFamily: "Poppins",
                      fontWeight: "medium",
                    }}
                  >
                    Tolak Permohonan
                  </Typography>
                </MenuItem>

                <MenuItem onClick={handleModal}>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      ...primary,
                      textAlign: "center",
                      fontFamily: "Poppins",
                      fontWeight: "medium",
                    }}
                  >
                    Lihat Detail
                  </Typography>
                </MenuItem>
              </Menu>
            )}
          </>
        );
      },
    },
  ];

  const rows = [
    {
      id: 1,
      nomor: 1,
      tanggalPeminjaman: new Date(),
      pemohonPeminjaman: "Jemi",
      kategori: "Laptop",
      namaAset: "Lenovo Think Pad Yoga",
      status: "Digunakan",
    },
    {
      id: 2,
      nomor: 2,
      tanggalPeminjaman: new Date(),
      pemohonPeminjaman: "Ratu",
      kategori: "Laptop",
      namaAset: "Lenovo Think Pad Yoga",
      status: "Digunakan",
    },
    {
      id: 3,
      nomor: 2,
      tanggalPeminjaman: new Date(),
      pemohonPeminjaman: "Ratu",
      kategori: "Laptop",
      namaAset: "Lenovo Think Pad Yoga",
      status: "Digunakan",
    },
  ];
  const fetchNav = async (data: any) => {
    console.log(data);
  };
  const fetchData = async () => {
    console.log("all");
  };

  const handleFilter = (item: string) => {
    fetchNav(item);
  };

  const handleClick = () => {};
  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
    setMbDdown("25%");
  };

  const anchorRef = React.useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleMenuItemClick = (item: any) => {
    setSelectedIndex(item.id - 1);
    setOpen(false);
    console.log(item.id);
    setMbDdown("5%");
  };

  const handleAllMenuClick = () => {
    setSelectedIndex(100);
    setOpen(false);
  };

  const handleClose = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  return (
    <Layout>
      <Header
        title="Pengadaan Aset"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit."
      />

      <Box
        sx={{
          textAlign: "center",
          marginTop: "2%",
          display: { xs: "none", sm: "none", md: "block" },
        }}
      >
        <ButtonGroup
          variant="contained"
          aria-label="contained primary button group"
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            backgroundColor: "white",
            boxShadow: 0,
          }}
        >
          <Button
            sx={filter === "" ? button : buttonOutlined}
            onClick={data => {
              setFilter("");
              fetchData();
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
        </ButtonGroup>
      </Box>
      <Box
        sx={{
          marginBottom: `${mbDdown}`,
          marginTop: "5%",
          marginLeft: "2%",
          display: { sx: "block", sm: "block", md: "none" },
        }}
      >
        <ButtonGroup
          variant="contained"
          ref={anchorRef}
          aria-label="split button"
        >
          <Button sx={buttonSelect} onClick={handleClick}>
            {selectedIndex <= 10
              ? buttonStatus[selectedIndex].name
              : "Semua Pengguna"}
          </Button>
          <Button
            sx={buttonSelect}
            size="small"
            aria-controls={open ? "split-button-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-label="select merge strategy"
            aria-haspopup="menu"
            onClick={handleToggle}
          >
            <ArrowDropDownIcon />
          </Button>
        </ButtonGroup>

        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList id="split-button-menu">
                    <MenuItem
                      onClick={() => {
                        handleAllMenuClick();
                      }}
                    >
                      Semua Pengguna
                    </MenuItem>
                    {buttonStatus.map(item => (
                      <MenuItem
                        key={item.id}
                        selected={item.id === selectedIndex}
                        onClick={() => {
                          handleMenuItemClick(item);
                        }}
                      >
                        {item.name}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Box>

      <Outlet />
      <Box
        sx={{
          textAlign: "center",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            height: rows.length * 100,
            width: "80%",
            marginTop: 3,
            marginBottom: 1,
            // marginLeft: { sx: 0, sm: 0, md: "10%" },
            // marginRight: { sx: 0, sm: 0, md: "10%" },
            textAlign: "center",
            alignItems: "center",
          }}
          className={classes.root}
        >
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
          />
        </Box>
      </Box>
    </Layout>
  );
};

export default PermohonanPengadaan;
