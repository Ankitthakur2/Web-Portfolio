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
          <form
            target="_blank"
            action="https://formsubmit.co/ankit.nita.mca@gmail.com"
            method="POST"
          >
            <div class="form-group">
              <div class="form-row">
                <div class="col">
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    placeholder="Full Name"
                    required
                  />
                </div>
                <div class="col">
                  <input
                    type="email"
                    name="email"
                    class="form-control"
                    placeholder="Email Address"
                    required
                  />
                </div>
              </div>
            </div>
            <div class="form-group">
              <textarea
                placeholder="Your Message"
                class="form-control"
                name="message"
                rows="7"
                required
              ></textarea>
            </div>
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <button type="submit" class="btn btn-lg btn-primary btn-block">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
