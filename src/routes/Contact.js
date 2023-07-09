import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  return (
   <div className="form1">
 <div >
  <h1>Contact</h1>
  <form action="https://formsubmit.co/ankit.nita.mca@gmail.com" method="POST">
    <div class="form-group">
      <div class="form-row">
        <div class="col">
          <input type="text" name="name" class="form-control" placeholder="Full Name" required />
        </div>
        <div class="col">
          <input type="email" name="email" class="form-control" placeholder="Email Address" required />
        </div>
      </div>
    </div>
    <div class="form-group">
      <textarea placeholder="Your Message" class="form-control" name="message" rows="10" required></textarea>
    </div>
    <button type="submit" class="btn btn-lg btn-primary btn-block">Submit Form</button>
  </form>
</div>

    </div>
   
  );
};

export default Contact;
