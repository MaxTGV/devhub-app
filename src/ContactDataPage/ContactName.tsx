import styles from "./ContactName.module.css";

interface IContactName {
  avatar: string;
  lastname: string;
  firstname: string;
  middlename: string;
}

export const ContactName = ({
  avatar,
  lastname,
  firstname,
  middlename,
}: IContactName) => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.avatar} src={avatar} alt={lastname}/>
      <div className={styles.fullname}>{`${lastname} ${firstname} ${middlename}`}</div>
    </div>
  );
};
