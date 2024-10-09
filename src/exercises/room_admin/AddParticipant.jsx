import { useRef } from "react";

const AddParticipant = ({ addParticipant }) => {
  //State?
  const nameTxt = useRef()
  //Event Handlers?

  return (
    <form
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
