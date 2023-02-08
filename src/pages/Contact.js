import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
// import { validateEmail } from "../../utils/helper.js";

import "../styles/contact.css";

export default function Contact() {
    const form = useRef();

    
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_capu6om', 'template_nwy61rd', form.current, 'i18Go310_MJExmJzY')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert("Thank you for your message, we will get back to you shortly")
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="">
    <div className=" contact d-flex w-75 m-auto mt-5 animate__animated animate__fadeIn">
    <div className='contact-info animate__animated animate__fadeInLeft'>
    <div className="card rounded bg-light shadow mt-5" >
  <img className="card-img-top" src="./richard-marine/images/bollard-name.JPG" alt="Card cap"/>
  <div className="card-body">
    <h5 className="card-title">Contact Us</h5>
    <p className="card-text">P.O. Box 4116, Dubai, United Arab Emirates</p>
  </div>
  <ul className="list-group list-group-flush mb-2">
    <li className="list-group-item"><a href="mailto:mahanram@gmail.com"><i className='fa fa-envelope'> :test@gmail.com</i></a></li>
    <li className="list-group-item"><a href="tel:555-555-5555"><i className='fa fa-phone'> : 555-555-5555</i></a></li>
    <li className="list-group-item">Vestibulum at eros</li>
  </ul>

</div>
    </div>

    <div className="contact-form  bg-light p-3 shadow mt-5 m-3 animate__animated animate__fadeInRight">
    <h4 className = "text-center ">Or reach out by filling out this form</h4>

    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" className='form-control' name="from_name" />
      <label>Email</label>
      <input type="email" className='form-control' name="from_email" />
      <label>Message</label>
      <textarea name="message" className='form-control'rows="8"/>
      <input type="submit" className = "mt-2 btn btn-primary" value="Send" />
    </form>
    </div>
    </div>
    </div>
  );
};