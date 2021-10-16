import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import { v4 as uuidv4 } from 'uuid';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = contact => {
    this.setState(prev => ({
      contacts: [...prev.contacts, { ...contact, id: uuidv4() }],
    }));
  };
  findContact = e => {
    this.setState({ filter: e.target.value });
  };
  deleteContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      <div className="phonebook">
        <h1>Phonebook</h1>
        <ContactForm
          contacts={this.state.contacts}
          addContact={this.addContact}
        />
        <h2>Contacts</h2>
        <Filter find={this.findContact} />

        {this.state.contacts.length > 0 && (
          <ContactList
            contacts={this.state.contacts}
            searchName={this.state.filter}
            deleteContact={this.deleteContact}
          />
        )}
      </div>
    );
  }
}

export default App;
