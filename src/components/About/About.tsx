import Section from '../Atoms/Section/Section'
import LineBreak from '../Atoms/LineBreak/LineBreak'
import './About.scss'

// const skils = [
//   {
//     name: 'React',
//   },
// ]

const About = () => {
  return (
    <Section
      id='about'
      className='about'
    >
      <div className='about__me'>
        <div className='about__title'>
          <h3>About me</h3>
        </div>
        <div className='about__copy'>
          <p>
            Frontend Developer with 7 years of professional experience
            specializing in React, TypeScript, and JavaScript and skilled in
            building scalable user interfaces using Redux, HTML, and CSS. A
            Proven track record of delivering new features, maintaining and
            improving legacy codebases, and implementing efficient development
            processes. Currently contributing to a Guided Selling Engine and AI
            sales agent at 15gifts/Humara, supporting high-profile clients
            across Europe and the US. <br />
            <br />A first class honours graduate of the University of Brighton,
            studying BSc (Hons) Digital Games Development.
            <br />
            <br />
            Prior to taking up further studies, I worked within the Salisbury
            NHS, as an outsourced payroll officer for the Royal Bournemouth and
            Christchurch Hospital.
          </p>
        </div>
      </div>
      <LineBreak direction='vertical' />
      <i className='fa-brands fa-react'></i>
    </Section>
  )
}

export default About
