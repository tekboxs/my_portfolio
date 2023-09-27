import React, { useRef } from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0p1um9v', 'template_i4yyybb', form.current, '9QHnbpiHomzpZeaAh')
    .then((result) => {
      alert('Message sent, thank you!')
    }, (error) => {
        console.log(error.text);
    });
    
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>yuutoandrew.jpn@gmail.com</h5>
            <a href="mailto:yuutoandrew.jpn@gmail.com" target='_blank' rel='noreferrer'>Send a Message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp  className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+55 31 9 9976 8768</h5>
            <a href="https://api.whatsapp.com/send/?phone=5531999768768">Send a Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail} action="">
          <input type="text" name='name' placeholder='Your Full name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="6" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact