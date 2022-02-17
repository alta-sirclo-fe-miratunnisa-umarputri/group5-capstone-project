import { FormEvent, useState } from "react";
import { Box, Grid } from "@mui/material";

import logo from "../assets/logo.svg";
import LogoSmallScreen from "../components/Sign/LogoSmallScreen";
import Greetings from "../components/Typography/Greetings";
import CustomFormInput from "../components/Sign/CustomFormInput";
import SecondaryFullButton from "../components/Button/SecondaryFullButton";
import Help from "../components/Sign/Help";
import { complimentContent, mainContent } from "../components/Sign/Sign.style";

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
    <Grid container minHeight="100vh">
      <Grid item xs={12} md={6} sx={complimentContent}>
        <img src={logo} alt="Logo" width="60%" height="auto" />
      </Grid>

      <Grid item xs={12} md={6} sx={mainContent}>
        <Box width="70%">
          <LogoSmallScreen />

          <Greetings
            title="Hello There"
            subtitle="Please enter your details!"
          />

          <Box component="form" marginY={2} onSubmit={handleSubmit}>
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
              placeholder="New password"
            />

            <SecondaryFullButton label="Sign Up" loading={isLoading} />

            <Help
              tag="Already have an account?"
              instruction="Sign in now"
              path="/sign-in"
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SignUp;
