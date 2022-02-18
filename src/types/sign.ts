export type SignForm = {
  label: string;
  type: string;
  desc: string;
  placeholder: string;
};

export type SignGreetings = {
  title: string;
  subtitle: string;
};

export type SignHelp = {
  tag: string;
  instruction: string;
  path: string;
};

export type SignFormData = {
  name: FormDataEntryValue;
  email: FormDataEntryValue;
  password: FormDataEntryValue;
};
