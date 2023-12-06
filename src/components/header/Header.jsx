import React from 'react'
import './header.css'
import Cta from './Cta'
import ME from '../../assets/eu.png'
import HeaderSocials from './HeaderSocials'
import { TypingText } from '../motion/typing-text'
import { motion } from 'framer-motion';

const myselfImgVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 2
    }
  }
}

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1><TypingText title="Andrew A." /></h1>
        <motion.h5 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }} className='text-light'>Fullstack Developer</motion.h5>
        <Cta />
        <HeaderSocials />

        <motion.div variants={myselfImgVariants} initial="hidden" animate="visible" className='me'>
          <img src={ME} alt="me" />
        </motion.div>

        <a href="#contact" className='scroll__down'>Sroll Down</a>
      </div>
    </header>
  )
}

export default Header