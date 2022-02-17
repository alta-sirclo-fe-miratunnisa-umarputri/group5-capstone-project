import { LoadingButton } from "@mui/lab";

import { ButtonLoading } from "../../types/button";
import { secondaryButton } from "./SecondaryFullButton.style";

const SecondaryFullButton = ({ label, loading }: ButtonLoading) => {
  return (
    <LoadingButton
      loading={loading}
      loadingIndicator="Loading..."
      variant="contained"
      type="submit"
      size="large"
      fullWidth
      sx={secondaryButton}
    >
      {label}
    </LoadingButton>
  );
};

export default SecondaryFullButton;
