import './App.css';
import AddContact from './AddContact';
import ViewContacts from './ViewContacts';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  //{id, name, phone}
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    setContacts(() => {
      return [{
        id: 1,
        name: "Tommy",
        phone: "555-555-5555"
      }]
    });
  }, [])

  const removeContact = () => {
    //TODO
  }

  return (
    <>
      <AddContact removeContact={removeContact}></AddContact>
      <ViewContacts title={"Contact List"} contacts={contacts}></ViewContacts>
    </>
  );
}

export default App;
