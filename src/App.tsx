import { useEffect, useState } from "react";
import style from "./App.module.css";
import { getContactsList } from "./shared/api";

type Contacts = {
  id: "1",
  lastname: string
  firsname: string
  midllename: string
  avatar: string
  email: string
  phone: string
}

export const App = () => {
  const [contacts, setContacts] = useState<Contacts[]>();
  
  useEffect(() => {
    const fetchContactsList = async () => {
      const data = await getContactsList();
      setContacts(data);
    };
    fetchContactsList();
  }, []);

  return (
    <div className={style.app}>
      <h1>Адресная книга</h1>
      {
        contacts && contacts.map(contact => (
          <div key={contact.id}>{contact.firsname} {contact.lastname}</div>
        ))
      }
    </div>
  );
};
