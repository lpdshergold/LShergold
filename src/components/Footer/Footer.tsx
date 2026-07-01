import './Footer.scss'

const Footer = () => {
  return (
    <footer className='footer'>
      <a
        className='footer__link'
        href='https://github.com/lpdshergold'
        target='_blank'
        rel='noopener noreferrer'
      >
        <i className='fa-brands fa-github'></i>
      </a>
      <a
        className='footer__link'
        href='https://www.linkedin.com/in/liam-shergold-467a84151'
        target='_blank'
        rel='noopener noreferrer'
      >
        <i className='fa-brands fa-linkedin'></i>
      </a>
    </footer>
  )
}

export default Footer
