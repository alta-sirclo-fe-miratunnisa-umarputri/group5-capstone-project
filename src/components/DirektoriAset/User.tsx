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
} from "@mui/material";

import { DetailAndEmployeeModal } from "../../types/direktori-aset";
import {
  buttonActions,
  containerActionsUser,
  title,
  userImg,
} from "./DetailAndUser.style";
import { primary } from "../../styles/color.styles";
import UserTable from "./UserTable";

const User = ({ isOpen, handleClose }: DetailAndEmployeeModal) => {
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
            Pengguna Aset
          </Typography>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Grid
          container
          spacing={2}
          sx={{ display: "flex", flexDirection: "row" }}
        >
          <Grid item xs={12} md={6}>
            <img
              src="https://source.unsplash.com/random"
              alt="Aset"
              style={userImg}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Box>
              <Typography
                variant="subtitle2"
                sx={{
                  ...primary,
                  fontWeight: "regular",
                  fontFamily: "Poppins",
                }}
              >
                Laptop
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  ...primary,
                  fontWeight: "medium",
                  fontFamily: "Poppins",
                }}
              >
                Lenovo Think Pad Yoga
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <UserTable />

        <Box sx={containerActionsUser}>
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

export default User;
