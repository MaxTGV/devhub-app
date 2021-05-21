export const getContactsList = () => {
  return fetch(`https://my-json-server.typicode.com/MaxTGV/my-database/contacts`).then((res) => res.json());
};
