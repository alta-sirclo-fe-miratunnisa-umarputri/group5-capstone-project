import { useState, MouseEvent } from "react";
import { useMutation, useQueryClient } from "react-query";
import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import { makeStyles } from "@mui/styles";

import { bgwhite, primary, tertiary } from "../../styles/color.styles";
import { dotMenu, titleCarousel } from "./Employee/ActivityCarousel.style";
import { ROLE } from "../../constants";
import { capstoneAxios } from "../../axios-instance";

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

const BerandaTable = ({ title, data, role }: any) => {
  const classes = useStyles();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [clickedMenuId, setClickedMenuId] = useState(0);

  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(
    async (newStatus: any) => {
      await capstoneAxios({
        method: "PUT",
        data: { status: newStatus },
        url: `/applications/${clickedMenuId}`,
        headers: { Authorization: `Bearer ${localStorage.getItem("token")!}` },
      });
    },
    { onSuccess: () => queryClient.invalidateQueries("tableBeranda") }
  );

  const handleClickAction = (e: MouseEvent<HTMLElement>, id: number) => {
    setAnchorElUser(e.currentTarget);
    setClickedMenuId(id);
  };

  const handleUpdateStatus = async (status: string) => {
    await mutateAsync(status);
    setAnchorElUser(null);
  };

  const columns: GridColDef[] = [
    {
      field: "number",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      headerName: "No",
      type: "number",
      width: 60,
    },
    {
      field: "requestdate",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      headerName: "Tanggal",
      width: 190,
    },
    {
      field: "activity",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      headerName: "Jenis Aktivitas",
      type: "date",
      width: 200,
    },
    {
      field: "categoryname",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      headerName: "Kategori Aset",
      width: 150,
    },
    {
      field: "assetname",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      headerName: "Barang",
      width: 215,
    },
    {
      field: "aksi",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      headerName: "Aksi",
      width: 100,
      sortable: false,
      filterable: false,
      renderCell: (params: any) => {
        return (
          <>
            <IconButton onClick={(e) => handleClickAction(e, params.id)}>
              <MoreHorizRoundedIcon fontSize="medium" />
            </IconButton>
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
              {role === ROLE.ADMIN && (
                <Box>
                  <MenuItem onClick={() => handleUpdateStatus("tomanager")}>
                    <Typography variant="subtitle2" sx={dotMenu}>
                      Terima Permohonan
                    </Typography>
                  </MenuItem>
                  <MenuItem onClick={() => handleUpdateStatus("decline")}>
                    <Typography variant="subtitle2" sx={dotMenu}>
                      Tolak Permohonan
                    </Typography>
                  </MenuItem>
                </Box>
              )}

              {role === ROLE.MANAGER && (
                <Box>
                  <MenuItem onClick={() => handleUpdateStatus("toaccept")}>
                    <Typography variant="subtitle2" sx={dotMenu}>
                      Terima Permohonan
                    </Typography>
                  </MenuItem>
                  <MenuItem onClick={() => handleUpdateStatus("decline")}>
                    <Typography variant="subtitle2" sx={dotMenu}>
                      Tolak Permohonan
                    </Typography>
                  </MenuItem>
                </Box>
              )}

              {role === ROLE.EMPLOYEE && (
                <MenuItem>
                  <Typography variant="subtitle2" sx={dotMenu}>
                    Ajukan Peminjaman Ulang
                  </Typography>
                </MenuItem>
              )}
            </Menu>
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
      rows[i].requestdate = new Date(rows[i].requestdate).toLocaleString();
      rows[i].activity = "Peminjaman Aset";
    }

    return rows;
  };

  return (
    <Box
      sx={{
        height: 370,
        width: "100%",
        marginBottom: 4,
      }}
      className={classes.root}
    >
      <Typography variant="h6" sx={titleCarousel} gutterBottom>
        {title}
      </Typography>
      <DataGrid
        rows={formatInput(data)}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        isRowSelectable={() => false}
      />
    </Box>
  );
};

export default BerandaTable;
