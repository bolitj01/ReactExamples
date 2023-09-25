import React from 'react';

const ViewContacts = ({ title, contacts }) => {

    // props.contacts

    return (
        <>
            <h1>{title}</h1>
            {contacts.map((c) => {
                return (
                    <>
                        <span>{c.name}</span>
                        <span>{c.phone}</span>
                        <span>Delete</span>
                    </>
                )
            })}
        </>
    )

};

export default ViewContacts;