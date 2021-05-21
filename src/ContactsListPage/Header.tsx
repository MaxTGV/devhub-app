import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import styles from "./Header.module.css";



export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.contact}>Контактное лицо</div>
      <div className={styles.phone}>Телефон</div>
      <div className={styles.email}>Электронная почта</div>
      <div className={styles.button}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
        >
          Добавить
        </Button>
      </div>
    </div>
  );
};
