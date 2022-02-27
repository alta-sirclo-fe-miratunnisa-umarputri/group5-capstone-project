import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
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

import Loading from "../Loading";
import Error from "../Alert/Error";

import { CustomFormRead, CustomFormReadMulti } from "./CustomFormRead";
import { DetailAndEmployeeModal } from "../../types/direktori-aset";
import {
  buttonActions,
  detailAsetButton,
  detailImg,
  title,
} from "./DetailAndUser.style";
import { capstoneAxios } from "../../axios-instance";

const DetailAssetEmployee = ({
  isOpen,
  handleClose,
}: DetailAndEmployeeModal) => {
  const { id } = useParams();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const { isLoading, isError, error, data } = useQuery(
    ["getByAssetById", id],
    async () => {
      const { data } = await capstoneAxios({
        method: "GET",
        url: `/assets/${id}`,
      });

      return data.data;
    },
    {
      retry: 0,
      enabled: id ? true : false,
    }
  );

  if (isError) {
    return <Error message={(error as AxiosError).response!.data!.message!} />;
  }

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
            Detail Aset
          </Typography>
        </Box>
      </DialogTitle>
      {isLoading ? (
        <Loading />
      ) : (
        data && (
          <DialogContent>
            <img src={data.picture} alt="Aset" style={detailImg} />
            <CustomFormRead label="Nama Aset" defaultValue={data.name} />
            <CustomFormReadMulti
              label="Deskripsi Aset"
              defaultValue={data.description}
            />
            <CustomFormRead
              label="Kategori Aset"
              defaultValue={data.categoryname}
            />

            <Box sx={detailAsetButton}>
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
        )
      )}
    </Dialog>
  );
};

export default DetailAssetEmployee;
