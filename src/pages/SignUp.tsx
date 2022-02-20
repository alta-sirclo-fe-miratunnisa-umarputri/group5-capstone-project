import { FormEvent } from "react";
import { useMutation } from "react-query";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { Box, Grid } from "@mui/material";

import logo from "../assets/logo.svg";
import LogoSmallScreen from "../components/Sign/LogoSmallScreen";
import Greetings from "../components/Typography/Greetings";
import CustomFormInput from "../components/Sign/CustomFormInput";
import SecondaryFullButton from "../components/Sign/SecondaryFullButton";
import Help from "../components/Sign/Help";
import Error from "../components/Alert/Error";
import { capstoneAxios } from "../axios-instance";
import { complimentContent, mainContent } from "../components/Sign/Sign.style";
import { SignFormData } from "../types/sign";

const SignUp = () => {
  const navigate = useNavigate();

  const { mutateAsync, isLoading, isError, error } = useMutation(
    async (newUser: SignFormData) => {
      const { data } = await capstoneAxios({
        url: "/users",
        method: "POST",
        data: newUser,
      });
      return data;
    }
  );

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    await mutateAsync({
      name: data.get("name")!,
      email: data.get("email")!,
      password: data.get("password")!,
    });

    navigate("/");
  };

  return (
    <Grid container minHeight="100vh">
      <Grid item xs={12} md={6} sx={complimentContent}>
        <img src={logo} alt="Logo" width="60%" height="auto" />
      </Grid>

      {isError && (
        <Error message={(error as AxiosError).response!.data!.message!} />
      )}

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
