import { Form, Field } from "react-final-form";
import { useDispatch } from "react-redux";
import { getRandomId } from "../shared/getRandomId";
import { addContact } from "../state/contactsSlice";
import { setModal } from "../state/modalSlice";
import styles from "./ModalForm.module.css";

interface IModalForm {
  fullname: string;
  phone: string;
  email: string;
  avatar: string;
}

export const ModalForm = () => {
  const dispatch = useDispatch();

  const onSubmit = async (data: IModalForm) => {
    const { fullname, phone, email, avatar } = data;
    const str = fullname.split(" ");

    dispatch(
      addContact({
        id: String(getRandomId()),
        lastname: str[0],
        firstname: str[1],
        middlename: str[2],
        avatar,
        email,
        phone,
      })
    );
    dispatch(setModal(false));
  };

  return (
    <div className={styles.modal}>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <Field
                name="fullname"
                component="input"
                type="text"
                placeholder="ФИО"
              />
            </div>
            <div>
              <Field
                name="phone"
                component="input"
                type="text"
                placeholder="Телефон"
              />
            </div>
            <div>
              <Field
                name="email"
                component="input"
                type="text"
                placeholder="Электронная почта"
              />
            </div>
            <div>
              <Field
                name="avatar"
                component="input"
                type="text"
                placeholder="Ссылка на аватар"
              />
            </div>
            <div className="buttons">
              <button type="submit">Добавить контакт</button>
              <button type="button" onClick={() => alert("Закрытие окна")}>
                Отмена
              </button>
            </div>
          </form>
        )}
      />
    </div>
  );
};
