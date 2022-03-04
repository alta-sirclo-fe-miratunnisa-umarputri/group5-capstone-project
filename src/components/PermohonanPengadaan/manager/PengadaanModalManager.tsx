// import { useParams } from "react-router-dom";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  Box,
  useMediaQuery,
  useTheme,
  Grid,
  Avatar,
  DialogActions,
} from "@mui/material";

import { DetailAndEmployeeModal } from "../../../types/direktori-aset";
import DetailModalInfo from "./DetailModalInfo";
import {
  availabilityFont,
  avatar,
  avatarContainer,
  backButton,
  buttonContainer,
  buttonContainerStart,
  cancellationButton,
  categoryFont,
  itemFont,
} from "../../PenggunaAset/admin/DetailActivity.style";
import { generalFont } from "../../../styles/font.style";
import { EMPLOYEE_STATUS } from "../../../constants";
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery, useQueryClient } from "react-query";
import { capstoneAxios } from "../../../axios-instance";
import { useParams } from "react-router-dom";
import Loading from "../../Loading";
import Error from "../../Alert/Error";
import { AxiosError } from "axios";
import { useMutation, QueryClient } from "react-query";

const PengadaanModalManager = () => {
  const role = localStorage.getItem("role");
  const [Procurement, setProcurement] = useState<any[]>([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => {
    setIsOpen(false);
    navigate("/permohonan-pengadaan");
  };
  const [status, setStatus] = useState("");
  const queryClient = useQueryClient();

  let { isLoading, error, isError, refetch, data } = useQuery(
    ["ProcurementById"],
    async () => {
      const { data } = await capstoneAxios({
        method: "GET",
        url: `/procurements/` + id,
      });
      // console.log(data.data.id);
      setProcurement(data.data);
      console.log(data.data.employeeName);
      return data;
    }
  );

  const { mutateAsync } = useMutation(
    async (newStatus: any) => {
      await capstoneAxios({
        method: "PUT",
        data: { status: newStatus },
        url: `/procurements/` + id,
        headers: { Authorization: `Bearer ${localStorage.getItem("token")!}` },
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("ProcurementsByStatus");
        queryClient.invalidateQueries("allProcurements");
      },
    }
  );

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

  const handleCancellation = () => {
    navigate("/permohonan-pengadaan");
  };

  const handleDecline = async () => {
    await mutateAsync("decline");
    navigate("/permohonan-pengadaan");
  };

  const handleAccept = async () => {
    await mutateAsync("toaccept");
    navigate("/permohonan-pengadaan");
  };

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      fullScreen={fullScreen}
      fullWidth
    >
      <DialogTitle>
        <Box>
          <Typography variant="h5" sx={generalFont}>
            Detail Permohonan
          </Typography>
        </Box>
      </DialogTitle>

      <DialogContent>
        {data && (
          <Grid container>
            <Grid item xs={5} sx={avatarContainer}>
              <Avatar alt="Item" sx={avatar} />
            </Grid>

            <Grid item xs={7} pl={3}>
              <Typography variant="h5" gutterBottom sx={itemFont}>
                {data.data.assetName}
              </Typography>
            </Grid>
          </Grid>
        )}
        {data && (
          <Grid container mt={2}>
            <Grid item xs={5}>
              <DetailModalInfo
                label="Pemohon"
                description={data.data.employeeName}
              />
              <DetailModalInfo
                label="Manager"
                description={
                  data.data.managerName !== null
                    ? data.data.managerName
                    : "belum ditentukan"
                }
              />
              <DetailModalInfo label="Divisi" description="Tech" />

              <DetailModalInfo
                label="Status Pengajuan"
                description={
                  data.data.status === "toadmin" ||
                  data.data.status === "tomanager"
                    ? "Menunggu Persetujuan"
                    : data.data.status === "toaccept"
                    ? "Disetujui"
                    : "Ditolak"
                }
              />
            </Grid>

            <Grid item xs={7}>
              <DetailModalInfo
                label="Waktu Pengajuan"
                description={data.data.requestDate.toLocaleString()}
              />
              <DetailModalInfo
                label="Spesifikasi"
                description={data.data.spesification}
              />

              <DetailModalInfo
                label="Keterangan"
                description={data.data.description}
              />
            </Grid>
          </Grid>
        )}

        <DialogActions>
          <Grid container mt={2}>
            <Grid item xs={4} sx={buttonContainerStart}>
              {" "}
              <Button
                variant="contained"
                sx={backButton}
                onClick={handleCancellation}
              >
                Kembali
              </Button>
            </Grid>
            <Grid item xs={8} sx={buttonContainer}>
              {data && data.data.status === "tomanager" && (
                <>
                  <Button sx={cancellationButton} onClick={handleDecline}>
                    Tolak
                  </Button>
                  <Button
                    variant="contained"
                    sx={backButton}
                    onClick={handleAccept}
                  >
                    Terima Permohonan
                  </Button>
                </>
              )}
            </Grid>

            <Grid item></Grid>
          </Grid>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default PengadaanModalManager;
