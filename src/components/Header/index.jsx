import React, { useState } from 'react'
import { Link } from 'react-router'
import Dlogo from '../../assets/Dlogo.png'

function Header() {
  const [isActive, setActive] = useState(true)
  const AboutUsBorder = () => {
    setActive(false)
    setInactive(false)
  }
  const [isInactive, setInactive] = useState(true)
  const HomepageBorder = () => {
    setInactive(true)
    setActive(true)
  }

  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={Dlogo} onClick={HomepageBorder} />
      </Link>
      <nav className="header__nav">
        <Link
          className={isInactive ? 'header__link active' : 'header__link'}
          to="/"
          onClick={HomepageBorder}
        >
          Accueil
        </Link>
        <Link
          className={isActive ? 'header__link ' : 'header__link  active'}
          to="/about-us"
          onClick={AboutUsBorder}
        >
          A Propos
        </Link>
      </nav>
    </div>
  )
}

export default Header
