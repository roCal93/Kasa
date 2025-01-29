import React from 'react'
import { Link } from 'react-router'
import Dlogo from '../../assets/Dlogo.png'
import './styles.scss'

function Header() {
  return (
    <nav>
      <Link to="/">
        <img className="logo" src={Dlogo} />
      </Link>
      <Link to="/">Accueil</Link>
      <Link to="/about-us">A Propos</Link>
    </nav>
  )
}

export default Header
