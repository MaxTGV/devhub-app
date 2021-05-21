import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import style from "./App.module.css";
import { ContactDataPage } from "./ContactDataPage";
import { ContactsListPage } from "./ContactsListPage";
import { NotFoundPage } from "./NotFoundPage";

export const App = () => {
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
