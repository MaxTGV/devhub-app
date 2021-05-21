import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getContactData } from "../shared/api";
import { Contacts } from "../types";
import { ContactData } from "./ContactData";
import styles from "./ContactDataPage.module.css";
import { ContactName } from "./ContactName";

interface RouteParams {
  id: string;
}

export const ContactDataPage = () => {
  const { id } = useParams<RouteParams>();
  const [data, setData] = useState<Contacts>();

  useEffect(() => {
    const fetchContactsData = async () => {
      const data = await getContactData(id);
      setData(data);
    };
    fetchContactsData();
  }, [id]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.wrapper}>
      <Link to="/">&#8592; Вернуться назад</Link>
      <ContactName
        avatar={data.avatar}
        lastname={data.lastname}
        firstname={data.firstname}
        middlename={data.middlename}
      />
      <ContactData phone={data.phone} email={data.email} />
    </div>
  );
};
