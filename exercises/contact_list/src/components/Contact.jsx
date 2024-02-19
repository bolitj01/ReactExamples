import React from 'react'

const Contact = ({contact, removeContact }) => {
    
    //Event Handler?

    return (
        <>
            <span>{contact.name}</span>
            <span>{contact.phone}</span>
            <span>Delete</span>
        </>
    )
}

export default Contact