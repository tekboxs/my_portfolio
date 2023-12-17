import React, { useRef, useState } from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { showFromTopVariants } from '../motion/variants'

const Contact = () => {

  const form = useRef();
  const [send,setSend] = useState(false)

  const sendEmail = (e) => {
    setSend(true)
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICEID, process.env.REACT_APP_EMAIL_TEMPLATEID, form.current, process.env.REACT_APP_EMAIL_PUBLIC_KEY)
      .then(() => {
        setSend(false)
        alert('Message sent, thank you very much!')
      })
      .catch((error) => {
        console.log(error.text);
      })
      .finally(() => {
        setSend(false)
      })
    
    e.target.reset()
  };

  return (
    <section id='contact'>
      <motion.h5 variants={showFromTopVariants(200)} initial="hidden" whileInView="visible" viewport={{once:true}}>Get in Touch</motion.h5>
      <motion.h2 variants={showFromTopVariants(200,0.3)} initial="hidden" whileInView="visible" viewport={{once:true}}>Contact Me</motion.h2>

      <div className="container contact__container">
        <div className="contact__options">
          <motion.div variants={showFromTopVariants(200,0.4)} initial="hidden" whileInView="visible" viewport={{once:true}}>
            <article className='contact__option'>
              <MdOutlineEmail className='contact__option-icon' />
              <h4>Email</h4>
              <h5>miguel.cg.contato@gmail.com</h5>
              <a href="mailto:miguel.cg.contato@gmail.com" target='_blank' rel='noreferrer'>Send a Message</a>
            </article>
          </motion.div>
          <motion.div variants={showFromTopVariants(200,0.5)} initial="hidden" whileInView="visible" viewport={{once:true}}>
            <article className='contact__option'>
              <BsWhatsapp  className='contact__option-icon'/>
              <h4>WhatsApp</h4>
              <h5>+55 69 9219 6666</h5>
              <a href="https://api.whatsapp.com/send/?phone=556992196666" target='_blank' rel='noreferrer'>Send a Message</a>
            </article>
          </motion.div>
        </div>
        <form ref={form} onSubmit={sendEmail} action="">
          <motion.div variants={showFromTopVariants(200,0.6)} initial="hidden" whileInView="visible" viewport={{once:true}}>
            <input type="text" name='name' placeholder='Your Full name' required />
          </motion.div>
          <motion.div variants={showFromTopVariants(200,0.7)} initial="hidden" whileInView="visible" viewport={{once:true}}>
            <input type="email" name='email' placeholder='Your Email' required />
          </motion.div>
          <motion.div variants={showFromTopVariants(200,0.8)} initial="hidden" whileInView="visible" viewport={{once:true}}>
            <textarea name="message" rows="6" placeholder='Your Message' required></textarea>
          </motion.div>
          <motion.button variants={showFromTopVariants(200,1)} initial="hidden" whileInView="visible" viewport={{once:true}} type='submit' disabled={send} className='btn btn-primary'>
            {send ? 'Sending..' : 'Send Message'}
          </motion.button>
        </form>
      </div>
    </section>
  )
}

export default Contact