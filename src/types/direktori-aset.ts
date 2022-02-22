import { Dispatch, SetStateAction } from "react";

export type FormRead = {
  label: string;
  defaultValue: string;
};

export type Details = {
  isOpen: boolean;
  handleClose: Dispatch<SetStateAction<boolean>>;
};
