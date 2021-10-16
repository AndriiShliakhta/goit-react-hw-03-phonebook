import React, { Component } from 'react';
import ContactListItem from './ContactListItem/ContactListItem';
import styles from './ContactList.module.css';

class ContactList extends Component {
  filteredNames = () => {
    const { contacts, searchName } = this.props;
    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(searchName.toLowerCase());
    });
  };

  render() {
    const { deleteContact } = this.props;
    return (
      <ul className={styles.contactList}>
        {this.filteredNames().map(({ id, name, number }) => (
          <ContactListItem
            key={id}
            name={name}
            number={number}
            deleteContact={deleteContact}
            id={id}
          />
        ))}
      </ul>
    );
  }
}

export default ContactList;
