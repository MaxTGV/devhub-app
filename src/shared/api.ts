export const getContactsList = () => {
  return fetch(`https://my-json-server.typicode.com/MaxTGV/contacts-DB/contacts`).then((res) => res.json());
};
