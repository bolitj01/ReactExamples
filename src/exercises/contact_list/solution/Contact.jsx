const Contact = ({contact, removeContact }) => {
    
    //Needs an event handler

    return (
        <>
            <span>{contact.name}</span>
            <span>{contact.phone}</span>
            <span onClick={() => removeContact(contact.id)}>Delete</span>
        </>
    )
}

export default Contact