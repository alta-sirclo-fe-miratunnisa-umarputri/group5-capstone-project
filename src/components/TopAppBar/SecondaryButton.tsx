import { Button } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

import { ButtonLoading } from "../../types/button";
import { secondaryButton } from "./SecondaryButton.style";

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

  const getTextDecoration = (label: string): string => {
    const path = getPath(label);
    if (location.pathname === path) {
      return "underline";
    }

    return "none";
  };

  return (
    <Button
      size="small"
      sx={{
        ...secondaryButton,
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
