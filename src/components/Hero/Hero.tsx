import './Hero.scss'
import heroPic from '../../assets/me_sitting.png'
import Section from '../Atoms/Section/Section'

const Hero = () => {
  return (
    <Section className='hero-wrapper'>
      <div>
        <h1>Hello,</h1>
        <h2>My name's Liam...</h2>
        <h3>
          A <span>Frontend</span> Engineer
        </h3>
      </div>
      <div className='line-break' />
      <img
        className='hero-img'
        src={heroPic}
        alt='Liam sitting with a furry friend'
      />
    </Section>
  )
}

export default Hero
