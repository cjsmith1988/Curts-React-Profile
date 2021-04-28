import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact(){
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    function handleChange(e) {
        
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
            setErrorMessage('Your email is invalid.');
            } else {
            setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
            setErrorMessage(`${e.target.name} is required.`);
            } else {
            setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    };
    function handleSubmit(e) {
        e.preventDefault();
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
            console.log(formState);
        }
        
    };

    // JSX
    return (
        <section className="contactForm">
     
          <form id="contact-form" onSubmit={handleSubmit}>
          <div className="d-flex justify-content-between" >
          <h1 className="">Reach Out</h1>
          {errorMessage && (
            <div className="align-self-center">
                <p className="error-text text-danger">{errorMessage}</p>
            </div>
)           }
</div>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input class="form-control" type="text" defaultValue={name} onBlur={handleChange} name="name" />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email address:</label>
                <input class="form-control" type="email" defaultValue={email} name="email" onBlur={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea class="form-control" name="message" defaultValue={message} onBlur={handleChange} rows="5" />
            </div>
            
            <button class="btn btn-primary" type="submit">Submit</button>
          </form>
        </section>
      )
   
}
export default Contact;