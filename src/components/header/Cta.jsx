import React from 'react'
import CV from '../../assets/cv.pdf'
import { motion } from 'framer-motion';

const Cta = () => {
  return (
    <div className='cta'>
      <motion.div
        initial={{ x: '100vw' }}
        animate={{ x:0 }}
        transition={{ type: 'spring', delay: 3 }}
        whileHover={{ scale: 1.2 }}
      >
        <a href={CV} className='btn' target='_blank' rel="noreferrer">View CV</a>
      </motion.div>
      <motion.div
        initial={{ x: '-100vw' }}
        animate={{ x:0 }}
        transition={{ type: 'spring', delay: 3 }}
      >
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </motion.div>
      
    </div>
  )
}

export default Cta