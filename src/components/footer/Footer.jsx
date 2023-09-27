import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      {/* <a href="/#" className='footer__logo'>SPACETREVORCODE</a> */}

      <ul className='permalinks'>
        <li><a href="/#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://github.com/devandrewjpn" target='_blank' rel='noreferrer'><FaGithub /></a>
        <a href="https://www.linkedin.com/in/andrew-oliveira-734b191b1/" target='_blank' rel='noreferrer'><BsLinkedin /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; ANDREW AUGUSTO</small>
      </div>
    </footer>
  )
}

export default Footer