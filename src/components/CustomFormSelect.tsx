import { Box, FormLabel, MenuItem } from "@mui/material";
import { Dispatch, SetStateAction, ChangeEvent } from "react";
import { container, CustomTextField, formLabel } from "./CustomFormInput.style";

type SelectForm = {
  label: string;
  desc: string;
  value: string;
  handleChange: Dispatch<SetStateAction<ChangeEvent<HTMLInputElement>>>;
  selections: string[];
};

const CustomFormSelect = ({
  label,
  desc,
  value,
  handleChange,
  selections,
}: SelectForm) => {
  return (
    <>
      <Box sx={container}>
        <FormLabel required={true} sx={formLabel}>
          {label}
        </FormLabel>
        <CustomTextField
          required
          select
          id={desc}
          name={desc}
          value={value}
          onChange={(e) => handleChange(e as any)}
        >
          {selections.map((selection, idx) => (
            <MenuItem key={idx} value={selection}>
              {selection}
            </MenuItem>
          ))}
        </CustomTextField>
      </Box>
    </>
  );
};

export default CustomFormSelect;
