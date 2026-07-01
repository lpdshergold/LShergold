import './Contact.scss'

const Contact = () => {
  return (
    <div className='contact'>
      <h2 className='contact__title'>Want to get into Contact?</h2>
      <span className='contact__subtitle'>Email me at:</span>
      <p className='contact__email'>
        <a href='mailto:liamshergold@hotmail.co.uk'>
          liamshergold@hotmail.co.uk
        </a>
      </p>
    </div>
  )
}

export default Contact
