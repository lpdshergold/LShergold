import React from 'react'
import logo from '../../assets/ls_logo.svg'

import './Nav.scss'

const Nav = () => {
  return (
    <nav className='nav'>
      <img
        className='nav__logo'
        src={logo}
        alt='Liam Shergold logo'
      />
      <div className='nav__buttons'>
        <button className='nav__button'>About</button>
        <button className='nav__button'>Career</button>
        <button className='nav__button'>Projects</button>
      </div>
    </nav>
  )
}

export default Nav
