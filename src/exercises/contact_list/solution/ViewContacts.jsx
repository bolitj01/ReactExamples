import { useEffect, useState } from 'react';
import Contact from './Contact';
import AddContact from './AddContact';
import { v4 } from 'uuid';

const ViewContacts = ({ title, className }) => {

    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        setContacts(() => {
            //Test data
            return [
                {
                    id: v4(),
                    name: "Tommy",
                    phone: "555-555-5555"
                },
                {
                    id: v4(),
                    name: "Haley",
                    phone: "444-444-4444"
                }
            ]
        });
    }, [])

    //Incomplete functions to manage the contacts
    const removeContact = (id) => {
        setContacts(contacts.filter((c) => c.id !== id))
    }

    const addContact = (name, phone) => {
        const newContact = {
            id: v4(),
            name: name,
            phone: phone
        }

        setContacts([...contacts, newContact])
    }

    return (
        <div className={className}>
            <AddContact addContact={addContact}></AddContact>
            <h1>{title}</h1>
            {contacts.map((c) => {
                return (
                    <Contact removeContact={removeContact} contact={c} />
                )
            })}
        </div>
    )

};

export default ViewContacts;