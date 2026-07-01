import { useState } from 'react'
import Section from '../Atoms/Section/Section'
import './Career.scss'

interface CareerData {
  company: string
  position: {
    role: string
    date: string
    description: string
  }[]
}

const careerData: CareerData[] = [
  {
    company: '15gifts',
    position: [
      {
        role: 'Frontend Developer',
        date: 'November 2022 - June 2026',
        description:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid ea quia aut error veniam ipsum eveniet dolore delectus placeat. Impedit beatae placeat eum distinctio, soluta vel architecto est eligendi aliquam sunt hic ab! Cum similique reiciendis maxime dolore nulla possimus optio laborum, iure pariatur enim ducimus libero nisi, porro accusamus necessitatibus officia atque quaerat repudiandae beatae provident, id autem hic minus. Dolore reiciendis quod consectetur sed aliquid quis labore velit, unde saepe quisquam aspernatur dolorum ab ducimus repellat blanditiis amet qui, harum nihil quia mollitia. Eum corporis assumenda dolorum, maiores excepturi aperiam repudiandae, eaque labore doloribus culpa molestiae voluptas tempora.',
      },
      {
        role: 'Junior Developer',
        date: 'July 2019 - November 2022',
        description:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid ea quia aut error veniam ipsum eveniet dolore delectus placeat. Impedit beatae placeat eum distinctio, soluta vel architecto est eligendi aliquam sunt hic ab! Cum similique reiciendis maxime dolore nulla possimus optio laborum, iure pariatur enim ducimus libero nisi, porro accusamus necessitatibus officia atque quaerat repudiandae beatae provident, id autem hic minus. Dolore reiciendis quod consectetur sed aliquid quis labore velit, unde saepe quisquam aspernatur dolorum ab ducimus repellat blanditiis amet qui, harum nihil quia mollitia. Eum corporis assumenda dolorum, maiores excepturi aperiam repudiandae, eaque labore doloribus culpa molestiae voluptas tempora.',
      },
    ],
  },
  {
    company: 'NHS',
    position: [
      {
        role: 'Payroll Officer',
        date: 'October 2015 - July 2017',
        description:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid ea quia aut error veniam ipsum eveniet dolore delectus placeat. Impedit beatae placeat eum distinctio, soluta vel architecto est eligendi aliquam sunt hic ab! Cum similique reiciendis maxime dolore nulla possimus optio laborum, iure pariatur enim ducimus libero nisi, porro accusamus necessitatibus officia atque quaerat repudiandae beatae provident, id autem hic minus. Dolore reiciendis quod consectetur sed aliquid quis labore velit, unde saepe quisquam aspernatur dolorum ab ducimus repellat blanditiis amet qui, harum nihil quia mollitia. Eum corporis assumenda dolorum, maiores excepturi aperiam repudiandae, eaque labore doloribus culpa molestiae voluptas tempora.',
      },
    ],
  },
]

const Career = () => {
  const [expandedCompany, setExpandedCompany] = useState<string | null>(null)

  const handleAccordion = (company: string) => {
    setExpandedCompany((currentCompany) =>
      currentCompany === company ? null : company,
    )
  }

  return (
    <Section
      id='career'
      className='career'
    >
      <div className='career__container'>
        <h2 className='career__title'>Career</h2>
        <div className='career__container-job'>
          {careerData.map((job) => {
            return (
              <div
                className='career__accordion'
                key={job.company}
              >
                <button
                  className='career__accordion-btn'
                  onClick={() => handleAccordion(job.company)}
                  aria-expanded={expandedCompany === job.company}
                  aria-controls={`career__accordion-${job.company.toLowerCase()}`}
                >
                  <span>{job.company}</span>
                  <div className='career__accordion-arrow'>
                    <i className='fa-solid fa-angle-down'></i>
                  </div>
                </button>
                {job.position.map((position) => {
                  return (
                    <div
                      className={`career__accordion-panel ${expandedCompany === job.company ? 'career__accordion-panel--active' : ''}`}
                      id={`career__accordion-${job.company.toLowerCase()}`}
                      key={position.role}
                    >
                      <h3 className='career__accordion-panel--title'>
                        {position.role}
                      </h3>
                      <span className='career__accordion-panel--date'>
                        {position.date}
                      </span>
                      <p className='career__accordion-panel--description'>
                        {position.description}
                      </p>
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}

export default Career
