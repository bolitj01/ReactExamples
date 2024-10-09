import { useState, useRef } from "react";

const AddContact = ({ addContact }) => {
  //State?
  const nameTxt = useRef()
  const phoneTxt = useRef()
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
      <label htmlFor="phone">Phone #</label>
      <input
        required
        type="text"
        name="phone"
        id=""
        placeholder="###-###-####"
        ref={phoneTxt}
      />
      <button onClick={() => addContact(nameTxt.current.value, phoneTxt.current.vaue)}>Add Contact</button>
    </form>
  );
};

export default AddContact;
