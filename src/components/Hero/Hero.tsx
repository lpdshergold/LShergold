import { useEffect, useState } from 'react'
import './Hero.scss'
import heroPic from '../../assets/me/me_sitting.png'
import secondary_hero_pic from '../../assets/me/me_church.png'
import third_hero_pic from '../../assets/me/me_standing.png'
import Section from '../Atoms/Section/Section'
import LineBreak from '../Atoms/Divider/Divider'

const heroImages = [
  {
    src: heroPic,
    alt: 'Liam sitting with a furry friend',
    modifier: 'main',
  },
  {
    src: secondary_hero_pic,
    alt: 'Liam looking over a church',
    modifier: 'secondary',
  },
  {
    src: third_hero_pic,
    alt: 'Liam looking over a forest view',
    modifier: 'third',
  },
]

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animationComplete, setAnimationComplete] = useState(false)

  useEffect(() => {
    if (animationComplete) {
      const interval = globalThis.setInterval(() => {
        setActiveIndex((current) => (current + 1) % heroImages.length)
      }, 5000)

      return () => globalThis.clearInterval(interval)
    } else {
      setTimeout(() => {
        setAnimationComplete(true)
      }, 3000)
    }
  }, [animationComplete])

  const getImageClassName = (modifier: string, index: number) =>
    [
      'hero__img',
      `hero__img--${modifier}`,
      index === activeIndex && animationComplete ? 'hero__img--active' : '',
    ]
      .filter(Boolean)
      .join(' ')

  return (
    <Section className='hero'>
      <div className='hero__text'>
        <h1>Hello,</h1>
        <h2>My name is Liam</h2>
        <h3>
          A <span>Frontend</span> Engineer
        </h3>
      </div>
      <LineBreak direction='vertical' />
      <div className='hero__images'>
        {heroImages.map((image, index) => (
          <img
            key={image.modifier}
            className={getImageClassName(image.modifier, index)}
            src={image.src}
            alt={image.alt}
          />
        ))}
      </div>
    </Section>
  )
}

export default Hero
