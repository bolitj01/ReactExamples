import { useEffect, useState } from 'react';
import Contact from './Contact';
import AddContact from './AddContact';
import { v4 } from 'uuid';

const ViewContacts = ({ title }) => {

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
    const removeContact = () => {
        
    }

    const addContact = () => {
        
    }

    return (
        <>
            <AddContact ></AddContact>
            <h1>{title}</h1>
            {contacts.map((c) => {
                return (
                    <Contact />
                )
            })}
        </>
    )

};

export default ViewContacts;