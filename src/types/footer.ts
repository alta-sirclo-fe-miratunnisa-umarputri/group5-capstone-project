import { ReactChild } from "react";

export type FooterTitle = {
  label: string;
};

export type FooterDescription = {
  children: ReactChild;
};

export type FooterLink = {
  path: string;
  label: string;
};

export type FooterSocialMedia = {
  link: string;
  icon: string;
  label: string;
};
