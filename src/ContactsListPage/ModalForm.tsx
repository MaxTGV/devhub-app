import { Form, Field } from "react-final-form";
import { addContactData } from "../shared/api";
import { getRandomId } from "../shared/getRandomId";
import styles from "./ModalForm.module.css";

interface IModalForm {
  fullname: string;
  phone: string;
  email: string;
  avatar: string;
}

export const ModalForm = () => {
  const onSubmit = async (data: IModalForm) => {
    const { fullname, phone, email, avatar } = data;

    const str = fullname.split(" ");
    await addContactData({
      id: String(getRandomId()),
      lastname: str[0],
      firstname: str[1],
      middlename: str[2],
      avatar,
      email,
      phone,
    });
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
