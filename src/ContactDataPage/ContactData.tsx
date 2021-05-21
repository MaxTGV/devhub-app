import styles from "./ContactData.module.css";

interface IContactData {
  phone: string;
  email: string;
}

export const ContactData = ({ phone, email }: IContactData) => {
  return (
    <div className={styles.data}>
      <div className={styles.phonearticle}>Phone:</div>
      <div className={styles.phone}>{phone}</div>
      <div className={styles.emailarticle}>Email:</div>
      <div className={styles.email}>{email}</div>
    </div>
  );
};
