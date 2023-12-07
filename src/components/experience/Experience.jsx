import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import { motion } from 'framer-motion'
import { showFromTopVariants } from '../motion/variants'

const frontEndSkills = [
  {
    id: 1,
    title: 'HTML',
    level: 'Experienced'
  },
  {
    id: 2,
    title: 'CSS',
    level: 'Experienced'
  },
  {
    id: 3,
    title: 'JavaScript',
    level: 'Experienced'
  },
  {
    id: 4,
    title: 'TypeScript',
    level: 'Medium'
  },
  {
    id: 5,
    title: 'ReactJS',
    level: 'Experienced'
  },
  {
    id: 6,
    title: 'NextJS',
    level: 'Medium'
  },
  {
    id: 7,
    title: 'Framer Motion',
    level: 'Beginner'
  },
  {
    id: 8,
    title: 'Flutter',
    level: 'Medium'
  },
]

const backEndSkills = [
  {
    id: 1,
    title: 'NodeJS',
    level: 'Medium'
  },
  {
    id: 2,
    title: 'SQL',
    level: 'Medium'
  },
  {
    id: 3,
    title: 'NextJS',
    level: 'Medium'
  },
  {
    id: 4,
    title: 'PrismaDB',
    level: 'Medium'
  },
  {
    id: 5,
    title: 'PostgreSQL',
    level: 'Medium'
  },
  {
    id: 6,
    title: 'MongoDB',
    level: 'Medium'
  },
  {
    id: 7,
    title: 'Codeigniter 4',
    level: 'Medium'
  },
  {
    id: 8,
    title: 'Firebase',
    level: 'Experienced'
  },
]

const Experience = () => {
  return (
    <section id='experience' >
      <motion.h5 variants={showFromTopVariants(200,)} initial="hidden" whileInView="visible" viewport={{once:true}}>What Skills I have</motion.h5>
      <motion.h2 variants={showFromTopVariants(200,0.3)} initial="hidden" whileInView="visible" viewport={{once:true}}>My Experience</motion.h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {frontEndSkills.map((skill,i) => (
              <motion.div variants={showFromTopVariants(200,i / 10)} initial="hidden" whileInView="visible" viewport={{once:true}}>
                <article key={skill.id} className='experience__details'>
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{skill.title}</h4>
                    <small className="text-light">{skill.level}</small>
                  </div>
                </article>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
          {backEndSkills.map((skill,i) => (
              <motion.div variants={showFromTopVariants(200,i / 10)} initial="hidden" whileInView="visible" viewport={{once:true}}>
                <article key={skill.id} className='experience__details'>
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{skill.title}</h4>
                    <small className="text-light">{skill.level}</small>
                  </div>
                </article>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience