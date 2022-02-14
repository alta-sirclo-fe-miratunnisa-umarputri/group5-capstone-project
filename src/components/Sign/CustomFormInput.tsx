import { Box, FormLabel } from "@mui/material";

import { SignForm } from "../../types/sign";
import { container, CustomTextField, formLabel } from "./CustomFormInput.style";

const CustomFormInput = ({
  label,
  type,
  desc,
  placeholder,
}: Partial<SignForm>) => {
  return (
    <>
      <Box sx={container}>
        <FormLabel required={true} sx={formLabel}>
          {label}
        </FormLabel>
        <CustomTextField
          required
          type={type}
          id={desc}
          name={desc}
          placeholder={placeholder ? placeholder : ""}
        />
      </Box>
    </>
  );
};

export default CustomFormInput;
