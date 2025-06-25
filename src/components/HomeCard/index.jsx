import React from 'react'
import { kasaList } from '../../kasaList'
import { Link } from 'react-router'
import ErrorMessage from '../errorMessage'

// Component that displays a card for each element in the list
const HomeCard = () => {
  return (
    <div>
      <div className="cardContainer">
        <ul className="cardList">
          {kasaList && kasaList.length > 0 ? (
            kasaList.map((card) => (
              <Link
                to={`housing-page/${card.id}`}
                className="card"
                key={card.id}
              >
                <article>
                  <img src={card.cover} alt={card.title} />
                  <h3>{card.title}</h3>
                </article>
              </Link>
            ))
          ) : (
            <ErrorMessage message="Aucune annonce disponible pour le moment." />
          )}
        </ul>
      </div>
    </div>
  )
}

export default HomeCard
