import Section from '../Atoms/Section/Section'
import LineBreak from '../Atoms/Divider/Divider'
import { copy, skills } from '../../config/config'
import './About.scss'

const About = () => {
  return (
    <Section
      id='about'
      className='about'
    >
      <div className='about__me'>
        <div className='about__title'>
          <h3>{copy.about.title}</h3>
        </div>
        <div className='about__copy'>
          <p dangerouslySetInnerHTML={{ __html: copy.about.copy }} />
        </div>
      </div>
      <LineBreak direction='horizontal' />
      <div className='about__my-skills'>
        <h2 className='about__skills-title'>Skills</h2>
        <div className='about__skills'>
          <div className='about__skills-group'>
            {skills.map((skill) => {
              return (
                <div
                  key={skill.name}
                  className='about__skill'
                >
                  <i className={skill.icon}></i>
                  <span>{skill.name}</span>
                </div>
              )
            })}
            {skills.map((skill) => {
              return (
                <div
                  aria-hidden
                  key={skill.name}
                  className='about__skill'
                >
                  <i className={skill.icon}></i>
                  <span>{skill.name}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Section>
  )
}

export default About
