import { Avatar } from "@mui/material";

import logo from "../../assets/logo-small.svg";

const Logo = () => {
  return <Avatar src={logo} alt="Logo" sx={{ width: 32, height: 32, mr: 1 }} />;
};

export default Logo;
