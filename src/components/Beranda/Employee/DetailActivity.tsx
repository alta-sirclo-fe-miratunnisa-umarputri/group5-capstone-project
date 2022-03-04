import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "react-query";
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

import Loading from "../../Loading";
import DetailActivityInfo from "./DetailActivityInfo";

import { DetailAndEmployeeModal } from "../../../types/direktori-aset";
import { capstoneAxios } from "../../../axios-instance";
import {
  avatar,
  avatarContainer,
  backButton,
  buttonContainer,
  cancellationButton,
  categoryFont,
  itemFont,
} from "./DetailActivity.style";
import { generalFont } from "../../../styles/font.style";

const DetailActivity = ({ isOpen, handleClose }: DetailAndEmployeeModal) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery(
    "getDetailActivity",
    async () => {
      const { data } = await capstoneAxios({
        method: "GET",
        url: `/applications/${id}`,
      });

      console.log("data detail =>", data);

      return data;
    },
    { retry: 0, enabled: id ? true : false }
  );

  const { mutateAsync } = useMutation(
    async (newData: any) => {
      await capstoneAxios({
        method: "PUT",
        url: `/applications/${id}`,
        data: newData,
        headers: { Authorization: `Bearer ${localStorage.getItem("token")!}` },
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("getActivity");
      },
    }
  );

  const handleReturn = async () => {
    await mutateAsync({
      status: "toreturn",
    });
  };

  const handleReapply = () => {
    navigate("/pemeliharaan");
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
            Detail Aktivitas
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
                  {data.data.status !== "inuse" &&
                    data.data.status !== "decline" && (
                      <Button
                        variant="contained"
                        sx={backButton}
                        onClick={() => handleClose(true)}
                      >
                        Kembali
                      </Button>
                    )}

                  {data.data.status === "inuse" && (
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

                  {data.data.status === "decline" && (
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
