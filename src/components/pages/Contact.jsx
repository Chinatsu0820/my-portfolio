import React from "react";
import ContactForm from '../molecules/ContactForm';
import './Contact.css';

export default function Contact() {
    return (
        <div className='contact-page'>
            <h1>CONTACT ME ?</h1>
            <ContactForm />
        </div>
    );
}