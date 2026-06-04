import './Section.scss'

type SectionProps = React.HTMLAttributes<'section'>

const Section = ({ children, className }: SectionProps) => {
  return (
    <section className={`wrapper-section ${className ?? ''}`}>
      {children}
    </section>
  )
}

export default Section
