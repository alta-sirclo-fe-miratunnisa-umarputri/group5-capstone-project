import { FormEvent, useState } from "react";
import { Box, Grid, ThemeProvider } from "@mui/material";

import logo from "../assets/logo.svg";
import CustomFormInput from "../components/Sign/CustomFormInput";
import Greetings from "../components/Sign/Greetings";
import SecondaryFullButton from "../components/Button/SecondaryFullButton";
import Help from "../components/Sign/Help";
import {
  complimentContent,
  mainContent,
  responsiveFontSize,
} from "../components/Sign/Sign.style";
import LogoSmallScreen from "../components/Sign/LogoSmallScreen";

const SignIn = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
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
        <Grid item xs={12} md={6} sx={complimentContent}>
          <img src={logo} alt="Logo" width="60%" height="auto" />
        </Grid>

        <Grid item xs={12} md={6} sx={mainContent}>
          <Box width="70%">
            <LogoSmallScreen />

            <Greetings
              title="Welcome Back"
              subtitle="Please enter your details!"
            />

            <Box component="form" marginY={2} onSubmit={handleSubmit}>
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

              <SecondaryFullButton label="Sign In" loading={isLoading} />

              <Help
                tag="Don't have an account?"
                instruction="Sign up for free"
                path="/sign-up"
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default SignIn;
