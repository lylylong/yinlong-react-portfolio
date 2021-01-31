import React, { useState } from "react";
import { validateEmail } from "../../utils/helper";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  // the contact info that the user sent
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!errorMessage) {
      setFormState({ [event.target.name]: event.target.value });
      console.log("Form Send", formState);
    }

    document.getElementById("contact-form").reset();

    setErrorMessage("Thank you for your message!");
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
      // console.log("Form feedback:", formState);
    }
  };

  return (
    <section>
      <h1 data-testid="h1tag">Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            defaultValue={message}
            onBlur={handleChange}
            rows="5"
            className="big-input"
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text my-2">{errorMessage}</p>
          </div>
        )}

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
