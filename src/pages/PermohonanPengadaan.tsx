import {
  button,
  buttonOutlined,
  buttonSelect,
  buttonStatusPermohonanPengadaan,
} from "../components/PermohonanPengadaan/UpperButton.style";
import React from "react";
import { useQuery, useQueryClient } from "react-query";
import { AxiosError } from "axios";
import { useState, MouseEvent } from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import { Outlet, useNavigate } from "react-router-dom";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { primary } from "../styles/color.styles";
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
import { capstoneAxios } from "../axios-instance";
import Loading from "../components/Loading";
import Error from "../components/Alert/Error";
import { useRef } from "react";
import { useMutation } from "react-query";

const PermohonanPengadaan = () => {
  const [items, setItems] = useState<any[]>([]);
  const [data, setData] = useState<any[]>([]);
  const anchorRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [filter, setFilter] = useState("Semua Pengguna");
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [clickedMenuId, setClickedMenuId] = useState(0);
  const classes = useStyles();
  const [status, setStatus] = useState("all");
  const [statusItem, setStatusItem] = useState("");

  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [mbDdown, setMbDdown] = useState("2%");
  const [mbDdownxs, setMbDdownxs] = useState("2%");

  const queryClient = useQueryClient();

  let { isLoading, error, isError } = useQuery(
    ["ProcurementsByStatus", status],
    async () => {
      const { data } = await capstoneAxios({
        method: "GET",
        url: "/procurements",
        params: {
          status: status,
        },
      });
      if (data.data) {
        setData(data.data);
      } else {
        setData([]);
      }
      return data;
    },
    { enabled: status !== "all" ? true : false }
  );

  const { mutateAsync } = useMutation(
    async (newStatus: any) => {
      await capstoneAxios({
        method: "PUT",
        data: { status: newStatus },
        url: `/procurements/` + clickedMenuId,
        headers: { Authorization: `Bearer ${localStorage.getItem("token")!}` },
      });
    },
    { onSuccess: () => queryClient.invalidateQueries("ProcurementsByStatus") }
  );

  ({ isLoading, error, isError } = useQuery(["allProcurements"], async () => {
    const { data } = await capstoneAxios({
      method: "GET",
      url: "/procurements",
    });

    if (data.data) {
      setItems(data.data);
    } else {
      setItems([]);
    }

    return data;
  }));

  if (isLoading) {
    return (
      <Box sx={{ marginTop: 25 }}>
        <Loading />
      </Box>
    );
  }

  if (isError) {
    return <Error message={(error as AxiosError).response!.data!.message!} />;
  }

  const handleClickAction = (
    e: MouseEvent<HTMLElement>,
    id: number,
    params: any
  ) => {
    setAnchorElUser(e.currentTarget);
    setClickedMenuId(id);
  };

  const handleAcceptRequest = async () => {
    await mutateAsync("toaccept");
    setAnchorElUser(null);
    navigate("/permohonan-pengadaan");
  };

  const handleRejectRequest = async () => {
    await mutateAsync("decline");
    setAnchorElUser(null);
  };

  const handleModal = () => {
    setAnchorElUser(null);
    navigate(`/permohonan-pengadaan/` + clickedMenuId);
  };

  const columns: GridColDef[] = [
    {
      field: "number",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      headerName: "No",
      type: "number",
      width: 50,
    },
    {
      field: "requestDate",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      headerName: "Tanggal",
      width: 190,
    },
    {
      field: "employeeName",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      headerName: "Pemohon",
      type: "date",
      width: 200,
    },

    {
      field: "assetName",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      headerName: "Barang",
      width: 250,
    },
    {
      field: "spesification",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      headerName: "Spesifikasi",
      width: 250,
    },

    {
      field: "detailButton",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      headerName: "Detail",
      width: 125,
      sortable: false,
      filterable: false,
      renderCell: (params: any) => {
        return (
          <>
            <IconButton
              onClick={e => {
                setStatusItem(params.row.status);
                handleClickAction(e, params.id, params);
              }}
            >
              <MoreHorizRoundedIcon fontSize="medium" />
            </IconButton>
            {statusItem === "tomanager" ? (
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
            ) : (
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

  const formatInput = (rows: any) => {
    if (!rows) {
      return [];
    }

    for (let i = 0; i < rows.length; i++) {
      rows[i].number = i + 1;
      rows[i].requestDate = new Date(rows[i].requestDate).toLocaleString();
    }

    return rows;
  };

  const handleFilter = (item: string) => {};

  const handleClick = () => {};
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
    setMbDdown("30%");
    setMbDdownxs("40%");
  };

  const handleMenuItemClick = (item: any) => {
    setSelectedIndex(item.id - 1);
    setOpen(false);
    setMbDdown("2%");
    setMbDdownxs("2%");
  };

  const handleClose = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
    setMbDdown("2%");
    setMbDdownxs("2%");
  };

  return (
    <Layout>
      <Header title="Permohonan Pengadaan" description="" />

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
          {buttonStatusPermohonanPengadaan.map(item => (
            <Button
              key={item.id}
              variant="contained"
              size="small"
              sx={filter === item.name ? button : buttonOutlined}
              onClick={() => {
                setFilter(item.name);
                setStatus(item.status);
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
          marginBottom: { xs: mbDdownxs, sm: mbDdown },
          marginTop: "5%",
          marginLeft: "2%",
          display: { xs: "block", sm: "block", md: "none" },
        }}
      >
        <ButtonGroup
          variant="contained"
          ref={anchorRef}
          aria-label="split button"
        >
          <Button sx={buttonSelect} onClick={handleClick}>
            {selectedIndex <= 10
              ? buttonStatusPermohonanPengadaan[selectedIndex].name
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
                    {buttonStatusPermohonanPengadaan.map(item => (
                      <MenuItem
                        key={item.id}
                        selected={item.id === selectedIndex}
                        onClick={() => {
                          setStatus(item.status);
                          handleMenuItemClick(item);
                          setFilter(item.name);
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
            height: 10 * 60 + 70,
            width: { xs: "100%", sm: "100%", md: "85%" },
            marginTop: 3,
            marginBottom: 1,
            textAlign: "center",
            alignItems: "center",
          }}
          className={classes.root}
        >
          <DataGrid
            rows={status === "all" ? formatInput(items) : formatInput(data)}
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
