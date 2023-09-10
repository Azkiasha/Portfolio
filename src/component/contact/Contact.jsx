import React, { useEffect, useState } from "react";
import "./contact.css";
import sendEmail from "./send"; // Import the function for sending email

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://smtpjs.com/v3/smtp.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(name, email, subject, message); // Call the sendEmail function

    // Reset the form inputs to empty after submitting
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <section className="contact container section" id="contact">
      <h2 className="section_title">Get In Touch</h2>

      <div className="contact_container grid">
        <div className="contact_info">
          <h3 className="contact_title">Let's talk about everything</h3>
          <p className="contact_details">
            Don't like forms? Send me an email. 👋{" "}
          </p>
        </div>

        <form className="contact_form" onSubmit={handleSubmit}>
          <div className="contact_form-group">
            <div className="contact_form-div">
              <input
                type="text"
                className="contact_form-input"
                placeholder="Insert Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="contact_form-div">
              <input
                type="email"
                className="contact_form-input"
                placeholder="Insert Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="contact_form-div">
              <input
                type="text"
                className="contact_form-input"
                placeholder="Insert Your Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>

            <div className="contact_form-div contact_form-area">
              <textarea
                name="message"
                id="massage"
                cols="30"
                rows="10"
                className="contact_form-input"
                placeholder="Write your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>

            <button className="btn" type="submit">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
