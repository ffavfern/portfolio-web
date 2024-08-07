import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-center">Contact Me</h2>
      <div className="mt-8 flex justify-center">
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
