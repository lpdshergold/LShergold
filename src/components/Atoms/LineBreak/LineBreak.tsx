import './LineBreak.scss'

interface LineBreakProps {
  direction: 'horizontal' | 'vertical'
}

const LineBreak = ({ direction }: LineBreakProps) => {
  return <hr className={`line-break__${direction}`} />
}

export default LineBreak
