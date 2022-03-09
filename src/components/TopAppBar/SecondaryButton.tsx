import { Button } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

import { ButtonLoading } from "../../types/button";
import { secondaryButton } from "./SecondaryButton.style";

import { theLightGreen, theGreen } from "../../styles/color.styles";

const SecondaryButton = ({ label }: Partial<ButtonLoading>) => {
  const navigate = useNavigate();
  const location = useLocation();

  const getPath = (label: string) => {
    return "/" + label.split(" ").join("-").toLowerCase();
  };

  const handleClick = (label: string) => {
    const path = getPath(label);
    navigate(path);
  };
  const getColor = (label: string): string => {
    const path = getPath(label);
    if (location.pathname === path) {
      return theGreen.color;
    }

    return theLightGreen.color;
  };

  const getTextDecoration = (label: string): string => {
    const path = getPath(label);
    if (location.pathname === path) {
      return "none";
    }

    return "none";
  };

  return (
    <Button
      size="large"
      sx={{
        ...secondaryButton,
        color: getColor(label as string),
        textDecoration: getTextDecoration(label as string),
        "&:hover": {
          textDecoration: getTextDecoration(label as string),
        },
      }}
      onClick={() => handleClick(label!)}
    >
      {label}
    </Button>
  );
};

export default SecondaryButton;
