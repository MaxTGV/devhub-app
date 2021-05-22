import { Contacts } from "../types";

export const findContact = (contacts: Contacts[], id: string) => {
  const selectedContact = contacts.filter((contact) => contact.id === id);
  return selectedContact[0];
};
