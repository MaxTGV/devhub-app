import { Header } from "./Header";
import { ContactItem } from "./ContactItem";
import styles from "./ContactsListPage.module.css";
import { useSelector } from "react-redux";
import { getContacts } from "../state/selectors";

export const ContactsListPage = () => {
  const contacts = useSelector(getContacts);

  if (!contacts) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>Адресная книга</h1>
      <div className={styles.table}>
        <Header />
        {contacts &&
          contacts.map((contact) => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
      </div>
    </>
  );
};
