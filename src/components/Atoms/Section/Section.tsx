import './Section.scss'

type SectionProps = React.HTMLAttributes<'section'>

const Section = ({ children, className, id }: SectionProps) => {
  return (
    <section
      id={id}
      className={['section', className].filter(Boolean).join(' ')}
    >
      {children}
    </section>
  )
}

export default Section
