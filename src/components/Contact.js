import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt, faCopy } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
  const [email, setEmail] = useState('nehaalprsd@gmail.com');
  const [mobile, setMobile] = useState('+64-21-026-52830');

  const copyToClipboard = (text) => {
    const textField = document.createElement('textarea');
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    document.body.removeChild(textField);
    alert('Copied to clipboard!');
  };

  return (
    <section id="contact">
      <div className="container mx-auto flex flex-col items-center">
            <button class="text-2xl font-bold text-white font-bold p-4 flex flex-col items-center">
             Get in Touch
            </button>
        </div>
      <div className="container px-5 py-2 mx-auto">
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-2/4 md:w-2/4 mx-auto text-center">
            What's next? Feel free to reach out to me if you're looking for a developer, have a query, 
            or simply want to connect. 
          </p>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-2/4 md:w-2/4 mx-auto text-center mb-10">
            You may also find me on these platforms!
          </p>
          <div className='flex items-center justify-center'>
            <button className="mr-2" onClick={() => copyToClipboard(email)}>
              <FontAwesomeIcon icon={faEnvelope} />
            </button>
            <p className="text-white text-2xl mr-2 leading-relaxed text-center">Email</p>
            <button className="mr-2"  onClick={() => copyToClipboard(email)}>
              <FontAwesomeIcon icon={faCopy} />
            </button>
          </div>
          <div className='flex items-center justify-center mb-20'>
            <button className="mr-2" onClick={() => copyToClipboard(mobile)}>
              <FontAwesomeIcon icon={faPhoneAlt} />
            </button>
            <p className="text-white text-2xl mr-2 leading-relaxed text-center">Mobile Number</p>
            <button className="mr-2"  onClick={() => copyToClipboard(mobile)}>
              <FontAwesomeIcon icon={faCopy} />
            </button>
          </div>
          
        </div>
    </section>
  );
}