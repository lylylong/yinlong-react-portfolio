import React, { useState } from "react";
import { validateEmail } from "../../utils/helper";

function Contact() {
  // set form state
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  // set initial error state
  const [errorMessage, setErrorMessage] = useState("");
  // the initial form state
  const { name, email, message } = formState;

  // the contact info that the user sent
  const handleSubmit = (event) => {
    // preventDefault is not working in React...
    event.preventDefault();
    // if no error message
    if (!errorMessage) {
      setFormState({ [event.target.name]: event.target.value });
      console.log("Form Send", formState);
      // cause preventDefault is not working in React, have to reset the form again
      document.getElementById("contact-form").reset();
      document.querySelector('textarea[name="message"]').value = "";
      // display a successful message
      setErrorMessage("Thank you for your message!");
      return;
    }
    // if there is error message
    if (errorMessage) {
      // display a failed message
      setErrorMessage("Your contact info is NOT sent!");
      // cause preventDefault is not working in React, have to reset the form again
      document.getElementById("contact-form").reset();
      document.querySelector('textarea[name="message"]').value = "";
      return;
    }
  };

  // when user is typing and may receive feedback based on their inputs
  const handleChange = (event) => {
    if (event.target.name === "email") {
      const isValid = validateEmail(event.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid!");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!event.target.value.length) {
        setErrorMessage(`${event.target.name} is required!`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [event.target.name]: event.target.value });
    }
  };

  return (
    <section>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Your Name:</label>
          <input
            className="form-control"
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Your Email address:</label>
          <input
            className="form-control"
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Your Message:</label>
          <textarea
            className="big-input form-control"
            name="message"
            defaultValue={message}
            onBlur={handleChange}
            rows="3"
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text my-2">{errorMessage}</p>
          </div>
        )}

        <button type="submit" className="btn mb-5">
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;
