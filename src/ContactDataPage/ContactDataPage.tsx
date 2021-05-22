import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { findContact } from "../shared/findContact";
import { getContacts } from "../state/selectors";
import { ContactData } from "./ContactData";
import styles from "./ContactDataPage.module.css";
import { ContactName } from "./ContactName";

interface RouteParams {
  id: string;
}

export const ContactDataPage = () => {
  const { id } = useParams<RouteParams>();
  const contacts = useSelector(getContacts);
  const contact = findContact(contacts, id);

  return (
    <div className={styles.wrapper}>
      <Link to="/">&#8592; Вернуться назад</Link>
      <ContactName
        avatar={contact.avatar}
        lastname={contact.lastname}
        firstname={contact.firstname}
        middlename={contact.middlename}
      />
      <ContactData phone={contact.phone} email={contact.email} />
    </div>
  );
};
