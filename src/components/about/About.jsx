import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import { motion } from 'framer-motion'
import { showFromTopVariants } from '../motion/variants'

const About = () => {

  return (
    <section id='about'>
      <motion.h5 variants={showFromTopVariants(200,)} initial="hidden" whileInView="visible" viewport={{ once: true }}>Get to Know</motion.h5>
      <motion.h2 variants={showFromTopVariants(200, 0.3)} initial="hidden" whileInView="visible" viewport={{ once: true }}>About me</motion.h2>

      <div className='container about__container'>
        <motion.div
          variants={showFromTopVariants(200, 0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className='about__me'
        >
          <div className='about__me-image'>
            <img src={ME} alt="Myself" />
          </div>
        </motion.div>


        <div className='about__content'>
          <div className='about__cards'>
            <motion.div variants={showFromTopVariants(200, 0.5)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <article className='about__card'>
                <FaAward className='about__icon' />
                <h5>Experience</h5>
                <small>2+ Years Working</small>
              </article>
            </motion.div>

            <motion.div variants={showFromTopVariants(200, 0.6)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <article className='about__card'>
                <FiUsers className='about__icon' />
                <h5>Clients</h5>
                <small>10+ Worldwide</small>
              </article>
            </motion.div>

            <motion.div variants={showFromTopVariants(200, 0.7)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <article className='about__card'>
                <VscFolderLibrary className='about__icon' />
                <h5>Projects</h5>
                <small>10+ Completed</small>
              </article>
            </motion.div>
          </div>
          <motion.div className='about__card__text'>
            <p variants={showFromTopVariants(200, 0.8)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              My name is Miguel, and I'm passionate about creating exceptional digital experiences. With over two years of experience as a full-stack developer, I have the privilege of working on the cutting edge of the web and mobile, shaping the digital future.
            </p>
          </motion.div>

          <motion.div variants={showFromTopVariants(200, 0.8)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default About