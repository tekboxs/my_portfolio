import React from 'react'
import CV from '../../assets/cv.pdf'
import { motion } from 'framer-motion';

const Cta = () => {
  return (
    <div className='cta'>
      <motion.div
        initial={{ x: 10, opacity: 0 }}
        animate={{ x:0, opacity: 1 }}
        transition={{ type: 'spring', delay: 1 }}
        whileHover={{ scale: 1.2 }}
      >
        <a href={CV} className='btn' target='_blank' rel="noreferrer">View CV</a>
      </motion.div>
      <motion.div
        initial={{ x: -10, opacity: 0 }}
        animate={{ x:0, opacity: 1 }}
        transition={{ type: 'spring', delay: 1 }}
      >
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </motion.div>
      
    </div>
  )
}

export default Cta