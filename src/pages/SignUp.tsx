import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  createTheme,
  Grid,
  responsiveFontSizes,
  ThemeProvider,
  Typography,
} from "@mui/material";

import CustomFormInput from "../components/Sign/CustomFormInput";
import Greetings from "../components/Sign/Greetings";
import SecondaryFullButton from "../components/Button/SecondaryFullButton";

const theme = createTheme();
const responsiveFontSize = responsiveFontSizes(theme);

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    console.log("event =>", data.get("name"));
    console.log("event =>", data.get("email"));
    console.log("event =>", data.get("password"));

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
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
            <Greetings
              title="Hello There"
              subtitle="Please enter your details!"
            />

            <Box component="form" sx={{ marginY: 2 }} onSubmit={handleSubmit}>
              <CustomFormInput
                label="Name"
                type="text"
                desc="name"
                placeholder="John Doe"
              />
              <CustomFormInput
                label="Email"
                type="email"
                desc="email"
                placeholder="example@domain.com"
              />
              <CustomFormInput
                label="Password"
                type="password"
                desc="password"
              />

              <SecondaryFullButton label="Sign Up" loading={isLoading} />

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
