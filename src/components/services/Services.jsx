import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const backEndServices = [
  {
    id: 1,
    title: "Restfull API'S"
  },
  {
    id: 2,
    title: "Fullstack aplications"
  },
  {
    id: 3,
    title: "Database configuration"
  },
  {
    id: 4,
    title: "Firebase development"
  },
]

const frontEndServices = [
  {
    id: 1,
    title: "Website development"
  },
  {
    id: 2,
    title: "System development"
  },
  {
    id: 3,
    title: "Mobile development"
  },
  {
    id: 4,
    title: "Style upgrades"
  },
]

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>BackEnd</h3>
          </div>

          <ul className='service__list'>
            {backEndServices.map((service) => (
              <li key={service.id}>
                <BiCheck className='service__list-icon' />
                <p>{service.title}</p>
              </li>
            ))}
          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>FrontEnd</h3>
          </div>

          <ul className='service__list'>
          {frontEndServices.map((service) => (
              <li key={service.id}>
                <BiCheck className='service__list-icon' />
                <p>{service.title}</p>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services