import { Contacts } from "../types";

export const getContactsList = () => {
  return fetch(
    `https://my-json-server.typicode.com/MaxTGV/my-database/contacts`
  ).then((res) => res.json());
};

export const getContactData = (id: string) => {
  return fetch(
    `https://my-json-server.typicode.com/MaxTGV/my-database/contacts/${id}`
  ).then((res) => res.json());
};
//для добавления на сервер (не используется)
export const addContactData = (contact: Contacts) => {
  console.log(contact);
  return fetch(
    `https://my-json-server.typicode.com/MaxTGV/my-database/contacts`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(contact),
    }
  ).then((res) => res.json());
};
