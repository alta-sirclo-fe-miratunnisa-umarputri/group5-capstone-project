import { Box, CircularProgress } from "@mui/material";

const Loading = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        minHeight: 50,
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default Loading;
