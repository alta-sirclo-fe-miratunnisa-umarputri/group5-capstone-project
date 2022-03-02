import { useParams } from "react-router-dom";
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
import DetailActivityInfo from "./DetailActivityInfo";
import {
  availabilityFont,
  avatar,
  avatarContainer,
  backButton,
  buttonContainer,
  cancellationButton,
  categoryFont,
  itemFont,
} from "./DetailActivity.style";
import { generalFont } from "../../../styles/font.style";
import { EMPLOYEE_STATUS } from "../../../constants";
import { capstoneAxios } from "../../../axios-instance";
import { useQuery } from "react-query";
import Loading from "../../Loading";

const DetailActivity = ({ isOpen, handleClose }: DetailAndEmployeeModal) => {
  const { id } = useParams();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const { data, isLoading } = useQuery(
    "getDetailApplication",
    async () => {
      const { data } = await capstoneAxios({
        method: "GET",
        url: `/applications/${id}`,
      });

      return data;
    },
    { retry: 0, enabled: id ? true : false }
  );

  const handleCancellation = () => {
    console.log("batalkan pengajuan");
  };

  const handleReturn = () => {
    console.log("ajukan pengembalian");
  };

  const handleReapply = () => {
    console.log("ajukan peminjaman ulang");
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
      {isLoading ? (
        <Loading />
      ) : (
        data && (
          <DialogContent>
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

            <Grid container mt={2}>
              <Grid item xs={5}>
                <DetailActivityInfo
                  label="Pemohon"
                  description={data.data.employeename}
                />
                <DetailActivityInfo
                  label="Status Pengajuan"
                  description={data.data.status}
                />
              </Grid>

              <Grid item xs={7}>
                <DetailActivityInfo
                  label="Waktu Pengajuan"
                  description={new Date(data.data.requestdate).toLocaleString()}
                />
                <DetailActivityInfo
                  label="Keterangan"
                  description={data.data.description}
                />
              </Grid>
            </Grid>

            <DialogActions>
              <Grid container mt={2}>
                <Grid item xs={4}></Grid>
                <Grid item xs={8} sx={buttonContainer}>
                  {data.data.status === EMPLOYEE_STATUS.WAITING_APROVAL && (
                    <>
                      <Button
                        sx={cancellationButton}
                        onClick={handleCancellation}
                      >
                        Batalkan Pengajuan
                      </Button>
                      <Button
                        variant="contained"
                        sx={backButton}
                        onClick={() => handleClose(true)}
                      >
                        Kembali
                      </Button>
                    </>
                  )}

                  {data.data.status === EMPLOYEE_STATUS.APPROVED && (
                    <>
                      <Button
                        sx={cancellationButton}
                        onClick={() => handleClose(true)}
                      >
                        Kembali
                      </Button>
                      <Button
                        variant="contained"
                        sx={backButton}
                        onClick={handleReturn}
                      >
                        Ajukan Pengembalian
                      </Button>
                    </>
                  )}

                  {data.data.status === EMPLOYEE_STATUS.REJECTED && (
                    <>
                      <Button
                        sx={cancellationButton}
                        onClick={() => handleClose(true)}
                      >
                        Kembali
                      </Button>
                      <Button
                        variant="contained"
                        sx={backButton}
                        onClick={handleReapply}
                      >
                        Ajukan Peminjaman Ulang
                      </Button>
                    </>
                  )}
                </Grid>
                <Grid item></Grid>
              </Grid>
            </DialogActions>
          </DialogContent>
        )
      )}
    </Dialog>
  );
};

export default DetailActivity;
