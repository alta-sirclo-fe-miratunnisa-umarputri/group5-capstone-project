import { Dispatch, SetStateAction } from "react";

export type FormRead = {
  label: string;
  defaultValue: string;
};

export type DetailAndEmployeeModal = {
  isOpen: boolean;
  handleClose: Dispatch<SetStateAction<boolean>>;
  id?: number;
};
