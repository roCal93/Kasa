import React from 'react'
import { Link, NavLink } from 'react-router'
import logo from '../../assets/logo.png'

// Component that displays the header with the navigation menu
function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="Logo Kasa" />
      </Link>
      <nav className="header__nav">
        <NavLink className="header__link" to="/">
          Accueil
        </NavLink>
        <NavLink className="header__link" to="/about-us">
          A Propos
        </NavLink>
      </nav>
    </div>
  )
}

export default Header
