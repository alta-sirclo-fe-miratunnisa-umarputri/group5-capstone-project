import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { ButtonLoading } from "../../types/button";
import { secondaryButton } from "./SecondaryButton.style";

const SecondaryButton = ({ label }: Partial<ButtonLoading>) => {
  const navigate = useNavigate();

  const handleClick = (label: string) => {
    if (label === "Profile") {
      navigate("profile");
      return;
    }

    if (label === "Sign Up") {
      navigate("sign-up");
      return;
    }

    if (label === "Home") {
      navigate("/");
      return;
    }

    console.log("second =>", label);
    navigate("/");
  };

  return (
    <Button
      size="small"
      sx={secondaryButton}
      onClick={() => handleClick(label!)}
    >
      {label}
    </Button>
  );
};

export default SecondaryButton;
