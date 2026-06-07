import './Section.scss'

type SectionProps = React.HTMLAttributes<'section'>

const Section = ({ children, className }: SectionProps) => {
  return (
    <section className={['section', className].filter(Boolean).join(' ')}>
      {children}
    </section>
  )
}

export default Section
