import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { useState } from "react";
import styles from "./Header.module.css";
import { ModalForm } from "./ModalForm";

export const Header = () => {
  const [modal, setModal] = useState<boolean>(false);

  const handleClick = () => {
    setModal(!modal);
  };

  return (
    <>
      <div className={styles.header}>
        <div className={styles.contact}>Контактное лицо</div>
        <div className={styles.phone}>Телефон</div>
        <div className={styles.email}>Электронная почта</div>
        <div className={styles.button}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            onClick={() => handleClick()}
          >
            Добавить
          </Button>
        </div>
      </div>
      {modal && <ModalForm />}
    </>
  );
};
