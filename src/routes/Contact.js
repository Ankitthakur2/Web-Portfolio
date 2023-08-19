import React from "react";
import "./contact.css";

const Contact = () => {
  const sectionStyle = {
    backgroundImage: `url("../assets/hero2.jpg")`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  };

  return (
    <div className="form1" style={sectionStyle}>
      <div className="form-container">
        <div className="title1">
          <h1> Contact</h1>
        </div>
        <div className="content1">
          <form>
            <label> Name</label>
            <input type="text" required />
            <label> Email</label>
            <input type="email" required />
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
