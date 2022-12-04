import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Box } from 'components/Box';
import Section from './Section';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  onFormSubmit = ({ name, number }, { resetForm }) => {
    const { contacts } = this.state;
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    if (contacts.find(contact => contact.number === number)) {
      alert(`Number ${number} already exists`);
      return;
    }
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
    resetForm();
  };
  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };
  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };
  deleteContact = e => {
    const id = e.currentTarget.closest('li').getAttribute('id');
    this.setState(prevState => ({
      contacts: [...prevState.contacts.filter(contact => contact.id !== id)],
    }));
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();
    return (
      <Box pt="120px">
        <Box m="auto" p={4} maxWidth="350px" bg="#cfe5e7">
          <Section title="Phonebook">
            <ContactForm onFormSubmit={this.onFormSubmit} />
          </Section>
          <Section title="Contacts">
            <Filter value={filter} changeFilter={this.changeFilter} />
            <ContactList
              deleteContact={this.deleteContact}
              contacts={filteredContacts}
            />
          </Section>
        </Box>
      </Box>
    );
  }
}

export default App;
