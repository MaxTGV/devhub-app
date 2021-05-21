import { Contacts } from "../types";
import Button from "@material-ui/core/Button";
import ClearIcon from "@material-ui/icons/Clear";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import styles from "./ContactItem.module.css";

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
  const classes = useStyles();
  const { lastname, firstname, middlename, avatar, email, phone } = contact;
  console.log(contact);
  return (
    <div className={styles.item}>
      <div className={styles.avatar}>{avatar}</div>
      <div className={styles.name}>{`${lastname} ${firstname} ${middlename}`}</div>
      <div className={styles.phone}>{phone}</div>
      <div className={styles.email}>{email}</div>
      <div className={styles.button}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<ClearIcon />}
        >
          Удалить
        </Button>
      </div>
    </div>
  );
};