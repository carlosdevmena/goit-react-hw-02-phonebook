import React, { Component } from "react";
import { nanoid } from "nanoid";
import Filter from "../components/Filter";
import Contact from "../components/contacts";
import AlertContact from "./AlertContact";
import styles from "../modulocss/component.module.css"

class MyContactComponent extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();

    // Check if the name already exists in contacts
    const isNameDuplicate = this.state.contacts.some(
      (contact) => contact.name.toLowerCase() === this.state.name.toLowerCase()
    );

    if (isNameDuplicate) {
      // Handle the alert or take appropriate action
      console.log(`${this.state.name} is already in contacts!`);
      return;
    }

    this.addNewContact({ name: this.state.name, number: this.state.number });
    this.setState({ name: "", number: "" });
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  addNewContact = (input) => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, { ...input, id: nanoid() }]
    }));
  };

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleNumberChange = (e) => {
    this.setState({ number: e.target.value });
  };

  handleFilterChange = (e) => {
    const filterValue = e.target.value.toLowerCase();
    this.setState({ filter: filterValue });
  };

  handleDeleteContact = (contactId) => {
    const updatedContacts = this.state.contacts.filter(
      (contact) => contact.id !== contactId
    );

    this.setState({ contacts: updatedContacts });
  };

  render() {
    const { name, number, filter, contacts } = this.state;

    return (
      <div className={styles["container"]}>
        <div className={styles["container-form"]}>
            <h1 className={styles["title"]}>Phonebook</h1>
            <Contact
            name={name}
            number={number}
            handleNameChange={this.handleNameChange}
            handleNumberChange={this.handleNumberChange}
            handleSubmit={this.handleSubmit}
            />
            <AlertContact name={name} contacts={contacts} />
            <Filter contacts={contacts} filter={filter} handleFilterChange={this.handleFilterChange} handleDeleteContact={this.handleDeleteContact} />
        </div>
      </div>
    );
  }
}

export default MyContactComponent;