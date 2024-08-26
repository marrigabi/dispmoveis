import React, { createContext, useState, useContext } from 'react';

const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  return (
    <ContactContext.Provider value={{ contacts, addContact }}>
      {children}
    </ContactContext.Provider>
  );
};

export const useContacts = () => useContext(ContactContext);
