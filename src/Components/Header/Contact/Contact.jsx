import React from "react";
import photo from "../Contact/1.png";
import "./contact.css";

function Contact() {
  return (
    <div className="contact">
      <h2>CONTACT</h2>
      <div className="container-1_contact">
        <img src={photo} alt=""></img>
        <div className="position">Director</div>
        <div className="name">Tom Rupert</div>
        <div className="tel">+68 65895 21451</div>
      </div>
      <div className="container-1_contact">
        <img src={photo} alt=""></img>
        <div className="position">Director</div>
        <div className="name">Tom Rupert</div>
        <div className="tel">+68 65895 21451</div>
      </div>
      <div className="container-1_contact">
        <img src={photo} alt=""></img>
        <div className="position">Director</div>
        <div className="name">Tom Rupert</div>
        <div className="tel">+68 65895 21451</div>
      </div>
      <div className="container-1_contact">
        <img src={photo} alt=""></img>
        <div className="position">Director</div>
        <div className="name">Tom Rupert</div>
        <div className="tel">+68 65895 21451</div>
      </div>
    </div>
  );
}
export { Contact };
