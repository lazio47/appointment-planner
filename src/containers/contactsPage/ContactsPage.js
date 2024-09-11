import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isDuplicate, setIsDuplicate] = useState(false);

  useEffect(() => {
    contacts.map(contact => contact.name).includes(name) ? 
            setIsDuplicate(true) : 
            setIsDuplicate(false);
  }, [name, contacts]);


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isDuplicate) {
      addContact(name, phone, email);
      setName('');
      setEmail('');
      setPhone('');
    } else {
      alert('That is a duplicated name.');
    }
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm  name={name} 
                      email={email} 
                      phone={phone} 
                      setEmail={setEmail} 
                      setName={setName} 
                      setPhone={setPhone} 
                      handleSubmit={handleSubmit} 
                      />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList list={contacts} />
      </section>
    </div>
  );
};
