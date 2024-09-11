import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>

        <label for="name">Name:</label>
        <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />

        <label for="phone">Phone:</label>
        <input  id="phone" 
                type="tel" 
                pattern="351[0-9]{9}" 
                placeholder="351#########"
                value={phone} 
                onChange={(e) => setPhone(e.target.value)} 
                />

        <label for="eamil">Email:</label>
        <input  id="email" 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                />

        <input type="submit" value="Add contact" />

      </form>
    </>
  );
};

