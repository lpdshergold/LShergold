import React from 'react'
import logo from '../../assets/ls_logo.svg'

import './Nav.scss'

const Nav = () => {
  return (
    <nav className='nav-wrapper'>
      <img
        className='logo'
        src={logo}
        alt='Liam Shergold logo'
      />
      <div className='nav-buttons'>
        <button>About</button>
        <button>Career</button>
        <button>Projects</button>
      </div>
    </nav>
  )
}

export default Nav
