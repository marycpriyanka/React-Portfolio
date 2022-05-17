import React, { useState } from 'react';

import { validateEmail } from '../utils/helper';

export default function Contact() {
    // Create state variables for the fields in the form
    // We are also setting their initial values to an empty string
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errMessage, setErrorMessage] = useState("");

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        // Based on the input type, we set the state of either name, email, and message
        if (inputType === "name") {
            setName(inputValue);
        }
        else if (inputType === "email") {
            setEmail(inputValue);
        }
        else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        // Prevents the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();

        // Checks if any of the fields is empty
        if (!name || !email || !message) {
            setErrorMessage("Please enter all the fields");
            return;
        }

        // Checks if the email is valid
        if (!validateEmail(email)) {
            setErrorMessage("Email is invalid!");
            return;
        }

        // If everything goes according to plan, we want to clear the inputs
        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <section class="section">
            <h2>Contact me</h2>
            <form>
                <input value={name} name="name" onChange={handleInputChange} type="text" placeholder="name" />
                <input value={email} name="email" onChange={handleInputChange} type="email" placeholder="email" />
                <textarea value={message} name="message" onChange={handleInputChange} placeholder="message"></textarea>
                <button type="button" onClick={handleFormSubmit}>Submit</button>
            </form>
            {errMessage && (
                <div>
                    <p className="error-text">{errMessage}</p>
                </div>
            )}
        </section>
    );
}