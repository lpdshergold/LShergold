import logo from '../../assets/ls_logo.svg'
import scrollIntoView from '../../utils/scrollIntoView/scrollIntoView'

import './Nav.scss'

const Nav = () => {
  return (
    <nav
      className='nav'
      id='nav'
    >
      <img
        className='nav__logo'
        src={logo}
        alt='Liam Shergold logo'
      />
      <div className='nav__buttons'>
        <button
          onClick={() => scrollIntoView('about')}
          className='nav__button'
        >
          About
        </button>
        <button
          onClick={() => scrollIntoView('career')}
          className='nav__button'
        >
          Career
        </button>
        <button
          onClick={() => scrollIntoView('project')}
          className='nav__button'
        >
          Projects
        </button>
      </div>
    </nav>
  )
}

export default Nav
