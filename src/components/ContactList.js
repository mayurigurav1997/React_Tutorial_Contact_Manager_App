import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom"

const ContactList = (props) => {
  console.log(props);

  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHander={deleteConactHandler}
        key={contact.id}
      />
    );
  });
  return <div className="main">
    <h2>Contact List</h2>
    <Link to="/add">
      <button className="ui button blue right">Add Contact</button>
    </Link>
    <div className="ui celled list" style={{ marginTop: "80px" }}>{renderContactList}</div>
  </div>;
};

export default ContactList;
