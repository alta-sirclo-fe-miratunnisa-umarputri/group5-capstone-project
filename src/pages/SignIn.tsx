import { FormEvent } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import { AxiosError } from "axios";

import LogoSmallScreen from "../components/Sign/LogoSmallScreen";
import Greetings from "../components/Typography/Greetings";
import CustomFormInput from "../components/CustomFormInput";
import SecondaryFullButton from "../components/Sign/SecondaryFullButton";
import Help from "../components/Sign/Help";
import Error from "../components/Alert/Error";

import { capstoneAxios } from "../axios-instance";
import logo from "../assets/logo.svg";
import { complimentContent, mainContent } from "../components/Sign/Sign.style";

type SignInData = {
  email: FormDataEntryValue;
  password: FormDataEntryValue;
};

const SignIn = () => {
  const navigate = useNavigate();

  const { mutateAsync, isLoading, isError, error } = useMutation(
    async (signInData: SignInData) => {
      const { data } = await capstoneAxios({
        method: "POST",
        data: signInData,
        url: "/login",
      });

      return data;
    }
  );

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const signInData = {
      email: data.get("email")!,
      password: data.get("password")!,
    };

    const result = await mutateAsync(signInData);

    localStorage.setItem("id", String(result.data.id));
    localStorage.setItem("name", result.data.name);
    localStorage.setItem("role", result.data.role);
    localStorage.setItem("token", result.data.token);

    navigate("/beranda", { replace: true });
  };

  return (
    <Grid container minHeight="100vh">
      <Grid item xs={12} md={6} sx={mainContent}>
        {isError && (
          <Error message={(error as AxiosError).response!.data!.message!} />
        )}
        <Box width="70%">
          <LogoSmallScreen />

          <Greetings
            title="Selamat Datang"
            subtitle="Masuk dengan akun Sipangseet Anda"
          />

          <Box component="form" marginY={2} onSubmit={handleSubmit}>
            <CustomFormInput
              label="Email"
              type="email"
              desc="email"
              placeholder="example@domain.com"
            />
            <CustomFormInput
              label="Kata Sandi"
              type="password"
              desc="password"
              placeholder="Your password"
            />

            <SecondaryFullButton label="Masuk" loading={isLoading} />

            <Help
              tag="Belum punya akun?"
              instruction="Daftar di sini"
              path="/pemeliharaan"
            />
          </Box>
        </Box>
      </Grid>

      <Grid item xs={12} md={6} sx={complimentContent}>
        <img src={logo} alt="Logo" width="60%" height="auto" />
      </Grid>
    </Grid>
  );
};

export default SignIn;
