import { useEffect, useState } from 'react';
import './App.css';

import { ContactForm } from './components/ContactForm/ContactForm';
import { Filter } from './components/Filter/Filter';
import { ContactList } from './components/ContactList/ContactList';

import { customAlphabet } from 'nanoid';
const hexId = customAlphabet('0123456789abcdef', 6);

function App() {

  const [contacts, setContacts] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    const contacts = localStorage.getItem('contacts')
    if (contacts) {
      setContacts(JSON.parse(contacts))
    }
  },[])

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts])

  const addContact = (name, num) => {
    if (contacts.some(contact => contact.name === name)) {
      alert('Це імʼя вже додано')
      return
    }
    const newContact = {
      name: name,
      number: num,
      id: hexId()
    }
    console.log(name, num)
    const updatedContacts = [...contacts, newContact];
    setContacts(updatedContacts)
  }

  const filteredContact = (contact) => {
    setFilter(contact)
  }

  const filteredContacts = () => {
    if (!filter.toLowerCase()) {
      return contacts;
    }
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  const deleteContact = (contactId) => {
    setContacts(prevContacts=>prevContacts.filter(contact => contact.id !== contactId))
  }


  const filteredContactsVariable = filteredContacts();

  return (
    <div className="App">
      <ContactForm addContact={addContact} />
      <h2 className="middle-title">Contacts</h2>
      <Filter filteredContact={filteredContact} />
      <ContactList contacts={filteredContactsVariable} deleteContact={deleteContact} />
    </div>
  );
}


export default App;