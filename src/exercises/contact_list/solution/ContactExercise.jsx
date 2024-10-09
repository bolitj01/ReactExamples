import styles from './ContactExercise.module.css';
import ViewContacts from './ViewContacts';

function ContactExercise() {

  return (
    <>
      <ViewContacts title={"Contact List"} className={styles.contacts}></ViewContacts>
    </>
  );
}

export default ContactExercise;
