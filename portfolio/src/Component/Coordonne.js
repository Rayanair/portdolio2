import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Coordonne = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_04lx706', 'template_hheo7ws', form.current, '1jrsNN5r3Y1KT3ZlV')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (

    <section id='Coordonne'>
      <h1>Contactez moi</h1>
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input className="sub" type="submit" value="Send" />
    </form>
    </section>
  );

} 

export default  Coordonne;
