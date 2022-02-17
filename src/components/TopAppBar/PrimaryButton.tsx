import { LoadingButton } from "@mui/lab";

import { ButtonLoading } from "../../types/button";
import { primaryButton } from "./PrimaryButton.style";

const PrimaryButton = ({ label, loading = false }: ButtonLoading) => {
  const handleClick = (label: string) => {
    console.log("label =>", label);
  };

  return (
    <LoadingButton
      loading={loading}
      loadingIndicator="Loading..."
      variant="contained"
      size="small"
      sx={primaryButton}
      onClick={() => handleClick(label)}
    >
      {label}
    </LoadingButton>
  );
};

export default PrimaryButton;
