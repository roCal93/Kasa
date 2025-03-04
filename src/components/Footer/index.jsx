import React from 'react'
import logoFooter from '../../assets/logoFooter.png'

// Component that displays the footer
const Footer = () => {
  return (
    <footer className="footer">
      <img className="footer__logo" src={logoFooter} alt="Logo Kasa" />
      <p className="footer__text">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
