import { Button } from "@mui/material";

import { ButtonLoading } from "../../types/button";
import { secondaryButton } from "../Button/SecondaryFullButton.style";

const SecondaryButton = ({ label }: Partial<ButtonLoading>) => {
  const handleClick = (label: string) => {
    console.log("label second =>", label);
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
