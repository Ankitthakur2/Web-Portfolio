import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="form1">
      <div className="form-container">
        <div className="title1">
          <h1> Contact</h1>
        </div>
        <div className="content1">
          <form target="_blank" action="https://formsubmit.co/d6a75e1dc134612f727b2203a70147b3" method="POST">
            <label> Name</label>
            <input type="text" placeholder="Name" required />
            <label> Email</label>
            <input type="email" placeholder="Email" required />
            <label> Message</label>
            <textarea
              cols="20"
              rows="8"
              placeholder="Enter your message!"
              required
            ></textarea>
            <button type="submit" className="button-7">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
