import React, { useEffect, useState } from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'

const scrollToNavMap = [
  { from: 0, to: 554, nav: '#' },
  { from: 555, to: 999, nav: '#about' },
  { from: 1000, to: 1776, nav: '#experience' },
  { from: 1777, to: 2332, nav: '#services' },
  { from: 2333, to: 4999, nav: '#services' },
  { from: 5000, to: 5499, nav: '#contact' },
];

const Nav = () => {

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const newActiveNav = scrollToNavMap.find(
      ({ from, to }) => scrollY >= from && scrollY <= to
    );

    if (newActiveNav) {
      setActiveNav(newActiveNav.nav);
    }
  }, [scrollY]);

  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a href="/#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav