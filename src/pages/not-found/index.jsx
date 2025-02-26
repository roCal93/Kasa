import React from 'react'
import { Link } from 'react-router'

const NotFound = () => {
  return (
    <div className="notFound">
      <h1 className="notFound_title">404</h1>
      <h2 className="notFound_message">
        Oups! La page que vous demandez n'existe pas.
      </h2>
      <Link className="notFound_link" to="/">
        Retouner sur la page d'accueil
      </Link>
    </div>
  )
}

export default NotFound
