import styles from '../ContactExercise.module.css'; 

const Contact = ({contact, removeContact }) => {
    
    //Needs an event handler

    return (
        <div className={styles.contact}>
            <span>{contact.name}</span>
            <span>{contact.phone}</span>
            <button className={styles.deleteButton} onClick={() => removeContact(contact.id)}>Delete</button>
        </div>
    )
}

export default Contact