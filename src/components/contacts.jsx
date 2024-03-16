import React from "react";
import styles from "../modulocss/contacts.module.css"

const Contact = ({ name, number, handleNameChange, handleNumberChange, handleSubmit, numberIdInput, nameIdInput }) => {
  return (
    <div className={styles["container-form-name"]}>
      
      <form onSubmit={handleSubmit}>
        <div className={styles["container-input"]}>
          <div className={styles["label-input"]}>
            <label htmlFor={nameIdInput}>Name</label>
            <input className={styles.input}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name"
              required
              value={name}
              onChange={handleNameChange}
            />
            </div>


            <div className={styles["label-input"]}>
              <label htmlFor={numberIdInput}>Number</label>
              <input className={styles["input"]}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={number}
                onChange={handleNumberChange}
              />
            </div>
        </div>

        <button className={styles["button-add"]} type="submit">Add Contact</button>
      </form>
    </div>
  );
};

export default Contact;



/*
<ul>
  {this.state.contacts.map((contact, index) => (
    <li key={index}> {contact.name}, {contact.number} </li> //
  ))} 
</ul>
*/