import './Hero.scss'
import heroPic from '../../assets/me_sitting.png'

export const Hero = () => {
  return (
    <section className='wrapper'>
      <div>
        <h1>Hello</h1>
        <h2>My name's Liam...</h2>
      </div>
      <div className='line-break' />
      <img
        className='hero-img'
        src={heroPic}
        alt='Liam sitting with a furry friend'
      />
    </section>
  )
}

export default Hero
