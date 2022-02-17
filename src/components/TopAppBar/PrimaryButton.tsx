import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { ButtonLoading } from "../../types/button";
import { primaryButton } from "./PrimaryButton.style";

const PrimaryButton = ({ label }: Partial<ButtonLoading>) => {
  const navigate = useNavigate();

  const handleClick = (label: string) => {
    if (label === "Sign In") {
      navigate("sign-in");
      return;
    }

    console.log("prime =>", label);
    navigate("/");
  };

  return (
    <Button
      variant="contained"
      size="small"
      sx={primaryButton}
      onClick={() => handleClick(label!)}
    >
      {label}
    </Button>
  );
};

export default PrimaryButton;
