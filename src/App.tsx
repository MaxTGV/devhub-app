import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import style from "./App.module.css";
import { ContactDataPage } from "./ContactDataPage";
import { ContactsListPage } from "./ContactsListPage";
import { NotFoundPage } from "./NotFoundPage";
import { useEffect } from "react";
import { fetchContacts } from "./state/thunk";
import { useDispatch } from "react-redux";

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={style.app}>
      <Router>
        <Switch>
          <Route exact path="/">
            <ContactsListPage />
          </Route>
          <Route path="/:id">
            <ContactDataPage />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
