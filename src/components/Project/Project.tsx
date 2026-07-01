import Section from '../Atoms/Section/Section'

import './Project.scss'

const Project = () => {
  return (
    <Section
      id='project'
      className='project'
    >
      <h2 className='project__title'>Projects</h2>
      <div className='project__container'>
        <div className='box'>Box</div>
        <div className='box'>Box</div>
        <div className='box'>Box</div>
        <div className='box'>Box</div>
      </div>
    </Section>
  )
}

export default Project
