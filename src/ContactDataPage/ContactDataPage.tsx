import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getContactData } from "../shared/api";
import { Contacts } from "../types";

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
      <div>
        <div>Username: {`${data.lastname} ${data.firstname} ${data.middlename}`}</div>
        <div>Phone: {data.phone}</div>
        <div>Email: {data.email}</div>
      </div>
  )
};
