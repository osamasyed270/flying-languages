import React from 'react'
import Logo from '../assets/images/logo.svg'
import LogoText from '../assets/images/logo-text.svg'

function Header() {
  return (
    <header className="header">
        <a href="" className="logo">
            <img className='logo-img' src={Logo} alt="" />
            <img className='logo-text-img' src={LogoText} alt="" />
        </a>

        <a href="#" className="login-btn">Log In</a>
    </header>
  )
}

export default Header