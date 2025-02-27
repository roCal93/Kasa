import React from 'react'
import { Link } from 'react-router'

const NotFound = () => {
  return (
    <div className="notFound">
      <h1 className="notFound__title">404</h1>
      <h2 className="notFound__message">
        Oups! La page que <br className="notFound__message--mobile" />
        vous demandez n'existe pas.
      </h2>
      <Link className="notFound__link" to="/">
        Retourner sur la page d'accueil
      </Link>
    </div>
  )
}

export default NotFound
