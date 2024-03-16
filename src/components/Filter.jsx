import React from "react";
import styles from "../modulocss/filter.module.css";

const Filter = ({ contacts, filter, handleFilterChange, handleDeleteContact }) => {
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <div className={styles["container-filter"]}>
      <div className={styles["label-input"]}>
        <h2>Contact</h2>
        <label>Find contacts by name </label>
        <input
          className={styles["input-filter"]}
          type="text"
          name="filter"
          value={filter}
          onChange={handleFilterChange}
        />
        <ul>
          {filteredContacts.map((contact) => (
            <li key={contact.id}>
              {" "}
              {contact.name}: {contact.number}
              <button
                className={styles["button-delete"]}
                type="button"
                onClick={() => handleDeleteContact(contact.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Filter;