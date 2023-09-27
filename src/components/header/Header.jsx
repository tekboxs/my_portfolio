import React from 'react'
import './header.css'
import Cta from './Cta'
import ME from '../../assets/eu.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Andrew A. Oliveira</h1>
        <h5 className='text-light'>Front End Developer</h5>
        <Cta />
        <HeaderSocials />

        <div className='me'>
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Sroll Down</a>
      </div>
    </header>
  )
}

export default Header