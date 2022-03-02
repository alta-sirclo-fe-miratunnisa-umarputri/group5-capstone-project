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
import { capstoneAxios } from "../../axios-instance";
import { useQuery } from "react-query";
import Error from "../Alert/Error";
import { AxiosError } from "axios";
import Loading from "../Loading";
import { ROLE } from "../../constants";

const UserList = ({ isOpen, handleClose, id }: DetailAndEmployeeModal) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const role = localStorage.getItem("role")!;

  const { isLoading, isError, error, data } = useQuery(
    ["getUsage", id],
    async () => {
      const { data } = await capstoneAxios({
        method: "GET",
        url: `/items/${id}/usage`,
      });

      return data;
    },
    { enabled: id && id !== 0 && role === ROLE.ADMIN ? true : false, retry: 0 }
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
            Pengguna Item
          </Typography>
        </Box>
      </DialogTitle>
      {isLoading ? (
        <Loading />
      ) : (
        data && (
          <DialogContent>
            <Grid
              container
              spacing={2}
              sx={{ display: "flex", flexDirection: "row" }}
            >
              <Grid item xs={12} md={6}>
                <img src={data.data.picture} alt="Aset" style={userImg} />
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
                    {data.data.category}
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      ...primary,
                      fontWeight: "medium",
                      fontFamily: "Poppins",
                    }}
                  >
                    {data.data.name}
                  </Typography>
                </Box>
              </Grid>
            </Grid>

            <UserTable
              data={data.data.users || [] /* userList ? userList : [] */}
            />

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
        )
      )}
    </Dialog>
  );
};

export default UserList;
