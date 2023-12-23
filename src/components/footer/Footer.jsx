import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      {/* <a href="/#" className='footer__logo'>SPACETREVORCODE</a> */}

      

      <div className="footer_socials">
        <a href="https://github.com/tekboxs" target='_blank' rel='noreferrer'><FaGithub /></a>
        <a href="https://www.linkedin.com/in/miguel-casa-grande-dos-santos-92b41a250/" target='_blank' rel='noreferrer'><BsLinkedin /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; MIGUEL CASAGRANDE</small>
      </div>
    </footer>
  )
}

export default Footer