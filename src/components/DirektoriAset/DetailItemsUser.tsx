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
} from "@mui/material";

import { CustomFormRead, CustomFormReadMulti } from "./CustomFormRead";
import { DetailAndEmployeeModal } from "../../types/direktori-aset";
import {
  buttonActions,
  containerActionsDetail,
  detailImg,
  title,
} from "./DetailAndUser.style";

const DetailItemsUser = ({ isOpen, handleClose }: DetailAndEmployeeModal) => {
  const { id } = useParams();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

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
      <DialogContent>
        <img
          src="https://source.unsplash.com/random"
          alt="Aset"
          style={detailImg}
        />
        <CustomFormRead label="Nama Aset" defaultValue="Acer" />
        <CustomFormReadMulti
          label="Deskripsi Aset"
          defaultValue="Ini adalah laptop yang akan digunakan untuk kerja"
        />
        <CustomFormRead label="Kategori Aset" defaultValue="Laptop" />

        <Box sx={containerActionsDetail}>
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
    </Dialog>
  );
};

export default DetailItemsUser;
