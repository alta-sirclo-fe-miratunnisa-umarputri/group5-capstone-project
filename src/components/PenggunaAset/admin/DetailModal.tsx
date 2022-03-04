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

import DetailModalInfo from "./DetailModalInfo";
import {
  avatar,
  avatarContainer,
  backButton,
  buttonContainer,
  buttonContainerStart,
  cancellationButton,
  categoryFont,
  itemFont,
} from "./DetailActivity.style";
import { generalFont } from "../../../styles/font.style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery, useQueryClient } from "react-query";
import { capstoneAxios } from "../../../axios-instance";
import { useParams } from "react-router-dom";
import Loading from "../../Loading";
import Error from "../../Alert/Error";
import { AxiosError } from "axios";
import { useMutation } from "react-query";

const DetailModal = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => {
    setIsOpen(false);
    navigate("/pengguna-aset");
  };
  const queryClient = useQueryClient();

  let { isLoading, error, isError, data } = useQuery(
    ["ApplicationsById"],
    async () => {
      const { data } = await capstoneAxios({
        method: "GET",
        url: `/applications/` + id,
      });

      return data;
    }
  );

  const { mutateAsync } = useMutation(
    async (newStatus: any) => {
      await capstoneAxios({
        method: "PUT",
        data: { status: newStatus },
        url: `/applications/` + id,
        headers: { Authorization: `Bearer ${localStorage.getItem("token")!}` },
      });
    },
    { onSuccess: () => queryClient.invalidateQueries("allApplications") }
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
    navigate("/pengguna-aset");
  };

  const handleReturn = async () => {
    await mutateAsync("donereturn");
  };

  const askApproval = async () => {
    await mutateAsync("tomanager");
  };

  const handleDecline = async () => {
    await mutateAsync("decline");
  };

  const handleAccept = async () => {
    await mutateAsync("inuse");
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
              <Avatar src={data.data.photo} alt="Item" sx={avatar} />
            </Grid>

            <Grid item xs={7} pl={3}>
              <Typography variant="body2" gutterBottom sx={categoryFont}>
                {data.data.categoryname}
              </Typography>
              <Typography variant="h5" gutterBottom sx={itemFont}>
                {data.data.assetname}
              </Typography>
            </Grid>
          </Grid>
        )}
        {data && (
          <Grid container mt={2}>
            <Grid item xs={5}>
              <DetailModalInfo
                label="Pemohon"
                description={data.data.employeename}
              />
              <DetailModalInfo
                label="Manager"
                description={
                  data.data.managerid !== 0
                    ? data.data.managerid
                    : "belum ditentukan"
                }
              />
              <DetailModalInfo label="Divisi" description="Tech" />

              <DetailModalInfo
                label="Status Pengajuan"
                description={
                  data.data.status === "toAdmin" ||
                  data.data.status === "tomanager"
                    ? "Menunggu Persetujuan"
                    : "Disetujui"
                }
              />
            </Grid>

            <Grid item xs={7}>
              <DetailModalInfo
                label="Waktu Pengajuan"
                description={data.data.requestdate.toLocaleString()}
              />
              <DetailModalInfo
                label="Waktu Pengembalian"
                description={
                  data.data.status !== "toAdmin" ||
                  data.data.status !== "tomanager"
                    ? data.data.returndate
                    : "belum ditentukan"
                }
              />
              <DetailModalInfo label="Sisa Waktu" description="3 hari" />
              <DetailModalInfo
                label="Keterangan"
                description={data.data.description}
              />
            </Grid>
          </Grid>
        )}

        {data && data.data.status !== "toAdmin" && (
          <Grid container mt={2} sx={{ backroundColor: "#000000 " }}>
            <Grid item xs={5}>
              <DetailModalInfo
                label="Manager"
                description={data.data.manager}
              />
            </Grid>
            <Grid item xs={7}>
              <Button
                sx={{
                  textTransform: "none",
                  fontFamily: "Poppins",
                  fontWeight: "medium",
                }}
                disabled={data.data.status === "toAdmin" ? false : true}
                onClick={askApproval}
              >
                {data.data.status === "tomanager"
                  ? "Minta Persetujuan"
                  : "Menunggu Persetujuan"}
              </Button>
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
              {data && data.data.status === "toAdmin" && (
                <>
                  <Button sx={cancellationButton} onClick={handleDecline}>
                    Tolak
                  </Button>
                  <Button variant="contained" sx={backButton} disabled={true}>
                    Terima Permohonan
                  </Button>
                </>
              )}

              {data && data.data.status === "toReturn" && (
                <>
                  <Button sx={cancellationButton} onClick={handleDecline}>
                    Tolak
                  </Button>
                  <Button variant="contained" sx={backButton}>
                    {" "}
                    onClick={handleReturn}
                    Terima Permohonan
                  </Button>
                </>
              )}

              {data && data.data.status === "toAccept" && (
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

              {data && data.data.status === "inuse" && (
                <>
                  <Button sx={cancellationButton}>Kembali</Button>
                  <Button
                    variant="contained"
                    sx={backButton}
                    onClick={handleCancellation}
                  >
                    Ajukan Pengembalian
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

export default DetailModal;
