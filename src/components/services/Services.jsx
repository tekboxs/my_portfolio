import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI-UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Figma Layouts</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Color, identity and typography recommendation</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Prototypes</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>WebSite user experience reform</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>WebSystem user experience reform</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>FrontEnd</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Website development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Website design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Web systems development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>FrontEnd Mobile applications</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>User Experience development</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services