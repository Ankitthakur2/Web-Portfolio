import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  return (
   
<div class="container">
  <h1>Connect</h1>
  <form target="_blank" action="https://formsubmit.co/ankit.nita.mca@gmail.com" method="POST">
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
      <textarea placeholder="Your Message" class="form-control" name="message" rows="10" required ></textarea>
    </div>
    <input type="hidden" name="_subject" value="New submission!" />
    <input type="hidden" name="_template" value="table" />
    <input type="hidden" name="_captcha" value="false" />
    <button type="submit" class="btn btn-lg btn-primary btn-block">send Message</button>
  </form>
</div>
   
  );
};

export default Contact;
