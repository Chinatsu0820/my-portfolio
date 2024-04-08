import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <div className='contact-form'>
      {isSubmitted ? (
        <div className='contact-submit-message'>
          Submitted!
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className='contactform-itmes'>
            <p>E-mail Adress</p>
            <input type="email" />
          </div>
          <div className='contactform-itmes'>
            <p>Your Inquiry</p>
            <textarea rows="4"/>
          </div>
          <div className='contactform-itmes'>
            <button className='submit-button' type='submit'>Submit</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
