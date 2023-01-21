import React, { useState } from "react";
import { validateEmail } from "../utils/helper.js";


export default function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  
  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.type;
    const inputValue = target.value;

    if (inputType === "text") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }

    if (!name || !email || !message) {
      setErrorMessage("Please include your contact details and a  message.");
      return;
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setErrorMessage("Please include your contact details and a  message.");
      return;
    }
    if (!validateEmail(email)) {
      setErrorMessage("That doesn't look like a valid email address.");
      return;
    }

    setName("");
    setEmail("");
    setMessage("");
    setErrorMessage("");
     
  };


  return (
    <div class=" contact-text w-50 m-auto mt-5 animate__animated animate__fadeIn">
      <h3 class = "text-center "> Reach out by filling out the form below.</h3>
      <div class="contact">
        <form>
          <div class="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              class="form-control"
              id="name-input"
              value={name}
              onChange={handleInputChange}
              placeholder="Your name here"
            />
            <label for="email">Email address</label>
            <input
              type="email"
              class="form-control"
              id="email-input"
              value={email}
              onChange={handleInputChange}
              placeholder="name@example.com"
            />
          </div>
          <div class="form-group">
            <label for="message"></label>
            <textarea
              class="form-control"
              id="contact-content"
              value={message}
              onChange={handleInputChange}
              placeholder="Enter a message here."
              rows="7"></textarea>
          </div>
          <button type="submit"   onClick={handleFormSubmit} class="btn btn-primary mt-2">
            Submit
          </button>
          {errorMessage && (
            <div class="text-muted">
              <p><em>{errorMessage}</em></p>
            </div>)}
        </form>
      </div>
   
    </div>

    
  );
}
