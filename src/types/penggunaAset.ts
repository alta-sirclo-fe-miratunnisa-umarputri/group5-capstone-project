import { Dispatch, SetStateAction } from "react";

export type FormRead = {
  label: string;
  defaultValue: string;
};

export type DetailModal = {
  isOpen: boolean;
  handleClose: Dispatch<SetStateAction<boolean>>;
};
