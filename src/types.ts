export type Contacts = {
  id: string;
  lastname: string;
  firstname: string;
  middlename: string;
  avatar: string;
  email: string;
  phone: string;
};

export type State = {
  contacts: Contacts[];
  modal: boolean;
};
