import { useState } from 'react';


const AddContact = ({addContact}) => {

    //State?
    //Event Handlers?

    return (
        <form onSubmit={(e) => {e.preventDefault()}}>
            <label htmlFor="name">Name</label>
            <input required type="text" name="name" id="" placeholder="Name" 

            />
            <label htmlFor="phone">Phone #</label>
            <input required type="text" name="phone" id="" placeholder="###-###-####" 

            />
            <button>Add Contact</button>
        </form>
    )

};

export default AddContact;