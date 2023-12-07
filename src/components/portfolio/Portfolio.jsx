import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio-1.jpg'
import IMG2 from '../../assets/portfolio-2.jpg'
import IMG3 from '../../assets/portfolio-3.jpg'
import IMG4 from '../../assets/portfolio-4.jpg'
import IMG5 from '../../assets/portfolio-5.jpg'
import IMG6 from '../../assets/portfolio-6.jpg'
import IMG7 from '../../assets/portfolio-7.jpg'
import IMG8 from '../../assets/portfolio-8.jpg'
import IMG9 from '../../assets/portfolio-9.jpg'
import IMG10 from '../../assets/portfolio-10.jpg'
import IMG11 from '../../assets/portfolio-11.jpg'
import IMG12 from '../../assets/portfolio-12.jpg'
import IMG13 from '../../assets/portfolio-13.jpg'
import IMG14 from '../../assets/portfolio-14.jpg'
import IMG15 from '../../assets/portfolio-15.jpg'
import IMG16 from '../../assets/portfolio-16.jpg'
import IMG17 from '../../assets/portfolio-17.jpg'
import { motion } from 'framer-motion'
import { showFromTopVariants } from '../motion/variants'

const data = [
  {
    id: 15,
    image: IMG15,
    title: 'MetaVerse Landing Page with ReactJS and FramerMotion',
    github: 'https://github.com/devandrewjpn/metaverse-website',
    demo: 'https://metaverse-website-sigma.vercel.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'React DOG Instagram',
    github: 'https://github.com/devandrewjpn/react-dog-project',
    demo: 'https://react-dog-project.vercel.app/login'
  },
  {
    id: 14,
    image: IMG14,
    title: 'Complete Landindg Page and Lead Flux for Marketing Agency',
    github: 'https://github.com/devandrewjpn/lead-flux',
    demo: 'https://devandrew.com.br/lead-flux/'
  },
  {
    id: 13,
    image: IMG13,
    title: 'Tailwind with Parallax Practice',
    github: 'https://github.com/devandrewjpn/tailwind-practice',
    demo: 'https://tailwind-practice-gold.vercel.app/'
  },
  {
    id: 16,
    image: IMG16,
    title: 'FullStack Ecommerce Dashboard for Store Management in NextJS',
    github: 'https://github.com/devandrewjpn/next-ecommerce',
    demo: 'https://next-ecommerce-gamma-ten.vercel.app'
  },
  {
    id: 17,
    image: IMG17,
    title: 'NextJS Ecommerce Store Page Consuming a Dashboard API',
    github: 'https://github.com/devandrewjpn/next-ecommerce-store',
    demo: 'https://next-ecommerce-store-dun.vercel.app/'
  },
  {
    id: 1,
    image: IMG1,
    title: 'Memory Game in React',
    github: 'https://github.com/devandrewjpn/react-memory-game',
    demo: 'https://react-memory-game-dusky.vercel.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'NodeJS Basic CRUD API',
    github: 'https://github.com/devandrewjpn/node-basic-crud-api/tree/master',
    demo: ''
  },
  {
    id: 4,
    image: IMG4,
    title: 'Car Protect WebSite',
    github: '',
    demo: 'https://safecarpv.com.br/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Food Landing',
    github: 'https://github.com/devandrewjpn/topchef-react',
    demo: 'https://topchef-five.vercel.app/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Marketing WebSite',
    github: '',
    demo: 'https://agenciabrasildigital.com.br/'
  },
  {
    id: 7,
    image: IMG7,
    title: 'Car Protect WebSite',
    github: '',
    demo: 'https://d3protecaoveicular.com.br/'
  },
  {
    id: 8,
    image: IMG8,
    title: 'Car Protect WebSite',
    github: '',
    demo: 'https://maxcar.org.br/'
  },
  {
    id: 9,
    image: IMG9,
    title: 'Law WebSite Design',
    github: '',
    demo: 'https://www.figma.com/file/UbzTQSyryWKmH9ZagBQAXJ/law?type=design&node-id=0-1&mode=design&t=IuEwqbc7HH4KwVFS-0'
  },
  {
    id: 10,
    image: IMG10,
    title: 'Dentist App Design',
    github: '',
    demo: 'https://www.figma.com/file/rGNkfATtZYUxYbIji066gD/bem-dental?type=design&node-id=0-1&mode=design&t=jXR7FVnCRUf65Wrd-0'
  },
  {
    id: 11,
    image: IMG11,
    title: 'Bank App Design',
    github: '',
    demo: 'https://www.figma.com/file/UrgsfddSu5M6XxSBX4gHM8/n9-seguros?type=design&node-id=0-1&mode=design&t=FUtfbJQYYq3I7iZR-0'
  },
  {
    id: 12,
    image: IMG12,
    title: 'Car Secure App Design',
    github: '',
    demo: 'https://www.figma.com/file/xGq0GZWGAwUvZXkyJXh4Ou/aime?type=design&node-id=1-213&mode=design&t=vygvTInadl3r2FCf-0'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <motion.h5 variants={showFromTopVariants(200)} initial="hidden" whileInView="visible" viewport={{once:true}}>My recent Work</motion.h5>
      <motion.h2 variants={showFromTopVariants(200,0.3)} initial="hidden" whileInView="visible" viewport={{once:true}}>Portfolio</motion.h2>

      <div className="container portfolio__container">
        {data.map(({id,image,title,github,demo}) =>  {
          return (
            <motion.div variants={showFromTopVariants(200,0.4)} initial="hidden" whileInView="visible" viewport={{once:true}}>
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt="" />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  {github !== '' ? <a href={github} className='btn' rel='noreferrer' target='_blank'>Github</a> : ''}
                  {demo !== '' ? <a href={demo} className='btn btn-primary' rel='noreferrer' target='_blank'>Live Demo</a> : ''}
                </div>
              </article>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio