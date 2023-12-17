import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import { motion } from 'framer-motion'

const linkVariants = {
  hidden: {
    opacity: 0,
    x: -30
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 2
    }
  }
}

const HeaderSocials = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.1 }} className='header__socials'>
        <motion.div variants={linkVariants} initial="hidden" animate="visible">
          <a href="https://www.linkedin.com/in/miguel-casa-grande-dos-santos-92b41a250/" target='_blank' rel="noreferrer"><BsLinkedin /></a>
        </motion.div>
        <motion.div variants={linkVariants} initial="hidden" animate="visible">
          <a href="https://github.com/tekboxs" target='_blank' rel="noreferrer"><FaGithub /></a>
        </motion.div>
    </motion.div>
  )
}

export default HeaderSocials