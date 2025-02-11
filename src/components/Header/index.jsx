import React, { useState } from 'react'
import { Link, NavLink } from 'react-router'
import Dlogo from '../../assets/Dlogo.png'

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={Dlogo} />
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
