import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

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
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {frontEndSkills.map((skill) => (
              <article key={skill.id} className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>{skill.title}</h4>
                <small className="text-light">{skill.level}</small>
              </div>
            </article>
            ))}
          </div>
        </div>
        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
          {backEndSkills.map((skill) => (
              <article key={skill.id} className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>{skill.title}</h4>
                <small className="text-light">{skill.level}</small>
              </div>
            </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience