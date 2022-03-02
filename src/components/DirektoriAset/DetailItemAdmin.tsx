import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { AxiosError } from "axios";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";

import { CustomFormRead, CustomFormReadMulti } from "./CustomFormRead";
import Error from "../Alert/Error";
import Loading from "../Loading";

import { DetailAndEmployeeModal } from "../../types/direktori-aset";
import {
  buttonActions,
  containerActionsDetail,
  detailImg,
  title,
} from "./DetailAndUser.style";
import { capstoneAxios } from "../../axios-instance";
import { ROLE } from "../../constants";

const DetailItemAdmin = ({ isOpen, handleClose }: DetailAndEmployeeModal) => {
  const { id } = useParams();
  const idNum = Number(id);
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const role = localStorage.getItem("role")!;

  const { isLoading, isError, error, data } = useQuery(
    ["getItems", id],
    async () => {
      const { data } = await capstoneAxios({
        method: "GET",
        url: `/items/${idNum}`,
      });

      return data;
    },
    {
      enabled: idNum && idNum !== 0 && role === ROLE.ADMIN ? true : false,
      retry: 0,
    }
  );

  const {
    isLoading: isLoadingMutation,
    isError: isErrorMutation,
    error: errorMutation,
    mutateAsync,
  } = useMutation(
    async (newStatus: string) => {
      await capstoneAxios({
        method: "PUT",
        url: `/items/${id}`,
        data: { availableStatus: newStatus },
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("directoryAssetAdmin");
        queryClient.invalidateQueries("filterItemsByCategory");
        queryClient.invalidateQueries("filterItemsByAvail");
      },
    }
  );

  if (isError) {
    return <Error message={(error as AxiosError).response!.data!.message!} />;
  }

  if (isErrorMutation) {
    return (
      <Error message={(errorMutation as AxiosError).response!.data!.message!} />
    );
  }

  const handleMaintenance = async (status: string) => {
    await mutateAsync(status);
    handleClose(true);
    navigate("/direktori-aset");
  };

  const getMaintenanceButton = (status: string) => {
    const label =
      status === "tersedia" ? "Pemeliharaan Aset" : "Pemeliharaan Aset Selesai";

    const updateStatusData =
      status === "tersedia" ? "pemeliharaan" : "tersedia";

    return (
      <LoadingButton
        variant="contained"
        size="small"
        sx={buttonActions}
        onClick={() => handleMaintenance(updateStatusData)}
        loadingIndicator="Loading..."
        loading={isLoadingMutation}
      >
        {label}
      </LoadingButton>
    );
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
          <Typography variant="h5" sx={title}>
            Detail Item
          </Typography>
        </Box>
      </DialogTitle>
      {isLoading && <Loading />}
      {data && (
        <DialogContent>
          <img src={data.data.picture} alt="Aset" style={detailImg} />
          <CustomFormRead label="Nama Aset" defaultValue={data.data.name} />
          <CustomFormReadMulti
            label="Deskripsi Aset"
            defaultValue={data.data.description}
          />
          <CustomFormRead
            label="Kategori Aset"
            defaultValue={data.data.category}
          />
          <CustomFormRead
            label="Status"
            defaultValue={
              data.data.availableStatus[0].toUpperCase() +
              data.data.availableStatus.slice(1)
            }
          />

          <Box sx={containerActionsDetail}>
            {["tersedia", "pemeliharaan"].includes(data.data.availableStatus) &&
              getMaintenanceButton(data.data.availableStatus)}

            <Button
              variant="contained"
              size="small"
              sx={buttonActions}
              onClick={() => handleClose(true)}
            >
              Kembali
            </Button>
          </Box>
        </DialogContent>
      )}
    </Dialog>
  );
};

export default DetailItemAdmin;
