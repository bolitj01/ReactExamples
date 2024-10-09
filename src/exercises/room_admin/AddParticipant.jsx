import { useRef } from "react";
import styles from './styles/AddParticipant.module.css';

const AddParticipant = ({ addParticipant }) => {
  const nameTxt = useRef()

  return (
    <form className={styles.addParticipant}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label htmlFor="name">Name</label>
      <input
        required
        type="text"
        name="name"
        id=""
        placeholder="Name"
        ref={nameTxt}
      />
      <button onClick={() => addParticipant(nameTxt.current.value)}>Add Participant</button>
    </form>
  );
};

export default AddParticipant;
