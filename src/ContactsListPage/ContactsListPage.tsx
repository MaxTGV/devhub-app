import { useEffect, useState } from "react";
import { Contacts } from "../types";
import { getContactsList } from "../shared/api";
import { Header } from "./Header";
import { ContactItem } from "./ContactItem";
import styles from "./ContactsListPage.module.css";

export const ContactsListPage = () => {
  const [contacts, setContacts] = useState<Contacts[]>();

  useEffect(() => {
    const fetchContactsList = async () => {
      const data = await getContactsList();
      setContacts(data);
    };
    fetchContactsList();
  }, []);

  return (
    <div className={styles.table}>
      <Header />
      {contacts &&
        contacts.map((contact) => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
    </div>
  );
};
