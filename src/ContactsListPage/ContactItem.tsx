import { Contacts } from "../types";
import Button from "@material-ui/core/Button";
import ClearIcon from "@material-ui/icons/Clear";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import styles from "./ContactItem.module.css";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { removeContact } from "../state/contactsSlice";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1.5),
    },
  })
);

interface IContactItem {
  contact: Contacts;
}

export const ContactItem = ({ contact }: IContactItem) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();
  const { id, lastname, firstname, middlename, avatar, email, phone } = contact;

  const handleDbClick = (id: string) => {
    history.push(`/${id}`);
  };

  const handleClick = (id: string) => {
    dispatch(removeContact(id));
  };

  return (
    <div onDoubleClick={() => handleDbClick(id)} className={styles.item}>
      <img className={styles.avatar} alt={avatar} />
      <div
        className={styles.name}
      >{`${lastname} ${firstname} ${middlename}`}</div>
      <div className={styles.phone}>{phone}</div>
      <div className={styles.email}>{email}</div>
      <div className={styles.button}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<ClearIcon />}
          onClick={() => handleClick(id)}
        >
          Удалить
        </Button>
      </div>
    </div>
  );
};
