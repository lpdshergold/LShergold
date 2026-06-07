import './Hero.scss'
import heroPic from '../../assets/me/me_sitting.png'
import secondary_hero_pic from '../../assets/me/me_church.png'
import third_hero_pic from '../../assets/me/me_standing.png'
import Section from '../Atoms/Section/Section'

const Hero = () => {
  return (
    <Section className='hero'>
      <div className='hero__text'>
        <h1>Hello,</h1>
        <h2>My name's Liam...</h2>
        <h3>
          A <span>Frontend</span> Engineer
        </h3>
      </div>
      <div className='hero__line-break' />
      <div className='hero__images'>
        <img
          className='hero__img hero__img--main'
          src={heroPic}
          alt='Liam sitting with a furry friend'
        />
        <img
          className='hero__img hero__img--secondary'
          src={secondary_hero_pic}
          alt='Liam looking over a church'
        />
        <img
          className='hero__img hero__img--third'
          src={third_hero_pic}
          alt='Liam looking over a forest view'
        />
      </div>
    </Section>
  )
}

export default Hero
