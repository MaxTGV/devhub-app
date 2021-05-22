import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../state/modalSlice";
import { getModal } from "../state/selectors";
import styles from "./Header.module.css";
import { ModalForm } from "./ModalForm";

export const Header = () => {
  const dispatch = useDispatch();
  const modal = useSelector(getModal);

  const handleClick = () => {
    dispatch(setModal(true));
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
