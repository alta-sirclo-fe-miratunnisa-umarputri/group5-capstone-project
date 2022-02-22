import { Box, FormLabel } from "@mui/material";

import { FormRead } from "../../types/direktori-aset";
import { container, CustomTextField, formLabel } from "./CustomFormRead.style";

export const CustomFormRead = ({ label, defaultValue }: FormRead) => {
  return (
    <>
      <Box sx={container}>
        <FormLabel sx={formLabel}>{label}</FormLabel>
        <CustomTextField
          InputProps={{
            readOnly: true,
          }}
          id={label}
          defaultValue={defaultValue}
          fullWidth
        />
      </Box>
    </>
  );
};

export const CustomFormReadMulti = ({ label, defaultValue }: FormRead) => {
  return (
    <>
      <Box sx={container}>
        <FormLabel sx={formLabel}>{label}</FormLabel>
        <CustomTextField
          InputProps={{
            readOnly: true,
          }}
          id={label}
          defaultValue={defaultValue}
          multiline
          fullWidth
        />
      </Box>
    </>
  );
};
