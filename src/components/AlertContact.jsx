import React from "react";

const AlertContact = ({ name, contacts }) => {
  const isNameDuplicate = contacts.some((contact) =>
    contact.name.toLowerCase() === name.toLowerCase()
  );

  return (
    <div>
      {isNameDuplicate && (
        alert(`${name} is already in contacts`)
      )}
    </div>
  );
};

export default AlertContact;