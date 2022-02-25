import { FormEvent, useState } from "react";
import { Box, Grid } from "@mui/material";

import logo from "../assets/logo.svg";
import LogoSmallScreen from "../components/Sign/LogoSmallScreen";
import Greetings from "../components/Typography/Greetings";
import CustomFormInput from "../components/CustomFormInput";
import SecondaryFullButton from "../components/Sign/SecondaryFullButton";
import Help from "../components/Sign/Help";
import { complimentContent, mainContent } from "../components/Sign/Sign.style";
import { User } from "../types/user";

const SignIn = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    console.log("event =>", data.get("email"));
    console.log("event =>", data.get("password"));

    setIsLoading(true);

    // hit endpoint

    // save data to localstorage
    const dummyUser: User = {
      id: 1,
      name: "sirclo",
      role: "admin",
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImF",
    };

    localStorage.setItem("id", String(dummyUser.id));
    localStorage.setItem("name", dummyUser.name);
    localStorage.setItem("role", dummyUser.role);
    localStorage.setItem("token", dummyUser.token);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  return (
    <Grid container minHeight="100vh">
      <Grid item xs={12} md={6} sx={mainContent}>
        <Box width="70%">
          <LogoSmallScreen />

          <Greetings
            title="Selamat Datang"
            subtitle="Masuk dengan akun Avengers Anda"
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
              path="#"
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
