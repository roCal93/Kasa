import React from 'react'
import DlogoFooter from '../../assets/DlogoFooter.png'

const Footer = () => {
  return (
    <footer className="footer">
      <img className="footer__logo" src={DlogoFooter} />
      <h2 className="footer__text">© 2020 Kasa. All rights reserved</h2>
    </footer>
  )
}

export default Footer
