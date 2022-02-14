import { FormEvent, FormEventHandler } from "react";
import { Link } from "react-router-dom";
import { LoadingButton } from "@mui/lab";
import {
  Box,
  createTheme,
  FormLabel,
  Grid,
  responsiveFontSizes,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";

const theme = createTheme();
const responsiveFontSize = responsiveFontSizes(theme);

const SignUp = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    // console.log("event =>", data.get("name"));
    // console.log("event =>", data.get("email"));
    // console.log("event =>", data.get("password"));
  };

  return (
    <ThemeProvider theme={responsiveFontSize}>
      <Grid container minHeight="100vh">
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            backgroundColor: "#3D4251",
            display: { xs: "none", md: "flex" },
          }}
        ></Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "70%" }}>
            <Typography
              variant="h3"
              sx={{
                fontFamily: "Poppins",
                fontWeight: "medium",
                color: "#3D4251",
              }}
            >
              Hello There
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Poppins",
                fontWeight: "medium",
                color: "#3D4251",
              }}
            >
              Please enter your details!
            </Typography>

            {/* form */}
            <Box component="form" sx={{ marginY: 2 }} onSubmit={handleSubmit}>
              <Box
                sx={{ display: "flex", flexDirection: "column", marginY: 2 }}
              >
                <FormLabel
                  required={true}
                  sx={{
                    mb: 1,
                    color: "#3D4251",
                    fontFamily: "Poppins",
                    fontSize: "20px",
                    fontWeight: "medium",
                  }}
                >
                  Name
                </FormLabel>
                <TextField
                  required
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                />
              </Box>

              <Box
                sx={{ display: "flex", flexDirection: "column", marginY: 2 }}
              >
                <FormLabel
                  required={true}
                  sx={{
                    mb: 1,
                    color: "#3D4251",
                    fontFamily: "Poppins",
                    fontSize: "20px",
                    fontWeight: "medium",
                  }}
                >
                  Email
                </FormLabel>
                <TextField
                  required
                  type="email"
                  id="email"
                  name="email"
                  placeholder="example@domain.com"
                />
              </Box>

              <Box
                sx={{ display: "flex", flexDirection: "column", marginY: 2 }}
              >
                <FormLabel
                  required={true}
                  sx={{
                    mb: 1,
                    color: "#3D4251",
                    fontFamily: "Poppins",
                    fontSize: "20px",
                    fontWeight: "medium",
                  }}
                >
                  Password
                </FormLabel>
                <TextField
                  required
                  type="password"
                  id="password"
                  name="password"
                />
              </Box>

              {/* button */}
              <LoadingButton
                // loading={isLoading}
                loadingIndicator="Loading..."
                variant="contained"
                type="submit"
                size="large"
                sx={{
                  textTransform: "none",
                  marginY: 1,
                  fontWeight: "medium",
                  fontFamily: "Poppins",
                  backgroundColor: "#D35E35",
                  "&:hover": {
                    backgroundColor: "#D35E35",
                  },
                }}
                fullWidth
              >
                Sign Up
              </LoadingButton>

              {/* link to sign in */}
              <Typography
                variant="caption"
                sx={{
                  color: "#666F88",
                  textAlign: "end",
                  fontFamily: "Poppins",
                  fontWeight: "medium",
                  mt: 1,
                }}
              >
                <Box>
                  {"Already have an account? "}
                  <Link to="/sign-in">
                    <span style={{ color: "#3D4251" }}>Sign in now</span>
                  </Link>
                </Box>
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default SignUp;
