export const getContactsList = () => {
  return fetch(`https://my-json-server.typicode.com/MaxTGV/my-database/contacts`).then((res) => res.json());
};

export const getContactData = (id: string) => {
  return fetch(`https://my-json-server.typicode.com/MaxTGV/my-database/contacts/${id}`).then((res) => res.json());
};