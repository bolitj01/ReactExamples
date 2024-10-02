const Contact = ({contact, removeContact }) => {
    
    //Needs an event handler

    return (
        <>
            <span>{contact.name}</span>
            <span>{contact.phone}</span>
            <span>Delete</span>
        </>
    )
}

export default Contact