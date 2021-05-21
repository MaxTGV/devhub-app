import style from "./App.module.css";
import { ContactsListPage } from "./ContactsListPage";

export const App = () => {
  return (
    <div className={style.app}>
      <h1>Адресная книга</h1>
      <ContactsListPage />
    </div>
  );
};
