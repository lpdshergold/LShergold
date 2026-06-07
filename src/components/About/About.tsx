import Section from '../Atoms/Section/Section'
import './About.scss'

const About = () => {
  return (
    <Section className='about-wrapper'>
      <div className='about-me'>
        <div className='about-title'>
          <h3>About me</h3>
        </div>
        <div className='about-copy'>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
            recusandae ipsum reiciendis iste dolor officia nulla debitis
            temporibus, sequi perferendis repellendus quasi unde. Ipsum
            voluptatibus ratione ipsa maxime, ullam nam.
          </p>
        </div>
      </div>
    </Section>
  )
}

export default About
